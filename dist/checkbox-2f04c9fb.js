/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{c as e,_ as t,h as i,s as r,L as o}from"./settings-f1ddfc10.js";import{c as a}from"./class-map-20d48808.js";import{i as n}from"./if-non-null-e4da82c6.js";import{F as l}from"./focus-caad26ca.js";import{F as d}from"./form-bac99484.js";import{c}from"./carbon-element-e1a2f0d2.js";import{q as b,p as s}from"./decorators-56213c84.js";var x=e(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0);line-height:var(--cds-productive-heading-06-line-height,1.199)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,300);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0);line-height:var(--cds-productive-heading-05-line-height,1.25)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);line-height:var(--cds-productive-heading-02-line-height,1.375)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);line-height:var(--cds-productive-heading-01-line-height,1.28572)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);letter-spacing:var(--cds-body-long-02-letter-spacing,0);line-height:var(--cds-body-long-02-line-height,1.5)}a{color:#0f62fe}em{font-style:italic}.bx--assistive-text,.bx--visually-hidden{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap;width:1px}.bx--body{background-color:var(--cds-ui-background,#fff);border:0;box-sizing:border-box;color:var(--cds-text-01,#161616);font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);line-height:1;margin:0;padding:0;vertical-align:baseline}.bx--body *,.bx--body :after,.bx--body :before{box-sizing:inherit}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:right}20%{opacity:1;transform:scaleX(1);transform-origin:right}28%{transform:scaleX(1);transform-origin:left}51%{transform:scaleX(0);transform-origin:left}58%{transform:scaleX(0);transform-origin:left}82%{transform:scaleX(1);transform-origin:left}83%{transform:scaleX(1);transform-origin:right}96%{transform:scaleX(0);transform-origin:right}to{opacity:.3;transform:scaleX(0);transform-origin:right}}.bx--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0 0 2rem;padding:0;vertical-align:baseline}.bx--fieldset *,.bx--fieldset :after,.bx--fieldset :before{box-sizing:inherit}.bx--fieldset--no-margin{margin-bottom:0}.bx--form-item,:host(bx-checkbox){align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572)}.bx--label{border:0;box-sizing:border-box;color:var(--cds-text-02,#525252);display:inline-block;font-family:inherit;font-size:100%;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin:0 0 .5rem;padding:0;vertical-align:baseline}.bx--label *,.bx--label :after,.bx--label :before{box-sizing:inherit}.bx--label .bx--tooltip__trigger{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.bx--label.bx--skeleton{background:var(--cds-skeleton-01,#e5e5e5);border:none;box-shadow:none;height:.875rem;padding:0;pointer-events:none;position:relative;width:4.6875rem}.bx--label.bx--skeleton:active,.bx--label.bx--skeleton:focus,.bx--label.bx--skeleton:hover{border:none;cursor:default;outline:none}.bx--label.bx--skeleton:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-02,#c6c6c6);content:"";height:100%;position:absolute;right:0;top:0;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--label.bx--skeleton:before{animation:none}}input[type=number]{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper--warn~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box--warning~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--number__input-wrapper--warning~.bx--form-requirement,.bx--select--warning .bx--select-input__wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper--warning>.bx--text-input~.bx--form-requirement,.bx--text-input__field-wrapper--warning~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{display:block;font-weight:400;max-height:12.5rem;overflow:visible}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{color:var(--cds-text-error,#da1e28)}.bx--form--fluid .bx--text-input__field-wrapper--warning,.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]{display:block}.bx--form--fluid .bx--fieldset{margin:0}.bx--form--fluid input[data-invalid]{outline:none}.bx--form--fluid .bx--form-requirement{margin:0;padding:.5rem 1rem .5rem 2.5rem}input:not(output):not([data-invalid]):-moz-ui-invalid{box-shadow:none}.bx--form-requirement{border:0;box-sizing:border-box;display:none;font-family:inherit;font-size:100%;font-size:var(--cds-caption-01-font-size,.75rem);font-weight:var(--cds-caption-01-font-weight,400);letter-spacing:var(--cds-caption-01-letter-spacing,.32px);line-height:var(--cds-caption-01-line-height,1.33333);margin:.25rem 0 0;max-height:0;overflow:hidden;padding:0;vertical-align:baseline}.bx--form-requirement *,.bx--form-requirement :after,.bx--form-requirement :before{box-sizing:inherit}.bx--select--inline .bx--form__helper-text{margin-top:0}.bx--form__helper-text{color:var(--cds-text-02,#525252);font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-top:.25rem;opacity:1;width:100%;z-index:0}.bx--form__helper-text--disabled,.bx--label--disabled,fieldset[disabled] .bx--form__helper-text,fieldset[disabled] .bx--label{color:var(--cds-disabled-02,#c6c6c6)}.bx--form-item.bx--checkbox-wrapper{margin-bottom:.25rem;position:relative}.bx--form-item.bx--checkbox-wrapper:first-of-type{margin-top:.1875rem}.bx--label+.bx--form-item.bx--checkbox-wrapper{margin-top:-.125rem}.bx--form-item.bx--checkbox-wrapper:last-of-type{margin-bottom:.1875rem}.bx--checkbox{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;right:.7rem;top:1.25rem;visibility:inherit;white-space:nowrap;width:1px}.bx--checkbox-label{border:0;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);margin:0;min-height:1.5rem;padding:.1875rem 1.25rem 0 0;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:baseline}.bx--checkbox-label *,.bx--checkbox-label :after,.bx--checkbox-label :before{box-sizing:inherit}.bx--checkbox-label-text{padding-right:.375rem}.bx--checkbox-label:after,.bx--checkbox-label:before{box-sizing:border-box}.bx--checkbox-label:before{background-color:transparent;border:1px solid var(--cds-icon-01,#161616);border-radius:1px;content:"";height:1rem;margin:.125rem .1875rem .125rem .125rem;position:absolute;right:0;top:.125rem;width:1rem}.bx--checkbox-label:after{background:none;border-bottom:2px solid var(--cds-inverse-01,#fff);border-right:2px solid var(--cds-inverse-01,#fff);content:"";height:.3125rem;margin-top:0;position:absolute;right:.4375rem;top:.5rem;transform:scale(0) rotate(45deg);transform-origin:center;width:.5625rem}.bx--checkbox-label[data-contained-checkbox-state=mixed]:before,.bx--checkbox-label[data-contained-checkbox-state=true]:before,.bx--checkbox:checked+.bx--checkbox-label:before,.bx--checkbox:indeterminate+.bx--checkbox-label:before{background-color:var(--cds-icon-01,#161616);border-color:var(--cds-icon-01,#161616);border-width:1px}.bx--checkbox-label[data-contained-checkbox-state=true]:after,.bx--checkbox:checked+.bx--checkbox-label:after{transform:scale(1.2) rotate3d(.5,1,0,158deg)}.bx--checkbox-label[data-contained-checkbox-state=mixed]:after,.bx--checkbox:indeterminate+.bx--checkbox-label:after{border-bottom:2px solid var(--cds-inverse-01,#fff);border-right:0 solid var(--cds-inverse-01,#fff);top:.6875rem;transform:scale(1) rotate(0deg);width:.5rem}.bx--checkbox-label[data-contained-checkbox-state=mixed].bx--checkbox-label__focus:before,.bx--checkbox-label[data-contained-checkbox-state=true].bx--checkbox-label__focus:before,.bx--checkbox-label__focus:before,.bx--checkbox:checked:focus+.bx--checkbox-label:before,.bx--checkbox:focus+.bx--checkbox-label:before,.bx--checkbox:indeterminate:focus+.bx--checkbox-label:before{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1px}.bx--checkbox-label[data-contained-checkbox-disabled=true],.bx--checkbox:disabled+.bx--checkbox-label{color:var(--cds-disabled-02,#c6c6c6);cursor:not-allowed}.bx--checkbox-label[data-contained-checkbox-disabled=true]:before,.bx--checkbox:disabled+.bx--checkbox-label:before{border-color:var(--cds-disabled-02,#c6c6c6)}.bx--checkbox-label[data-contained-checkbox-state=mixed][data-contained-checkbox-disabled=true]:before,.bx--checkbox-label[data-contained-checkbox-state=true][data-contained-checkbox-disabled=true]:before,.bx--checkbox:checked:disabled+.bx--checkbox-label:before,.bx--checkbox:indeterminate:disabled+.bx--checkbox-label:before{background-color:var(--cds-disabled-02,#c6c6c6)}.bx--checkbox-label-text.bx--skeleton{background:var(--cds-skeleton-01,#e5e5e5);border:none;box-shadow:none;height:var(--cds-spacing-05,1rem);margin:.0625rem .375rem 0 0;padding:0;pointer-events:none;position:relative;width:6.25rem}.bx--checkbox-label-text.bx--skeleton:active,.bx--checkbox-label-text.bx--skeleton:focus,.bx--checkbox-label-text.bx--skeleton:hover{border:none;cursor:default;outline:none}.bx--checkbox-label-text.bx--skeleton:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-02,#c6c6c6);content:"";height:100%;position:absolute;right:0;top:0;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--checkbox-label-text.bx--skeleton:before{animation:none}}.bx--checkbox--inline{position:relative}:host(bx-checkbox){outline:none;position:relative}']);let h,f=e=>e;const{prefix:p}=r;let m=t([c(`${p}-checkbox`)],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[b("input")],key:"_checkboxNode",value:void 0},{kind:"method",key:"_handleChange",value:function(){const{checked:e,indeterminate:t}=this._checkboxNode;this.checked=e,this.indeterminate=t;const{eventChange:i}=this.constructor;this.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0,detail:{indeterminate:t}}))}},{kind:"method",key:"_handleFormdata",value:function(e){const{formData:t}=e,{checked:i,disabled:r,name:o,value:a="on"}=this;!r&&i&&t.append(o,a)}},{kind:"field",decorators:[s({type:Boolean,reflect:!0})],key:"checked",value:()=>!1},{kind:"field",decorators:[s({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[s({type:Boolean,reflect:!0,attribute:"hide-label"})],key:"hideLabel",value:()=>!1},{kind:"field",decorators:[s({type:Boolean,reflect:!0})],key:"indeterminate",value:()=>!1},{kind:"field",decorators:[s({attribute:"label-text"})],key:"labelText",value:()=>""},{kind:"field",decorators:[s()],key:"name",value:void 0},{kind:"field",decorators:[s()],key:"value",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){var e;return this.attachShadow({mode:"open",delegatesFocus:Number((null!==(e=/Safari\/(\d+)/.exec(navigator.userAgent))&&void 0!==e?e:["",0])[1])<=537})}},{kind:"method",key:"render",value:function(){const{checked:e,disabled:t,hideLabel:r,indeterminate:o,labelText:l,name:d,value:c,_handleChange:b}=this,s=a({[`${p}--checkbox-label`]:!0,[`${p}--visually-hidden`]:r});return i(h||(h=f` <input id="checkbox" type="checkbox" part="input" class="${0}" aria-checked="${0}" .checked="${0}" ?disabled="${0}" .indeterminate="${0}" name="${0}" value="${0}" @change="${0}"> <label for="checkbox" part="label" class="${0}"> <span class="${0}--checkbox-label-text"><slot>${0}</slot></span> </label> `),`${p}--checkbox`,o?"mixed":String(Boolean(e)),e,t,o,n(d),n(c),b,s,p,l)}},{kind:"get",static:!0,key:"eventChange",value:function(){return`${p}-checkbox-changed`}},{kind:"field",static:!0,key:"styles",value:()=>x}]}}),l(d(o)));export{m as B};
