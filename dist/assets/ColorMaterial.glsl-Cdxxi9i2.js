import{n as e}from"./glsl-CQsgM67j.js";import{t}from"./ShaderBuilder-D3cV1oap.js";import{t as n}from"./Float4PassUniform-BlgtXzb0.js";import{t as r}from"./Slice.glsl-B4UNza77.js";import{t as i}from"./ObjectAndLayerIdColor.glsl-xqs4IH1X.js";import{t as a}from"./VisualVariables.glsl-DPoFF9eG.js";import{i as o}from"./AlphaCutoff-BxDXdpVQ.js";import{n as s}from"./View.glsl-DCHnRtrH.js";import{t as c}from"./TerrainDepthTest.glsl-DLAwRTt4.js";import{t as l}from"./OutputColorHighlightOLID.glsl-BZElqToO.js";import{t as u}from"./Transform.glsl-LjRXb9GP.js";import{t as d}from"./VertexColor.glsl-DVDp3fwI.js";function f(f){let p=new t,{vertex:m,fragment:h,attributes:g,varyings:_}=p,{hasVVColor:v,hasVertexColors:y}=f;return s(m,f),p.include(u),p.include(d,f),p.include(a,f),p.include(i,f),h.include(r,f),p.include(l,f),p.include(c,f),g.add(`position`,`vec3`),v&&g.add(`colorFeatureAttribute`,`float`),y||_.add(`vColor`,`vec4`),_.add(`vpos`,`vec3`,{invariant:!0}),m.uniforms.add(new n(`uColor`,e=>e.color)),m.main.add(e`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${y?`vColor *= uColor;`:v?`vColor = uColor * interpolateVVColor(colorFeatureAttribute);`:`vColor = uColor;`}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),h.include(o),h.main.add(e`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOLID(vColor, vpos, vColor.rgb);`),p}var p=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:`Module`}));export{p as n,f as t};