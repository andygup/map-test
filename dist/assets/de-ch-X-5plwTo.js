import{d as m}from"./calcite-input-time-picker--hO1r-3P.js";import"./index-C-FXvluM.js";import"./form-DQKnXXcg.js";import"./dom-BREfK1_w.js";import"./interactive-D-sRmNmu.js";import"./key-BSF9a80T.js";import"./label-6px4mHiC.js";import"./component-CeOigQot.js";import"./loadable-Cvdx6nsl.js";import"./locale-DEBMqv85.js";import"./observers-D1cKOKbq.js";import"./focusTrapComponent-BriOoisk.js";import"./t9n-D2cye325.js";import"./math-CkFPD3oi.js";import"./icon-8lrZIbmV.js";import"./Validation-aFOmH5lh.js";import"./input-De-TCHNF.js";import"./action-CAtzgaiz.js";import"./loader-ANQMuyi7.js";import"./input-message-BVKsAPi_.js";import"./input-text-BMNaWK1I.js";import"./progress-B3_Mj3lS.js";import"./popover-BX__IWwR.js";import"./floating-ui-Dm8u0tOT.js";import"./debounce-DUf35w49.js";import"./openCloseComponent-CeEAhbSR.js";import"./Heading-DXUJ8E3s.js";import"./FloatingArrow-DkP1Wvq2.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */var a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function r(i,e,o){var t=a[o];return Array.isArray(t)&&(t=t[e?0:1]),t.replace("%d",i)}var n={name:"de-ch",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};m.locale(n,null,!0);export{n as default};