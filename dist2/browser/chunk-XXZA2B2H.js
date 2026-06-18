import{a as _e,b as Be,d as Ye}from"./chunk-2OX6W6TY.js";import{b as je}from"./chunk-2SV6PLDY.js";import{b as we,c as Fe}from"./chunk-EOJ6EGI7.js";import{a as Le,c as ye}from"./chunk-Z7EB7NY5.js";import{a as N}from"./chunk-2UTJD3RB.js";import{d as Re,g as Ce,h as Pe,j as qe}from"./chunk-N5VHQEGK.js";import{a as ne,b as se,c as Se}from"./chunk-ETR3CAI3.js";import{a as Te,c as De}from"./chunk-7KUKYVSE.js";import{b as Me}from"./chunk-SH77Z3RE.js";import{d as _,e as Z}from"./chunk-WXIPYGCT.js";import{b,d as I}from"./chunk-A5H7V7SN.js";import{i as f,j as g}from"./chunk-OFXKXO3Y.js";import{a as Ge}from"./chunk-JXKPIB3A.js";import{n as ve,p as Ee}from"./chunk-ELAM4BPJ.js";import{a as Ie,b as oe}from"./chunk-IHC7LZBT.js";import{a as H}from"./chunk-LI2AJFVU.js";import{a as P}from"./chunk-SYFPWUTB.js";import{a as ze}from"./chunk-GNMUXIWL.js";import{a as re}from"./chunk-I6AGLY42.js";import{a as xe}from"./chunk-JNLIGAVK.js";import{a as ie}from"./chunk-XYMAXA4B.js";import{a as t,b as v}from"./chunk-YSASWMAG.js";import{a as A}from"./chunk-NMKLVORY.js";import{d as ge,j as be}from"./chunk-WMERNBBO.js";import{m as S,p as U}from"./chunk-67YVG46W.js";import{a as fe}from"./chunk-JHE3P533.js";import{C as pe}from"./chunk-6DXT34WA.js";import{d as W,h as de}from"./chunk-7VB5JZ2H.js";import{b as C}from"./chunk-RX52N74R.js";import{b as he}from"./chunk-SY3N2HL3.js";import{a as J,h as ue}from"./chunk-VRWNHVJO.js";import{O as R,P as h}from"./chunk-QRZ5HHIG.js";import{a as c}from"./chunk-WNSZCIFR.js";import{f as me,i as O}from"./chunk-MQI2G2HI.js";function et({normalTexture:e,metallicRoughnessTexture:a,metallicFactor:i,roughnessFactor:l,emissiveTexture:u,emissiveFactor:n,occlusionTexture:o}){return e==null&&a==null&&u==null&&(n==null||pe(n,de))&&o==null&&(l==null||l===1)&&(i==null||i===1)}var tt=W(1,1,.5),Ne=W(0,.6,.2),at=W(0,1,.2);function ot(e){e.vertex.code.add(t`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function lt(e,a){switch(a.output){case 5:case 6:case 7:case 8:e.fragment.code.add(t`float _calculateFragDepth(const in float depth) {
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + slope_scale * m + bias;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 9:e.fragment.code.add(t`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}var X=class extends I{constructor(){super(...arguments),this.shader=new b(je,()=>import("./chunk-6NES44OZ.js"))}initializePipeline(){return g({colorWrite:f})}};X=c([h("esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique")],X);var Oe="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";var le=class extends A{constructor(){super(...arguments),this.projScale=1}},V=class extends le{constructor(){super(...arguments),this.intensity=1}},ce=class extends A{},K=class extends ce{constructor(){super(...arguments),this.blurSize=fe()}};var k=class extends I{constructor(){super(...arguments),this.shader=new b(Fe,()=>import("./chunk-YTAI6VVE.js"))}initializePipeline(){return g({colorWrite:f})}};k=c([h("esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique")],k);var q=2,$=class extends Z{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=_.AMBIENT_ILLUMINATION,this._enableTime=0,this._passParameters=new V,this._drawParameters=new K}initialize(){let e=Uint8Array.from(atob(Oe),i=>i.charCodeAt(0)),a=new ge(32);a.wrapMode=33071,a.pixelFormat=6407,a.wrapMode=10497,a.hasMipmap=!0,this._passParameters.noiseTexture=new be(this.renderingContext,a,e),this.addHandles(J(()=>this.view.stage.renderer.hasAmbientIllumination,()=>this._enableTime=0))}destroy(){this._passParameters.noiseTexture=me(this._passParameters.noiseTexture)}render(e){let a=e.find(({name:D})=>D==="normals"),i=a?.getTexture(),l=a?.getTexture(U);if(!i||!l)return;let u=this.techniques.getCompiled(k),n=this.techniques.getCompiled(X);if(!u||!n)return this._enableTime=performance.now(),void this.requestRender(1);this._enableTime===0&&(this._enableTime=performance.now());let o=this.renderingContext,d=this.view.qualitySettings.fadeDuration,m=this.bindParameters,s=m.camera,x=s.relativeElevation,r=he((5e5-x)/2e5,0,1),w=d>0?Math.min(d,performance.now()-this._enableTime)/d:1,T=w*r;this._passParameters.normalTexture=i,this._passParameters.depthTexture=l,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ve/we(s)**6*T;let G=s.fullViewport[2],E=s.fullViewport[3],F=this.fboCache.acquire(G,E,"ssao input",2);o.bindFramebuffer(F.fbo),o.setViewport(0,0,G,E),o.bindTechnique(u,m,this._passParameters,this._drawParameters),o.screen.draw();let z=Math.round(G/q),M=Math.round(E/q),p=this.fboCache.acquire(z,M,"ssao blur",0);o.bindFramebuffer(p.fbo),this._drawParameters.colorTexture=F.getTexture(),C(this._drawParameters.blurSize,0,q/E),o.bindTechnique(n,m,this._passParameters,this._drawParameters),o.setViewport(0,0,z,M),o.screen.draw(),F.release();let j=this.fboCache.acquire(z,M,_.AMBIENT_ILLUMINATION,0);return o.bindFramebuffer(j.fbo),o.setViewport(0,0,G,E),o.setClearColor(1,1,1,0),o.clear(16384),this._drawParameters.colorTexture=p.getTexture(),C(this._drawParameters.blurSize,q/G,0),o.bindTechnique(n,m,this._passParameters,this._drawParameters),o.setViewport(0,0,z,M),o.screen.draw(),o.setViewport4fv(s.fullViewport),p.release(),w<1&&this.requestRender(2),j}};c([R()],$.prototype,"consumes",void 0),c([R()],$.prototype,"produces",void 0),$=c([h("esri.views.3d.webgl-engine.effects.ssao.SSAO")],$);var Ve=.5;function We(e,a){a.receiveAmbientOcclusion?(e.uniforms.add(new H("ssaoTex",i=>i.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/q),e.code.add(t`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(t`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}var Q=class extends I{constructor(){super(...arguments),this.shader=new b(ye,()=>import("./chunk-CX7M3DIJ.js"))}initializePipeline(){return g({colorWrite:f})}};Q=c([h("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique")],Q);var ee=class extends I{constructor(){super(...arguments),this.shader=new b(qe,()=>import("./chunk-RPJLQBN5.js"))}initializePipeline(){return g({colorWrite:f})}};ee=c([h("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique")],ee);var L=class extends Ie{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=Re,this.rayMarchMaxSteps=Ce,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}};c([oe()],L.prototype,"hasColor",void 0),c([oe()],L.prototype,"hasEmission",void 0);var te=class extends I{constructor(){super(...arguments),this.shader=new b(De,()=>import("./chunk-BBFVFIBH.js"))}initializePipeline(){return g({colorWrite:f})}};te=c([h("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique")],te);var y=1,ae=class extends Z{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=_.AMBIENT_ILLUMINATION,this._passParameters=new Pe,this._drawParameters=new Le,this._drawParametersUpscale=new Te,this._maxFrames=256,this._lowQualityResolutionScale=.25,this._configuration=new L,this._globalIllumination=null,this._isGlobalIlluminationUpdate=!1,this._resetBuffer=!1}initialize(){this.addHandles(J(()=>this.view.stage.renderer.hasGlobalIllumination,()=>{this._resetAccumulatedFrames(),this._requestRender()},ue))}destroy(){this._globalIllumination=O(this._globalIllumination)}resetAccumulatedFrames(){this._isGlobalIlluminationUpdate||this._resetAccumulatedFrames()}render(e){if(this._passParameters.accumulatedFrames>=this._maxFrames)return this._globalIllumination?.retain(),this._globalIllumination;let a=e.find(({name:He})=>He==="normals"),i=a?.getTexture(),l=a?.getTexture(U),u=this._mode;if(!i||!l)return this._emptyOutput;if(u===0)return this._resetBuffer=!1,this._emptyOutput;if(!this._canRender)return this._resetBuffer=!1,this._requestRender(),this._emptyOutput;let n=this.bindParameters;this._configuration.hasEmission=!!n.reprojection.lastFrameEmission;let o=this.techniques.getCompiled(ee,this._configuration),d=this.techniques.getCompiled(Q),m=u===1,s=m?this._lowQualityResolutionScale:1,x=m?this.techniques.getCompiled(te):null;if(!o||!d||m&&!x)return this._requestRender(),this._emptyOutput;let r=this.renderingContext,{camera:w}=n;this._passParameters.normalTexture=i,this._passParameters.depthTexture=l,this._passParameters.projScale=1/w.computeScreenPixelSizeAtDist(1),this._passParameters.scaleGlobalIllumination=s;let{fullWidth:T,fullHeight:G}=w,E=Math.max(1,Math.floor(T*s)),F=Math.max(1,Math.floor(G*s)),z=this.fboCache.acquire(E,F,"global illumination input").acquireColor(S,0);r.bindFramebuffer(z.fbo),r.setViewport(0,0,E,F),r.bindTechnique(o,n,this._passParameters,this._drawParameters),r.screen.draw();let M=z.obtainAttachment(S),p=Math.max(1,Math.round(E/y)),j=Math.max(1,Math.round(F/y)),D=this.fboCache.acquire(p,j,"global illumination blur horizontal");r.bindFramebuffer(D.fbo),this._drawParameters.texture=z.getTexture(),this._drawParameters.weightTexture=M.attachment,C(this._drawParameters.blurSize,0,y/F),r.bindTechnique(d,n,this._passParameters,this._drawParameters),r.setViewport(0,0,p,j),r.screen.draw(),z.release();let Ae=m?"global illumination blur vertical":_.AMBIENT_ILLUMINATION,B=this.fboCache.acquire(p,j,Ae);r.bindFramebuffer(B.fbo),r.setViewport(0,0,p,j),r.setClearColor(1,1,1,0),r.clear(16384),this._drawParameters.texture=D.getTexture(),this._drawParameters.weightTexture=M.attachment,C(this._drawParameters.blurSize,y/p,0),r.bindTechnique(d,n,this._passParameters,this._drawParameters),r.setViewport(0,0,p,j),r.screen.draw(),D.release(),B.attachColor(M,S),M.release();let Y=B;return x&&(Y=this.fboCache.acquire(T,G,_.AMBIENT_ILLUMINATION).acquireColor(S,0),r.bindFramebuffer(Y.fbo),r.setViewport(0,0,T,G),r.setClearColor(1,1,1,0),r.clear(16384),this._drawParametersUpscale.colorTexture=B.getTexture(),this._drawParametersUpscale.weightTexture=B.getTexture(S),r.bindTechnique(x,n,this._passParameters,this._drawParametersUpscale),r.screen.draw(),B.release()),r.setViewport4fv(w.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,++this._passParameters.accumulatedFrames,this._cacheGlobalIllumination(Y),this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),Y}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_cacheGlobalIllumination(e){this._globalIllumination!==e&&(this._globalIllumination=O(this._globalIllumination),this._globalIllumination=e,this._globalIllumination.retain())}get _emptyOutput(){let e=this.renderingContext,{fullWidth:a,fullHeight:i}=this.bindParameters.camera,l=this.fboCache.acquire(a,i,_.AMBIENT_ILLUMINATION).acquireColor(S,0);return e.bindFramebuffer(l.fbo),e.setViewport(0,0,a,i),e.clearBuffer(0,[0,0,0,1]),e.clearBuffer(1,[0,0,0,0]),l}get _canRender(){let{reprojection:e,hasEmission:a,globalIllumination:i}=this.bindParameters;return!(!e.lastFrameColor||a&&!e.lastFrameEmission||!e.lastFrameDepth||!i||this._resetBuffer)}get _mode(){let{hasGlobalIlluminationHighQuality:e,hasGlobalIllumination:a}=this.view.stage.renderer;return e?2:a?1:0}_resetAccumulatedFrames(){this._passParameters.accumulatedFrames=0,this._globalIllumination=O(this._globalIllumination)}get test(){let e=this;return{passParameters:this._passParameters,configuration:this._configuration,get maxFrames(){return e._maxFrames},set maxFrames(a){e._maxFrames=a},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(a){e._lowQualityResolutionScale=a},get mode(){return e._mode},restartAccumulation:()=>{this._resetAccumulatedFrames(),this._passParameters.temporalSampleFrame=0,this._resetBuffer=!0,this._requestRender()}}}};c([R()],ae.prototype,"consumes",void 0),c([R()],ae.prototype,"produces",void 0),ae=c([h("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination")],ae);function Ue(e,a){a.receiveGlobalIllumination?(e.uniforms.add(new N("hasGlobalIlluminationTexture",i=>i.globalIllumination!=null),new H("globalIlluminationTexture",i=>i.globalIllumination?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/y),e.code.add(t`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(t`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}function Ze(e){e.code.add(t`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(t`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Ke(e){e.constants.add("ambientBoostFactor","float",Me)}function ke(e){e.uniforms.add(new P("lightingGlobalFactor",a=>a.lighting.globalFactor))}function hi(e,a){let{pbrMode:i,spherical:l,hasColorTexture:u,receiveGlobalIllumination:n}=a;e.include(ze),e.include(Ue,a),e.include(We,a),i!==0&&e.include(Be,a),e.include(_e,a),e.include(Ge),e.include(Ye,a);let o=!(i===2&&!u);o&&e.include(Ze),Ke(e),ke(e),ne(e),e.code.add(t`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${l?t`normalize(vPosWorld)`:t`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),se(e),e.code.add(t`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);let d=n?"globalIlluminationOcclusion":"ssao",m=n?.75:1,s=n?1.5:1;switch(i){case 0:case 4:case 3:e.include(Se),e.code.add(t`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld) * (1.0 - ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:{let x=n?.35:.2;e.code.add(t`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;
        const float additionalAmbientIrradianceFactor = 0.02;
        const float groundReflectance = ${t.float(x)};

        vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                      vec3 viewDirection, vec3 upDirection, vec3 mrr, float additionalAmbientIrradiance) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo, mrr);

          ${v(n,t`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}
      `),a.useFillLights?e.uniforms.add(new N("hasFillLights",r=>r.enableFillLights)):e.constants.add("hasFillLights","bool",!1),e.code.add(t`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = ${t.float(m)} * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ${t.float(s)} * calculateAmbientIrradiance(normal) * (1.0 - ${d}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new P("lightingSpecularStrength",r=>r.lighting.mainLight.specularStrength),new P("lightingEnvironmentStrength",r=>r.lighting.mainLight.environmentStrength)).code.add(t`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${d}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.code.add(t`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${v(n,t`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

      ${o?t`vec3 adjustedOutColorLinear = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:t`vec3 adjustedOutColorLinear = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(adjustedOutColorLinear);
      }
    `);break}case 5:case 6:{let x=n?.35:.5,r=n?.75:1,w=n?1.5:1;ne(e),se(e),e.code.add(t`
      const float roughnessTerrain = 0.5;
      const float specularityTerrain = ${t.float(x)};

      vec3 evaluatePBRSimplifiedLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDirection, vec3 upDirection) {
        PBRShadingInfo inputs;
        calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

        ${v(n,t`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}

        vec3 mainLightIrradianceComponent = ${t.float(r)} * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
        vec3 ambientLightIrradianceComponent = ${t.float(w)} * calculateAmbientIrradiance(normal) * (1.0 - ${d}) + additionalLight;
        vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

        vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
        vec3 outDiffColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

        vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
        vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
        vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
        vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;

        vec3 outColorLinear = outDiffColor + specularComponent;

        ${v(n,t`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

        return delinearizeGamma(outColorLinear);
      }
      `);break}}}function Ei(e,a){let i=a.pbrMode,l=e.fragment;if(i!==2&&i!==0&&i!==1)return void l.code.add(t`void applyPBRFactors() {}`);if(i===0)return void l.code.add(t`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(i===2)return void l.code.add(t`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:u,hasMetallicRoughnessTextureTransform:n,hasOcclusionTexture:o,hasOcclusionTextureTransform:d,bindType:m}=a;(u||o)&&e.include(Ee,a),l.code.add(t`vec3 mrr;
float occlusion;`),u&&l.uniforms.add(m===1?new ie("texMetallicRoughness",s=>s.textureMetallicRoughness):new re("texMetallicRoughness",s=>s.textureMetallicRoughness)),o&&l.uniforms.add(m===1?new ie("texOcclusion",s=>s.textureOcclusion):new re("texOcclusion",s=>s.textureOcclusion)),l.uniforms.add(m===1?new xe("mrrFactors",s=>s.mrrFactors):new ve("mrrFactors",s=>s.mrrFactors)),l.code.add(t`
    ${v(u,t`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${v(o,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${o?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${v(u,`applyMetallicRoughness(${n?"metallicRoughnessUV":"vuv0"});`)}
      ${v(o,`applyOcclusion(${d?"occlusionUV":"vuv0"});`)}
    }
  `)}function Fi(e,a){a.snowCover&&(e.uniforms.add(new P("snowCover",i=>i.snowCover)).code.add(t`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(t`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}export{et as a,tt as b,Ne as c,at as d,ot as e,lt as f,We as g,Ke as h,ke as i,hi as j,Ei as k,Fi as l};
