import{n as e}from"./glsl-B__sVAcg.js";import{t}from"./ShaderBuilder-NkkCCxyc.js";import{t as n}from"./Float4PassUniform-CYWbrPzx.js";import{t as r}from"./Slice.glsl-ILtGSCz4.js";import{n as i}from"./View.glsl-DOc5qj3l.js";import{t as a}from"./OutputColorHighlightOLID.glsl-DrcS4MFv.js";import{t as o}from"./Transform.glsl-BzRx33WP.js";import{t as s}from"./VertexColor.glsl-D6K20lwp.js";function c(c){let l=new t,{vertex:u,fragment:d,varyings:f}=l;return l.fragment.include(r,c),l.include(o),l.include(s,c),l.include(a,c),i(u,c),l.attributes.add(`position`,`vec3`),f.add(`vpos`,`vec3`,{invariant:!0}),u.main.add(e`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),c.hasVertexColors||d.uniforms.add(new n(`constantColor`,e=>e.color)),d.main.add(e`
    discardBySlice(vpos);
    vec4 color = ${c.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(color, vpos, color.rgb);
  `),l}var l=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:`Module`}));export{l as n,c as t};