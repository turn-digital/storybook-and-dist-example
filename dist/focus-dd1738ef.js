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

import{s as n}from"./settings-f1ddfc10.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{prefix:e}=n,t=`\n  a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],\n  ${e}-custom-component,\n  ${e}-accordion-item,\n  ${e}-btn,\n  ${e}-breadcrumb-link,\n  ${e}-checkbox,\n  ${e}-code-snippet,\n  ${e}-combo-box,\n  ${e}-content-switcher-item,\n  ${e}-copy-button,\n  ${e}-table-header-row,\n  ${e}-table-row,\n  ${e}-table-toolbar-search,\n  ${e}-date-picker-input,\n  ${e}-dropdown,\n  ${e}-input,\n  ${e}-link,\n  ${e}-number-input,\n  ${e}-modal,\n  ${e}-modal-close-button,\n  ${e}-multi-select,\n  ${e}-inline-notification,\n  ${e}-toast-notification,\n  ${e}-overflow-menu,\n  ${e}-overflow-menu-item,\n  ${e}-page-sizes-select,\n  ${e}-pages-select,\n  ${e}-progress-step,\n  ${e}-radio-button,\n  ${e}-search,\n  ${e}-slider,\n  ${e}-slider-input,\n  ${e}-structured-list,\n  ${e}-tab,\n  ${e}-filter-tag,\n  ${e}-textarea,\n  ${e}-clickable-tile,\n  ${e}-expandable-tile,\n  ${e}-radio-tile,\n  ${e}-selectable-tile,\n  ${e}-toggle,\n  ${e}-tooltip,\n  ${e}-tooltip-definition,\n  ${e}-tooltip-icon,\n  ${e}-header-menu,\n  ${e}-header-menu-button,\n  ${e}-header-menu-item,\n  ${e}-header-name,\n  ${e}-header-nav-item,\n  ${e}-side-nav-link,\n  ${e}-side-nav-menu,\n  ${e}-side-nav-menu-item\n`
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */,o=n=>class extends n{focus(){if(this.shadowRoot.delegatesFocus)super.focus();else{const n=this.shadowRoot.querySelector(t)||this.querySelector(t);n?n.focus():super.focus()}}};export{o as F,t as s};
