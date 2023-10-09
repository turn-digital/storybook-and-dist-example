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

import{c as e,_ as i,h as t,s as n,L as o}from"./settings-f1ddfc10.js";import{c as r}from"./class-map-20d48808.js";import{c as a}from"./carbon-element-18175602.js";import{i as s}from"./if-non-null-06324b2b.js";import{F as d}from"./focus-dd1738ef.js";import{q as l,p as c}from"./decorators-56213c84.js";var h=e(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0);line-height:var(--cds-productive-heading-06-line-height,1.199)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,300);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0);line-height:var(--cds-productive-heading-05-line-height,1.25)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);line-height:var(--cds-productive-heading-02-line-height,1.375)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);line-height:var(--cds-productive-heading-01-line-height,1.28572)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);letter-spacing:var(--cds-body-long-02-letter-spacing,0);line-height:var(--cds-body-long-02-line-height,1.5)}a{color:#0f62fe}em{font-style:italic}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.bx--link{border:0;box-sizing:border-box;color:var(--cds-link-01,#0f62fe);display:inline-flex;font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);margin:0;outline:none;padding:0;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.bx--link *,.bx--link :after,.bx--link :before{box-sizing:inherit}.bx--link:hover{color:var(--cds-hover-primary-text,#0043ce);text-decoration:underline}.bx--link:active,.bx--link:active:visited,.bx--link:active:visited:hover{color:var(--cds-text-01,#161616);text-decoration:underline}.bx--link:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.bx--link:focus{outline-style:dotted}}.bx--link:visited{color:var(--cds-link-01,#0f62fe)}.bx--link:visited:hover{color:var(--cds-hover-primary-text,#0043ce)}.bx--link--disabled,.bx--link--disabled:hover{border:0;box-sizing:border-box;color:var(--cds-disabled-02,#c6c6c6);cursor:not-allowed;font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);margin:0;padding:0;text-decoration:none;vertical-align:baseline}.bx--link--disabled *,.bx--link--disabled :after,.bx--link--disabled :before,.bx--link--disabled:hover *,.bx--link--disabled:hover :after,.bx--link--disabled:hover :before{box-sizing:inherit}.bx--link.bx--link--visited:visited{color:var(--cds-visited-link,#8a3ffc)}.bx--link.bx--link--visited:visited:hover{color:var(--cds-hover-primary-text,#0043ce)}.bx--link.bx--link--inline{text-decoration:underline}.bx--link.bx--link--inline:focus,.bx--link.bx--link--inline:visited{text-decoration:none}.bx--link--disabled.bx--link--inline{text-decoration:underline}.bx--link--sm{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.bx--link--lg{font-size:var(--cds-body-short-02-font-size,1rem);font-weight:var(--cds-body-short-02-font-weight,400);letter-spacing:var(--cds-body-short-02-letter-spacing,0);line-height:var(--cds-body-short-02-line-height,1.375)}.bx--link__icon{align-self:center;display:inline-flex;margin-left:var(--cds-spacing-03,.5rem)}:host(bx-link){outline:none}:host(bx-link) .bx--link--disabled{color:var(--cds-disabled-02,#c6c6c6)}:host(bx-link) .bx--link__icon[hidden]{display:none}']);let f,g,v,b=e=>e;const{prefix:u}=n;let p;!function(e){e.REGULAR="",e.SMALL="sm",e.LARGE="lg"}(p||(p={}));let k=i([a(`${u}-link`)],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",key:"_hasIcon",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{name:i}=e,t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this["icon"===i?"_hasIcon":""]=t,this.requestUpdate()}},{kind:"field",decorators:[l("#link")],key:"_linkNode",value:void 0},{kind:"get",key:"_classes",value:function(){const{disabled:e,size:i}=this;return r({[`${u}--link`]:!0,[`${u}--link--disabled`]:e,[`${u}--link--${i}`]:i})}},{kind:"method",key:"_handleClick",value:function(e){}},{kind:"method",key:"_renderInner",value:function(){const{_hasIcon:e,_handleSlotChange:i}=this;return t(f||(f=b` <slot @slotchange="${0}"></slot> <div ?hidden="${0}" class="${0}--link__icon"> <slot name="icon" @slotchange="${0}"></slot> </div> `),i,!e,u,i)}},{kind:"method",key:"_renderDisabledLink",value:function(){const{_classes:e}=this;return t(g||(g=b` <p id="link" part="link" class="${0}">${0}</p> `),e,this._renderInner())}},{kind:"method",key:"_renderLink",value:function(){const{download:e,href:i,hreflang:n,linkRole:o,ping:r,rel:a,target:d,type:l,_classes:c,_handleClick:h}=this;return t(v||(v=b` <a id="link" role="${0}" class="${0}" part="link" download="${0}" href="${0}" hreflang="${0}" ping="${0}" rel="${0}" target="${0}" type="${0}" @click="${0}"> ${0} </a> `),s(o),c,s(e),s(i),s(n),s(r),s(a),s(d),s(l),h,this._renderInner())}},{kind:"field",decorators:[c({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[c({reflect:!0})],key:"download",value:void 0},{kind:"field",decorators:[c({reflect:!0})],key:"href",value:void 0},{kind:"field",decorators:[c({reflect:!0})],key:"hreflang",value:void 0},{kind:"field",decorators:[c({attribute:"link-role"})],key:"linkRole",value:void 0},{kind:"field",decorators:[c({reflect:!0})],key:"ping",value:void 0},{kind:"field",decorators:[c({reflect:!0})],key:"rel",value:void 0},{kind:"field",decorators:[c({reflect:!0})],key:"size",value:()=>p.REGULAR},{kind:"field",decorators:[c({reflect:!0})],key:"target",value:void 0},{kind:"field",decorators:[c({reflect:!0})],key:"type",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){var e;return this.attachShadow({mode:"open",delegatesFocus:Number((null!==(e=/Safari\/(\d+)/.exec(navigator.userAgent))&&void 0!==e?e:["",0])[1])<=537})}},{kind:"method",key:"render",value:function(){const{disabled:e}=this;return e?this._renderDisabledLink():this._renderLink()}},{kind:"field",static:!0,key:"styles",value:()=>h}]}}),d(o));export{k as B};
