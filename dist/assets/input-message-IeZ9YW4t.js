import{h as c,H as o,l as t,q as a}from"./index-C5AN6gIb.js";import{b as i}from"./dom-C5N_1hiZ.js";import{d as l}from"./icon-C-hoQ7C9.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */const s={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"},r=":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}",d=r,u=c(class extends o{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=i(s,this.icon,this.status)}connectedCallback(){this.requestedIcon=i(s,this.icon,this.status)}render(){const e=this.el.hidden;return t(a,{key:"c7d1b37721cec28dee1020b81ff66dee7fc8bc44","calcite-hydrated-hidden":e},this.renderIcon(this.requestedIcon),t("slot",{key:"7147d81e906765c154b4a61e31706a72c1ef3ae0"}))}renderIcon(e){if(e)return t("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}get el(){return this}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}static get style(){return d}},[1,"calcite-input-message",{icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],status:[513]},void 0,{status:["handleIconEl"],icon:["handleIconEl"]}]);function h(){if(typeof customElements>"u")return;["calcite-input-message","calcite-icon"].forEach(e=>{switch(e){case"calcite-input-message":customElements.get(e)||customElements.define(e,u);break;case"calcite-icon":customElements.get(e)||l();break}})}h();export{u as I,h as d};
