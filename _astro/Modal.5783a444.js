import{u as a,i as r}from"./stateNano.12ba6666.js";import{j as e}from"./jsx-runtime.109e40f8.js";import"./index.f1bc5ebf.js";function o({onClose:l,children:s,data:t}){return e.jsx("div",{className:"z-10 fixed grid place-items-center top-0 left-0 w-screen h-screen bg-modal",children:e.jsxs("section",{className:"w-11/12 max-w-[500px] mt-14 min-h-[100px] bg-slate-100 px-8 py-4 rounded-lg",children:[e.jsxs("header",{className:"flex justify-between items-center mb-6 pb-2 border-b-2 border-primary-500",children:[e.jsx("h2",{className:"text-xl text-primary-700 font-bold capitalize",children:"bienvienido"}),e.jsx("button",{type:"button",onClick:l,className:"w-12 h-12 text-2xl text-primary-700",children:"x"})]}),e.jsxs("form",{children:[t.map(s)," ",e.jsxs("div",{className:"w-full grid grid-cols-2 auto-rows-[48px] gap-4",children:[e.jsx("button",{type:"button",className:"text-xl font-bold text-slate-400",onClick:l,children:"Cancelar"}),e.jsx("button",{type:"submit",className:"bg-primary-700 text-white font-bold text-xl rounded-xl",children:"Enviar"})]})," "]})]})})}function n({label:l,placeholder:s,use:t}){return e.jsxs("div",{className:"my-4",children:[e.jsx("label",{htmlFor:"user",className:"block text-slate-700",children:l}),e.jsx("input",{type:"text",name:t,id:t,placeholder:s,className:"block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded-xl shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100 text-base",required:!0})]})}const i=[{label:"Ingrese tu nombre",use:"user",placeholder:"Juan"},{label:"ingresa el nombre de tu mascota",use:"petName",placeholder:"mantequilla"},{label:"¿Qué problema tiene tu mascata?",use:"description",placeholder:"le duele el estomago"}];function m(){const l=a(r),s=()=>r.set(!l);return l?e.jsx(o,{onClose:s,data:i,children:t=>e.jsx(n,{label:t.label,placeholder:t.placeholder,use:t.use},t.use)}):null}export{m as Modal};
