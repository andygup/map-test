import{o as X}from"./floatRGBA-Dj0WGnBf.js";import{ar as Y,as as k,at as L}from"./index-CC72Q5ax.js";import{t as j}from"./CIMSymbolHelper-BHsr-sHr.js";const q=.45;function G(n,t=.5){var r;switch(n.type){case"CIMPointSymbol":{const o=n.symbolLayers;if(!o||o.length!==1)return null;const a=o[0];return a.type!=="CIMVectorMarker"?null:G(a)}case"CIMVectorMarker":{const o=n.markerGraphics;if(!o||o.length!==1)return null;const a=o[0];if(!a)return null;const i=a.geometry;if(!i)return null;const e=a.symbol;return!e||e.type!=="CIMPolygonSymbol"&&e.type!=="CIMLineSymbol"||(r=e.symbolLayers)!=null&&r.some(l=>!!l.effects)?null:{type:"sdf",geom:i,sdfPaddingRatio:t,asFill:e.type==="CIMPolygonSymbol"}}}}function U(n){return n?n.rings?n.rings:n.paths?n.paths:n.xmin!==void 0&&n.ymin!==void 0&&n.xmax!==void 0&&n.ymax!==void 0?[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]:null:null}function B(n){let t=1/0,r=-1/0,o=1/0,a=-1/0;for(const i of n)for(const e of i)e[0]<t&&(t=e[0]),e[0]>r&&(r=e[0]),e[1]<o&&(o=e[1]),e[1]>a&&(a=e[1]);return new j(t,o,r-t,a-o)}function V(n){let t=1/0,r=-1/0,o=1/0,a=-1/0;for(const i of n)for(const e of i)e[0]<t&&(t=e[0]),e[0]>r&&(r=e[0]),e[1]<o&&(o=e[1]),e[1]>a&&(a=e[1]);return[t,o,r,a]}function E(n){return n?n.rings?V(n.rings):n.paths?V(n.paths):Y(n)?[n.xmin,n.ymin,n.xmax,n.ymax]:null:null}function T(n,t){const[r,o,a,i]=E(n),e=a-r,l=i-o,m=k,c=L,f=Math.floor(.5*(m*t-c)),s=(m-2*(f+c))/Math.max(e,l),d=Math.round(e*s),h=Math.round(l*s);return{pixelDimensions:[e,l],texelDimensions:[Math.round((d+2*f)/s),Math.round((h+2*f)/s)]}}function W(n,t,r,o,a,i,e){const[l,m,c,f]=n;if(c<l||f<m)return{frameSizeRatio:0,anchorX:0,anchorY:0,widthRatio:1,sdfPaddingRatio:.5};const s=c-l,d=f-m,h=Math.max(s,d);let u=.5;if(i!=null&&r!=null){!e&&t!=null&&(i*=(t.ymax-t.ymin)/r);const C=i/(i+h);C>q&&C<1&&(u=Math.min(C+.1,.99))}const x=k,M=L,p=Math.floor(.5*(x*u-M)),g=(x-2*(p+M))/h,I=Math.round(s*g)+2*p,w=Math.round(d*g)+2*p;let y=1;t&&(y=w*(1-u)/((t.ymax-t.ymin)*g));let P=0,R=0,b=1;o&&(a?t&&r&&t.ymax-t.ymin>0&&(b=(t.xmax-t.xmin)/(t.ymax-t.ymin),P=o.x/(r*b),R=o.y/r):(P=o.x,R=o.y)),t&&(P=.5*(t.xmax+t.xmin)+P*(t.xmax-t.xmin),R=.5*(t.ymax+t.ymin)+R*(t.ymax-t.ymin)),P-=l,R-=m,P*=g,R*=g,P+=p,R+=p;let S=P/I-.5,v=R/w-.5;return a&&r&&(S*=r*b,v*=r),{frameSizeRatio:y,anchorX:S,anchorY:v,widthRatio:b,sdfPaddingRatio:u}}function Z(n){const t=U(n.geom),r=B(t),o=k,a=L,i=Math.floor(.5*(o*n.sdfPaddingRatio-a)),e=o-2*(i+a),l=e/Math.max(r.width,r.height),m=Math.round(r.width*l)+2*i,c=Math.round(r.height*l)+2*i,f=[];for(const d of t)if(d&&d.length>1){const h=[];for(const u of d){let[x,M]=u;x-=r.x,M-=r.y,x*=l,M*=l,x+=i-.5,M+=i-.5,n.asFill?h.push([x,M]):h.push([Math.round(x),Math.round(M)])}if(n.asFill){const u=h.length-1;h[0][0]===h[u][0]&&h[0][1]===h[u][1]||h.push(h[0])}f.push(h)}const s=H(f,m,c,i);return n.asFill&&J(f,m,c,i,s),{data:K(s,i),width:m,height:c,sdfPaddingRatio:n.sdfPaddingRatio,sdfDecodeCoeff:2*i/e}}function H(n,t,r,o){const a=t*r,i=new Array(a),e=o*o+1;for(let l=0;l<a;++l)i[l]=e;for(const l of n){const m=l.length;for(let c=1;c<m;++c){const f=l[c-1],s=l[c];let d,h,u,x;f[0]<s[0]?(d=f[0],h=s[0]):(d=s[0],h=f[0]),f[1]<s[1]?(u=f[1],x=s[1]):(u=s[1],x=f[1]);let M=Math.floor(d)-o,p=Math.floor(h)+o,g=Math.floor(u)-o,I=Math.floor(x)+o;M<0&&(M=0),p>t&&(p=t),g<0&&(g=0),I>r&&(I=r);const w=s[0]-f[0],y=s[1]-f[1],P=w*w+y*y;for(let R=M;R<p;R++)for(let b=g;b<I;b++){const S=R+.5,v=b+.5;let C,F,D=(S-f[0])*w+(v-f[1])*y;D<0?(C=f[0],F=f[1]):D>P?(C=s[0],F=s[1]):(D/=P,C=f[0]+D*w,F=f[1]+D*y);const z=(S-C)*(S-C)+(v-F)*(v-F),A=(r-b-1)*t+R;z<i[A]&&(i[A]=z)}}}for(let l=0;l<a;++l)i[l]=Math.sqrt(i[l]);return i}function J(n,t,r,o,a){for(const i of n){const e=i.length;for(let l=1;l<e;++l){const m=i[l-1],c=i[l];let f,s,d,h;m[0]<c[0]?(f=m[0],s=c[0]):(f=c[0],s=m[0]),m[1]<c[1]?(d=m[1],h=c[1]):(d=c[1],h=m[1]);let u=Math.floor(f),x=Math.floor(s)+1,M=Math.floor(d),p=Math.floor(h)+1;u<o&&(u=o),x>t-o&&(x=t-o),M<o&&(M=o),p>r-o&&(p=r-o);for(let g=M;g<p;++g){if(m[1]>g==c[1]>g)continue;const I=g+.5,w=(r-g-1)*t;for(let y=u;y<x;++y)y+.5<(c[0]-m[0])*(I-m[1])/(c[1]-m[1])+m[0]&&(a[w+y]=-a[w+y]);for(let y=o;y<u;++y)a[w+y]=-a[w+y]}}}}function K(n,t){const r=2*t,o=n.length,a=new Uint8Array(4*o);for(let i=0;i<o;++i){const e=.5-n[i]/r;X(e,a,4*i)}return a}export{G as a,T as c,W as h,E as m,Z as u};
