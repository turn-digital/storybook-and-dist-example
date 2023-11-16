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

import{_ as e}from"./objectSpread2-b539be24.js";import{i,_ as n,x as d,s as t}from"./lit-element-9141c7de.js";import{o}from"./class-map-4b576ea4.js";import{l}from"./if-defined-c32f715d.js";import{e as s}from"./query-assigned-elements-f138626e.js";import{i as r}from"./query-6ca5e414.js";import{p as c}from"./settings-1968b081.js";import{F as a}from"./focus-564d0c20.js";import{c as k}from"./carbon-element-4ca9803f.js";var f=i([".cds--link{border:0;box-sizing:border-box;color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;outline:none;padding:0;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before{box-sizing:inherit}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active,.cds--link:active:visited,.cds--link:active:visited:hover{color:var(--cds-text-primary,#161616);text-decoration:underline}.cds--link:focus{outline:1px solid var(--cds-focus,#0f62fe);outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe))}@media screen and (prefers-contrast){.cds--link:focus{outline-style:dotted}}.cds--link:visited{color:var(--cds-link-primary,#0f62fe)}.cds--link:visited:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;padding:0;text-decoration:none;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link.cds--link--visited:visited{color:var(--cds-link-visited,#8a3ffc)}.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link.cds--link--inline:focus,.cds--link.cds--link--inline:visited{text-decoration:none}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-left:.5rem}:host(cds-link){outline:none}:host(cds-link) .cds--link--disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}:host(cds-link) .cds--link__icon[hidden]{display:none}"]);let v,h,p,m,u=e=>e;!function(e){e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg"}(m||(m={}));let y=n([k(`${c}-link`)],(function(i,n){return{F:class extends n{constructor(...e){super(...e),i(this)}},d:[{kind:"field",key:"_hasIcon",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{name:i}=e,n=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this["icon"===i?"_hasIcon":""]=n,this.requestUpdate()}},{kind:"field",decorators:[r("#link")],key:"_linkNode",value:void 0},{kind:"get",key:"_classes",value:function(){const{disabled:e,size:i,inline:n,visited:d,_hasIcon:t}=this;return o({[`${c}--link`]:!0,[`${c}--link--disabled`]:e,[`${c}--link--icon`]:t,[`${c}--link--inline`]:n,[`${c}--link--${i}`]:i,[`${c}--link--visited`]:d})}},{kind:"method",key:"_handleClick",value:function(e){}},{kind:"method",key:"_renderInner",value:function(){const{_hasIcon:e,_handleSlotChange:i}=this;return d(v||(v=u`
      <slot @slotchange="${0}"></slot>
      <div ?hidden="${0}" class="${0}--link__icon">
        <slot name="icon" @slotchange="${0}"></slot>
      </div>
    `),i,!e,c,i)}},{kind:"method",key:"_renderDisabledLink",value:function(){const{_classes:e}=this;return d(h||(h=u`
      <p id="link" part="link" class="${0}">${0}</p>
    `),e,this._renderInner())}},{kind:"method",key:"_renderLink",value:function(){const{download:e,href:i,hreflang:n,linkRole:t,ping:o,rel:s,target:r,type:c,_classes:a,_handleClick:k}=this;return d(p||(p=u`
      <a
        tabindex="0"
        id="link"
        role="${0}"
        class="${0}"
        part="link"
        download="${0}"
        href="${0}"
        hreflang="${0}"
        ping="${0}"
        rel="${0}"
        target="${0}"
        type="${0}"
        @click="${0}">
        ${0}
      </a>
    `),l(t),a,l(e),l(i),l(n),l(o),l(s),l(r),l(c),k,this._renderInner())}},{kind:"field",decorators:[s({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[s({reflect:!0})],key:"download",value:void 0},{kind:"field",decorators:[s({reflect:!0})],key:"href",value:void 0},{kind:"field",decorators:[s({reflect:!0})],key:"hreflang",value:void 0},{kind:"field",decorators:[s({type:Boolean,reflect:!0})],key:"inline",value:()=>!1},{kind:"field",decorators:[s({attribute:"link-role"})],key:"linkRole",value:void 0},{kind:"field",decorators:[s({reflect:!0})],key:"ping",value:void 0},{kind:"field",decorators:[s({reflect:!0})],key:"rel",value:void 0},{kind:"field",decorators:[s({reflect:!0})],key:"size",value:()=>m.MEDIUM},{kind:"field",decorators:[s({reflect:!0})],key:"target",value:void 0},{kind:"field",decorators:[s({reflect:!0})],key:"type",value:void 0},{kind:"field",decorators:[s({type:Boolean,reflect:!0})],key:"visited",value:()=>!1},{kind:"method",key:"render",value:function(){const{disabled:e}=this;return e?this._renderDisabledLink():this._renderLink()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>e(e({},t.shadowRootOptions),{},{delegatesFocus:!0})},{kind:"field",static:!0,key:"styles",value:()=>f}]}}),a(t));export{y as C};
