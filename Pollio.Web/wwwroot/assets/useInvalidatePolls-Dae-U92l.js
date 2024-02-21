var X=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(X(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},u=(e,t,s,i)=>(X(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var p=(e,t,s)=>(X(e,t,"access private method"),s);import{c as St,S as It,s as Y,n as wt,i as ft,k as pt,t as Et,l as Qt,m as Pt,o as mt,p as Rt,r as g,d as ot,j as n,b as xt,h as Ut,a as G,L as Ft,q as Lt}from"./index-CTLQgVu5.js";import{s as Tt,u as kt,C as Dt,b as Nt,c as yt,d as Mt,a as At,e as Vt}from"./card-Ba72JlLp.js";/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=St("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var b,c,k,y,S,Q,C,D,P,U,I,w,O,F,E,T,N,Z,M,tt,A,et,V,st,z,rt,B,it,q,at,$,Ct,gt,Bt=(gt=class extends It{constructor(t,s){super();l(this,E);l(this,N);l(this,M);l(this,A);l(this,V);l(this,z);l(this,B);l(this,q);l(this,$);l(this,b,void 0);l(this,c,void 0);l(this,k,void 0);l(this,y,void 0);l(this,S,void 0);l(this,Q,void 0);l(this,C,void 0);l(this,D,void 0);l(this,P,void 0);l(this,U,void 0);l(this,I,void 0);l(this,w,void 0);l(this,O,void 0);l(this,F,new Set);this.options=s,u(this,b,t),u(this,C,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,c).addObserver(this),bt(r(this,c),this.options)?p(this,E,T).call(this):this.updateResult(),p(this,V,st).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return nt(r(this,c),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return nt(r(this,c),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,p(this,z,rt).call(this),p(this,B,it).call(this),r(this,c).removeObserver(this)}setOptions(t,s){const i=this.options,d=r(this,c);if(this.options=r(this,b).defaultQueryOptions(t),Y(this.options,i)||r(this,b).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,c),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");p(this,q,at).call(this);const a=this.hasListeners();a&&vt(r(this,c),d,this.options,i)&&p(this,E,T).call(this),this.updateResult(s),a&&(r(this,c)!==d||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&p(this,N,Z).call(this);const o=p(this,M,tt).call(this);a&&(r(this,c)!==d||this.options.enabled!==i.enabled||o!==r(this,O))&&p(this,A,et).call(this,o)}getOptimisticResult(t){const s=r(this,b).getQueryCache().build(r(this,b),t),i=this.createResult(s,t);return $t(this,i)&&(u(this,y,i),u(this,Q,this.options),u(this,S,r(this,c).state)),i}getCurrentResult(){return r(this,y)}trackResult(t){const s={};return Object.keys(t).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(r(this,F).add(i),t[i])})}),s}getCurrentQuery(){return r(this,c)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=r(this,b).defaultQueryOptions(t),i=r(this,b).getQueryCache().build(r(this,b),s);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,s))}fetch(t){return p(this,E,T).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,y)))}createResult(t,s){var dt;const i=r(this,c),d=this.options,a=r(this,y),o=r(this,S),f=r(this,Q),m=t!==i?t.state:r(this,k),{state:h}=t;let{error:H,errorUpdatedAt:ht,fetchStatus:L,status:j}=h,lt=!1,x;if(s._optimisticResults){const v=this.hasListeners(),J=!v&&bt(t,s),Ot=v&&vt(t,i,s,d);(J||Ot)&&(L=Pt(t.options.networkMode)?"fetching":"paused",h.dataUpdatedAt||(j="pending")),s._optimisticResults==="isRestoring"&&(L="idle")}if(s.select&&typeof h.data<"u")if(a&&h.data===(o==null?void 0:o.data)&&s.select===r(this,D))x=r(this,P);else try{u(this,D,s.select),x=s.select(h.data),x=mt(a==null?void 0:a.data,x,s),u(this,P,x),u(this,C,null)}catch(v){u(this,C,v)}else x=h.data;if(typeof s.placeholderData<"u"&&typeof x>"u"&&j==="pending"){let v;if(a!=null&&a.isPlaceholderData&&s.placeholderData===(f==null?void 0:f.placeholderData))v=a.data;else if(v=typeof s.placeholderData=="function"?s.placeholderData((dt=r(this,U))==null?void 0:dt.state.data,r(this,U)):s.placeholderData,s.select&&typeof v<"u")try{v=s.select(v),u(this,C,null)}catch(J){u(this,C,J)}typeof v<"u"&&(j="success",x=mt(a==null?void 0:a.data,v,s),lt=!0)}r(this,C)&&(H=r(this,C),x=r(this,P),ht=Date.now(),j="error");const K=L==="fetching",W=j==="pending",_=j==="error",ut=W&&K;return{status:j,fetchStatus:L,isPending:W,isSuccess:j==="success",isError:_,isInitialLoading:ut,isLoading:ut,data:x,dataUpdatedAt:h.dataUpdatedAt,error:H,errorUpdatedAt:ht,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>m.dataUpdateCount||h.errorUpdateCount>m.errorUpdateCount,isFetching:K,isRefetching:K&&!W,isLoadingError:_&&h.dataUpdatedAt===0,isPaused:L==="paused",isPlaceholderData:lt,isRefetchError:_&&h.dataUpdatedAt!==0,isStale:ct(t,s),refetch:this.refetch}}updateResult(t){const s=r(this,y),i=this.createResult(r(this,c),this.options);if(u(this,S,r(this,c).state),u(this,Q,this.options),r(this,S).data!==void 0&&u(this,U,r(this,c)),Y(i,s))return;u(this,y,i);const d={},a=()=>{if(!s)return!0;const{notifyOnChangeProps:o}=this.options,f=typeof o=="function"?o():o;if(f==="all"||!f&&!r(this,F).size)return!0;const R=new Set(f??r(this,F));return this.options.throwOnError&&R.add("error"),Object.keys(r(this,y)).some(m=>{const h=m;return r(this,y)[h]!==s[h]&&R.has(h)})};(t==null?void 0:t.listeners)!==!1&&a()&&(d.listeners=!0),p(this,$,Ct).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&p(this,V,st).call(this)}},b=new WeakMap,c=new WeakMap,k=new WeakMap,y=new WeakMap,S=new WeakMap,Q=new WeakMap,C=new WeakMap,D=new WeakMap,P=new WeakMap,U=new WeakMap,I=new WeakMap,w=new WeakMap,O=new WeakMap,F=new WeakMap,E=new WeakSet,T=function(t){p(this,q,at).call(this);let s=r(this,c).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(wt)),s},N=new WeakSet,Z=function(){if(p(this,z,rt).call(this),ft||r(this,y).isStale||!pt(this.options.staleTime))return;const s=Et(r(this,y).dataUpdatedAt,this.options.staleTime)+1;u(this,I,setTimeout(()=>{r(this,y).isStale||this.updateResult()},s))},M=new WeakSet,tt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,c)):this.options.refetchInterval)??!1},A=new WeakSet,et=function(t){p(this,B,it).call(this),u(this,O,t),!(ft||this.options.enabled===!1||!pt(r(this,O))||r(this,O)===0)&&u(this,w,setInterval(()=>{(this.options.refetchIntervalInBackground||Qt.isFocused())&&p(this,E,T).call(this)},r(this,O)))},V=new WeakSet,st=function(){p(this,N,Z).call(this),p(this,A,et).call(this,p(this,M,tt).call(this))},z=new WeakSet,rt=function(){r(this,I)&&(clearTimeout(r(this,I)),u(this,I,void 0))},B=new WeakSet,it=function(){r(this,w)&&(clearInterval(r(this,w)),u(this,w,void 0))},q=new WeakSet,at=function(){const t=r(this,b).getQueryCache().build(r(this,b),this.options);if(t===r(this,c))return;const s=r(this,c);u(this,c,t),u(this,k,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},$=new WeakSet,Ct=function(t){Rt.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(r(this,y))}),r(this,b).getQueryCache().notify({query:r(this,c),type:"observerResultsUpdated"})})},gt);function qt(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function bt(e,t){return qt(e,t)||e.state.dataUpdatedAt>0&&nt(e,t,t.refetchOnMount)}function nt(e,t,s){if(t.enabled!==!1){const i=typeof s=="function"?s(e):s;return i==="always"||i!==!1&&ct(e,t)}return!1}function vt(e,t,s,i){return s.enabled!==!1&&(e!==t||i.enabled===!1)&&(!s.suspense||e.state.status!=="error")&&ct(e,s)}function ct(e,t){return e.isStaleByTime(t.staleTime)}function $t(e,t){return!Y(e.getCurrentResult(),t)}var jt=g.createContext(!1),Ht=()=>g.useContext(jt);jt.Provider;function Kt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Wt=g.createContext(Kt()),_t=()=>g.useContext(Wt),Jt=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},Xt=e=>{g.useEffect(()=>{e.clearReset()},[e])},Gt=({result:e,errorResetBoundary:t,throwOnError:s,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&Tt(s,[e.error,i]),Yt=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},Zt=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,te=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function ee(e,t,s){const i=ot(s),d=Ht(),a=_t(),o=i.defaultQueryOptions(e);o._optimisticResults=d?"isRestoring":"optimistic",Yt(o),Jt(o,a),Xt(a);const[f]=g.useState(()=>new t(i,o)),R=f.getOptimisticResult(o);if(g.useSyncExternalStore(g.useCallback(m=>{const h=d?()=>{}:f.subscribe(Rt.batchCalls(m));return f.updateResult(),h},[f,d]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),g.useEffect(()=>{f.setOptions(o,{listeners:!1})},[o,f]),Zt(o,R))throw te(o,f,a);if(Gt({result:R,errorResetBoundary:a,throwOnError:o.throwOnError,query:i.getQueryCache().get(o.queryHash)}))throw R.error;return o.notifyOnChangeProps?R:f.trackResult(R)}function le(e,t){return ee(e,Bt,t)}function ue(){return n.jsxs("div",{className:"flex w-full justify-center gap-2",children:[n.jsx(zt,{className:"animate-spin",size:24}),n.jsx("span",{children:"Loading..."})]})}function se(){const{connection:e}=xt("/r/pollhub"),t=ot(),{mutate:s,isPending:i,error:d}=kt({mutationFn:async a=>{await fetch("/api/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})},onSuccess:()=>{t.invalidateQueries({queryKey:["polls"]}),e==null||e.invoke("SendVote")}});return{makeVote:s,isVoting:i,error:d}}function re({pollId:e,options:t,totalVotes:s}){const[i,d]=g.useState(null),{user:a,login:o}=Ut(),{makeVote:f}=se();g.useEffect(()=>{const m=t.find(h=>h.selected);d(m?m.id:null)},[t]);async function R(m){if(!a||!a.id){o();return}d(m),f({pollId:e,optionId:m,userId:a.id})}return n.jsx("div",{className:"grid gap-2",children:t.map(m=>n.jsx(ie,{totalVotes:s,selected:i,onSelected:R,option:m},m.id))})}function ie({option:e,totalVotes:t,selected:s,hover:i=!0,onSelected:d}){const a=e.votes===0?0:e.votes/t*100;return s===e.id?n.jsxs("div",{onClick:()=>d(null),className:G("border p-5 transition-colors cursor-pointer border-primary bg-transparent relative z-10",{"hover:border-primary hover:border-2":i}),children:[n.jsxs("div",{className:"z-10 relative flex items-center justify-between",children:[n.jsx("span",{children:e.text}),n.jsxs("span",{children:[a,"%"]})]}),n.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-primary/20 z-0 transition-all",style:{width:`${a}%`,transform:`translateX(${s===e.id?0:100}%)`}})]}):s?n.jsxs("div",{onClick:()=>d(e.id),className:G("border p-5 transition-colors cursor-pointer bg-transparent relative",{"hover:border-primary hover:border-2":i}),children:[n.jsxs("div",{className:"z-10 relative flex items-center justify-between",children:[n.jsx("span",{children:e.text}),n.jsxs("span",{children:[a,"%"]})]}),n.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-secondary z-0 transition-all",style:{width:`${a}%`}})]}):n.jsx("div",{onClick:()=>d(e.id),className:G("border p-5 transition-colors cursor-pointer",{"hover:border-primary hover:border-2":i}),children:e.text})}function de({polls:e}){return n.jsx("div",{className:"grid gap-6 mb-10",children:e.map(t=>n.jsx(ae,{link:!0,poll:t},t.id))})}function ae({poll:e,link:t=!1}){return n.jsxs(Dt,{children:[n.jsxs(Nt,{children:[t?n.jsx(Ft,{to:"/poll/$pollId",params:{pollId:e.id.toString()},preload:!1,children:n.jsx(yt,{children:e.question})}):n.jsx(yt,{children:e.question}),n.jsxs(Mt,{children:[e.user.name," • ",Lt(e.createdAt)]})]}),n.jsx(At,{children:n.jsx(re,{pollId:e.id,totalVotes:e.totalVotes,options:e.options})}),n.jsx(Vt,{children:n.jsxs("p",{className:"text-sm text-muted-foreground pl-2",children:[e.totalVotes," Votes"]})})]})}function fe(){const{connection:e}=xt("/r/pollhub"),t=ot();g.useEffect(()=>{if(e)return e.on("InvalidatePolls",async()=>{await t.invalidateQueries({queryKey:["polls"]})}),()=>{e.off("InvalidatePolls")}},[e,t])}export{ue as L,de as P,fe as a,ae as b,zt as c,le as u};
