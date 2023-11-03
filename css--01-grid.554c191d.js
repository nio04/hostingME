/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-solarizedlight&languages=markup+css+clike+javascript+css-extras+git+regex+scss&plugins=line-numbers+previewers+normalize-whitespace+toolbar+copy-to-clipboard+match-braces *//// <reference lib="WebWorker"/>
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e,t,n,a,r,i,s,o=function(e){// Private helper vars
var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},r={/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */manual:e.Prism&&e.Prism.manual,/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */clone:function e(t,n){var a,i;switch(n=n||{},r.util.type(t)){case"Object":if(n[i=r.util.objId(t)])return n[i];for(var s in a=/** @type {Record<string, any>} */{},n[i]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],n));return /** @type {any} */a;case"Array":if(n[i=r.util.objId(t)])return n[i];return a=[],n[i]=a,/** @type {Array} *//** @type {any} */t.forEach(function(t,r){a[r]=e(t,n)}),/** @type {any} */a;default:return t}},/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */setLanguage:function(e,n){// remove all `language-xxxx` classes
// (this might leave behind a leading space)
e.className=e.className.replace(RegExp(t,"gi"),""),// add the new `language-xxxx` class
// (using `classList` will automatically clean up spaces for us)
e.classList.add("language-"+n)},/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return /** @type {any} */document.currentScript;// IE11 workaround
// we'll get the src of the current script by parsing IE11's error stack trace
// this will not work for inline scripts
try{throw Error()}catch(a){// Get file src url from stack. Specifically works with the format of stack traces in IE.
// A stack will look like this:
//
// Error
//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
//    at Global code (http://localhost/components/prism-core.js:606:1)
var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */languages:{/**
			 * The grammar for plain, unformatted text.
			 */plain:a,plaintext:a,text:a,txt:a,/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */insertBefore:function(e,t,n,a){var i=(a=a||/** @type {any} */r.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var u=a[e];return a[e]=s,// Update references in other language definitions
r.languages.DFS(r.languages,function(t,n){n===u&&t!=e&&(this[t]=s)}),s},// Traverse a language definition with Depth First Search
DFS:function e(t,n,a,i){i=i||{};var s=r.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],u=r.util.type(l);"Object"!==u||i[s(l)]?"Array"!==u||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,s=0;i=a.elements[s++];)r.highlightElement(i,!0===t,a.callback)},/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */highlightElement:function(t,n,a){// Find language
var i=r.util.getLanguage(t),s=r.languages[i];// Set language on the element, if not present
r.util.setLanguage(t,i);// Set language on the parent, for styling
var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&r.util.setLanguage(o,i);var l=t.textContent,u={element:t,language:i,grammar:s,code:l};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),a&&a.call(u.element)}if(r.hooks.run("before-sanity-check",u),// plugins may change/add the parent/element
(o=u.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!u.code){r.hooks.run("complete",u),a&&a.call(u.element);return}if(r.hooks.run("before-highlight",u),!u.grammar){c(r.util.encode(u.code));return}if(n&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language))},/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(r.hooks.run("before-tokenize",a),!a.grammar)throw Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),i.stringify(r.util.encode(a.tokens),a.language)},/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var u=new o;return l(u,u.head,e),/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */function e(t,n,a,o,u,c){for(var d in a)if(a.hasOwnProperty(d)&&a[d]){var g=a[d];g=Array.isArray(g)?g:[g];for(var p=0;p<g.length;++p){if(c&&c.cause==d+","+p)return;var h=g[p],f=h.inside,m=!!h.lookbehind,b=!!h.greedy,y=h.alias;if(b&&!h.pattern.global){// Without the global flag, lastIndex won't work
var v=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}for(var k=h.pattern||h,w=o.next,x=u;w!==n.tail&&(!c||!(x>=c.reach));x+=w.value.length,w=w.next){var F,A=w.value;if(n.length>t.length)return;if(!(A instanceof i)){var L=1;// this is the to parameter of removeBetween
if(b){if(!(F=s(k,x,t,m))||F.index>=t.length)break;var S=F.index,$=F.index+F[0].length,E=x;for(// find the node that contains the match
E+=w.value.length;S>=E;)E+=(w=w.next).value.length;// the current node is a Token, then the match starts inside another Token, which is invalid
if(// adjust pos (and p)
E-=w.value.length,x=E,w.value instanceof i)continue;// find the last node which is affected by this match
for(var C=w;C!==n.tail&&(E<$||"string"==typeof C.value);C=C.next)L++,E+=C.value.length;L--,// replace with the new match
A=t.slice(x,E),F.index-=x}else if(!(F=s(k,0,A,m)))continue;// eslint-disable-next-line no-redeclare
var S=F.index,_=F[0],B=A.slice(0,S),z=A.slice(S+_.length),O=x+A.length;c&&O>c.reach&&(c.reach=O);var T=w.prev;if(B&&(T=l(n,T,B),x+=B.length),/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */function(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}(n,T,L),w=l(n,T,new i(d,f?r.tokenize(_,f):_,y,_)),z&&l(n,w,z),L>1){// at least one Token object was removed, so we have to do some rematching
// this can only happen if the current pattern is greedy
/** @type {RematchOptions} */var P={cause:d+","+p,reach:O};e(t,n,a,w.prev,x,P),c&&P.reach>c.reach&&(c.reach=P.reach)}}}}}}(e,u,t,u.head,0),/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(u)},/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */hooks:{all:{},/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:i};// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token
/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */function i(e,t,n,a){/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */this.type=e,/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */this.content=t,/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */this.alias=n,// Copy of the full string this token was created from
this.length=0|(a||"").length}/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */function s(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){// change the match to remove the text matched by the Prism lookbehind group
var i=r[1].length;r.index+=i,r[0]=r[0].slice(i)}return r}/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 *//**
	 * @template T
	 * @private
	 */function o(){/** @type {LinkedListNode<T>} */var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,/** @type {LinkedListNode<T>} */this.head=e,/** @type {LinkedListNode<T>} */this.tail=t,this.length=0}/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */function l(e,t,n){// assumes that node != list.tail && values.length >= 0
var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}if(e.Prism=r,/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 *//**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach(function(t){a+=e(t,n)}),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),r.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,s=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),s&&e.close()},!1)),r;// Get current script and highlight
var u=r.util.currentScript();function c(){r.manual||r.highlightAll()}if(u&&(r.filename=u.src,u.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){// If the document state is "loading", then we'll use DOMContentLoaded.
// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
// might take longer one animation frame to execute which can create a race condition where only some plugins have
// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
// See https://github.com/PrismJS/prism/issues/2102
var d=document.readyState;"loading"===d||"interactive"===d&&u&&u.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return r}("undefined"!=typeof window?window// if in browser
:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self// if in worker
:{}// if in node js
);"undefined"!=typeof module&&module.exports&&(module.exports=o),"undefined"!=typeof global&&(global.Prism=o),/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{// https://www.w3.org/TR/xml/#NT-doctypedecl
pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null// see below
},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,// Plugin to make entity title show the real entity, idea by Roman Komarov
o.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:o.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:a},o.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */value:function(e,t){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:o.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml,e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{// https://drafts.csswg.org/css-values-3/#urls
pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css,(t=o.languages.markup)&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css")),o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+// constant
(/NaN|Infinity/.source+"|"+// binary integer
/0[bB][01]+(?:_[01]+)*n?/.source+"|"+// octal integer
/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+// hexadecimal integer
/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|")+// decimal bigint
/\d+(?:_\d+)*n/.source+"|"+// decimal number (integer or float) but no bigint
/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(// eslint-disable-next-line regexp/no-dupe-characters-character-class
/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+// Regex pattern:
// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
// with the only syntax, so we have to define 2 different regex patterns.
/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+// `v` flag syntax. This supports 3 levels of nested character classes.
/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+// lookahead
/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},// This must be declared before keyword because we use "function" inside the look-forward
"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),// add attribute support for all DOM events.
// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
o.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),o.languages.js=o.languages.javascript,function(e){var t,n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp("\\[(?:[^[\\]\"']|"+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,// the `tag` token has been existed and removed.
// because we can't find a perfect tokenize to match it.
// if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=t,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},r={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},// CAREFUL!
// Previewers and Inline color use hexcode and color.
hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:r,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],// it's important that there is no boundary assertion after the hex digits
entity:/\\[\da-f]{1,8}/i,unit:a,number:r})}(o),o.languages.git={/*
	 * A simple one line comment like in a git status command
	 * For instance:
	 * $ git status
	 * # On branch infinite-scroll
	 * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
	 * # and have 1 and 2 different commits each, respectively.
	 * nothing to commit (working directory clean)
	 */comment:/^#.*/m,/*
	 * Regexp to match the changed lines in a git diff output. Check the example below.
	 */deleted:/^[-–].*/m,inserted:/^\+.*/m,/*
	 * a string (double and simple quote)
	 */string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,/*
	 * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
	 * For instance:
	 * $ git add file.txt
	 */command:{pattern:/^.*\$ git .*$/m,inside:{/*
			 * A git command can contain a parameter starting by a single or a double dash followed by a string
			 * For instance:
			 * $ git diff --cached
			 * $ git log -p
			 */parameter:/\s--?\w+/}},/*
	 * Coordinates displayed in a git diff command
	 * For instance:
	 * $ git diff
	 * diff --git file.txt file.txt
	 * index 6214953..1d54a52 100644
	 * --- file.txt
	 * +++ file.txt
	 * @@ -1 +1,2 @@
	 * -Here's my tetx file
	 * +Here's my text file
	 * +And this is the second line
	 */coord:/^@@.*@@$/m,/*
	 * Match a "commit [SHA1]" line in a git log output.
	 * For instance:
	 * $ git log
	 * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
	 * Author: lgiraudel
	 * Date:   Mon Feb 17 11:18:34 2014 +0100
	 *
	 *     Add of a new line
	 */"commit-sha1":/^commit \w{40}$/m},n={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},i=RegExp((r="(?:[^\\\\-]|"+(a=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source+")")+"-"+r),s={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},o.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:i,inside:{escape:a,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":n,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:a}},"special-escape":n,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{// a backreference which is not an octal escape
pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":s}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:a,group:[{// https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
// https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs
// (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":s}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}},o.languages.scss=o.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},// url, compassified
url:/(?:[-a-z]+-)?url(?=\()/i,// CSS selector regex is not appropriate for Sass
// since there can be lot more things (var, @ directive, nesting..)
// a selector must start at the end of a property or after a brace (end of other rules or nesting)
// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
// can "pass" as a selector- e.g: proper#{$erty})
// this one was hard to do, so please be careful if you edit this one :)
selector:{// Initial look-ahead is used to prevent matching of blank selectors
pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),o.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),o.languages.insertBefore("scss","important",{// var and interpolated vars
variable:/\$[-\w]+|#\{\$[-\w]+\}/}),o.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),o.languages.scss.atrule.inside.rest=o.languages.scss,function(){if(void 0!==o&&"undefined"!=typeof document){/**
	 * Plugin name which is used as a class name for <pre> which is activating the plugin
	 *
	 * @type {string}
	 */var e="line-numbers",t=/\n(?!$)/g,n=o.plugins.lineNumbers={/**
		 * Get node for provided line number
		 *
		 * @param {Element} element pre element
		 * @param {number} number line number
		 * @returns {Element|undefined}
		 */getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var a=t.querySelector(".line-numbers-rows");if(a){var r=parseInt(t.getAttribute("data-start"),10)||1,i=r+(a.children.length-1);n<r&&(n=r),n>i&&(n=i);var s=n-r;return a.children[s]}}},/**
		 * Resizes the line numbers of the given element.
		 *
		 * This function will not add line numbers. It will only resize existing ones.
		 *
		 * @param {HTMLElement} element A `<pre>` element with line numbers.
		 * @returns {void}
		 */resize:function(e){r([e])},/**
		 * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
		 * the current viewport.
		 *
		 * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
		 *
		 * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
		 *
		 * @type {boolean}
		 */assumeViewportIndependence:!0},a=void 0;window.addEventListener("resize",function(){n.assumeViewportIndependence&&a===window.innerWidth||(a=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),o.hooks.add("complete",function(n){if(n.code){var a,i=/** @type {Element} */n.element,s=/** @type {HTMLElement} */i.parentNode;// works only for <code> wrapped inside <pre> (not inline)
if(!(!s||!/pre/i.test(s.nodeName)||i.querySelector(".line-numbers-rows"))&&o.util.isActive(i,e)){// Remove the class 'line-numbers' from the <code>
i.classList.remove(e),// Add the class 'line-numbers' to the <pre>
s.classList.add(e);var l=n.code.match(t),u=Array((l?l.length+1:1)+1).join("<span></span>");(a=document.createElement("span")).setAttribute("aria-hidden","true"),a.className="line-numbers-rows",a.innerHTML=u,s.hasAttribute("data-start")&&(s.style.counterReset="linenumber "+(parseInt(s.getAttribute("data-start"),10)-1)),n.element.appendChild(a),r([s]),o.hooks.run("line-numbers",n)}}}),o.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}/**
	 * Resizes the given elements.
	 *
	 * @param {HTMLElement[]} elements
	 */function r(e){if(0!=(e=e.filter(function(e){var t=(e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null)["white-space"];return"pre-wrap"===t||"pre-line"===t})).length){var n=e.map(function(e){var n=e.querySelector("code"),a=e.querySelector(".line-numbers-rows");if(n&&a){/** @type {HTMLElement} */var r=e.querySelector(".line-numbers-sizer"),i=n.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",n.appendChild(r)),r.innerHTML="0",r.style.display="block";var s=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:i,lineHeights:[],oneLinerHeight:s,sizer:r}}}).filter(Boolean);n.forEach(function(e){var t=e.sizer,n=e.lines,a=e.lineHeights,r=e.oneLinerHeight;a[n.length-1]=void 0,n.forEach(function(e,n){if(e&&e.length>1){var i=t.appendChild(document.createElement("span"));i.style.display="block",i.textContent=e}else a[n]=r})}),n.forEach(function(e){for(var t=e.sizer,n=e.lineHeights,a=0,r=0;r<n.length;r++)void 0===n[r]&&(n[r]=t.children[a++].getBoundingClientRect().height)}),n.forEach(function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach(function(e,t){n.children[t].style.height=e+"px"})})}}}(),function(){if(void 0!==o&&"undefined"!=typeof document&&Function.prototype.bind){var e,t,n,a,r={// gradient must be defined before color and angle
gradient:{create:(e={},t=function(e,t,n){// Default value for angle
var a="180deg";return/^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0])&&0>(a=n.shift()).indexOf("to ")&&(a.indexOf("top")>=0?a=a.indexOf("left")>=0?"to bottom right":a.indexOf("right")>=0?"to bottom left":"to bottom":a.indexOf("bottom")>=0?a=a.indexOf("left")>=0?"to top right":a.indexOf("right")>=0?"to top left":"to top":a.indexOf("left")>=0?a="to right":a.indexOf("right")>=0?a="to left":e&&(a.indexOf("deg")>=0?a=90-parseFloat(a)+"deg":a.indexOf("rad")>=0&&(a=Math.PI/2-parseFloat(a)+"rad"))),t+"("+a+","+n.join(",")+")"},n=function(e,t,n){if(0>n[0].indexOf("at")){// Looks like old syntax
// Default values
var a="center",r="ellipse",i="farthest-corner";if(/\b(?:bottom|center|left|right|top)\b|^\d+/.test(n[0])&&// Remove angle value, if any
(a=n.shift().replace(/\s*-?\d+(?:deg|rad)\s*/,"")),/\b(?:circle|closest|contain|cover|ellipse|farthest)\b/.test(n[0])){// Found a shape and/or size
var s=n.shift().split(/\s+/);s[0]&&("circle"===s[0]||"ellipse"===s[0])&&(r=s.shift()),s[0]&&(i=s.shift()),"cover"===i?i="farthest-corner":"contain"===i&&(i="clothest-side")}return t+"("+r+" "+i+" at "+a+","+n.join(",")+")"}return t+"("+n.join(",")+")"},a=function(a){if(e[a])return e[a];var r=a.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),i=r&&r[1],s=r&&r[2],o=a.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,"").split(/\s*,\s*/);return s.indexOf("linear")>=0?e[a]=t(i,s,o):s.indexOf("radial")>=0?e[a]=n(i,s,o):e[a]=s+"("+o.join(",")+")"},function(){new o.plugins.Previewer("gradient",function(e){return this.firstChild.style.backgroundImage="",this.firstChild.style.backgroundImage=a(e),!!this.firstChild.style.backgroundImage},"*",function(){this._elt.innerHTML="<div></div>"})}),tokens:{gradient:{pattern:/(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:hsl|rgb)a?\(.+?\)|[^\)])+\)/gi,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",before:"punctuation",inside:"inside",root:o.languages.sass&&o.languages.sass["variable-line"]},{lang:"sass",before:"punctuation",inside:"inside",root:o.languages.sass&&o.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:o.languages.stylus&&o.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:o.languages.stylus&&o.languages.stylus["variable-declaration"].inside}]}},angle:{create:function(){new o.plugins.Previewer("angle",function(e){var t,n,a=parseFloat(e),r=e.match(/[a-z]+$/i);if(!a||!r)return!1;switch(r=r[0]){case"deg":t=360;break;case"grad":t=400;break;case"rad":t=2*Math.PI;break;case"turn":t=1}return n=100*a/t%100,this[(a<0?"set":"remove")+"Attribute"]("data-negative",""),this.querySelector("circle").style.strokeDasharray=Math.abs(n)+",500",!0},"*",function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'})},tokens:{angle:/(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:o.languages.markup&&o.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:o.languages.sass&&o.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:o.languages.sass&&o.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:o.languages.stylus&&o.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:o.languages.stylus&&o.languages.stylus["variable-declaration"].inside}]}},color:{create:function(){new o.plugins.Previewer("color",function(e){return this.style.backgroundColor="",this.style.backgroundColor=e,!!this.style.backgroundColor})},tokens:{color:[o.languages.css.hexcode].concat(o.languages.css.color)},languages:{// CSS extras is required, so css and scss are not necessary
css:!1,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:o.languages.markup&&o.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",before:"punctuation",inside:"inside",root:o.languages.sass&&o.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:o.languages.sass&&o.languages.sass["property-line"]}],scss:!1,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:o.languages.stylus&&o.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:o.languages.stylus&&o.languages.stylus["variable-declaration"].inside}]}},easing:{create:function(){new o.plugins.Previewer("easing",function(e){var t=(e=({linear:"0,0,1,1",ease:".25,.1,.25,1","ease-in":".42,0,1,1","ease-out":"0,0,.58,1","ease-in-out":".42,0,.58,1"})[e]||e).match(/-?(?:\d+(?:\.\d+)?|\.\d+)/g);if(4===t.length){t=t.map(function(e,t){return(t%2?1-e:e)*100}),this.querySelector("path").setAttribute("d","M0,100 C"+t[0]+","+t[1]+", "+t[2]+","+t[3]+", 100,0");var n=this.querySelectorAll("line");return n[0].setAttribute("x2",t[0]),n[0].setAttribute("y2",t[1]),n[1].setAttribute("x2",t[2]),n[1].setAttribute("y2",t[3]),!0}return!1},"*",function(){this._elt.innerHTML='<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>'})},tokens:{easing:{pattern:/\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:ease(?:-in)?(?:-out)?|linear)(?=\s|[;}]|$)/i,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",inside:"inside",before:"punctuation",root:o.languages.sass&&o.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:o.languages.sass&&o.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:o.languages.stylus&&o.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:o.languages.stylus&&o.languages.stylus["variable-declaration"].inside}]}},time:{create:function(){new o.plugins.Previewer("time",function(e){var t=parseFloat(e),n=e.match(/[a-z]+$/i);return!!t&&!!n&&(n=n[0],this.querySelector("circle").style.animationDuration=2*t+n,!0)},"*",function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'})},tokens:{time:/(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:o.languages.markup&&o.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:o.languages.sass&&o.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:o.languages.sass&&o.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:o.languages.stylus&&o.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:o.languages.stylus&&o.languages.stylus["variable-declaration"].inside}]}}},i=function(e){var t=e.getBoundingClientRect(),n=t.left,a=t.top,r=document.documentElement.getBoundingClientRect();return n-=r.left,{top:a-=r.top,right:innerWidth-n-t.width,bottom:innerHeight-a-t.height,left:n,width:t.width,height:t.height}},s="token",l="active",u="flipped",c=function(e,t,n,a){this._elt=null,this._type=e,this._token=null,this.updater=t,this._mouseout=this.mouseout.bind(this),this.initializer=a;var r=this;n||(n=["*"]),Array.isArray(n)||(n=[n]),n.forEach(function(e){"string"!=typeof e&&(e=e.lang),c.byLanguages[e]||(c.byLanguages[e]=[]),0>c.byLanguages[e].indexOf(r)&&c.byLanguages[e].push(r)}),c.byType[e]=this};for(var d in /**
	 * Creates the HTML element for the previewer.
	 */c.prototype.init=function(){!this._elt&&(this._elt=document.createElement("div"),this._elt.className="prism-previewer prism-previewer-"+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},/**
	 * @param {Element} token
	 * @returns {boolean}
	 */c.prototype.isDisabled=function(e){do if(e.hasAttribute&&e.hasAttribute("data-previewers"))return -1===(e.getAttribute("data-previewers")||"").split(/\s+/).indexOf(this._type);while(e=e.parentNode)return!1},/**
	 * Checks the class name of each hovered element
	 *
	 * @param {Element} token
	 */c.prototype.check=function(e){if(!(e.classList.contains(s)&&this.isDisabled(e))){do if(e.classList&&e.classList.contains(s)&&e.classList.contains(this._type))break;while(e=e.parentNode)e&&e!==this._token&&(this._token=e,this.show())}},/**
	 * Called on mouseout
	 */c.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1),this._token=null,this.hide()},/**
	 * Shows the previewer positioned properly for the current token.
	 */c.prototype.show=function(){if(this._elt||this.init(),this._token){if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var e=i(this._token);this._elt.classList.add(l),e.top-this._elt.offsetHeight>0?(this._elt.classList.remove(u),this._elt.style.top=e.top+"px",this._elt.style.bottom=""):(this._elt.classList.add(u),this._elt.style.bottom=e.bottom+"px",this._elt.style.top=""),this._elt.style.left=e.left+Math.min(200,e.width/2)+"px"}else this.hide()}},/**
	 * Hides the previewer.
	 */c.prototype.hide=function(){this._elt.classList.remove(l)},/**
	 * Map of all registered previewers by language
	 *
	 * @type {{}}
	 */c.byLanguages={},/**
	 * Map of all registered previewers by type
	 *
	 * @type {{}}
	 */c.byType={},/**
	 * Initializes the mouseover event on the code block.
	 *
	 * @param {HTMLElement} elt The code block (env.element)
	 * @param {string} lang The language (env.language)
	 */c.initEvents=function(e,t){var n=[];c.byLanguages[t]&&(n=n.concat(c.byLanguages[t])),c.byLanguages["*"]&&(n=n.concat(c.byLanguages["*"])),e.addEventListener("mouseover",function(e){var t=e.target;n.forEach(function(e){e.check(t)})},!1)},o.plugins.Previewer=c,o.hooks.add("before-highlight",function(e){for(var t in r){var n=r[t].languages;if(e.language&&n[e.language]&&!n[e.language].initialized){var a=n[e.language];Array.isArray(a)||(a=[a]),a.forEach(function(a){var i,s,l,u;!0===a?(i="important",s=e.language):(i=a.before||"important",s=a.inside||a.lang,l=a.root||o.languages,u=a.skip),a=e.language,!u&&o.languages[a]&&(o.languages.insertBefore(s,i,r[t].tokens,l),e.grammar=o.languages[a],n[e.language]={initialized:!0})})}}}),// Initialize the previewers only when needed
o.hooks.add("after-highlight",function(e){(c.byLanguages["*"]||c.byLanguages[e.language])&&c.initEvents(e.element,e.language)}),r)r[d].create()}}(),function(){if(void 0!==o){var e=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},t={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(t){this.defaults=e(this.defaults,t)},normalize:function(t,n){for(var a in n=e(this.defaults,n)){var r=a.replace(/-(\w)/g,function(e,t){return t.toUpperCase()});"normalize"!==a&&"setDefaults"!==r&&n[a]&&this[r]&&(t=this[r].call(this,t,n[a]))}return t},/*
		 * Normalization methods
		 */leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"	")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},// Support for deprecated plugin remove-initial-line-feed
removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length&&(t.sort(function(e,t){return e.length-t.length}),t[0].length)?e.replace(RegExp("^"+t[0],"gm"),""):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,Array(++t).join("	")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),r=0;r<n.length;++r)if(!(a(n[r])<=t)){for(var i=n[r].split(/(\s+)/g),s=0,o=0;o<i.length;++o){var l=a(i[o]);(s+=l)>t&&(i[o]="\n"+i[o],s=l)}n[r]=i.join("")}return n.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=n),o.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,indent:4}),o.hooks.add("before-sanity-check",function(e){var n=o.plugins.NormalizeWhitespace;// Check settings
if((!e.settings||!1!==e.settings["whitespace-normalization"])&&o.util.isActive(e.element,"whitespace-normalization",!0)){// Simple mode if there is no env.element
if((!e.element||!e.element.parentNode)&&e.code){e.code=n.normalize(e.code,e.settings);return}// Normal mode
var a=e.element.parentNode;if(e.code&&a&&"pre"===a.nodeName.toLowerCase()){// Read settings from 'data-' attributes
for(var r in null==e.settings&&(e.settings={}),t)if(Object.hasOwnProperty.call(t,r)){var i=t[r];if(a.hasAttribute("data-"+r))try{var s=JSON.parse(a.getAttribute("data-"+r)||"true");(void 0===s?"undefined":s&&"undefined"!=typeof Symbol&&s.constructor===Symbol?"symbol":typeof s)===i&&(e.settings[r]=s)}catch(e){// ignore error
}}// Move surrounding whitespace from the <pre> tag into the <code> tag
for(var l=a.childNodes,u="",c="",d=!1,g=0;g<l.length;++g){var p=l[g];p==e.element?d=!0:"#text"===p.nodeName&&(d?c+=p.nodeValue:u+=p.nodeValue,a.removeChild(p),--g)}if(e.element.children.length&&o.plugins.KeepMarkup){// Preserve markup for keep-markup plugin
var h=u+e.element.innerHTML+c;e.element.innerHTML=n.normalize(h,e.settings),e.code=e.element.textContent}else e.code=u+e.code+c,e.code=n.normalize(e.code,e.settings)}}})}function n(t){this.defaults=e({},t)}function a(e){for(var t=0,n=0;n<e.length;++n)9==e.charCodeAt(n)&&(t+=3);return e.length+t}}(),function(){if(void 0!==o&&"undefined"!=typeof document){var e=[],t={},n=function(){};o.plugins.toolbar={};/**
	 * @typedef ButtonOptions
	 * @property {string} text The text displayed.
	 * @property {string} [url] The URL of the link which will be created.
	 * @property {Function} [onClick] The event listener for the `click` event of the created button.
	 * @property {string} [className] The class attribute to include with element.
	 *//**
	 * Register a button callback with the toolbar.
	 *
	 * @param {string} key
	 * @param {ButtonOptions|Function} opts
	 */var a=o.plugins.toolbar.registerButton=function(n,a){var r;if(r="function"==typeof a?a:function(e){var t;return"function"==typeof a.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){a.onClick.call(this,e)})):"string"==typeof a.url?(t=document.createElement("a")).href=a.url:t=document.createElement("span"),a.className&&t.classList.add(a.className),t.textContent=a.text,t},n in t){console.warn('There is a button with the key "'+n+'" registered already.');return}e.push(t[n]=r)},r=o.plugins.toolbar.hook=function(a){// Check if inline or actual code block (credit to line-numbers plugin)
var r=a.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")){// Create wrapper for <pre> to prevent scrolling toolbar with content
var i=document.createElement("div");i.classList.add("code-toolbar"),r.parentNode.insertBefore(i,r),i.appendChild(r);// Setup the toolbar
var s=document.createElement("div");s.classList.add("toolbar");// order callbacks
var o=e,l=/**
	 * Returns the callback order of the given element.
	 *
	 * @param {HTMLElement} element
	 * @returns {string[] | undefined}
	 */function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t){if((t=t.trim()).length)return t.split(/\s*,\s*/g);return[]}e=e.parentElement}}(a.element);l&&(o=l.map(function(e){return t[e]||n})),o.forEach(function(e){var t=e(a);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),s.appendChild(n)}}),// Add our toolbar to the currently created wrapper of <pre> tag
