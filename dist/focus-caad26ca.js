/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{s as n}from"./settings-f1ddfc10.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{prefix:e}=n,t=`\n  a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],\n  ${e}-accordion-item,\n  ${e}-btn,\n  ${e}-breadcrumb-link,\n  ${e}-checkbox,\n  ${e}-code-snippet,\n  ${e}-combo-box,\n  ${e}-content-switcher-item,\n  ${e}-copy-button,\n  ${e}-table-header-row,\n  ${e}-table-row,\n  ${e}-table-toolbar-search,\n  ${e}-date-picker-input,\n  ${e}-dropdown,\n  ${e}-input,\n  ${e}-link,\n  ${e}-number-input,\n  ${e}-modal,\n  ${e}-modal-close-button,\n  ${e}-multi-select,\n  ${e}-inline-notification,\n  ${e}-toast-notification,\n  ${e}-overflow-menu,\n  ${e}-overflow-menu-item,\n  ${e}-page-sizes-select,\n  ${e}-pages-select,\n  ${e}-progress-step,\n  ${e}-radio-button,\n  ${e}-search,\n  ${e}-slider,\n  ${e}-slider-input,\n  ${e}-structured-list,\n  ${e}-tab,\n  ${e}-tabs,\n  ${e}-legend,\n  ${e}-text-input,\n  ${e}-filter-tag,\n  ${e}-textarea,\n  ${e}-clickable-tile,\n  ${e}-expandable-tile,\n  ${e}-radio-tile,\n  ${e}-selectable-tile,\n  ${e}-toggle,\n  ${e}-tooltip,\n  ${e}-tooltip-definition,\n  ${e}-tooltip-icon,\n  ${e}-header-menu,\n  ${e}-header-menu-button,\n  ${e}-header-menu-item,\n  ${e}-header-name,\n  ${e}-header-nav-item,\n  ${e}-side-nav-link,\n  ${e}-side-nav-menu,\n  ${e}-side-nav-menu-item\n`
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */,o=n=>class extends n{focus(){if(this.shadowRoot.delegatesFocus)super.focus();else{const n=this.shadowRoot.querySelector(t)||this.querySelector(t);n?n.focus():super.focus()}}};export{o as F,t as s};
