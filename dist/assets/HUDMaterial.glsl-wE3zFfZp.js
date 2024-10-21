import{cO as pe,i2 as p,hs as Y,nC as He,kr as ke,it as Ge,e2 as f,wq as b,nB as D,pE as We,b0 as ne,_ as Xe,k1 as fe,kf as Qe,X as m,nz as Ye,pD as Ze,im as ze,df as K,fA as Q,c2 as he,dF as Je,kk as j,wH as Ke,wI as et,bD as tt,bU as L,dG as W,h$ as ot,wJ as ge,aG as at,fz as ee,wK as it,aS as st,kF as rt,hq as nt,nh as lt,pc as ct,bY as dt,bx as I,ov as Ee,hv as ye,bE as ut,bz as pt,kD as ft,wL as ve,pd as ht}from"./index-C-FXvluM.js";import{o as gt}from"./floatRGBA-omvZ6LNc.js";import{U as vt,C as mt,j as St,g as bt,P as Ct,l as Ot,h as xt,k as Pt,e as X,M as me,o as te,w as Tt,a as Se,aj as $t,q,n as At,m as zt,ak as Et,x as yt,B as S,D as _t,E as wt,F as Dt,G as B,al as Ft,I as Rt}from"./Geometry-BTp0yhOg.js";import{x as It}from"./BufferView-Dk0MoByh.js";import{H as Mt}from"./InterleavedLayout-FN5nlSrs.js";import{n as F,b as oe}from"./NormalAttribute.glsl-BzcwcK9j.js";import{o as _e,d as jt,t as Lt,p as Bt}from"./graphicUtils-9SiY0FaR.js";import{s as Nt,t as Ut,o as Vt,u as qt,h as Ht,b as kt,O as Gt,S as Wt,d as Xt,c as be,B as Ce,R as Qt}from"./DefaultBufferWriter-BeC23u2e.js";import{s as Yt}from"./Util-B1cu74ll.js";import{p as Zt,B as Jt,o as Kt,g as eo}from"./renderState-CfpGbofm.js";import{a as to}from"./BindType-BmZEZMMh.js";import{b as oo}from"./GeometryUtil-BqnSbvZN.js";let ao=class extends vt{constructor(e,a){super(e,"vec4",to.Draw,(o,i,s)=>o.setUniform4fv(e,a(i,s)))}};const we=128,De=.5;function Xo(t){return t==="cross"||t==="x"}function Qo(t,e=we,a=e*De,o=0){const i=io(t,e,a,o);return new mt(i,{mipmap:!1,wrap:{s:pe.CLAMP_TO_EDGE,t:pe.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0})}function io(t,e=we,a=e*De,o=0){switch(t){case"circle":default:return so(e,a);case"square":return ro(e,a);case"cross":return lo(e,a,o);case"x":return co(e,a,o);case"kite":return no(e,a);case"triangle":return uo(e,a);case"arrow":return po(e,a)}}function so(t,e){const a=t/2-.5;return k(t,Ie(a,a,e/2))}function ro(t,e){return Fe(t,e,!1)}function no(t,e){return Fe(t,e,!0)}function lo(t,e,a=0){return Re(t,e,!1,a)}function co(t,e,a=0){return Re(t,e,!0,a)}function uo(t,e){return k(t,Me(t/2,e,e/2))}function po(t,e){const a=e,o=e/2,i=t/2,s=.8*a,r=Ie(i,(t-e)/2-s,Math.sqrt(s*s+o*o)),l=Me(i,a,o);return k(t,(c,d)=>Math.max(l(c,d),-r(c,d)))}function Fe(t,e,a){return a&&(e/=Math.SQRT2),k(t,(o,i)=>{let s=o-.5*t+.25,r=.5*t-i-.75;if(a){const l=(s+r)/Math.SQRT2;r=(r-s)/Math.SQRT2,s=l}return Math.max(Math.abs(s),Math.abs(r))-.5*e})}function Re(t,e,a,o=0){e-=o,a&&(e*=Math.SQRT2);const i=.5*e;return k(t,(s,r)=>{let l,c=s-.5*t,d=.5*t-r-1;if(a){const n=(c+d)/Math.SQRT2;d=(d-c)/Math.SQRT2,c=n}return c=Math.abs(c),d=Math.abs(d),l=c>d?c>i?Math.sqrt((c-i)*(c-i)+d*d):d:d>i?Math.sqrt(c*c+(d-i)*(d-i)):c,l-=o/2,l})}function Ie(t,e,a){return(o,i)=>{const s=o-t,r=i-e;return Math.sqrt(s*s+r*r)-a}}function Me(t,e,a){const o=Math.sqrt(e*e+a*a);return(i,s)=>{const r=Math.abs(i-t)-a,l=s-t+e/2+.75,c=(e*r+a*l)/o,d=-l;return Math.max(c,d)}}function k(t,e){const a=new Uint8Array(4*t*t);for(let o=0;o<t;o++)for(let i=0;i<t;i++){const s=i+t*o;let r=e(i,o);r=r/t+.5,gt(r,a,4*s)}return a}function fo(t){return t instanceof Float32Array&&t.length>=16}function ho(t){return Array.isArray(t)&&t.length>=16}function go(t){return fo(t)||ho(t)}class vo{constructor(){this.factor=new Oe,this.factorAlignment=new Oe}}let Oe=class{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}};function mo(t,e){const{vertex:a,fragment:o}=t;t.include(St,e),a.include(_e),e.terrainDepthTest&&t.varyings.add("depth","float"),a.main.add(p`
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.terrainDepthTest?p`depth = projectAux.posView.z;`:""}
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
  `),o.main.add(p`fragColor = vec4(1);
if(terrainDepthTest(depth)) {
fragColor.g = 0.5;
}`)}const le={occludedFadeFactor:.6};function je(t){const e=new bt,a=t.signedDistanceFieldEnabled;if(e.include(jt,t),e.include(Ct,t),t.occlusionPass)return e.include(mo,t),e;const{vertex:o,fragment:i}=e;e.include(Nt),e.include(Ot,t),e.include(xt,t),e.include(Lt),i.include(oo),i.include(Pt),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),o.uniforms.add(new X("viewport",(n,u)=>u.camera.fullViewport),new me("screenOffset",(n,u)=>Y(Le,2*n.screenOffset[0]*u.camera.pixelRatio,2*n.screenOffset[1]*u.camera.pixelRatio)),new me("anchorPosition",n=>H(n)),new X("materialColor",n=>n.color),new te("materialRotation",n=>n.rotation)),Tt(o),a&&(o.uniforms.add(new X("outlineColor",n=>n.outlineColor)),i.uniforms.add(new X("outlineColor",n=>xe(n)?n.outlineColor:He),new te("outlineSize",n=>xe(n)?n.outlineSize:0))),t.horizonCullingEnabled&&o.uniforms.add(new ao("pointDistanceSphere",(n,u)=>{const g=u.camera.eye,h=n.origin;return ke(h[0]-g[0],h[1]-g[1],h[2]-g[2],Ge.radius)})),t.pixelSnappingEnabled&&o.include(_e),t.hasScreenSizePerspective&&(Ut(o),Vt(o)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(f.UV0,"vec2"),e.attributes.add(f.COLOR,"vec4"),e.attributes.add(f.SIZE,"vec2"),e.attributes.add(f.ROTATION,"float"),e.attributes.add(f.FEATUREATTRIBUTE,"vec4"),o.code.add(t.horizonCullingEnabled?p`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}`:p`bool behindHorizon(vec3 posModel) { return false; }`),o.main.add(p`
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      if (behindHorizon(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      vec2 inputSize;
      ${b(t.hasScreenSizePerspective,p`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,p`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${b(t.vvSize,p`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const s=p`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${b(t.hasRotation,p`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,r=t.pixelSnappingEnabled?a?p`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:p`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:p`posProj += quadOffset;`;o.main.add(p`
    ${b(t.occlusionTestEnabled,p`
      if (!visible) {
        vtc = vec2(0.0);
        ${b(t.debugDrawLabelBorder,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
    ${s}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${b(t.output===F.ObjectAndLayerIdColor,p`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${p.float(D)};
    ${b(a,`alphaDiscard = alphaDiscard && outlineColor.a < ${p.float(D)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${r}
      gl_Position = posProj;
    }

    vtc = uv;

    ${b(t.debugDrawLabelBorder,p`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),i.uniforms.add(new Se("tex",n=>n.texture)),t.occludedFragmentFade&&(i.uniforms.add(new Se("depthMap",(n,u)=>u.mainDepth)),i.uniforms.add(new te("fadeFactor",()=>le.occludedFadeFactor)));const l=t.debugDrawLabelBorder?p`(isBorder > 0.0 ? 0.0 : ${p.float(D)})`:p.float(D),c=t.output===F.Highlight,d=p`
    ${b(t.debugDrawLabelBorder,p`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${b(t.sampleSignedDistanceFieldTexelCenter,p`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`,p`vec2 samplePos = vtc;`)}

    ${a?p`
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
          outlineAlphaFactor + fillAlphaFactor < ${l} ||
          fillPixelColor.a + outlinePixelColor.a < ${p.float(D)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${b(!c,p`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${l}) {
          discard;
        }

        ${b(!c,p`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:p`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${l}) {
            discard;
          }
          ${b(!c,p`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${b(t.occludedFragmentFade&&!c,p`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= fadeFactor;
        }
        `)}

    ${b(!c&&t.debugDrawLabelBorder,p`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(t.output){case F.Color:t.oitPass===q.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),i.main.add(p`
        ${d}
        ${b(t.oitPass===q.FrontFace,p`fragColor.rgb /= fragColor.a;`)}
        ${b(t.oitPass===q.ColorAlpha,p`fragAlpha = fragColor.a;`)}`);break;case F.ObjectAndLayerIdColor:i.main.add(p`
        ${d}
        outputObjectAndLayerIdColor();`);break;case F.Highlight:e.include($t,t),i.main.add(p`
        ${d}
        outputHighlight(voccluded == 1.0);`)}return e}function xe(t){return t.outlineColor[3]>0&&t.outlineSize>0}function H(t,e=Le){return t.textureIsSignedDistanceField?So(t.anchorPosition,t.distanceFieldBoundingBox,e):We(e,t.anchorPosition),e}function So(t,e,a){e!=null?Y(a,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):Y(a,0,0)}const Le=ne(),bo=Object.freeze(Object.defineProperty({__proto__:null,build:je,calculateAnchorPosForRendering:H,shaderSettings:le},Symbol.toStringTag,{value:"Module"}));class Co extends At{constructor(e,a,o){super(e,a,new zt(bo,()=>Xe(()=>Promise.resolve().then(()=>Ro),void 0)),o),this.primitiveType=a.occlusionPass?fe.POINTS:fe.TRIANGLES}initializePipeline(e){const{oitPass:a,hasPolygonOffset:o,draped:i,output:s,depthTestEnabled:r}=e,l=a===q.NONE,c=o?Oo:null,d=a===q.ColorAlpha,n=i||!r||d||s===F.Highlight?null:Zt;return Jt({blending:s===F.Color?l?Kt:Et(a):null,depthTest:r&&!i?{func:Qe.LEQUAL}:null,depthWrite:n,drawBuffers:yt(a,s),colorWrite:eo,polygonOffset:c})}}const Oo={factor:0,units:-4};class v extends _t{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.textureCoordinateType=wt.None,this.emissionSource=Dt.None,this.discardInvisibleFragments=!0,this.hasSliceInVertexProgram=!0,this.hasVvInstancing=!1}}m([S()],v.prototype,"screenCenterOffsetUnitsEnabled",void 0),m([S()],v.prototype,"occlusionTestEnabled",void 0),m([S()],v.prototype,"signedDistanceFieldEnabled",void 0),m([S()],v.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),m([S()],v.prototype,"vvSize",void 0),m([S()],v.prototype,"vvColor",void 0),m([S()],v.prototype,"hasVerticalOffset",void 0),m([S()],v.prototype,"hasScreenSizePerspective",void 0),m([S()],v.prototype,"hasRotation",void 0),m([S()],v.prototype,"debugDrawLabelBorder",void 0),m([S()],v.prototype,"hasSlicePlane",void 0),m([S()],v.prototype,"hasPolygonOffset",void 0),m([S()],v.prototype,"depthTestEnabled",void 0),m([S()],v.prototype,"pixelSnappingEnabled",void 0),m([S()],v.prototype,"draped",void 0),m([S()],v.prototype,"terrainDepthTest",void 0),m([S()],v.prototype,"cullAboveTerrain",void 0),m([S()],v.prototype,"occlusionPass",void 0),m([S()],v.prototype,"occludedFragmentFade",void 0),m([S()],v.prototype,"objectAndLayerIdColorInstanced",void 0),m([S()],v.prototype,"horizonCullingEnabled",void 0);class Zo extends Ye{constructor(e,a){super(e,wo),this.produces=new Map([[B.HUD_MATERIAL,o=>oe(o)&&!this.parameters.drawInSecondSlot],[B.LABEL_MATERIAL,o=>oe(o)&&this.parameters.drawInSecondSlot],[B.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[B.DRAPED_MATERIAL,o=>this.parameters.draped&&oe(o)]]),this._visible=!0,this._configuration=new v(a)}getConfiguration(e,a){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=a.slot===B.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.depthTestEnabled=this.parameters.depthEnabled||a.slot===B.OCCLUSION_PIXELS,e===F.Color&&(this._configuration.debugDrawLabelBorder=!!Ze.LABELS_SHOW_BORDER),this._configuration.oitPass=a.oitPass,this._configuration.terrainDepthTest=a.terrainDepthTest,this._configuration.cullAboveTerrain=a.cullAboveTerrain,this._configuration}intersect(e,a,o,i,s,r){const{options:{selectionMode:l,hud:c,excludeLabels:d},point:n,camera:u}=o,{parameters:g}=this;if(!l||!c||d&&g.isLabel||!e.visible||!n)return;const{scaleX:h,scaleY:O}=this._getScreenScale(e,u.pixelRatio);ze(ie,a),e.attributes.has(f.FEATUREATTRIBUTE)&&To(ie);const x=e.attributes.get(f.POSITION),E=e.attributes.get(f.SIZE),_=e.attributes.get(f.NORMAL),R=e.attributes.get(f.ROTATION),y=e.attributes.get(f.CENTEROFFSETANDDISTANCE);Yt(x.size>=3);const T=H(g),w=this.parameters.centerOffsetUnits==="screen";for(let A=0;A<x.data.length/x.size;A++){const M=A*x.size;K(C,x.data[M],x.data[M+1],x.data[M+2]),Q(C,C,a),Q(C,C,u.viewMatrix);const Z=A*y.size;if(K(z,y.data[Z],y.data[Z+1],y.data[Z+2]),!w&&(C[0]+=z[0],C[1]+=z[1],z[2]!==0)){const G=z[2];he(z,C),Je(C,C,j(z,z,G))}const J=A*_.size;if(K(U,_.data[J],_.data[J+1],_.data[J+2]),Pe(U,ie,u,re),this._applyVerticalOffsetTransformationView(C,re,u,ae),u.applyProjection(C,P),P[0]>-1){w&&(z[0]||z[1])&&(P[0]+=z[0]*u.pixelRatio,z[1]!==0&&(P[1]+=Ke(z[1],ae.factorAlignment)*u.pixelRatio),u.unapplyProjection(P,C)),P[0]+=this.parameters.screenOffset[0]*u.pixelRatio,P[1]+=this.parameters.screenOffset[1]*u.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]);const G=A*E.size;$[0]=E.data[G],$[1]=E.data[G+1],et($,ae.factor,$);const Ue=Eo*u.pixelRatio;let ce=0;g.textureIsSignedDistanceField&&(ce=Math.min(g.outlineSize,.5*$[0])*u.pixelRatio/2),$[0]*=h,$[1]*=O;const Ve=A*R.size,qe=g.rotation+R.data[Ve];if(Te(n,P[0],P[1],$,Ue,ce,qe,g,T)){const de=o.ray;if(Q($e,C,tt(Ao,u.viewMatrix)),P[0]=n[0],P[1]=n[1],u.unprojectFromRenderScreen(P,C)){const N=I();L(N,de.direction);const ue=1/W(N);j(N,N,ue),r(ot(de.origin,C)*ue,N,-1,!0,1,$e)}}}}}intersectDraped(e,a,o,i,s,r){const l=e.attributes.get(f.POSITION),c=e.attributes.get(f.SIZE),d=e.attributes.get(f.ROTATION),n=this.parameters,u=H(n),{scaleX:g,scaleY:h}=this._getScreenScale(e,e.screenToWorldRatio),O=yo*e.screenToWorldRatio;for(let x=0;x<l.data.length/l.size;x++){const E=x*l.size,_=l.data[E],R=l.data[E+1],y=x*c.size;$[0]=c.data[y],$[1]=c.data[y+1];let T=0;n.textureIsSignedDistanceField&&(T=Math.min(n.outlineSize,.5*$[0])*e.screenToWorldRatio/2),$[0]*=g,$[1]*=h;const w=x*d.size,A=n.rotation+d.data[w];Te(i,_,R,$,O,T,A,n,u)&&s(r.dist,r.normal,-1,!1)}}createBufferWriter(){return new Fo}_updateScaleInfo(e,a,o){const i=this.parameters;i.screenSizePerspective!=null?ge(o,a,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),i.screenSizePerspectiveAlignment!=null?ge(o,a,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,a,o,i,s,r,l){const c=Pe(a,o,s,re);return this._applyVerticalGroundOffsetView(e,c,s,l),this._applyVerticalOffsetTransformationView(l,c,s,r),this._applyPolygonOffsetView(l,c,i[3],s,l),this._applyCenterOffsetView(l,i,l),l}applyShaderOffsetsNDC(e,a,o,i,s){return this._applyCenterOffsetNDC(e,a,o,i),s!=null&&L(s,i),this._applyPolygonOffsetNDC(i,a,o,i),i}_applyPolygonOffsetView(e,a,o,i,s){const r=i.aboveGround?1:-1;let l=Math.sign(o);l===0&&(l=r);const c=r*l;if(this.parameters.shaderPolygonOffset<=0)return L(s,e);const d=at(Math.abs(a.cosAngle),.01,1),n=1-Math.sqrt(1-d*d)/d/i.viewport[2];return j(s,e,c>0?n:1/n),s}_applyVerticalGroundOffsetView(e,a,o,i){const s=W(e),r=o.aboveGround?1:-1,l=o.computeRenderPixelSizeAtDist(s)*Bt,c=j(C,a.normal,r*l);return ee(i,e,c),i}_applyVerticalOffsetTransformationView(e,a,o,i){var d;const s=this.parameters;if(!((d=s.verticalOffset)!=null&&d.screenLength)){if(s.screenSizePerspective||s.screenSizePerspectiveAlignment){const n=W(e);this._updateScaleInfo(i,n,a.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const r=W(e),l=s.screenSizePerspectiveAlignment??s.screenSizePerspective,c=it(o,r,s.verticalOffset,a.cosAngle,l);return this._updateScaleInfo(i,r,a.cosAngle),j(a.normal,a.normal,c),ee(e,e,a.normal)}_applyCenterOffsetView(e,a,o){const i=this.parameters.centerOffsetUnits!=="screen";return o!==e&&L(o,e),i&&(o[0]+=a[0],o[1]+=a[1],a[2]&&(he(U,o),ee(o,o,j(U,U,a[2])))),o}_applyCenterOffsetNDC(e,a,o,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&L(i,e),s||(i[0]+=a[0]/o.fullWidth*2,i[1]+=a[1]/o.fullHeight*2),i}_applyPolygonOffsetNDC(e,a,o,i){const s=this.parameters.shaderPolygonOffset;if(e!==i&&L(i,e),s){const r=o.aboveGround?1:-1,l=r*Math.sign(a[3]);i[2]-=(l||r)*s}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:a,outlineColor:o}=this.parameters,i=e[3]>=D||a>=D&&o[3]>=D;return this._visible&&i}createGLMaterial(e){return new xo(e)}calculateRelativeScreenBounds(e,a,o=st()){return Po(this.parameters,e,a,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}_getScreenScale(e,a){const o=e.attributes.get(f.FEATUREATTRIBUTE);if(o==null)return{scaleX:a,scaleY:a};const i=rt(o.data,zo);return Ft(se,this.parameters,i),{scaleX:se[0]*a,scaleY:se[1]*a}}}class xo extends qt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(Co,e)}}function Po(t,e,a,o){o[0]=t.anchorPosition[0]*-e[0]+t.screenOffset[0]*a,o[1]=t.anchorPosition[1]*-e[1]+t.screenOffset[1]*a}function Pe(t,e,a,o){return go(e)&&(e=ze($o,e)),nt(o.normal,t,e),Q(o.normal,o.normal,a.viewInverseTransposeMatrix),o.cosAngle=lt(Be,_o),o}function To(t){const e=t[0],a=t[1],o=t[2],i=t[3],s=t[4],r=t[5],l=t[6],c=t[7],d=t[8],n=1/Math.sqrt(e*e+a*a+o*o),u=1/Math.sqrt(i*i+s*s+r*r),g=1/Math.sqrt(l*l+c*c+d*d);return t[0]=e*n,t[1]=a*n,t[2]=o*n,t[3]=i*u,t[4]=s*u,t[5]=r*u,t[6]=l*g,t[7]=c*g,t[8]=d*g,t}function Te(t,e,a,o,i,s,r,l,c){let d=e-i-o[0]*c[0],n=d+o[0]+2*i,u=a-i-o[1]*c[1],g=u+o[1]+2*i;const h=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&h!=null&&(d+=o[0]*h[0],u+=o[1]*h[1],n-=o[0]*(1-h[2]),g-=o[1]*(1-h[3]),d-=s,n+=s,u-=s,g+=s),Y(Ae,e,a),ct(V,t,Ae,dt(r)),V[0]>d&&V[0]<n&&V[1]>u&&V[1]<g}const ae=new vo,C=I(),U=I(),P=Ee(),Be=I(),$e=I(),V=ne(),Ae=ne(),ie=ye(),$o=ye(),Ao=ut(),z=I(),se=I(),zo=Ee(),re={normal:Be,cosAngle:0},Eo=1,yo=2,$=[0,0],_o=pt(0,0,1);class wo extends Ht{constructor(){super(...arguments),this.renderOccluded=ft.Occlude,this.isDecoration=!1,this.color=ve(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=ht(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ve(1,1,1,1),this.outlineSize=0,this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1,this.isLabel=!1}}const Ne=Mt().vec3f(f.POSITION).vec3f(f.NORMAL).vec2f(f.UV0).vec4u8(f.COLOR).vec2f(f.SIZE).f32(f.ROTATION).vec4f(f.CENTEROFFSETANDDISTANCE).vec4f(f.FEATUREATTRIBUTE),Do=Ne.clone().vec4u8(f.OBJECTANDLAYERIDCOLOR);class Fo{constructor(){this.vertexBufferLayout=Rt()?Do:Ne}elementCount(e){return 6*e.get(f.POSITION).indices.length}write(e,a,o,i,s,r){var R,y;kt(o.get(f.POSITION),e,s.position,r,6),Gt(o.get(f.NORMAL),a,s.normal,r,6);const l=(R=o.get(f.UV0))==null?void 0:R.data;let c=0,d=0,n=1,u=1;l&&l.length>=4&&(c=l[0],d=l[1],n=l[2],u=l[3]),n=Math.min(1.99999,n+1),u=Math.min(1.99999,u+1);let g=o.get(f.POSITION).indices.length,h=r;const O=s.uv0;for(let T=0;T<g;++T)O.set(h,0,c),O.set(h,1,d),h++,O.set(h,0,n),O.set(h,1,d),h++,O.set(h,0,n),O.set(h,1,u),h++,O.set(h,0,n),O.set(h,1,u),h++,O.set(h,0,c),O.set(h,1,u),h++,O.set(h,0,c),O.set(h,1,d),h++;Wt(o.get(f.COLOR),4,s.color,r,6);const{data:x,indices:E}=o.get(f.SIZE);g=E.length;const _=s.size;h=r;for(let T=0;T<g;++T){const w=x[2*E[T]],A=x[2*E[T]+1];for(let M=0;M<6;++M)_.set(h,0,w),_.set(h,1,A),h++}if(Xt(o.get(f.ROTATION),s.rotation,r,6),o.get(f.CENTEROFFSETANDDISTANCE)?be(o.get(f.CENTEROFFSETANDDISTANCE),s.centerOffsetAndDistance,r,6):Ce(s.centerOffsetAndDistance,r,6*g),o.get(f.FEATUREATTRIBUTE)?be(o.get(f.FEATUREATTRIBUTE),s.featureAttribute,r,6):Ce(s.featureAttribute,r,6*g),i!=null){const T=(y=o.get(f.POSITION))==null?void 0:y.indices;if(T){const w=T.length,A=s.getField(f.OBJECTANDLAYERIDCOLOR,It);Qt(i,A,w,r,6)}}}}const Ro=Object.freeze(Object.defineProperty({__proto__:null,build:je,calculateAnchorPosForRendering:H,shaderSettings:le},Symbol.toStringTag,{value:"Module"}));export{Zo as a,Xo as b,we as e,De as o,Qo as u};
