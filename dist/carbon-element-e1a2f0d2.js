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
 * Copyright IBM Corp. 2019, 2023
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
const e=e=>n=>"function"==typeof n?((e,n)=>{try{window.customElements.define(e,n)}catch(n){console.warn(`Attempting to re-define ${e}`)}return n})(e,n):((e,n)=>{const{kind:t,elements:o}=n;return{kind:t,elements:o,finisher(n){try{window.customElements.define(e,n)}catch(n){console.warn(`Attempting to re-define ${e}`)}}}})(e,n);export{e as c};
