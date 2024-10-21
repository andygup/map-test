import{r as i}from"./index-C-FXvluM.js";import{A as s}from"./dom-BREfK1_w.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */const n=i;function r(e){return"opened"in e?e.opened:e.open}function f(e){n(()=>{e.transitionEl&&s(e.transitionEl,e.openTransitionProp,()=>{r(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{r(e)?e.onOpen():e.onClose()})})}export{f as o};
