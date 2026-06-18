import{a as v,b as k}from"./chunk-HJ3FYDJY.js";import{a as M}from"./chunk-X57NYCXT.js";import{f as N}from"./chunk-ECJS2ZJW.js";import{b as W}from"./chunk-JM7IO3IN.js";import{a as B}from"./chunk-7JJBCEUY.js";import{e as I}from"./chunk-7GCK2FB3.js";import{b as $}from"./chunk-OIPQIELE.js";import{b as L}from"./chunk-QWVJUQHP.js";import{b as O,c as z,f as F,k as U}from"./chunk-FZ33X2GJ.js";import{a as D}from"./chunk-ZTED3WGD.js";import{b as c}from"./chunk-XXGWZA3P.js";import{a as m}from"./chunk-SYFPWUTB.js";import{a as R}from"./chunk-EZYCO4TJ.js";import{a as t,b as u}from"./chunk-YSASWMAG.js";import{a as f}from"./chunk-7LPKXS33.js";import{c as j}from"./chunk-IOR6XGZG.js";import{c as l}from"./chunk-MF5NTJNN.js";var i=class extends W{constructor(){super(...arguments),this.cullFace=0,this.style=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasOccludees=!1,this.hasVVColor=!1,this.draped=!1,this.textureCoordinateType=0,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.hasVVInstancing=!1,this.hasVVSize=!1,this.hasVVOpacity=!1,this.overlayEnabled=!1,this.snowCover=!1}};function g(e,o,n,r){return e.draped?null:e.hasVVColor?r:e.hasVertexColors?n:o}l([c({count:3})],i.prototype,"cullFace",void 0),l([c({count:6})],i.prototype,"style",void 0),l([c({count:8})],i.prototype,"emissionSource",void 0),l([c()],i.prototype,"hasVertexColors",void 0),l([c()],i.prototype,"hasOccludees",void 0),l([c()],i.prototype,"hasVVColor",void 0),l([c()],i.prototype,"draped",void 0);function ne(e){let o=j().vec3f("position").vec4f("uvMapSpace");return e.draped?e.hasVVColor?o.f32("colorFeatureAttribute"):e.hasVertexColors&&o.vec4u8("color",{glNormalized:!0}):o.u32("textureElementIndex",{integer:!0}),$()&&o.vec4u8("olidColor"),o.freeze()}var C=[{type:"mat3f32",name:"boundingRect"}],V=new f(C),w=new f([...C,{type:"vec4unorm8",name:"color"}]),b=new f([...C,{type:"f32",name:"colorFeatureAttribute"}]);function le(e){return g(e,V,w,b)}var T=new k("componentTextureBuffer",e=>e.textureBuffer),q=new v({layout:V,itemIndexAttribute:"textureElementIndex",bufferUniform:T}),H=new v({layout:w,itemIndexAttribute:"textureElementIndex",bufferUniform:T}),G=new v({layout:b,itemIndexAttribute:"textureElementIndex",bufferUniform:T,enableNaNSupport:!0});function E(e){return g(e,q,H,G)}var P=.70710678118,_=P,J=.08715574274,S=10,K=1;function Q(e){let o=E(e),n=o!=null,r=new R;n&&r.include(o.TextureBackedBufferModule,e);let{vertex:a,fragment:d,attributes:p,varyings:h}=r,A=e.output===10;z(a,e),r.include(N);let y="";n?(e.hasVVColor&&(y=o.getTextureAttribute("colorFeatureAttribute")),e.hasVertexColors?(r.varyings.add("vColor","vec4"),r.vertex.code.add(t`void forwardVertexColor() { vColor = ${o.getTextureAttribute("color")}; }`)):r.vertex.code.add(t`void forwardVertexColor() {}`),p.add("textureElementIndex","uint")):(r.include(M,e),e.hasVVColor&&(p.add("colorFeatureAttribute","float"),y="colorFeatureAttribute")),p.add("position","vec3"),a.inputs.add("position",()=>"position"),r.include(I,e),r.include(B,e),d.include(L,e),r.include(U,e),e.draped&&a.uniforms.add(new m("worldToScreenRatio",s=>1/s.screenToPCSRatio)),p.add("uvMapSpace","vec4"),e.hasVertexColors||h.add("vColor","vec4"),h.add("vpos","vec3",{invariant:!0}),h.add("vuv","vec2"),a.uniforms.add(new D("uColor",s=>s.color));let x=e.style===3||e.style===4||e.style===5;return x&&a.code.add(t`
      const mat2 rotate45 = mat2(${t.float(P)}, ${t.float(-_)},
                                 ${t.float(_)}, ${t.float(P)});
    `),!e.draped&&n&&(O(a,e),a.uniforms.add(new m("worldToScreenPerDistanceRatio",s=>1/s.camera.perScreenPixelRatio)),a.code.add(t`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),a.code.add(t`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),a.code.add(t`
      float boundingRectDistanceToCamera() {
        vec3 center = ${o.getTextureAttribute("boundingRect")}[0];
        vec3 halfU = ${o.getTextureAttribute("boundingRect")}[1];
        vec3 halfV = ${o.getTextureAttribute("boundingRect")}[2];
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${t.float(J)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),a.code.add(t`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${u(x," * rotate45")};
      vec2 uvCellOrigin = uvMapSpace.zw ${u(x," * rotate45")};

      ${u(!e.draped,t`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${t.float(S)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),a.main.add(t`
    vuv = scaledUV();
    vpos = position;
    forwardVertexColor();
    forwardObjectAndLayerIdColor();
    ${e.hasVertexColors?"vColor *= uColor;":e.hasVVColor?t`vColor = uColor * interpolateVVColor(${y});`:"vColor = uColor;"}
    gl_Position = transformPosition(proj, view, vpos);
  `),d.include(F),e.draped&&d.uniforms.add(new m("texelSize",s=>1/s.camera.pixelRatio)),A||(d.code.add(t`
      const float lineWidth = ${t.float(K)};
      const float spacing = ${t.float(S)};
      const float spacingINV = ${t.float(1/S)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||d.code.add(t`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),d.main.add(t`
    discardBySlice(vpos);
    vec4 color = vColor;
    ${u(!A,t`color.a *= ${X(e)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),r}function X(e){function o(n){return e.draped?t`coverage(vuv.${n}, texelSize)`:t`sampleAA(vuv.${n})`}switch(e.style){case 3:case 0:return o("y");case 4:case 1:return o("x");case 5:case 2:return t`1.0 - (1.0 - ${o("x")}) * (1.0 - ${o("y")})`;default:return"0.0"}}var Ae=Object.freeze(Object.defineProperty({__proto__:null,build:Q},Symbol.toStringTag,{value:"Module"}));export{i as a,ne as b,le as c,Q as d,Ae as e};
