import{n as e,t}from"./glsl-B__sVAcg.js";import{t as n}from"./FloatPassUniform-D-_T45xB.js";import{t as r}from"./Texture2DPassUniform-wY08hxIn.js";import{t as i}from"./NoParameters-B66z9IwQ.js";import{t as a}from"./ShaderBuilder-Dbc4jYz7.js";import{t as o}from"./Slice.glsl-A8bL0Rkn.js";import{t as s}from"./ObjectAndLayerIdColor.glsl-DLOlMhcf.js";import{i as c}from"./AlphaCutoff-qYsC5qb0.js";import{n as l}from"./View.glsl-D5eT11ZQ.js";import{t as u}from"./TerrainDepthTest.glsl-BUpx6Cvv.js";import{t as d}from"./OutputColorHighlightOLID.glsl-B38t8Aex.js";import{t as f}from"./Transform.glsl-DMKMztkJ.js";var p=class extends i{};function m(i){let p=new a,{vertex:m,fragment:h,varyings:g}=p,{output:_,perspectiveInterpolation:v}=i;return l(m,i),p.include(f),p.include(u,i),p.fragment.include(o,i),p.include(s,i),p.include(d,i),p.attributes.add(`position`,`vec3`),p.attributes.add(`uv0`,`vec2`),v&&p.attributes.add(`perspectiveDivide`,`float`),m.main.add(e`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${t(v,`gl_Position *= perspectiveDivide;`)}`),g.add(`vpos`,`vec3`,{invariant:!0}),g.add(`vTexCoord`,`vec2`),h.include(c),h.uniforms.add(new n(`opacity`,e=>e.opacity),new r(`tex`,e=>e.texture)).main.add(e`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${t(_===9,`fragColor = vec4(0, 0, 0, 1); return;`)}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOLID(finalColor, vpos, finalColor.rgb);`),p}var h=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:p,build:m},Symbol.toStringTag,{value:`Module`}));export{m as n,h as r,p as t};