/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{a as t,c as i,_ as e,h as r,s as o,L as s}from"./settings-f1ddfc10.js";import{c as a}from"./class-map-20d48808.js";import n from"C:Testcarbon-for-ibm-dotcompackagescarbon-web-componentssrcglobalsdirectivesspread";import{s as l}from"./16-43f1f9a0.js";import{F as d,a as b}from"./floating-menu-636eec18.js";import{i as p}from"./if-non-empty-a4d8db3b.js";import{F as x}from"./form-bac99484.js";import{V as u}from"./validity-842564c4.js";import{F as c}from"./shared-enums-c2286c7f.js";import{c as f}from"./carbon-element-e1a2f0d2.js";import{q as v,p as h}from"./decorators-56213c84.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let g,m;!function(t){t.SMALL="sm",t.REGULAR="md",t.LARGE="lg",t.EXTRA_LARGE="xl"}(g||(g={})),function(t){t.EMAIL="email",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.URL="url"}(m||(m={}));var _=i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0);line-height:var(--cds-productive-heading-06-line-height,1.199)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,300);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0);line-height:var(--cds-productive-heading-05-line-height,1.25)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);line-height:var(--cds-productive-heading-02-line-height,1.375)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);line-height:var(--cds-productive-heading-01-line-height,1.28572)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);letter-spacing:var(--cds-body-long-02-letter-spacing,0);line-height:var(--cds-body-long-02-line-height,1.5)}a{color:#0f62fe}em{font-style:italic}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:right}20%{opacity:1;transform:scaleX(1);transform-origin:right}28%{transform:scaleX(1);transform-origin:left}51%{transform:scaleX(0);transform-origin:left}58%{transform:scaleX(0);transform-origin:left}82%{transform:scaleX(1);transform-origin:left}83%{transform:scaleX(1);transform-origin:right}96%{transform:scaleX(0);transform-origin:right}to{opacity:.3;transform:scaleX(0);transform-origin:right}}.bx--assistive-text,.bx--visually-hidden{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap;width:1px}.bx--body{background-color:var(--cds-ui-background,#fff);border:0;box-sizing:border-box;color:var(--cds-text-01,#161616);font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);line-height:1;margin:0;padding:0;vertical-align:baseline}.bx--body *,.bx--body :after,.bx--body :before{box-sizing:inherit}.bx--text-truncate--end,.bx--text-truncate--front{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.bx--text-truncate--front{direction:ltr}.bx--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0 0 2rem;padding:0;vertical-align:baseline}.bx--fieldset *,.bx--fieldset :after,.bx--fieldset :before{box-sizing:inherit}.bx--fieldset--no-margin{margin-bottom:0}.bx--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572)}.bx--label{border:0;box-sizing:border-box;color:var(--cds-text-02,#525252);display:inline-block;font-family:inherit;font-size:100%;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin:0 0 .5rem;padding:0;vertical-align:baseline}.bx--label *,.bx--label :after,.bx--label :before{box-sizing:inherit}.bx--label .bx--tooltip__trigger{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.bx--label.bx--skeleton{background:var(--cds-skeleton-01,#e5e5e5);border:none;box-shadow:none;height:.875rem;padding:0;pointer-events:none;position:relative;width:4.6875rem}.bx--label.bx--skeleton:active,.bx--label.bx--skeleton:focus,.bx--label.bx--skeleton:hover{border:none;cursor:default;outline:none}.bx--label.bx--skeleton:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-02,#c6c6c6);content:"";height:100%;position:absolute;right:0;top:0;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--label.bx--skeleton:before{animation:none}}input[type=number]{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper--warn~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box--warning~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--number__input-wrapper--warning~.bx--form-requirement,.bx--select--warning .bx--select-input__wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper--warning>.bx--text-input~.bx--form-requirement,.bx--text-input__field-wrapper--warning~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{display:block;font-weight:400;max-height:12.5rem;overflow:visible}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{color:var(--cds-text-error,#da1e28)}.bx--form--fluid .bx--text-input__field-wrapper--warning,.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]{display:block}.bx--form--fluid .bx--fieldset{margin:0}.bx--form--fluid input[data-invalid]{outline:none}.bx--form--fluid .bx--form-requirement{margin:0;padding:.5rem 1rem .5rem 2.5rem}input:not(output):not([data-invalid]):-moz-ui-invalid{box-shadow:none}.bx--form-requirement{border:0;box-sizing:border-box;display:none;font-family:inherit;font-size:100%;font-size:var(--cds-caption-01-font-size,.75rem);font-weight:var(--cds-caption-01-font-weight,400);letter-spacing:var(--cds-caption-01-letter-spacing,.32px);line-height:var(--cds-caption-01-line-height,1.33333);margin:.25rem 0 0;max-height:0;overflow:hidden;padding:0;vertical-align:baseline}.bx--form-requirement *,.bx--form-requirement :after,.bx--form-requirement :before{box-sizing:inherit}.bx--select--inline .bx--form__helper-text{margin-top:0}.bx--form__helper-text{color:var(--cds-text-02,#525252);font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-top:.25rem;opacity:1;width:100%;z-index:0}.bx--form__helper-text--disabled,.bx--label--disabled,fieldset[disabled] .bx--form__helper-text,fieldset[disabled] .bx--label{color:var(--cds-disabled-02,#c6c6c6)}.bx--text-input{background-color:var(--cds-field-01,#f4f4f4);border:none;border-bottom:1px solid var(--cds-ui-04,#8d8d8d);box-sizing:border-box;color:var(--cds-text-01,#161616);font-family:inherit;font-size:100%;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);height:2.5rem;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);margin:0;outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline;width:100%}.bx--text-input *,.bx--text-input :after,.bx--text-input :before{box-sizing:inherit}.bx--text-input:active,.bx--text-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--text-input:active,.bx--text-input:focus{outline-style:dotted}}.bx--text-input-wrapper svg[hidden]{display:none}.bx--text-input--lg,.bx--text-input--xl{height:3rem}.bx--text-input--sm{height:2rem}.bx--password-input{padding-left:2.5rem}.bx--text-input--sm.bx--password-input{padding-left:2rem}.bx--text-input--lg.bx--password-input{padding-left:3rem}.bx--text-input::-moz-placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--text-input::placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--text-input--light{background-color:var(--cds-field-02,#fff)}.bx--text-input__field-wrapper{display:flex;position:relative;width:100%}.bx--text-input__invalid-icon,.bx--text-input__readonly-icon{left:1rem;position:absolute;top:50%;transform:translateY(-50%)}.bx--text-input__invalid-icon{fill:var(--cds-support-01,#da1e28)}.bx--text-input__invalid-icon--warning{fill:var(--cds-support-03,#f1c21b)}.bx--text-input__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.bx--text-input--password__visibility{align-items:center;cursor:pointer;display:inline-flex;overflow:visible;position:relative}.bx--text-input--password__visibility:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.bx--text-input--password__visibility:focus{outline-style:dotted}}.bx--text-input--password__visibility:focus{outline:1px solid transparent}.bx--text-input--password__visibility:focus svg{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.bx--text-input--password__visibility:focus svg{outline-style:dotted}}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after,.bx--text-input--password__visibility:before{align-items:center;display:flex;opacity:0;pointer-events:none;position:absolute;z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after,.bx--text-input--password__visibility:before{display:inline-block}}.bx--text-input--password__visibility:after,.bx--text-input--password__visibility:before{transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.bx--text-input--password__visibility:after,.bx--text-input--password__visibility:before{transition:none}}.bx--text-input--password__visibility.bx--tooltip--a11y:after,.bx--text-input--password__visibility.bx--tooltip--a11y:before{transition:none}.bx--text-input--password__visibility:before{border-style:solid;content:"";height:0;width:0}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{box-sizing:content-box;color:inherit;opacity:1;white-space:normal;word-break:break-word}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after{background-color:var(--cds-inverse-02,#393939);border-radius:.125rem;box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));color:var(--cds-inverse-01,#fff);font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:400;font-weight:var(--cds-body-short-01-font-weight,400);height:auto;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);max-width:13rem;min-width:1.5rem;padding:.1875rem 1rem;text-align:right;transform:translateX(50%);width:-moz-max-content;width:max-content;z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after{width:auto}}@supports (-ms-accelerator:true){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after{width:auto}}@supports (-ms-ime-align:auto){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after{width:auto}}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after{border:1px solid transparent}}.bx--text-input--password__visibility:after{content:attr(aria-label)}.bx--text-input--password__visibility.bx--tooltip--a11y:after{content:none}.bx--text-input--password__visibility.bx--tooltip--visible:after,.bx--text-input--password__visibility.bx--tooltip--visible:before,.bx--text-input--password__visibility:focus:after,.bx--text-input--password__visibility:focus:before,.bx--text-input--password__visibility:hover:after,.bx--text-input--password__visibility:hover:before{opacity:1}@keyframes tooltip-fade{0%{opacity:0}to{opacity:1}}.bx--text-input--password__visibility.bx--tooltip--visible .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible+.bx--assistive-text,.bx--text-input--password__visibility:focus .bx--assistive-text,.bx--text-input--password__visibility:focus+.bx--assistive-text,.bx--text-input--password__visibility:hover .bx--assistive-text,.bx--text-input--password__visibility:hover+.bx--assistive-text{clip:auto;margin:auto;overflow:visible}.bx--text-input--password__visibility.bx--tooltip--visible .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible+.bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible.bx--tooltip--a11y:before,.bx--text-input--password__visibility:focus .bx--assistive-text,.bx--text-input--password__visibility:focus+.bx--assistive-text,.bx--text-input--password__visibility:focus.bx--tooltip--a11y:before,.bx--text-input--password__visibility:hover .bx--assistive-text,.bx--text-input--password__visibility:hover+.bx--assistive-text,.bx--text-input--password__visibility:hover.bx--tooltip--a11y:before{animation:tooltip-fade 70ms cubic-bezier(.2,0,.38,.9)}.bx--text-input--password__visibility.bx--tooltip--hidden .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--hidden+.bx--assistive-text{clip:rect(0,0,0,0);margin:-1px;overflow:hidden}.bx--text-input--password__visibility.bx--tooltip--hidden.bx--tooltip--a11y:before{animation:none;opacity:0}.bx--text-input--password__visibility .bx--assistive-text:after{content:"";display:block;height:.75rem;position:absolute;right:0;top:-.75rem;width:100%}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after,.bx--text-input--password__visibility:before{bottom:0;right:50%}.bx--text-input--password__visibility:before{border-color:transparent transparent var(--cds-inverse-02,#393939) transparent;border-width:0 .25rem .3125rem;bottom:-.5rem;transform:translate(50%,100%)}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility:after{bottom:-.8125rem;transform:translate(50%,100%)}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger,.bx--text-input--password__visibility{align-items:center;background:none;border:0;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;min-height:auto;outline:2px solid transparent;outline-offset:-2px;padding:0;position:absolute;transition:outline 70ms cubic-bezier(.2,0,.38,.9);width:2.5rem}.bx--text-input--sm+.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger{width:2rem}.bx--text-input--lg+.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger{width:3rem}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252);transition:fill 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{fill:ButtonText}}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus{outline-style:dotted}}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus svg,.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:hover svg{fill:var(--cds-icon-primary,#161616)}.bx--text-input--invalid,.bx--text-input--warning,.bx--text-input-wrapper--readonly .bx--text-input{padding-left:2.5rem}.bx--text-input--invalid.bx--password-input{padding-left:4rem}.bx--text-input--invalid+.bx--text-input--password__visibility,.bx--text-input--invalid+.bx--text-input--password__visibility__toggle{left:1rem}.bx--password-input-wrapper .bx--text-input__invalid-icon{left:2.5rem}.bx--text-input:disabled+.bx--text-input--password__visibility svg,.bx--text-input:disabled+.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{fill:var(--cds-disabled-02,#c6c6c6);cursor:not-allowed}.bx--text-input:disabled+.bx--text-input--password__visibility svg:hover,.bx--text-input:disabled+.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg:hover{fill:var(--cds-disabled-02,#c6c6c6)}.bx--text-input:disabled{-webkit-text-fill-color:var(--cds-disabled-02,#c6c6c6);background-color:var(--cds-field,#f4f4f4);border-bottom:1px solid transparent;color:var(--cds-text-disabled,#c6c6c6);cursor:not-allowed;outline:2px solid transparent;outline-offset:-2px}.bx--text-input--light:disabled{background-color:var(--cds-field-02,#fff)}.bx--text-input:disabled::-moz-placeholder{color:var(--cds-disabled-02,#c6c6c6);opacity:1}.bx--text-input:disabled::placeholder{color:var(--cds-disabled-02,#c6c6c6);opacity:1}.bx--text-input--invalid{box-shadow:none;outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.bx--text-input--invalid{outline-style:dotted}}.bx--text-input--invalid .bx--text-input--password__visibility,.bx--text-input--invalid .bx--text-input--password__visibility__toggle{left:2.5rem}.bx--skeleton.bx--text-input{background:var(--cds-skeleton-01,#e5e5e5);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.bx--skeleton.bx--text-input:active,.bx--skeleton.bx--text-input:focus,.bx--skeleton.bx--text-input:hover{border:none;cursor:default;outline:none}.bx--skeleton.bx--text-input:before{animation:skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-02,#c6c6c6);content:"";height:100%;position:absolute;right:0;top:0;width:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--skeleton.bx--text-input:before{animation:none}}.bx--form--fluid .bx--text-input-wrapper{background:var(--cds-field-01,#f4f4f4);position:relative;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.bx--form--fluid .bx--label{margin:0;position:absolute;right:1rem;top:.8125rem;z-index:1}.bx--form--fluid .bx--form__helper-text{display:none}.bx--form--fluid .bx--text-input{min-height:4rem;padding:2rem 1rem .8125rem}.bx--form--fluid .bx--text-input__divider,.bx--text-input__divider{display:none}.bx--form--fluid .bx--text-input--invalid,.bx--form--fluid .bx--text-input--warn{border-bottom:none}.bx--form--fluid .bx--text-input--invalid+.bx--text-input__divider,.bx--form--fluid .bx--text-input--warn+.bx--text-input__divider{border-color:var(--cds-ui-03,#e0e0e0);border-style:solid;border-bottom:none;display:block;margin:0 1rem}.bx--form--fluid .bx--text-input__invalid-icon{top:5rem}.bx--form--fluid .bx--text-input-wrapper--light{background:var(--cds-field-02,#fff)}.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid{outline:2px solid transparent;outline-offset:-2px}.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]:not(:focus){outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]:not(:focus){outline-style:dotted}}.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:focus{outline-style:dotted}}.bx--text-input-wrapper.bx--text-input-wrapper--inline{flex-flow:row wrap}.bx--text-input-wrapper .bx--label--inline{flex:1;margin:.8125rem 0 0;overflow-wrap:break-word;word-break:break-word}.bx--text-input-wrapper .bx--label--inline--sm{margin-top:.5625rem}.bx--text-input-wrapper .bx--label--inline--lg,.bx--text-input-wrapper .bx--label--inline--xl{margin-top:1.0625rem}.bx--text-input__label-helper-wrapper{flex:2;flex-direction:column;margin-left:1.5rem;max-width:8rem;overflow-wrap:break-word}.bx--text-input-wrapper .bx--form__helper-text--inline{margin-top:.125rem}.bx--text-input__field-outer-wrapper{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;width:100%}.bx--text-input__field-outer-wrapper--inline{flex:8;flex-direction:column}.bx--form--fluid .bx--text-input-wrapper--readonly,.bx--text-input-wrapper--readonly .bx--text-input{background:transparent}@media (forced-colors:active),screen and (-ms-high-contrast:active){.bx--btn.bx--btn--icon-only.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg,.bx--btn.bx--btn--icon-only.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:hover svg,.bx--text-input--password__visibility{fill:ButtonText}}:host(bx-input){outline:none;width:100%}:host(bx-input[show-password-visibility-toggle]) .bx--text-input{padding-left:var(--cds-spacing-08,2.5rem)}:host(bx-input[show-password-visibility-toggle][size=sm]) .bx--text-input__invalid-icon{left:var(--cds-spacing-07,2rem)}:host(bx-input[show-password-visibility-toggle]) .bx--text-input__invalid-icon,:host(bx-input[show-password-visibility-toggle][size=md]) .bx--text-input__invalid-icon{left:var(--cds-spacing-08,2.5rem)}:host(bx-input[show-password-visibility-toggle][size=lg]) .bx--text-input__invalid-icon{left:var(--cds-spacing-09,3rem)}']);let w,y,k,z=t=>t;const{prefix:$}=o;let q=e([f(`${$}-input`)],(function(i,e){return{F:class extends e{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[v("input")],key:"_input",value:void 0},{kind:"field",key:"_value",value:()=>""},{kind:"method",key:"_handleInput",value:function({target:t}){this.value=t.value}},{kind:"method",key:"_handleFormdata",value:function(t){const{formData:i}=t,{disabled:e,name:r,value:o}=this;e||i.append(r,o)}},{kind:"field",decorators:[h()],key:"autocomplete",value:()=>""},{kind:"field",decorators:[h({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[h({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>c.REGULAR},{kind:"field",decorators:[h({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[h({attribute:"helper-text"})],key:"helperText",value:()=>""},{kind:"field",decorators:[h({type:Boolean,reflect:!0})],key:"invalid",value:()=>!1},{kind:"field",decorators:[h({attribute:"label-text"})],key:"labelText",value:()=>""},{kind:"field",decorators:[h()],key:"name",value:()=>""},{kind:"field",decorators:[h()],key:"pattern",value:()=>""},{kind:"field",decorators:[h({reflect:!0})],key:"placeholder",value:()=>""},{kind:"field",decorators:[h({type:Boolean,reflect:!0})],key:"readonly",value:()=>!1},{kind:"field",decorators:[h({type:Boolean,reflect:!0})],key:"required",value:()=>!1},{kind:"field",decorators:[h({attribute:"required-validity-message"})],key:"requiredValidityMessage",value:()=>"Please fill out this field."},{kind:"field",decorators:[h()],key:"hidePasswordLabel",value:()=>"Hide password"},{kind:"field",decorators:[h()],key:"showPasswordLabel",value:()=>"Show password"},{kind:"field",decorators:[h({type:Boolean,attribute:"show-password-visibility-toggle",reflect:!0})],key:"showPasswordVisibilityToggle",value:()=>!1},{kind:"field",decorators:[h({reflect:!0})],key:"size",value:()=>g.REGULAR},{kind:"field",decorators:[h()],key:"tooltipAlignment",value:()=>d.CENTER},{kind:"field",decorators:[h()],key:"tooltipDirection",value:()=>b.BOTTOM},{kind:"field",decorators:[h({reflect:!0})],key:"type",value:()=>m.TEXT},{kind:"field",decorators:[h({attribute:"validity-message"})],key:"validityMessage",value:()=>""},{kind:"get",decorators:[h({reflect:!0})],key:"value",value:function(){return this._input?this._input.value:this._value}},{kind:"set",key:"value",value:function(t){const i=this._value;this._value=t,this.requestUpdate("value",i),this._input&&(this._input.value=t)}},{kind:"method",key:"createRenderRoot",value:function(){var t;return this.attachShadow({mode:"open",delegatesFocus:Number((null!==(t=/Safari\/(\d+)/.exec(navigator.userAgent))&&void 0!==t?t:["",0])[1])<=537})}},{kind:"method",key:"handleTogglePasswordVisibility",value:function(){this.type=this.type===m.PASSWORD?m.TEXT:m.PASSWORD}},{kind:"method",key:"render",value:function(){const{_handleInput:i}=this,e=l({class:`${$}--text-input__invalid-icon`}),o=a({[`${$}--text-input`]:!0,[`${$}--text-input--${this.colorScheme}`]:this.colorScheme,[`${$}--text-input--invalid`]:this.invalid,[`${$}--text-input--${this.size}`]:this.size,[`${$}--password-input`]:this.type===m.PASSWORD}),s=a({[`${$}--label`]:!0,[`${$}--label--disabled`]:this.disabled}),d=a({[`${$}--form__helper-text`]:!0,[`${$}--form__helper-text--disabled`]:this.disabled}),b=this.type!==m.PASSWORD,x=b?(({children:i,...e}={})=>t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${n(e)}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${i}${i}<path d="M2.6,11.3l0.7-0.7C2.6,9.8,1.9,9,1.5,8c1-2.5,3.8-4.5,6.5-4.5c0.7,0,1.4,0.1,2,0.4l0.8-0.8C9.9,2.7,9,2.5,8,2.5	C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3C1,9.3,1.7,10.4,2.6,11.3z"></path><path d="M6 7.9c.1-1 .9-1.8 1.8-1.8l.9-.9C7.2 4.7 5.5 5.6 5.1 7.2 5 7.7 5 8.3 5.1 8.8L6 7.9zM15.5 7.8c-.6-1.5-1.6-2.8-2.9-3.7L15 1.7 14.3 1 1 14.3 1.7 15l2.6-2.6c1.1.7 2.4 1 3.7 1.1 3.3-.1 6.3-2.2 7.5-5.3C15.5 8.1 15.5 7.9 15.5 7.8zM10 8c0 1.1-.9 2-2 2-.3 0-.7-.1-1-.3L9.7 7C9.9 7.3 10 7.6 10 8zM8 12.5c-1 0-2.1-.3-3-.8l1.3-1.3c1.4.9 3.2.6 4.2-.8.7-1 .7-2.4 0-3.4l1.4-1.4c1.1.8 2 1.9 2.6 3.2C13.4 10.5 10.6 12.5 8 12.5z"></path></svg>`)({class:`${$}--icon-visibility-off`}):(({children:i,...e}={})=>t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${n(e)}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${i}${i}<path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path></svg>`)({class:`${$}--icon-visibility-on`}),u=a({[`${$}--text-input--password__visibility__toggle`]:!0,[`${$}--btn`]:!0,[`${$}--btn--icon-only`]:!0,[`${$}--tooltip__trigger`]:!0,[`${$}--tooltip--a11y`]:!0,[`${$}--btn--disabled`]:this.disabled,[`${$}--tooltip--${this.tooltipDirection}`]:this.tooltipDirection,[`${$}--tooltip--align-${this.tooltipAlignment}`]:this.tooltipAlignment}),c=r(w||(w=z` <span class="${0}--assistive-text"> ${0} </span> `),$,b?this.hidePasswordLabel:this.showPasswordLabel);return r(k||(k=z` <label class="${0}" for="input"> <slot name="label-text"> ${0} </slot> </label> <div class="${0}--text-input__field-wrapper" ?data-invalid="${0}"> ${0} <input autocomplete="${0}" ?autofocus="${0}" class="${0}" ?data-invalid="${0}" ?disabled="${0}" aria-describedby="helper-text" id="input" name="${0}" pattern="${0}" placeholder="${0}" ?readonly="${0}" ?required="${0}" type="${0}" .value="${0}" @input="${0}"> ${0} </div> <div class="${0}" id="helper-text"> <slot name="helper-text"> ${0} </slot> </div> <div class="${0}--form-requirement"> <slot name="validity-message"> ${0} </slot> </div> `),s,this.labelText,$,this.invalid,this.invalid?e:null,this.autocomplete,this.autofocus,o,this.invalid,this.disabled,p(this.name),p(this.pattern),p(this.placeholder),this.readonly,this.required,p(this.type),this._value,i,!this.showPasswordVisibilityToggle||this.type!==m.PASSWORD&&this.type!==m.TEXT?null:(()=>r(y||(y=z` <button type="button" class="${0}" ?disabled="${0}" @click="${0}"> ${0} ${0} </button> `),u,this.disabled,this.handleTogglePasswordVisibility,!this.disabled&&c,x))(),d,this.helperText,$,this.validityMessage)}},{kind:"field",static:!0,key:"styles",value:()=>_}]}}),u(x(s)));export{q as B,g as I};
