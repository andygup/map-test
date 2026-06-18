import{a as p}from"./chunk-YO4KVV4T.js";import{a as u}from"./chunk-6ZGVESB5.js";import{a as d}from"./chunk-XYMAXA4B.js";import{a as c}from"./chunk-I6AGLY42.js";import{a as s}from"./chunk-NPN7TY3U.js";import{a as n}from"./chunk-E6G6MGCI.js";import{a as i}from"./chunk-LUGQYNAC.js";import{a as r}from"./chunk-YSASWMAG.js";var a=4;function w(){let e=new i,o=e.fragment;e.include(n);let f=(a+1)/2,m=1/(2*f*f);return o.include(p),o.uniforms.add(new d("depthMap",t=>t.depthTexture),new c("tex",t=>t.colorTexture),new s("blurSize",t=>t.blurSize),new u("projScale",(t,b)=>{let l=b.camera.distance;return l>5e4?Math.max(0,t.projScale-(l-5e4)):t.projScale})),o.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),o.main.add(r`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.int(a)}; r <= ${r.int(a)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var j=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{w as a,j as b};
