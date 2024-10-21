import{h as w,H as P,k as l,r as C,l as s,q as x}from"./index-C5AN6gIb.js";import{f as H,c as L,a as D,b as F,r as R,F as m}from"./floating-ui-C_rWs4-h.js";import{d as h,a as u,c as A,u as O}from"./focusTrapComponent-7oqHJDIf.js";import{k as z,t as g,h as T,q as B,o as S}from"./dom-C5N_1hiZ.js";import{o as v}from"./openCloseComponent-BZMSNP3t.js";import{H as M}from"./Heading-DA3D04z6.js";import{c as _,d as U}from"./locale-BqOq_HI1.js";import{u as I,c as q,s as $,d as K}from"./t9n-CNLrLhpx.js";import{a as j,s as V,c as W}from"./loadable-CIDEs4qX.js";import{c as X}from"./observers-DkXuzKPz.js";import{F as G}from"./FloatingArrow-D9qZTw40.js";import{g as J}from"./component-CeOigQot.js";import{i as N}from"./key-BSF9a80T.js";import{d as Q}from"./action-C9RvJ6oL.js";import{d as Y}from"./icon-C-hoQ7C9.js";import{d as Z}from"./loader-JN6lUMag.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */class ee{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,i=e.find(o=>t.has(o));return t.get(i)},this.togglePopovers=e=>{const t=e.composedPath(),i=this.queryPopover(t);i&&!i.triggerDisabled&&(i.open=!i.open),Array.from(this.registeredElements.values()).filter(o=>o!==i&&o.autoClose&&o.open&&!t.includes(o)).forEach(o=>o.open=!1)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():N(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{S(e)||this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const r={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",headerContent:"header-content",heading:"heading"},te="auto",b="aria-controls",E="aria-expanded",ie=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",oe=ie,k=new ee,se=w(class extends P{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=l(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=l(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=l(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=l(this,"calcitePopoverOpen",6),this.mutationObserver=X("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${z()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?H(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),L(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:o}=this;e&&i&&!o&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(E,g(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(b,t),k.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(b),e.removeAttribute(E)),k.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=D,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=te,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?h(this):u(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){v(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){I(this,this.effectiveLocale)}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),_(this),q(this),A(this),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async componentWillLoad(){await $(this),j(this)}componentDidLoad(){V(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&v(this),this.hasLoaded=!0}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect(),this.removeReferences(),U(this),K(this),F(this,this.effectiveReferenceElement,this.el),h(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:o,overlayPositioning:c,flipDisabled:d,filteredFlipPlacements:n,offsetDistance:a,offsetSkidding:f,arrowEl:y}=this;return R(this,{floatingEl:t,referenceEl:i,overlayPositioning:c,placement:o,flipDisabled:d,flipPlacements:n,offsetDistance:a,offsetSkidding:f,arrowEl:y,type:"popover"},e)}async setFocus(){await W(this),C(this.el),T(this.el)}async updateFocusTrapElements(){O(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?B(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),u(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),h(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?s("div",{class:r.closeButtonContainer,key:r.closeButtonContainer},s("calcite-action",{appearance:"transparent",class:r.closeButton,onClick:this.hide,ref:i=>this.closeButtonEl=i,scale:this.scale,text:e.close},s("calcite-icon",{icon:"x",scale:J(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,i=e?s(M,{class:r.heading,level:t},e):null;return i?s("div",{class:r.header,key:r.header},i,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:i,open:o,pointerDisabled:c,floatingLayout:d}=this,n=e&&o,a=!n,f=c?null:s(G,{floatingLayout:d,key:"floating-arrow",ref:this.storeArrowEl});return s(x,{key:"a563d48090d6e6c0c138023e169667834f657c4c","aria-hidden":g(a),"aria-label":i,"aria-live":"polite","calcite-hydrated-hidden":a,id:this.getId(),role:"dialog"},s("div",{key:"73053dbdce2cfc68fcd42667089d611e81010955",class:{[r.container]:!0,[m.animation]:!0,[m.animationActive]:n},ref:this.setTransitionEl},f,s("div",{key:"1fbcd45ee42b10a67881ced74db2db051231c94d",class:{[r.hasHeader]:!!t,[r.headerContainer]:!0}},this.renderHeader(),s("div",{key:"522abe801b98787863aac14d990b948d2d286156",class:r.content},s("slot",{key:"022a8f690288acdbac4ec1b3eccf807ffe382d5d"})),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return oe}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function re(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,se);break;case"calcite-action":customElements.get(e)||Q();break;case"calcite-icon":customElements.get(e)||Y();break;case"calcite-loader":customElements.get(e)||Z();break}})}re();export{se as P,re as d};
