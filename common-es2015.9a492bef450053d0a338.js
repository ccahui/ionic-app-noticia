(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1hGh":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const l="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>l.classList.add(t)),r&&Object.assign(l,r),e.appendChild(l),l.componentOnReady&&await l.componentOnReady(),l},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"7rGv":function(t,e,n){"use strict";n.d(e,"a",function(){return y}),n.d(e,"b",function(){return g}),n.d(e,"c",function(){return w}),n.d(e,"d",function(){return l});var i=n("mLBW"),r=n("9Z7W");const l=t=>new Promise((e,n)=>{Object(i.n)(()=>{o(t),a(t).then(n=>{n.animation&&n.animation.destroy(),s(t),e(n)},e=>{s(t),n(e)})})}),o=t=>{const e=t.enteringEl,n=t.leavingEl;S(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)},a=async t=>{const e=await c(t);return e?u(e,t):d(t)},s=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},c=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>n.e(97).then(n.bind(null,"0SUp")))()).iosTransitionAnimation:(await(()=>n.e(98).then(n.bind(null,"Zb87")))()).mdTransitionAnimation},u=async(t,e)=>{await h(e,!0);const i=await n.e(1).then(n.bind(null,"UGhQ")).then(n=>n.create(t,e.baseEl,e));return m(e.enteringEl,e.leavingEl),await b(i,e),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&f(e.enteringEl,e.leavingEl),{hasCompleted:i.hasCompleted,animation:i}},d=async t=>{const e=t.enteringEl,n=t.leavingEl;return await h(t,!1),m(e,n),f(e,n),{hasCompleted:!0}},h=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[y(t.enteringEl),y(t.leavingEl)]:[v(t.enteringEl),v(t.leavingEl)];await Promise.all(n),await p(t.viewIsReady,t.enteringEl)},p=async(t,e)=>{t&&await t(e)},b=(t,e)=>{const n=e.progressCallback,i=new Promise(e=>t.onFinish(e));return n?(t.progressStart(),n(t)):t.play(),i},m=(t,e)=>{g(e,r.c),g(t,r.a)},f=(t,e)=>{g(t,r.b),g(e,r.d)},g=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},v=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),y=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(y))}},w=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},S=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")}},EQwm:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return r}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return c}),n.d(e,"j",function(){return u}),n.d(e,"k",function(){return o});const i=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},r=t=>!!t.shadowRoot&&!!t.attachShadow,l=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},o=(t,e,n,i,l)=>{if(t||r(e)){let t=e.querySelector("input.aux-input");t||((t=e.ownerDocument.createElement("input")).type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=l,t.name=n,t.value=i||""}},a=(t,e,n)=>Math.max(t,Math.min(e,n)),s=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},c=t=>t.timeStamp||Date.now(),u=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},h=(t,e)=>{const n=t._original||t;return{_original:t,emit:p(n.emit.bind(n),e)}},p=(t,e=0)=>{let n;return(...i)=>{clearTimeout(n),n=setTimeout(t,e,...i)}}},IvgT:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i=t=>{try{if("string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),i=document.createElement("div");n.appendChild(i),i.innerHTML=t,a.forEach(t=>{const e=n.querySelectorAll(t);for(let i=e.length-1;i>=0;i--){const t=e[i];t.parentNode?t.parentNode.removeChild(t):n.removeChild(t);const o=l(t);for(let e=0;e<o.length;e++)r(o[e])}});const o=l(n);for(let t=0;t<o.length;t++)r(o[t]);const s=document.createElement("div");s.appendChild(n);const c=s.querySelector("div");return null!==c?c.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},r=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes[n],i=e.name;if(!o.includes(i.toLowerCase())){t.removeAttribute(i);continue}const r=e.value;null!=r&&r.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=l(t);for(let n=0;n<e.length;n++)r(e[n])},l=t=>null!=t.children?t.children:t.childNodes,o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},Jbqe:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return l}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a});const i=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,l=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),await i.componentOnReady(),i.push(t,n)}return!1}},iTUp:function(t,e,n){"use strict";n.d(e,"a",function(){return i});class i{}},itPc:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return l}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i});const i=()=>{const t=window.TapticEngine;t&&t.selection()},r=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},l=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},j1ZV:function(t,e,n){"use strict";n.d(e,"a",function(){return i});class i{}},kVNm:function(t,e,n){"use strict";n.d(e,"a",function(){return i});class i{constructor(){this.noticias=[],this.isSpinner=!1}ngOnInit(){}}},kXsu:function(t,e,n){"use strict";var i=n("8Y7J"),r=n("oBZk"),l=n("ZZ/e");class o{transform(t){const e=(new Date).valueOf()-new Date(t).valueOf();if(e<6e4)return"Hace "+Math.round(e/1e3)+" segundos ";if(e<36e5)return"Hace "+Math.round(e/6e4)+" minutos ";if(e<864e5)return"Hace "+Math.round(e/36e5)+" horas ";if(e<2592e6){const t=Math.round(e/864e5);return 1===t?"Ayer":"Hace "+t+" dias "}return e<31536e6?"Hace "+Math.round(e/2592e6)+" meses ":"Hace "+Math.round(e/31536e6)+" a\xf1os "}}var a=n("SVse"),s=n("mrSG"),c=n("9B/o"),u=n("CjQN"),d=n("wie5");class h{constructor(t,e,n,i,r){this.iab=t,this.actionSheetController=e,this.socialSharing=n,this.dataLocal=i,this.platform=r}ngOnInit(){}abrirNoticia(){this.iab.create(this.noticia.url)}presentActionSheet(){return s.b(this,void 0,void 0,function*(){if(this.noticia.isFavorite){const t=yield this.actionSheetQuitarDeFavoritos();yield t.present()}else{const t=yield this.actionSheetAgregarAFavoritos();yield t.present()}})}actionSheetAgregarAFavoritos(){return s.b(this,void 0,void 0,function*(){return yield this.actionSheetController.create({buttons:[{text:"Favorito",icon:"star",handler:()=>{this.dataLocal.a\u00f1adirAFavoritos(this.noticia),this.noticia.isFavorite=!0}},{text:"Compartir",icon:"share",handler:()=>{this.compartirNoticiaPWA()}},{text:"Cancel",icon:"close",role:"cancel"}]})})}actionSheetQuitarDeFavoritos(){return s.b(this,void 0,void 0,function*(){return yield this.actionSheetController.create({buttons:[{text:"Quitar de Favoritos",icon:"star",handler:()=>{this.dataLocal.quitarDeFavoritos(this.noticia),this.noticia.isFavorite=!1}},{text:"Compartir",icon:"share",handler:()=>{this.compartirNoticiaPWA()}},{text:"Cancel",icon:"close",role:"cancel"}]})})}compartirNoticiaPWA(){this.platform.is("cordova")?this.socialSharing.share(this.noticia.title,this.noticia.source.name,this.noticia.url):navigator.hasOwnProperty("share")?navigator.share({title:this.noticia.title,text:this.noticia.description,url:this.noticia.url}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing",t)):console.log("No se puede compartir")}}var p=i.ob({encapsulation:0,styles:[[".tiempo[_ngcontent-%COMP%]{font-size:12px!important}.numero-noticia[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important;margin-left:5px!important;margin-right:15px!important;font-weight:550!important}"]],data:{}});function b(t){return i.Jb(0,[(t()(),i.qb(0,0,null,null,1,"ion-icon",[["name","star"]],null,null,null,r.O,r.m)),i.pb(1,49152,null,0,l.A,[i.h,i.k,i.x],{name:[0,"name"]},null)],function(t,e){t(e,1,0,"star")},null)}function m(t){return i.Jb(0,[(t()(),i.qb(0,0,null,null,0,"img",[["onerror","this.style.display='none'"]],[[8,"src",4]],[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.abrirNoticia()&&i),i},null,null))],null,function(t,e){t(e,0,0,e.component.noticia.urlToImage)})}function f(t){return i.Jb(0,[i.Cb(0,o,[]),(t()(),i.qb(1,0,null,null,31,"ion-card",[],null,null,null,r.J,r.d)),i.pb(2,49152,null,0,l.k,[i.h,i.k,i.x],null,null),(t()(),i.qb(3,0,null,0,18,"ion-item",[],null,null,null,r.R,r.p)),i.pb(4,49152,null,0,l.F,[i.h,i.k,i.x],null,null),(t()(),i.qb(5,0,null,0,1,"span",[["class","numero-noticia ion-text-center"],["slot","start"]],null,null,null,null,null)),(t()(),i.Hb(6,null,["","."])),(t()(),i.qb(7,0,null,0,6,"ion-card-subtitle",[],null,null,null,r.H,r.g)),i.pb(8,49152,null,0,l.n,[i.h,i.k,i.x],null,null),(t()(),i.qb(9,0,null,0,1,"div",[],null,null,null,null,null)),(t()(),i.Hb(10,null,[" "," "])),(t()(),i.qb(11,0,null,0,2,"div",[["class","tiempo"]],null,null,null,null,null)),(t()(),i.Hb(12,null,["",""])),i.Db(13,1),(t()(),i.qb(14,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,r.E,r.c)),i.pb(15,49152,null,0,l.j,[i.h,i.k,i.x],null,null),(t()(),i.fb(16777216,null,0,1,null,b)),i.pb(17,16384,null,0,a.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(t()(),i.qb(18,0,null,0,3,"ion-button",[["color","primary"],["fill","clear"]],null,[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.presentActionSheet()&&i),i},r.D,r.b)),i.pb(19,49152,null,0,l.i,[i.h,i.k,i.x],{color:[0,"color"],fill:[1,"fill"]},null),(t()(),i.qb(20,0,null,0,1,"ion-icon",[["name","more"],["slot","icon-only"]],null,null,null,r.O,r.m)),i.pb(21,49152,null,0,l.A,[i.h,i.k,i.x],{name:[0,"name"]},null),(t()(),i.qb(22,0,null,0,4,"ion-card-header",[],null,null,null,r.G,r.f)),i.pb(23,49152,null,0,l.m,[i.h,i.k,i.x],null,null),(t()(),i.qb(24,0,null,0,2,"ion-card-title",[],null,[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.abrirNoticia()&&i),i},r.I,r.h)),i.pb(25,49152,null,0,l.o,[i.h,i.k,i.x],null,null),(t()(),i.Hb(26,0,["",""])),(t()(),i.fb(16777216,null,0,1,null,m)),i.pb(28,16384,null,0,a.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(t()(),i.qb(29,0,null,0,3,"ion-card-content",[],null,null,null,r.F,r.e)),i.pb(30,49152,null,0,l.l,[i.h,i.k,i.x],null,null),(t()(),i.qb(31,0,null,0,1,"div",[],null,null,null,null,null)),(t()(),i.Hb(32,null,[" "," "]))],function(t,e){var n=e.component;t(e,17,0,n.noticia.isFavorite),t(e,19,0,"primary","clear"),t(e,21,0,"more"),t(e,28,0,n.noticia.urlToImage)},function(t,e){var n=e.component;t(e,6,0,n.indice),t(e,10,0,n.noticia.source.name);var r=i.Ib(e,12,0,t(e,13,0,i.Bb(e,0),n.noticia.publishedAt));t(e,12,0,r),t(e,26,0,n.noticia.title),t(e,32,0,n.noticia.description)})}n("kVNm"),n.d(e,"a",function(){return g}),n.d(e,"b",function(){return w});var g=i.ob({encapsulation:0,styles:[[".row-spinner[_ngcontent-%COMP%]{margin-top:100px!important;-webkit-box-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;align-items:center!important}"]],data:{}});function v(t){return i.Jb(0,[(t()(),i.qb(0,0,null,null,3,"ion-col",[["size","12"],["size-lg","4"],["size-md","6"]],null,null,null,r.K,r.i)),i.pb(1,49152,null,0,l.r,[i.h,i.k,i.x],{size:[0,"size"]},null),(t()(),i.qb(2,0,null,0,1,"app-noticia",[],null,null,null,f,p)),i.pb(3,114688,null,0,h,[c.a,l.a,u.a,d.a,l.Fb],{noticia:[0,"noticia"],indice:[1,"indice"]},null)],function(t,e){t(e,1,0,"12"),t(e,3,0,e.context.$implicit,e.context.index+1)},null)}function y(t){return i.Jb(0,[(t()(),i.qb(0,0,null,null,3,"ion-row",[["class","row-spinner"]],null,null,null,r.V,r.t)),i.pb(1,49152,null,0,l.gb,[i.h,i.k,i.x],null,null),(t()(),i.qb(2,0,null,0,1,"ion-spinner",[["color","primary"]],null,null,null,r.Y,r.w)),i.pb(3,49152,null,0,l.pb,[i.h,i.k,i.x],{color:[0,"color"]},null)],function(t,e){t(e,3,0,"primary")},null)}function w(t){return i.Jb(0,[(t()(),i.qb(0,0,null,null,7,"ion-grid",[["fixed",""]],null,null,null,r.M,r.k)),i.pb(1,49152,null,0,l.y,[i.h,i.k,i.x],{fixed:[0,"fixed"]},null),(t()(),i.qb(2,0,null,0,3,"ion-row",[],null,null,null,r.V,r.t)),i.pb(3,49152,null,0,l.gb,[i.h,i.k,i.x],null,null),(t()(),i.fb(16777216,null,0,1,null,v)),i.pb(5,278528,null,0,a.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null),(t()(),i.fb(16777216,null,0,1,null,y)),i.pb(7,16384,null,0,a.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null)],function(t,e){var n=e.component;t(e,1,0,""),t(e,5,0,n.noticias),t(e,7,0,n.isSpinner)},null)}},qwwZ:function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",function(){return o}),n.d(e,"createGesture",function(){return d});var i=n("mLBW");n("TJLY");class r{constructor(t,e,n,i,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*i+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class l{constructor(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const o=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new r(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new l(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)}capture(t,e,n){if(!this.start(t,e,n))return!1;const i=this.requestedStart;let r=-1e4;if(i.forEach(t=>{r=Math.max(r,t)}),r===n){this.capturedId=e,i.clear();const n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(n),!0}return i.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)}enableGesture(t,e){const n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add("backdrop-no-scroll")}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove("backdrop-no-scroll")}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},a=(t,e,n,i)=>{const r=s(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;let l,o;return t.__zone_symbol__addEventListener?(l="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(l="addEventListener",o="removeEventListener"),t[l](e,n,r),()=>{t[o](e,n,r)}},s=t=>{if(void 0===c)try{const n=Object.defineProperty({},"passive",{get:()=>{c=!0}});t.addEventListener("optsTest",()=>{},n)}catch(e){c=!1}return!!c};let c;const u=t=>t instanceof Document?t:t.ownerDocument,d=t=>{let e=!1,n=!1,r=!0,l=!1;const s=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),c=s.canStart,d=s.onWillStart,m=s.onStart,f=s.onEnd,g=s.notCaptured,v=s.onMove,y=s.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=((t,e,n)=>{const i=s.maxAngle*(Math.PI/180),r="x"===s.direction,l=Math.cos(i),o=e*e;let a=0,c=0,u=!1,d=0;return{start(t,e){a=t,c=e,d=0,u=!0},detect(t,e){if(!u)return!1;const n=t-a,i=e-c,s=n*n+i*i;if(s<o)return!1;const h=Math.sqrt(s),p=(r?n:i)/h;return d=p>l?1:p<-l?-1:0,u=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(0,s.threshold),E=o.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),k=()=>{e&&(l=!1,v&&v(w))},x=()=>!(E&&!E.capture()||(e=!0,r=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,d?d(w).then(C):C(),0)),C=()=>{m&&m(w),r=!0},I=()=>{e=!1,n=!1,l=!1,r=!0,E.release()},q=t=>{const n=e,i=r;I(),i&&(h(w,t),n?f&&f(w):g&&g(w))},T=((t,e,n,i,r)=>{let l,o,s,c,d,h,p,b=0;const m=i=>{b=Date.now()+2e3,e(i)&&(!o&&n&&(o=a(t,"touchmove",n,r)),s||(s=a(t,"touchend",g,r)),c||(c=a(t,"touchcancel",g,r)))},f=i=>{b>Date.now()||e(i)&&(!h&&n&&(h=a(u(t),"mousemove",n,r)),p||(p=a(u(t),"mouseup",v,r)))},g=t=>{y(),i&&i(t)},v=t=>{w(),i&&i(t)},y=()=>{o&&o(),s&&s(),c&&c(),o=s=c=void 0},w=()=>{h&&h(),p&&p(),h=p=void 0},S=()=>{y(),w()},E=e=>{e?(l&&l(),d&&d(),l=d=void 0,S()):(l||(l=a(t,"touchstart",m,r)),d||(d=a(t,"mousedown",f,r)))};return{setDisabled:E,stop:S,destroy:()=>{E(!0),i=n=e=void 0}}})(s.el,t=>{const e=b(t);return!(n||!r)&&(p(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!c||!1!==c(w))&&(E.release(),!!E.start()&&(n=!0,0===y?x():(S.start(w.startX,w.startY),!0))))},t=>{e?!l&&r&&(l=!0,h(w,t),Object(i.n)(k)):(h(w,t),S.detect(w.currentX,w.currentY)&&(S.isGesture()&&x()||A()))},q,{capture:!1}),A=()=>{I(),T.stop(),g&&g(w)};return{setDisabled(t){t&&e&&q(void 0),T.setDisabled(t)},destroy(){E.destroy(),T.destroy()}}},h=(t,e)=>{if(!e)return;const n=t.currentX,i=t.currentY,r=t.timeStamp;p(e,t);const l=t.currentX,o=t.currentY,a=(t.timeStamp=b(e))-r;if(a>0&&a<100){const e=(o-i)/a;t.velocityX=(l-n)/a*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}t.deltaX=l-t.startX,t.deltaY=o-t.startY,t.event=e},p=(t,e)=>{let n=0,i=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];n=t.clientX,i=t.clientY}else void 0!==t.pageX&&(n=t.pageX,i=t.pageY)}e.currentX=n,e.currentY=i},b=t=>t.timeStamp||Date.now()},wie5:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("mrSG"),r=n("ZZ/e"),l=n("8Y7J"),o=n("xgBC");let a=(()=>{class t{constructor(t,e){this.storage=t,this.toastController=e,this.noticias=[],this.cargarFavoritosDelStorage()}cargarFavoritosDelStorage(){return i.b(this,void 0,void 0,function*(){const t=yield this.storage.get("favoritos");t&&(this.noticias=t)})}"a\xf1adirAFavoritos"(t){this.isFavorite(t)||(this.noticias.unshift(t),this.storage.set("favoritos",this.noticias)),this.presentToast("Se ha a\xf1adido a Favoritos")}quitarDeFavoritos(t){this.noticias=this.noticias.filter(e=>e.title!==t.title),this.storage.set("favoritos",this.noticias),this.presentToast("Se ha quitado de Favoritos")}isFavorite(t){return this.noticias.some(e=>e.title===t.title)}presentToast(t){return i.b(this,void 0,void 0,function*(){(yield this.toastController.create({position:"top",message:t,duration:1500})).present()})}}return t.ngInjectableDef=l.Mb({factory:function(){return new t(l.Nb(o.b),l.Nb(r.Ib))},token:t,providedIn:"root"}),t})()},zbXe:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("IheW"),r=n("lJxs"),l=n("AytR"),o=n("wie5"),a=n("8Y7J");const s=l.a.apiNoticiasUrl,c=new i.g({"X-Api-Key":l.a.apiKey});let u=(()=>{class t{constructor(t,e){this.http=t,this.dataService=e,this.paginacionTopHeadline=0,this.categoriaActual="",this.paginacionCategoria=0}ejecutarQuery(t){return this.http.get(t=s+t,{headers:c})}obtenerTitulares(){return this.paginacionTopHeadline++,this.ejecutarQuery(`/top-headlines?country=us&page=${this.paginacionTopHeadline}`).pipe(Object(r.a)(t=>(this.agregarAtributoIsFavoritoANoticias(t.articles),t)))}obtenerTitularesPorCategoria(t){return this.categoriaActual!==t&&this.cambiarCategoriaYReiniciarPaginacion(t),this.paginacionCategoria++,this.ejecutarQuery(`top-headlines?country=us&category=${t}&page=${this.paginacionCategoria}`).pipe(Object(r.a)(t=>(this.agregarAtributoIsFavoritoANoticias(t.articles),t)))}cambiarCategoriaYReiniciarPaginacion(t){this.categoriaActual=t,this.paginacionCategoria=0}agregarAtributoIsFavoritoANoticias(t){t.forEach(t=>{t.isFavorite=this.dataService.isFavorite(t)})}reiniciarPaginacionTitulareNoticias(){this.paginacionTopHeadline=0}}return t.ngInjectableDef=a.Mb({factory:function(){return new t(a.Nb(i.c),a.Nb(o.a))},token:t,providedIn:"root"}),t})()}}]);