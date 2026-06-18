import{a as ge,b as ye}from"./chunk-HJ3FYDJY.js";import{a as L}from"./chunk-YS6KMJ2K.js";import{a as ve}from"./chunk-KFFOWERO.js";import{e as se,f as de,g as fe,h as pe,i as ue,j as me,k as xe,l as Ve}from"./chunk-74FY6J3U.js";import{f as he}from"./chunk-MGQXAAYL.js";import{e as le,f as h}from"./chunk-ECJS2ZJW.js";import{b as ce}from"./chunk-C2767426.js";import{a as R}from"./chunk-JXKPIB3A.js";import{a as Z}from"./chunk-7JJBCEUY.js";import{b as q,j as Y,k as w,l as O,m as z}from"./chunk-OIPQIELE.js";import{b as v}from"./chunk-QWVJUQHP.js";import{b as B,c as te,d as oe,f as re,j as ie,k as ne}from"./chunk-FZ33X2GJ.js";import{a as ee}from"./chunk-ZTED3WGD.js";import{i as X}from"./chunk-CNIHBBZ3.js";import{a as ae}from"./chunk-CC72ZDCP.js";import{a as m}from"./chunk-JNLIGAVK.js";import{a as x}from"./chunk-6ZGVESB5.js";import{a as K}from"./chunk-GUO4QNNT.js";import{a as Q}from"./chunk-EZYCO4TJ.js";import{a,b as c,c as C}from"./chunk-YSASWMAG.js";import{a as W}from"./chunk-7LPKXS33.js";import{c as H}from"./chunk-IOR6XGZG.js";import{a as A}from"./chunk-VENIDAJS.js";import{b as V,c as f,d as G}from"./chunk-JHE3P533.js";import{d as M}from"./chunk-RFOM6OFN.js";var F=0,g=15,P=4,y=7,b=P+3,N=7,E=b+3,k=1;function ke({sourceIndex:r,subdivision:t,type:o,capSide:e}){return A(r>=0&&r<=g,"invalid sourceIndex"),A(t>=0&&t<=y,"invalid subdivision"),(r&g)<<F|(t&y)<<P|(o&N)<<b|(e&k)<<E}function Te(r){return{sourceIndex:r>>F&g,subdivision:r>>P&y,type:r>>b&N,capSide:r>>E&k}}function Pe(r){let{attributes:t,vertex:o}=r;t.add("pathVertexInfo","uint"),o.constants.add("pathVertexInfoSourceIndexShift","uint",F),o.constants.add("pathVertexInfoSourceIndexMask","uint",g),o.constants.add("pathVertexInfoSubdivisionShift","uint",P),o.constants.add("pathVertexInfoSubdivisionMask","uint",y),o.constants.add("pathVertexInfoTypeShift","uint",b),o.constants.add("pathVertexInfoTypeMask","uint",N),o.constants.add("pathVertexInfoCapSideShift","uint",E),o.constants.add("pathVertexInfoCapSideMask","uint",k),o.constants.add("pathVertexCapSideEnd","uint",1),o.code.add(a`struct PathVertexInfo {
uint sourceIndex;
float subdivision;
uint type;
bool isEnd;
};
PathVertexInfo decodePathVertexInfo() {
uint sourceIndex = (pathVertexInfo >> pathVertexInfoSourceIndexShift) & pathVertexInfoSourceIndexMask;
uint subdivision = (pathVertexInfo >> pathVertexInfoSubdivisionShift) & pathVertexInfoSubdivisionMask;
uint type = (pathVertexInfo >> pathVertexInfoTypeShift) & pathVertexInfoTypeMask;
uint capSide = (pathVertexInfo >> pathVertexInfoCapSideShift) & pathVertexInfoCapSideMask;
return PathVertexInfo(
sourceIndex,
float(subdivision),
type,
capSide == pathVertexCapSideEnd
);
}`)}var I=class extends C{constructor(t,o,e,d){super(t,"vec2",1,(s,l,n)=>s.setUniform2fv(t,e(l,n),d),o)}};var T=class extends C{constructor(t,o,e){super(t,"int",1,(d,s,l)=>d.setUniform1iv(t,e(s,l)),o)}};var be={0:{indexCount:20,poleCount:1,vertexCount:10},1:{indexCount:8,poleCount:4,vertexCount:8}},U=class{constructor(t){this.type=t,this.vertices=new Array,this.normals=new Array,this.indices=new Array,this.poles=new Array,this.poleIndices=new Array}addVertex(t,o){return this.vertices.push(V(t)),this.normals.push(V(o)),this.vertices.length-1}addPole(t,o=null){return this.poles.push({position:V(t),normal:o?V(o):null}),this.poles.length-1}addSegment(t,o=null){this.indices.push(t.v0),this.indices.push(t.v1),o&&(this.poleIndices.push(o.v0),this.poleIndices.push(o.v1))}get numSegments(){return this.indices.length/2}translate(t,o){for(let e of this.vertices)e[0]+=t,e[1]+=o;for(let e of this.poles)e.position[0]+=t,e.position[1]+=o}get usedMemory(){return this.vertices.length*M(this.vertices[0])*2+M(this.indices)}},Ie={top:[0,-.5],bottom:[0,.5]};function D(r){let o=10,e=new U(0),d={v0:0,v1:0};e.addPole(f(0,0));for(let l=0;l<o;++l){let n=2*l*Math.PI/o,p=Math.cos(n),i=Math.sin(n),u=f(p*.5,i*.5),S=f(p,i);e.addVertex(u,S)}for(let l=0;l<o-1;++l){let n={v0:l,v1:l+1};e.addSegment(n,d)}let s={v0:o-1,v1:0};if(e.addSegment(s,d),r!=="center"){let l=Ie[r];e.translate(l[0],l[1])}return e}var Se={center:D("center"),top:D("top"),bottom:D("bottom")},He={center:$("center"),top:$("top"),bottom:$("bottom")};function $(r){let e=new U(1),d=f(.5*-1,.5*-1),s=f(.5*1,.5*-1),l=f(.5*1,.5*1),n=f(.5*-1,.5*1),p=f(0,-1),i=f(1,0),u=f(0,1),S=f(-1,0);if(e.addPole(f(0,.5*1),u),e.addPole(f(0,.5*1)),e.addPole(f(0,.5*-1)),e.addPole(f(0,.5*-1),p),e.addVertex(d,p),e.addVertex(s,p),e.addSegment({v0:0,v1:1},{v0:3,v1:3}),e.addVertex(s,i),e.addVertex(l,i),e.addSegment({v0:2,v1:3},{v0:2,v1:1}),e.addVertex(l,u),e.addVertex(n,u),e.addSegment({v0:4,v1:5},{v0:0,v1:0}),e.addVertex(n,S),e.addVertex(d,S),e.addSegment({v0:6,v1:7},{v0:1,v1:2}),r!=="center"){let J=Ie[r];e.translate(J[0],J[1])}return e}function Ce(r,t){let{vertex:o}=r;r.include(Pe);let e=t.upVectorAlignment===1;o.uniforms.add(new x("angleCutoff",n=>n.cutoffAngle)),o.code.add(a`float reciprocalClamped(float value) {
float signValue = value < 0.0 ? -1.0 : 1.0;
return signValue / max(abs(value), 1e-6);
}`),e?o.code.add(a`vec2 applyMiterStretch(vec2 vertex, float rotationAngle, vec2 rotationRight) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
mat2 miterStretch = mat2(
1. + (k - 1.) * rotationRight.x * rotationRight.x,
(k - 1.) * rotationRight.x * rotationRight.y,
(k - 1.) * rotationRight.x * rotationRight.y,
1. + (k - 1.) * rotationRight.y * rotationRight.y
);
return miterStretch * vertex;
}`):o.code.add(a`vec2 applyMiterStretch(vec2 vertex, float rotationAngle) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
return vec2(k, 1.) * vertex;
}`);let{vertexCount:d,indexCount:s,poleCount:l}=be[t.pathProfileType];switch(o.uniforms.add(new I("pathProfileVertices",d,n=>n.profile.vertices.flat()),new I("pathProfileNormals",d,n=>n.profile.normals.flat())),o.code.add(a`mat3 mat3FromRotation(float angle, vec3 axis) {
float x = axis.x;
float y = axis.y;
float z = axis.z;
float s = sin(angle);
float c = cos(angle);
float t = 1.0 - c;
return mat3(
x * x * t + c,      y * x * t + z * s,  z * x * t - y * s,
x * y * t - z * s,  y * y * t + c,      z * y * t + x * s,
x * z * t + y * s,  y * z * t - x * s,  z * z * t + c
);
}`),o.code.add(a`struct ExtrusionFrame {
vec3 up;
vec3 right;
};
struct ExtrudedVertex {
ExtrusionFrame frame;
vec2 profileVertex;
vec2 profileNormal;
vec2 rotationRight;
float maxDistance;
float capPositionOffset;
float capNormalOffset;
bool isCap;
};`),e?o.code.add(a`vec2 getPathRotationRight(ExtrusionFrame frame) {
vec3 rotationUp = getFrameRotationUp();
float a = dot(rotationUp, frame.up);
float b = dot(rotationUp, frame.right);
vec3 vertex = normalize(frame.up * -b + frame.right * a);
return vec2(dot(vertex, frame.right), dot(vertex, frame.up));
}`):o.code.add(a`vec2 getPathRotationRight() {
return vec2(1., 0.);
}`),o.constants.add("pathVertexTypeJoin","uint",0),o.uniforms.add(new K("numJoinSubdivisions",n=>n.numJoinSubdivisions)),o.code.add(a`
      ExtrudedVertex evaluateJoinVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
        vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
        vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];
        float profileRotation = getProfileRotation();
        vec2 rotationRight = getPathRotationRight(${c(e,a`frame`)});
        bool isBevel = abs(profileRotation) >= angleCutoff;

        // determine if the current profile vertex is on the inside or outside of the rotationAxis
        // this determines if the geometry folds inwards or is bend outwards
        float b = dot(profileVertex, rotationRight);
        bool isBend = b * profileRotation >= 0.;

        bool isBevelBend = isBevel && isBend;

        if (isBevelBend) {
          float k = vertexInfo.subdivision;
          // rotate half rotation angle backwards to where the rotation starts
          // and then rotate a couple of times depending on the current subdivision segment
          float bendRotation = -profileRotation * 0.5 + (k * profileRotation) / float(numJoinSubdivisions);
          if (bendRotation != 0.) {
            vec3 rotationUp = getFrameRotationUp();
            mat3 transform  = mat3FromRotation(bendRotation, rotationUp);
            ${c(e,a`frame.up = normalize(transform * frame.up);`)}
            frame.right = normalize(transform * frame.right);
          }
        } else {
          profileVertex = applyMiterStretch(
            profileVertex,
            profileRotation${c(e,a`,
              rotationRight`)}
          );
        }

        rotationRight = isBend ? vec2(0.) : rotationRight;
        float maxDistance = isBend
        ? 0.
        : getMaxStretchDistance();

        return ExtrudedVertex(
          frame,
          profileVertex,
          profileNormal,
          rotationRight,
          maxDistance,
          0.,
          0.,
          false
        );
      }
    `),o.constants.add("pathVertexTypeCapConnectingProfile","uint",1),o.code.add(a`
        ExtrudedVertex evaluateConnectingVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
          vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
          vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];

          float profilePlaneVertexOffset = ${c(t.pathCapType===2,a`vertexInfo.isEnd ? 0.5 : -0.5`,a`0.`)};

          return ExtrudedVertex(
            frame,
            profileVertex,
            profileNormal,
            vec2(0.),
            0.,
            profilePlaneVertexOffset,
            0.,
            true
          );
        }
    `),t.pathCapType){case 1:case 2:o.constants.add("pathVertexTypeFlatCapProfile","uint",2),o.code.add(a`
          ExtrudedVertex evaluateFlatCapVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
            vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
            bool isEnd = vertexInfo.isEnd;
            float normalOffset = isEnd ? 1. : -1.;
            float profilePlaneOffset = ${c(t.pathCapType===2,a`isEnd ? 0.5 : -0.5`,a`0.0`)};
            vec2 normal = vec2(0.);

            return ExtrudedVertex(
              frame,
              profileVertex,
              normal,
              vec2(0.),
              0.,
              profilePlaneOffset,
              normalOffset,
              true
            );
          }
        `);break;case 3:o.uniforms.add(new O("pathProfilePoles",l,n=>n.profile.poles.flatMap(({position:p,normal:i})=>[...p,...i??Fe]),{supportsNaN:!0}),new T("pathProfilePoleIndices",s,n=>n.profile.poleIndices)),o.include(R),o.constants.add("pathVertexTypeRoundCapPole","uint",3),o.constants.add("pathVertexTypeRoundCapInnerProfile","uint",4),o.constants.add("pathNumRoundCapExtrusionSubdivisions","float",3),o.code.add(a`ExtrudedVertex evaluateRoundCapPoleVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
vec4 pole = pathProfilePoles[vertexInfo.sourceIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 poleNormal = hasPoleNormal ? pole.zw : vec2(0.);
float normalOffset = hasPoleNormal ? 0. : capSign;
return ExtrudedVertex(
frame,
polePosition,
poleNormal,
vec2(0.),
0.,
offsetScale,
normalOffset,
true
);
}
ExtrudedVertex evaluateRoundCapInnerVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
float subdivision = vertexInfo.subdivision;
float t = 1. - (subdivision + 1.) / pathNumRoundCapExtrusionSubdivisions;
float theta = t * HALF_PI;
float t1 = sin(theta);
float t2 = cos(theta);
int poleIndex = pathProfilePoleIndices[vertexInfo.sourceIndex];
vec4 pole = pathProfilePoles[poleIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
vec2 poleOffsetScaled = (profileVertex - polePosition) * t1;
vec2 poleVertex = poleOffsetScaled + polePosition;
vec2 profileNormal = hasPoleNormal
? pole.zw
: normalize(poleOffsetScaled) * t1;
float normalOffset = hasPoleNormal ? 0. : capSign * t2;
return ExtrudedVertex(
frame,
poleVertex,
profileNormal,
vec2(0.),
0.,
offsetScale * t2,
normalOffset,
true
);
}`)}o.code.add(a`
      ExtrudedVertex evaluateVertex() {
        PathVertexInfo vertexInfo = decodePathVertexInfo();
        ExtrusionFrame frame = ExtrusionFrame(
          getFrameUp(),
          getFrameRight()
        );

        switch (vertexInfo.type) {
          case pathVertexTypeJoin:
            return evaluateJoinVertex(vertexInfo, frame);

          case pathVertexTypeCapConnectingProfile:
            return evaluateConnectingVertex(vertexInfo, frame);

          ${c(t.pathCapType===1||t.pathCapType===2,a`
          case pathVertexTypeFlatCapProfile:
            return evaluateFlatCapVertex(vertexInfo, frame);
          `)}

          ${c(t.pathCapType===3,a`
          case pathVertexTypeRoundCapPole:
            return evaluateRoundCapPoleVertex(vertexInfo, frame);
          case pathVertexTypeRoundCapInnerProfile:
            return evaluateRoundCapInnerVertex(vertexInfo, frame);
          `)}

          default:
            return ExtrudedVertex(
              frame,
              vec2(0.),
              vec2(0.),
              vec2(0.),
              0.,
              0.,
              0.,
              false
            );
        }
      }
    `)}var Fe=G(NaN,NaN);function dt(){let r=H().u32("pathVertexInfo",{integer:!0}).u32("textureElementIndex",{integer:!0});return q()&&r.vec4u8("olidColor"),r.freeze()}function we(r){let t=[{type:"vec3f32",name:"position"},{type:"vec2snorm16",name:"profileRight"},{type:"vec2snorm16",name:"profileUp"}];return r.upVectorAlignment===1&&t.push({type:"vec2snorm16",name:"pathRotationUp"}),r.hasVVSize&&t.push({type:"f32",name:"sizeFeatureAttribute"}),r.hasVVColor&&t.push({type:"f32",name:"colorFeatureAttribute"}),r.hasVVOpacity&&t.push({type:"f32",name:"opacityFeatureAttribute"}),t.push({type:"f16",name:"pathMaxStretchDistance"},{type:"snorm16",name:"profileRotation"}),new W(t)}var j=8;function ze(r,t){let{attributes:o,vertex:e}=r,d=new ye("componentTextureBuffer",i=>i.textureBuffer),s=new ge({layout:we(t),itemIndexAttribute:"textureElementIndex",bufferUniform:d});r.include(s.TextureBackedBufferModule,t),o.add("textureElementIndex","uint"),e.uniforms.add(new ae("size",i=>i.size));let{hasVVSize:l,hasVVColor:n,hasVVOpacity:p}=t;l?(e.uniforms.add(new m("vvSizeMinSize",i=>i.vvSize.minSize),new m("vvSizeMaxSize",i=>i.vvSize.maxSize),new m("vvSizeOffset",i=>i.vvSize.offset),new m("vvSizeFactor",i=>i.vvSize.factor),new m("vvSizeFallback",i=>i.vvSize.fallback)),e.code.add(a`
    vec2 getSize() {
      float value = ${s.getTextureAttribute("sizeFeatureAttribute")};
      if (isnan(value)) {
        return vvSizeFallback.xz;
      }
      return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):e.code.add(a`vec2 getSize(){
return size;
}`),p?(e.constants.add("vvOpacityNumber","int",j),e.uniforms.add(new z("vvOpacityValues",j,i=>i.vvOpacity.values),new z("vvOpacityOpacities",j,i=>i.vvOpacity.opacityValues),new x("vvOpacityFallback",i=>i.vvOpacity.fallback,{supportsNaN:!0})),e.code.add(a`
    vec4 applyOpacity(vec4 color) {
      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      float value = ${s.getTextureAttribute("opacityFeatureAttribute")};

      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${c(n,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      if (value <= vvOpacityValues[0]) {
        return vec4(color.rgb, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4(color.rgb, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.rgb, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):e.code.add(a`vec4 applyOpacity(vec4 color){
return color;
}`),n?(e.constants.add("vvColorNumber","int",w),e.uniforms.add(new z("vvColorValues",w,i=>i.vvColor.values),new O("vvColorColors",w,i=>i.vvColor.colors),new ee("vvColorFallback",i=>i.vvColor.fallback)),e.code.add(a`
    vec4 getColor() {
      float value = ${s.getTextureAttribute("colorFeatureAttribute")};
      if (isnan(value)) {
        return applyOpacity(vvColorFallback);
      }

      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):e.code.add(a`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),e.include(R),e.code.add(a`
    vec3 decompressAxis(vec2 axis) {
      float z = 1.0 - abs(axis.x) - abs(axis.y);
      return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
    }

    float getProfileRotation() {
      return PI * ${s.getTextureAttribute("profileRotation")};
    }

    float getMaxStretchDistance() {
      return ${s.getTextureAttribute("pathMaxStretchDistance")};
    }

    vec3 getFrameUp() {
      return decompressAxis(${s.getTextureAttribute("profileUp")});
    }

    vec3 getFrameRight() {
      return decompressAxis(${s.getTextureAttribute("profileRight")});
    }
  `),e.code.add(a`
    vec3 getFrameRotationUp() {
      return ${t.upVectorAlignment===1?a`decompressAxis(${s.getTextureAttribute("pathRotationUp")})`:a`getFrameUp()`};
    }
  `),r.include(Ce,t),e.code.add(a`
  vec3 calculateVPos(ExtrudedVertex extrudedVertex) {
    vec2 size = getSize();
    vec3 origin = ${s.getTextureAttribute("position")};
    vec3 right = extrudedVertex.frame.right;
    vec3 up = extrudedVertex.frame.up;
    vec2 profileVertex = extrudedVertex.profileVertex * size;
    `),e.code.add(a`if(extrudedVertex.isCap) {
float positionOffsetAlongProfilePlaneNormal = extrudedVertex.capPositionOffset * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = extrudedVertex.rotationRight;
float maxDistance = extrudedVertex.maxDistance;`),e.code.add(a`rotationRight *= size;
rotationRight = length(rotationRight) > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),e.code.add(a`vec3 localNormal(ExtrudedVertex extrudedVertex) {
vec3 right = extrudedVertex.frame.right;
vec3 up = extrudedVertex.frame.up;
vec2 profileNormal = extrudedVertex.profileNormal;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(extrudedVertex.isCap) {
vec3 forward = cross(up, right);
normal += forward * extrudedVertex.capNormalOffset;
}
return normal;
}`)}var Oe=class extends Y{constructor(){super(...arguments),this.numJoinSubdivisions=1,this.size=f(1,1),this.cutoffAngle=0,this.profile=Se.center}};function Ne(r){let t=new Q,{vertex:o,fragment:e,varyings:d}=t;te(o,r),d.add("vpos","vec3",{invariant:!0}),t.include(ze,r);let{output:s,spherical:l,pbrMode:n,snowCover:p,offsetBackfaces:i}=r;switch((X(s)||s===11)&&(t.include(h),t.include(he,r),t.include(Z,r),i&&(B(o,r),t.include(se)),d.add("vnormal","vec3"),d.add("vcolor","vec4"),o.main.add(a`
      ExtrudedVertex extrudedVertex = evaluateVertex();
      vpos = calculateVPos(extrudedVertex);
      vnormal = normalize(localNormal(extrudedVertex));
      gl_Position = transformPosition(proj, view, vpos);
      ${c(i,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vnormal, cameraPosition);")}

      forwardObjectAndLayerIdColor();
      vcolor = getColor();
      forwardLinearDepthToReadShadowMap();`)),s){case 0:case 1:case 2:t.include(xe,r),e.include(me,r),e.include(fe,r),t.include(ve,r),e.include(v,r),t.include(ne,r),B(e,r),pe(e),ue(e),e.uniforms.add(o.uniforms.get("localOrigin"),new m("ambient",u=>u.ambient),new m("diffuse",u=>u.diffuse),new x("opacity",u=>u.opacity)),e.include(re),e.include(Ve,r),ce(e),e.main.add(a`
        discardBySlice(vpos);

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${l?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${c(p,a`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = readShadow(additionalAmbientScale, vpos);

        ${c(n===2,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
           ${c(p,"mrr = applySnowToMRR(mrr, snow);")}`)}

        vec3 shadedColor = ${n===2?"evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);":"evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);"}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${c(p,", snow")});`);break;case 3:t.include(h),o.main.add(a`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(v,r),e.main.add(a`discardBySlice(vpos);`);break;case 5:case 6:case 7:case 8:t.include(h),le(t),d.add("depth","float"),o.main.add(a`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),t.fragment.include(v,r),t.include(de,r),e.main.add(a`discardBySlice(vpos);
outputDepth(depth);`);break;case 11:t.fragment.include(v,r),e.main.add(a`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case 4:t.include(h),t.include(L,r),oe(o),d.add("vnormal","vec3"),o.main.add(a`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
vnormal = normalize((viewNormal * vec4(localNormal(extrudedVertex), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(v,r),e.main.add(a`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 10:t.include(h),t.include(L,r),d.add("vnormal","vec3"),o.main.add(a`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(v,r),t.include(ie,r),e.main.add(a`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return t}var Xt=Object.freeze(Object.defineProperty({__proto__:null,build:Ne},Symbol.toStringTag,{value:"Module"}));export{ke as a,Te as b,Se as c,He as d,dt as e,we as f,Oe as g,Ne as h,Xt as i};
