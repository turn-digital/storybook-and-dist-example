/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{_ as a}from"./defineProperty-ef41d987.js";import{o as t}from"./on-b85e61ad.js";const s=s=>class extends s{constructor(...t){super(...t),a(this,"_hFormdata",null)}connectedCallback(){super.connectedCallback();const a=this.closest("form");a&&(this._hFormdata=t(a,"formdata",this._handleFormdata.bind(this)))}disconnectedCallback(){this._hFormdata&&(this._hFormdata=this._hFormdata.release()),super.disconnectedCallback()}};export{s as F};
