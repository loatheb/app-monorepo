/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/require-await, max-classes-per-file */
import memoizee from 'memoizee';

import { getTimeDurationMs } from '@onekeyhq/kit/src/utils/helper';
import { IMPL_DOT, SEPERATOR } from '@onekeyhq/shared/src/engine/engineConsts';
import platformEnv from '@onekeyhq/shared/src/platformEnv';

import { NotImplemented } from '../errors';
import {
  getWalletIdFromAccountId,
  isAccountCompatibleWithNetwork,
} from '../managers/account';
import { fromDBNetworkToChainInfo } from '../proxy';
import { AccountType } from '../types/account';

import type { BaseClient } from '../client/BaseClient';
import type { Engine } from '../index';
import type { DBAccount, DBVariantAccount } from '../types/account';
import type { Network } from '../types/network';
import type { IVaultFactoryOptions, IVaultOptions } from './types';

export class VaultContextBase {
  constructor(options: IVaultFactoryOptions) {
    this.options = options;
    this.networkId = options.networkId || '';
    this.accountId = options.accountId || '';
    this.walletId =
      options.walletId ||
      (this.accountId ? getWalletIdFromAccountId(this.accountId) : 'watching');
  }

  options: IVaultFactoryOptions;

  networkId: string; // "evm--97"

  walletId: string;

  accountId: string; // "hd-1--m/44'/60'/0'/0/0"

  async getNetworkChainId() {
    const [impl, chainId] = this.networkId.split(SEPERATOR);
    return chainId;
  }

  async getNetworkImpl() {
    const [impl, chainId] = this.networkId.split(SEPERATOR);
    return impl;
  }
}

export class VaultContext extends VaultContextBase {
  constructor(options: IVaultOptions) {
    super(options);
    this.options = options;
    this.engine = options.engine;
    if (platformEnv.isExtensionUi) {
      throw new Error(
        "Vault can NOT be initialized in UI, it's Background Class only. But you can use VaultHelper in UI.",
      );
    }
  }

  override options: IVaultOptions;

  engine: Engine;

  _dbAccount!: DBAccount;

  getClientFromCache = memoizee(
    async (rpcUrl) => this.getClientFactory(rpcUrl),
    {
      promise: true,
      max: 1,
      maxAge: getTimeDurationMs({ minute: 3 }),
    },
  );

  // TODO resetCache after dbAccount and network DB updated

  async getDbAccount(params?: { noCache?: boolean }) {
    const { noCache } = { noCache: false, ...params };
    if (noCache || !this._dbAccount || this._dbAccount.id !== this.accountId) {
      this._dbAccount = await this.engine.dbApi.getAccount(this.accountId);
    }

    let { address, type } = this._dbAccount;
    if (
      type === AccountType.VARIANT &&
      isAccountCompatibleWithNetwork(this.accountId, this.networkId)
    ) {
      address = await this.addressFromBase(this._dbAccount);
    }

    return {
      ...this._dbAccount,
      address,
    };
  }

  async getAccountPath() {
    return (await this.getDbAccount()).path;
  }

  async getAccountAddress() {
    return (await this.getDbAccount()).address;
  }

  async addressFromBase(account: DBAccount): Promise<string> {
    throw new NotImplemented();
  }

  async addressToBase(address: string): Promise<string> {
    throw new NotImplemented();
  }

  _network!: Network;

  async getNetwork({ cached }: { cached?: boolean } = {}) {
    if (!cached || !this._network || this._network.id !== this.networkId) {
      this._network = await this.engine.getNetwork(this.networkId);
    }
    return this._network;
  }

  async getChainInfo() {
    const network = await this.getNetwork();
    const dbNetwork = await this.engine.dbApi.getNetwork(network.id);
    return fromDBNetworkToChainInfo(dbNetwork);
  }

  async getRpcUrl() {
    return (await this.getNetwork({ cached: false })).rpcURL;
  }

  // TODO: Need to be modified to an abstract class
  getClientFactory(url: string): BaseClient {
    throw new NotImplemented('need to be implemented getSDKClient');
  }

  async getSDKClient<T extends BaseClient>(url?: string): Promise<T> {
    const rpcURL = await this.getRpcUrl();
    return this.getClientFromCache(url ?? rpcURL) as Promise<T>;
  }

  async getClientApi<T>() {
    return (await this.getNetwork({ cached: false })).clientApi as T;
  }

  async destroy() {
    // Do nothing
  }
}
