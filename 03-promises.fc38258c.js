function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u={position:"center-bottom",distance:"15px",borderRadius:"15px",timeout:8e3,clickToClose:!0,cssAnimationStyle:"from-bottom"};function s(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();const{delay:o,step:n,amount:r}=t.currentTarget.elements;let l=Number(o.value),a=Number(n.value),d=Number(r.value),c=0;(r<=0||o<0||n<0)&&e(i).Notify.failure(" Please input correct values (>=0)");for(let t=0;t<=d;t+=1)c=t,s(c,l).then((({position:t,delay:o})=>e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,u))).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,u)})),l+=a;t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.fc38258c.js.map