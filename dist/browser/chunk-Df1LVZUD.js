import {h,s as s$2,u as u$1,a as a$2,n as n$2}from'./chunk-mJ7WM1av.js';import {m,s,d,b as a$1,t as t$1,r as r$1,z,c as oe,e as ts}from'./chunk-fo8FV9Dz.js';import {n as ni,q as ai,p as r,D as s$1,a0 as si,y as li,H as e,a1 as es,A,a as n$1,j as ji,g as g$3,r as r$2,R as R$1,v as v$3,a2 as s$3,a3 as _,S as St$1,C as Ct$1,K as Kt$1,a4 as I$1,a5 as ot,a6 as R$2,a7 as h$2,O as O$2,a8 as i$2,a9 as zt$1,aa as z$1,ab as me$1,ac as pe$1,ad as _e,ae as mt,af as _i,ag as se,ah as xi,ai as de$1,aj as ye$1,d as st,f as ee,l as Ci,ak as G$2}from'./chunk-B6WwzdC9.js';import {a,l,b}from'./chunk-CFORs9sO.js';import {v as v$1}from'./chunk-Dsf6xbAk.js';import {e as e$1}from'./chunk-B50-EqKc.js';import {bP as h$1,b_ as g$2,a2 as o,I as v$2,AJ as I,ai as P,ak as vn,aj as wn,s as s$4,r as r$3,p as A$1,bv as B,sJ as u$2,B7 as i$1,gG as $,a5 as S$2,uO as T,cE as P$1,qc as W,ji as d$1,kc as v$4,bX as k$1,dw as $$2,qe as R$3,pW as w$1,oB as V,oD as O$1,cF as x$1,qr as y,a3 as h$3,pS as ra,e1 as f,ah as y$1,bV as o$1,AH as U,AD as _$1,cY as r$4,jf as o$2,iq as t$2,jh as Q,K as G,C as x$2,jg as t$3,cC as t$4,a6 as E}from'./main-Y4UOJ3OT.js';import {J,$ as $$1,Z}from'./chunk-D68ykWY8.js';import {i}from'./chunk-C30Hyked.js';import {A as A$2}from'./chunk-Co4i-U6G.js';import {g as ge$1,i as ie}from'./chunk-C4y3gUEo.js';import {M,G as G$1}from'./chunk-CpGBtdeb.js';var w=.5;function C(o,e){let t=o.vertex;o.include(m),o.attributes.add("position","vec3"),o.vertex.inputs.add("position",()=>"position"),o.attributes.add("normal","vec3"),e.hasVertexCenterOffset?o.attributes.add("centerOffset","vec3"):t.constants.add("centerOffset","vec3",[0,0,0]),o.attributes.add("groundDistance","float"),ni(t,e),ai(t,e),t.uniforms.add(new s("viewport",i=>i.camera.fullViewport),new r("polygonOffset",i=>i.shaderPolygonOffset),new s$1("aboveGround",i=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&h(t),t.code.add(a`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(a`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),e.draped&&!e.hasVerticalOffset||si(t),e.draped||(t.uniforms.add(new s$1("perDistancePixelRatio",i=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),t.code.add(a`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${a.float(w)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&li(t),e.hasScreenSizePerspective&&d(t),t.code.add(a`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?a`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":a`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `);}function D(o){o.uniforms.add(new s$2("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add(a`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add(a`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`);}var t=class extends e$1{constructor(){super(...arguments),this.effect=0,this.fadeFactor=h$1(1);}};function n(){let r$1=new v$1;return r$1.include(a$1),r$1.outputs.add("fragColor","vec4",0),r$1.fragment.uniforms.add(new e("colorTexture",o=>o.color),new e("focusArea",o=>o.focusArea),new t$1("focusAreaEffectMode",o=>o.effect),new r("fadeFactor",o=>o.fadeFactor.value)).main.add(a`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${a.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),r$1}var S$1=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:t,build:n},Symbol.toStringTag,{value:"Module"}));var O=class extends St$1{constructor(){super(...arguments),this.shader=new Ct$1(S$1,()=>import('./chunk-Bpw2VVPq.js').then(function(n){return n.a})),this.ignoreUnused=true;}initializePipeline(){return J({colorWrite:$$1})}};O=P([vn("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorTechnique")],O);var g$1=class g extends oe{constructor(t$1){super(s$4(r$3({},t$1),{view:t$1.focusAreasView.view})),this.consumes={required:[ts.FOCUSAREA_COLOR,ts.FOCUSAREA]},this.produces=ts.FOCUSAREA_COLOR,this._fadeDirection=0,this._passParameters=new t;}fadeOut(t){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(A$1(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),t());})),this.requestRender(2);}render(t){let e=t.find(({name:v})=>v===this.produces),l=this.techniques.getCompiled(O);if(!l)return this.requestRender(1),e;let C=this.focusAreasView.style,c=this.bindParameters,m=c.camera,D=m.fullViewport[2],S=m.fullViewport[3];this._startTime??=this.view.stage?.renderer.renderContext.time;let n=this.view.qualitySettings.fadeDuration,f=n>0?Math.min(n,this.view.stage?.renderer.renderContext.time-this._startTime)/n:1,A=t.find(({name:v})=>v===ts.FOCUSAREA),h=this.fboCache.acquire(D,S,this.produces),u=this.renderingContext;return u.bindFramebuffer(h.fbo),this._passParameters.color=e.getTexture(),this._passParameters.focusArea=A.getTexture(),this._passParameters.effect=R[C],this._passParameters.fadeFactor.value=this._fadeDirection===0?f:1-f,u.bindTechnique(l,c,this._passParameters),u.screen.draw(),h.attachDepth(e.getAttachment(B)),f<1&&this.requestRender(2),h}};P([wn()],g$1.prototype,"consumes",void 0),P([wn()],g$1.prototype,"produces",void 0),P([wn({constructOnly:true})],g$1.prototype,"focusAreasView",void 0),g$1=P([vn("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorNode")],g$1);var R={bright:0,dark:1};var be=t=>t?R[t]:0;function Pe(t){let e$1=new v$1;e$1.include(C,t),e$1.vertex.include(es,t);let{output:l$1,hasOcclusionTexture:C$1,signedDistanceFieldEnabled:c,pixelSnappingEnabled:m$1,hasEmission:D$1,hasScreenSizePerspective:S,debugDrawLabelBorder:n,hasVVSize:f,hasVVColor:A$1,hasRotation:h,occludedFragmentFade:u,sampleSignedDistanceFieldTexelCenter:v,hasVertexColor:q,hasVertexSize:V,hasVertexRotation:$,hasVertexUVi:U}=t;e$1.include(m),e$1.include(A,t),e$1.include(n$1,t),e$1.include(ji,t);let{vertex:s$1,fragment:a$1}=e$1;a$1.include(g$3),a$1.code.add(a`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${a.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),e$1.varyings.add("vcolor","vec4"),e$1.varyings.add("vtc","vec2"),e$1.varyings.add("vsize","vec2");let p=l$1===10;s$1.uniforms.add(new s("viewport",o=>o.camera.fullViewport),new r$1("screenOffset",(o,H)=>v$2(F$1,2*o.screenOffset[0]*H.camera.pixelRatio,2*o.screenOffset[1]*H.camera.pixelRatio)),new r$1("anchorPosition",o=>Se(o)),new r$2("materialColor",({color:o})=>o),new r("materialRotation",o=>o.rotation),new r$1("materialSize",o=>o.size),new e("tex",o=>o.texture)),li(s$1),c&&(s$1.uniforms.add(new r$2("outlineColor",o=>o.outlineColor)),a$1.uniforms.add(new r$2("outlineColor",o=>Ce(o)?o.outlineColor:I),new r("outlineSize",o=>Ce(o)?o.outlineSize:0))),m$1&&s$1.include(D),S&&(z(s$1),d(s$1)),n&&e$1.varyings.add("debugBorderCoords","vec4"),e$1.attributes.add("uv0","vec2"),U&&e$1.attributes.add("uvi","vec4"),q&&e$1.attributes.add("color","vec4"),V&&e$1.attributes.add("size","vec2"),$&&e$1.attributes.add("rotation","float"),(f||A$1)&&e$1.attributes.add("featureAttribute","vec4"),s$1.main.add(a`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${i};
      return;
    }

    vec2 vertexSize = materialSize${l(V," * size")};
    vec2 inputSize;
    ${l(S,a`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,a`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${l(f,a`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let Ae=a`
  ${l(U,a`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,a`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${l(h,a`
        float angle = radians(materialRotation${l($," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,ze=m$1?c?a`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:a`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:a`posProj += quadOffset;`;s$1.include(R$1),s$1.main.add(a`
    ${Ae}
    ${A$1?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":q?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${l(l$1===11,a`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${l(c,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${ze}
      gl_Position = posProj;
    }

    vtc = uv;

    ${l(n,a`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let E=v$3(l$1)&&t.hasFocusAreaStyle&&!t.draped;switch(a$1.uniforms.add(new e("tex",o=>o.texture)),E&&a$1.uniforms.add(new t$1("focusAreaStyle",o=>be(o.focusAreaStyle))),u&&!p&&(a$1.include(u$1),a$1.uniforms.add(new s$3("depthMap",o=>o.mainDepth),new r("occludedOpacity",o=>o.occludedFragmentOpacity?.value??1))),C$1&&a$1.uniforms.add(new s$3("texOcclusion",o=>o.hudOcclusion?.attachment)),n?a$1.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):a$1.main.add("float textureAlphaCutoff = alphaCutoff;"),a$1.main.add("vec2 samplePos = vtc;"),v&&a$1.main.add(a`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),c?a$1.main.add(a`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${l(!p,a`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${l(!p,a`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):a$1.main.add(a`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${l(!p,a`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),u&&!p&&a$1.main.add(a`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${a.float(1-ye)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),C$1&&a$1.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!p&&n&&a$1.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),l$1===2&&a$1.main.add(a`if (fragColor.a < alphaCutoff) {
discard;
}`),E&&a$1.main.add(a`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),v$3(l$1)&&D$1&&a$1.main.add("fragEmission = vec4(0.0);"),l$1){case 1:a$1.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:a$1.main.add("fragColor.rgb /= fragColor.a;");break;case 11:a$1.main.add("outputObjectAndLayerIdColor();");break;case 10:e$1.include(_,t),a$1.main.add("outputHighlight(false);");}return e$1}function Ce(t){return t.outlineColor[3]>0&&t.outlineSize>0}function Se(t){return t.textureIsSignedDistanceField?we(t.anchorPosition,t.distanceFieldBoundingBox,F$1):g$2(F$1,t.anchorPosition),F$1}var F$1=o();function we(t,e,l){v$2(l,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]);}var ye=.08,So=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:Se,build:Pe},Symbol.toStringTag,{value:"Module"}));var Lt=()=>y$1.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function xt(s){return {cachedResult:s.cachedResult,arcade:s.arcade?{func:s.arcade.func,context:s.arcade.modules.arcadeUtils.createExecContext(null,{sr:s.arcade.context.spatialReference}),modules:s.arcade.modules}:null}}async function $t(s,e,r,t){let i=s?.expression;if(typeof i!="string")return null;let n=Bt(i);if(n!=null)return {cachedResult:n};let l=await $();S$2(r);let a=l.arcadeUtils,d=a.createSyntaxTree(i);if(!d)return null;if(a.dependsOnView(d))return t?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0};let c=a.createFunction(d);return c?{arcade:{modules:l,func:c,context:a.createExecContext(null,{sr:e})}}:null}function vt(s,e,r){return s.arcadeUtils.createFeature(e.attributes,e.geometry,r)}function Ot(s,e){if(s!=null&&!St(s)){if(!e||!s.arcade)return void Lt().errorOncePerTick("Arcade support required but not provided");let r=e;r._geometry&&(r._geometry=A$2(r._geometry)),s.arcade.modules.arcadeUtils.updateExecContext(s.arcade.context,e);}}function yt(s){if(s!=null){if(St(s))return s.cachedResult;let e=s.arcade,r=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof r!="number"&&(s.cachedResult=0,r=0),r}return 0}function Jt(s,e=false){let r=s?.featureExpressionInfo,t=r?.expression;return e||t==="0"||(r=null),r??null}var Kt={cachedResult:0};function St(s){return s.cachedResult!=null}function Bt(s){return s==="0"?0:null}var bt=class s{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null;}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=u$2(e);}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters";}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0;}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0;}addOffsetRenderUnits(e){this._renderUnitOffset+=e;}geometryZWithOffset(e,r){let t=this.calculateOffsetRenderUnits(r);return this.featureExpressionInfoContext!=null?t:e+t}calculateOffsetRenderUnits(e){let r=this._meterUnitOffset,t=this.featureExpressionInfoContext;return t!=null&&(r+=yt(t)*this._metersPerElevationInfoUnit),r/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=i$1(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0;}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e;}updateFeatureExpressionInfoContextForGraphic(e,r,t){e.arcade?(this._featureExpressionInfoContext=xt(e),this.updateFeatureExpressionFeature(r,t)):this._featureExpressionInfoContext=e;}updateFeatureExpressionFeature(e,r){let t=this.featureExpressionInfoContext;t?.arcade&&(t.cachedResult=void 0,Ot(this._featureExpressionInfoContext,e.geometry?vt(t.arcade.modules,e,r):null));}static fromElevationInfo(e){let r=new s;return e!=null&&r.setFromElevationInfo(e),r}};var k=class extends St$1{constructor(s,e){super(s,e,ie(ue).concat(ie(fe(e)))),this.shader=new Ct$1(So,()=>import('./chunk-Bpw2VVPq.js').then(function(n){return n.b})),this.ignoreUnused=true,this.primitiveType=E.TRIANGLE_STRIP;}initializePipeline(s){let{draped:e,output:r,depthTestEnabled:t}=s,i=G$2(r),n=t&&!e&&!i&&r!==10;return J({blending:Ci(r,true),depthTest:t&&!e?{func:515}:null,depthWrite:n?Z:null,colorWrite:$$1,polygonOffset:ee(s)})}};k=P([vn("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],k);var ue=ge$1().vec2u8("uv0",{glNormalized:true});function fe(s){let e=ge$1().vec3f("position").vec3f("normal").f32("groundDistance");return s.hasVertexCenterOffset&&(e=e.vec3f("centerOffset")),s.hasVertexColor&&(e=e.vec4u8("color",{glNormalized:true})),s.hasVertexSize&&(e=e.vec2f("size")),s.hasVertexRotation&&(e=e.f32("rotation")),(s.hasVVColor||s.hasVVSize)&&(e=e.vec4f("featureAttribute")),s.hasVertexUVi&&(e=e.vec4i16("uvi")),st()?e.vec4u8("olidColor"):e}var u=class extends i$2{constructor(e,r){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=false,this.screenCenterOffsetUnitsEnabled=false,this.signedDistanceFieldEnabled=false,this.sampleSignedDistanceFieldTexelCenter=false,this.hasVVSize=false,this.hasVVColor=false,this.hasVerticalOffset=false,this.hasScreenSizePerspective=false,this.hasRotation=false,this.debugDrawLabelBorder=false,this.depthTestEnabled=true,this.pixelSnappingEnabled=true,this.draped=false,this.occludedFragmentFade=false,this.hasOcclusionTexture=false,this.hasFocusAreaStyle=false,this.hasVertexColor=true,this.hasVertexSize=true,this.hasVertexRotation=true,this.hasVertexUVi=true,this.hasVertexCenterOffset=true,this.olidColorInstanced=false,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=true,this.hasVVInstancing=false,this.snowCover=false,this.transparentOccluded=r;}};P([b()],u.prototype,"transparentOccluded",void 0),P([b({count:5})],u.prototype,"polygonOffset",void 0),P([b()],u.prototype,"enableOITOffset",void 0),P([b()],u.prototype,"screenCenterOffsetUnitsEnabled",void 0),P([b()],u.prototype,"signedDistanceFieldEnabled",void 0),P([b()],u.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),P([b()],u.prototype,"hasVVSize",void 0),P([b()],u.prototype,"hasVVColor",void 0),P([b()],u.prototype,"hasVerticalOffset",void 0),P([b()],u.prototype,"hasScreenSizePerspective",void 0),P([b()],u.prototype,"hasRotation",void 0),P([b()],u.prototype,"debugDrawLabelBorder",void 0),P([b()],u.prototype,"depthTestEnabled",void 0),P([b()],u.prototype,"pixelSnappingEnabled",void 0),P([b()],u.prototype,"draped",void 0),P([b()],u.prototype,"occludedFragmentFade",void 0),P([b()],u.prototype,"hasOcclusionTexture",void 0),P([b()],u.prototype,"hasFocusAreaStyle",void 0),P([b()],u.prototype,"hasVertexColor",void 0),P([b()],u.prototype,"hasVertexSize",void 0),P([b()],u.prototype,"hasVertexRotation",void 0),P([b()],u.prototype,"hasVertexUVi",void 0),P([b()],u.prototype,"hasVertexCenterOffset",void 0);var Ct=class extends Kt$1{constructor(e,r,t=false){super(e,ge),this.produces=new Map([[12,i=>I$1(i)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,i=>I$1(i)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,i=>I$1(i)&&this.parameters.drawAsLabel],[18,i=>this.parameters.draped&&I$1(i)]]),this._visible=true,this._configuration=new u(r,t);}updateConfiguration(e){super.updateConfiguration(e);let{parameters:r,_configuration:t}=this,i=r.draped;t.enableOITOffset=e.enableOITOffset,t.hasSlicePlane=this.parameters.hasSlicePlane,t.hasVerticalOffset=!!this.parameters.verticalOffset,t.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,t.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",t.polygonOffset=this.parameters.polygonOffset,t.draped=i,t.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,t.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,t.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,t.hasRotation=this.parameters.hasRotation,t.hasVVSize=!!this.parameters.vvSize,t.hasVVColor=!!this.parameters.vvColor,t.occludedFragmentFade=!i&&!!this.parameters.occludedFragmentOpacity,t.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,t.depthTestEnabled=this.parameters.depthEnabled,t.hasVertexColor=this.parameters.hasVertexColor,t.hasVertexSize=this.parameters.hasVertexSize,t.hasVertexRotation=this.parameters.hasVertexRotation,t.hasVertexUVi=this.parameters.hasVertexUVi,t.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,v$3(e.output)&&(t.debugDrawLabelBorder=!!ot.LABELS_SHOW_BORDER),t.hasOcclusionTexture=!r.drawAsLabel&&t.transparentOccluded&&R$2(e.output);}intersect(e,r,t,i,n,l){let{options:{selectionMode:a,hud:d,excludeLabels:c},point:h,camera:o}=t,{parameters:m}=this;if(!a||!d||c&&m.isLabel||!e.visible||!h||!o)return;let y$1=e.attributes.get("featureAttribute"),T$1=y$1==null?null:T(y$1.data,_t),{scaleX:R,scaleY:C}=Pt(T$1,m,o.pixelRatio),O=e.attributes.get("position"),b=e.attributes.get("size"),V$1=e.attributes.get("normal"),z=e.attributes.get("rotation"),E=e.attributes.get("centerOffset"),D=this.parameters.size;M(O.size>=3);let I=this.parameters.centerOffsetUnits==="screen";for(let U=0;U<O.data.length/O.size;U++){let Z=U*O.size;if(P$1(g,O.data[Z],O.data[Z+1],O.data[Z+2]),W(g,g,r),W(g,g,o.viewMatrix),E){let P=U*E.size;P$1(S,E.data[P],E.data[P+1],E.data[P+2]);}else P$1(S,0,0,0);if(!I&&(g[0]+=S[0],g[1]+=S[1],S[2]!==0)){let P=S[2];d$1(S,g),v$4(g,g,k$1(S,S,P));}let $=U*V$1.size;P$1(F,V$1.data[$],V$1.data[$+1],V$1.data[$+2]),$$2(F,F,R$3(Ut,r));let{normal:Ft,cosAngle:Tt}=Vt(F,o,Rt),Dt=wt(this.parameters,g,Tt,o,pe);if(w$1(g,g,Ft,Dt),o.applyProjection(g,v),v[0]>-1){if(I&&(S[0]||S[1])&&(v[0]+=S[0]*o.pixelRatio,S[1]!==0&&(v[1]+=pe.alignmentEvaluator.apply(S[1])*o.pixelRatio),o.unapplyProjection(v,g)),v[0]+=this.parameters.screenOffset[0]*o.pixelRatio,v[1]+=this.parameters.screenOffset[1]*o.pixelRatio,v[0]=Math.floor(v[0]),v[1]=Math.floor(v[1]),x[0]=D[0],x[1]=D[1],b!=null){let A=U*b.size;x[0]*=b.data[A],x[1]*=b.data[A+1];}pe.evaluator.applyVec2(x,x);let P=Ht*o.pixelRatio,ve=0;m.textureIsSignedDistanceField&&(ve=Math.min(m.outlineSize,.5*x[0])*o.pixelRatio/2),x[0]*=R,x[1]*=C;let At=m.rotation+(z!=null?z.data[U*z.size]:0),Mt=Se(m);if(zt(h,v[0],v[1],x,P,ve,At,m,Mt)){let A=t.ray;if(W(Et,g,V(qt,o.viewMatrix)),v[0]=h[0],v[1]=h[1],o.unprojectFromRenderScreen(v,g)){let M=o$1();O$1(M,A.direction);let Oe=1/x$1(M);k$1(M,M,Oe),l(y(A.origin,g)*Oe,M,-1,Et);}}}}}intersectDraped(e,r,t,i,n){let l=e.attributes.get("position"),a=e.attributes.get("size"),d=e.attributes.get("rotation"),c=this.parameters,h=c.size,o=e.attributes.get("featureAttribute"),m=o==null?null:T(o.data,_t),{scaleX:y,scaleY:T$1}=Pt(m,c,e.screenToWorldRatio),R=Nt*e.screenToWorldRatio;for(let C=0;C<l.data.length/l.size;C++){let O=C*l.size,b=l.data[O],V=l.data[O+1];if(x[0]=h[0],x[1]=h[1],a!=null){let I=C*a.size;x[0]*=a.data[I],x[1]*=a.data[I+1];}let z=0;c.textureIsSignedDistanceField&&(z=Math.min(c.outlineSize,.5*x[0])*e.screenToWorldRatio/2),x[0]*=y,x[1]*=T$1;let E=c.rotation+(d!=null?d.data[C*d.size]:0),D=Se(c);zt(t,b,V,x,R,z,E,c,D)&&i(n.distance,n.normal,-1);}}createBufferWriter(){return new xe(this.parameters)}applyShaderOffsets(e,r,t,i,n,l,a,d){$$2(de,t,R$3(Ut,i));let c=Vt(de,a,Rt),h=Xt(x$1(r),a),o=wt(this.parameters,r,c.cosAngle,a,d);w$1(r,r,c.normal,o+h),w$1(e,e,de,o+h);let m=l+o;this._applyPolygonOffsetView(r,c,m,a,r),this._applyCenterOffsetView(r,n,r);}applyShaderOffsetsNDC(e,r,t,i,n,l){return this._applyCenterOffsetNDC(e,r,i,n),l!=null&&O$1(l,n),this._applyPolygonOffsetNDC(n,t,i,n),n}_applyPolygonOffsetView(e,r,t,i,n){let l=i.aboveGround?1:-1,a=Math.sign(t);a===0&&(a=l);let d=l*a;if(this.parameters.shaderPolygonOffset<=0)return O$1(n,e);let c=h$3(Math.abs(r.cosAngle),.01,1),h=1-Math.sqrt(1-c*c)/c/i.viewport[2];return k$1(n,e,d>0?h:1/h),n}_applyCenterOffsetView(e,r,t){let i=this.parameters.centerOffsetUnits!=="screen";return t!==e&&O$1(t,e),i&&(t[0]+=r[0],t[1]+=r[1],r[2]&&(d$1(F,t),ra(t,t,k$1(F,F,r[2])))),t}_applyCenterOffsetNDC(e,r,t,i){let n=this.parameters.centerOffsetUnits!=="screen";return i!==e&&O$1(i,e),n||(i[0]+=r[0]/t.fullWidth*2,i[1]+=r[1]/t.fullHeight*2),i}_applyPolygonOffsetNDC(e,r,t,i){let n=this.parameters.shaderPolygonOffset;if(e!==i&&O$1(i,e),n){let l=t.aboveGround?1:-1,a=l*Math.sign(r);i[2]-=(a||l)*n;}return i}set visible(e){this._visible=e;}get visible(){let{color:e,outlineSize:r,outlineColor:t}=this.parameters,i=e[3]>=O$2||r>=O$2&&t[3]>=O$2;return this._visible&&i}createGLMaterial(e){return new me(e)}calculateRelativeScreenBounds(e,r,t=f()){return Wt(this.parameters,e,r,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}},me=class extends n$2{constructor(e){super(r$3(r$3({},e),e.material.parameters));}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(k,e)}};function Wt(s,e,r,t){t[0]=s.anchorPosition[0]*-e[0]+s.screenOffset[0]*r,t[1]=s.anchorPosition[1]*-e[1]+s.screenOffset[1]*r;}function Vt(s,e,r){return W(r.normal,s,e.viewInverseTransposeMatrix),r.cosAngle=Q(r.normal,Gt),r}function zt(s,e,r,t,i,n,l,a,d){let c=e-i-t[0]*d[0],h=c+t[0]+2*i,o=r-i-t[1]*d[1],m=o+t[1]+2*i,y=a.distanceFieldBoundingBox;return a.textureIsSignedDistanceField&&y!=null&&(c+=t[0]*y[0],o+=t[1]*y[1],h-=t[0]*(1-y[2]),m-=t[1]*(1-y[3]),c-=n,h+=n,o-=n,m+=n),v$2(It,e,r),G(N,s,It,x$2(l)),N[0]>c&&N[0]<h&&N[1]>o&&N[1]<m}var pe=new h$2,g=o$1(),F=o$1(),v=o$2(),de=o$1(),Et=o$1(),N=o(),It=o(),Ut=t$2(),qt=t$3(),S=o$1(),he=o$1(),_t=o$2(),Rt={normal:o$1(),cosAngle:0},Ht=1,Nt=2,x=r$4(0,0),Gt=t$4(0,0,1),ge=class extends a$2{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=false,this.color=U,this.size=_$1,this.polygonOffset=0,this.anchorPosition=r$4(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=false,this.sampleSignedDistanceFieldTexelCenter=false,this.outlineColor=U,this.outlineSize=0,this.distanceFieldBoundingBox=o$2(),this.rotation=0,this.hasRotation=false,this.vvSizeEnabled=false,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=false,this.hasVertexSize=false,this.hasVertexRotation=false,this.hasVertexUVi=false,this.hasVertexCenterOffset=false,this.hasSlicePlane=false,this.pixelSnappingEnabled=true,this.centerOffsetUnits="world",this.drawAsLabel=false,this.depthEnabled=true,this.focusAreaStyle=null,this.draped=false,this.isLabel=false;}get hasVVSize(){return !!this.vvSize}get hasVVColor(){return !!this.vvColor}get hasVVOpacity(){return !!this.vvOpacity}},xe=class{constructor(e){this.baseInstanceLayout=ue,this.layout=fe(e);}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,r,t,i,n){let{buffer:l,offset:a}=n,{position:d,normal:c,color:h,size:o,rotation:m,centerOffset:y,groundDistance:T,featureAttribute:R,uvi:C}=l;me$1(t.get("position"),e,d,a),pe$1(t.get("normal"),r,c,a);let O=t.get("position").indices.length;if(C){let b=t.get("uvi")?.data;if(b&&b.length>=4){let[V,z,E,D]=b;for(let I=0;I<O;++I){let U=a+I;C.setValues(U,V,z,E,D);}}}if(h&&_e(t.get("color"),4,h,a),o&&mt(t.get("size"),o,a),m&&_i(t.get("rotation"),m,a),y&&(t.get("centerOffset")?se(t.get("centerOffset"),y,a):xi(y,a,O)),t.get("groundDistance")?_i(t.get("groundDistance"),T,a):xi(T,a,O),R&&(t.get("featureAttribute")?de$1(t.get("featureAttribute"),R,a):xi(R,a,O)),i!=null){let b=t.get("position")?.indices;if(b){let V=b.length,z=l.getField("olidColor",G$1);ye$1(i,z,V,a);}}}writeBaseInstance(e,r){let{uv0:t}=r;mt(e.get("uv0"),t,0);}};function Pt(s,e,r){return s==null||e.vvSize==null?{scaleX:r,scaleY:r}:(zt$1(he,e,s),{scaleX:he[0]*r,scaleY:he[1]*r})}function Xt(s,e){let r=e.computeRenderPixelSizeAtDist(s)*w;return (e.aboveGround?1:-1)*r}function wt(s,e,r,t,i){if(!s.verticalOffset?.screenLength){let d=x$1(e);return i.update(r,d,s.screenSizePerspective,s.screenSizePerspectiveMinPixelReferenceSize,s.screenSizePerspectiveAlignment,null),0}let n=x$1(e),l=s.screenSizePerspectiveAlignment??s.screenSizePerspective,a=z$1(t,n,s.verticalOffset,r,l,s.screenSizePerspectiveMinPixelReferenceSize);return i.update(r,n,s.screenSizePerspective,s.screenSizePerspectiveMinPixelReferenceSize,s.screenSizePerspectiveAlignment,null),a}export{$t as $,C,D,Jt as J,Kt as K,Pe as P,Se as S,Ct as a,bt as b,n,t};