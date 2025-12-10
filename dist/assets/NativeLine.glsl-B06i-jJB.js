import{n as e}from"./glsl-CQsgM67j.js";import{t}from"./ShaderBuilder-D3cV1oap.js";import{t as n}from"./Float4PassUniform-BlgtXzb0.js";import{t as r}from"./Slice.glsl-B4UNza77.js";import{n as i}from"./View.glsl-DCHnRtrH.js";import{t as a}from"./OutputColorHighlightOLID.glsl-BZElqToO.js";import{t as o}from"./Transform.glsl-LjRXb9GP.js";import{t as s}from"./VertexColor.glsl-DVDp3fwI.js";function c(c){let l=new t,{vertex:u,fragment:d,varyings:f}=l;return l.fragment.include(r,c),l.include(o),l.include(s,c),l.include(a,c),i(u,c),l.attributes.add(`position`,`vec3`),f.add(`vpos`,`vec3`,{invariant:!0}),u.main.add(e`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),c.hasVertexColors||d.uniforms.add(new n(`constantColor`,e=>e.color)),d.main.add(e`
    discardBySlice(vpos);
    vec4 color = ${c.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(color, vpos, color.rgb);
  `),l}var l=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:`Module`}));export{l as n,c as t};