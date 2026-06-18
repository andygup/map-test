import{a as g}from"./chunk-X57NYCXT.js";import{f as b}from"./chunk-ECJS2ZJW.js";import{a as p}from"./chunk-7JJBCEUY.js";import{e as u}from"./chunk-7GCK2FB3.js";import{b as m}from"./chunk-QWVJUQHP.js";import{c as f,f as C,k as v}from"./chunk-FZ33X2GJ.js";import{a as c}from"./chunk-ZTED3WGD.js";import{a as d}from"./chunk-EZYCO4TJ.js";import{a as e}from"./chunk-YSASWMAG.js";function w(o){let r=new d,{vertex:i,fragment:t,attributes:a,varyings:l}=r,{hasVVColor:s,hasVertexColors:n}=o;return a.add("position","vec3"),i.inputs.add("position",()=>"position"),f(i,o),r.include(b),r.include(g,o),r.include(u,o),r.include(p,o),t.include(m,o),r.include(v,o),s&&a.add("colorFeatureAttribute","float"),n||l.add("vColor","vec4"),l.add("vpos","vec3",{invariant:!0}),i.uniforms.add(new c("uColor",V=>V.color)),i.main.add(e`
      vpos = position;
      forwardVertexColor();
      forwardObjectAndLayerIdColor();

      ${n?"vColor *= uColor;":s?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      gl_Position = transformPosition(proj, view, vpos);`),t.include(C),t.main.add(e`discardBySlice(vpos);
outputColorHighlightOLID(applySlice(vColor, vpos), vColor.rgb);`),r}var D=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{w as a,D as b};
