import{a as o}from"./chunk-I6AGLY42.js";import{a as n}from"./chunk-NPN7TY3U.js";import{a}from"./chunk-OAKWUYCK.js";import{a as l}from"./chunk-LUGQYNAC.js";import{a as i}from"./chunk-YSASWMAG.js";import{a as s}from"./chunk-NMKLVORY.js";import{a as u}from"./chunk-JHE3P533.js";var t=class extends s{constructor(){super(...arguments),this.blurSize=u()}};function m(){let r=new l;return r.include(a),r.outputs.add("fragHighlight","vec2",0),r.fragment.uniforms.add(new n("blurSize",e=>e.blurSize),new o("blurInput",e=>e.blurInput)).main.add(i`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragHighlight = sum;
}`),r}var S=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:t,build:m},Symbol.toStringTag,{value:"Module"}));export{t as a,m as b,S as c};
