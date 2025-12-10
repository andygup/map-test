import{l as e,t}from"./Emissions.glsl-D75sJPX5.js";import{n,t as r}from"./glsl-CQsgM67j.js";import{i,n as a,t as o}from"./AlphaCutoff-BxDXdpVQ.js";function s(s,c){s.include(a,c),s.include(t,c),s.fragment.include(i);let{output:l,oitPass:u,hasEmission:d,discardInvisibleFragments:f,oitPremultipliedAlpha:p,snowCover:m}=c,h=l===9,g=e(l)&&u===1,_=e(l)&&u!==1,v=0;(_||g)&&s.outputs.add(`fragColor`,`vec4`,v++),d&&s.outputs.add(`fragEmission`,`vec4`,v++),g&&s.outputs.add(`fragAlpha`,`float`,v++),s.fragment.code.add(n`
    void outputColorHighlightOLID(vec4 finalColor, const in vec3 vWorldPosition, vec3 emissiveSymbolColor ${r(m,`, float snow`)}) {
      ${r(h,`finalColor.a = 1.0;`)}
      ${r(f,`if (finalColor.a < ${n.float(o)}) { discard; }`)}
      finalColor = applySlice(finalColor, vWorldPosition);

      ${r(g,`${r(p,`fragColor = finalColor;`,`fragColor = premultiplyAlpha(finalColor);`)}\n           fragAlpha = finalColor.a;`)}
      ${r(_,`fragColor = finalColor;`)}
      ${r(d,`fragEmission = ${r(m,`mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);`,`finalColor.a * getEmissions(emissiveSymbolColor);`)}`)}
      calculateOcclusionAndOutputHighlight();
      ${r(h,`outputObjectAndLayerIdColor();`)}
    }
  `)}export{s as t};