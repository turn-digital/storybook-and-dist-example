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
 * Copyright 2022 Google LLC
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
 * https://www.npmjs.com/package/@carbon/icons
 * https://www.npmjs.com/package/lit
 * https://www.npmjs.com/package/lodash-es
 */

import{_ as t,s as e,x as s}from"./lit-element-9141c7de.js";import{_ as n,a as o}from"./get-d229c408.js";import{e as i}from"./custom-element-975be15f.js";import"./query-assigned-elements-f138626e.js";import{B as a,b as l}from"./button-d2918d2d.js";import{p as r}from"./settings-1968b081.js";let c,d=t=>t;t([i(`${r}-button-set`)],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"method",key:"_handleSlotChange",value:function(t){t.target.assignedNodes().filter((t=>void 0!==t.matches&&t.matches(this.constructor.selectorItem))).forEach(((t,e)=>{t.setAttribute("kind",0===e?a.SECONDARY:a.PRIMARY)}));const e=new CustomEvent(`${r}-btn-set-update`,{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(e)}},{kind:"method",key:"render",value:function(){return s(c||(c=d` <slot @slotchange="${0}"></slot> `),this._handleSlotChange)}},{kind:"method",key:"connectedCallback",value:function(){n(o(i.prototype),"connectedCallback",this).call(this),this.setAttribute("role","list")}},{kind:"get",static:!0,key:"selectorItem",value:function(){return`${r}-button`}},{kind:"field",static:!0,key:"styles",value:()=>l}]}}),e);
