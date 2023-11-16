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

import{_ as t,x as e}from"./lit-element-9141c7de.js";import{o as n}from"./class-map-4b576ea4.js";import{l as o}from"./if-defined-c32f715d.js";import{p as s}from"./settings-1968b081.js";import{C as i,b as a}from"./button-d2918d2d.js";import{c as l}from"./carbon-element-4ca9803f.js";let r,d,c=t=>t;t([l(`${s}-button-skeleton`)],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"_handleClickLinkSkeleton",value:function(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}},{kind:"method",key:"render",value:function(){const{autofocus:t,disabled:i,download:a,href:l,hreflang:u,ping:f,rel:$,size:m,target:p,type:b}=this,k=n({[`${s}--btn`]:!0,[`${s}--skeleton`]:!0,[`${s}--btn--${m}`]:m});return l?e(r||(r=c`
          <a
            id="button"
            role="button"
            class="${0}"
            download="${0}"
            href="${0}"
            hreflang="${0}"
            ping="${0}"
            rel="${0}"
            target="${0}"
            type="${0}"
            @click="${0}"></a>
        `),k,o(a),o(l),o(u),o(f),o($),o(p),o(b),this._handleClickLinkSkeleton):e(d||(d=c`
          <button
            id="button"
            class="${0}"
            ?autofocus="${0}"
            ?disabled="${0}"
            type="${0}"></button>
        `),k,t,i,o(b))}},{kind:"field",static:!0,key:"styles",value:()=>a}]}}),i);
