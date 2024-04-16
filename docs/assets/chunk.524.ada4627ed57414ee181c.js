var __ember_auto_import__;(()=>{var e={81:(e,t,r)=>{"use strict"
function n(e,t,r){return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e
var n}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function o(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>o,a:()=>i,b:()=>n})},601:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>p})
var n=r(81),i=r(735),o=r(336),s=r.n(o)
const u=require("@ember/object/internals")
var l,a,c
let p=(l=(0,i.inject)("page-title"),a=class extends(s()){constructor(e){super(e),(0,n.a)(this,"tokens",c,this),(0,n.b)(this,"tokenId",(0,u.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},c=(0,n._)(a.prototype,"tokens",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)},628:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>v})
var n=r(81)
const i=require("@ember/runloop")
var o=r(735),s=r.n(o),u=r(553)
const l=require("@ember/debug")
var a,c,p,d,h
const f="undefined"!=typeof FastBoot,b="routeDidChange",m=["separator","prepend","replace"]
let v=(a=(0,o.inject)("router"),c=(0,o.inject)("-document"),p=class extends(s()){constructor(e){if(super(e),(0,n.a)(this,"router",d,this),(0,n.a)(this,"document",h,this),(0,n.b)(this,"tokens",[]),(0,n.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,n.b)(this,"scheduleTitleUpdate",(()=>{(0,i.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const r=e.resolveRegistration("config:environment")
"object"==typeof(t=r)&&null!==t&&"pageTitle"in t&&m.forEach((e=>{if(!(0,u.isEmpty)(r.pageTitle[e])){const t=r.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(b,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,r=this._defaultConfig.prepend,n=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=n&&(e.replace=n)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const r=this.tokens.indexOf(t),n=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),n.splice(r,1,e),void(this.tokens=n)}const r=this.tokens.slice(-1)[0]
r&&(e.previous=r??null,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:r,previous:n}=t
r&&(r.previous=n),n&&(n.next=r),t.previous=t.next=null
const i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const r=[]
for(;t--;){const n=e[t]
if(n){if(n.replace){r.unshift(n)
break}r.unshift(n)}}return r}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,r=[]
const n=[r],i=[]
return e.forEach((e=>{if(e.front)i.unshift(e)
else if(e.prepend){t&&(t=!1,r=[],n.push(r))
const i=r[0]
i&&((e={...e}).separator=i.separator),r.unshift(e)}else t||(t=!0,r=[],n.push(r)),r.push(e)})),i.concat(n.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let r=0,n=e.length;r<n;r++){const i=e[r]
i&&i.title&&(t.push(i.title),r+1<n&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(b,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
f?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){f||(0,l.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!f)return
const t=this.document.head,r=t.childNodes
for(let o=0;o<r.length;o++){const e=r[o]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const n=this.document.createElement("title"),i=this.document.createTextNode(e)
n.appendChild(i),t.appendChild(n)}titleDidUpdate(e){}},d=(0,n._)(p.prototype,"router",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=(0,n._)(p.prototype,"document",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p)},24:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(336),i=r.n(n),o=r(670)
class s extends(i()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!1===(0,o.A)(e[t]))return e[t]
return e[e.length-1]}}},651:(e,t,r)=>{"use strict"
function n(e,t){return e===t}r.r(t),r.d(t,{default:()=>n})},650:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}r.r(t),r.d(t,{default:()=>n})},379:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}r.r(t),r.d(t,{default:()=>n})},770:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(389)
function i(...e){return e.every(n.isArray)}},941:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEmpty})
var n=r(553)},88:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEqual})
var n=r(553)},685:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}r.r(t),r.d(t,{default:()=>n})},230:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}r.r(t),r.d(t,{default:()=>n})},943:(e,t,r)=>{"use strict"
function n(e,t){return e!==t}r.r(t),r.d(t,{default:()=>n})},692:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(670)
function i(...e){return e.every((e=>!(0,n.A)(e)))}},588:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(670),i=r(336),o=r.n(i)
class s extends(o()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!0===(0,n.A)(e[t]))return e[t]
return e[e.length-1]}}},456:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(670)
function i(e,t){return(0,n.A)(e)!==(0,n.A)(t)}},670:(e,t,r)=>{"use strict"
r.d(t,{A:()=>i})
var n=r(389)
function i(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,n.isArray)(e)?0!==e.length:!!e}},389:e=>{"use strict"
e.exports=require("@ember/array")},336:e=>{"use strict"
e.exports=require("@ember/component/helper")},735:e=>{"use strict"
e.exports=require("@ember/service")},553:e=>{"use strict"
e.exports=require("@ember/utils")},726:(e,t,r)=>{e.exports=function(){var e=_eai_d,t=_eai_r
function n(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?t("_eai_dyn_"+e):t("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return t("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper"],(function(){return n(r(601))})),e("ember-page-title/services/page-title",["@ember/service","@ember/utils"],(function(){return n(r(628))})),e("ember-truth-helpers/helpers/and",["@ember/component/helper","@ember/array"],(function(){return n(r(24))})),e("ember-truth-helpers/helpers/eq",[],(function(){return n(r(651))})),e("ember-truth-helpers/helpers/gt",[],(function(){return n(r(650))})),e("ember-truth-helpers/helpers/gte",[],(function(){return n(r(379))})),e("ember-truth-helpers/helpers/is-array",["@ember/array"],(function(){return n(r(770))})),e("ember-truth-helpers/helpers/is-empty",["@ember/utils"],(function(){return n(r(941))})),e("ember-truth-helpers/helpers/is-equal",["@ember/utils"],(function(){return n(r(88))})),e("ember-truth-helpers/helpers/lt",[],(function(){return n(r(685))})),e("ember-truth-helpers/helpers/lte",[],(function(){return n(r(230))})),e("ember-truth-helpers/helpers/not",["@ember/array"],(function(){return n(r(692))})),e("ember-truth-helpers/helpers/not-eq",[],(function(){return n(r(943))})),e("ember-truth-helpers/helpers/or",["@ember/array","@ember/component/helper"],(function(){return n(r(588))})),e("ember-truth-helpers/helpers/xor",["@ember/array"],(function(){return n(r(456))}))}()},979:function(e,t){window._eai_r=require,window._eai_d=define}},t={}
function r(n){var i=t[n]
if(void 0!==i)return i.exports
var o=t[n]={exports:{}}
return e[n].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(979)
var n=r(726)
__ember_auto_import__=n})()
