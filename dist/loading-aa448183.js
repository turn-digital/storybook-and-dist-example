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

import{i as e,_ as a,s as r,x as d}from"./lit-element-9141c7de.js";import{o as s}from"./class-map-4b576ea4.js";import{e as c}from"./query-assigned-elements-f138626e.js";import{p as t}from"./settings-1968b081.js";import{L as o,g as i}from"./loading-icon-7e46c03c.js";import{c as l}from"./carbon-element-4ca9803f.js";var n=e([".cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--loading,:host(cds-loading){animation-duration:.69s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:rotate;animation-timing-function:linear;border:0;box-sizing:border-box;font-family:inherit;font-size:100%;height:5.5rem;margin:0;padding:0;vertical-align:baseline;width:5.5rem}.cds--loading *,.cds--loading :after,.cds--loading :before,:host(cds-loading) *,:host(cds-loading) :after,:host(cds-loading) :before{box-sizing:inherit}.cds--loading svg circle,:host(cds-loading) svg circle{animation-duration:10ms;animation-name:init-stroke;animation-timing-function:cubic-bezier(.5,0,.1,1)}@media screen and (prefers-reduced-motion:reduce){.cds--loading svg circle,:host(cds-loading) svg circle{animation:none}}.cds--loading__svg{fill:transparent}.cds--loading__svg circle{stroke-dasharray:276.4608 276.4608;stroke-linecap:butt;stroke-width:10}.cds--loading__stroke{stroke:var(--cds-interactive,#0f62fe);stroke-dashoffset:52.527552}.cds--loading--small .cds--loading__stroke,:host(cds-loading[type=small]) .cds--loading__stroke{stroke-dashoffset:143.759616}.cds--loading--stop,:host(cds-loading[inactive]){animation:rotate-end-p1 .7s cubic-bezier(0,0,.25,1) forwards,rotate-end-p2 .7s cubic-bezier(0,0,.25,1) .7s forwards}.cds--loading--stop svg circle,:host(cds-loading[inactive]) svg circle{animation-delay:.7s;animation-duration:.7s;animation-fill-mode:forwards;animation-name:stroke-end;animation-timing-function:cubic-bezier(0,0,.25,1)}@media screen and (prefers-reduced-motion:reduce){.cds--loading--stop svg circle,:host(cds-loading[inactive]) svg circle{animation:none}}.cds--loading--small,:host(cds-loading[type=small]){height:1rem;width:1rem}.cds--loading--small circle,:host(cds-loading[type=small]) circle{stroke-width:16}.cds--loading--small .cds--loading__svg,:host(cds-loading[type=small]) .cds--loading__svg{stroke:var(--cds-interactive,#0f62fe)}.cds--loading__background{stroke:var(--cds-layer-accent);stroke-dashoffset:-22}@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){circle.cds--loading__background{stroke-dasharray:265;stroke-dashoffset:0}}}.cds--loading-overlay,:host(cds-loading[overlay]){align-items:center;background-color:var(--cds-overlay,hsla(0,0%,9%,.5));display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;transition:background-color .7s cubic-bezier(.4,.14,.3,1);width:100%;z-index:6000}.cds--loading-overlay--stop{display:none}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate-end-p1{to{transform:rotate(1turn)}}@keyframes rotate-end-p2{to{transform:rotate(-1turn)}}@keyframes init-stroke{0%{stroke-dashoffset:276.4608}to{stroke-dashoffset:52.527552}}@keyframes stroke-end{0%{stroke-dashoffset:52.527552}to{stroke-dashoffset:276.4608}}:host(cds-loading){display:block}:host(cds-loading[overlay]){animation:none}.cds--loading__background[hidden]{display:none}"]);let v,f=e=>e;a([l(`${t}-loading`)],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[c({attribute:"assistive-text"})],key:"assistiveText",value:()=>"Loading"},{kind:"field",decorators:[c()],key:"type",value:()=>o.REGULAR},{kind:"field",decorators:[c({type:Boolean,reflect:!0})],key:"overlay",value:()=>!1},{kind:"field",decorators:[c({type:Boolean,reflect:!0})],key:"inactive",value:()=>!1},{kind:"method",key:"render",value:function(){const{inactive:e,assistiveText:a,type:r,overlay:c}=this,l=s({[`${t}--loading`]:!0,[`${t}--loading--stop`]:e,[`${t}--loading--small`]:r===o.SMALL}),n=i({assistiveText:a,type:r});return c?d(v||(v=f`<div class="${0}">${0}</div>`),l,n):n}},{kind:"field",static:!0,key:"styles",value:()=>n}]}}),r);
