import{u as F,c as E,R as l,ez as w,bq as u,_ as a,bF as v,bG as n,bH as p,bJ as C,af as f,a2 as S,n as _}from"../index-961d4ed1.js";const s=_({header:{id:"edit_email.header",defaultMessage:"Change Email"},updateEmailSuccess:{id:"security.update_email.success",defaultMessage:"Email successfully updated."},updateEmailFail:{id:"security.update_email.fail",defaultMessage:"Update email failed."},emailFieldLabel:{id:"security.fields.email.label",defaultMessage:"Email address"},emailFieldPlaceholder:{id:"edit_email.placeholder",defaultMessage:"me@example.com"},passwordFieldLabel:{id:"security.fields.password.label",defaultMessage:"Password"},submit:{id:"security.submit",defaultMessage:"Save changes"},cancel:{id:"common.cancel",defaultMessage:"Cancel"}}),g={email:"",password:""},x=()=>{const e=F(),m=E(),[b,i]=l.useState(g),[h,c]=l.useState(!1),{email:d,password:o}=b,r=l.useCallback(t=>{t.persist(),i(y=>({...y,[t.target.name]:t.target.value}))},[]),M=l.useCallback(()=>{c(!0),m(w(d,o)).then(()=>{i(g),u.success(e.formatMessage(s.updateEmailSuccess))}).finally(()=>{c(!1)}).catch(()=>{i(t=>({...t,password:""})),u.error(e.formatMessage(s.updateEmailFail))})},[d,o,m,e]);return a(S,{label:e.formatMessage(s.header),backHref:"/settings"},void 0,a(v,{onSubmit:M},void 0,a(n,{labelText:e.formatMessage(s.emailFieldLabel)},void 0,a(p,{type:"text",placeholder:e.formatMessage(s.emailFieldPlaceholder),name:"email",autoComplete:"off",onChange:r,value:d})),a(n,{labelText:e.formatMessage(s.passwordFieldLabel)},void 0,a(p,{type:"password",name:"password",onChange:r,value:o})),a(C,{},void 0,a(f,{to:"/settings",theme:"tertiary"},void 0,e.formatMessage(s.cancel)),a(f,{type:"submit",theme:"primary",disabled:h},void 0,e.formatMessage(s.submit)))))};export{x as default};
