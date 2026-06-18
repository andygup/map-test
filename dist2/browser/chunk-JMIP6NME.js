import{a as d}from"./chunk-X57NYCXT.js";import{f as p}from"./chunk-XKSEETOM.js";import{a as s}from"./chunk-7JJBCEUY.js";import{b as l}from"./chunk-6UBDFNHA.js";import{c as m,k as c}from"./chunk-P4VQAMX6.js";import{a as n}from"./chunk-ZTED3WGD.js";import{a}from"./chunk-LUGQYNAC.js";import{a as t}from"./chunk-YSASWMAG.js";function g(r){let o=new a,{vertex:i,fragment:e,varyings:f}=o;return o.fragment.include(l,r),o.include(p),o.include(d,r),o.include(s,r),o.include(c,r),m(i,r),o.attributes.add("position","vec3"),f.add("vpos","vec3",{invariant:!0}),i.main.add(t`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),r.hasVertexColors||e.uniforms.add(new n("constantColor",u=>u.color)),e.main.add(t`
    discardBySlice(vpos);
    vec4 color = ${r.hasVertexColors?"vColor":"constantColor"};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),o}var j=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));export{g as a,j as b};
