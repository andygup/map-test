import{a as c}from"./chunk-GUO4QNNT.js";import{a as u}from"./chunk-6ZGVESB5.js";import{a as f}from"./chunk-E6G6MGCI.js";import{a}from"./chunk-XYMAXA4B.js";import{a as m}from"./chunk-LUGQYNAC.js";import{a as e}from"./chunk-YSASWMAG.js";import{a as l}from"./chunk-NMKLVORY.js";import{a as s}from"./chunk-HVVSRJY2.js";var t=class extends l{constructor(){super(...arguments),this.effect=0,this.fadeFactor=s(1)}};function n(){let r=new m;return r.include(f),r.outputs.add("fragColor","vec4",0),r.fragment.uniforms.add(new a("colorTexture",o=>o.color),new a("focusArea",o=>o.focusArea),new c("focusAreaEffectMode",o=>o.effect),new u("fadeFactor",o=>o.fadeFactor.value)).main.add(e`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${e.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),r}var S=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:t,build:n},Symbol.toStringTag,{value:"Module"}));export{t as a,n as b,S as c};
