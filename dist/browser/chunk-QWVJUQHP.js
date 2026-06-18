import{n as u}from"./chunk-CNIHBBZ3.js";import{a as F,b as n}from"./chunk-XXGWZA3P.js";import{a as h}from"./chunk-YSASWMAG.js";import{h as y}from"./chunk-DBADRHD4.js";import{a as g}from"./chunk-JJQR3F6K.js";import{c as B,d as w,e as v,w as d}from"./chunk-Z6MYS5U6.js";import{a as f,h as S}from"./chunk-7VB5JZ2H.js";import{c as i}from"./chunk-MF5NTJNN.js";var o=class extends F{constructor(){super(...arguments),this.output=0,this.hasEmission=!1,this.useFloatBlend=!0}};i([n({count:12})],o.prototype,"output",void 0),i([n()],o.prototype,"hasEmission",void 0),i([n()],o.prototype,"useFloatBlend",void 0);var p=class extends o{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};var b=class extends p{constructor(){super(...arguments),this.hasSlicePlane=!1,this.hasSliceTranslatedView=!1}};i([n()],b.prototype,"hasSlicePlane",void 0);function ss(s,e){j(s,e,...O(e))}function es(s,e){D(s,e,...O(e))}var E=h`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool rejectBySlice(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}`;function D(s,e,...a){e.hasSlicePlane?(s.uniforms.add(...a),s.code.add(E)):s.code.add("bool rejectBySlice(vec3 pos) { return false; }")}function j(s,e,...a){s.constants.add("groundSliceOpacity","float",.2),D(s,e,...a),e.hasSlicePlane?s.code.add(`
    void discardBySlice(vec3 pos) {
      if (rejectBySlice(pos)) {
        discard;
      }
    }

    vec4 applySliceOutline(vec4 color, vec3 pos) {
      SliceFactors factors = calculateSliceFactors(pos);

      factors.front /= 2.0 * fwidth(factors.front);
      factors.side0 /= 2.0 * fwidth(factors.side0);
      factors.side1 /= 2.0 * fwidth(factors.side1);
      factors.side2 /= 2.0 * fwidth(factors.side2);
      factors.side3 /= 2.0 * fwidth(factors.side3);

      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth
      if (sliceByFactors(factors)) {
        return color;
      }

      float outlineFactor = (1.0 - step(0.5, factors.front))
        * (1.0 - step(0.5, factors.side0))
        * (1.0 - step(0.5, factors.side1))
        * (1.0 - step(0.5, factors.side2))
        * (1.0 - step(0.5, factors.side3));

      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);
    }

    vec4 applySlice(vec4 color, vec3 pos) {
      return sliceEnabled() ? applySliceOutline(color, pos) : color;
    }
  `):s.code.add(h`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function O(s){return[new u("slicePlaneOrigin",(e,a)=>C(s,e,a)),new u("slicePlaneBasis1",(e,a)=>x(s,e,a,a.slicePlane?.basis1)),new u("slicePlaneBasis2",(e,a)=>x(s,e,a,a.slicePlane?.basis2))]}function L(s,e,a){return s.instancedDoublePrecision?B(I,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function M(s,e){return s!=null?v(m,e.origin,s):e.origin}function T(s,e,a){return s.hasSliceTranslatedView?e!=null?y(N,a.camera.viewMatrix,e):a.camera.viewMatrix:null}function C(s,e,a){if(a.slicePlane==null)return S;let t=L(s,e,a),r=M(t,a.slicePlane),c=T(s,t,a);return c!=null?d(m,r,c):r}function x(s,e,a,t){if(t==null||a.slicePlane==null)return S;let r=L(s,e,a),c=M(r,a.slicePlane),P=T(s,r,a);return P!=null?(w(l,t,c),d(m,c,P),d(l,l,P),v(l,l,m)):t}var I=f(),m=f(),l=f(),N=g();export{b as a,ss as b,es as c};
