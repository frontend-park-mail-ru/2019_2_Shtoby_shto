!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty;function r(e,t){return Array.isArray(e)?function(e,t){for(var n,a="",o="",i=Array.isArray(t),s=0;s<e.length;s++)(n=r(e[s]))&&(i&&t[s]&&(n=l(n)),a=a+o+n,o=" ");return a}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var r in e)r&&e[r]&&a.call(e,r)&&(t=t+n+r,n=" ");return t}(e):e||""}function o(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)a.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function i(e,t,n,a){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(a?e:e+'="'+e+'"');var r=typeof t;return"object"!==r&&"function"!==r||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=l(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var a=t[0],r=1;r<t.length;r++)a=e(a,t[r]);return a}for(var i in n)if("class"===i){var s=t[i]||[];t[i]=(Array.isArray(s)?s:[s]).concat(n[i]||[])}else if("style"===i){s=(s=o(t[i]))&&";"!==s[s.length-1]?s+";":s;var l=o(n[i]);l=l&&";"!==l[l.length-1]?l+";":l,t[i]=s+l}else t[i]=n[i];return t},t.classes=r,t.style=o,t.attr=i,t.attrs=function(e,t){var n="";for(var s in e)if(a.call(e,s)){var l=e[s];if("class"===s){l=r(l),n=i(s,l,!1,t)+n;continue}"style"===s&&(l=o(l)),n+=i(s,l,!1,t)}return n};var s=/["&<>]/;function l(e){var t=""+e,n=s.exec(t);if(!n)return e;var a,r,o,i="";for(a=n.index,r=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}r!==a&&(i+=t.substring(r,a)),r=a+1,i+=o}return r!==a?i+t.substring(r,a):i}t.escape=l,t.rethrow=function e(t,a,r,o){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&a||o))throw t.message+=" on line "+r,t;try{o=o||n(2).readFileSync(a,"utf8")}catch(n){e(t,null,r)}var i=3,s=o.split("\n"),l=Math.max(r-i,0),c=Math.min(s.length,r+i);i=s.slice(l,c).map((function(e,t){var n=t+l+1;return(n==r?"  > ":"    ")+n+"| "+e})).join("\n");t.path=a;t.message=(a||"Pug")+":"+r+"\n"+i+"\n\n"+t.message;throw t}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div id="app"><h1>Канбан-доска здесь</h1></div><div id="view"><button>Создать новую карточку</button></div><div id="logout"><button>Разлогиниться</button></div>'}},function(e,t){},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div class="cont"><div class="form sign-in"><h2>С возвращением,</h2><form id="in"><label><span>Email</span><input name="email" type="email" value="aaa@mail.ru"></label><label><span>Password</span><input name="password" type="password" value="qwerty"></label></form><p class="forgot-pass">Забыли пароль? Ничем не можем вам помочь</p><div class="errorArea"></div><button type="submit" form="in">Войти</button><button class="vk-btn">Войти через<span>ВКонтакте</span></button></div><div class="sub-cont"><div class="bmstu"><div class="img__text m--up"><h2>Первый раз?</h2><p>Зарегистрируйтесь и откройте для себя\nмножество новых возможностей!</p></div><div class="img__text m--in"><h2>Один из нас?</h2><p>Если у вас уже есть аккаунт,\nпросто войдите в систему.\nМы скучали по вам!</p></div><div class="img__btn"><span class="m--up">Регистрация</span><span class="m--in">Вход</span></div></div><div class="form sign-up"><h2>Время почувствовать себя как дома,</h2><form id="up"><label><span>Ваше имя</span><input name="name" type="text"></label><label><span>Email</span><input name="email" type="email"></label><label><span>Password</span><input name="password" type="password"></label></form><div class="errorArea"></div><button type="submit" form="up">Зарегистрироваться</button><button class="vk-btn">связать с аккаунтом<span>ВКонтакте</span></button></div></div></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<!DOCTYPE html><html class="gr__localhost" lang="en"><head><meta charset="UTF-8"><title>Profile Page</title><link rel="stylesheet" type="text/css" href="components/Board/headMenu.css"></head><body data-gr-c-s-loaded="true"><div id="header" style="line-height: 50px;"><a href="#/" data-section="home">Домой</a><a href="#/create" data-section="create">Создать</a><a href="#/profile" data-section="profile" style="float: right;">Профиль</a><a href="#/notifications" data-section="notifications" style="float: right;">Уведомления</a><a href="#/info" data-section="info" style="float: right;">Информация</a><a href="#/mainPage" data-section="mainPage" style="float: right;">Trello</a></div></body></html>'}},function(e,t,n){"use strict";function a(e=""){return e.match(/^([a-z0-9_\\-]+\.)*[a-z0-9_\\-]+@([a-z0-9][a-z0-9\\-]*[a-z0-9]\.)+[a-z]{2,4}$/i)?{status:!0,err:""}:{status:!1,err:"Некорректная почта!"}}function r(e="",t=""){return e!==t?{status:!1,err:"Пароли не совпадают!"}:e.length<6?{status:!1,err:"Пароль слишком короткий!"}:{status:!0,err:""}}function o(e="/",t=null){return console.log(t),fetch("http://localhost:8080"+e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(e=>e.json()).then(e=>console.log("Успех:",JSON.stringify(e))).catch(e=>alert(e.message))}n.r(t);const i=n(1);function s(){const e=i();document.getElementById("application").innerHTML=e,document.getElementById("logout").addEventListener("click",()=>{o("/logout",{}).then(()=>(void 0)())})}const l=n(3);const c=n(4);var u={parseRequestUrl:()=>{const e=(location.hash.slice(1).toLowerCase()||"/").split("/"),t={resource:null,id:null,verb:null};return t.resource=e[1],t.id=e[2],t.verb=e[3],t}};const d={"/":function(){document.getElementById("application").innerHTML=l();const e=document.getElementById("in");e.addEventListener("submit",(function(t){t.preventDefault();const n=e.elements.email.value,i=e.elements.password.value,l=a(n),c=r(i,i);if(l.status&&c.status)o("/registration",{login:n,password:i}).then(e=>{200!==e.status?alert(e.message):s()}).catch(()=>s());else{document.getElementsByClassName("errorArea").item(0).innerText=[l.err,c.err].join(" ")}}));const t=document.getElementById("up");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.elements.email.value,i=t.elements.password.value,l=t.elements.name.value,c=a(n),u=r(i,i),d=function(e=""){return e.match(/^[a-zA-Z][a-zA-Z0-9_.,-]{4,14}$/)?{status:!0,err:""}:{status:!1,err:"Используйте только латинские буквы и цифры!"}}(l);if(c.status&&u.status&&d.status)o("/registration",{login:n,password:i,name:l}).then(()=>s()).catch(()=>s());else{document.getElementsByClassName("errorArea").item(1).innerText=[c.err,u.err,d.err].join(" ")}})),document.querySelector(".img__btn").addEventListener("click",(function(){document.querySelector(".cont").classList.toggle("s--signup")}))},"/profile":function(e){const t=e;e.innerHTML="";const n={more:"Профиль и доступ",actions:"Действия",cards:"Карточки",settings:"Настройки"};t.className="tab",Object.keys(n).forEach((function(e){const a=document.createElement("button");a.className="tablinks",a.textContent=n[e],a.id=e,t.appendChild(a)})),document.getElementById("more").addEventListener("click",(function(e){t.innerHTML="",function(){let e=document.createElement("a"),n=document.createTextNode("Управление персональными данными");e.innerHTML='<div><p>Вы можете менять настройки доступа к информации и улучшениям. Чтобы\n    <wbr>\n    узнать больше, читайте следующие документы:\n    <a href="/">\n    Условия использования</a> и\n    <a href="/">Политика конфиденциальности</a>.\n    </p></div>';const a=document.createElement("h2");a.style="margin-top: 60px; text-align-last: left";const r=document.createTextNode("О нас"),o=document.createElement("hr"),i=document.createElement("section");i.className="container row";const s=document.createElement("h3");s.className="col-2-3";const l=document.createTextNode("Полное имя"),c=document.createElement("input");c.type="text",c.value="Username";const u=document.createTextNode("Инициалы"),d=document.createElement("input");d.type="text",d.value="U";const p=document.createTextNode("О себе"),m=document.createElement("input");m.className="aboutYou",m.type="text",m.value="Something",s.appendChild(l),s.appendChild(c),s.appendChild(p),s.appendChild(m),s.appendChild(u),s.appendChild(d),document.createElement("h3").className="col-1-3",i.appendChild(s),a.appendChild(r),a.appendChild(o),t.className="word",t.appendChild(n),t.appendChild(e),t.appendChild(a),t.appendChild(i)}()}))},"/pug":function(){document.getElementById("application").innerHTML='<iframe id="myHtml" \n                           style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; \n                           border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" \n                           src="./components/PUG/index.html"></iframe>'}},p=async()=>{const e=document.getElementById("application"),t=u.parseRequestUrl(),n=t.resource?"/"+t.resource:"/",a=d[n];console.log("creating header"),document.getElementById("header").innerHTML=c(),a(e)};window.addEventListener("hashchange",async()=>{console.log("hash changed"),p()}),window.addEventListener("load",p)}]);