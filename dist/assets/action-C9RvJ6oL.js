import{h as y,H as k,r as C,u as w,l as e,q as z}from"./index-C5AN6gIb.js";import{k as I,t as p}from"./dom-C5N_1hiZ.js";import{u as E,I as L}from"./interactive-CmWnkkOC.js";import{a as T,s as S,c as M}from"./loadable-CIDEs4qX.js";import{c as O,d as $}from"./locale-BqOq_HI1.js";import{c as F}from"./observers-DkXuzKPz.js";import{g as H}from"./component-CeOigQot.js";import{u as A,c as R,s as W,d as j}from"./t9n-CNLrLhpx.js";import{d as D}from"./icon-C-hoQ7C9.js";import{d as V}from"./loader-JN6lUMag.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */const i={button:"button",buttonTextVisible:"button--text-visible",buttonCompact:"button--compact",indicatorText:"indicator-text",iconContainer:"icon-container",slotContainer:"slot-container",slotContainerHidden:"slot-container--hidden",textContainer:"text-container",textContainerVisible:"text-container--visible",indicatorWithIcon:"indicator-with-icon",indicatorWithoutIcon:"indicator-without-icon"},_={tooltip:"tooltip"},U=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host,button{border-end-end-radius:var(--calcite-action-corner-radius-end-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-end-start-radius:var(--calcite-action-corner-radius-end-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-end-radius:var(--calcite-action-corner-radius-start-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-start-radius:var(--calcite-action-corner-radius-start-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)))}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-color-text-3));text-align:unset;flex:1 0 auto}.button:hover,.button:focus{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1))}.button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.button:active{background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}.icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1));background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,B=U,q=y(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=F("mutation",()=>C(this)),this.guid=`calcite-action-${I()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=t=>{const o=t.target.assignedElements({flatten:!0}).filter(a=>a==null?void 0:a.matches("calcite-tooltip"))[0];o&&(o.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){A(this,this.effectiveLocale)}connectedCallback(){var t;O(this),R(this),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){T(this),w()&&await W(this)}componentDidLoad(){S(this)}disconnectedCallback(){var t;$(this),j(this),(t=this.mutationObserver)==null||t.disconnect()}componentDidRender(){E(this)}async setFocus(){var t;await M(this),(t=this.buttonEl)==null||t.focus()}renderTextContainer(){const{text:t,textEnabled:n}=this,o={[i.textContainer]:!0,[i.textContainerVisible]:n};return t?e("div",{class:o,key:"text-container"},t):null}renderIndicatorText(){const{indicator:t,messages:n,indicatorId:o,buttonId:a}=this;return e("div",{"aria-labelledby":a,"aria-live":"polite",class:i.indicatorText,id:o,role:"region"},t?n.indicator:null)}renderIconContainer(){var r;const{loading:t,icon:n,scale:o,el:a,iconFlipRtl:l,indicator:d}=this,u=o==="l"?"l":"m",b=t?e("calcite-loader",{inline:!0,label:this.messages.loading,scale:u}):null,c=n?e("calcite-icon",{class:{[i.indicatorWithIcon]:d},flipRtl:l,icon:n,scale:H(this.scale)}):null,s=b||c,h=s||((r=a.children)==null?void 0:r.length),f=e("div",{class:{[i.slotContainer]:!0,[i.slotContainerHidden]:t}},e("slot",null));return h?e("div",{"aria-hidden":"true",class:i.iconContainer,key:"icon-container"},s,f):null}render(){const{active:t,compact:n,disabled:o,icon:a,loading:l,textEnabled:d,label:u,text:b,indicator:c,indicatorId:s,buttonId:h,messages:f}=this,r=u||b,v=r?`${r}${c?` (${f.indicator})`:""}`:"",g={[i.button]:!0,[i.buttonTextVisible]:d,[i.buttonCompact]:n};return e(z,{key:"3b459307dcb6f8d373e70cd5c7a45d122565a70e"},e(L,{key:"3a81f1fb62a66f1dbd608f095ed90f2d47a9daf6",disabled:o},e("button",{key:"bb5249babc116d462becd6b9a056ca0d368c6e09","aria-busy":p(l),"aria-controls":c?s:null,"aria-label":v,"aria-pressed":p(t),class:g,disabled:o,id:h,ref:x=>this.buttonEl=x},this.renderIconContainer(),this.renderTextContainer(),!a&&c&&e("div",{class:i.indicatorWithoutIcon,key:"indicator-no-icon"})),e("slot",{key:"983989711d64076eca866c1928f9c777331fcba4",name:_.tooltip,onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return B}},[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],iconFlipRtl:[516,"icon-flip-rtl"],indicator:[516],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function G(){if(typeof customElements>"u")return;["calcite-action","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-action":customElements.get(t)||customElements.define(t,q);break;case"calcite-icon":customElements.get(t)||D();break;case"calcite-loader":customElements.get(t)||V();break}})}G();export{q as A,G as d};
