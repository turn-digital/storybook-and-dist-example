/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{_ as e}from"./objectSpread2-97ceea41.js";import{c as t,_ as n,L as r,h as o}from"./lit-element-90a357a7.js";import{s as i}from"./settings-931b4fad.js";import{i as s,f as c}from"./collection-helpers-e16a70eb.js";import{c as a}from"./carbon-element-e1a2f0d2.js";import{p as d}from"./decorators-56213c84.js";import{c as l}from"./class-map-1e0e5494.js";import{i as h}from"./if-non-null-990aec2b.js";import{F as b}from"./focus-75d0fac6.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const f={Left:-1,ArrowLeft:-1,Right:1,ArrowRight:1};let u;!function(e){e.REGULAR="",e.SMALL="sm",e.EXTRA_LARGE="xl"}(u||(u={}));var g=t(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0);line-height:var(--cds-productive-heading-06-line-height,1.199)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,300);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0);line-height:var(--cds-productive-heading-05-line-height,1.25)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);line-height:var(--cds-productive-heading-02-line-height,1.375)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);line-height:var(--cds-productive-heading-01-line-height,1.28572)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);letter-spacing:var(--cds-body-long-02-letter-spacing,0);line-height:var(--cds-body-long-02-line-height,1.5)}a{color:#0f62fe}em{font-style:italic}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:right}20%{opacity:1;transform:scaleX(1);transform-origin:right}28%{transform:scaleX(1);transform-origin:left}51%{transform:scaleX(0);transform-origin:left}58%{transform:scaleX(0);transform-origin:left}82%{transform:scaleX(1);transform-origin:left}83%{transform:scaleX(1);transform-origin:right}96%{transform:scaleX(0);transform-origin:right}to{opacity:.3;transform:scaleX(0);transform-origin:right}}.bx--content-switcher,:host(bx-content-switcher){display:flex;height:2.5rem;justify-content:space-evenly;width:100%}.bx--content-switcher--sm,:host(bx-content-switcher[size=sm]){height:2rem}.bx--content-switcher--lg,.bx--content-switcher--xl,:host(bx-content-switcher[size=xl]){height:3rem}.bx--content-switcher-btn{align-items:center;background-color:transparent;border:none;border-bottom:.0625rem solid var(--cds-border-inverse,#161616);border-top:.0625rem solid var(--cds-border-inverse,#161616);box-sizing:border-box;color:var(--cds-text-secondary,#525252);display:inline-flex;font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);margin:0;outline:2px solid transparent;outline-offset:-2px;overflow:hidden;padding:.5rem 1rem;position:relative;text-align:right;text-decoration:none;transition:all .15s cubic-bezier(.2,0,.38,.9);vertical-align:baseline;white-space:nowrap;width:100%}.bx--content-switcher-btn *,.bx--content-switcher-btn :after,.bx--content-switcher-btn :before{box-sizing:inherit}.bx--content-switcher-btn:after{background-color:var(--cds-layer-selected-inverse,#161616);content:"";display:block;height:100%;position:absolute;right:0;top:0;transform:scaleY(0);transform-origin:bottom;transition:all .15s cubic-bezier(.2,0,.38,.9);width:100%}@media (prefers-reduced-motion:reduce){.bx--content-switcher-btn:after{transition:none}}.bx--content-switcher-btn:disabled:after{display:none}.bx--content-switcher-btn:focus{border-color:var(--cds-focus,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus,#0f62fe),inset 0 0 0 3px var(--cds-focus-inset,#fff);z-index:3}.bx--content-switcher-btn:focus:after{-webkit-clip-path:inset(3px 3px 3px 3px);clip-path:inset(3px 3px 3px 3px)}.bx--content-switcher-btn:hover{color:var(--cds-text-primary,#161616);cursor:pointer}.bx--content-switcher-btn:active,.bx--content-switcher-btn:hover{background-color:var(--cds-layer-hover,#e5e5e5);color:var(--cds-text-primary,#161616);z-index:3}.bx--content-switcher-btn:disabled{background-color:transparent;border-color:var(--cds-border-disabled,#f4f4f4);color:var(--cds-text-disabled,#c6c6c6)}.bx--content-switcher-btn:disabled:hover{cursor:not-allowed}.bx--content-switcher-btn:disabled:first-child,.bx--content-switcher-btn:disabled:last-child{border-color:var(--cds-border-disabled,#f4f4f4)}.bx--content-switcher-btn:first-child{border-bottom-right-radius:.25rem;border-right:.0625rem solid var(--cds-border-inverse,#161616);border-top-right-radius:.25rem}.bx--content-switcher-btn:last-child{border-bottom-left-radius:.25rem;border-left:.0625rem solid var(--cds-border-inverse,#161616);border-top-left-radius:.25rem}.bx--content-switcher--selected,.bx--content-switcher--selected:first-child,.bx--content-switcher--selected:last-child{border:0}.bx--content-switcher-btn:before{background-color:var(--cds-border-subtle,#e0e0e0);content:"";display:block;height:1rem;position:absolute;right:0;width:.0625rem;z-index:2}.bx--content-switcher-btn:first-of-type:before{display:none}.bx--content-switcher--selected+.bx--content-switcher-btn:before,.bx--content-switcher--selected:before,.bx--content-switcher-btn:focus+.bx--content-switcher-btn:before,.bx--content-switcher-btn:focus:before,.bx--content-switcher-btn:hover+.bx--content-switcher-btn:before,.bx--content-switcher-btn:hover:before{background-color:transparent}.bx--content-switcher-btn:disabled:before,.bx--content-switcher-btn:disabled:hover+.bx--content-switcher-btn:disabled:before{background-color:var(--cds-border-disabled,#f4f4f4)}.bx--content-switcher-btn.bx--content-switcher--selected:disabled+.bx--content-switcher-btn:before,.bx--content-switcher-btn.bx--content-switcher--selected:disabled:hover+.bx--content-switcher-btn:before{background-color:transparent}.bx--content-switcher__icon{fill:var(--cds-icon-secondary,#525252);transition:fill 70ms cubic-bezier(.2,0,.38,.9)}.bx--content-switcher__icon+span{margin-right:.5rem}.bx--content-switcher__label{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;z-index:1}.bx--content-switcher-btn:focus .bx--content-switcher__icon,.bx--content-switcher-btn:hover .bx--content-switcher__icon{fill:var(--cds-icon-primary,#161616)}.bx--content-switcher-btn.bx--content-switcher--selected{background-color:var(--cds-layer-selected-inverse,#161616);color:var(--cds-text-inverse,#fff);z-index:3}.bx--content-switcher-btn.bx--content-switcher--selected:after{transform:scaleY(1)}.bx--content-switcher-btn.bx--content-switcher--selected:disabled{background-color:var(--cds-layer-selected-disabled,#8d8d8d);color:var(--cds-text-disabled,#c6c6c6)}.bx--content-switcher-btn.bx--content-switcher--selected .bx--content-switcher__icon{fill:var(--cds-icon-inverse,#fff)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.bx--content-switcher-btn:focus{color:Highlight;outline:1px solid Highlight}}:host(bx-content-switcher-item){outline:none;width:100%}:host(bx-content-switcher-item) .bx--content-switcher-btn{height:100%}:host(bx-content-switcher-item) .bx--content-switcher-btn:first-child,:host(bx-content-switcher-item) .bx--content-switcher-btn:last-child{border-left:none;border-radius:0;border-right:none}:host(bx-content-switcher-item) .bx--content-switcher-btn:before{background-color:var(--cds-ui-03,#e0e0e0);content:"";display:block;height:1rem;position:absolute;right:0;width:.0625rem;z-index:2}:host(bx-content-switcher-item) .bx--content-switcher-btn.bx--content-switcher--selected:before,:host(bx-content-switcher-item) .bx--content-switcher-btn:focus:before,:host(bx-content-switcher-item) .bx--content-switcher-btn:hover:before{background-color:transparent}:host(bx-content-switcher-item) .bx--content-switcher-btn:disabled{border-bottom-color:var(--cds-ui-05,#161616);border-top-color:var(--cds-ui-05,#161616)}:host(bx-content-switcher-item[hide-divider]) .bx--content-switcher-btn:before{background-color:transparent}:host(bx-content-switcher-item:first-of-type) .bx--content-switcher-btn{border-bottom-right-radius:.25rem;border-right:.0625rem solid var(--cds-ui-05,#161616);border-top-right-radius:.25rem}:host(bx-content-switcher-item:first-of-type) .bx--content-switcher-btn:before{content:none}:host(bx-content-switcher-item:first-of-type) .bx--content-switcher-btn.bx--content-switcher--selected{border-right:none}:host(bx-content-switcher-item:last-of-type) .bx--content-switcher-btn{border-bottom-left-radius:.25rem;border-left:.0625rem solid var(--cds-ui-05,#161616);border-top-left-radius:.25rem}:host(bx-content-switcher-item:last-of-type) .bx--content-switcher-btn.bx--content-switcher--selected{border-left:none}']);let m,v=e=>e;const{prefix:p}=i;let x,w=n([a(`${p}-content-switcher`)],(function(t,n){return{F:class extends n{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"_handleHover",value:function({target:e,type:t}){const{selectorItem:n}=this.constructor,r=this.querySelectorAll(n),o="mouseover"!==t?-1:s(r,e.closest(n)),i=o<0?o:o+1;c(this.querySelectorAll(n),((e,t)=>{e.hideDivider=t===i}))}},{kind:"method",key:"_getNextItem",value:function(e,t){const n=this.querySelectorAll(this.constructor.selectorItemEnabled),r=s(n,e),o=(i=r+t,c=n.length,i<0?c-1:i>=c?0:i);var i,c;return o===r?null:n[o]}},{kind:"method",key:"_handleClick",value:function({target:e}){this._handleUserInitiatedSelectItem(e)}},{kind:"method",key:"_handleKeydown",value:function({key:e}){e in f&&this._navigate(f[e])}},{kind:"method",key:"_handleUserInitiatedSelectItem",value:function(t){if(!t.disabled&&t.value!==this.value){const n={bubbles:!0,composed:!0,detail:{item:t}},r=this.constructor,o=new CustomEvent(r.eventBeforeSelect,e(e({},n),{},{cancelable:!0}));if(this.dispatchEvent(o)){this._selectionDidChange(t);const e=new CustomEvent(r.eventSelect,n);this.dispatchEvent(e)}}}},{kind:"method",key:"_navigate",value:function(e){const{selectorItemSelected:t}=this.constructor,n=this._getNextItem(this.querySelector(t),e);n&&(this._handleUserInitiatedSelectItem(n),this.requestUpdate())}},{kind:"method",key:"_selectionDidChange",value:function(e){this.value=e.value,c(this.querySelectorAll(this.constructor.selectorItemSelected),(e=>{e.selected=!1})),e.selected=!0,Promise.resolve().then((()=>{e.focus()}))}},{kind:"field",decorators:[d({reflect:!0})],key:"value",value:()=>""},{kind:"field",decorators:[d({reflect:!0})],key:"size",value:()=>u.REGULAR},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("value")){const{selectorItem:e}=this.constructor;c(this.querySelectorAll(e),(e=>{e.selected=e.value===this.value}))}return!0}},{kind:"get",static:!0,key:"selectorItem",value:function(){return`${p}-content-switcher-item`}},{kind:"get",static:!0,key:"selectorItemEnabled",value:function(){return`${p}-content-switcher-item:not([disabled])`}},{kind:"get",static:!0,key:"selectorItemSelected",value:function(){return`${p}-content-switcher-item[selected]`}},{kind:"get",static:!0,key:"eventBeforeSelect",value:function(){return`${p}-content-switcher-beingselected`}},{kind:"get",static:!0,key:"eventSelect",value:function(){return`${p}-content-switcher-selected`}},{kind:"method",key:"render",value:function(){const{_handleHover:e,_handleKeydown:t}=this;return o(m||(m=v` <slot @click="${0}" @keydown="${0}" @mouseover="${0}" @mouseout="${0}"></slot> `),this._handleClick,t,e,e)}},{kind:"field",static:!0,key:"styles",value:()=>g}]}}),r),y=e=>e;const{prefix:k}=i;let z=n([a(`${k}-content-switcher-item`)],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[d({type:Boolean,reflect:!0,attribute:"hide-divider"})],key:"hideDivider",value:()=>!1},{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"selected",value:()=>!1},{kind:"field",decorators:[d()],key:"target",value:void 0},{kind:"field",decorators:[d()],key:"value",value:()=>""},{kind:"method",key:"createRenderRoot",value:function(){var e;return this.attachShadow({mode:"open",delegatesFocus:Number((null!==(e=/Safari\/(\d+)/.exec(navigator.userAgent))&&void 0!==e?e:["",0])[1])<=537})}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("selected")||e.has("target")){const{selected:e,target:t}=this;if(t){const n=this.getRootNode(),r=n.getElementById&&n.getElementById(t);r&&r.toggleAttribute("hidden",!e)}}return!0}},{kind:"method",key:"render",value:function(){const{disabled:e,selected:t,target:n}=this,r=l({[`${k}--content-switcher-btn`]:!0,[`${k}--content-switcher--selected`]:t});return o(x||(x=y` <button type="button" role="tab" class="${0}" ?disabled="${0}" aria-controls="${0}" aria-selected="${0}"> <span class="${0}--content-switcher__label"><slot></slot></span> </button> `),r,e,h(n),Boolean(t),k)}},{kind:"field",static:!0,key:"styles",value:()=>g}]}}),b(r));export{w as B,f as N,z as a};
