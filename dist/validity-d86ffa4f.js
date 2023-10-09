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
 * 
 * lit-html:
 * 
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 * 
 * flatpickr:
 * 
 *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    *****************************************************************************
 * 
 * Also refer to the following links for the license of other third-party dependencies:
 * 
 * https://www.npmjs.com/package/@carbon/icons
 * https://www.npmjs.com/package/lodash-es
 */

let i;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(i){i.NO_ERROR="",i.ERROR_REQUIRED="required"}(i||(i={}));const t=t=>class extends t{_getValidityMessage(t){return{[i.NO_ERROR]:"",[i.ERROR_REQUIRED]:this.requiredValidityMessage}[t]}_testValidity(){const{required:t,value:e}=this;return t&&!e?i.ERROR_REQUIRED:i.NO_ERROR}checkValidity(){const t=this._testValidity();return t!==i.NO_ERROR?(this.dispatchEvent(new CustomEvent("invalid",{bubbles:!1,cancelable:!0,composed:!1}))&&(this.invalid=!0,this.validityMessage=this._getValidityMessage(t)),!1):(this.invalid=!1,this.validityMessage="",!0)}setCustomValidity(i){this.invalid=Boolean(i),this.validityMessage=i}};export{t as V};
