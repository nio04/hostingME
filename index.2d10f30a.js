//  GET VIEW MODE INFORMATION FROM LOCAL STORAGE
let t;function e(){return(e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},s=new/*#__PURE__*/(function(){function t(){}var s=t.prototype;return s.load=function(t,s,a){if(t.el="string"==typeof a?document.querySelector(a):a,t.options=e({},n,s),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var i=0;i<r;i+=1)t.strings.push(o[i].innerHTML.trim())}for(var c in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[c]=c;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},s.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},t}()),a=new/*#__PURE__*/(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s,a=t.substring(e).charAt(0);if("<"===a||"&"===a){for(s="<"===a?">":";";t.substring(e+1).charAt(0)!==s&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s,a=t.substring(e).charAt(0);if(">"===a||";"===a){for(s=">"===a?"<":"&";t.substring(e-1).charAt(0)!==s&&!(--e<0););e--}return e},t}()),o=/*#__PURE__*/function(){function t(t,e){s.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=a.typeHtmlChars(t,e,n);var s,r=0,i=t.substring(e);if("^"===i.charAt(0)&&/^\^\d+/.test(i)&&(s=1+(i=/\d+/.exec(i)[0]).length,r=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+s),n.toggleBlinking(!0)),"`"===i.charAt(0)){for(;"`"!==t.substring(e+o).charAt(0)&&!(e+ ++o>t.length););var c=t.substring(0,e),l=t.substring(c.length+1,e+o);t=c+l+t.substring(e+o+1),o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},s):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,e+=n);this.replaceText(s),this.typewrite(t,e)},e.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))},e.backspace=function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=a.backSpaceHtmlChars(t,e,n);var s=t.substring(0,e);if(n.replaceText(s),n.smartBackspace){var o=n.strings[n.arrayPos+1];n.stopNum=o&&s===o.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},s)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const r=document.querySelector("#main__home--container");document.querySelector(".content__page--container"),r&&new o("#typed--primary-header__span",{strings:["my website","my personal website","my archive","my personal shit"],startDelay:50,typeSpeed:70,backSpeed:80,backDelay:1500,smartBackspace:!0,loop:!0,loopCount:1/0});const i=document.querySelector("body"),c=document.querySelector("#main__home--container");document.querySelector(".content__page--container");const l=document.querySelector("#nav__btn__container--home"),u=document.querySelector("#nav__btn__container--content"),d=document.querySelector(".overlay"),m=document.querySelector(".sticky__nav--container"),p=document.querySelector(".content__page--container"),h=document.querySelector(".nav__el--wrap"),g=document.querySelector(".nav__el--wrap svg"),y=document.querySelector("#nav__top--btn"),f=document.querySelector("#nav__bottom--btn");function b(){let t=new IntersectionObserver(function([t]){t.isIntersecting?(c?l.classList.add("util-display-y"):u.classList.add("util-display-y"),p&&(document.querySelector("#nav__top--btn").classList.add("noTransform--js"),document.querySelector("#nav__bottom--btn").classList.add("noTransform--js"))):(c?l.classList.remove("util-display-y"):u.classList.remove("util-display-y"),p&&(document.querySelector("#nav__top--btn").classList.remove("noTransform--js"),document.querySelector("#nav__bottom--btn").classList.remove("noTransform--js")))},{root:null,threshold:0,rootMargin:"-200px"});// OBSERVER FOR MAIN HOME, CONTENT PAGE --BTNS
t.observe(document.querySelector("#content__main--section")),document.addEventListener("click",t=>{t.target.closest("#nav__btn__container--home")&&(l.classList.contains("nav__icon--open")?_():l.classList.contains("nav__icon--open")||v()),(t.target.closest("#nav__btn__container--content")||t.target.closest(".post__navigation--container"))&&(// SHOW NAVIGATION WHILE CLICKED ON NAV ICON --CONTENT PAGE
_(),t.target.closest(".sticky__nav--el")&&(h.classList.add("util-show-element-transform"),g.classList.add("util-show-element-transform")),t.target.closest(".nav__el--wrap")&&S(),t.target.classList.contains("nav__btn__off--icon")&&v()),d.addEventListener("click",()=>v()),document.addEventListener("keydown",t=>{"Escape"===t.key&&v()})})}function v(){i.classList.remove("util-overflow-hidden"),m.classList.remove("util-show-element-transform"),d.classList.remove("util-display-y"),c?(l.classList.add("nav__icon--open"),l.innerHTML=w()):p&&(u.classList.add("nav__icon--open"),u.innerHTML=w(),// SHOW NAVIGATOR [GO TOP, GO BOTTOM] BUTTON
y.classList.remove("util-display-n"),f.classList.remove("util-display-n"),// AUTO CLOSE DROP DOWN MENU WHILE CLOSINGG NAVIGATION
S())}function _(){i.classList.add("util-overflow-hidden"),d.classList.add("util-display-y"),m.classList.add("util-show-element-transform"),c?(l.classList.remove("nav__icon--open"),l.innerHTML=L()):p&&(u.classList.remove("nav__icon--open"),u.innerHTML=L(),// 	HIDE NAVIAGTOR [GO TOP, GO BOTTOM] BUTTON
y.classList.add("util-display-n"),f.classList.add("util-display-n"))}function S(){h.classList.remove("util-show-element-transform"),g.classList.remove("util-show-element-transform")}function L(){return`
 <svg class="nav__btn__off--icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve">
<g>
	<path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136
		c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786
		C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835
		c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165
		C294.843,66.133,228.71,0,147.421,0z"/>
	<path d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236
		c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z"/>
	<path d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485
		L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z"/>
	<path d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485
		c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`}function w(){return`
  <svg class="nav__btn__on--icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve">
<g>
	<path d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331
		c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12
		s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6
		c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z"/>
	<path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z"/>
	<path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z"/>
	<path d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473
		C213.971,216.658,216.658,213.971,216.658,210.658z"/>
  `}const k=document.querySelector("body"),E=document.querySelector(".view__changer__btn--container");function q(){E.classList.remove("night--icon"),E.innerHTML=`
  <svg id="view__changer--btn" class="day__mode__icon--on" height="512" viewBox="0 0 16 16" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_34" data-name="34"><path d="m12 8a4 4 0 1 0 -4 4 4 4 0 0 0 4-4zm-4 3a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z"/><path d="m9 3.11h.14a.49.49 0 0 0 .48-.36l.38-1.11a.5.5 0 0 0 -1-.28l-.3 1.13a.5.5 0 0 0 .3.62z"/><path d="m7 12.89a.5.5 0 0 0 -.62.34l-.38 1.13a.5.5 0 0 0 .34.62h.14a.49.49 0 0 0 .52-.34l.32-1.13a.5.5 0 0 0 -.32-.62z"/><path d="m14.64 9-1.13-.3a.5.5 0 0 0 -.28 1l1.13.32h.14a.5.5 0 0 0 .14-1z"/><path d="m2.63 7.32a.5.5 0 0 0 .14-1l-1.13-.32a.5.5 0 0 0 -.28 1l1.13.32z"/><path d="m14.1 4.22a.51.51 0 0 0 -.68-.2l-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .24-.06l1-.57a.51.51 0 0 0 .2-.68z"/><path d="m3.13 10.53-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .21-.04l1-.57a.5.5 0 1 0 -.48-.88z"/><path d="m4.59 3.61a.49.49 0 0 0 .41.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68l-.57-1a.5.5 0 0 0 -.87.45z"/><path d="m11.41 12.39a.5.5 0 0 0 -.88.48l.57 1a.49.49 0 0 0 .44.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68z"/></g></svg>`,k.classList.add("nightTheme"),localStorage.setItem("theme","night")}function C(){E.classList.add("night--icon"),E.innerHTML=`
  <svg id="view__changer--btn" class="day__mode__icon--off" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m12 22.75a10.75 10.75 0 0 1 -1.085-21.45.754.754 0 0 1 .7.332.746.746 0 0 1 .033.774 7.387 7.387 0 0 0 -.898 3.594 7.021 7.021 0 0 0 6.75 7.25 6.385 6.385 0 0 0 4.021-1.436.75.75 0 0 1 1.218.615 10.713 10.713 0 0 1 -10.739 10.321zm-2.261-19.724a9.252 9.252 0 1 0 11.317 10.868 7.771 7.771 0 0 1 -3.556.856 8.521 8.521 0 0 1 -8.25-8.75 9.045 9.045 0 0 1 .489-2.974z"/></g></svg>`,k.classList.remove("nightTheme"),localStorage.setItem("theme","day")}const A=document.querySelector("#content__main--section"),T=document.querySelector(".content__nav--btn"),x=document.querySelectorAll(".float__btn--container"),M=new IntersectionObserver(function([t]){t.isIntersecting?(// SHOW NAVIGATOR BUTTON
T.classList.add("util-display-y"),x.forEach(t=>{t.classList.add("util-show-element-transform")})):(// HIDE NAVIGATOR BUTTON
T.classList.remove("util-display-y"),x.forEach(t=>{t.classList.remove("util-show-element-transform")}))},{root:null,threshold:0,rootMargin:"-300px"});M.observe(A);const P=document.querySelector(".content__nav--btn"),F=document.querySelector("#nav__top--btn"),B=document.querySelector("#nav__bottom--btn"),z=document.querySelector(".overlay"),O=document.querySelector(".contentPage__magic-btn"),I=document.querySelector(".content__magic"),H=document.querySelector(".font-family--input"),j=document.querySelector(".content-font--input"),G=document.querySelector(".content__font-size--value"),N=document.querySelector(".contentMagic__color-input"),D=document.querySelector(".contentMagic__background-color-input"),R=document.querySelector(".content__padding__ltr"),$=document.querySelector(".content__padding--value"),U=document.querySelector(".content__line-height"),Y=document.querySelector(".content__line-height--value"),J=document.querySelector(".contentMagic__text-alignment--input"),K=document.querySelector(".content__text-alignment--value");function Q(t){let e=document.querySelectorAll("h1"),n=document.querySelectorAll("h2"),s=document.querySelectorAll("h3"),a=document.querySelectorAll("h4"),o=document.querySelectorAll("a"),r=document.querySelectorAll(".navigator__btn"),i=document.querySelectorAll(".post__code"),c=document.querySelectorAll(".list"),l=document.querySelectorAll(".content__post");e.forEach(e=>e.style.fontFamily=t),n.forEach(e=>e.style.fontFamily=t),s.forEach(e=>e.style.fontFamily=t),a.forEach(e=>e.style.fontFamily=t),o.forEach(e=>e.style.fontFamily=t),r.forEach(e=>e.style.fontFamily=t),i.forEach(e=>e.style.fontFamily=t),c.forEach(e=>e.style.fontFamily=t),l.forEach(e=>e.style.fontFamily=t)}// FONT SIZE
function V(t){let e=document.querySelectorAll(".content__post");console.log(t),e.forEach(e=>e.style.fontSize=`${t}rem`)}// FONT COLOR
function W(t){let e=document.querySelectorAll("h2"),n=document.querySelectorAll("h3"),s=document.querySelectorAll("h4"),a=document.querySelectorAll("a"),o=document.querySelectorAll(".navigator__btn"),r=document.querySelectorAll(".content__post"),i=document.querySelectorAll(".post__code"),c=document.querySelectorAll(".list");e.forEach(e=>e.style.color=t),n.forEach(e=>e.style.color=t),s.forEach(e=>e.style.color=t),a.forEach(e=>e.style.color=t),o.forEach(e=>e.style.color=t),r.forEach(e=>e.style.color=t),i.forEach(e=>e.style.color=t),c.forEach(e=>e.style.color=t)}// BACKGROUND COLOR
function X(t){let e=document.querySelectorAll("h2"),n=document.querySelectorAll("h4"),s=document.querySelectorAll(".post__code"),a=document.querySelectorAll(".float__btn--container"),o=document.querySelector(".contentPage__magic-btn");document.body.style.backgroundColor=t,e.forEach(e=>e.style.backgroundColor=t),n.forEach(e=>e.style.backgroundColor=t),s.forEach(e=>e.style.backgroundColor=t),a.forEach(e=>e.style.backgroundColor=t),a.forEach(e=>e.style.border=`5px solid ${t}`),o.style.backgroundColor="transparent",o.style.border="none"}// PADDING SETTER
function Z(t){let e=document.querySelector(".content__nav--btn");document.body.style.paddingLeft=`${t}rem`,document.body.style.paddingRight=`${t}rem`,e.style.padding="none"}// LINE-HEIGHT
function tt(t){let e=document.querySelectorAll(".content__post");e.forEach(e=>e.style.lineHeight=`${t}rem`)}// TEXT-ALIGNMENT
function te(t){let e=document.querySelectorAll(".content__post");e.forEach(e=>e.style.textAlign=t)}function tn(){I.classList.remove("noTransform--js"),I.classList.add("inactive"),O.style.fill="black",z.classList.remove("util-display-y"),document.body.style.overflow="auto",F.classList.remove("util-display-n"),B.classList.remove("util-display-n"),P.classList.remove("util-hide-element-transform")}document.querySelector(".accountPassword__show"),document.querySelector(".acc__btn--show"),document.querySelector("#acc__btn--show"),document.querySelector("#retry-password");const ts={gmail:"niopai318200204",wpsAcc:"Nio3108200204",github:"niopai318200204",vivaldi:"nio3108200204",microsoft:"niopai3108200204",abbaGmail:"nizamuddinkrishi3108200204",abbaMiAcc:"nio3108200204",nishatMiAcc:"nio@3108200204",xda:"niopai3108200204",gameGuardian:"niopai3108200204",fb:"niopai7415963",ammaFb:"7415963",bkash:"20020",mega:"3108200204",momGmail:"shanazvai3108200204",momMiAcc:"Shanaz3108200204",abbaFb:"niopai3108200204"},ta=(t="")=>prompt(`enter The password to view ${t}`),to=(t,e)=>{t.innerText=e,t.classList.add("password-match","password-general"),t.classList.remove("invalid-password"),["gmail","wpsAcc","github","vivaldi","microsoft","abbaGmail","abbaMiAcc","nishatMiAcc","xda","gameGuardian","fb","ammaFb","bkash","mega","momGmail","momMiAcc","abbaFb"].forEach(e=>{t.classList.remove(e)})},tr=t=>{t.innerText="password did not matched",t.classList.add("invalid-password","password-general"),ti(t)},ti=e=>{(t=document.createElement("button")).classList.add("retry__password--btn"),t.id="retry-password",t.innerText="retry",e.append(t)},tc=()=>{t&&t.remove()},tl=(t,e,n)=>{t&&(3108200204===Number(t)?(// MATCHED PASSWORD
to(e,n),// REMOVE RE-TRY BUTTON
tc()):tr(e))},tu=document.querySelector("#main__home--container"),td=document.querySelector(".content__page--container");tu&&b(),td&&(b(),"night"===localStorage.getItem("theme")?q():C(),document.addEventListener("click",t=>{t.target.closest("#view__changer--container")&&(E.classList.contains("night--icon")?q():C())}),document.addEventListener("click",t=>{t.target.closest(".contentPage__magic-btn")&&(I.classList.contains("inactive")?(I.classList.add("noTransform--js"),I.classList.remove("inactive"),O.style.fill="red",z.classList.add("util-display-y"),document.body.style.overflow="hidden",F.classList.add("util-display-n"),B.classList.add("util-display-n"),P.classList.add("util-hide-element-transform")):tn()),t.target.classList.contains("overlay")&&tn()}),// FONT FAMILY
H.addEventListener("change",t=>{let e=t.target.value;switch(e){case"1":Q("Roboto");break;case"2":Q("Open Sans");break;case"3":Q("Roboto Condensed");break;case"4":Q("Bitter");break;case"5":Q("Cinzel");break;case"6":Q("Roboto Mono")}}),// FONT SIZE
j.addEventListener("change",t=>{let e=t.target.value;switch(G.textContent=e,e){case"1":V("1.8");break;case"2":V("2.4");break;case"3":V("3");break;case"4":V("3.8");break;case"5":V("4.3")}}),// FONT COLOR
N.addEventListener("change",t=>{let e=t.target.value;switch(e){case"red":W("red");break;case"green":W("green");break;case"blue":W("blue");break;case"yellow":W("yellow");break;case"white":W("white");break;case"pink":W("pink")}}),// BACKGROUND COLOR
D.addEventListener("change",t=>{let e=t.target.value;switch(console.log(e),e){case"red":X("red");break;case"yellow":X("yellow");break;case"green":X("green");break;case"blue":X("blue");break;case"pink":X("pink");break;case"black":X("black")}}),// PADDING LEFT-RIGHT
R.addEventListener("change",t=>{let e=t.target.value;switch($.textContent=e,e){case"1":Z("1");break;case"2":Z("2");break;case"3":Z("4");break;case"4":Z("6");break;case"5":Z("8")}}),// LINE-HEIGHT
U.addEventListener("change",t=>{let e=t.target.value;switch(Y.textContent=e,e){case"1":tt("6");break;case"2":tt("9");break;case"3":tt("11");break;case"4":tt("13");break;case"5":tt("15")}}),// TEXT-ALIGNMENT
J.addEventListener("change",t=>{let e=t.target.value;switch(K.textContent=e,e){case"left":te("left");break;case"right":te("right");break;case"center":te("center");break;case"justify":te("justify")}}),document.addEventListener("click",t=>{"retry-password"===t.target.id&&// WHEN RE-TRY BUTTON PRESSED
// CHECK PASSWORD ON RE-TRY OPERATION
function(t,e){// OUR TARGET CLASS ALWAYS THE SECOND
// ELEMENT. SO, WE MANUALLY SELECT IT
let n=ta([e][1]);if(n){if(3108200204===Number(n)){let n=[...t];["gmail","wpsAcc","github","vivaldi","microsoft","abbaGmail","abbaMiAcc","nishatMiAcc","xda","gameGuardian","fb","ammaFb","bkash","mega","momGmail","momMiAcc","abbaFb"].forEach(t=>{t===n[1]&&to(e,ts[t])})}else tr(e)}}(t.target.parentElement.classList,t.target.parentElement),t.target.classList.contains("gmail")&&tl(ta("gmail"),t.target.parentElement,ts.gmail),t.target.classList.contains("wps")&&tl(ta("wps"),t.target.parentElement,ts.wpsAcc),t.target.classList.contains("github")&&tl(ta("github"),t.target.parentElement,ts.github),t.target.classList.contains("vivaldi")&&tl(ta("vivaldi"),t.target.parentElement,ts.vivaldi),t.target.classList.contains("microsoft")&&tl(ta("microsoft"),t.target.parentElement,ts.microsoft),t.target.classList.contains("abbaGmail")&&tl(ta("abbaGmail"),t.target.parentElement,ts.abbaGmail),t.target.classList.contains("abbaMiAcc")&&tl(ta("abbaMiAcc"),t.target.parentElement,ts.abbaMiAcc),t.target.classList.contains("nishatMiAcc")&&tl(ta("nishatMiAcc"),t.target.parentElement,ts.nishatMiAcc),t.target.classList.contains("xda")&&tl(ta("xda"),t.target.parentElement,ts.xda),t.target.classList.contains("gameGuardian")&&tl(ta("gameGuardian"),t.target.parentElement,ts.gameGuardian),t.target.classList.contains("fb")&&tl(ta("fb"),t.target.parentElement,ts.fb),t.target.classList.contains("ammaFb")&&tl(ta("ammaFb"),t.target.parentElement,ts.ammaFb),t.target.classList.contains("bkash")&&tl(ta("bkash"),t.target.parentElement,ts.bkash),t.target.classList.contains("mega")&&tl(ta("mega"),t.target.parentElement,ts.mega),t.target.classList.contains("momGmail")&&tl(ta("momGmail"),t.target.parentElement,ts.momGmail),t.target.classList.contains("momMiAcc")&&tl(ta("momMiAcc"),t.target.parentElement,ts.momMiAcc),t.target.classList.contains("abbaFb")&&tl(ta("abbaFb"),t.target.parentElement,ts.abbaFb)}));// const mainHomeHTML = new Typed('#typed--html__span', {
// 	stringsElement: '#typed-js__html',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeCSS = new Typed('#typed--css__span', {
// 	stringsElement: '#typed-js__css',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeSASS = new Typed('#typed--sass__span', {
// 	stringsElement: '#typed-js__sass',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeJS = new Typed('#typed--js__span', {
// 	stringsElement: '#typed-js__js',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeDOM = new Typed('#typed--dom__span', {
// 	stringsElement: '#typed-js__dom',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeGIT = new Typed('#typed--git__span', {
// 	stringsElement: '#typed-js__git',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeMISCS = new Typed('#typed--miscs__span', {
// 	stringsElement: '#typed-js__miscs',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
//# sourceMappingURL=index.2d10f30a.js.map

//# sourceMappingURL=index.2d10f30a.js.map
