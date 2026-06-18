import{a as M,b as U}from"./chunk-IHC7LZBT.js";import{a as A}from"./chunk-SYFPWUTB.js";import{a as t,b as k,c as H}from"./chunk-YSASWMAG.js";import{c as I}from"./chunk-RW2R6FAP.js";import{a as C}from"./chunk-F6HCBYR5.js";import{b as D}from"./chunk-QRZ5HHIG.js";import{a as B}from"./chunk-WNSZCIFR.js";import{r as E}from"./chunk-GPZCTNKM.js";function W(e){switch(e.elementType){case"float":switch(e.elementCount){case 1:return t`float`;case 2:return t`vec2`;case 3:return t`vec3`;case 4:return t`vec4`;case 9:return t`mat3`;default:e.elementCount}break;case"int":switch(e.elementCount){case 1:return t`int`;case 2:return t`ivec2`;case 3:return t`ivec3`;case 4:return t`ivec4`;case 9:throw new Error("Invalid element count 9 for type int");default:e.elementCount}break;case"uint":switch(e.elementCount){case 1:return t`uint`;case 2:return t`uvec2`;case 3:return t`uvec3`;case 4:return t`uvec4`;case 9:throw new Error("Invalid element count 9 for type uint");default:e.elementCount}break;default:e.elementType}throw new Error("unsupported field")}var X=new A("constNaN",()=>NaN,{supportsNaN:!0}),$=class extends M{constructor(n){super(),this.supportNaN=n}};function Y(e,n){let a=n?.supportNaN;a&&(e.uniforms.add(X),e.code.add(t`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(t`
    mediump float unpackHalf1x16(highp uint bits) {
      ${k(a,t`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),e.code.add(t`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${k(a,t`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${t.uint(p[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function q(e,n){let a=n?.supportNaN;a&&(e.uniforms.add(X),e.code.add(t`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(t`
    highp float unpackFloat1x32(highp uint bits) {
      ${k(a,t`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function O(e){e.code.add(t`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function G(e,n){let{fieldType:a}=e;return`${(0,it[a])(ut(e,n))}`}function w(e,n){let a=[];for(let u of e){let i=t`unpackFloat1x32(${u})`;a.push(i)}return a.join(n)}B([U()],$.prototype,"supportNaN",void 0);var J=e=>t`${e[0]}`,_=e=>{let n=e[0],a=t`uvec4(${t.uint(p[0])}, ${t.uint(p[1])}, ${t.uint(p[2])}, ${t.uint(p[3])})`,u=t`uvec4(${t.hexuint(K[1])})`;return t`((uvec4(${n}) >> ${a}) & ${u})`},rt=e=>t`(float(${J(e)})/${t.float(E)})`,j=e=>t`unpackFloat1x32(${e[0]})`,z=e=>t`vec4(${w(e,", ")})`,it={u8:J,unorm8:rt,vec4unorm8:e=>t`(vec4(${_(e)})/${t.float(E)})`,snorm16:e=>t`unpackSnorm2x16(${e[0]}).x`,vec2snorm16:e=>t`unpackSnorm2x16(${e[0]})`,f16:I?e=>t`unpackHalf1x16(${e[0]})`:j,vec4f16:I?e=>t`vec4(unpackHalf2x16NaNSupport(${e[0]}), unpackHalf2x16NaNSupport(${e[1]}))`:z,f32:j,vec4u8:_,vec2f32:e=>t`vec2(${w(e,", ")})`,vec3f32:e=>t`vec3(${w(e,", ")})`,vec4f32:z,mat3f32:e=>t`mat3(${w(e,`,
`)})`};function ut(e,n){let{byteOffset:a,byteSize:u}=e,i=n.channelByteStride,c=n.byteStride,N=Math.ceil(u/S),m=st[n.channels],r=new Array;for(let d=0;d<N;++d){let h=d*S,f=a+h,b=u-h,x=Math.min(b,S),s=0,l=new Array;for(;s<x;){let g=f+s,y=Math.floor(g/c),o=g%c,v=Math.floor(o/i),F=o%i,R=i-F,V=x-s,T=Math.min(R,V),Z=t`texel${t.int(y)}${m[v]}`,tt=T===4?"":t` & ${t.hexuint(K[T])}`,et=F===0?"":t` >> ${t.uint(p[F])}`,nt=t`((${Z}${et})${tt})`,ot=s===0?"":t` << ${t.uint(p[s])}`,at=t`(${nt})${ot}`;l.push(at),s+=T}r.push(t`(${l.join(" | ")})`)}return r}var S=4,p=[0,8,16,24],K=[0,255,65535,16777215,4294967295],st={1:[t``],2:[t`.x`,t`.y`],4:[t`.x`,t`.y`,t`.z`,t`.w`]};var ct=new $(!0),dt=new $(!1),L=class{constructor(n){this.moduleId=D(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:a,bufferUniform:u,layout:i}=n,c=n.fieldFilter??(()=>!0),N=n.enableNaNSupport?ct:dt;this.TextureBackedBufferModule=(m,r)=>ft(this.namespace,m,r,a,u,i,c,N),this.getTextureAttribute=lt(this.namespace)}};function ft(e,n,a,u,i,c,N,m){let{vertex:r}=n,{texelFormatInfo:d}=c;r.include(q,m),r.include(Y,m),r.include(O);let h=`${e}tbbStride`,f=`${e}TextureBackedBufferItemData`,b=`${e}fetchTextureBackedBufferItemData`,x=P(e);for(let o of[h,f,b,x])C(o.length<1024,"Identifiers do not have a valid length");r.constants.add(h,"uint",c.texelStride),r.uniforms.add(i);let s=new Array;for(let o of c.fields.values())N(o.name,a)&&s.push(o);if(s.length===0)return;let l=[];for(let o=0;o<c.texelStride;++o)l.push(!1);for(let o of s)for(let v=0;v<o.numTexels;++v)l[o.startTexel+v]=!0;r.code.add(t`
  struct ${f} {`);for(let o of s)r.code.add(t`\t${W(o)} ${o.name};`);r.code.add(t`};`),r.code.add(t`
  ${f} ${b}(highp uint itemIndex) {
    ${f} itemData;
    highp uint index = itemIndex * ${h};
    highp uint rowWidth = uint(textureSize(${i.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);let g=pt[d.channels],y=mt[d.channels];for(let o=0;o<l.length;++o)l[o]!==!1&&r.code.add(t`highp ${g} texel${t.int(o)} = texelFetch(${i.name}, ivec2(coordX + ${t.int(o)}, coordY), 0)${y};`);for(let o of s)r.code.add(t`itemData.${o.name} = ${G(o,d)};`);r.code.add(t`return itemData;
}`),r.code.add(t`${f} ${x};`),r.main.add(t`${x} = ${b}(${u});`)}function lt(e){let n=P(e);return a=>t`${n}.${a}`}function P(e){return`${e}ItemData`}var pt={1:t`uint`,2:t`uvec2`,4:t`uvec4`},mt={1:t`.x`,2:t`.xy`,4:""};var Q=class extends H{constructor(n,a){super(n,"usampler2D",2,(u,i,c)=>u.bindTexture(n,a(i,c)))}};export{L as a,Q as b};
