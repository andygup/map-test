import{n as e,t}from"./glsl-BMw-Ib6r.js";import{t as n}from"./FloatPassUniform-CSAt82xV.js";import{t as r}from"./Texture2DPassUniform-DFWoDpEL.js";import{t as i}from"./NoParameters-BDE7RvXT.js";import{t as a}from"./ShaderBuilder-BLOqjpgt.js";import{t as o}from"./Slice.glsl-DU3Ivhcc.js";import{t as s}from"./ObjectAndLayerIdColor.glsl-BHzrt-xI.js";import{i as c}from"./AlphaCutoff-WIqqBGOV.js";import{n as l}from"./View.glsl-CPcmVaet.js";import{t as u}from"./TerrainDepthTest.glsl-D7e23Ppb.js";import{t as d}from"./OutputColorHighlightOLID.glsl-CoP020fC.js";import{t as f}from"./Transform.glsl-2U1BxklA.js";var p=class extends i{};function m(i){let p=new a,{vertex:m,fragment:h,varyings:g}=p,{output:_,perspectiveInterpolation:v}=i;return l(m,i),p.include(f),p.include(u,i),p.fragment.include(o,i),p.include(s,i),p.include(d,i),p.attributes.add(`position`,`vec3`),p.attributes.add(`uv0`,`vec2`),v&&p.attributes.add(`perspectiveDivide`,`float`),m.main.add(e`
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