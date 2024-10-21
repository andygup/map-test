import{i$ as G,n3 as de,gh as Ae,n4 as Ce,hn as O,cM as W,cd as I,lw as Me,cI as Re,n5 as xe,ho as T,n6 as ge,jg as me,bx as Le,fO as Y,n7 as Ne,n8 as Ie,n9 as Ve,cw as ne,cF as Se,cG as we}from"./index-C5AN6gIb.js";import{t as Ee,a as Be,e as Oe,f as De,b as qe,s as ke,c as He,v as je}from"./IntegerPassUniform-D4i1Uds1.js";import{a as Ue}from"./BindType-BmZEZMMh.js";import{x as $e,c as fe,y as Ge,u as We,q as Ye,i as he}from"./BufferView-CNNe45YH.js";import{s as P}from"./Util-DZ-J3OpH.js";import{o as Q}from"./NormalAttribute.glsl-BsjrRndr.js";let Mt=class extends Ee{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=G(this._texture),this._textureNormal=G(this._textureNormal),this._textureEmissive=G(this._textureEmissive),this._textureOcclusion=G(this._textureOcclusion),this._textureMetallicRoughness=G(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?de.LOADED:de.LOADING}get textureBindParameters(){return new Je(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=G(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const s=this._textures.acquire(e);if(Ae(s))return++this._numLoading,void s.then(o=>{if(this._disposed)return G(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(s)}};class Je extends Ce{constructor(e=null,r=null,s=null,o=null,i=null,a,n){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=s,this.textureOcclusion=o,this.textureMetallicRoughness=i,this.scale=a,this.normalTextureTransformMatrix=n}}let Lt=class extends Be{constructor(e,r){super(e,"bool",Ue.Pass,(s,o,i)=>s.setUniform1b(e,r(o,i)))}};function Ke(t){t.vertex.code.add(O`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(O`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(O`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(O`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(O`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(O`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function It(t){t.uniforms.add(new Oe("screenSizePerspective",e=>ze(e.screenSizePerspective)))}function Xe(t){t.uniforms.add(new Oe("screenSizePerspectiveAlignment",e=>ze(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function ze(t){return W(Qe,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const Qe=I();function Vt(t,e){const r=t.vertex;e.hasVerticalOffset?(et(r),e.hasScreenSizePerspective&&(t.include(Ke),Xe(r),De(t.vertex,e)),r.code.add(O`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?O`vec3 worldNormal = normalize(worldPos + localOrigin);`:O`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?O`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:O`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(O`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ze=Re();function et(t){t.uniforms.add(new qe("verticalOffset",(e,r)=>{const{minWorldLength:s,maxWorldLength:o,screenLength:i}=e.verticalOffset,a=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;return Me(Ze,i*n,a,s,o)}))}function Et(t,e,r,s=1){const{data:o,indices:i}=t,a=e.typedBuffer,n=e.typedBufferStride,c=i.length;if(r*=n,s===1)for(let u=0;u<c;++u)a[r]=o[i[u]],r+=n;else for(let u=0;u<c;++u){const l=o[i[u]];for(let d=0;d<s;d++)a[r]=l,r+=n}}function ve(t,e,r){const{data:s,indices:o}=t,i=e.typedBuffer,a=e.typedBufferStride,n=o.length;r*=a;for(let c=0;c<n;++c){const u=2*o[c];i[r]=s[u],i[r+1]=s[u+1],r+=a}}function be(t,e,r,s){const{data:o,indices:i}=t,a=e.typedBuffer,n=e.typedBufferStride,c=i.length;if(r*=n,s==null||s===1)for(let u=0;u<c;++u){const l=3*i[u];a[r]=o[l],a[r+1]=o[l+1],a[r+2]=o[l+2],r+=n}else for(let u=0;u<c;++u){const l=3*i[u];for(let d=0;d<s;++d)a[r]=o[l],a[r+1]=o[l+1],a[r+2]=o[l+2],r+=n}}function ye(t,e,r,s=1){const{data:o,indices:i}=t,a=e.typedBuffer,n=e.typedBufferStride,c=i.length;if(r*=n,s===1)for(let u=0;u<c;++u){const l=4*i[u];a[r]=o[l],a[r+1]=o[l+1],a[r+2]=o[l+2],a[r+3]=o[l+3],r+=n}else for(let u=0;u<c;++u){const l=4*i[u];for(let d=0;d<s;++d)a[r]=o[l],a[r+1]=o[l+1],a[r+2]=o[l+2],a[r+3]=o[l+3],r+=n}}function Bt(t,e,r){const s=t.typedBuffer,o=t.typedBufferStride;e*=o;for(let i=0;i<r;++i)s[e]=0,s[e+1]=0,s[e+2]=0,s[e+3]=0,e+=o}function tt(t,e,r,s,o=1){if(!e)return void be(t,r,s,o);const{data:i,indices:a}=t,n=r.typedBuffer,c=r.typedBufferStride,u=a.length,l=e[0],d=e[1],S=e[2],N=e[4],A=e[5],L=e[6],w=e[8],V=e[9],b=e[10],M=e[12],C=e[13],y=e[14];s*=c;let z=0,v=0,h=0;const p=xe(e)?x=>{z=i[x]+M,v=i[x+1]+C,h=i[x+2]+y}:x=>{const f=i[x],m=i[x+1],g=i[x+2];z=l*f+N*m+w*g+M,v=d*f+A*m+V*g+C,h=S*f+L*m+b*g+y};if(o===1)for(let x=0;x<u;++x)p(3*a[x]),n[s]=z,n[s+1]=v,n[s+2]=h,s+=c;else for(let x=0;x<u;++x){p(3*a[x]);for(let f=0;f<o;++f)n[s]=z,n[s+1]=v,n[s+2]=h,s+=c}}function st(t,e,r,s,o=1){if(!e)return void be(t,r,s,o);const{data:i,indices:a}=t,n=e,c=r.typedBuffer,u=r.typedBufferStride,l=a.length,d=n[0],S=n[1],N=n[2],A=n[4],L=n[5],w=n[6],V=n[8],b=n[9],M=n[10],C=!ge(n),y=1e-6,z=1-y;s*=u;let v=0,h=0,p=0;const x=xe(n)?f=>{v=i[f],h=i[f+1],p=i[f+2]}:f=>{const m=i[f],g=i[f+1],$=i[f+2];v=d*m+A*g+V*$,h=S*m+L*g+b*$,p=N*m+w*g+M*$};if(o===1)if(C)for(let f=0;f<l;++f){x(3*a[f]);const m=v*v+h*h+p*p;if(m<z&&m>y){const g=1/Math.sqrt(m);c[s]=v*g,c[s+1]=h*g,c[s+2]=p*g}else c[s]=v,c[s+1]=h,c[s+2]=p;s+=u}else for(let f=0;f<l;++f)x(3*a[f]),c[s]=v,c[s+1]=h,c[s+2]=p,s+=u;else for(let f=0;f<l;++f){if(x(3*a[f]),C){const m=v*v+h*h+p*p;if(m<z&&m>y){const g=1/Math.sqrt(m);v*=g,h*=g,p*=g}}for(let m=0;m<o;++m)c[s]=v,c[s+1]=h,c[s+2]=p,s+=u}}function rt(t,e,r,s,o=1){if(!e)return void ye(t,r,s,o);const{data:i,indices:a}=t,n=e,c=r.typedBuffer,u=r.typedBufferStride,l=a.length,d=n[0],S=n[1],N=n[2],A=n[4],L=n[5],w=n[6],V=n[8],b=n[9],M=n[10],C=!ge(n),y=1e-6,z=1-y;if(s*=u,o===1)for(let v=0;v<l;++v){const h=4*a[v],p=i[h],x=i[h+1],f=i[h+2],m=i[h+3];let g=d*p+A*x+V*f,$=S*p+L*x+b*f,_=N*p+w*x+M*f;if(C){const F=g*g+$*$+_*_;if(F<z&&F>y){const R=1/Math.sqrt(F);g*=R,$*=R,_*=R}}c[s]=g,c[s+1]=$,c[s+2]=_,c[s+3]=m,s+=u}else for(let v=0;v<l;++v){const h=4*a[v],p=i[h],x=i[h+1],f=i[h+2],m=i[h+3];let g=d*p+A*x+V*f,$=S*p+L*x+b*f,_=N*p+w*x+M*f;if(C){const F=g*g+$*$+_*_;if(F<z&&F>y){const R=1/Math.sqrt(F);g*=R,$*=R,_*=R}}for(let F=0;F<o;++F)c[s]=g,c[s+1]=$,c[s+2]=_,c[s+3]=m,s+=u}}function it(t,e,r,s,o=1){const{data:i,indices:a}=t,n=r.typedBuffer,c=r.typedBufferStride,u=a.length;if(s*=c,e!==i.length||e!==4)if(o!==1)if(e!==4)for(let l=0;l<u;++l){const d=3*a[l];for(let S=0;S<o;++S)n[s]=i[d],n[s+1]=i[d+1],n[s+2]=i[d+2],n[s+3]=255,s+=c}else for(let l=0;l<u;++l){const d=4*a[l];for(let S=0;S<o;++S)n[s]=i[d],n[s+1]=i[d+1],n[s+2]=i[d+2],n[s+3]=i[d+3],s+=c}else{if(e===4){for(let l=0;l<u;++l){const d=4*a[l];n[s]=i[d],n[s+1]=i[d+1],n[s+2]=i[d+2],n[s+3]=i[d+3],s+=c}return}for(let l=0;l<u;++l){const d=3*a[l];n[s]=i[d],n[s+1]=i[d+1],n[s+2]=i[d+2],n[s+3]=255,s+=c}}else{n[s]=i[0],n[s+1]=i[1],n[s+2]=i[2],n[s+3]=i[3];const l=new Uint32Array(r.typedBuffer.buffer,r.start),d=c/4,S=l[s/=4];s+=d;const N=u*o;for(let A=1;A<N;++A)l[s]=S,s+=d}}function at(t,e,r){const{data:s,indices:o}=t,i=e.typedBuffer,a=e.typedBufferStride,n=o.length,c=s[0];r*=a;for(let u=0;u<n;++u)i[r]=c,r+=a}function nt(t,e,r,s,o=1){const i=e.typedBuffer,a=e.typedBufferStride;if(s*=a,o===1)for(let n=0;n<r;++n)i[s]=t[0],i[s+1]=t[1],i[s+2]=t[2],i[s+3]=t[3],s+=a;else for(let n=0;n<r;++n)for(let c=0;c<o;++c)i[s]=t[0],i[s+1]=t[1],i[s+2]=t[2],i[s+3]=t[3],s+=a}function ot(t,e,r,s,o,i){var a;for(const n of e.fields.keys()){const c=t.attributes.get(n),u=c==null?void 0:c.indices;if(c&&u)ct(n,c,r,s,o,i);else if(n===T.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const l=(a=t.attributes.get(T.POSITION))==null?void 0:a.indices;if(l){const d=l.length,S=o.getField(n,$e);nt(t.objectAndLayerIdColor,S,d,i)}}}}function ct(t,e,r,s,o,i){switch(t){case T.POSITION:{P(e.size===3);const a=o.getField(t,he);P(!!a,`No buffer view for ${t}`),a&&tt(e,r,a,i);break}case T.NORMAL:{P(e.size===3);const a=o.getField(t,he);P(!!a,`No buffer view for ${t}`),a&&st(e,s,a,i);break}case T.NORMALCOMPRESSED:{P(e.size===2);const a=o.getField(t,Ye);P(!!a,`No buffer view for ${t}`),a&&ve(e,a,i);break}case T.UV0:{P(e.size===2);const a=o.getField(t,We);P(!!a,`No buffer view for ${t}`),a&&ve(e,a,i);break}case T.COLOR:case T.SYMBOLCOLOR:{const a=o.getField(t,$e);P(!!a,`No buffer view for ${t}`),P(e.size===3||e.size===4),!a||e.size!==3&&e.size!==4||it(e,e.size,a,i);break}case T.COLORFEATUREATTRIBUTE:{const a=o.getField(t,Ge);P(!!a,`No buffer view for ${t}`),P(e.size===1),a&&e.size===1&&at(e,a,i);break}case T.TANGENT:{P(e.size===4);const a=o.getField(t,fe);P(!!a,`No buffer view for ${t}`),a&&rt(e,r,a,i);break}case T.PROFILERIGHT:case T.PROFILEUP:case T.PROFILEVERTEXANDNORMAL:case T.FEATUREVALUE:{P(e.size===4);const a=o.getField(t,fe);P(!!a,`No buffer view for ${t}`),a&&ye(e,a,i)}}}const lt=me(1,1,0,1),ut=me(1,0,1,1);function Dt(t){t.fragment.uniforms.add(new ke("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",lt).add("unoccludedHighlightFlag","vec4",ut),t.fragment.code.add(O`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}class qt{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(T.POSITION).indices.length}write(e,r,s,o,i){ot(s,this.vertexBufferLayout,e,r,o,i)}}class dt{constructor(e=!1,r=!0){this.isVerticalRay=e,this.normalRequired=r}}const te=Le();function kt(t,e,r,s,o,i){if(!t.visible)return;const a=Y(Pe,s,r),n=(u,l,d)=>{i(u,d,l,!1)},c=new dt(!1,e.options.normalRequired);if(t.boundingInfo){P(t.type===Ne.Mesh);const u=e.tolerance;_e(t.boundingInfo,r,a,u,o,c,n)}else{const u=t.attributes.get(T.POSITION),l=u.indices;Fe(r,a,0,l.length/3,l,u.data,u.stride,o,c,n)}}const ft=I();function _e(t,e,r,s,o,i,a){if(t==null)return;const n=St(r,ft);if(Ie(te,t.bbMin),Ve(te,t.bbMax),o!=null&&o.applyToAabb(te),wt(te,e,n,s)){const{primitiveIndices:c,position:u}=t,l=c?c.length:u.indices.length/3;if(l>$t){const d=t.getChildren();if(d!==void 0){for(const S of d)_e(S,e,r,s,o,i,a);return}}ht(e,r,0,l,u.indices,u.data,u.stride,c,o,i,a)}}const Z=I();function Ht(t,e,r,s,o,i,a,n,c){const{data:u,stride:l}=i;Fe(t,Y(Pe,e,t),r,s,o,u,l,a,n,c)}function ht(t,e,r,s,o,i,a,n,c,u,l){const d=t[0],S=t[1],N=t[2],A=e[0],L=e[1],w=e[2],{normalRequired:V}=u;for(let b=r;b<s;++b){const M=n[b],C=3*M,y=a*o[C];let z=i[y],v=i[y+1],h=i[y+2];const p=a*o[C+1];let x=i[p],f=i[p+1],m=i[p+2];const g=a*o[C+2];let $=i[g],_=i[g+1],F=i[g+2];c!=null&&([z,v,h]=c.applyToVertex(z,v,h,b),[x,f,m]=c.applyToVertex(x,f,m,b),[$,_,F]=c.applyToVertex($,_,F,b));const R=x-z,D=f-v,q=m-h,k=$-z,H=_-v,B=F-h,j=L*B-H*w,U=w*k-B*A,J=A*H-k*L,E=R*j+D*U+q*J;if(Math.abs(E)<=zt)continue;const K=d-z,ie=S-v,ae=N-h,X=K*j+ie*U+ae*J;if(E>0){if(X<0||X>E)continue}else if(X>0||X<E)continue;const oe=ie*q-D*ae,ce=ae*R-q*K,le=K*D-R*ie,ee=A*oe+L*ce+w*le;if(E>0){if(ee<0||X+ee>E)continue}else if(ee>0||X+ee<E)continue;const ue=(k*oe+H*ce+B*le)/E;ue>=0&&l(ue,M,V?gt(R,D,q,k,H,B,Z):null)}}function Fe(t,e,r,s,o,i,a,n,c,u){const l=e,d=bt,S=Math.abs(l[0]),N=Math.abs(l[1]),A=Math.abs(l[2]),L=S>=N?S>=A?0:2:N>=A?1:2,w=L,V=l[w]<0?2:1,b=(L+V)%3,M=(L+(3-V))%3,C=l[b]/l[w],y=l[M]/l[w],z=1/l[w],v=vt,h=pt,p=xt,{normalRequired:x}=c;for(let f=r;f<s;++f){const m=3*f,g=a*o[m];W(d[0],i[g+0],i[g+1],i[g+2]);const $=a*o[m+1];W(d[1],i[$+0],i[$+1],i[$+2]);const _=a*o[m+2];W(d[2],i[_+0],i[_+1],i[_+2]),n&&(ne(d[0],n.applyToVertex(d[0][0],d[0][1],d[0][2],f)),ne(d[1],n.applyToVertex(d[1][0],d[1][1],d[1][2],f)),ne(d[2],n.applyToVertex(d[2][0],d[2][1],d[2][2],f))),Y(v,d[0],t),Y(h,d[1],t),Y(p,d[2],t);const F=v[b]-C*v[w],R=v[M]-y*v[w],D=h[b]-C*h[w],q=h[M]-y*h[w],k=p[b]-C*p[w],H=p[M]-y*p[w],B=k*q-H*D,j=F*H-R*k,U=D*R-q*F;if((B<0||j<0||U<0)&&(B>0||j>0||U>0))continue;const J=B+j+U;if(J===0)continue;const E=B*(z*v[w])+j*(z*h[w])+U*(z*p[w]);if(E*Math.sign(J)<0)continue;const K=E/J;K>=0&&u(K,f,x?mt(d):null)}}const vt=I(),pt=I(),xt=I();function gt(t,e,r,s,o,i,a){return W(se,t,e,r),W(re,s,o,i),Se(a,se,re),we(a,a),a}function mt(t){return Y(se,t[1],t[0]),Y(re,t[2],t[0]),Se(Z,se,re),we(Z,Z),Z}const se=I(),re=I();function St(t,e){return W(e,1/t[0],1/t[1],1/t[2])}function wt(t,e,r,s){return Ot(t,e,r,s,1/0)}function Ot(t,e,r,s,o){const i=(t[0]-s-e[0])*r[0],a=(t[3]+s-e[0])*r[0];let n=Math.min(i,a),c=Math.max(i,a);const u=(t[1]-s-e[1])*r[1],l=(t[4]+s-e[1])*r[1];if(c=Math.min(c,Math.max(u,l)),c<0||(n=Math.max(n,Math.min(u,l)),n>c))return!1;const d=(t[2]-s-e[2])*r[2],S=(t[5]+s-e[2])*r[2];return c=Math.min(c,Math.max(d,S)),!(c<0)&&(n=Math.max(n,Math.min(d,S)),!(n>c)&&n<o)}const $t=1e3,zt=1e-7,Pe=I(),bt=[I(),I(),I()];function pe(t){t.varyings.add("linearDepth","float")}function yt(t){t.vertex.uniforms.add(new He("nearFar",(e,r)=>r.camera.nearFar))}function Te(t){t.vertex.code.add(O`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function jt(t,e){const{vertex:r}=t;switch(e.output){case Q.Color:if(e.receiveShadows)return pe(t),void r.code.add(O`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case Q.Shadow:case Q.ShadowHighlight:case Q.ShadowExcludeHighlight:case Q.ViewshedShadow:return t.include(je,e),pe(t),yt(t),Te(t),void r.code.add(O`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(O`void forwardLinearDepth() {}`)}function Ut(t){Te(t),t.vertex.code.add(O`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(O`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Gt(t,e){e.hasVertexColors?(t.attributes.add(T.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(O`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(O`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(O`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{ct as A,ot as E,st as O,nt as R,it as S,Lt as a,tt as b,kt as c,ut as d,Ut as e,et as f,Gt as g,Dt as h,qt as i,Et as j,yt as k,Je as l,Vt as m,jt as n,Xe as o,ye as p,dt as q,lt as r,Ke as s,It as t,Mt as u,wt as v,Ht as x,Bt as y};
