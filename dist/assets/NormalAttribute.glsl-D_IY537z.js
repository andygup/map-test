import{hm as l,hn as a,ho as i}from"./index-DzfnmjFP.js";var r;function v(e){return h(e)||e===r.Depth||e===r.Normal||e===r.ObjectAndLayerIdColor}function h(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function f(e){return m(e)||e===r.Normal}function d(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function w(e){return e===r.Color||d(e)}function o(e){return e===r.Color}function C(e){return o(e)||e===r.ObjectAndLayerIdColor}function u(e){return o(e)||e===r.Highlight}function p(e){return u(e)||c(e)}function s(e){return o(e)||d(e)}function m(e){return s(e)||c(e)}function c(e){return e===r.Depth}(function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.ViewshedShadow=6]="ViewshedShadow",e[e.Highlight=7]="Highlight",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"})(r||(r={}));function S(e,t){switch(t.normalType){case n.Compressed:e.attributes.add(i.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(i.NORMAL,"vec3"),e.vertex.code.add(a`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:l(t.normalType);case n.COUNT:case n.Ground:}}var n;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(n||(n={}));export{n as a,v as b,m as c,s as d,w as e,C as f,c as g,d as h,o as i,p as l,f as n,r as o,h as r,S as t};
