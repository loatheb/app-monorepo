"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[48878],{250766:(t,e,r)=>{r.r(e),r.d(e,{KeyringHardware:()=>c});var n=r(887371),i=r(545754),o=r(411987),u=r(695058);function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.default)(this,r)}}var c=function(t){(0,i.default)(r,t);var e=a(r);function r(){return e.apply(this,arguments)}return(0,n.default)(r)}(r(479480).KeyringHardware)},66176:(t,e,r)=>{r.r(e),r.d(e,{KeyringHd:()=>A});var n=r(968079),i=r(634795),o=r(887371),u=r(545754),a=r(411987),c=r(695058),f=r(36832),s=r(344075),l=r.n(s),p=r(605851),d=r(111365),y=r(613549),h=r(940915),v=r(997293),g=r(278489),m=r(398145),P=r(16280),b=r(348834).Buffer;function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,c.default)(t);if(e){var i=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.default)(this,r)}}var A=function(t){(0,u.default)(r,t);var e=w(r);function r(){return e.apply(this,arguments)}return r.prototype.prepareAccounts=function(){var t=(0,i.default)((function*(t){var e=t.password,r=t.indexes,i=t.purpose,o=t.names,u=t.template,a=t.skipCheckAccountExist;(0,P.initBitcoinEcc)();var c=yield this.getNetworkImpl(),s=this.vault,d=s.getDefaultPurpose(),w=s.getCoinName(),A=s.getCoinType(),T=i||d,k=0!==r[0],x=[].concat((0,n.default)(k?[r[0]-1]:[]),(0,n.default)(r)),B=(0,P.getAccountDefaultByPurpose)(T,w).addressEncoding,R=(0,g.getAccountNameInfoByTemplate)(c,u).prefix,I=yield this.engine.dbApi.getCredential(this.walletId,e),C=I.seed,E=I.entropy,K=yield this.vault.getProvider(),O=K.network,S=(0,v.slicePathTemplate)(u).pathPrefix,$=(0,p.batchGetPublicKeys)("secp256k1",C,e,S,x.map((function(t){return`${t.toString()}'`})));if($.length!==x.length)throw new h.OneKeyInternalError("Unable to get publick key.");var N=((O.segwitVersionBytes||{})[B]||O.bip32).public,W=[],X=0,H=(0,p.mnemonicFromEntropy)(E,e),U=(0,P.getBitcoinBip32)().fromSeed((0,f.mnemonicToSeedSync)(H));for(var D of $){var _,F=D.path,M=D.parentFingerPrint,Y=D.extendedKey,z=U.derivePath(`${F}/0/0`),L=(0,P.getBitcoinECPair)().fromWIF(z.toWIF()),V=l().encode(b.concat([b.from(N.toString(16).padStart(8,"0"),"hex"),b.from([3]),M,b.from((x[X]+2**31).toString(16).padStart(8,"0"),"hex"),Y.chainCode,Y.key])),q="0/0",G=K.xpubToAddresses(V,[q],B)[q],j=[y.COINTYPE_DOGE,y.COINTYPE_BCH].includes(A)?w:R,J=(o||[])[X]||`${j} #${x[X]+1}`,Q=V;if((0,P.isTaprootPath)(S)){var Z=(0,p.generateRootFingerprint)("secp256k1",C,e);Q=`tr([${`${Number(b.from(Z).readUInt32BE(0)||0).toString(16).padStart(8,"0")}${F.substring(1)}`}]${V}/<0;1>/*)`}if(!k||X>0)W.push({id:`${this.walletId}--${F}`,name:J,type:m.AccountType.UTXO,path:F,coinType:A,pubKey:L.publicKey.toString("hex"),xpub:V,xpubSegwit:Q,address:G,addresses:(_={},_[q]=G,_),template:u});if(1===x.length)break;if(a)X+=1;else{if(!((yield K.getAccount({type:"simple",xpub:Q||V},B)).txs>0))break;X+=1,yield new Promise((function(t){return setTimeout(t,200)}))}}return W}));return function(e){return t.apply(this,arguments)}}(),(0,o.default)(r)}(d.KeyringHd)},729278:(t,e,r)=>{r.r(e),r.d(e,{KeyringImported:()=>w});var n=r(817620),i=r.n(n),o=r(968079),u=r(634795),a=r(887371),c=r(545754),f=r(411987),s=r(695058),l=r(344075),p=r.n(l),d=r(478557),y=r(602219),h=r(940915),v=r(398145),g=r(755074),m=r(16280),P=r(348834).Buffer;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,s.default)(t);if(e){var i=(0,s.default)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var w=function(t){(0,c.default)(r,t);var e=b(r);function r(){return e.apply(this,arguments)}return r.prototype.prepareAccounts=function(){var t=(0,u.default)((function*(t){var e;(0,m.initBitcoinEcc)();var r,n=t.privateKey,u=t.name,a=t.template,c=yield this.vault.getProvider(),f=this.vault.getCoinType(),s="",l="",y=c.network,b=parseInt(n.slice(0,4).toString("hex"),16),w=[].concat((0,o.default)(Object.values(i()(y.segwitVersionBytes,g.AddressEncodings.P2TR))),[y.bip32]);for(var A of w)if(A.private===b){var T=d.secp256k1.publicFromPrivate(n.slice(46,78)),k=P.from(A.public.toString(16).padStart(8,"0"),"hex");try{s=p().encode(n.fill(k,0,4).fill(T,45,78)),l=T.toString("hex")}catch(I){console.error(I)}}if(""===s)throw new h.OneKeyInternalError("Invalid private key.");var x=s;a&&(a.startsWith("m/44'/")?r=g.AddressEncodings.P2PKH:a.startsWith("m/86'/")?(r=g.AddressEncodings.P2TR,x=`tr(${s})`):r=void 0);var B="0/0",R=c.xpubToAddresses(s,[B],r)[B];return Promise.resolve([{id:`imported--${f}--${s}--${r===g.AddressEncodings.P2TR?"86'/":""}`,name:u||"",type:v.AccountType.UTXO,path:"",coinType:f,pubKey:l,xpub:s,xpubSegwit:x,address:R,addresses:(e={},e[B]=R,e)}])}));return function(e){return t.apply(this,arguments)}}(),(0,a.default)(r)}(y.KeyringImported)},127839:(t,e,r)=>{r.r(e),r.d(e,{KeyringWatching:()=>d});var n=r(634795),i=r(887371),o=r(545754),u=r(411987),a=r(695058),c=r(520173),f=r(940915),s=r(398145),l=r(755074);function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,a.default)(t);if(e){var i=(0,a.default)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,u.default)(this,r)}}var d=function(t){(0,o.default)(r,t);var e=p(r);function r(){return e.apply(this,arguments)}var u=r.prototype;return u.checkTargetXpubOrAddress=function(t){var e=t.target,r=t.provider,n=!0,i=!1;try{r.isValidXpub(e)||(n=!1)}catch(o){n=!1,console.error(o)}try{!n&&r.verifyAddress(e)&&(i=!0)}catch(o){i=!1,console.error(o)}if(!n&&!i)throw new f.InvalidAddress;return{isXpub:n,isAddress:i}},u.prepareAccounts=function(){var t=(0,n.default)((function*(t){var e;console.log("btcfork watching prepareAccount");var r,n=t.target,i=t.name,o=t.accountIdPrefix,u=t.template,a=yield this.vault.getProvider(),c=this.vault.getCoinType(),f=this.checkTargetXpubOrAddress({target:n,provider:a}),p=f.isXpub,d=f.isAddress,y=n;u&&p&&(u.startsWith("m/44'/")?r=l.AddressEncodings.P2PKH:u.startsWith("m/86'/")?(r=l.AddressEncodings.P2TR,y=`tr(${n})`):r=void 0);var h="0/0",v="";p?v=a.xpubToAddresses(n,[h],r)[h]:d&&(v=n);return[{id:`${o}--${c}--${n}--${r===l.AddressEncodings.P2TR?"86'/":""}`,name:i||"",type:s.AccountType.UTXO,path:"",coinType:c,xpub:p?n:"",xpubSegwit:p?y:"",address:v,addresses:(e={},e[h]=v,e)}]}));return function(e){return t.apply(this,arguments)}}(),(0,i.default)(r)}(c.KeyringWatching)},748878:(t,e,r)=>{r.r(e),r.d(e,{default:()=>P});var n=r(634795),i=r(887371),o=r(545754),u=r(411987),a=r(695058),c=r(690350),f=r(613549),s=r(997293),l=r(278489),p=r(250766),d=r(66176),y=r(729278),h=r(127839),v=r(613722),g=r(666574);function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,a.default)(t);if(e){var i=(0,a.default)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,u.default)(this,r)}}var P=function(t){(0,o.default)(r,t);var e=m(r);function r(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).providerClass=v.default,t.keyringMap={hd:d.KeyringHd,hw:p.KeyringHardware,imported:y.KeyringImported,watching:h.KeyringWatching,external:h.KeyringWatching},t.settings=g.default,t}var u=r.prototype;return u.getDefaultPurpose=function(){return(0,s.getDefaultPurpose)(f.IMPL_BTC)},u.getCoinName=function(){return"BTC"},u.getCoinType=function(){return f.COINTYPE_BTC},u.getXprvReg=function(){return/^([xyz]prv)/},u.getXpubReg=function(){return/^([xyz]pub)/},u.getDefaultBlockNums=function(){return[25,5,1]},u.getDefaultBlockTime=function(){return 600},u.getAccountXpub=function(t){return t.xpubSegwit||t.xpub},u.canAutoCreateNextAccount=function(){var t=(0,n.default)((function*(t){var e=yield this.engine.getWallet(this.walletId),r=yield this.getAccountNameInfoMap();if("hd"!==e.type)return!1;var n=(0,s.getDefaultPurpose)(f.IMPL_BTC),i=r.default.template,o=e.nextAccountIds[i]||0,u=yield this.keyring.prepareAccounts({type:"SEARCH_ACCOUNTS",password:t,indexes:[o],purpose:n,coinType:f.COINTYPE_BTC,template:i});return yield this.checkAccountExistence((null==u?void 0:u[0]).xpub)}));return function(e){return t.apply(this,arguments)}}(),u.getAccountNameInfosByImportedOrWatchingCredential=function(){var t=(0,n.default)((function*(t){if(t.startsWith("xpub")||t.startsWith("xprv")){var e=(0,l.getAccountNameInfoByImpl)(f.IMPL_BTC);return Promise.resolve([e.BIP86,e.BIP44])}return Promise.resolve([])}));return function(e){return t.apply(this,arguments)}}(),(0,i.default)(r)}(c.default)},613722:(t,e,r)=>{r.r(e),r.d(e,{default:()=>m,tweakSigner:()=>g});var n=r(196234),i=r(634795),o=r(887371),u=r(545754),a=r(411987),c=r(695058),f=r(376314),s=r(797376),l=r(396564),p=r(882914),d=r(605415),y=r(16280),h=r(348834).Buffer;function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,c.default)(t);if(e){var i=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.default)(this,r)}}function g(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new Uint8Array(t.buffer);if(!n)throw new Error("Private key is required for tweaking signer!");if(3===e[0]&&(n=d.default.privateNegate(n)),!n)throw new Error("Private key is required for tweaking signer!");var i,o,u=d.default.privateAdd(n,(i=(0,s.toXOnly)(e),o=r.tweakHash,f.crypto.taggedHash("TapTweak",h.concat(o?[i,o]:[i]))));if(!u)throw new Error("Invalid tweaked private key!");return(0,y.getBitcoinECPair)().fromPrivateKey(h.from(u),{network:r.network})}var m=function(t){(0,u.default)(r,t);var e=v(r);function r(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).getUTXOs=(0,l.memoizee)(function(){var e=(0,i.default)((function*(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.blockbook.then((function(n){return n.getUTXOsFromBackendApi({xpub:e,impl:t.chainInfo.impl,options:r})}))}));return function(t){return e.apply(this,arguments)}}(),{promise:!0,max:1,maxAge:3e4}),t}return r.prototype.getBitcoinSigner=function(){var t=(0,i.default)((function*(t,e){var r=yield t.getPubkey(!0);return e.tapInternalKey?g(yield t.getPrvkey(),r,{network:this.network}):{publicKey:r,sign:function(){var e=(0,i.default)((function*(e){var r=yield t.sign(e);return(0,n.default)(r,1)[0]}));return function(t){return e.apply(this,arguments)}}()}}));return function(e,r){return t.apply(this,arguments)}}(),(0,o.default)(r)}(p.Provider)}}]);