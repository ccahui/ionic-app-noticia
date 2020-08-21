(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{WOXB:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_select",function(){return l}),i.d(e,"ion_select_option",function(){return b}),i.d(e,"ion_select_popover",function(){return m});var s=i("mLBW"),n=(i("TJLY"),i("vTwt")),o=i("Jbqe"),a=i("EQwm");class l{constructor(t){Object(s.m)(this,t),this.childOpts=[],this.inputId=`ion-sel-${u++}`,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=Object(s.d)(this,"ionChange",7),this.ionCancel=Object(s.d)(this,"ionCancel",7),this.ionFocus=Object(s.d)(this,"ionFocus",7),this.ionBlur=Object(s.d)(this,"ionBlur",7),this.ionStyle=Object(s.d)(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.didInit&&(this.updateOptions(),this.ionChange.emit({value:this.value}),this.emitStyle())}async selectOptionChanged(){await this.loadOptions(),this.didInit&&(this.updateOptions(),this.updateOverlayOptions(),this.emitStyle(),void 0!==this.value&&this.el.forceUpdate())}async componentDidLoad(){if(await this.loadOptions(),void 0===this.value)if(this.multiple){const t=this.childOpts.filter(t=>t.selected);this.value=t.map(t=>t.value)}else{const t=this.childOpts.find(t=>t.selected);t&&(this.value=t.value)}this.updateOptions(),this.emitStyle(),this.el.forceUpdate(),this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await e.present(),e}createOverlay(t){let e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()}updateOverlayOptions(){if(!this.overlay)return;const t=this.overlay;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(this.childOpts);break;case"popover":const e=t.querySelector("ion-select-popover");e&&(e.options=this.createPopoverOptions(this.childOpts));break;default:t.inputs=this.createAlertInputs(this.childOpts,this.multiple?"checkbox":"radio")}}createActionSheetButtons(t){const e=t.map(t=>({role:t.selected?"selected":"",text:t.textContent,handler:()=>{this.value=t.value}}));return e.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),e}createAlertInputs(t,e){return t.map(t=>({type:e,label:t.textContent,value:t.value,checked:t.selected,disabled:t.disabled}))}createPopoverOptions(t){return t.map(t=>({text:t.textContent,value:t.value,checked:t.selected,disabled:t.disabled,handler:()=>{this.value=t.value,this.close()}}))}async openPopover(t){const e=this.interfaceOptions,i=Object(s.e)(this),o=Object.assign({mode:i},e,{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:this.value,options:this.createPopoverOptions(this.childOpts)}});return n.d.create(o)}async openActionSheet(){const t=Object(s.e)(this),e=this.interfaceOptions,i=Object.assign({mode:t},e,{buttons:this.createActionSheetButtons(this.childOpts),cssClass:["select-action-sheet",e.cssClass]});return n.c.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,o=this.multiple?"checkbox":"radio",a=Object(s.e)(this),l=Object.assign({mode:a},i,{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,o),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return n.b.create(l)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}async loadOptions(){this.childOpts=await Promise.all(Array.from(this.el.querySelectorAll("ion-select-option")).map(t=>t.componentOnReady()))}updateOptions(){let t=!0;for(const e of this.childOpts){const i=t&&c(this.value,e.value,this.compareWith);e.selected=i,i&&!this.multiple&&(t=!1)}}getLabel(){return Object(a.f)(this.el)}hasValue(){return""!==this.getText()}getText(){const t=this.selectedText;return null!=t&&""!==t?t:h(this.childOpts,this.value,this.compareWith)}setFocus(){this.buttonEl&&this.buttonEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{placeholder:t,name:e,disabled:i,isExpanded:n,value:l,el:c}=this,d=Object(s.e)(this),h=this.inputId+"-lbl",p=Object(a.f)(c);p&&(p.id=h);let u=!1,b=this.getText();""===b&&null!=t&&(b=t,u=!0),Object(a.k)(!0,c,e,r(l),i);const v={"select-text":!0,"select-placeholder":u};return Object(s.i)(s.a,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":i?"true":null,"aria-expanded":`${n}`,"aria-labelledby":h,class:{[d]:!0,"in-item":Object(o.c)("ion-item",c),"select-disabled":i}},Object(s.i)("div",{class:v},b),Object(s.i)("div",{class:"select-icon",role:"presentation"},Object(s.i)("div",{class:"select-icon-inner"})),Object(s.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:i,ref:t=>this.buttonEl=t}))}get el(){return Object(s.f)(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}static get style(){return":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}"}}const r=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},c=(t,e,i)=>void 0!==t&&(Array.isArray(t)?t.some(t=>d(t,e,i)):d(t,e,i)),d=(t,e,i)=>"function"==typeof i?i(t,e):"string"==typeof i?t[i]===e[i]:t===e,h=(t,e,i)=>void 0===e?"":Array.isArray(e)?e.map(e=>p(t,e,i)).filter(t=>null!==t).join(", "):p(t,e,i)||"",p=(t,e,i)=>{const s=t.find(t=>d(t.value,e,i));return s?s.textContent:null};let u=0;class b{constructor(t){Object(s.m)(this,t),this.inputId=`ion-selopt-${v++}`,this.disabled=!1,this.selected=!1,this.ionSelectOptionDidLoad=Object(s.d)(this,"ionSelectOptionDidLoad",7),this.ionSelectOptionDidUnload=Object(s.d)(this,"ionSelectOptionDidUnload",7)}componentWillLoad(){void 0===this.value&&(this.value=this.el.textContent||"")}componentDidLoad(){this.ionSelectOptionDidLoad.emit()}componentDidUnload(){this.ionSelectOptionDidUnload.emit()}hostData(){const t=Object(s.e)(this);return{role:"option",id:this.inputId,class:{[t]:!0}}}get el(){return Object(s.f)(this)}render(){return Object(s.i)(s.a,this.hostData())}static get style(){return":host{display:none}"}}let v=0;class m{constructor(t){Object(s.m)(this,t),this.options=[]}onSelect(t){const e=this.options.find(e=>e.value===t.target.value);e&&Object(n.o)(e.handler)}hostData(){return{class:{[Object(s.e)(this)]:!0}}}__stencil_render(){return Object(s.i)("ion-list",null,void 0!==this.header&&Object(s.i)("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&Object(s.i)("ion-item",null,Object(s.i)("ion-label",{"text-wrap":!0},void 0!==this.subHeader&&Object(s.i)("h3",null,this.subHeader),void 0!==this.message&&Object(s.i)("p",null,this.message))),Object(s.i)("ion-radio-group",null,this.options.map(t=>Object(s.i)("ion-item",null,Object(s.i)("ion-label",null,t.text),Object(s.i)("ion-radio",{checked:t.checked,value:t.value,disabled:t.disabled})))))}render(){return Object(s.i)(s.a,this.hostData(),this.__stencil_render())}static get style(){return".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}}]);