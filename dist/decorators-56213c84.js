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
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function t(t){return(r,i)=>void 0!==i?((e,t,r)=>{t.constructor.createProperty(r,e)})(t,r,i):e(t,r)}function r(e,t){return(r,n)=>{const c={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t=void 0!==n?n:r.key,i="symbol"==typeof t?Symbol():`__${t}`;c.get=function(){return void 0===this[i]&&(this[i]=this.renderRoot.querySelector(e)),this[i]}}return void 0!==n?i(c,r,n):o(c,r)}}const i=(e,t,r)=>{Object.defineProperty(t,r,e)},o=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});export{t as p,r as q};
