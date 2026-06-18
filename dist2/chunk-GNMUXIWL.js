import{a as e}from"./chunk-YSASWMAG.js";import{l as o,m as a}from"./chunk-LW5HJ7XV.js";function l(r){r.constants.add("GAMMA","float",o).constants.add("INV_GAMMA","float",a).code.add(e`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}export{l as a};
