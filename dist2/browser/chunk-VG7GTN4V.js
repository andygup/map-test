import{b as he,c as ve}from"./chunk-M4O4ZIXN.js";import{a as xe,c as ge}from"./chunk-6BOQOYQM.js";import{a as me}from"./chunk-YO4KVV4T.js";import{d as x,e as K}from"./chunk-WXIPYGCT.js";import{b as Q,d as X}from"./chunk-A5H7V7SN.js";import{i as Z,j as J}from"./chunk-OFXKXO3Y.js";import{a as Y}from"./chunk-GUO4QNNT.js";import{a as ce}from"./chunk-WZITM4Q5.js";import{a as te}from"./chunk-7JJBCEUY.js";import{e as re}from"./chunk-ERWV7HUE.js";import{a as ae,b as ie,c as le}from"./chunk-OPYNJ3CC.js";import{c as oe}from"./chunk-6UBDFNHA.js";import{e as se,f as ne,h as fe,j as ue,k as pe}from"./chunk-P4VQAMX6.js";import{a as w}from"./chunk-ZTED3WGD.js";import{i as B}from"./chunk-ELAM4BPJ.js";import{a as y}from"./chunk-CC72ZDCP.js";import{a as T}from"./chunk-LI2AJFVU.js";import{a as de}from"./chunk-RG5I6SD7.js";import{a as P}from"./chunk-6ZGVESB5.js";import{a as j}from"./chunk-XYMAXA4B.js";import{a as ee}from"./chunk-LUGQYNAC.js";import{a as r,b as i}from"./chunk-YSASWMAG.js";import{p as G}from"./chunk-67YVG46W.js";import{g as W}from"./chunk-YMQ4BGWF.js";import{a as N}from"./chunk-JHE3P533.js";import{a as M,b as _}from"./chunk-RX52N74R.js";import{a as L}from"./chunk-VRWNHVJO.js";import{O as z,P as b}from"./chunk-QRZ5HHIG.js";import{a as d}from"./chunk-WNSZCIFR.js";import{a as k,b as I}from"./chunk-Q7L6LLAK.js";var O=class extends X{constructor(){super(...arguments),this.shader=new Q(ge,()=>import("./chunk-FGDQCRIK.js")),this.ignoreUnused=!0}initializePipeline(){return J({colorWrite:Z})}};O=d([b("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorTechnique")],O);var g=class extends K{constructor(t){super(I(k({},t),{view:t.focusAreasView.view})),this.consumes={required:[x.FOCUSAREA_COLOR,x.FOCUSAREA]},this.produces=x.FOCUSAREA_COLOR,this._fadeDirection=0,this._passParameters=new xe}fadeOut(t){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(L(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),t())})),this.requestRender(2)}render(t){let e=t.find(({name:v})=>v===this.produces),l=this.techniques.getCompiled(O);if(!l)return this.requestRender(1),e;let C=this.focusAreasView.style,c=this.bindParameters,m=c.camera,D=m.fullViewport[2],S=m.fullViewport[3];this._startTime??=this.view.stage?.renderer.renderContext.time;let n=this.view.qualitySettings.fadeDuration,f=n>0?Math.min(n,this.view.stage?.renderer.renderContext.time-this._startTime)/n:1,A=t.find(({name:v})=>v===x.FOCUSAREA),h=this.fboCache.acquire(D,S,this.produces),u=this.renderingContext;return u.bindFramebuffer(h.fbo),this._passParameters.color=e.getTexture(),this._passParameters.focusArea=A.getTexture(),this._passParameters.effect=R[C],this._passParameters.fadeFactor.value=this._fadeDirection===0?f:1-f,u.bindTechnique(l,c,this._passParameters),u.screen.draw(),h.attachDepth(e.getAttachment(G)),f<1&&this.requestRender(2),h}};d([z()],g.prototype,"consumes",void 0),d([z()],g.prototype,"produces",void 0),d([z({constructOnly:!0})],g.prototype,"focusAreasView",void 0),g=d([b("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorNode")],g);var R={bright:0,dark:1};var be=t=>t?R[t]:0;function Pe(t){let e=new ee;e.include(he,t),e.vertex.include(oe,t);let{output:l,hasOcclusionTexture:C,signedDistanceFieldEnabled:c,pixelSnappingEnabled:m,hasEmission:D,hasScreenSizePerspective:S,debugDrawLabelBorder:n,hasVVSize:f,hasVVColor:A,hasRotation:h,occludedFragmentFade:u,sampleSignedDistanceFieldTexelCenter:v,hasVertexColor:q,hasVertexSize:V,hasVertexRotation:$,hasVertexUVi:U}=t;e.include(ae),e.include(re,t),e.include(te,t),e.include(pe,t);let{vertex:s,fragment:a}=e;a.include(ne),a.code.add(r`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${r.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");let p=l===10;s.uniforms.add(new de("viewport",o=>o.camera.fullViewport),new y("screenOffset",(o,H)=>_(F,2*o.screenOffset[0]*H.camera.pixelRatio,2*o.screenOffset[1]*H.camera.pixelRatio)),new y("anchorPosition",o=>Se(o)),new w("materialColor",({color:o})=>o),new P("materialRotation",o=>o.rotation),new y("materialSize",o=>o.size),new j("tex",o=>o.texture)),se(s),c&&(s.uniforms.add(new w("outlineColor",o=>o.outlineColor)),a.uniforms.add(new w("outlineColor",o=>Ce(o)?o.outlineColor:W),new P("outlineSize",o=>Ce(o)?o.outlineSize:0))),m&&s.include(ve),S&&(ie(s),le(s)),n&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),U&&e.attributes.add("uvi","vec4"),q&&e.attributes.add("color","vec4"),V&&e.attributes.add("size","vec2"),$&&e.attributes.add("rotation","float"),(f||A)&&e.attributes.add("featureAttribute","vec4"),s.main.add(r`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${ce};
      return;
    }

    vec2 vertexSize = materialSize${i(V," * size")};
    vec2 inputSize;
    ${i(S,r`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,r`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${i(f,r`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let Ae=r`
  ${i(U,r`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,r`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${i(h,r`
        float angle = radians(materialRotation${i($," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,ze=m?c?r`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:r`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:r`posProj += quadOffset;`;s.include(fe),s.main.add(r`
    ${Ae}
    ${A?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":q?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${i(l===11,r`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${i(c,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${ze}
      gl_Position = posProj;
    }

    vtc = uv;

    ${i(n,r`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let E=B(l)&&t.hasFocusAreaStyle&&!t.draped;switch(a.uniforms.add(new j("tex",o=>o.texture)),E&&a.uniforms.add(new Y("focusAreaStyle",o=>be(o.focusAreaStyle))),u&&!p&&(a.include(me),a.uniforms.add(new T("depthMap",o=>o.mainDepth),new P("occludedOpacity",o=>o.occludedFragmentOpacity?.value??1))),C&&a.uniforms.add(new T("texOcclusion",o=>o.hudOcclusion?.attachment)),n?a.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):a.main.add("float textureAlphaCutoff = alphaCutoff;"),a.main.add("vec2 samplePos = vtc;"),v&&a.main.add(r`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),c?a.main.add(r`
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

        ${i(!p,r`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${i(!p,r`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):a.main.add(r`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${i(!p,r`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),u&&!p&&a.main.add(r`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${r.float(1-ye)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),C&&a.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!p&&n&&a.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),l===2&&a.main.add(r`if (fragColor.a < alphaCutoff) {
discard;
}`),E&&a.main.add(r`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),B(l)&&D&&a.main.add("fragEmission = vec4(0.0);"),l){case 1:a.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:a.main.add("fragColor.rgb /= fragColor.a;");break;case 11:a.main.add("outputObjectAndLayerIdColor();");break;case 10:e.include(ue,t),a.main.add("outputHighlight(false);")}return e}function Ce(t){return t.outlineColor[3]>0&&t.outlineSize>0}function Se(t){return t.textureIsSignedDistanceField?we(t.anchorPosition,t.distanceFieldBoundingBox,F):M(F,t.anchorPosition),F}var F=N();function we(t,e,l){_(l,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1])}var ye=.08,So=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:Se,build:Pe},Symbol.toStringTag,{value:"Module"}));export{Pe as a,Se as b,So as c};
