import{f as P}from"./chunk-XKSEETOM.js";import{b as v}from"./chunk-6UBDFNHA.js";import{b as u,c as S,d as g,f as w,k as h}from"./chunk-P4VQAMX6.js";import{a as l}from"./chunk-ZTED3WGD.js";import{a as p}from"./chunk-SYFPWUTB.js";import{a as m}from"./chunk-6ZGVESB5.js";import{a as f}from"./chunk-JNLIGAVK.js";import{a as c}from"./chunk-LUGQYNAC.js";import{a,b as d}from"./chunk-YSASWMAG.js";import{a as s}from"./chunk-YMQ4BGWF.js";function b(i,o){if(!o.screenSizeEnabled)return;let e=i.vertex;u(e,o),e.uniforms.add(new p("perScreenPixelRatio",r=>r.camera.perScreenPixelRatio),new m("screenSizeScale",r=>r.screenSizeScale)).code.add(a`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function z(i){let o=new c;o.include(P),o.include(b,i),o.fragment.include(v,i),o.include(h,i);let{vertex:e,fragment:r}=o;return r.include(w),S(e,i),r.uniforms.add(new l("uColor",t=>t.color)),o.attributes.add("position","vec3"),o.varyings.add("vWorldPosition","vec3"),i.screenSizeEnabled&&o.attributes.add("offset","vec3"),i.shadingEnabled&&(g(e),o.attributes.add("normal","vec3"),o.varyings.add("vViewNormal","vec3"),r.uniforms.add(new f("shadingDirection",t=>t.shadingDirection)),r.uniforms.add(new l("shadedColor",t=>C(t.shadingTint,t.color)))),e.main.add(a`
    vWorldPosition = ${i.screenSizeEnabled?a`screenSizeScaling(offset, position)`:a`position`};
    ${d(i.shadingEnabled,a`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `),r.main.add(a`
      discardBySlice(vWorldPosition);

      ${i.shadingEnabled?a`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:a`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`),o}function C(i,o){let e=1-i[3],r=i[3]+o[3]*e;return r===0?(n[3]=r,n):(n[0]=(i[0]*i[3]+o[0]*o[3]*e)/r,n[1]=(i[1]*i[3]+o[1]*o[3]*e)/r,n[2]=(i[2]*i[3]+o[2]*o[3]*e)/r,n[3]=o[3],n)}var n=s(),T=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:"Module"}));export{z as a,T as b};
