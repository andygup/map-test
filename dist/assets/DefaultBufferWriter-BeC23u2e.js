import{n as Q}from"./NormalAttribute.glsl-BzcwcK9j.js";import{L as Te,M as Ae,O as xe,f as Me,e as Ne,J as Re}from"./Geometry-BTp0yhOg.js";import{i2 as z,e2 as T,df as W,bx as E,lE as Ce,ov as Le,k6 as G,gp as Ee,ow as Ve,cU as Ie,fF as J,ng as Be,ox as De,oy as qe,bU as oe,c1 as me,c2 as ge,oz as Se,oA as Oe}from"./index-C-FXvluM.js";import{O as fe}from"./basicInterfaces-CZwQPxTp.js";import{s as F}from"./Util-B1cu74ll.js";import{x as we,c as de,y as ke,u as Ue,q as He,i as he}from"./BufferView-Dk0MoByh.js";function ve(t){t.varyings.add("linearDepth","float")}function je(t){t.vertex.uniforms.add(new Ae("nearFar",(e,s)=>s.camera.nearFar))}function ze(t){t.vertex.code.add(z`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Pt(t,e){const{vertex:s}=t;switch(e.output){case Q.Color:case Q.ColorEmission:if(e.receiveShadows)return ve(t),void s.code.add(z`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case Q.Shadow:case Q.ShadowHighlight:case Q.ShadowExcludeHighlight:case Q.ViewshedShadow:return t.include(Te,e),ve(t),je(t),ze(t),void s.code.add(z`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add(z`void forwardLinearDepth() {}`)}function Ft(t){ze(t),t.vertex.code.add(z`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(z`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Tt(t,e){e.hasVertexColors?(t.attributes.add(T.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(z`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(z`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(z`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ge(t){t.vertex.code.add(z`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(z`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(z`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(z`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(z`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(z`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function At(t){t.uniforms.add(new xe("screenSizePerspective",e=>be(e.screenSizePerspective)))}function We(t){t.uniforms.add(new xe("screenSizePerspectiveAlignment",e=>be(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function be(t){return W(Je,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const Je=E();function Mt(t,e){const s=t.vertex;e.hasVerticalOffset?(Xe(s),e.hasScreenSizePerspective&&(t.include(Ge),We(s),Me(t.vertex,e)),s.code.add(z`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?z`vec3 worldNormal = normalize(worldPos + localOrigin);`:z`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?z`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:z`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):s.code.add(z`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ye=Le();function Xe(t){t.uniforms.add(new Ne("verticalOffset",(e,s)=>{const{minWorldLength:r,maxWorldLength:a,screenLength:i}=e.verticalOffset,n=Math.tan(.5*s.camera.fovY)/(.5*s.camera.fullViewport[3]),o=s.camera.pixelRatio||1;return Ce(Ye,i*o,n,r,a)}))}let Nt=class extends Re{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,s=>this._texture=s),this._acquire(e.normalTextureId,s=>this._textureNormal=s),this._acquire(e.emissiveTextureId,s=>this._textureEmissive=s),this._acquire(e.occlusionTextureId,s=>this._textureOcclusion=s),this._acquire(e.metallicRoughnessTextureId,s=>this._textureMetallicRoughness=s)}dispose(){super.dispose(),this._texture=G(this._texture),this._textureNormal=G(this._textureNormal),this._textureEmissive=G(this._textureEmissive),this._textureOcclusion=G(this._textureOcclusion),this._textureMetallicRoughness=G(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?fe.LOADED:fe.LOADING}get textureBindParameters(){return new Qe(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=G(this._texture),this._textureId=e,this._acquire(this._textureId,s=>this._texture=s))}_acquire(e,s){if(e==null)return void s(null);const r=this._textures.acquire(e);if(Ee(r))return++this._numLoading,void r.then(a=>{if(this._disposed)return G(a),void s(null);s(a)}).finally(()=>--this._numLoading);s(r)}};class Ke extends Ve{constructor(e=null){super(),this.textureEmissive=e}}let Qe=class extends Ke{constructor(e=null,s=null,r=null,a=null,i=null,n,o){super(r),this.texture=e,this.textureNormal=s,this.textureOcclusion=a,this.textureMetallicRoughness=i,this.scale=n,this.normalTextureTransformMatrix=o}};class Ze{constructor(e=!1,s=!0){this.isVerticalRay=e,this.normalRequired=s}}const te=Ie();function Lt(t,e,s,r,a,i){if(!t.visible)return;const n=J($e,r,s),o=(l,u,f)=>{i(l,f,u,!1)},c=new Ze(!1,e.options.normalRequired);if(t.boundingInfo){F(t.type===Be.Mesh);const l=e.tolerance;ye(t.boundingInfo,s,n,l,a,c,o)}else{const l=t.attributes.get(T.POSITION),u=l.indices;_e(s,n,0,u.length/3,u,l.data,l.stride,a,c,o)}}const et=E();function ye(t,e,s,r,a,i,n){if(t==null)return;const o=at(s,et);if(De(te,t.bbMin),qe(te,t.bbMax),a!=null&&a.applyToAabb(te),ct(te,e,o,r)){const{primitiveIndices:c,position:l}=t,u=c?c.length:l.indices.length/3;if(u>ut){const f=t.getChildren();if(f!==void 0){for(const S of f)ye(S,e,s,r,a,i,n);return}}tt(e,s,0,u,l.indices,l.data,l.stride,c,a,i,n)}}const Z=E();function Et(t,e,s,r,a,i,n,o,c){const{data:l,stride:u}=i;_e(t,J($e,e,t),s,r,a,l,u,n,o,c)}function tt(t,e,s,r,a,i,n,o,c,l,u){const f=t[0],S=t[1],L=t[2],A=e[0],C=e[1],O=e[2],{normalRequired:V}=l;for(let y=s;y<r;++y){const N=o[y],M=3*N,_=n*a[M];let b=i[_],v=i[_+1],h=i[_+2];const p=n*a[M+1];let x=i[p],d=i[p+1],g=i[p+2];const m=n*a[M+2];let w=i[m],$=i[m+1],P=i[m+2];c!=null&&([b,v,h]=c.applyToVertex(b,v,h,y),[x,d,g]=c.applyToVertex(x,d,g,y),[w,$,P]=c.applyToVertex(w,$,P,y));const R=x-b,D=d-v,q=g-h,k=w-b,U=$-v,B=P-h,H=C*B-U*O,j=O*k-B*A,Y=A*U-k*C,I=R*H+D*j+q*Y;if(Math.abs(I)<=ft)continue;const X=f-b,ie=S-v,ne=L-h,K=X*H+ie*j+ne*Y;if(I>0){if(K<0||K>I)continue}else if(K>0||K<I)continue;const ae=ie*q-D*ne,ce=ne*R-q*X,le=X*D-R*ie,ee=A*ae+C*ce+O*le;if(I>0){if(ee<0||K+ee>I)continue}else if(ee>0||K+ee<I)continue;const ue=(k*ae+U*ce+B*le)/I;ue>=0&&u(ue,N,V?nt(R,D,q,k,U,B,Z):null)}}function _e(t,e,s,r,a,i,n,o,c,l){const u=e,f=dt,S=Math.abs(u[0]),L=Math.abs(u[1]),A=Math.abs(u[2]),C=S>=L?S>=A?0:2:L>=A?1:2,O=C,V=u[O]<0?2:1,y=(C+V)%3,N=(C+(3-V))%3,M=u[y]/u[O],_=u[N]/u[O],b=1/u[O],v=rt,h=st,p=it,{normalRequired:x}=c;for(let d=s;d<r;++d){const g=3*d,m=n*a[g];W(f[0],i[m+0],i[m+1],i[m+2]);const w=n*a[g+1];W(f[1],i[w+0],i[w+1],i[w+2]);const $=n*a[g+2];W(f[2],i[$+0],i[$+1],i[$+2]),o&&(oe(f[0],o.applyToVertex(f[0][0],f[0][1],f[0][2],d)),oe(f[1],o.applyToVertex(f[1][0],f[1][1],f[1][2],d)),oe(f[2],o.applyToVertex(f[2][0],f[2][1],f[2][2],d))),J(v,f[0],t),J(h,f[1],t),J(p,f[2],t);const P=v[y]-M*v[O],R=v[N]-_*v[O],D=h[y]-M*h[O],q=h[N]-_*h[O],k=p[y]-M*p[O],U=p[N]-_*p[O],B=k*q-U*D,H=P*U-R*k,j=D*R-q*P;if((B<0||H<0||j<0)&&(B>0||H>0||j>0))continue;const Y=B+H+j;if(Y===0)continue;const I=B*(b*v[O])+H*(b*h[O])+j*(b*p[O]);if(I*Math.sign(Y)<0)continue;const X=I/Y;X>=0&&l(X,d,x?ot(f):null)}}const rt=E(),st=E(),it=E();function nt(t,e,s,r,a,i,n){return W(re,t,e,s),W(se,r,a,i),me(n,re,se),ge(n,n),n}function ot(t){return J(re,t[1],t[0]),J(se,t[2],t[0]),me(Z,re,se),ge(Z,Z),Z}const re=E(),se=E();function at(t,e){return W(e,1/t[0],1/t[1],1/t[2])}function ct(t,e,s,r){return lt(t,e,s,r,1/0)}function lt(t,e,s,r,a){const i=(t[0]-r-e[0])*s[0],n=(t[3]+r-e[0])*s[0];let o=Math.min(i,n),c=Math.max(i,n);const l=(t[1]-r-e[1])*s[1],u=(t[4]+r-e[1])*s[1];if(c=Math.min(c,Math.max(l,u)),c<0||(o=Math.max(o,Math.min(l,u)),o>c))return!1;const f=(t[2]-r-e[2])*s[2],S=(t[5]+r-e[2])*s[2];return c=Math.min(c,Math.max(f,S)),!(c<0)&&(o=Math.max(o,Math.min(f,S)),!(o>c)&&o<a)}const ut=1e3,ft=1e-7,$e=E(),dt=[E(),E(),E()];function Vt(t,e,s,r=1){const{data:a,indices:i}=t,n=e.typedBuffer,o=e.typedBufferStride,c=i.length;if(s*=o,r===1)for(let l=0;l<c;++l)n[s]=a[i[l]],s+=o;else for(let l=0;l<c;++l){const u=a[i[l]];for(let f=0;f<r;f++)n[s]=u,s+=o}}function pe(t,e,s){const{data:r,indices:a}=t,i=e.typedBuffer,n=e.typedBufferStride,o=a.length;s*=n;for(let c=0;c<o;++c){const l=2*a[c];i[s]=r[l],i[s+1]=r[l+1],s+=n}}function Pe(t,e,s,r){const{data:a,indices:i}=t,n=e.typedBuffer,o=e.typedBufferStride,c=i.length;if(s*=o,r==null||r===1)for(let l=0;l<c;++l){const u=3*i[l];n[s]=a[u],n[s+1]=a[u+1],n[s+2]=a[u+2],s+=o}else for(let l=0;l<c;++l){const u=3*i[l];for(let f=0;f<r;++f)n[s]=a[u],n[s+1]=a[u+1],n[s+2]=a[u+2],s+=o}}function Fe(t,e,s,r=1){const{data:a,indices:i}=t,n=e.typedBuffer,o=e.typedBufferStride,c=i.length;if(s*=o,r===1)for(let l=0;l<c;++l){const u=4*i[l];n[s]=a[u],n[s+1]=a[u+1],n[s+2]=a[u+2],n[s+3]=a[u+3],s+=o}else for(let l=0;l<c;++l){const u=4*i[l];for(let f=0;f<r;++f)n[s]=a[u],n[s+1]=a[u+1],n[s+2]=a[u+2],n[s+3]=a[u+3],s+=o}}function It(t,e,s){const r=t.typedBuffer,a=t.typedBufferStride;e*=a;for(let i=0;i<s;++i)r[e]=0,r[e+1]=0,r[e+2]=0,r[e+3]=0,e+=a}function ht(t,e,s,r,a=1){if(!e)return void Pe(t,s,r,a);const{data:i,indices:n}=t,o=s.typedBuffer,c=s.typedBufferStride,l=n.length,u=e[0],f=e[1],S=e[2],L=e[4],A=e[5],C=e[6],O=e[8],V=e[9],y=e[10],N=e[12],M=e[13],_=e[14];r*=c;let b=0,v=0,h=0;const p=Se(e)?x=>{b=i[x]+N,v=i[x+1]+M,h=i[x+2]+_}:x=>{const d=i[x],g=i[x+1],m=i[x+2];b=u*d+L*g+O*m+N,v=f*d+A*g+V*m+M,h=S*d+C*g+y*m+_};if(a===1)for(let x=0;x<l;++x)p(3*n[x]),o[r]=b,o[r+1]=v,o[r+2]=h,r+=c;else for(let x=0;x<l;++x){p(3*n[x]);for(let d=0;d<a;++d)o[r]=b,o[r+1]=v,o[r+2]=h,r+=c}}function vt(t,e,s,r,a=1){if(!e)return void Pe(t,s,r,a);const{data:i,indices:n}=t,o=e,c=s.typedBuffer,l=s.typedBufferStride,u=n.length,f=o[0],S=o[1],L=o[2],A=o[4],C=o[5],O=o[6],V=o[8],y=o[9],N=o[10],M=!Oe(o),_=1e-6,b=1-_;r*=l;let v=0,h=0,p=0;const x=Se(o)?d=>{v=i[d],h=i[d+1],p=i[d+2]}:d=>{const g=i[d],m=i[d+1],w=i[d+2];v=f*g+A*m+V*w,h=S*g+C*m+y*w,p=L*g+O*m+N*w};if(a===1)if(M)for(let d=0;d<u;++d){x(3*n[d]);const g=v*v+h*h+p*p;if(g<b&&g>_){const m=1/Math.sqrt(g);c[r]=v*m,c[r+1]=h*m,c[r+2]=p*m}else c[r]=v,c[r+1]=h,c[r+2]=p;r+=l}else for(let d=0;d<u;++d)x(3*n[d]),c[r]=v,c[r+1]=h,c[r+2]=p,r+=l;else for(let d=0;d<u;++d){if(x(3*n[d]),M){const g=v*v+h*h+p*p;if(g<b&&g>_){const m=1/Math.sqrt(g);v*=m,h*=m,p*=m}}for(let g=0;g<a;++g)c[r]=v,c[r+1]=h,c[r+2]=p,r+=l}}function pt(t,e,s,r,a=1){if(!e)return void Fe(t,s,r,a);const{data:i,indices:n}=t,o=e,c=s.typedBuffer,l=s.typedBufferStride,u=n.length,f=o[0],S=o[1],L=o[2],A=o[4],C=o[5],O=o[6],V=o[8],y=o[9],N=o[10],M=!Oe(o),_=1e-6,b=1-_;if(r*=l,a===1)for(let v=0;v<u;++v){const h=4*n[v],p=i[h],x=i[h+1],d=i[h+2],g=i[h+3];let m=f*p+A*x+V*d,w=S*p+C*x+y*d,$=L*p+O*x+N*d;if(M){const P=m*m+w*w+$*$;if(P<b&&P>_){const R=1/Math.sqrt(P);m*=R,w*=R,$*=R}}c[r]=m,c[r+1]=w,c[r+2]=$,c[r+3]=g,r+=l}else for(let v=0;v<u;++v){const h=4*n[v],p=i[h],x=i[h+1],d=i[h+2],g=i[h+3];let m=f*p+A*x+V*d,w=S*p+C*x+y*d,$=L*p+O*x+N*d;if(M){const P=m*m+w*w+$*$;if(P<b&&P>_){const R=1/Math.sqrt(P);m*=R,w*=R,$*=R}}for(let P=0;P<a;++P)c[r]=m,c[r+1]=w,c[r+2]=$,c[r+3]=g,r+=l}}function xt(t,e,s,r,a=1){const{data:i,indices:n}=t,o=s.typedBuffer,c=s.typedBufferStride,l=n.length;if(r*=c,e!==i.length||e!==4)if(a!==1)if(e!==4)for(let u=0;u<l;++u){const f=3*n[u];for(let S=0;S<a;++S)o[r]=i[f],o[r+1]=i[f+1],o[r+2]=i[f+2],o[r+3]=255,r+=c}else for(let u=0;u<l;++u){const f=4*n[u];for(let S=0;S<a;++S)o[r]=i[f],o[r+1]=i[f+1],o[r+2]=i[f+2],o[r+3]=i[f+3],r+=c}else{if(e===4){for(let u=0;u<l;++u){const f=4*n[u];o[r]=i[f],o[r+1]=i[f+1],o[r+2]=i[f+2],o[r+3]=i[f+3],r+=c}return}for(let u=0;u<l;++u){const f=3*n[u];o[r]=i[f],o[r+1]=i[f+1],o[r+2]=i[f+2],o[r+3]=255,r+=c}}else{o[r]=i[0],o[r+1]=i[1],o[r+2]=i[2],o[r+3]=i[3];const u=new Uint32Array(s.typedBuffer.buffer,s.start),f=c/4,S=u[r/=4];r+=f;const L=l*a;for(let A=1;A<L;++A)u[r]=S,r+=f}}function mt(t,e,s){const{data:r,indices:a}=t,i=e.typedBuffer,n=e.typedBufferStride,o=a.length,c=r[0];s*=n;for(let l=0;l<o;++l)i[s]=c,s+=n}function gt(t,e,s,r,a=1){const i=e.typedBuffer,n=e.typedBufferStride;if(r*=n,a===1)for(let o=0;o<s;++o)i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2],i[r+3]=t[3],r+=n;else for(let o=0;o<s;++o)for(let c=0;c<a;++c)i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2],i[r+3]=t[3],r+=n}function St(t,e,s,r,a,i,n){var o;for(const c of s.fields.keys()){const l=t.get(c),u=l==null?void 0:l.indices;if(l&&u)Ot(c,l,r,a,i,n);else if(c===T.OBJECTANDLAYERIDCOLOR&&e!=null){const f=(o=t.get(T.POSITION))==null?void 0:o.indices;if(f){const S=f.length;gt(e,i.getField(c,we),S,n)}}}}function Ot(t,e,s,r,a,i){switch(t){case T.POSITION:{F(e.size===3);const n=a.getField(t,he);F(!!n,`No buffer view for ${t}`),n&&ht(e,s,n,i);break}case T.NORMAL:{F(e.size===3);const n=a.getField(t,he);F(!!n,`No buffer view for ${t}`),n&&vt(e,r,n,i);break}case T.NORMALCOMPRESSED:{F(e.size===2);const n=a.getField(t,He);F(!!n,`No buffer view for ${t}`),n&&pe(e,n,i);break}case T.UV0:{F(e.size===2);const n=a.getField(t,Ue);F(!!n,`No buffer view for ${t}`),n&&pe(e,n,i);break}case T.COLOR:case T.SYMBOLCOLOR:{const n=a.getField(t,we);F(!!n,`No buffer view for ${t}`),F(e.size===3||e.size===4),!n||e.size!==3&&e.size!==4||xt(e,e.size,n,i);break}case T.COLORFEATUREATTRIBUTE:{const n=a.getField(t,ke);F(!!n,`No buffer view for ${t}`),F(e.size===1),n&&e.size===1&&mt(e,n,i);break}case T.TANGENT:{F(e.size===4);const n=a.getField(t,de);F(!!n,`No buffer view for ${t}`),n&&pt(e,s,n,i);break}case T.PROFILERIGHT:case T.PROFILEUP:case T.PROFILEVERTEXANDNORMAL:case T.FEATUREVALUE:{F(e.size===4);const n=a.getField(t,de);F(!!n,`No buffer view for ${t}`),n&&Fe(e,n,i)}}}class Bt{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(T.POSITION).indices.length}write(e,s,r,a,i,n){St(r,a,this.vertexBufferLayout,e,s,i,n)}}export{It as B,St as E,Ot as F,vt as O,gt as R,xt as S,Ft as a,ht as b,Fe as c,Vt as d,Tt as e,Xe as f,Mt as g,Qe as h,je as i,ct as k,Ze as m,Pt as n,We as o,Lt as p,Bt as r,Ge as s,At as t,Nt as u,Et as x};