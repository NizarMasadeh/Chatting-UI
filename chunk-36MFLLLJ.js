import{$a as x,Aa as v,Ba as ue,Da as de,Ga as W,Ha as I,Ia as f,Ja as p,Ka as ce,L as j,La as he,Ma as y,N as B,Na as fe,Oa as pe,P as c,Pa as ge,Qa as $,Ra as me,Sa as _e,Ta as ve,Ua as ye,Va as q,X as se,Y as A,Ya as Ce,Z as w,_ as ae,_a as Ve,a,ab as d,b as l,ba as E,bb as z,fa as U,h as ne,hb as be,ib as De,k as ie,ob as Me,p as re,pa as F,pb as Y,qa as s,rb as S,sa as H,sb as Z,u as oe,ua as O,xa as le,ya as L,za as h}from"./chunk-YSTGYIXZ.js";var Se=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(s(H),s(U))};static \u0275dir=h({type:n})}return n})(),Ye=(()=>{class n extends Se{static \u0275fac=(()=>{let t;return function(r){return(t||(t=ae(n)))(r||n)}})();static \u0275dir=h({type:n,features:[v]})}return n})(),Ne=new c("");var Ze={provide:Ne,useExisting:j(()=>R),multi:!0};function Qe(){let n=z()?z().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Xe=new c(""),R=(()=>{class n extends Se{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Qe())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(s(H),s(U),s(Xe,8))};static \u0275dir=h({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&y("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},standalone:!1,features:[q([Ze]),v]})}return n})();var Ke=new c(""),Je=new c("");function Pe(n){return n!=null}function ke(n){return de(n)?ie(n):n}function Ge(n){let e={};return n.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Re(n,e){return e.map(t=>t(n))}function et(n){return!n.validate}function Te(n){return n.map(e=>et(e)?e:t=>e.validate(t))}function tt(n){if(!n)return null;let e=n.filter(Pe);return e.length==0?null:function(t){return Ge(Re(t,e))}}function je(n){return n!=null?tt(Te(n)):null}function nt(n){if(!n)return null;let e=n.filter(Pe);return e.length==0?null:function(t){let i=Re(t,e).map(ke);return oe(i).pipe(re(Ge))}}function Be(n){return n!=null?nt(Te(n)):null}function Ae(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function it(n){return n._rawValidators}function rt(n){return n._rawAsyncValidators}function Q(n){return n?Array.isArray(n)?n:[n]:[]}function P(n,e){return Array.isArray(n)?n.includes(e):n===e}function we(n,e){let t=Q(e);return Q(n).forEach(r=>{P(t,r)||t.push(r)}),t}function Ee(n,e){return Q(e).filter(t=>!P(n,t))}var k=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=je(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Be(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},X=class extends k{name;get formDirective(){return null}get path(){return null}},M=class extends k{_parent=null;name=null;valueAccessor=null},K=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},zt=l(a({},ot),{"[class.ng-submitted]":"isSubmitted"}),Ue=(()=>{class n extends K{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(s(M,2))};static \u0275dir=h({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&I("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[v]})}return n})();var C="VALID",N="INVALID",g="PENDING",V="DISABLED",_=class{},G=class extends _{value;source;constructor(e,t){super(),this.value=e,this.source=t}},b=class extends _{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},D=class extends _{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},m=class extends _{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function st(n){return(T(n)?n.validators:n)||null}function at(n){return Array.isArray(n)?je(n):n||null}function lt(n,e){return(T(e)?e.asyncValidators:n)||null}function ut(n){return Array.isArray(n)?Be(n):n||null}function T(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var J=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return d(this.statusReactive)}set status(e){d(()=>this.statusReactive.set(e))}_status=x(()=>this.statusReactive());statusReactive=O(void 0);get valid(){return this.status===C}get invalid(){return this.status===N}get pending(){return this.status==g}get disabled(){return this.status===V}get enabled(){return this.status!==V}errors;get pristine(){return d(this.pristineReactive)}set pristine(e){d(()=>this.pristineReactive.set(e))}_pristine=x(()=>this.pristineReactive());pristineReactive=O(!0);get dirty(){return!this.pristine}get touched(){return d(this.touchedReactive)}set touched(e){d(()=>this.touchedReactive.set(e))}_touched=x(()=>this.touchedReactive());touchedReactive=O(!1);get untouched(){return!this.touched}_events=new ne;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(we(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ee(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new D(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new D(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new b(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new b(!0,i))}markAsPending(e={}){this.status=g;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new m(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,i)),this._events.next(new m(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(i=>{i.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===g)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,t)),this._events.next(new m(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=g,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=ke(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new m(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g)?g:this._anyControlsHaveStatus(N)?N:C}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new b(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new D(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){T(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=at(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}};var He=new c("CallSetDisabledState",{providedIn:"root",factory:()=>ee}),ee="always";function dt(n,e){return[...e.path,n]}function ct(n,e,t=ee){ft(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),pt(n,e),mt(n,e),gt(n,e),ht(n,e)}function Fe(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ht(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ft(n,e){let t=it(n);e.validator!==null?n.setValidators(Ae(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=rt(n);e.asyncValidator!==null?n.setAsyncValidators(Ae(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Fe(e._rawValidators,r),Fe(e._rawAsyncValidators,r)}function pt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Le(n,e)})}function gt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Le(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Le(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function mt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function _t(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function vt(n){return Object.getPrototypeOf(n.constructor)===Ye}function yt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===R?t=o:vt(o)?i=o:r=o}),r||i||t||null}function Oe(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ie(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ct=class extends J{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(st(t),lt(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Oe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Oe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Vt={provide:M,useExisting:j(()=>te)},xe=Promise.resolve(),te=(()=>{class n extends M{_changeDetectorRef;callSetDisabledState;control=new Ct;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new E;constructor(t,i,r,o,u,qe){super(),this._changeDetectorRef=u,this.callSetDisabledState=qe,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=yt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),_t(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ct(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){xe.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Ve(i);xe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?dt(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(s(X,9),s(Ke,10),s(Je,10),s(Ne,10),s(Ce,8),s(He,8))};static \u0275dir=h({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[q([Vt]),v,se]})}return n})();var bt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=L({type:n});static \u0275inj=B({})}return n})();var We=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:He,useValue:t.callSetDisabledState??ee}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=L({type:n});static \u0275inj=B({imports:[bt]})}return n})();var Mt=["chatBody"];function At(n,e){if(n&1&&(f(0,"div",9)(1,"p"),$(2),p()()),n&2){let t=e.$implicit;I("sent",t.id==69),W("@slideInOut",void 0),F(2),me(t.text)}}var $e=class n{messages=[{text:"test",sent:!1,id:100},{text:"Meee",sent:!0,id:69},{text:"this is me",sent:!0,id:69},{text:"this is you",sent:!1,id:100},{text:"Yupp",sent:!1,id:100}];inputMessage="";chatBody;ngAfterViewChecked(){this.scrollToBottom()}sendMessage(){this.inputMessage.trim()&&(this.messages.push({text:this.inputMessage,sent:!0,id:69}),this.inputMessage="",this.reply())}reply(){setTimeout(()=>{let e=["Hello! How can I help?","Great to hear from you!","I'm here to chat.","Feel free to ask anything!","What's on your mind?"],t=e[Math.floor(Math.random()*e.length)];this.messages.push({text:t,sent:!1,id:100})},1e3)}scrollToBottom(){try{this.chatBody.nativeElement.scrollTop=this.chatBody.nativeElement.scrollHeight}catch(e){console.error("Scroll error:",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=le({type:n,selectors:[["app-chat"]],viewQuery:function(t,i){if(t&1&&fe(Mt,5),t&2){let r;pe(r=ge())&&(i.chatBody=r.first)}},decls:11,vars:2,consts:[["chatBody",""],[1,"chat-container"],[1,"chat-header"],[1,"chat-body"],["class","message",3,"sent",4,"ngFor","ngForOf"],[1,"chat-input"],["type","text","placeholder","Type a message...",3,"ngModelChange","keyup.enter","ngModel"],[3,"click"],[1,"pi","pi-send"],[1,"message"]],template:function(t,i){if(t&1){let r=he();f(0,"div",1)(1,"div",2)(2,"h2"),$(3,"Chat with AI"),p()(),f(4,"div",3,0),ue(6,At,3,4,"div",4),p(),f(7,"div",5)(8,"input",6),ye("ngModelChange",function(u){return A(r),ve(i.inputMessage,u)||(i.inputMessage=u),w(u)}),y("keyup.enter",function(){return A(r),w(i.sendMessage())}),p(),f(9,"button",7),y("click",function(){return A(r),w(i.sendMessage())}),ce(10,"i",8),p()()()}t&2&&(F(6),W("ngForOf",i.messages),F(2),_e("ngModel",i.inputMessage))},dependencies:[De,be,We,R,Ue,te],styles:[".chat-container[_ngcontent-%COMP%]{width:100%;max-width:420px;margin:auto;display:flex;flex-direction:column;height:90vh;box-shadow:0 8px 24px #00000026;background:linear-gradient(135deg,#fff,#e7ebf0);border-radius:16px;overflow:hidden;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.chat-container[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#4a90e2,#007aff);color:#fff;padding:20px;font-size:1.4rem;text-align:center;font-weight:700}.chat-container[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{flex:1;padding:20px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none}.chat-container[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.chat-container[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{max-width:75%;padding:12px 16px;border-radius:20px;font-size:1rem;font-weight:400;box-shadow:0 4px 12px #0000001a;line-height:1.5;animation:_ngcontent-%COMP%_popIn .2s ease-in-out;position:relative}.chat-container[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.chat-container[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .message.sent[_ngcontent-%COMP%]{background:linear-gradient(135deg,#007aff,#34b3f4);color:#fff;align-self:flex-end;text-align:right;border-bottom-right-radius:0}.chat-container[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:not(.sent){background:#f1f0f5;color:#333;align-self:flex-start;text-align:left;border-bottom-left-radius:0}.chat-container[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]{display:flex;align-items:center;padding:15px;background:#f7f8fc;border-top:1px solid #e3e4e8}.chat-container[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:12px 15px;border:1px solid #cfd1d7;border-radius:30px;font-size:1rem;box-shadow:inset 0 1px 3px #0000001a;transition:border-color .2s;outline:none}.chat-container[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#007aff}.chat-container[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(135deg,#007aff,#34b3f4);color:#fff;border:none;padding:10px 15px;margin-left:10px;border-radius:50%;cursor:pointer;box-shadow:0 4px 12px #00000026;transition:.3s ease-in-out}.chat-container[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem}.chat-container[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#005bb5,#007aff)}@keyframes _ngcontent-%COMP%_popIn{0%{transform:scale(.95);opacity:0}to{transform:scale(1);opacity:1}}"],data:{animation:[Me("slideInOut",[Z(":enter",[S({opacity:0,transform:"translateY(20px)"}),Y("0.3s ease-out",S({opacity:1,transform:"translateY(0)"}))]),Z(":leave",[Y("0.3s ease-in",S({opacity:0,transform:"translateY(-20px)"}))])])]}})};export{$e as ChatComponent};
