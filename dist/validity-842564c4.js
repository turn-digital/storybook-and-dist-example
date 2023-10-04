/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let i;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(i){i.NO_ERROR="",i.ERROR_REQUIRED="required"}(i||(i={}));const t=t=>class extends t{_getValidityMessage(t){return{[i.NO_ERROR]:"",[i.ERROR_REQUIRED]:this.requiredValidityMessage}[t]}_testValidity(){const{required:t,value:e}=this;return t&&!e?i.ERROR_REQUIRED:i.NO_ERROR}checkValidity(){const t=this._testValidity();return t!==i.NO_ERROR?(this.dispatchEvent(new CustomEvent("invalid",{bubbles:!1,cancelable:!0,composed:!1}))&&(this.invalid=!0,this.validityMessage=this._getValidityMessage(t)),!1):(this.invalid=!1,this.validityMessage="",!0)}setCustomValidity(i){this.invalid=Boolean(i),this.validityMessage=i}};export{t as V};
