import{c as p,f as u,h as f,k as c}from"./chunk-SYTOW5CL.js";import{a as d}from"./chunk-ZTED3WGD.js";import{a as s}from"./chunk-6ZGVESB5.js";import{a as g}from"./chunk-LUGQYNAC.js";import{a as l,b as n}from"./chunk-YSASWMAG.js";function v(r){let i=new g,{vertex:e,fragment:a,attributes:t,varyings:m}=i;return p(e,r),i.include(c,r),a.include(f),a.include(u),t.add("position","vec3"),t.add("uv0","vec2"),m.add("vUV","vec2"),e.main.add(l`vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);`),a.uniforms.add(new d("backgroundColor",o=>o.backgroundColor),new d("gridColor",o=>o.gridColor),new s("gridWidth",o=>o.gridWidth)).main.add(l`
    const float LINE_WIDTH = 1.0;

    vec2 uvScaled = vUV * gridWidth;
    vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
    vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);

    // mask aliasing along edges
    grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
    grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);

    float gridFade = max(grid.x, grid.y);
    float gridAlpha = gridColor.a * gridFade;

    // premultiply alpha in output
    vec4 finalColor =
      premultiplyAlpha(backgroundColor) * (1.0 - gridAlpha) +
      premultiplyAlpha(vec4(gridColor.rgb, gridAlpha));
    ${n(r.emissionDimmingPass,"if (finalColor.a > alphaCutoff) { finalColor.rgb /= finalColor.a; }")}
    outputColorHighlightOLID(finalColor, finalColor.rgb);`),i}var I=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));export{v as a,I as b};
