import{i2 as Lt,bx as v,dF as V,c1 as z,c2 as U,e2 as m,lZ as R,i9 as vt,ng as dt,df as lt,fA as Ut,bA as Mt,kk as C,fz as E,nh as yt,i3 as _t,bU as Y,ni as Et,nj as Ct,kt as xt,bz as Gt}from"./index-CC72Q5ax.js";import{t as Bt}from"./doublePrecisionUtils-B0owpBza.js";import{r as b,n as x,t as It}from"./vec3f32-nZdmKIgz.js";import{t as G,b as B,c as pt}from"./Geometry-C-mMk4A4.js";import{A as Pt,l as Vt}from"./Indices-DWw6RaGO.js";import{s as $}from"./Util-BiGuS9PU.js";function o0(s){return s.type==="point"}function r0(s){s.code.add(Lt`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function l0(s,o){return s==null&&(s=[]),s.push(o),s}function a0(s,o){if(s==null)return null;const n=s.filter(t=>t!==o);return n.length===0?null:n}function h0(s,o,n,t,r){nt[0]=s.get(o,0),nt[1]=s.get(o,1),nt[2]=s.get(o,2),Bt(nt,X,3),n.set(r,0,X[0]),t.set(r,0,X[1]),n.set(r,1,X[2]),t.set(r,1,X[3]),n.set(r,2,X[4]),t.set(r,2,X[5])}const nt=v(),X=new Float32Array(6);var Nt;(function(s){s[s.Occluded=0]="Occluded",s[s.NotOccluded=1]="NotOccluded",s[s.Both=2]="Both",s[s.COUNT=3]="COUNT"})(Nt||(Nt={}));var gt;(function(s){function o(e,c){const h=e[c],l=e[c+1],a=e[c+2];return Math.sqrt(h*h+l*l+a*a)}function n(e,c){const h=e[c],l=e[c+1],a=e[c+2],i=1/Math.sqrt(h*h+l*l+a*a);e[c]*=i,e[c+1]*=i,e[c+2]*=i}function t(e,c,h){e[c]*=h,e[c+1]*=h,e[c+2]*=h}function r(e,c,h,l,a,i=c){(a=a||e)[i]=e[c]+h[l],a[i+1]=e[c+1]+h[l+1],a[i+2]=e[c+2]+h[l+2]}function w(e,c,h,l,a,i=c){(a=a||e)[i]=e[c]-h[l],a[i+1]=e[c+1]-h[l+1],a[i+2]=e[c+2]-h[l+2]}s.length=o,s.normalize=n,s.scale=t,s.add=r,s.subtract=w})(gt||(gt={}));const Z=gt,ft=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Dt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],kt=[0,0,1,0,1,1,0,1],zt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Rt=new Array(36);for(let s=0;s<6;s++)for(let o=0;o<6;o++)Rt[6*s+o]=s;const q=new Array(36);for(let s=0;s<6;s++)q[6*s]=0,q[6*s+1]=1,q[6*s+2]=2,q[6*s+3]=2,q[6*s+4]=3,q[6*s+5]=0;function u0(s,o){Array.isArray(o)||(o=[o,o,o]);const n=new Array(24);for(let t=0;t<8;t++)n[3*t]=ft[t][0]*o[0],n[3*t+1]=ft[t][1]*o[1],n[3*t+2]=ft[t][2]*o[2];return new B(s,[[m.POSITION,new R(n,zt,3,!0)],[m.NORMAL,new R(Dt,Rt,3)],[m.UV0,new R(kt,q,2)]])}const it=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Xt=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],qt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Zt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function c0(s,o){Array.isArray(o)||(o=[o,o,o]);const n=new Array(18);for(let t=0;t<6;t++)n[3*t]=it[t][0]*o[0],n[3*t+1]=it[t][1]*o[1],n[3*t+2]=it[t][2]*o[2];return new B(s,[[m.POSITION,new R(n,qt,3,!0)],[m.NORMAL,new R(Xt,Zt,3)]])}const et=b(-.5,0,-.5),st=b(.5,0,-.5),ot=b(0,0,.5),rt=b(0,.5,0),H=x(),J=x(),Q=x(),W=x(),j=x();V(H,et,rt),V(J,et,st),z(Q,H,J),U(Q,Q),V(H,st,rt),V(J,st,ot),z(W,H,J),U(W,W),V(H,ot,rt),V(J,ot,et),z(j,H,J),U(j,j);const Ot=[et,st,ot,rt],Ht=[0,-1,0,Q[0],Q[1],Q[2],W[0],W[1],W[2],j[0],j[1],j[2]],Jt=[0,1,2,3,1,0,3,2,1,3,0,2],Kt=[0,0,0,1,1,1,2,2,2,3,3,3];function f0(s,o){Array.isArray(o)||(o=[o,o,o]);const n=new Array(12);for(let t=0;t<4;t++)n[3*t]=Ot[t][0]*o[0],n[3*t+1]=Ot[t][1]*o[1],n[3*t+2]=Ot[t][2]*o[2];return new B(s,[[m.POSITION,new R(n,Jt,3,!0)],[m.NORMAL,new R(Ht,Kt,3)]])}function i0(s,o,n,t,r={uv:!0}){const w=-Math.PI,e=2*Math.PI,c=-Math.PI/2,h=Math.PI,l=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(t)),i=(l+1)*(a+1),d=G(3*i),T=G(3*i),N=G(2*i),O=[];let f=0;for(let M=0;M<=a;M++){const F=[],u=M/a,y=c+u*h,P=Math.cos(y);for(let L=0;L<=l;L++){const D=L/l,I=w+D*e,_=Math.cos(I)*P,S=Math.sin(y),tt=-Math.sin(I)*P;d[3*f]=_*o,d[3*f+1]=S*o,d[3*f+2]=tt*o,T[3*f]=_,T[3*f+1]=S,T[3*f+2]=tt,N[2*f]=D,N[2*f+1]=u,F.push(f),++f}O.push(F)}const A=new Array;for(let M=0;M<a;M++)for(let F=0;F<l;F++){const u=O[M][F],y=O[M][F+1],P=O[M+1][F+1],L=O[M+1][F];M===0?(A.push(u),A.push(P),A.push(L)):M===a-1?(A.push(u),A.push(y),A.push(P)):(A.push(u),A.push(y),A.push(P),A.push(P),A.push(L),A.push(u))}const g=[[m.POSITION,new R(d,A,3,!0)],[m.NORMAL,new R(T,A,3,!0)]];return r.uv&&g.push([m.UV0,new R(N,A,2,!0)]),r.offset&&(g[0][0]=m.OFFSET,g.push([m.POSITION,new R(Float64Array.from(r.offset),Pt(A.length),3,!0)])),new B(s,g)}function O0(s,o,n,t){const r=Qt(o,n);return new B(s,r)}function Qt(s,o,n){let t,r;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let h=0;h<t.length;h+=3)Z.scale(t,h,s/Z.length(t,h));let w={};function e(h,l){h>l&&([h,l]=[l,h]);const a=h.toString()+"."+l.toString();if(w[a])return w[a];let i=t.length;return t.length+=3,Z.add(t,3*h,t,3*l,t,i),Z.scale(t,i,s/Z.length(t,i)),i/=3,w[a]=i,i}for(let h=0;h<o;h++){const l=r.length,a=new Array(4*l);for(let i=0;i<l;i+=3){const d=r[i],T=r[i+1],N=r[i+2],O=e(d,T),f=e(T,N),A=e(N,d),g=4*i;a[g]=d,a[g+1]=O,a[g+2]=A,a[g+3]=T,a[g+4]=f,a[g+5]=O,a[g+6]=N,a[g+7]=A,a[g+8]=f,a[g+9]=O,a[g+10]=f,a[g+11]=A}r=a,w={}}const c=pt(t);for(let h=0;h<c.length;h+=3)Z.normalize(c,h);return[[m.POSITION,new R(pt(t),r,3,!0)],[m.NORMAL,new R(c,r,3,!0)]]}function A0(s,o,n,t,r,w,e,c,h,l=null){const a=n?Mt(n):v(),i=o?Mt(o):Gt(0,0,1),d=t?[255*t[0],255*t[1],255*t[2],t.length>3?255*t[3]:255]:[255,255,255,255],T=w!=null&&w.length===2?w:[1,1],N=r!=null?[r]:[0],O=Pt(1),f=[[m.POSITION,new R(a,O,3,!0)],[m.NORMAL,new R(i,O,3,!0)],[m.COLOR,new R(d,O,4,!0)],[m.SIZE,new R(T,O,2)],[m.ROTATION,new R(N,O,1,!0)]];if(c&&f.push([m.UV0,new R(c,O,c.length)]),e!=null&&(e=[e[0],e[1],e[2],e[3]],f.push([m.CENTEROFFSETANDDISTANCE,new R(e,O,4)])),h){const A=[h[0],h[1],h[2],h[3]];f.push([m.FEATUREATTRIBUTE,new R(A,O,4)])}return new B(s,f,null,dt.Point,l)}function Wt(s,o,n,t,r=!0,w=!0){let e=0;const c=o,h=s;let l=b(0,e,0),a=b(0,e+h,0),i=b(0,-1,0),d=b(0,1,0);t&&(e=h,a=b(0,0,0),l=b(0,e,0),i=b(0,1,0),d=b(0,-1,0));const T=[a,l],N=[i,d],O=n+2,f=Math.sqrt(h*h+c*c);if(t)for(let u=n-1;u>=0;u--){const y=u*(2*Math.PI/n),P=b(Math.cos(y)*c,e,Math.sin(y)*c);T.push(P);const L=b(h*Math.cos(y)/f,-c/f,h*Math.sin(y)/f);N.push(L)}else for(let u=0;u<n;u++){const y=u*(2*Math.PI/n),P=b(Math.cos(y)*c,e,Math.sin(y)*c);T.push(P);const L=b(h*Math.cos(y)/f,c/f,h*Math.sin(y)/f);N.push(L)}const A=new Array,g=new Array;if(r){for(let u=3;u<T.length;u++)A.push(1),A.push(u-1),A.push(u),g.push(0),g.push(0),g.push(0);A.push(T.length-1),A.push(2),A.push(1),g.push(0),g.push(0),g.push(0)}if(w){for(let u=3;u<T.length;u++)A.push(u),A.push(u-1),A.push(0),g.push(u),g.push(u-1),g.push(1);A.push(0),A.push(2),A.push(T.length-1),g.push(1),g.push(2),g.push(N.length-1)}const M=G(3*O);for(let u=0;u<O;u++)M[3*u]=T[u][0],M[3*u+1]=T[u][1],M[3*u+2]=T[u][2];const F=G(3*O);for(let u=0;u<O;u++)F[3*u]=N[u][0],F[3*u+1]=N[u][1],F[3*u+2]=N[u][2];return[[m.POSITION,new R(M,A,3,!0)],[m.NORMAL,new R(F,g,3,!0)]]}function g0(s,o,n,t,r,w=!0,e=!0){return new B(s,Wt(o,n,t,r,w,e))}function w0(s,o,n,t,r,w,e){const c=r?It(r):b(1,0,0),h=w?It(w):b(0,0,0);e??(e=!0);const l=x();U(l,c);const a=x();C(a,l,Math.abs(o));const i=x();C(i,a,-.5),E(i,i,h);const d=b(0,1,0);Math.abs(1-yt(l,d))<.2&&lt(d,0,0,1);const T=x();z(T,l,d),U(T,T),z(d,T,l);const N=2*t+(e?2:0),O=t+(e?2:0),f=G(3*N),A=G(3*O),g=G(2*N),M=new Array(3*t*(e?4:2)),F=new Array(3*t*(e?4:2));e&&(f[3*(N-2)]=i[0],f[3*(N-2)+1]=i[1],f[3*(N-2)+2]=i[2],g[2*(N-2)]=0,g[2*(N-2)+1]=0,f[3*(N-1)]=f[3*(N-2)]+a[0],f[3*(N-1)+1]=f[3*(N-2)+1]+a[1],f[3*(N-1)+2]=f[3*(N-2)+2]+a[2],g[2*(N-1)]=1,g[2*(N-1)+1]=1,A[3*(O-2)]=-l[0],A[3*(O-2)+1]=-l[1],A[3*(O-2)+2]=-l[2],A[3*(O-1)]=l[0],A[3*(O-1)+1]=l[1],A[3*(O-1)+2]=l[2]);const u=(I,_,S)=>{M[I]=_,F[I]=S};let y=0;const P=x(),L=x();for(let I=0;I<t;I++){const _=I*(2*Math.PI/t);C(P,d,Math.sin(_)),C(L,T,Math.cos(_)),E(P,P,L),A[3*I]=P[0],A[3*I+1]=P[1],A[3*I+2]=P[2],C(P,P,n),E(P,P,i),f[3*I]=P[0],f[3*I+1]=P[1],f[3*I+2]=P[2],g[2*I]=I/t,g[2*I+1]=0,f[3*(I+t)]=f[3*I]+a[0],f[3*(I+t)+1]=f[3*I+1]+a[1],f[3*(I+t)+2]=f[3*I+2]+a[2],g[2*(I+t)]=I/t,g[2*I+1]=1;const S=(I+1)%t;u(y++,I,I),u(y++,I+t,I),u(y++,S,S),u(y++,S,S),u(y++,I+t,I),u(y++,S+t,S)}if(e){for(let I=0;I<t;I++){const _=(I+1)%t;u(y++,N-2,O-2),u(y++,I,O-2),u(y++,_,O-2)}for(let I=0;I<t;I++){const _=(I+1)%t;u(y++,I+t,O-1),u(y++,N-1,O-1),u(y++,_+t,O-1)}}const D=[[m.POSITION,new R(f,M,3,!0)],[m.NORMAL,new R(A,F,3,!0)],[m.UV0,new R(g,M,2,!0)]];return new B(s,D)}function M0(s,o,n,t,r,w){t=t||10,r=r==null||r,$(o.length>1);const e=[[0,0,0]],c=[],h=[];for(let l=0;l<t;l++){c.push([0,-l-1,-(l+1)%t-1]);const a=l/t*2*Math.PI;h.push([Math.cos(a)*n,Math.sin(a)*n])}return jt(s,h,o,e,c,r,w)}function jt(s,o,n,t,r,w,e=b(0,0,0)){const c=o.length,h=G(n.length*c*3+(6*t.length||0)),l=G(n.length*c*3+(t?6:0)),a=new Array,i=new Array;let d=0,T=0;const N=v(),O=v(),f=v(),A=v(),g=v(),M=v(),F=v(),u=v(),y=v(),P=v(),L=v(),D=v(),I=v(),_=_t();lt(y,0,1,0),V(O,n[1],n[0]),U(O,O),w?(E(u,n[0],e),U(f,u)):lt(f,0,0,1),mt(O,f,y,y,g,f,Tt),Y(A,f),Y(D,g);for(let p=0;p<t.length;p++)C(M,g,t[p][0]),C(u,f,t[p][2]),E(M,M,u),E(M,M,n[0]),h[d++]=M[0],h[d++]=M[1],h[d++]=M[2];l[T++]=-O[0],l[T++]=-O[1],l[T++]=-O[2];for(let p=0;p<r.length;p++)a.push(r[p][0]>0?r[p][0]:-r[p][0]-1+t.length),a.push(r[p][1]>0?r[p][1]:-r[p][1]-1+t.length),a.push(r[p][2]>0?r[p][2]:-r[p][2]-1+t.length),i.push(0),i.push(0),i.push(0);let S=t.length;const tt=t.length-1;for(let p=0;p<n.length;p++){let wt=!1;p>0&&(Y(N,O),p<n.length-1?(V(O,n[p+1],n[p]),U(O,O)):wt=!0,E(P,N,O),U(P,P),E(L,n[p-1],A),Et(n[p],P,_),Ct(_,xt(L,N),u)?(V(u,u,n[p]),U(f,u),z(g,P,f),U(g,g)):mt(P,A,D,y,g,f,Tt),Y(A,f),Y(D,g)),w&&(E(u,n[p],e),U(I,u));for(let k=0;k<c;k++)if(C(M,g,o[k][0]),C(u,f,o[k][1]),E(M,M,u),U(F,M),l[T++]=F[0],l[T++]=F[1],l[T++]=F[2],E(M,M,n[p]),h[d++]=M[0],h[d++]=M[1],h[d++]=M[2],!wt){const ut=(k+1)%c;a.push(S+k),a.push(S+c+k),a.push(S+ut),a.push(S+ut),a.push(S+c+k),a.push(S+c+ut);for(let ct=0;ct<6;ct++){const bt=a.length-6;i.push(a[bt+ct]-tt)}}S+=c}const St=n[n.length-1];for(let p=0;p<t.length;p++)C(M,g,t[p][0]),C(u,f,t[p][1]),E(M,M,u),E(M,M,St),h[d++]=M[0],h[d++]=M[1],h[d++]=M[2];const at=T/3;l[T++]=O[0],l[T++]=O[1],l[T++]=O[2];const ht=S-c;for(let p=0;p<r.length;p++)a.push(r[p][0]>=0?S+r[p][0]:-r[p][0]-1+ht),a.push(r[p][2]>=0?S+r[p][2]:-r[p][2]-1+ht),a.push(r[p][1]>=0?S+r[p][1]:-r[p][1]-1+ht),i.push(at),i.push(at),i.push(at);const Ft=[[m.POSITION,new R(h,a,3,!0)],[m.NORMAL,new R(l,i,3,!0)]];return new B(s,Ft)}function I0(s,o,n,t){$(o.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),$(o[0].length===3,"createPolylineGeometry(): malformed vertex"),$(n==null||n.length===o.length,"createPolylineGeometry: need same number of points and normals"),$(n==null||n[0].length===3,"createPolylineGeometry(): malformed normal");const r=vt(3*o.length),w=new Array(2*(o.length-1));let e=0,c=0;for(let l=0;l<o.length;l++){for(let a=0;a<3;a++)r[e++]=o[l][a];l>0&&(w[c++]=l-1,w[c++]=l)}const h=[[m.POSITION,new R(r,w,3,!0)]];if(n){const l=G(3*n.length);let a=0;for(let i=0;i<o.length;i++)for(let d=0;d<3;d++)l[a++]=n[i][d];h.push([m.NORMAL,new R(l,w,3,!0)])}return t&&h.push([m.COLOR,new R(t,Vt(t.length/4),4)]),new B(s,h,null,dt.Line)}function p0(s,o,n,t,r,w=0){const e=new Array(18),c=[[-n,w,r/2],[t,w,r/2],[0,o+w,r/2],[-n,w,-r/2],[t,w,-r/2],[0,o+w,-r/2]],h=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)e[3*l]=c[l][0],e[3*l+1]=c[l][1],e[3*l+2]=c[l][2];return new B(s,[[m.POSITION,new R(e,h,3,!0)]])}function N0(s,o){const n=s.getMutableAttribute(m.POSITION).data;for(let t=0;t<n.length;t+=3){const r=n[t],w=n[t+1],e=n[t+2];lt(K,r,w,e),Ut(K,K,o),n[t]=K[0],n[t+1]=K[1],n[t+2]=K[2]}}function m0(s,o=s){const n=s.attributes,t=n.get(m.POSITION).data,r=n.get(m.NORMAL).data;if(r){const w=o.getMutableAttribute(m.NORMAL).data;for(let e=0;e<r.length;e+=3){const c=r[e+1];w[e+1]=-r[e+2],w[e+2]=c}}if(t){const w=o.getMutableAttribute(m.POSITION).data;for(let e=0;e<t.length;e+=3){const c=t[e+1];w[e+1]=-t[e+2],w[e+2]=c}}}function At(s,o,n,t,r){return!(Math.abs(yt(o,s))>r)&&(z(n,s,o),U(n,n),z(t,n,s),U(t,t),!0)}function mt(s,o,n,t,r,w,e){return At(s,o,r,w,e)||At(s,n,r,w,e)||At(s,t,r,w,e)}const Tt=.99619469809,K=v();export{mt as A,u0 as C,N0 as O,Wt as a,r0 as b,Nt as c,g0 as d,f0 as e,w0 as f,A0 as g,p0 as h,jt as i,c0 as k,h0 as l,m0 as m,l0 as n,i0 as o,M0 as p,a0 as r,O0 as s,o0 as t,I0 as w};
