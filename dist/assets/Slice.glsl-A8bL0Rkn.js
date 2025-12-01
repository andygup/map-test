import{Nl as e,Ol as t,Pm as n,Rf as r,al as i,c_ as a,i_ as o,yl as s}from"./index-CzMixifc.js";import{n as c}from"./glsl-B__sVAcg.js";import{t as l}from"./Float3DrawUniform-UWnIK6YY.js";function u(e,t){m(e,t,new l(`slicePlaneOrigin`,(e,n)=>v(t,e,n)),new l(`slicePlaneBasis1`,(e,n)=>y(t,e,n,n.slicePlane?.basis1)),new l(`slicePlaneBasis2`,(e,n)=>y(t,e,n,n.slicePlane?.basis2)))}function d(e,t){p(e,t,new l(`slicePlaneOrigin`,(e,n)=>v(t,e,n)),new l(`slicePlaneBasis1`,(e,n)=>y(t,e,n,n.slicePlane?.basis1)),new l(`slicePlaneBasis2`,(e,n)=>y(t,e,n,n.slicePlane?.basis2)))}var f=c`struct SliceFactors {
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
}`;function p(e,t,...n){t.hasSlicePlane?(e.uniforms.add(...n),e.code.add(f)):e.code.add(`bool rejectBySlice(vec3 pos) { return false; }`)}function m(e,t,...n){e.constants.add(`groundSliceOpacity`,`float`,.2),p(e,t,...n),t.hasSlicePlane?e.code.add(`
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
  `):e.code.add(c`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function h(e,n,r){return e.instancedDoublePrecision?t(b,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):n.slicePlaneLocalOrigin}function g(e,t){return e==null?t.origin:s(x,t.origin,e)}function _(e,t,r){return e.hasSliceTranslatedView?t==null?r.camera.viewMatrix:n(C,r.camera.viewMatrix,t):null}function v(e,t,n){if(n.slicePlane==null)return o;let r=h(e,t,n),a=g(r,n.slicePlane),s=_(e,r,n);return s==null?a:i(x,a,s)}function y(t,n,r,a){if(a==null||r.slicePlane==null)return o;let c=h(t,n,r),l=g(c,r.slicePlane),u=_(t,c,r);return u==null?a:(e(S,a,l),i(x,l,u),i(S,S,u),s(S,S,x))}var b=a(),x=a(),S=a(),C=r();export{d as n,u as t};