import{X as r,ke as z,kf as J,kg as E,co as Q,af as C,k1 as X,gI as V,ao as Y,k2 as Z,hc as tt,hg as et,hd as st,aJ as ot,k3 as it,he as rt,aL as nt,kh as at,ki as D}from"./index-CC72Q5ax.js";import{r as pt}from"./vec3f32-nZdmKIgz.js";import{n as dt}from"./WGLContainer-DrEewjaT.js";import{t as ht,a as L,i as lt}from"./FeatureCommandQueue-CSKkHRH5.js";import{h as q,g as a,m as B,I as ct,C as g,P as U,t as ut,j as P,S as ft,a as vt,b as mt,G as xt,H as yt,l as gt,v as wt,w as _t,e as Mt}from"./UpdateTracking2D-Bh2X3QVj.js";class k extends ct{}r([q(0,g)],k.prototype,"pos",void 0),r([q(1,g)],k.prototype,"uv",void 0);class $t extends wt{}class W extends U{}r([a(ut)],W.prototype,"dvs",void 0);class m extends U{}r([a(g)],m.prototype,"perspective",void 0),r([a(g)],m.prototype,"texSize",void 0),r([a(P)],m.prototype,"wrapAroundShift",void 0),r([a(P)],m.prototype,"opacity",void 0),r([a(ft)],m.prototype,"texture",void 0);class y extends vt{vertex(e){const t=e.uv.divide(this.config.texSize),s=new P(1).add(mt(t,this.config.perspective)),o=new xt(e.pos.add(new g(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(o);return{uv:t,glPosition:new yt(i.xy.multiply(s),0,s)}}fragment(e){const t=gt(this.config.texture,e.uv).multiply(this.config.opacity),s=new _t;return s.glFragColor=t,s}}r([a(W)],y.prototype,"transform",void 0),r([a(m)],y.prototype,"config",void 0),r([z(0,B(k))],y.prototype,"vertex",null),r([z(0,B($t))],y.prototype,"fragment",null);let St=class extends ht{constructor(){super(...arguments),this.type=Mt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(e,t){const{context:s,painter:o}=e,i=this._getMesh(e,t);o.setPipelineState(L);const{isWrapAround:p,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};o.setPipelineState({...L,stencil:{write:!1,test:{compare:J.EQUAL,op:{fail:E.KEEP,zFail:E.KEEP,zPass:E.REPLACE},ref:0,mask:255}}}),o.submitDrawMeshUntyped(s,f,i),p&&(u.wrapAroundShift=c,o.submitDrawMeshUntyped(s,f,i))}shutdown(){Q(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const o=this._mesh.vertexBuffers.get("positions");if(!o)throw new Error("Buffer not found");o.setData(t.position)}else{const o=t.index!=null?t.index.length:t.position.length/2;this._mesh=new lt(s,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:C.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:C.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:X.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:o}]})}return this._mesh}};class kt extends dt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=V(),this._overlayTechnique=new St}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==Y.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:o,pixelRatio:i,resolution:p,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===s)return;const w=D(c),d=i*o[0],v=i*o[1];this._localOrigin=u.targetGeometry.clone();const{x,y:$}=this._localOrigin,_=Z(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=p*d,b=p*v,n=tt(this._dvsMat3);et(n,n,f),st(n,n,ot(d/2,v/2)),it(n,n,pt(d/S,-v/b,1)),rt(n,n,-w),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:o,spatialReference:i,worldScreenWidth:p,size:c,viewpoint:u}=s,f=this._localOrigin;let w,d=0;const v=nt(i);if(v&&i.isWrappable){const x=c[0],$=c[1],_=D(o),S=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),n=Math.round(x*S+$*b),[I,G]=v.valid,h=at(i),{x:T,y:F}=u.targetGeometry,H=[T,F],O=[0,0];s.toScreen(O,H);const M=[0,0];let R;R=n>p?.5*p:.5*n;const j=Math.floor((T+.5*h)/h),N=I+j*h,K=G+j*h,A=[O[0]+R,0];s.toMap(M,A),M[0]>K&&(d=h),A[0]=O[0]-R,s.toMap(M,A),M[0]<N&&(d=-h),w={worldWidth:h,xBounds:[I,G]}}for(const x of t)x.updateDrawCoords(f,d,i,w)}}export{kt as u};
