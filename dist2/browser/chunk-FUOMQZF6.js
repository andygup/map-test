import{a as l}from"./chunk-YSASWMAG.js";var a=15.3,e=5,t=-.05;function n(o){o.fragment.code.add(l`
    float globalIlluminationNormalSimilarityWeight(vec3 sampleNormal, vec3 centerNormal) {
      return clamp(1.0 - ${l.float(a)} * length(sampleNormal - centerNormal), 0.0, 1.0);
    }

    float globalIlluminationDepthNormalCorrection(vec3 encodedNormal) {
      vec3 decodedNormal = normalize(encodedNormal * 2.0 - 1.0);
      return pow(max((1.0 - abs(decodedNormal.x)) * (1.0 - abs(decodedNormal.y)), 0.01), ${l.float(e)});
    }

    float globalIlluminationDepthSharpness(float projScale, float depth) {
      return ${l.float(t)} * projScale / depth;
    }

    float globalIlluminationDepthSharpness(float projScale, float depth, vec3 encodedNormal) {
      return globalIlluminationDepthSharpness(projScale, depth) * globalIlluminationDepthNormalCorrection(encodedNormal);
    }
  `)}export{n as a};
