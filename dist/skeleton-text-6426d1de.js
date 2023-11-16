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

let e;import{i as t,_ as o,s as n,x as r}from"./lit-element-9141c7de.js";import{o as i}from"./class-map-4b576ea4.js";import{e as s}from"./query-assigned-elements-f138626e.js";import{p as a}from"./settings-1968b081.js";import{c}from"./carbon-element-4ca9803f.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(e){e.REGULAR="",e.HEADING="heading"}(e||(e={}));var l=t(['@keyframes hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--icon--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;display:inline-block;height:1rem;padding:0;pointer-events:none;position:relative;width:1rem}.cds--icon--skeleton:active,.cds--icon--skeleton:focus,.cds--icon--skeleton:hover{border:none;cursor:default;outline:none}.cds--icon--skeleton:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);content:"";height:100%;position:absolute;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--icon--skeleton:before{animation:none}}.cds--skeleton__placeholder{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;height:6.25rem;padding:0;pointer-events:none;position:relative;width:6.25rem}.cds--skeleton__placeholder:active,.cds--skeleton__placeholder:focus,.cds--skeleton__placeholder:hover{border:none;cursor:default;outline:none}.cds--skeleton__placeholder:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);content:"";height:100%;position:absolute;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton__placeholder:before{animation:none}}.cds--skeleton__text{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;height:1rem;margin-bottom:.5rem;padding:0;pointer-events:none;position:relative;width:100%}.cds--skeleton__text:active,.cds--skeleton__text:focus,.cds--skeleton__text:hover{border:none;cursor:default;outline:none}.cds--skeleton__text:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);content:"";height:100%;position:absolute;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton__text:before{animation:none}}.cds--skeleton__heading{height:1.5rem}:host(cds-skeleton-text){display:block;width:100%}:host(cds-skeleton-text) .cds--skeleton__text{margin-top:0}']);let d,f,m,h=e=>e;function k(e,t,o){return Math.floor([.973051493507435,.15334737213558558,.5671034553053769][o%3]*(t-e+1))+e}o([c(`${a}-skeleton-text`)],(function(t,o){return{F:class extends o{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[s({reflect:!0})],key:"type",value:()=>e.REGULAR},{kind:"field",decorators:[s({reflect:!0})],key:"width",value:()=>"100%"},{kind:"field",decorators:[s({type:Boolean,reflect:!0})],key:"paragraph",value:()=>!1},{kind:"field",decorators:[s({type:Number,reflect:!0})],key:"lineCount",value:()=>3},{kind:"method",key:"render",value:function(){const{paragraph:t,lineCount:o,type:n,width:s}=this,c=i({[`${a}--skeleton__text`]:!0,[`${a}--skeleton__heading`]:n===e.HEADING});if(t){const e=parseInt(this.width,10),t=this.width.includes("px"),n=this.width.includes("%"),i=Array.apply(null,Array(o));return r(d||(d=h`${0}`),i.map(((o,i)=>{const a=n&&`${k(0,75,i)}px`||t&&`${k(0,e,i)}px`,l=n&&`width: calc(${s} - ${a})`||t&&`width: ${a}`||"";return r(f||(f=h`<p class="${0}" style="${0}"></p>`),c,l)})))}return r(m||(m=h`<p class="${0}" style="width:${0}"></p>`),c,s)}},{kind:"field",static:!0,key:"styles",value:()=>l}]}}),n);export{e as S};
