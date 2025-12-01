import{Nu as e}from"./index-ByaFsVj4.js";import{n as t}from"./glsl-B__sVAcg.js";import{t as n}from"./Texture2DDrawUniform-CV_1kucp.js";import{t as r}from"./NoParameters-B66z9IwQ.js";import{t as i}from"./ShaderBuilder-NkkCCxyc.js";import{t as a}from"./HighlightCellGridScreenSpacePass.glsl-BBeEssS1.js";import{t as o}from"./Float2DrawUniform-DrsJI05n.js";var s=class extends r{constructor(){super(...arguments),this.blurSize=e()}};function c(){let e=new i;return e.include(a),e.outputs.add(`fragHighlight`,`vec2`,0),e.fragment.uniforms.add(new o(`blurSize`,e=>e.blurSize),new n(`blurInput`,e=>e.blurInput)).main.add(t`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
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
}`),e}var l=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:s,build:c},Symbol.toStringTag,{value:`Module`}));export{c as n,s as r,l as t};