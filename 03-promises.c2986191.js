!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form"),a={position:"center-bottom",distance:"15px",borderRadius:"15px",timeout:8e3,clickToClose:!0,cssAnimationStyle:"from-bottom"};function l(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,o=n.delay,r=n.step,u=n.amount,c=Number(o.value),s=Number(r.value),f=Number(u.value);(u<=0||o<0||r<0)&&e(i).Notify.failure(" Please input correct values (>=0)");for(var d=0;d<=f;d+=1)l(d,c).then((function(t){var n=t.position,o=t.delay;return e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),a)})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),a)})),c+=s;t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.c2986191.js.map