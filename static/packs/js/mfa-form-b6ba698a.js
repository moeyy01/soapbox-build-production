import{r as n,u as y,c as _,q as S,eV as P,bq as g,_ as e,bJ as k,af as M,bG as C,K as c,bH as F,a8 as p,G as f,bF as x,n as v,eW as I,aE as q,eX as B,eY as E,ep as T,p as L,a2 as D}from"../index-961d4ed1.js";import{Q as O}from"./index-c24a8ba4.js";const b=v({mfa_setup_disable_button:{id:"column.mfa_disable_button",defaultMessage:"Disable"},disableFail:{id:"security.disable.fail",defaultMessage:"Incorrect password. Try again."},mfaDisableSuccess:{id:"mfa.disable.success_message",defaultMessage:"MFA disabled"},passwordPlaceholder:{id:"mfa.mfa_setup.password_placeholder",defaultMessage:"Password"}}),R=()=>{const[s,l]=n.useState(!1),[r,t]=n.useState(""),a=y(),u=_(),i=S(),d=n.useCallback(()=>{l(!0),u(P("totp",r)).then(()=>{g.success(a.formatMessage(b.mfaDisableSuccess)),i.push("../auth/edit")}).finally(()=>{l(!1)}).catch(()=>{g.error(a.formatMessage(b.disableFail))})},[r,u,a]),o=h=>{t(h.target.value)};return e(x,{onSubmit:d},void 0,e(p,{},void 0,e(f,{weight:"medium"},void 0,e(c,{id:"mfa.otp_enabled_title",defaultMessage:"OTP Enabled"})),e(f,{theme:"muted"},void 0,e(c,{id:"mfa.otp_enabled_description",defaultMessage:"You have enabled two-factor authentication via OTP."}))),e(C,{labelText:a.formatMessage(b.passwordPlaceholder),hintText:e(c,{id:"mfa.mfa_disable_enter_password",defaultMessage:"Enter your current password to disable two-factor auth."})},void 0,e(F,{type:"password",placeholder:a.formatMessage(b.passwordPlaceholder),name:"password",onChange:o,disabled:s,value:r,required:!0})),e(k,{},void 0,e(M,{disabled:s,theme:"danger",type:"submit",text:a.formatMessage(b.mfa_setup_disable_button)})))},w=v({mfaCancelButton:{id:"column.mfa_cancel",defaultMessage:"Cancel"},mfaSetupButton:{id:"column.mfa_setup",defaultMessage:"Proceed to Setup"},codesFail:{id:"security.codes.fail",defaultMessage:"Failed to fetch backup codes"}}),A=s=>{let{displayOtpForm:l,handleSetupProceedClick:r}=s;const t=_(),a=y(),u=S(),[i,d]=n.useState([]);return n.useEffect(()=>{t(I()).then(o=>{let{codes:h}=o;d(h)}).catch(()=>{g.error(a.formatMessage(w.codesFail))})},[]),e(p,{space:4},void 0,e(p,{space:4},void 0,e(f,{theme:"muted"},void 0,e(c,{id:"mfa.setup_warning",defaultMessage:"Write these codes down or save them somewhere secure - otherwise you won't see them again. If you lose access to your 2FA app and recovery codes you'll be locked out of your account."})),e("div",{className:"rounded-lg border-2 border-solid border-gray-200 p-4 dark:border-gray-800"},void 0,e(p,{space:3},void 0,e(f,{weight:"medium",align:"center"},void 0,e(c,{id:"mfa.setup_recoverycodes",defaultMessage:"Recovery codes"})),i.length>0?e("div",{className:"grid grid-cols-2 gap-3 rounded-lg text-center"},void 0,i.map((o,h)=>e(f,{theme:"muted",size:"sm"},h,o))):e(q,{})))),!l&&e(k,{},void 0,e(M,{theme:"tertiary",text:a.formatMessage(w.mfaCancelButton),onClick:()=>u.push("../auth/edit")}),i.length>0&&e(M,{theme:"primary",text:a.formatMessage(w.mfaSetupButton),onClick:r})))},m=v({mfaCancelButton:{id:"column.mfa_cancel",defaultMessage:"Cancel"},mfaSetupConfirmButton:{id:"column.mfa_confirm_button",defaultMessage:"Confirm"},confirmFail:{id:"security.confirm.fail",defaultMessage:"Incorrect code or password. Try again."},qrFail:{id:"security.qr.fail",defaultMessage:"Failed to fetch setup key"},mfaConfirmSuccess:{id:"mfa.confirm.success_message",defaultMessage:"MFA confirmed"},codePlaceholder:{id:"mfa.mfa_setup.code_placeholder",defaultMessage:"Code"},passwordPlaceholder:{id:"mfa.mfa_setup.password_placeholder",defaultMessage:"Password"}}),K=()=>{const s=y(),l=S(),r=_(),[t,a]=n.useState({password:"",isLoading:!1,code:"",qrCodeURI:"",confirmKey:""});n.useEffect(()=>{r(B("totp")).then(d=>{a(o=>({...o,qrCodeURI:d.provisioning_uri,confirmKey:d.key}))}).catch(()=>{g.error(s.formatMessage(m.qrFail))})},[]);const u=n.useCallback(d=>{d.persist(),a(o=>({...o,[d.target.name]:d.target.value}))},[]);return e(p,{space:4},void 0,e(x,{onSubmit:d=>{a(o=>({...o,isLoading:!0})),r(E("totp",t.code,t.password)).then(o=>{g.success(s.formatMessage(m.mfaConfirmSuccess)),l.push("../auth/edit")}).catch(()=>{g.error(s.formatMessage(m.confirmFail)),a(o=>({...o,isLoading:!1}))}),d.preventDefault()}},void 0,e(p,{},void 0,e(f,{weight:"semibold",size:"lg"},void 0,"1. ",e(c,{id:"mfa.mfa_setup_scan_title",defaultMessage:"Scan"})),e(f,{theme:"muted"},void 0,e(c,{id:"mfa.mfa_setup_scan_description",defaultMessage:"Using your two-factor app, scan this QR code or enter the text key."}))),e(O,{className:"rounded-lg",value:t.qrCodeURI,includeMargin:!0}),t.confirmKey,e(f,{weight:"semibold",size:"lg"},void 0,"2. ",e(c,{id:"mfa.mfa_setup_verify_title",defaultMessage:"Verify"})),e(C,{labelText:s.formatMessage(m.codePlaceholder),hintText:e(c,{id:"mfa.mfa_setup.code_hint",defaultMessage:"Enter the code from your two-factor app."})},void 0,e(F,{name:"code",placeholder:s.formatMessage(m.codePlaceholder),onChange:u,autoComplete:"off",disabled:t.isLoading,value:t.code,type:"text",required:!0})),e(C,{labelText:s.formatMessage(m.passwordPlaceholder),hintText:e(c,{id:"mfa.mfa_setup.password_hint",defaultMessage:"Enter your current password to confirm your identity."})},void 0,e(F,{type:"password",name:"password",placeholder:s.formatMessage(m.passwordPlaceholder),onChange:u,disabled:t.isLoading,value:t.password,required:!0})),e(k,{},void 0,e(M,{type:"button",theme:"tertiary",text:s.formatMessage(m.mfaCancelButton),onClick:()=>l.push("../auth/edit"),disabled:t.isLoading}),e(M,{type:"submit",theme:"primary",text:s.formatMessage(m.mfaSetupConfirmButton),disabled:t.isLoading}))))},U=v({heading:{id:"column.mfa",defaultMessage:"Multi-Factor Authentication"}}),N=()=>{const s=y(),l=_(),[r,t]=n.useState(!1);n.useEffect(()=>{l(T())},[]);const a=i=>{i.preventDefault(),t(!0)},u=L(i=>i.security.get("mfa"));return e(D,{label:s.formatMessage(U.heading)},void 0,u.getIn(["settings","totp"])?e(R,{}):e(p,{space:4},void 0,e(A,{displayOtpForm:r,handleSetupProceedClick:a}),r&&e(K,{})))};export{N as default};