import{h as l,e as c,j as s}from"./index-DtE3oprn.js";import{u,a as p,L as d,P as x}from"./useInvalidatePolls-VL4zn4Rp.js";import{M as m}from"./card-ChpeJRTb.js";function h(){const{user:e}=l(),{data:r,error:t,isPending:o}=u({queryKey:["polls",e==null?void 0:e.id],queryFn:async()=>{const a=await(await fetch("/api/poll")).json();return!a||!a.length?[]:a.map(i=>(i.options=i.options.map(n=>!e||!e.id?n:n.allVotes.includes(e.id)?{...n,selected:!0}:n),i))}});return{polls:r,error:t,isPending:o}}const w=c("/")({component:f});function f(){const{polls:e,isPending:r,error:t}=h(),{isAuthenticated:o}=l();return p(),s.jsx(m,{children:r?s.jsx(d,{}):t?s.jsxs("p",{children:["Error: ",t.message]}):o?e&&e.length>0?s.jsx(x,{polls:e}):s.jsx("p",{className:"text-center text-xl",children:"No polls were found."}):s.jsx("p",{className:"text-center text-xl",children:"Please sign in to create and view polls"})})}export{w as Route};