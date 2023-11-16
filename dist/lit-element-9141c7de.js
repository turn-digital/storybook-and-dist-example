/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 * 
 * This bundle contains the following third-party dependencies:
 * 
 * lit-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * flatpickr:
 * 
 flatpickr v4.6.1, @license MIT
 * 
 * lit-html:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @lit/reactive-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @carbon/layout:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Also refer to the following links for the license of other third-party dependencies:
 * 
 * https://www.npmjs.com/package/lit
 * https://www.npmjs.com/package/@carbon/icons
 * https://www.npmjs.com/package/lodash-es
 */

function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function e(e){return function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,i){if(e){if("string"==typeof e)return t(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,i):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var s=r.call(t,e||"default");if("object"!==i(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}function s(t,e,i,r){var s=n();if(r)for(var c=0;c<r.length;c++)s=r[c](s);var d=e((function(t){s.initializeInstanceElements(t,u.elements)}),i),u=s.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===n.key&&t.placement===n.placement},r=0;r<t.length;r++){var s,n=t[r];if("method"===n.kind&&(s=e.find(i)))if(h(n.descriptor)||h(s.descriptor)){if(a(n)||a(s))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");s.descriptor=n.descriptor}else{if(a(n)){if(a(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");s.decorators=n.decorators}l(n,s)}else e.push(n)}return e}(d.d.map(o)),t);return s.initializeClassElements(d.F,u.elements),s.runClassFinishers(d.F,u.finishers)}function n(){n=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var s=e.placement;if(e.kind===r&&("static"===s||"prototype"===s)){var n="static"===s?t:i;this.defineClassElement(n,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var r=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],r=[],s={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,s)}),this),t.forEach((function(t){if(!a(t))return i.push(t);var e=this.decorateElement(t,s);i.push(e.element),i.push.apply(i,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:i,finishers:r};var n=this.decorateConstructor(i,e);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(t,e,i){var r=e[t.placement];if(!i&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var i=[],r=[],s=t.decorators,n=s.length-1;n>=0;n--){var o=e[t.placement];o.splice(o.indexOf(t.key),1);var l=this.fromElementDescriptor(t),a=this.toElementFinisherExtras((0,s[n])(l)||l);t=a.element,this.addElementPlacement(t,e),a.finisher&&r.push(a.finisher);var h=a.extras;if(h){for(var c=0;c<h.length;c++)this.addElementPlacement(h[c],e);i.push.apply(i,h)}}return{element:t,finishers:r,extras:i}},decorateConstructor:function(t,e){for(var i=[],r=e.length-1;r>=0;r--){var s=this.fromClassDescriptor(t),n=this.toClassDescriptor((0,e[r])(s)||s);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){t=n.elements;for(var o=0;o<t.length-1;o++)for(var l=o+1;l<t.length;l++)if(t[o].key===t[l].key&&t[o].placement===t[l].placement)throw new TypeError("Duplicated element ("+t[o].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){if(void 0!==t)return e(t).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=r(t.key),s=String(t.placement);if("static"!==s&&"prototype"!==s&&"own"!==s)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+s+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:i,placement:s,descriptor:Object.assign({},n)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:c(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=c(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var r=(0,e[i])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function o(t){var e,i=r(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var s={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(s.decorators=t.decorators),"field"===t.kind&&(s.initializer=t.value),s}function l(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function a(t){return t.decorators&&t.decorators.length}function h(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function c(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=window,u=d.ShadowRoot&&(void 0===d.ShadyCSS||d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),f=new WeakMap;class v{constructor(t,e,i){if(this._$cssResult$=!0,i!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(u&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=f.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&f.set(e,t))}return t}toString(){return this.cssText}}const m=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new v(i,t,p)},y=u?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new v("string"==typeof t?t:t+"",void 0,p))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var $;const _=window,A=_.trustedTypes,g=A?A.emptyScript:"",E=_.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>e!==t&&(e==e||t==t),S={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w};class C extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||S}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(y(t))}else void 0!==t&&e.push(y(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{u?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=d.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=S){var r;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:b).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,s=r._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=r.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:b;this._$El=s,this[s]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||w)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k;C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},null==E||E({ReactiveElement:C}),(null!==($=_.reactiveElementVersions)&&void 0!==$?$:_.reactiveElementVersions=[]).push("1.6.1");const P=window,x=P.trustedTypes,T=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,H="?"+O,D=`<${H}>`,N=document,R=()=>N.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,j="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,B=/>/g,F=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,W=/"/g,q=/^(?:script|style|textarea|title)$/i,J=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),K=J(1),Z=J(2),G=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),X=new WeakMap,Y=N.createTreeWalker(N,129,null,!1),tt=(t,e)=>{const i=t.length-1,r=[];let s,n=2===e?"<svg>":"",o=I;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,a=o.exec(i),null!==a);)c=o.lastIndex,o===I?"!--"===a[1]?o=L:void 0!==a[1]?o=B:void 0!==a[2]?(q.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=F):void 0!==a[3]&&(o=F):o===F?">"===a[0]?(o=null!=s?s:I,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?F:'"'===a[3]?W:V):o===W||o===V?o=F:o===L||o===B?o=I:(o=F,s=void 0);const d=o===F&&t[e+1].startsWith("/>")?" ":"";n+=o===I?i+D:h>=0?(r.push(l),i.slice(0,h)+U+i.slice(h)+O+d):i+O+(-2===h?(r.push(void 0),e):d)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==T?T.createHTML(l):l,r]};class et{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const o=t.length-1,l=this.parts,[a,h]=tt(t,e);if(this.el=et.createElement(a,i),Y.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=Y.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(U)||e.startsWith(O)){const i=h[n++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+U).split(O),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?ot:"?"===e[1]?at:"@"===e[1]?ht:nt})}else l.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(q.test(r.tagName)){const t=r.textContent.split(O),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],R()),Y.nextNode(),l.push({type:2,index:++s});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===H)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(O,t+1));)l.push({type:7,index:s}),t+=O.length-1}s++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function it(t,e,i=t,r){var s,n,o,l;if(e===G)return e;let a=void 0!==r?null===(s=i._$Co)||void 0===s?void 0:s[r]:i._$Cl;const h=z(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,r)),void 0!==r?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[r]=a:i._$Cl=a),void 0!==a&&(e=it(t,a._$AS(t,e.values),a,r)),e}class rt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:N).importNode(i,!0);Y.currentNode=s;let n=Y.nextNode(),o=0,l=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new st(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ct(n,this,t)),this.u.push(e),a=r[++l]}o!==(null==a?void 0:a.index)&&(n=Y.nextNode(),o++)}return s}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class st{constructor(t,e,i,r){var s;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cm=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),z(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==G&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==Q&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=et.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new rt(s,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new et(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new st(this.S(R()),this.S(R()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class nt{constructor(t,e,i,r,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(void 0===s)t=it(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==G,n&&(this._$AH=t);else{const r=t;let o,l;for(t=s[0],o=0;o<s.length-1;o++)l=it(this,r[i+o],e,o),l===G&&(l=this._$AH[o]),n||(n=!z(l)||l!==this._$AH[o]),l===Q?t=Q:t!==Q&&(t+=(null!=l?l:"")+s[o+1]),this._$AH[o]=l}n&&!r&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ot extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}const lt=x?x.emptyScript:"";class at extends nt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Q?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class ht extends nt{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=it(this,t,e,0))&&void 0!==i?i:Q)===G)return;const r=this._$AH,s=t===Q&&r!==Q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==Q&&(r===Q||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ct{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const dt=P.litHtmlPolyfillSupport;null==dt||dt(et,st),(null!==(k=P.litHtmlVersions)&&void 0!==k?k:P.litHtmlVersions=[]).push("2.7.0");const ut=(t,e,i)=>{var r,s;const n=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let o=n._$litPart$;if(void 0===o){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=o=new st(e.insertBefore(R(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var pt,ft;class vt extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return G}}vt.finalized=!0,vt._$litElement$=!0,null===(pt=globalThis.litElementHydrateSupport)||void 0===pt||pt.call(globalThis,{LitElement:vt});const mt=globalThis.litElementPolyfillSupport;null==mt||mt({LitElement:vt}),(null!==(ft=globalThis.litElementVersions)&&void 0!==ft?ft:globalThis.litElementVersions=[]).push("3.3.0");export{Q as A,ut as B,G as T,s as _,r as a,Z as b,m as i,vt as s,K as x};