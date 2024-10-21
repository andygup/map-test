import{d as i}from"./calcite-input-time-picker--hO1r-3P.js";import"./index-C-FXvluM.js";import"./form-DQKnXXcg.js";import"./dom-BREfK1_w.js";import"./interactive-D-sRmNmu.js";import"./key-BSF9a80T.js";import"./label-6px4mHiC.js";import"./component-CeOigQot.js";import"./loadable-Cvdx6nsl.js";import"./locale-DEBMqv85.js";import"./observers-D1cKOKbq.js";import"./focusTrapComponent-BriOoisk.js";import"./t9n-D2cye325.js";import"./math-CkFPD3oi.js";import"./icon-8lrZIbmV.js";import"./Validation-aFOmH5lh.js";import"./input-De-TCHNF.js";import"./action-CAtzgaiz.js";import"./loader-ANQMuyi7.js";import"./input-message-BVKsAPi_.js";import"./input-text-BMNaWK1I.js";import"./progress-B3_Mj3lS.js";import"./popover-BX__IWwR.js";import"./floating-ui-Dm8u0tOT.js";import"./debounce-DUf35w49.js";import"./openCloseComponent-CeEAhbSR.js";import"./Heading-DXUJ8E3s.js";import"./FloatingArrow-DkP1Wvq2.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */var o="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),p={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},e={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},_={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:o,monthsShort:o,weekStart:6,meridiem:function(r){return r>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(r){return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(m){return e[m]}).replace(/،/g,",")},postformat:function(r){return r.replace(/\d/g,function(m){return p[m]}).replace(/,/g,"،")},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};i.locale(_,null,!0);export{_ as default};