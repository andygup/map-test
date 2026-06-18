import{f as b}from"./chunk-XKSEETOM.js";import{b as u}from"./chunk-6UBDFNHA.js";import{c as v,f as g,k as C}from"./chunk-P4VQAMX6.js";import{a as f}from"./chunk-6ZGVESB5.js";import{a as c}from"./chunk-XYMAXA4B.js";import{a as p}from"./chunk-LUGQYNAC.js";import{a as i,b as e}from"./chunk-YSASWMAG.js";import{a as m}from"./chunk-NMKLVORY.js";var t=class extends m{};function y(r){let o=new p,{vertex:s,fragment:n,varyings:l}=o,{output:x,perspectiveInterpolation:d,emissionDimmingPass:P}=r;return v(s,r),o.include(b),o.fragment.include(u,r),o.fragment.code.add(i`void outputObjectAndLayerIdColor() {
    ${e(x===11,"fragColor = vec4(0, 0, 0, 1);")}
    }`),o.include(C,r),o.attributes.add("position","vec3"),o.attributes.add("uv0","vec2"),d&&o.attributes.add("perspectiveDivide","float"),s.main.add(i`
    vpos = position;
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${e(d,"gl_Position *= perspectiveDivide;")}`),l.add("vpos","vec3",{invariant:!0}),l.add("vTexCoord","vec2"),n.include(g),n.uniforms.add(new f("opacity",a=>a.opacity),new c("tex",a=>a.texture)).main.add(i`
    discardBySlice(vpos);
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    ${e(P,"if (finalColor.a > 0.0) { finalColor.rgb /= finalColor.a; }")}
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),o}var $=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:t,build:y},Symbol.toStringTag,{value:"Module"}));export{t as a,y as b,$ as c};
