/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{s as e,c as r,_ as t,h as a,L as i}from"./lit-element-90a357a7.js";import{c as o}from"./class-map-1e0e5494.js";import{s as n}from"./16-365129c4.js";import{s}from"./20-d09f9d52.js";import c from"C:Testcarbon-for-ibm-dotcompackagescarbon-web-componentssrcglobalsdirectivesspread";import{s as l}from"./settings-931b4fad.js";import{i as b}from"./if-non-empty-de09a58c.js";import{F as d}from"./focus-75d0fac6.js";import{F as h}from"./form-060c0a26.js";import{I as x}from"./input-534d7408.js";import{F as p}from"./shared-enums-c2286c7f.js";import{c as u}from"./carbon-element-e1a2f0d2.js";import{p as f}from"./decorators-56213c84.js";var m=r(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0);line-height:var(--cds-productive-heading-06-line-height,1.199)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,300);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0);line-height:var(--cds-productive-heading-05-line-height,1.25)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);line-height:var(--cds-productive-heading-02-line-height,1.375)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);line-height:var(--cds-productive-heading-01-line-height,1.28572)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);letter-spacing:var(--cds-body-long-02-letter-spacing,0);line-height:var(--cds-body-long-02-line-height,1.5)}a{color:#0f62fe}em{font-style:italic}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:right}20%{opacity:1;transform:scaleX(1);transform-origin:right}28%{transform:scaleX(1);transform-origin:left}51%{transform:scaleX(0);transform-origin:left}58%{transform:scaleX(0);transform-origin:left}82%{transform:scaleX(1);transform-origin:left}83%{transform:scaleX(1);transform-origin:right}96%{transform:scaleX(0);transform-origin:right}to{opacity:.3;transform:scaleX(0);transform-origin:right}}.bx--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0 0 2rem;padding:0;vertical-align:baseline}.bx--fieldset *,.bx--fieldset :after,.bx--fieldset :before{box-sizing:inherit}.bx--fieldset--no-margin{margin-bottom:0}.bx--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572)}.bx--label{border:0;box-sizing:border-box;color:var(--cds-text-02,#525252);display:inline-block;font-family:inherit;font-size:100%;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin:0 0 .5rem;padding:0;vertical-align:baseline}.bx--label *,.bx--label :after,.bx--label :before{box-sizing:inherit}.bx--label .bx--tooltip__trigger{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.bx--label.bx--skeleton{background:var(--cds-skeleton-01,#e5e5e5);border:none;box-shadow:none;height:.875rem;padding:0;pointer-events:none;position:relative;width:4.6875rem}.bx--label.bx--skeleton:active,.bx--label.bx--skeleton:focus,.bx--label.bx--skeleton:hover{border:none;cursor:default;outline:none}.bx--label.bx--skeleton:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-02,#c6c6c6);content:"";height:100%;position:absolute;right:0;top:0;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--label.bx--skeleton:before{animation:none}}input[type=number]{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper--warn~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box--warning~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--number__input-wrapper--warning~.bx--form-requirement,.bx--select--warning .bx--select-input__wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper--warning>.bx--text-input~.bx--form-requirement,.bx--text-input__field-wrapper--warning~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{display:block;font-weight:400;max-height:12.5rem;overflow:visible}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{color:var(--cds-text-error,#da1e28)}.bx--form--fluid .bx--text-input__field-wrapper--warning,.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]{display:block}.bx--form--fluid .bx--fieldset{margin:0}.bx--form--fluid input[data-invalid]{outline:none}.bx--form--fluid .bx--form-requirement{margin:0;padding:.5rem 1rem .5rem 2.5rem}input:not(output):not([data-invalid]):-moz-ui-invalid{box-shadow:none}.bx--form-requirement{border:0;box-sizing:border-box;display:none;font-family:inherit;font-size:100%;font-size:var(--cds-caption-01-font-size,.75rem);font-weight:var(--cds-caption-01-font-weight,400);letter-spacing:var(--cds-caption-01-letter-spacing,.32px);line-height:var(--cds-caption-01-line-height,1.33333);margin:.25rem 0 0;max-height:0;overflow:hidden;padding:0;vertical-align:baseline}.bx--form-requirement *,.bx--form-requirement :after,.bx--form-requirement :before{box-sizing:inherit}.bx--select--inline .bx--form__helper-text{margin-top:0}.bx--form__helper-text{color:var(--cds-text-02,#525252);font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-top:.25rem;opacity:1;width:100%;z-index:0}.bx--form__helper-text--disabled,.bx--label--disabled,fieldset[disabled] .bx--form__helper-text,fieldset[disabled] .bx--label{color:var(--cds-disabled-02,#c6c6c6)}.bx--search,:host(bx-search){align-items:center;display:flex;position:relative;width:100%}.bx--search .bx--label,:host(bx-search) .bx--label{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap;width:1px}.bx--search-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--cds-field-01,#f4f4f4);border:none;border-bottom:1px solid var(--cds-ui-04,#8d8d8d);box-sizing:border-box;color:var(--cds-text-01,#161616);font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);margin:0;order:1;outline:2px solid transparent;outline-offset:-2px;padding:0 2.5rem;text-overflow:ellipsis;transition:background-color .11s cubic-bezier(.2,0,.38,.9),outline .11s cubic-bezier(.2,0,.38,.9);vertical-align:baseline;width:100%}.bx--search-input *,.bx--search-input :after,.bx--search-input :before{box-sizing:inherit}.bx--search-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--search-input:focus{outline-style:dotted}}.bx--search-input::-moz-placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--search-input::placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--search-input::-ms-clear{display:none}.bx--search-input[disabled]{background-color:var(--cds-field,#f4f4f4);border-bottom:1px solid transparent;color:var(--cds-disabled-02,#c6c6c6);cursor:not-allowed}.bx--search-input[disabled]::-moz-placeholder{color:var(--cds-disabled-02,#c6c6c6)}.bx--search-input[disabled]::placeholder{color:var(--cds-disabled-02,#c6c6c6)}.bx--search--light .bx--search-input,:host(bx-search[color-scheme=light]) .bx--search-input{background:var(--cds-field-02,#fff)}.bx--search--light .bx--search-close:before,:host(bx-search[color-scheme=light]) .bx--search-close:before{background:var(--cds-field-02,#fff)}.bx--search--sm .bx--search-input,.bx--search--sm.bx--search--expandable.bx--search--expanded .bx--search-input,:host(bx-search-skeleton[size=sm]) .bx--search-input,:host(bx-search[size=sm]) .bx--search-input{height:2rem;padding:0 var(--cds-spacing-07,2rem)}.bx--search--sm .bx--search-magnifier-icon,:host(bx-search-skeleton[size=sm]) .bx--search-magnifier-icon,:host(bx-search[size=sm]) .bx--search-magnifier-icon{right:.5rem}.bx--search--lg .bx--search-input,.bx--search--lg.bx--search--expandable.bx--search--expanded .bx--search-input,:host(bx-search) .bx--search-input,:host(bx-search-skeleton) .bx--search-input{height:2.5rem;padding:0 var(--cds-spacing-08,2.5rem)}.bx--search--lg .bx--search-magnifier-icon,:host(bx-search) .bx--search-magnifier-icon,:host(bx-search-skeleton) .bx--search-magnifier-icon{right:.75rem}.bx--search--xl .bx--search-input,.bx--search--xl.bx--search--expandable.bx--search--expanded .bx--search-input,:host(bx-search-skeleton[size=xl]) .bx--search-input,:host(bx-search[size=xl]) .bx--search-input{height:3rem;padding:0 var(--cds-spacing-09,3rem)}.bx--search-magnifier-icon{fill:var(--cds-icon-02,#525252);height:1rem;pointer-events:none;position:absolute;right:var(--cds-spacing-05,1rem);top:50%;transform:translateY(-50%);width:1rem;z-index:2}.bx--search-close{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;left:0;margin:0;outline:2px solid transparent;outline-offset:-2px;padding:0;position:absolute;top:0;vertical-align:baseline}.bx--search-close *,.bx--search-close :after,.bx--search-close :before{box-sizing:inherit}.bx--search-close::-moz-focus-inner{border:0}.bx--search-close:before{background-color:var(--cds-field-01,#f4f4f4);content:"";display:block;height:calc(100% - 2px);position:absolute;right:0;top:.0625rem;transition:background-color .11s cubic-bezier(.2,0,.38,.9);width:2px}@media screen and (prefers-reduced-motion:reduce){.bx--search-close:before{transition:none}}.bx--search-close:hover{border-bottom:1px solid var(--cds-ui-04,#8d8d8d)}.bx--search-close:hover:before{background-color:var(--cds-hover-field,#e5e5e5)}.bx--search-button{background-color:var(--cds-field-01,#f4f4f4);flex-shrink:0;margin-right:.125rem}.bx--search-button svg{fill:currentColor;vertical-align:middle}.bx--search-close svg{fill:inherit}.bx--search-button,.bx--search-close{fill:var(--cds-icon-01,#161616);align-items:center;border-color:transparent;border-style:solid;border-width:1px 0;cursor:pointer;display:flex;height:2.5rem;justify-content:center;opacity:1;transition:opacity .11s cubic-bezier(.2,0,.38,.9),background-color .11s cubic-bezier(.2,0,.38,.9),outline .11s cubic-bezier(.2,0,.38,.9),border .11s cubic-bezier(.2,0,.38,.9);visibility:inherit;width:2.5rem}.bx--search-button:hover,.bx--search-close:hover{background-color:var(--cds-hover-field,#e5e5e5)}.bx--search-button:focus,.bx--search-close:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--search-button:focus,.bx--search-close:focus{outline-style:dotted}}.bx--search-button:active,.bx--search-close:active{background-color:var(--cds-selected-ui,#e0e0e0);outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--search-button:active,.bx--search-close:active{outline-style:dotted}}.bx--search--disabled .bx--search-close,.bx--search--disabled.bx--search--expandable .bx--search-magnifier{cursor:not-allowed;outline:none}.bx--search--disabled .bx--search-close:hover,.bx--search--disabled.bx--search--expandable .bx--search-magnifier:hover{background-color:transparent;border-bottom-color:transparent}.bx--search--disabled .bx--search-close:hover:before,.bx--search--disabled.bx--search--expandable .bx--search-magnifier:hover:before{background-color:transparent}.bx--search--disabled svg{fill:var(--cds-disabled-02,#c6c6c6)}.bx--search-close:active:before,.bx--search-close:focus:before{background-color:var(--cds-focus,#0f62fe)}.bx--search-input:focus~.bx--search-close:hover{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--search-input:focus~.bx--search-close:hover{outline-style:dotted}}.bx--search--sm .bx--search-close,.bx--search--sm.bx--search--expandable,.bx--search--sm.bx--search--expandable .bx--search-magnifier,.bx--search--sm~.bx--search-button,:host(bx-search-skeleton[size=sm]) .bx--search-close,:host(bx-search-skeleton[size=sm])~.bx--search-button,:host(bx-search[size=sm]) .bx--search-close,:host(bx-search[size=sm])~.bx--search-button{height:2rem;width:2rem}.bx--search--sm.bx--search--expandable .bx--search-input::-moz-placeholder{padding:0 2rem}.bx--search--sm.bx--search--expandable .bx--search-input::placeholder{padding:0 2rem}.bx--search--lg .bx--search-close,.bx--search--lg.bx--search--expandable,.bx--search--lg.bx--search--expandable .bx--search-magnifier,.bx--search--lg~.bx--search-button,:host(bx-search) .bx--search-close,:host(bx-search)~.bx--search-button,:host(bx-search-skeleton) .bx--search-close,:host(bx-search-skeleton)~.bx--search-button{height:2.5rem;width:2.5rem}.bx--search--lg.bx--search--expandable .bx--search-input::-moz-placeholder{padding:0 2.5rem}.bx--search--lg.bx--search--expandable .bx--search-input::placeholder{padding:0 2.5rem}.bx--search--xl .bx--search-close,.bx--search--xl.bx--search--expandable,.bx--search--xl.bx--search--expandable .bx--search-magnifier,.bx--search--xl~.bx--search-button,:host(bx-search-skeleton[size=xl]) .bx--search-close,:host(bx-search-skeleton[size=xl])~.bx--search-button,:host(bx-search[size=xl]) .bx--search-close,:host(bx-search[size=xl])~.bx--search-button{height:3rem;width:3rem}.bx--search--xl.bx--search--expandable .bx--search-input::-moz-placeholder{padding:0 3rem}.bx--search--xl.bx--search--expandable .bx--search-input::placeholder{padding:0 3rem}.bx--search-close--hidden{opacity:0;visibility:hidden}.bx--search--lg.bx--skeleton .bx--search-input,.bx--search--sm.bx--skeleton .bx--search-input,.bx--search--xl.bx--skeleton .bx--search-input{background:var(--cds-skeleton-01,#e5e5e5);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative;width:100%}.bx--search--lg.bx--skeleton .bx--search-input:active,.bx--search--lg.bx--skeleton .bx--search-input:focus,.bx--search--lg.bx--skeleton .bx--search-input:hover,.bx--search--sm.bx--skeleton .bx--search-input:active,.bx--search--sm.bx--skeleton .bx--search-input:focus,.bx--search--sm.bx--skeleton .bx--search-input:hover,.bx--search--xl.bx--skeleton .bx--search-input:active,.bx--search--xl.bx--skeleton .bx--search-input:focus,.bx--search--xl.bx--skeleton .bx--search-input:hover{border:none;cursor:default;outline:none}.bx--search--lg.bx--skeleton .bx--search-input:before,.bx--search--sm.bx--skeleton .bx--search-input:before,.bx--search--xl.bx--skeleton .bx--search-input:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-02,#c6c6c6);content:"";height:100%;position:absolute;right:0;top:0;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--search--lg.bx--skeleton .bx--search-input:before,.bx--search--sm.bx--skeleton .bx--search-input:before,.bx--search--xl.bx--skeleton .bx--search-input:before{animation:none}}.bx--search--lg.bx--skeleton .bx--search-input::-moz-placeholder,.bx--search--sm.bx--skeleton .bx--search-input::-moz-placeholder,.bx--search--xl.bx--skeleton .bx--search-input::-moz-placeholder{color:transparent}.bx--search--lg.bx--skeleton .bx--search-input::placeholder,.bx--search--sm.bx--skeleton .bx--search-input::placeholder,.bx--search--xl.bx--skeleton .bx--search-input::placeholder{color:transparent}.bx--search--expandable{transition:width 70ms cubic-bezier(.2,0,.38,.9)}.bx--search--expandable.bx--search--expanded{width:100%}.bx--search--expandable .bx--search-input{padding:0;transition:padding 70ms cubic-bezier(.2,0,.38,.9),width 0s linear 70ms;width:0}.bx--search--expandable .bx--search-input::-moz-placeholder{opacity:0;position:relative;transition-duration:70ms;-moz-transition-property:padding,opacity;transition-property:padding,opacity;transition-timing-function:cubic-bezier(.2,0,.38,.9)}.bx--search--expandable .bx--search-input::placeholder{opacity:0;position:relative;transition-duration:70ms;transition-property:padding,opacity;transition-timing-function:cubic-bezier(.2,0,.38,.9)}.bx--search--expandable.bx--search--expanded .bx--search-input{transition:padding 70ms cubic-bezier(.2,0,.38,.9);width:100%}.bx--search--expandable.bx--search--expanded .bx--search-input::-moz-placeholder{opacity:1;padding:0;position:relative}.bx--search--expandable.bx--search--expanded .bx--search-input::placeholder{opacity:1;padding:0;position:relative}.bx--search--expandable .bx--search-magnifier{cursor:pointer;position:absolute}.bx--search--expandable .bx--search-magnifier:hover{background-color:var(--cds-hover-ui,#e5e5e5)}.bx--search--expandable.bx--search--expanded .bx--search-magnifier{pointer-events:none}.bx--search--expandable .bx--search-magnifier-icon{fill:var(--cds-icon-01,#161616)}.bx--search--expandable.bx--search--expanded .bx--search-magnifier-icon{fill:var(--cds-icon-02,#525252)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.bx--search-close svg,.bx--search-magnifier-icon{fill:ButtonText}}:host(bx-search){outline:none}:host(bx-search-skeleton){width:100%}:host(bx-search-skeleton) .bx--search-input{background:var(--cds-skeleton-01,#e5e5e5);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative;width:100%}:host(bx-search-skeleton) .bx--search-input:active,:host(bx-search-skeleton) .bx--search-input:focus,:host(bx-search-skeleton) .bx--search-input:hover{border:none;cursor:default;outline:none}:host(bx-search-skeleton) .bx--search-input:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-02,#c6c6c6);content:"";height:100%;position:absolute;right:0;top:0;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){:host(bx-search-skeleton) .bx--search-input:before{animation:none}}:host(bx-search-skeleton) .bx--search-input::-moz-placeholder{color:transparent}:host(bx-search-skeleton) .bx--search-input::placeholder{color:transparent}']);let g,v=e=>e;const{prefix:k}=l;let w=t([u(`${k}-search`)],(function(r,t){return{F:class extends t{constructor(...e){super(...e),r(this)}},d:[{kind:"method",key:"_handleInput",value:function(e){const{target:r}=e,{value:t}=r;this.dispatchEvent(new CustomEvent(this.constructor.eventInput,{bubbles:!0,composed:!0,cancelable:!1,detail:{value:t}})),this.value=t}},{kind:"method",key:"_handleClearInputButtonClick",value:function(){if(this.value){this.dispatchEvent(new CustomEvent(this.constructor.eventInput,{bubbles:!0,composed:!0,cancelable:!1,detail:{value:""}})),this.value="";this.shadowRoot.querySelector("input").focus()}}},{kind:"method",key:"_handleFormdata",value:function(e){const{formData:r}=e,{disabled:t,name:a,value:i}=this;t||r.append(a,i)}},{kind:"field",decorators:[f({attribute:"close-button-assistive-text"})],key:"closeButtonAssistiveText",value:()=>""},{kind:"field",decorators:[f({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>p.REGULAR},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({attribute:"label-text"})],key:"labelText",value:()=>""},{kind:"field",decorators:[f()],key:"name",value:()=>""},{kind:"field",decorators:[f()],key:"placeholder",value:()=>""},{kind:"field",decorators:[f({reflect:!0})],key:"size",value:()=>x.REGULAR},{kind:"field",decorators:[f()],key:"type",value:()=>""},{kind:"field",decorators:[f({type:String})],key:"value",value:()=>""},{kind:"method",key:"createRenderRoot",value:function(){var e;return this.attachShadow({mode:"open",delegatesFocus:Number((null!==(e=/Safari\/(\d+)/.exec(navigator.userAgent))&&void 0!==e?e:["",0])[1])<=537})}},{kind:"method",key:"render",value:function(){const{closeButtonAssistiveText:r,disabled:t,labelText:i,name:l,placeholder:d,size:h,type:p,value:u="",_handleInput:f,_handleClearInputButtonClick:m}=this,w=o({[`${k}--search-close`]:!0,[`${k}--search-close--hidden`]:!this.value});return a(g||(g=v` ${0} <label for="input" part="label-text" class="${0}--label"> <slot>${0}</slot> </label> <input id="input" part="input" type="${0}" class="${0}--search-input" ?disabled="${0}" name="${0}" placeholder="${0}" role="searchbox" .value="${0}" @input="${0}"> <button part="close-button" class="${0}" @click="${0}" type="button" aria-label="${0}"> ${0} </button> `),(({children:r,...t}={})=>e`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${c(t)}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${r}${r}<path d="M15,14.3L10.7,10c1.9-2.3,1.6-5.8-0.7-7.7S4.2,0.7,2.3,3S0.7,8.8,3,10.7c2,1.7,5,1.7,7,0l4.3,4.3L15,14.3z M2,6.5	C2,4,4,2,6.5,2S11,4,11,6.5S9,11,6.5,11S2,9,2,6.5z"></path></svg>`)({part:"search-icon",class:`${k}--search-magnifier-icon`,role:"img"}),k,i,b(p),k,t,b(l),b(d),u,f,w,m,r,(h===x.SMALL?n:s)({part:"close-icon","aria-label":r,role:"img"}))}},{kind:"get",static:!0,key:"eventInput",value:function(){return`${k}-search-input`}},{kind:"field",static:!0,key:"styles",value:()=>m}]}}),d(h(i)));export{w as B,m as s};
