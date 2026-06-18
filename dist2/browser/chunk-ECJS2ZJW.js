import{a as m}from"./chunk-SYFPWUTB.js";import{a as s}from"./chunk-SNAZ42PQ.js";import{a as o,b as t}from"./chunk-YSASWMAG.js";import{a as n}from"./chunk-NMKLVORY.js";import{a as i}from"./chunk-NYQXZQKP.js";import{a as e}from"./chunk-7VB5JZ2H.js";function c(r){r.varyings.add("linearDepth","float",{invariant:!0})}function v(r,a){a&&c(r),r.vertex.code.add(o`
    void forwardLinearDepth(float _linearDepth) { ${t(a,"linearDepth = _linearDepth;")} }
  `)}function p(r){r.uniforms.add(new m("dpDummy",()=>1)).code.add(o`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}var d=class extends n{constructor(){super(...arguments),this.transformWorldFromViewTH=e(),this.transformWorldFromViewTL=e(),this.transformViewFromCameraRelativeRS=i()}},f=class extends n{constructor(){super(...arguments),this.transformWorldFromModelRS=i(),this.transformWorldFromModelTH=e(),this.transformWorldFromModelTL=e(),this.transformationDrawId=0}};function Y(r){r.vertex.uniforms.add(new s("nearFar",a=>a.camera.nearFar))}function l(r){r.vertex.code.add(o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function er(r){l(r),r.vertex.code.add(o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),r.vertex.code.add(o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}export{p as a,d as b,f as c,v as d,Y as e,er as f};
