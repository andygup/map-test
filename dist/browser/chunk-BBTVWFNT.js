import{a as o}from"./chunk-YSASWMAG.js";var l=255;function r(a){a.code.add(o`
    vec3 quantizeGlobalIlluminationColor(vec3 color) {
      vec3 clampedColor = clamp(color, vec3(0.0), vec3(1.0));
      return floor(clampedColor * ${o.float(l)} + 0.5) * ${o.float(1/l)};
    }
  `)}export{r as a};
