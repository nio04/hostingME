//  GET VIEW MODE INFORMATION FROM LOCAL STORAGE
function t(){return(t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}var e={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},s=new/*#__PURE__*/(function(){function s(){}var n=s.prototype;return n.load=function(s,n,i){if(s.el="string"==typeof i?document.querySelector(i):i,s.options=t({},e,n),s.isInput="input"===s.el.tagName.toLowerCase(),s.attr=s.options.attr,s.bindInputFocusEvents=s.options.bindInputFocusEvents,s.showCursor=!s.isInput&&s.options.showCursor,s.cursorChar=s.options.cursorChar,s.cursorBlinking=!0,s.elContent=s.attr?s.el.getAttribute(s.attr):s.el.textContent,s.contentType=s.options.contentType,s.typeSpeed=s.options.typeSpeed,s.startDelay=s.options.startDelay,s.backSpeed=s.options.backSpeed,s.smartBackspace=s.options.smartBackspace,s.backDelay=s.options.backDelay,s.fadeOut=s.options.fadeOut,s.fadeOutClass=s.options.fadeOutClass,s.fadeOutDelay=s.options.fadeOutDelay,s.isPaused=!1,s.strings=s.options.strings.map(function(t){return t.trim()}),s.stringsElement="string"==typeof s.options.stringsElement?document.querySelector(s.options.stringsElement):s.options.stringsElement,s.stringsElement){s.strings=[],s.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(s.stringsElement.children),r=o.length;if(r)for(var a=0;a<r;a+=1)s.strings.push(o[a].innerHTML.trim())}for(var c in s.strPos=0,s.currentElContent=this.getCurrentElContent(s),s.currentElContent&&s.currentElContent.length>0&&(s.strPos=s.currentElContent.length-1,s.strings.unshift(s.currentElContent)),s.sequence=[],s.strings)s.sequence[c]=c;s.arrayPos=0,s.stopNum=0,s.loop=s.options.loop,s.loopCount=s.options.loopCount,s.curLoop=0,s.shuffle=s.options.shuffle,s.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},s.typingComplete=!1,s.autoInsertCss=s.options.autoInsertCss,s.autoInsertCss&&(this.appendCursorAnimationCss(s),this.appendFadeOutAnimationCss(s))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},n.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},s}()),n=new/*#__PURE__*/(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,i=t.substring(e).charAt(0);if("<"===i||"&"===i){for(n="<"===i?">":";";t.substring(e+1).charAt(0)!==n&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,i=t.substring(e).charAt(0);if(">"===i||";"===i){for(n=">"===i?"<":"&";t.substring(e-1).charAt(0)!==n&&!(--e<0););e--}return e},t}()),i=/*#__PURE__*/function(){function t(t,e){s.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=n.typeHtmlChars(t,e,s);var i,r=0,a=t.substring(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(i=1+(a=/\d+/.exec(a)[0]).length,r=parseInt(a),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+i),s.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==t.substring(e+o).charAt(0)&&!(e+ ++o>t.length););var c=t.substring(0,e),u=t.substring(c.length+1,e+o);t=c+u+t.substring(e+o+1),o--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,o),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},r)},i):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=n.backSpaceHtmlChars(t,e,s);var i=t.substring(0,e);if(s.replaceText(i),s.smartBackspace){var o=s.strings[s.arrayPos+1];s.stopNum=o&&i===o.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},i)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const o=document.querySelector("#main__home--container");document.querySelector(".content__page--container"),o&&new i("#typed--primary-header__span",{strings:["my website","my personal website","my archive","my personal shit"],startDelay:50,typeSpeed:70,backSpeed:80,backDelay:1500,smartBackspace:!0,loop:!0,loopCount:1/0});const r=document.querySelector("body"),a=document.querySelector("#main__home--container");document.querySelector(".content__page--container");const c=document.querySelector("#nav__btn__container--home"),u=document.querySelector("#nav__btn__container--content"),l=document.querySelector(".overlay"),p=document.querySelector(".sticky__nav--container"),h=document.querySelector(".content__page--container"),d=document.querySelector(".nav__el--wrap"),g=document.querySelector(".nav__el--wrap svg"),m=document.querySelector("#nav__top--btn"),y=document.querySelector("#nav__bottom--btn");function f(){let t=new IntersectionObserver(function([t]){t.isIntersecting?(a?c.classList.add("util-display-y"):u.classList.add("util-display-y"),h&&(document.querySelector("#nav__top--btn").classList.add("noTransform--js"),document.querySelector("#nav__bottom--btn").classList.add("noTransform--js"))):(a?c.classList.remove("util-display-y"):u.classList.remove("util-display-y"),h&&(document.querySelector("#nav__top--btn").classList.remove("noTransform--js"),document.querySelector("#nav__bottom--btn").classList.remove("noTransform--js")))},{root:null,threshold:0,rootMargin:"-200px"});// OBSERVER FOR MAIN HOME, CONTENT PAGE --BTNS
t.observe(document.querySelector("#content__main--section")),document.addEventListener("click",t=>{t.target.closest("#nav__btn__container--home")&&(c.classList.contains("nav__icon--open")?_():c.classList.contains("nav__icon--open")||v()),(t.target.closest("#nav__btn__container--content")||t.target.closest(".post__navigation--container"))&&(// SHOW NAVIGATION WHILE CLICKED ON NAV ICON --CONTENT PAGE
_(),t.target.closest(".sticky__nav--el")&&(d.classList.add("util-show-element-transform"),g.classList.add("util-show-element-transform")),t.target.closest(".nav__el--wrap")&&b(),t.target.classList.contains("nav__btn__off--icon")&&v()),l.addEventListener("click",()=>v()),document.addEventListener("keydown",t=>{"Escape"===t.key&&v()})})}function v(){r.classList.remove("util-overflow-hidden"),p.classList.remove("util-show-element-transform"),l.classList.remove("util-display-y"),a?(c.classList.add("nav__icon--open"),c.innerHTML=L()):h&&(u.classList.add("nav__icon--open"),u.innerHTML=L(),// SHOW NAVIGATOR [GO TOP, GO BOTTOM] BUTTON
m.classList.remove("util-display-n"),y.classList.remove("util-display-n"),// AUTO CLOSE DROP DOWN MENU WHILE CLOSINGG NAVIGATION
b())}function _(){r.classList.add("util-overflow-hidden"),l.classList.add("util-display-y"),p.classList.add("util-show-element-transform"),a?(c.classList.remove("nav__icon--open"),c.innerHTML=w()):h&&(u.classList.remove("nav__icon--open"),u.innerHTML=w(),// 	HIDE NAVIAGTOR [GO TOP, GO BOTTOM] BUTTON
m.classList.add("util-display-n"),y.classList.add("util-display-n"))}function b(){d.classList.remove("util-show-element-transform"),g.classList.remove("util-show-element-transform")}function w(){return`
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
`}function L(){return`
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
  `}const S=document.querySelector("body"),C=document.querySelector(".view__changer__btn--container");function k(){C.classList.remove("night--icon"),C.innerHTML=`
  <svg id="view__changer--btn" class="day__mode__icon--on" height="512" viewBox="0 0 16 16" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_34" data-name="34"><path d="m12 8a4 4 0 1 0 -4 4 4 4 0 0 0 4-4zm-4 3a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z"/><path d="m9 3.11h.14a.49.49 0 0 0 .48-.36l.38-1.11a.5.5 0 0 0 -1-.28l-.3 1.13a.5.5 0 0 0 .3.62z"/><path d="m7 12.89a.5.5 0 0 0 -.62.34l-.38 1.13a.5.5 0 0 0 .34.62h.14a.49.49 0 0 0 .52-.34l.32-1.13a.5.5 0 0 0 -.32-.62z"/><path d="m14.64 9-1.13-.3a.5.5 0 0 0 -.28 1l1.13.32h.14a.5.5 0 0 0 .14-1z"/><path d="m2.63 7.32a.5.5 0 0 0 .14-1l-1.13-.32a.5.5 0 0 0 -.28 1l1.13.32z"/><path d="m14.1 4.22a.51.51 0 0 0 -.68-.2l-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .24-.06l1-.57a.51.51 0 0 0 .2-.68z"/><path d="m3.13 10.53-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .21-.04l1-.57a.5.5 0 1 0 -.48-.88z"/><path d="m4.59 3.61a.49.49 0 0 0 .41.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68l-.57-1a.5.5 0 0 0 -.87.45z"/><path d="m11.41 12.39a.5.5 0 0 0 -.88.48l.57 1a.49.49 0 0 0 .44.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68z"/></g></svg>`,S.classList.add("nightTheme"),localStorage.setItem("theme","night")}function T(){C.classList.add("night--icon"),C.innerHTML=`
  <svg id="view__changer--btn" class="day__mode__icon--off" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m12 22.75a10.75 10.75 0 0 1 -1.085-21.45.754.754 0 0 1 .7.332.746.746 0 0 1 .033.774 7.387 7.387 0 0 0 -.898 3.594 7.021 7.021 0 0 0 6.75 7.25 6.385 6.385 0 0 0 4.021-1.436.75.75 0 0 1 1.218.615 10.713 10.713 0 0 1 -10.739 10.321zm-2.261-19.724a9.252 9.252 0 1 0 11.317 10.868 7.771 7.771 0 0 1 -3.556.856 8.521 8.521 0 0 1 -8.25-8.75 9.045 9.045 0 0 1 .489-2.974z"/></g></svg>`,S.classList.remove("nightTheme"),localStorage.setItem("theme","day")}const P=document.querySelector("#content__main--section"),q=document.querySelector(".content__nav--btn"),x=document.querySelectorAll(".float__btn--container"),E=new IntersectionObserver(function([t]){t.isIntersecting?(// SHOW NAVIGATOR BUTTON
q.classList.add("util-display-y"),x.forEach(t=>{t.classList.add("util-show-element-transform")})):(// HIDE NAVIGATOR BUTTON
q.classList.remove("util-display-y"),x.forEach(t=>{t.classList.remove("util-show-element-transform")}))},{root:null,threshold:0,rootMargin:"-300px"});E.observe(P);const B=document.querySelector("#main__home--container"),O=document.querySelector(".content__page--container");B&&f(),O&&(f(),"night"===localStorage.getItem("theme")?k():T(),document.addEventListener("click",t=>{t.target.closest("#view__changer--container")&&(C.classList.contains("night--icon")?k():T())}));// const mainHomeHTML = new Typed('#typed--html__span', {
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
//# sourceMappingURL=index.c54f4ace.js.map

//# sourceMappingURL=index.c54f4ace.js.map
