!function(){function t(){return(t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}var e={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},n=new/*#__PURE__*/(function(){function n(){}var s=n.prototype;return s.load=function(n,s,o){if(n.el="string"==typeof o?document.querySelector(o):o,n.options=t({},e,s),n.isInput="input"===n.el.tagName.toLowerCase(),n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(t){return t.trim()}),n.stringsElement="string"==typeof n.options.stringsElement?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(n.stringsElement.children),i=r.length;if(i)for(var a=0;a<i;a+=1)n.strings.push(r[a].innerHTML.trim())}for(var c in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[c]=c;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},s.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},n}()),s=new/*#__PURE__*/(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s,o=t.substring(e).charAt(0);if("<"===o||"&"===o){for(s="<"===o?">":";";t.substring(e+1).charAt(0)!==s&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s,o=t.substring(e).charAt(0);if(">"===o||";"===o){for(s=">"===o?"<":"&";t.substring(e-1).charAt(0)!==s&&!(--e<0););e--}return e},t}()),o=/*#__PURE__*/function(){function t(t,e){n.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=s.typeHtmlChars(t,e,n);var o,i=0,a=t.substring(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(o=1+(a=/\d+/.exec(a)[0]).length,i=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+o),n.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==t.substring(e+r).charAt(0)&&!(e+ ++r>t.length););var c=t.substring(0,e),u=t.substring(c.length+1,e+r);t=c+u+t.substring(e+r+1),r--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},i)},o):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,e+=n);this.replaceText(s),this.typewrite(t,e)},e.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))},e.backspace=function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=s.backSpaceHtmlChars(t,e,n);var o=t.substring(0,e);if(n.replaceText(o),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&o===r.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},o)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}(),r=document.querySelector("#main__home--container");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n,s,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var r=[],i=!0,a=!1;try{for(o=o.call(t);!(i=(n=o.next()).done)&&(r.push(n.value),!e||r.length!==e);i=!0);}catch(t){a=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(a)throw s}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}document.querySelector(".content__page--container"),r&&new o("#typed--primary-header__span",{strings:["my website","my personal website","my archive","my personal shit"],startDelay:50,typeSpeed:70,backSpeed:80,backDelay:1500,smartBackspace:!0,loop:!0,loopCount:1/0});var c=document.querySelector("body"),u=document.querySelector("#main__home--container");document.querySelector(".content__page--container");var l=document.querySelector("#nav__btn__container--home"),d=document.querySelector("#nav__btn__container--content"),h=document.querySelector(".overlay"),p=document.querySelector(".sticky__nav--container"),y=document.querySelector(".content__page--container"),m=document.querySelector(".nav__el--wrap"),f=document.querySelector(".nav__el--wrap svg"),g=document.querySelector("#nav__top--btn"),v=document.querySelector("#nav__bottom--btn");function b(){// OBSERVER FOR MAIN HOME, CONTENT PAGE --BTNS
new IntersectionObserver(function(t){a(t,1)[0].isIntersecting?(u?l.classList.add("util-display-y"):d.classList.add("util-display-y"),y&&(document.querySelector("#nav__top--btn").classList.add("noTransform--js"),document.querySelector("#nav__bottom--btn").classList.add("noTransform--js"))):(u?l.classList.remove("util-display-y"):d.classList.remove("util-display-y"),y&&(document.querySelector("#nav__top--btn").classList.remove("noTransform--js"),document.querySelector("#nav__bottom--btn").classList.remove("noTransform--js")))},{root:null,threshold:0,rootMargin:"-200px"}).observe(document.querySelector("#content__main--section")),document.addEventListener("click",function(t){t.target.closest("#nav__btn__container--home")&&(l.classList.contains("nav__icon--open")?S():l.classList.contains("nav__icon--open")||_()),(t.target.closest("#nav__btn__container--content")||t.target.closest(".post__navigation--container"))&&(// SHOW NAVIGATION WHILE CLICKED ON NAV ICON --CONTENT PAGE
S(),t.target.closest(".sticky__nav--el")&&(m.classList.add("util-show-element-transform"),f.classList.add("util-show-element-transform")),t.target.closest(".nav__el--wrap")&&k(),t.target.classList.contains("nav__btn__off--icon")&&_()),h.addEventListener("click",function(){return _()}),document.addEventListener("keydown",function(t){"Escape"===t.key&&_()})})}function _(){c.classList.remove("util-overflow-hidden"),p.classList.remove("util-show-element-transform"),h.classList.remove("util-display-y"),u?(l.classList.add("nav__icon--open"),l.innerHTML=L()):y&&(d.classList.add("nav__icon--open"),d.innerHTML=L(),// SHOW NAVIGATOR [GO TOP, GO BOTTOM] BUTTON
g.classList.remove("util-display-n"),v.classList.remove("util-display-n"),// AUTO CLOSE DROP DOWN MENU WHILE CLOSINGG NAVIGATION
k())}function S(){c.classList.add("util-overflow-hidden"),h.classList.add("util-display-y"),p.classList.add("util-show-element-transform"),u?(l.classList.remove("nav__icon--open"),l.innerHTML=w()):y&&(d.classList.remove("nav__icon--open"),d.innerHTML=w(),// 	HIDE NAVIAGTOR [GO TOP, GO BOTTOM] BUTTON
g.classList.add("util-display-n"),v.classList.add("util-display-n"))}function k(){m.classList.remove("util-show-element-transform"),f.classList.remove("util-show-element-transform")}function w(){return'\n <svg class="nav__btn__off--icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve">\n<g>\n	<path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136\n		c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786\n		C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835\n		c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165\n		C294.843,66.133,228.71,0,147.421,0z"/>\n	<path d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236\n		c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z"/>\n	<path d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485\n		L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z"/>\n	<path d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485\n		c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n'}function L(){return'\n  <svg class="nav__btn__on--icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve">\n<g>\n	<path d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331\n		c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12\n		s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6\n		c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z"/>\n	<path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z"/>\n	<path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z"/>\n	<path d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473\n		C213.971,216.658,216.658,213.971,216.658,210.658z"/>\n  '}var C=document.querySelector("body"),q=document.querySelector(".view__changer__btn--container");function E(){q.classList.remove("night--icon"),q.innerHTML='\n  <svg id="view__changer--btn" class="day__mode__icon--on" height="512" viewBox="0 0 16 16" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_34" data-name="34"><path d="m12 8a4 4 0 1 0 -4 4 4 4 0 0 0 4-4zm-4 3a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z"/><path d="m9 3.11h.14a.49.49 0 0 0 .48-.36l.38-1.11a.5.5 0 0 0 -1-.28l-.3 1.13a.5.5 0 0 0 .3.62z"/><path d="m7 12.89a.5.5 0 0 0 -.62.34l-.38 1.13a.5.5 0 0 0 .34.62h.14a.49.49 0 0 0 .52-.34l.32-1.13a.5.5 0 0 0 -.32-.62z"/><path d="m14.64 9-1.13-.3a.5.5 0 0 0 -.28 1l1.13.32h.14a.5.5 0 0 0 .14-1z"/><path d="m2.63 7.32a.5.5 0 0 0 .14-1l-1.13-.32a.5.5 0 0 0 -.28 1l1.13.32z"/><path d="m14.1 4.22a.51.51 0 0 0 -.68-.2l-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .24-.06l1-.57a.51.51 0 0 0 .2-.68z"/><path d="m3.13 10.53-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .21-.04l1-.57a.5.5 0 1 0 -.48-.88z"/><path d="m4.59 3.61a.49.49 0 0 0 .41.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68l-.57-1a.5.5 0 0 0 -.87.45z"/><path d="m11.41 12.39a.5.5 0 0 0 -.88.48l.57 1a.49.49 0 0 0 .44.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68z"/></g></svg>',C.classList.add("nightTheme"),localStorage.setItem("theme","night")}function T(){q.classList.add("night--icon"),q.innerHTML='\n  <svg id="view__changer--btn" class="day__mode__icon--off" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m12 22.75a10.75 10.75 0 0 1 -1.085-21.45.754.754 0 0 1 .7.332.746.746 0 0 1 .033.774 7.387 7.387 0 0 0 -.898 3.594 7.021 7.021 0 0 0 6.75 7.25 6.385 6.385 0 0 0 4.021-1.436.75.75 0 0 1 1.218.615 10.713 10.713 0 0 1 -10.739 10.321zm-2.261-19.724a9.252 9.252 0 1 0 11.317 10.868 7.771 7.771 0 0 1 -3.556.856 8.521 8.521 0 0 1 -8.25-8.75 9.045 9.045 0 0 1 .489-2.974z"/></g></svg>',C.classList.remove("nightTheme"),localStorage.setItem("theme","day")}var A=document.querySelector("#content__main--section"),P=document.querySelector(".content__nav--btn"),x=document.querySelectorAll(".float__btn--container");new IntersectionObserver(function(t){a(t,1)[0].isIntersecting?(// SHOW NAVIGATOR BUTTON
P.classList.add("util-display-y"),x.forEach(function(t){t.classList.add("util-show-element-transform")})):(// HIDE NAVIGATOR BUTTON
P.classList.remove("util-display-y"),x.forEach(function(t){t.classList.remove("util-show-element-transform")}))},{root:null,threshold:0,rootMargin:"-300px"}).observe(A);var O=document.querySelector(".content__nav--btn"),B=document.querySelector("#nav__top--btn"),M=document.querySelector("#nav__bottom--btn"),I=document.querySelector(".overlay"),z=document.querySelector(".contentPage__magic-btn"),H=document.querySelector(".content__magic"),j=document.querySelector(".font-family--input"),F=document.querySelector(".content-font--input"),D=document.querySelector(".content__font-size--value"),N=document.querySelector(".contentMagic__color-input"),R=document.querySelector(".contentMagic__background-color-input"),U=document.querySelector(".content__padding__ltr"),Y=document.querySelector(".content__padding--value"),$=document.querySelector(".content__line-height"),G=document.querySelector(".content__line-height--value");function J(t){var e=document.querySelectorAll("h1"),n=document.querySelectorAll("h2"),s=document.querySelectorAll("h3"),o=document.querySelectorAll("h4"),r=document.querySelectorAll("a"),i=document.querySelectorAll(".navigator__btn"),a=document.querySelectorAll(".post__code"),c=document.querySelectorAll(".list"),u=document.querySelectorAll(".content__post");e.forEach(function(e){return e.style.fontFamily=t}),n.forEach(function(e){return e.style.fontFamily=t}),s.forEach(function(e){return e.style.fontFamily=t}),o.forEach(function(e){return e.style.fontFamily=t}),r.forEach(function(e){return e.style.fontFamily=t}),i.forEach(function(e){return e.style.fontFamily=t}),a.forEach(function(e){return e.style.fontFamily=t}),c.forEach(function(e){return e.style.fontFamily=t}),u.forEach(function(e){return e.style.fontFamily=t})}// FONT SIZE
function K(t){var e=document.querySelectorAll(".content__post");console.log(t),e.forEach(function(e){return e.style.fontSize="".concat(t,"rem")})}// FONT COLOR
function Q(t){var e=document.querySelectorAll("h2"),n=document.querySelectorAll("h3"),s=document.querySelectorAll("h4"),o=document.querySelectorAll("a"),r=document.querySelectorAll(".navigator__btn"),i=document.querySelectorAll(".content__post"),a=document.querySelectorAll(".post__code"),c=document.querySelectorAll(".list");e.forEach(function(e){return e.style.color=t}),n.forEach(function(e){return e.style.color=t}),s.forEach(function(e){return e.style.color=t}),o.forEach(function(e){return e.style.color=t}),r.forEach(function(e){return e.style.color=t}),i.forEach(function(e){return e.style.color=t}),a.forEach(function(e){return e.style.color=t}),c.forEach(function(e){return e.style.color=t})}// BACKGROUND COLOR
function V(t){var e=document.querySelectorAll("h2"),n=document.querySelectorAll("h4"),s=document.querySelectorAll(".post__code"),o=document.querySelectorAll(".float__btn--container"),r=document.querySelector(".contentPage__magic-btn");document.body.style.backgroundColor=t,e.forEach(function(e){return e.style.backgroundColor=t}),n.forEach(function(e){return e.style.backgroundColor=t}),s.forEach(function(e){return e.style.backgroundColor=t}),o.forEach(function(e){return e.style.backgroundColor=t}),o.forEach(function(e){return e.style.border="5px solid ".concat(t)}),r.style.backgroundColor="transparent",r.style.border="none"}// PADDING SETTER
function W(t){var e=document.querySelector(".content__nav--btn");document.body.style.paddingLeft="".concat(t,"rem"),document.body.style.paddingRight="".concat(t,"rem"),e.style.padding="none"}// LINE-HEIGHT
function X(t){document.querySelectorAll(".content__post").forEach(function(e){return e.style.lineHeight="".concat(t,"rem")})}function Z(){H.classList.remove("noTransform--js"),H.classList.add("inactive"),z.style.fill="black",I.classList.remove("util-display-y"),document.body.style.overflow="auto",B.classList.remove("util-display-n"),M.classList.remove("util-display-n"),O.classList.remove("util-hide-element-transform")}var tt=document.querySelector("#main__home--container"),te=document.querySelector(".content__page--container");tt&&b(),te&&(b(),"night"===localStorage.getItem("theme")?E():T(),document.addEventListener("click",function(t){t.target.closest("#view__changer--container")&&(q.classList.contains("night--icon")?E():T())}),document.addEventListener("click",function(t){t.target.closest(".contentPage__magic-btn")&&(H.classList.contains("inactive")?(H.classList.add("noTransform--js"),H.classList.remove("inactive"),z.style.fill="red",I.classList.add("util-display-y"),document.body.style.overflow="hidden",B.classList.add("util-display-n"),M.classList.add("util-display-n"),O.classList.add("util-hide-element-transform")):Z()),t.target.classList.contains("overlay")&&Z()}),// FONT FAMILY
j.addEventListener("change",function(t){switch(t.target.value){case"1":J("Roboto");break;case"2":J("Open Sans");break;case"3":J("Roboto Condensed");break;case"4":J("Bitter");break;case"5":J("Cinzel");break;case"6":J("Roboto Mono")}}),// FONT SIZE
F.addEventListener("change",function(t){var e=t.target.value;switch(D.textContent=e,e){case"1":K("1.8");break;case"2":K("2.4");break;case"3":K("3");break;case"4":K("3.8");break;case"5":K("4.3")}}),// FONT COLOR
N.addEventListener("change",function(t){switch(t.target.value){case"red":Q("red");break;case"green":Q("green");break;case"blue":Q("blue");break;case"yellow":Q("yellow");break;case"white":Q("white");break;case"pink":Q("pink")}}),// BACKGROUND COLOR
R.addEventListener("change",function(t){var e=t.target.value;switch(console.log(e),e){case"red":V("red");break;case"yellow":V("yellow");break;case"green":V("green");break;case"blue":V("blue");break;case"pink":V("pink");break;case"black":V("black")}}),// PADDING LEFT-RIGHT
U.addEventListener("change",function(t){var e=t.target.value;switch(Y.textContent=e,e){case"1":W("1");break;case"2":W("2");break;case"3":W("4");break;case"4":W("6");break;case"5":W("8")}}),// LINE-HEIGHT
$.addEventListener("change",function(t){var e=t.target.value;switch(G.textContent=e,e){case"1":X("6");break;case"2":X("9");break;case"3":X("11");break;case"4":X("13");break;case"5":X("15")}}));// const mainHomeHTML = new Typed('#typed--html__span', {
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
}();//# sourceMappingURL=index.c06615ae.js.map

//# sourceMappingURL=index.c06615ae.js.map