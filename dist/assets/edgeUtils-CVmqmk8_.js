import{kr as i,kF as f,e3 as p,e7 as o}from"./index-C-FXvluM.js";import"./floatRGBA-omvZ6LNc.js";import"./symbolColorUtils-D2BjTDpb.js";import"./NormalAttribute.glsl-BzcwcK9j.js";import"./BindType-BmZEZMMh.js";function U(n){return n.type==="fill"}function T(n){return n.type==="extrude"}var t;(function(n){n[n.TRANSPARENT=0]="TRANSPARENT",n[n.OPAQUE=1]="OPAQUE"})(t||(t={}));var s;(function(n){n[n.Uniform=0]="Uniform",n[n.Varying=1]="Varying",n[n.COUNT=2]="COUNT"})(s||(s={}));var r,a;(function(n){n[n.Solid=0]="Solid",n[n.Sketch=1]="Sketch",n[n.Mixed=2]="Mixed",n[n.COUNT=3]="COUNT"})(r||(r={})),function(n){n[n.REGULAR=0]="REGULAR",n[n.SILHOUETTE=1]="SILHOUETTE"}(a||(a={}));function R(n){return n&&n.enabled&&(T(n)||U(n))&&n.edges!=null}function d(n){return n&&n.enabled&&n.edges||null}function N(n,e){return h(d(n),e)}function h(n,e){if(n==null)return null;const c=n.color!=null?f(p.toUnitRGBA(n.color)):i(0,0,0,0),u=o(n.size),l=o(n.extensionLength);switch(n.type){case"solid":return E({color:c,size:u,extensionLength:l,...e});case"sketch":return S({color:c,size:u,extensionLength:l,...e});default:return}}function E(n){return{...x,...n,type:r.Solid}}function S(n){return{...y,...n,type:r.Sketch}}const x={color:i(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:t.OPAQUE,hasSlicePlane:!1},y={color:i(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:t.OPAQUE,hasSlicePlane:!1};export{t as A,N as a,R as c,E as g};