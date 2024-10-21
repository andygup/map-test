import{ho as d,hn as u,gP as re,tg as _e,nP as yt,au as Pt,_ as ze,jp as Ct,tv as De,aE as f,th as Ie,sT as At,dB as Re,cM as X,ea as k,cG as pe,d9 as wt,j9 as V,tE as Tt,tF as $t,cj as Et,cw as N,da as q,hk as _t,tG as fe,a8 as zt,fK as Z,tH as Dt,ac as je,jK as It,dC as Rt,l5 as jt,cd as R,cI as Fe,dM as Me,ck as Ve,cf as Ft,jG as Mt,jg as he,mN as Vt,al as Ne,Y as se,tI as Nt,rK as Lt,d3 as ne,kJ as Ut,tJ as Bt,lw as Ht,tK as Gt,tk as Wt,ce as qt,mZ as kt,sV as Yt,sW as Qt,sX as Jt,bk as Xt,tL as Zt,tM as Kt,tN as eo}from"./index-DzfnmjFP.js";import{o as to}from"./floatRGBA-RLC-pnKC.js";import{a7 as oo,x as Le,f as ao,b as I,l as H,a8 as io,w as Ue,z as Be,s as He,o as Ge,P as We,A as qe,p as ke,u as Ye,c as ve,B as Y,a9 as ge,j as A,U as Qe,C as Je,D as Xe,F as Ze,I as Ke,i as h,k as et,V as $,aa as ro,E as so,G as no,J as lo,K as co,L as uo,ab as po,ac as fo,t as ho,W as vo}from"./IntegerPassUniform-C4orcbhQ.js";import{D as me,R as Oe,O as go,E as be,f as mo}from"./enums-BlUEVwJR.js";import{x as Oo}from"./BufferView-DowTxg_p.js";import{H as L}from"./InterleavedLayout-rpfDyLJZ.js";import{o as b,d as K,f as ee,g as te,e as bo}from"./NormalAttribute.glsl-D_IY537z.js";import{s as tt,f as xo,o as ot,a as So,t as yo,r as Po,d as Co,u as Ao,l as wo,b as To,O as $o,S as Eo,p as xe,y as Se,R as _o,c as zo,e as Do,g as Io,h as Ro,i as jo}from"./VertexColor.glsl-emmMQ0ZZ.js";import{s as Fo}from"./Util-Cv2AMtKx.js";import{s as Mo,o as at,S as it,_ as rt,h as Vo}from"./renderState-BxbDJrNm.js";import{o as No,x as Lo}from"./hydratedFeatures-7n7nUTHP.js";import"./BindType-BmZEZMMh.js";import{c as ye,a as Uo}from"./OverlayCompositing.glsl-DnyrdS6p.js";const st=128,nt=.5;function Ga(t){return t==="cross"||t==="x"}function Wa(t,e=st,o=e*nt,a=0){const i=Bo(t,e,o,a);return new oo(i,{mipmap:!1,wrap:{s:me.CLAMP_TO_EDGE,t:me.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0})}function Bo(t,e=st,o=e*nt,a=0){switch(t){case"circle":default:return Ho(e,o);case"square":return Go(e,o);case"cross":return qo(e,o,a);case"x":return ko(e,o,a);case"kite":return Wo(e,o);case"triangle":return Yo(e,o);case"arrow":return Qo(e,o)}}function Ho(t,e){const o=t/2-.5;return W(t,dt(o,o,e/2))}function Go(t,e){return lt(t,e,!1)}function Wo(t,e){return lt(t,e,!0)}function qo(t,e,o=0){return ct(t,e,!1,o)}function ko(t,e,o=0){return ct(t,e,!0,o)}function Yo(t,e){return W(t,ut(t/2,e,e/2))}function Qo(t,e){const o=e,a=e/2,i=t/2,r=.8*o,l=dt(i,(t-e)/2-r,Math.sqrt(r*r+a*a)),n=ut(i,o,a);return W(t,(c,s)=>Math.max(n(c,s),-l(c,s)))}function lt(t,e,o){return o&&(e/=Math.SQRT2),W(t,(a,i)=>{let r=a-.5*t+.25,l=.5*t-i-.75;if(o){const n=(r+l)/Math.SQRT2;l=(l-r)/Math.SQRT2,r=n}return Math.max(Math.abs(r),Math.abs(l))-.5*e})}function ct(t,e,o,a=0){e-=a,o&&(e*=Math.SQRT2);const i=.5*e;return W(t,(r,l)=>{let n,c=r-.5*t,s=.5*t-l-1;if(o){const v=(c+s)/Math.SQRT2;s=(s-c)/Math.SQRT2,c=v}return c=Math.abs(c),s=Math.abs(s),n=c>s?c>i?Math.sqrt((c-i)*(c-i)+s*s):s:s>i?Math.sqrt(c*c+(s-i)*(s-i)):c,n-=a/2,n})}function dt(t,e,o){return(a,i)=>{const r=a-t,l=i-e;return Math.sqrt(r*r+l*l)-o}}function ut(t,e,o){const a=Math.sqrt(e*e+o*o);return(i,r)=>{const l=Math.abs(i-t)-o,n=r-t+e/2+.75,c=(e*l+o*n)/a,s=-n;return Math.max(c,s)}}function W(t,e){const o=new Uint8Array(4*t*t);for(let a=0;a<t;a++)for(let i=0;i<t;i++){const r=i+t*a;let l=e(i,a);l=l/t+.5,to(l,o,4*r)}return o}function Jo(t){return t instanceof Float32Array&&t.length>=16}function Xo(t){return Array.isArray(t)&&t.length>=16}function Zo(t){return Jo(t)||Xo(t)}const pt=.5;function Ko(t,e){t.include(tt),t.attributes.add(d.POSITION,"vec3"),t.attributes.add(d.NORMAL,"vec3"),t.attributes.add(d.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;Le(o,e),ao(o,e),o.uniforms.add(new I("viewport",(a,i)=>i.camera.fullViewport),new H("polygonOffset",a=>a.shaderPolygonOffset),new H("cameraGroundRelative",(a,i)=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&xo(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(u`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(u`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.multipassEnabled?u.float(0):u`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||io(o),e.draped||(o.uniforms.add(new H("perDistancePixelRatio",(a,i)=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),o.code.add(u`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${u.float(pt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&Ue(o),e.hasScreenSizePerspective&&ot(o),o.code.add(u`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

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

      ${e.hasVerticalOffset?u`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":u`
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
  `)}let ea=class{constructor(){this.factor=new Pe,this.factorAlignment=new Pe}};class Pe{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function le(t){t.uniforms.add(new So("alignPixelEnabled",(e,o)=>o.alignPixelEnabled)),t.code.add(u`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(u`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function ta(t,e){const{vertex:o,fragment:a}=t;o.include(le),e.multipassEnabled&&t.varyings.add("depth","float"),o.code.add(u`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.include(Be,e),a.code.add(u`
  void main() {
    fragColor = vec4(1);
    ${e.multipassEnabled?u`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function oa(t){t.vertex.uniforms.add(new H("renderTransparentlyOccludedHUD",(e,o)=>o.hudRenderStyle===ye.Occluded?1:o.hudRenderStyle===ye.NotOccluded?0:.75),new I("viewport",(e,o)=>o.camera.fullViewport),new He("hudVisibilityTexture",(e,o)=>{var a;return(a=o.hudVisibility)==null?void 0:a.getTexture()})),t.vertex.include(le),t.vertex.code.add(u`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function ft(t){const e=new Ge,o=t.signedDistanceFieldEnabled;if(e.include(Ko,t),e.include(We,t),t.occlusionPass)return e.include(ta,t),e;const{vertex:a,fragment:i}=e;e.include(tt),i.include(Uo),i.include(qe),e.include(ke,t),e.include(Ye,t),e.include(oa),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),a.uniforms.add(new I("viewport",(s,v)=>v.camera.fullViewport),new ve("screenOffset",(s,v)=>re(ht,2*s.screenOffset[0]*v.camera.pixelRatio,2*s.screenOffset[1]*v.camera.pixelRatio)),new ve("anchorPosition",s=>G(s)),new I("materialColor",s=>s.color)),Ue(a),o&&(a.uniforms.add(new I("outlineColor",s=>s.outlineColor)),i.uniforms.add(new I("outlineColor",s=>Ce(s)?s.outlineColor:_e),new H("outlineSize",s=>Ce(s)?s.outlineSize:0))),t.pixelSnappingEnabled&&a.include(le),t.hasScreenSizePerspective&&(yo(a),ot(a)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(d.UV0,"vec2"),e.attributes.add(d.COLOR,"vec4"),e.attributes.add(d.SIZE,"vec2"),e.attributes.add(d.FEATUREATTRIBUTE,"vec4"),a.code.add(u`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?u`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:u`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=u`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,l=t.pixelSnappingEnabled?o?u`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:u`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:u`posProj += quadOffset;`;a.code.add(u`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${r}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===b.ObjectAndLayerIdColor?u`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${u.float(Y)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${u.float(Y)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${l}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?u`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),i.uniforms.add(new He("tex",s=>s.texture));const n=t.debugDrawLabelBorder?u`(isBorder > 0.0 ? 0.0 : ${u.float(ge)})`:u.float(ge),c=u`
    ${t.debugDrawLabelBorder?u`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t.sampleSignedDistanceFieldTexelCenter?u`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:u`
      vec2 samplePos = vtc;
      `}

    ${o?u`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${u.float(Y)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:u`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?u`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(t.output){case b.Color:t.transparencyPassType===A.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),i.code.add(u`
        void main() {
          ${c}
          ${t.transparencyPassType===A.FrontFace?"fragColor.rgb /= fragColor.a;":""}
          ${t.transparencyPassType===A.ColorAlpha?"fragAlpha = fragColor.a;":""}
        }`);break;case b.ObjectAndLayerIdColor:i.code.add(u`
        void main() {
          ${c}
          outputObjectAndLayerIdColor();
        }`);break;case b.Highlight:i.constants.add("occludedHighlightFlag","vec4",Po),i.constants.add("unoccludedHighlightFlag","vec4",Co),i.code.add(u`
        void main() {
          ${c}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return e}function Ce(t){return t.outlineColor[3]>0&&t.outlineSize>0}function G(t,e=ht){return t.textureIsSignedDistanceField?aa(t.anchorPosition,t.distanceFieldBoundingBox,e):yt(e,t.anchorPosition),e}function aa(t,e,o){e!=null?re(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):re(o,0,0)}const ht=Pt(),ia=Object.freeze(Object.defineProperty({__proto__:null,build:ft,calculateAnchorPosForRendering:G},Symbol.toStringTag,{value:"Module"}));let vt=class gt extends Je{initializeConfiguration(e,o){o.spherical=e.viewingMode===Ct.Global}initializeProgram(e){return new Xe(e.rctx,gt.shader.get().build(this.configuration),De)}initializePipeline(){const e=this.configuration.transparencyPassType,o=this.configuration,a=e===A.NONE,i=e===A.FrontFace,r=this.configuration.hasPolygonOffset?ra:null,l=o.draped?null:(a||i)&&o.output!==b.Highlight&&(o.depthEnabled||o.occlusionPass)?at:null;return it({blending:o.output===b.Color||o.output===b.Highlight?a?sa:Ze(e):null,depthTest:o.draped?null:{func:go.LEQUAL},depthWrite:l,drawBuffers:Ke(e),colorWrite:rt,polygonOffset:r})}get primitiveType(){return this.configuration.occlusionPass?be.POINTS:be.TRIANGLES}};vt.shader=new Qe(ia,()=>ze(()=>Promise.resolve().then(()=>Ea),void 0));const ra={factor:0,units:-4},sa=Mo(Oe.ONE,Oe.ONE_MINUS_SRC_ALPHA);let g=class extends et{constructor(){super(...arguments),this.output=b.Color,this.transparencyPassType=A.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}};f([h({count:b.COUNT})],g.prototype,"output",void 0),f([h({count:A.COUNT})],g.prototype,"transparencyPassType",void 0),f([h()],g.prototype,"screenCenterOffsetUnitsEnabled",void 0),f([h()],g.prototype,"spherical",void 0),f([h()],g.prototype,"occlusionTestEnabled",void 0),f([h()],g.prototype,"signedDistanceFieldEnabled",void 0),f([h()],g.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),f([h()],g.prototype,"vvSize",void 0),f([h()],g.prototype,"vvColor",void 0),f([h()],g.prototype,"hasVerticalOffset",void 0),f([h()],g.prototype,"hasScreenSizePerspective",void 0),f([h()],g.prototype,"debugDrawLabelBorder",void 0),f([h()],g.prototype,"hasSlicePlane",void 0),f([h()],g.prototype,"hasPolygonOffset",void 0),f([h()],g.prototype,"depthEnabled",void 0),f([h()],g.prototype,"pixelSnappingEnabled",void 0),f([h()],g.prototype,"draped",void 0),f([h()],g.prototype,"multipassEnabled",void 0),f([h()],g.prototype,"cullAboveGround",void 0),f([h()],g.prototype,"occlusionPass",void 0),f([h()],g.prototype,"objectAndLayerIdColorInstanced",void 0),f([h({constValue:!0})],g.prototype,"hasSliceInVertexProgram",void 0),f([h({constValue:!1})],g.prototype,"hasVvInstancing",void 0);class Ya extends Ie{constructor(e){super(e,new ma),this._configuration=new g,this.produces=new Map([[$.HUD_MATERIAL,o=>K(o)&&!this.parameters.drawInSecondSlot],[$.LABEL_MATERIAL,o=>K(o)&&this.parameters.drawInSecondSlot],[$.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[$.DRAPED_MATERIAL,o=>K(o)]])}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=o.slot===$.OCCLUSION_PIXELS&&this.parameters.occlusionTest,e===b.Color&&(this._configuration.debugDrawLabelBorder=!!At.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration}intersect(e,o,a,i,r,l){if(!(a.options.selectionMode&&a.options.hud&&e.visible&&a.point))return;const n=this.parameters,c=a.point,s=a.camera;let{scaleX:v,scaleY:O}=this._getScreenScale(e);v*=s.pixelRatio,O*=s.pixelRatio,Re(ae,o),e.attributes.has(d.FEATUREATTRIBUTE)&&ca(ae);const p=e.attributes.get(d.POSITION),S=e.attributes.get(d.SIZE),w=e.attributes.get(d.NORMAL),T=e.attributes.get(d.CENTEROFFSETANDDISTANCE);Fo(p.size>=3);const j=G(n),D=this.parameters.centerOffsetUnits==="screen";for(let m=0;m<p.data.length/p.size;m++){const E=m*p.size;X(y,p.data[E],p.data[E+1],p.data[E+2]),k(y,y,o);const F=m*S.size;_[0]=S.data[F]*v,_[1]=S.data[F+1]*O,k(y,y,s.viewMatrix);const M=m*T.size;if(X(C,T.data[M],T.data[M+1],T.data[M+2]),!D&&(y[0]+=C[0],y[1]+=C[1],C[2]!==0)){const J=C[2];pe(C,y),wt(y,y,V(C,C,J))}const Q=m*w.size;if(X(B,w.data[Q],w.data[Q+1],w.data[Q+2]),Ae(B,ae,s,ie),this._applyVerticalOffsetTransformationView(y,ie,s,oe),s.applyProjection(y,P),P[0]>-1){D&&(C[0]||C[1])&&(P[0]+=C[0]*s.pixelRatio,C[1]!==0&&(P[1]+=Tt(C[1],oe.factorAlignment)*s.pixelRatio),s.unapplyProjection(P,y)),P[0]+=this.parameters.screenOffset[0]*s.pixelRatio,P[1]+=this.parameters.screenOffset[1]*s.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]),$t(_,oe.factor,_);const J=ha*s.pixelRatio;let ce=0;if(n.textureIsSignedDistanceField&&(ce=n.outlineSize*s.pixelRatio/2),we(c,P[0],P[1],_,J,ce,n,j)){const de=a.ray;if(k(Te,y,Et(ua,s.viewMatrix)),P[0]=c[0],P[1]=c[1],s.unprojectFromRenderScreen(P,y)){const U=R();N(U,de.direction);const ue=1/q(U);V(U,U,ue),l(_t(de.origin,y)*ue,U,-1,!0,1,Te)}}}}}intersectDraped(e,o,a,i,r,l){const n=e.attributes.get(d.POSITION),c=e.attributes.get(d.SIZE),s=this.parameters,v=G(s);let{scaleX:O,scaleY:p}=this._getScreenScale(e);O*=e.screenToWorldRatio,p*=e.screenToWorldRatio;const S=va*e.screenToWorldRatio;for(let w=0;w<n.data.length/n.size;w++){const T=w*n.size,j=n.data[T],D=n.data[T+1],m=w*c.size;_[0]=c.data[m]*O,_[1]=c.data[m+1]*p;let E=0;s.textureIsSignedDistanceField&&(E=s.outlineSize*e.screenToWorldRatio/2),we(i,j,D,_,S,E,s,v)&&r(l.dist,l.normal,-1,!1)}}createBufferWriter(){return new ba(this)}_updateScaleInfo(e,o,a){const i=this.parameters;i.screenSizePerspective!=null?fe(a,o,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),i.screenSizePerspectiveAlignment!=null?fe(a,o,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,o,a,i,r,l,n){const c=Ae(o,a,r,ie);return this._applyVerticalGroundOffsetView(e,c,r,n),this._applyVerticalOffsetTransformationView(n,c,r,l),this._applyPolygonOffsetView(n,c,i[3],r,n),this._applyCenterOffsetView(n,i,n),n}applyShaderOffsetsNDC(e,o,a,i,r){return this._applyCenterOffsetNDC(e,o,a,i),r!=null&&N(r,i),this._applyPolygonOffsetNDC(i,o,a,i),i}_applyPolygonOffsetView(e,o,a,i,r){const l=i.aboveGround?1:-1;let n=Math.sign(a);n===0&&(n=l);const c=l*n;if(this.parameters.shaderPolygonOffset<=0)return N(r,e);const s=zt(Math.abs(o.cosAngle),.01,1),v=1-Math.sqrt(1-s*s)/s/i.viewport[2];return V(r,e,c>0?v:1/v),r}_applyVerticalGroundOffsetView(e,o,a,i){const r=q(e),l=a.aboveGround?1:-1,n=a.computeRenderPixelSizeAtDist(r)*pt,c=V(y,o.normal,l*n);return Z(i,e,c),i}_applyVerticalOffsetTransformationView(e,o,a,i){var s;const r=this.parameters;if(!((s=r.verticalOffset)!=null&&s.screenLength)){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const v=q(e);this._updateScaleInfo(i,v,o.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const l=q(e),n=r.screenSizePerspectiveAlignment??r.screenSizePerspective,c=Dt(a,l,r.verticalOffset,o.cosAngle,n);return this._updateScaleInfo(i,l,o.cosAngle),V(o.normal,o.normal,c),Z(e,e,o.normal)}_applyCenterOffsetView(e,o,a){const i=this.parameters.centerOffsetUnits!=="screen";return a!==e&&N(a,e),i&&(a[0]+=o[0],a[1]+=o[1],o[2]&&(pe(B,a),Z(a,a,V(B,B,o[2])))),a}_applyCenterOffsetNDC(e,o,a,i){const r=this.parameters.centerOffsetUnits!=="screen";return i!==e&&N(i,e),r||(i[0]+=o[0]/a.fullWidth*2,i[1]+=o[1]/a.fullHeight*2),i}_applyPolygonOffsetNDC(e,o,a,i){const r=this.parameters.shaderPolygonOffset;if(e!==i&&N(i,e),r){const l=a.aboveGround?1:-1,n=l*Math.sign(o[3]);i[2]-=(n||l)*r}return i}createGLMaterial(e){return new na(e)}calculateRelativeScreenBounds(e,o,a=je()){return la(this.parameters,e,o,a),a[2]=a[0]+e[0],a[3]=a[1]+e[1],a}_getScreenScale(e){const o=e.attributes.get(d.FEATUREATTRIBUTE);if(o==null)return{scaleX:1,scaleY:1};const a=It(o.data,fa),[i,r]=ro(pa,this.parameters,a);return{scaleX:i,scaleY:r}}}class na extends Ao{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(vt,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function la(t,e,o,a){a[0]=t.anchorPosition[0]*-e[0]+t.screenOffset[0]*o,a[1]=t.anchorPosition[1]*-e[1]+t.screenOffset[1]*o}function Ae(t,e,o,a){return Zo(e)&&(e=Re(da,e)),Rt(a.normal,t,e),k(a.normal,a.normal,o.viewInverseTransposeMatrix),a.cosAngle=jt(mt,ga),a}function ca(t){const e=t[0],o=t[1],a=t[2],i=t[3],r=t[4],l=t[5],n=t[6],c=t[7],s=t[8],v=1/Math.sqrt(e*e+o*o+a*a),O=1/Math.sqrt(i*i+r*r+l*l),p=1/Math.sqrt(n*n+c*c+s*s);return t[0]=e*v,t[1]=o*v,t[2]=a*v,t[3]=i*O,t[4]=r*O,t[5]=l*O,t[6]=n*p,t[7]=c*p,t[8]=s*p,t}function we(t,e,o,a,i,r,l,n){let c=e-i-(n[0]>0?a[0]*n[0]:0),s=c+a[0]+2*i,v=o-i-(n[1]>0?a[1]*n[1]:0),O=v+a[1]+2*i;const p=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&p!=null&&(c+=a[0]*p[0],v+=a[1]*p[1],s-=a[0]*(1-p[2]),O-=a[1]*(1-p[3]),c-=r,s+=r,v-=r,O+=r),t[0]>c&&t[0]<s&&t[1]>v&&t[1]<O}const oe=new ea,y=R(),B=R(),P=Fe(),mt=R(),Te=R(),ae=Me(),da=Me(),ua=Ve(),C=R(),pa=R(),fa=Fe(),ie={normal:mt,cosAngle:0},ha=1,va=2,_=[0,0],ga=Ft(0,0,1);class ma extends wo{constructor(){super(...arguments),this.renderOccluded=Mt.Occlude,this.isDecoration=!1,this.color=he(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=Vt(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=he(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1}}const Ot=L().vec3f(d.POSITION).vec3f(d.NORMAL).vec2f(d.UV0).vec4u8(d.COLOR).vec2f(d.SIZE).vec4f(d.CENTEROFFSETANDDISTANCE).vec4f(d.FEATUREATTRIBUTE),Oa=Ot.clone().vec4u8(d.OBJECTANDLAYERIDCOLOR);class ba{constructor(e){this._material=e,this.vertexBufferLayout=Ne("enable-feature:objectAndLayerId-rendering")?Oa:Ot}elementCount(e){return 6*e.attributes.get(d.POSITION).indices.length}write(e,o,a,i,r){var D;To(a.attributes.get(d.POSITION),e,i.position,r,6),$o(a.attributes.get(d.NORMAL),o,i.normal,r,6);const l=a.attributes.get(d.UV0).data;let n,c,s,v;if(l==null||l.length<4){const m=this._material.parameters;n=0,c=0,s=m.texCoordScale[0],v=m.texCoordScale[1]}else n=l[0],c=l[1],s=l[2],v=l[3];s=Math.min(1.99999,s+1),v=Math.min(1.99999,v+1);let O=a.attributes.get(d.POSITION).indices.length,p=r;const S=i.uv0;for(let m=0;m<O;++m)S.set(p,0,n),S.set(p,1,c),p++,S.set(p,0,s),S.set(p,1,c),p++,S.set(p,0,s),S.set(p,1,v),p++,S.set(p,0,s),S.set(p,1,v),p++,S.set(p,0,n),S.set(p,1,v),p++,S.set(p,0,n),S.set(p,1,c),p++;Eo(a.attributes.get(d.COLOR),4,i.color,r,6);const{data:w,indices:T}=a.attributes.get(d.SIZE);O=T.length;const j=i.size;p=r;for(let m=0;m<O;++m){const E=w[2*T[m]],F=w[2*T[m]+1];for(let M=0;M<6;++M)j.set(p,0,E),j.set(p,1,F),p++}if(a.attributes.get(d.CENTEROFFSETANDDISTANCE)?xe(a.attributes.get(d.CENTEROFFSETANDDISTANCE),i.centerOffsetAndDistance,r,6):Se(i.centerOffsetAndDistance,r,6*O),a.attributes.get(d.FEATUREATTRIBUTE)?xe(a.attributes.get(d.FEATUREATTRIBUTE),i.featureAttribute,r,6):Se(i.featureAttribute,r,6*O),a.objectAndLayerIdColor!=null){const m=(D=a.attributes.get(d.POSITION))==null?void 0:D.indices;if(m){const E=m.length,F=i.getField(d.OBJECTANDLAYERIDCOLOR,Oo);_o(a.objectAndLayerIdColor,F,E,r,6)}}}}class xa extends Ie{intersect(e,o,a,i,r,l){return zo(e,a,i,r,void 0,l)}}function bt(t){const e=new Ge,{vertex:o,fragment:a,attributes:i,varyings:r}=e;Le(o,t),e.include(Do,t),e.include(Io,t),e.include(ke,t),e.include(Ye,t),i.add(d.POSITION,"vec3"),t.vvColor&&i.add(d.COLORFEATUREATTRIBUTE,"float"),r.add("vColor","vec4"),r.add("vpos","vec3");const l=t.multipassEnabled&&t.output===b.Color;l&&r.add("depth","float"),o.uniforms.add(new I("eColor",c=>c.color)),o.code.add(u`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${l?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(We,t),l&&e.include(Be,t),a.include(qe);const n=t.output===b.Highlight;return n&&e.include(Ro,t),t.transparencyPassType===A.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.code.add(u`
  void main() {
    discardBySlice(vpos);
    ${l?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${t.output===b.ObjectAndLayerIdColor?u`fColor.a = 1.0;`:""}

    if (fColor.a < ${u.float(Y)}) {
      discard;
    }

    ${t.output===b.Color?u`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===A.ColorAlpha?u`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}`:""}
    ${n?u`outputHighlight();`:""};
    ${t.output===b.ObjectAndLayerIdColor?u`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const Sa=Object.freeze(Object.defineProperty({__proto__:null,build:bt},Symbol.toStringTag,{value:"Module"}));let xt=class St extends Je{initializeProgram(e){return new Xe(e.rctx,St.shader.get().build(this.configuration),De)}_createPipeline(e,o){const a=this.configuration,i=e===A.NONE,r=e===A.FrontFace;return it({blending:a.output===b.Color&&a.transparent?i?so:Ze(e):null,culling:Vo(a.cullFace),depthTest:a.draped?null:{func:no(e)},depthWrite:a.draped?null:(i||r)&&a.writeDepth?at:null,drawBuffers:a.output===b.Depth?{buffers:[mo.NONE]}:Ke(e),colorWrite:rt,stencilWrite:a.hasOccludees?lo:null,stencilTest:a.hasOccludees?o?co:uo:null,polygonOffset:i||r?a.polygonOffset?ya:null:po(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};xt.shader=new Qe(Sa,()=>ze(()=>Promise.resolve().then(()=>_a),void 0));const ya={factor:1,units:1};class x extends et{constructor(){super(...arguments),this.output=b.Color,this.cullFace=se.None,this.transparencyPassType=A.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1}}f([h({count:b.COUNT})],x.prototype,"output",void 0),f([h({count:se.COUNT})],x.prototype,"cullFace",void 0),f([h({count:A.COUNT})],x.prototype,"transparencyPassType",void 0),f([h()],x.prototype,"hasSlicePlane",void 0),f([h()],x.prototype,"hasVertexColors",void 0),f([h()],x.prototype,"transparent",void 0),f([h()],x.prototype,"polygonOffset",void 0),f([h()],x.prototype,"enableOffset",void 0),f([h()],x.prototype,"writeDepth",void 0),f([h()],x.prototype,"hasOccludees",void 0),f([h()],x.prototype,"multipassEnabled",void 0),f([h()],x.prototype,"cullAboveGround",void 0),f([h()],x.prototype,"objectAndLayerIdColorInstanced",void 0),f([h()],x.prototype,"vvColor",void 0),f([h()],x.prototype,"draped",void 0),f([h({constValue:!1})],x.prototype,"occlusionPass",void 0),f([h({constValue:!0})],x.prototype,"hasVvInstancing",void 0),f([h({constValue:!1})],x.prototype,"vvSize",void 0),f([h({constValue:!1})],x.prototype,"vvOpacity",void 0);class Qa extends xa{constructor(e){super(e,new Ca),this.supportsEdges=!0,this.produces=new Map([[$.OPAQUE_MATERIAL,o=>o===b.Highlight||ee(o)&&!this._isTransparent],[$.OPAQUE_NO_SSAO_DEPTH,o=>te(o)&&this.parameters.writeLinearDepth&&!this._isTransparent],[$.TRANSPARENT_MATERIAL,o=>ee(o)&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_NO_SSAO_DEPTH,o=>te(o)&&this.parameters.writeLinearDepth&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,o=>(ee(o)||te(o)&&this.parameters.writeLinearDepth)&&this._isTransparent&&!this.parameters.writeDepth],[$.DRAPED_MATERIAL,o=>bo(o)]]),this._configuration=new x}getConfiguration(e,o){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<fo,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}createGLMaterial(e){return new Pa(e)}createBufferWriter(){const e=L().vec3f(d.POSITION);return Ne("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(d.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(d.COLORFEATUREATTRIBUTE):e.vec4u8(d.COLOR),new jo(e)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class Pa extends ho{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output===b.Color&&this._updateOccludeeState(e),this.ensureTechnique(xt,e)}}class Ca extends vo{constructor(){super(...arguments),this.color=_e,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=se.None,this.hasOccludees=!1,this.draped=!1}}var $e;(function(t){t[t.EnableFastUpdates=0]="EnableFastUpdates",t[t.DisableFastUpdates=1]="DisableFastUpdates",t[t.UpdateFastLocalOrigin=2]="UpdateFastLocalOrigin"})($e||($e={}));function Ja(t,e){if(t.type==="point")return z(t,e,!1);if(No(t))switch(t.type){case"extent":return z(t.center,e,!1);case"polygon":return z(t.centroid,e,!1);case"polyline":return z(Ee(t),e,!0);case"mesh":return z(t.origin,e,!1)}else switch(t.type){case"extent":return z(Aa(t),e,!0);case"polygon":return z(wa(t),e,!0);case"polyline":return z(Ee(t),e,!0)}}function Ee(t){const e=t.paths[0];if(!e||e.length===0)return null;const o=Nt(e,Lt(e)/2);return ne(o[0],o[1],o[2],t.spatialReference)}function Aa(t){return ne(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function wa(t){const e=t.rings[0];if(!e||e.length===0)return null;const o=Ut(t.rings,!!t.hasZ);return ne(o[0],o[1],o[2],t.spatialReference)}function z(t,e,o){const a=o?t:Lo(t);return e&&t?Bt(t,a,e)?a:null:a}function Xa(t,e,o,a=0){if(t){e||(e=je());const i=t;let r=.5*i.width*(o-1),l=.5*i.height*(o-1);return i.width<1e-7*i.height?r+=l/20:i.height<1e-7*i.width&&(l+=r/20),Ht(e,i.xmin-r-a,i.ymin-l-a,i.xmax+r+a,i.ymax+l+a),e}return null}function Za(t,e,o=null){const a=Gt(Wt);return t!=null&&(a[0]=t[0],a[1]=t[1],a[2]=t[2]),e!=null?a[3]=e:t!=null&&t.length>3&&(a[3]=t[3]),o&&(a[0]*=o,a[1]*=o,a[2]*=o,a[3]*=o),a}function Ka(t=kt,e,o,a=1){const i=new Array(3);if(e==null||o==null)i[0]=1,i[1]=1,i[2]=1;else{let r,l=0;for(let n=2;n>=0;n--){const c=t[n];let s;const v=c!=null,O=n===0&&!r&&!v,p=o[n];c==="symbol-value"||O?s=p!==0?e[n]/p:1:v&&c!=="proportional"&&isFinite(c)&&(s=p!==0?c/p:1),s!=null&&(i[n]=s,r=s,l=Math.max(l,Math.abs(s)))}for(let n=2;n>=0;n--)i[n]==null?i[n]=r:i[n]===0&&(i[n]=.001*l)}for(let r=2;r>=0;r--)i[r]/=a;return qt(i)}function Ta(t){return t.isPrimitive!=null}function ei(t){return $a(Ta(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function $a(t){const e=o=>o==null||o>=0;return Array.isArray(t)?t.every(e):e(t)}function ti(t,e,o,a=Ve()){return t&&Yt(a,a,-t/180*Math.PI),e&&Qt(a,a,e/180*Math.PI),o&&Jt(a,a,o/180*Math.PI),a}function oi(t,e,o){if(o.minDemResolution!=null)return o.minDemResolution;const a=Xt(e),i=Zt(t)*a,r=Kt(t)*a,l=eo(t)*(e.isGeographic?1:a);return i===0&&r===0&&l===0?o.minDemResolutionForPoints:.01*Math.max(i,r,l)}const ai=L().vec3f(d.POSITION),ii=L().vec3f(d.POSITION).vec2f(d.UV0),ri=L().vec3f(d.POSITION).vec4u8(d.COLOR),si=L().vec3f(d.POSITION).vec2f(d.UV0).vec4u8(d.OBJECTANDLAYERIDCOLOR),Ea=Object.freeze(Object.defineProperty({__proto__:null,build:ft,calculateAnchorPosForRendering:G},Symbol.toStringTag,{value:"Module"})),_a=Object.freeze(Object.defineProperty({__proto__:null,build:bt},Symbol.toStringTag,{value:"Module"}));export{Ka as B,Za as F,ei as I,Xa as P,Ya as Q,$a as S,ti as U,Ga as a,$e as b,Ja as c,Qa as d,xa as e,ii as f,le as g,Ko as h,st as i,ai as j,oi as k,si as l,nt as o,ri as r,oa as t,Wa as u};
