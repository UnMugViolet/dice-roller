(function(){"use strict";var e={5144:function(e,t,r){var n=r(9242),o=r(3396),i=r(7139);const l={class:"absolute bottom-0 w-full flex justify-center p-10"},u=["disabled"],a={class:"w-screen h-screen-responsive bg-coal bg-image-square overflow-hidden"},c={class:"w-full h-full flex justify-center items-center"},s={key:0,class:"face text-white"},f={key:1,class:"text-white text-3xl text-center"};function d(e,t,r,n,d,h){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",l,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>h.rollDice&&h.rollDice(...e)),class:"border-2 px-5 py-2 bg-yellow-400 rounded-3xl throw-dice-button uppercase font-bold text-charcoal transform active:translate-y-1",disabled:d.rolling},"Roll it ! ",8,u)]),(0,o._)("section",a,[(0,o._)("div",c,[d.randomNumber?((0,o.wg)(),(0,o.iD)("div",s,(0,i.zw)(d.randomNumber),1)):((0,o.wg)(),(0,o.iD)("h1",f,"Start to play throw the dice :) "))])])],64)}var h=r(74),p={data(){return{randomNumber:0,rolling:!1}},methods:{rollDice(){this.rolling=!0;let e=1e3;for(let t=0;t<20;t++)setTimeout((()=>{this.randomNumber=Math.floor(6*Math.random())+1,19===t&&(this.randomNumber=Math.floor(6*Math.random())+1,setTimeout((()=>{(0,h.Z)({particleCount:1e3,spread:100,origin:{y:.6}}),this.rolling=!1}),1200))}),e),e*=.75}}},v=r(89);const b=(0,v.Z)(p,[["render",d],["__scopeId","data-v-321eb753"]]);var m=b;const w=(0,o._)("section",{class:"w-full h-full flex justify-center"},null,-1);var g={__name:"App",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[w,(0,o.Wm)(m)],64))}};const y=g;var x=y;(0,n.ri)(x).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,a=0;a<n.length;a++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(u=!1,i<l&&(l=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],u=n[1],a=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(a)var s=a(r)}for(t&&t(n);c<l.length;c++)i=l[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},n=self["webpackChunkdice_roller"]=self["webpackChunkdice_roller"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(5144)}));n=r.O(n)})();
//# sourceMappingURL=app.195dff42.js.map