i.appendChild(s)}};a("label",function(e){var t,n,a=e.element.parentNode;if(a&&/pre/i.test(a.nodeName)&&a.hasAttribute("data-label")){var r=a.getAttribute("data-label");try{// Any normal text will blow up this selector.
n=document.querySelector("template#"+r)}catch(e){}return n?t=n.content:(a.hasAttribute("data-url")?(t=document.createElement("a")).href=a.getAttribute("data-url"):t=document.createElement("span"),t.textContent=r),t}}),/**
	 * Register the toolbar with Prism.
	 */o.hooks.add("complete",r)}}(),function(){if(void 0!==o&&"undefined"!=typeof document){if(!o.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}o.plugins.toolbar.registerButton("copy-to-clipboard",function(t){var n=t.element,a=/**
	 * Traverses up the DOM tree to find data attributes that override the default plugin settings.
	 *
	 * @param {Element} startElement An element to start from.
	 * @returns {Settings} The plugin settings.
	 * @typedef {Record<"copy" | "copy-error" | "copy-success" | "copy-timeout", string | number>} Settings
	 */function(e){/** @type {Settings} */var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var n in t){for(var a="data-prismjs-"+n,r=e;r&&!r.hasAttribute(a);)r=r.parentElement;r&&(t[n]=r.getAttribute(a))}return t}(n),r=document.createElement("button");r.className="copy-to-clipboard-button",r.setAttribute("type","button");var i=document.createElement("span");return r.appendChild(i),o("copy"),/**
	 * When the given elements is clicked by the user, the given text will be copied to clipboard.
	 *
	 * @param {HTMLElement} element
	 * @param {CopyInfo} copyInfo
	 *
	 * @typedef CopyInfo
	 * @property {() => string} getText
	 * @property {() => void} success
	 * @property {(reason: unknown) => void} error
	 */function(t,n){t.addEventListener("click",function(){navigator.clipboard?navigator.clipboard.writeText(n.getText()).then(n.success,function(){// try the fallback in case `writeText` didn't work
e(n)}):e(n)})}(r,{getText:function(){return n.textContent},success:function(){o("copy-success"),s()},error:function(){o("copy-error"),setTimeout(function(){// https://stackoverflow.com/a/20079910/7595472
window.getSelection().selectAllChildren(n)},1),s()}}),r;function s(){setTimeout(function(){o("copy")},a["copy-timeout"])}/** @param {"copy" | "copy-error" | "copy-success"} state */function o(e){i.textContent=a[e],r.setAttribute("data-copy-state",e)}})}// https://stackoverflow.com/a/30810322/7595472
/** @param {CopyInfo} copyInfo */function e(e){var t=document.createElement("textarea");t.value=e.getText(),// Avoid scrolling to bottom
t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout(function(){n?e.success():e.error()},1)}catch(t){setTimeout(function(){e.error(t)},1)}document.body.removeChild(t)}}(),function(){if(void 0!==o&&"undefined"!=typeof document){var e={"(":")","[":"]","{":"}"},t={"(":"brace-round","[":"brace-square","{":"brace-curly"},n={"${":"{"},a=0,r=/^(pair-\d+-)(close|open)$/;o.hooks.add("complete",function(r){/** @type {HTMLElement} */var s=r.element,d=s.parentElement;if(d&&"PRE"==d.tagName){// find the braces to match
/** @type {string[]} */var g=[];if(o.util.isActive(s,"match-braces")&&g.push("(","[","{"),0!=g.length){d.__listenerAdded||(// code blocks might be highlighted more than once
d.addEventListener("mousedown",function(){// the code element might have been replaced
var e=d.querySelector("code"),t=i("brace-selected");Array.prototype.slice.call(e.querySelectorAll("."+t)).forEach(function(e){e.classList.remove(t)})}),Object.defineProperty(d,"__listenerAdded",{value:!0}));/** @type {HTMLSpanElement[]} */var p=Array.prototype.slice.call(s.querySelectorAll("span."+i("token")+"."+i("punctuation"))),h=[];g.forEach(function(r){for(var s=e[r],o=i(t[r]),d=[],g=[],f=0;f<p.length;f++){var m=p[f];if(0==m.childElementCount){var b=m.textContent;(b=n[b]||b)===r?(h.push({index:f,open:!0,element:m}),m.classList.add(o),m.classList.add(i("brace-open")),g.push(f)):b===s&&(h.push({index:f,open:!1,element:m}),m.classList.add(o),m.classList.add(i("brace-close")),g.length&&d.push([f,g.pop()]))}}d.forEach(function(e){var t="pair-"+a+++"-",n=p[e[0]],r=p[e[1]];n.id=t+"open",r.id=t+"close",[n,r].forEach(function(e){e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",u),e.addEventListener("click",c)})})});var f=0;h.sort(function(e,t){return e.index-t.index}),h.forEach(function(e){e.open?(e.element.classList.add(i("brace-level-"+(f%12+1))),f++):(f=Math.max(0,f-1),e.element.classList.add(i("brace-level-"+(f%12+1))))})}}})}function i(e){var t=o.plugins.customClass;return t?t.apply(e,"none"):e}/**
	 * Returns the brace partner given one brace of a brace pair.
	 *
	 * @param {HTMLElement} brace
	 * @returns {HTMLElement}
	 */function s(e){var t=r.exec(e.id);return document.querySelector("#"+t[1]+("open"==t[2]?"close":"open"))}/**
	 * @this {HTMLElement}
	 */function l(){o.util.isActive(this,"brace-hover",!0)&&[this,s(this)].forEach(function(e){e.classList.add(i("brace-hover"))})}/**
	 * @this {HTMLElement}
	 */function u(){[this,s(this)].forEach(function(e){e.classList.remove(i("brace-hover"))})}/**
	 * @this {HTMLElement}
	 */function c(){o.util.isActive(this,"brace-select",!0)&&[this,s(this)].forEach(function(e){e.classList.add(i("brace-selected"))})}}();//# sourceMappingURL=css--01-grid.554c191d.js.map

//# sourceMappingURL=css--01-grid.554c191d.js.map
