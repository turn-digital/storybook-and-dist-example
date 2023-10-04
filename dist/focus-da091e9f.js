/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{s as e}from"./settings-f1ddfc10.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{prefix:n}=e,t=`\n  a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],\n  ${n}-accordion-item,\n  ${n}-btn,\n  ${n}-breadcrumb-link,\n  ${n}-checkbox,\n  ${n}-code-snippet,\n  ${n}-combo-box,\n  ${n}-content-switcher-item,\n  ${n}-copy-button,\n  ${n}-table-header-row,\n  ${n}-table-row,\n  ${n}-table-toolbar-search,\n  ${n}-date-picker-input,\n  ${n}-dropdown,\n  ${n}-input,\n  ${n}-link,\n  ${n}-number-input,\n  ${n}-modal,\n  ${n}-modal-close-button,\n  ${n}-multi-select,\n  ${n}-inline-notification,\n  ${n}-toast-notification,\n  ${n}-overflow-menu,\n  ${n}-overflow-menu-item,\n  ${n}-page-sizes-select,\n  ${n}-pages-select,\n  ${n}-progress-step,\n  ${n}-radio-button,\n  ${n}-search,\n  ${n}-slider,\n  ${n}-slider-input,\n  ${n}-structured-list,\n  ${n}-tab,\n  ${n}-filter-tag,\n  ${n}-textarea,\n  ${n}-clickable-tile,\n  ${n}-expandable-tile,\n  ${n}-radio-tile,\n  ${n}-selectable-tile,\n  ${n}-toggle,\n  ${n}-tooltip,\n  ${n}-tooltip-definition,\n  ${n}-tooltip-icon,\n  ${n}-header-menu,\n  ${n}-header-menu-button,\n  ${n}-header-menu-item,\n  ${n}-header-name,\n  ${n}-header-nav-item,\n  ${n}-side-nav-link,\n  ${n}-side-nav-menu,\n  ${n}-side-nav-menu-item\n`
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */,o=e=>class extends e{focus(){if(this.shadowRoot.delegatesFocus)super.focus();else{const e=this.shadowRoot.querySelector(t)||this.querySelector(t);e?e.focus():super.focus()}}};export{o as F,t as s};
