import{k as s,l as n,m as c}from"./chunk-VDN3VHDD.js";import{a as u}from"./chunk-P5HKTOA3.js";import{a as i}from"./chunk-ZTED3WGD.js";import{a as t}from"./chunk-JNLIGAVK.js";import{a}from"./chunk-YSASWMAG.js";function v(e){e.code.add(a`struct MaskedColor {
vec4 color;
bvec4 mask;
};`)}function k(e){e.include(v),e.code.add(a`
    MaskedColor createMaskedFromUInt8NaNColor(vec4 color) {
      return MaskedColor(color * ${a.float(1/254)}, equal(color, vec4(255)));
    }
  `)}function d(e){e.include(v),e.code.add(a`vec4 maskedColorSelectOrOne(MaskedColor color) {
return vec4(
color.mask.r ? 1.0 : color.color.r,
color.mask.g ? 1.0 : color.color.g,
color.mask.b ? 1.0 : color.color.b,
color.mask.a ? 1.0 : color.color.a
);
}
MaskedColor multiplyMaskedColors(MaskedColor color1, MaskedColor color2) {
vec4 masked1 = maskedColorSelectOrOne(color1);
vec4 masked2 = maskedColorSelectOrOne(color2);
return MaskedColor(masked1 * masked2, bvec4(ivec4(color1.mask) & ivec4(color2.mask)));
}`)}function m(e){e.include(v),e.code.add(a`MaskedColor createMaskedFromNaNColor(vec4 color) {
return MaskedColor(color, isnan(color));
}`)}function A(e,l){let{vertex:r,attributes:C}=e;l.hasVVInstancing&&(l.hasVVSize||l.hasVVColor)&&C.add("instanceFeatureAttribute","vec4"),l.hasVVSize?(r.uniforms.add(new t("vvSizeMinSize",o=>o.vvSize.minSize)),r.uniforms.add(new t("vvSizeMaxSize",o=>o.vvSize.maxSize)),r.uniforms.add(new t("vvSizeOffset",o=>o.vvSize.offset)),r.uniforms.add(new t("vvSizeFactor",o=>o.vvSize.factor)),r.uniforms.add(new t("vvSizeFallback",o=>o.vvSize.fallback)),r.uniforms.add(new u("vvSymbolRotationMatrix",o=>o.vvSize.symbolRotationMatrix)),r.uniforms.add(new t("vvSymbolAnchor",o=>o.vvSize.symbolAnchor)),r.code.add(a`vec3 vvScale(vec4 _featureAttribute) {
if (isnan(_featureAttribute.x)) {
return vvSizeFallback;
}
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 scale = max(vvScale(_featureAttribute), eps);
        return vec4(vvSymbolRotationMatrix * _normal / scale, 1.0);
      }

      ${l.hasVVInstancing?a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(${r.inputs.get("position")}, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(a`
      vec4 localPosition() { return vec4(${r.inputs.get("position")}, 1.0); }
      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),e.vertex.include(v),l.hasVVColor?(r.constants.add("vvColorNumber","int",s),r.uniforms.add(new c("vvColorValues",s,o=>o.vvColor.values),new n("vvColorColors",s,o=>o.vvColor.colors),new i("vvColorFallback",o=>o.vvColor.fallback,{supportsNaN:!0})),l.hasVVInstancing&&(e.vertex.include(d),e.vertex.include(m)),r.code.add(a`
      vec4 interpolateVVColor(float value) {
        if (isnan(value)) {
          return vvColorFallback;
        }

        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${l.hasVVInstancing?a`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return multiplyMaskedColors(color, createMaskedFromNaNColor(vvColor()));
            }
            `:a`
            vec4 vvColor() {
              return vec4(1.0);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return color;
            }
            `}
    `)):r.code.add(a`vec4 vvColor() {
return vec4(1.0);
}
MaskedColor applyVVColor(MaskedColor color) {
return color;
}`)}export{v as a,k as b,d as c,m as d,A as e};
