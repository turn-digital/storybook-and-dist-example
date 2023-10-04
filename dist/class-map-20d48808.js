/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{d as t,A as e,P as s}from"./settings-f1ddfc10.js";
/**
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
 */
class a{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const c=new WeakMap,i=t((t=>i=>{if(!(i instanceof e)||i instanceof s||"class"!==i.committer.name||i.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=i,{element:o}=n;let r=c.get(i);void 0===r&&(o.setAttribute("class",n.strings.join(" ")),c.set(i,r=new Set));const d=o.classList||new a(o);r.forEach((e=>{e in t||(d.remove(e),r.delete(e))}));for(const e in t){const s=t[e];s!=r.has(e)&&(s?(d.add(e),r.add(e)):(d.remove(e),r.delete(e)))}"function"==typeof d.commit&&d.commit()}));export{i as c};
