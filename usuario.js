const _0x18f576=_0x2a7b;(function(_0x148176,_0x4c4a6a){const _0x1da650=_0x2a7b,_0x22aa97=_0x148176();while(!![]){try{const _0x5add5b=-parseInt(_0x1da650(0x197))/0x1+parseInt(_0x1da650(0x192))/0x2*(parseInt(_0x1da650(0x1b8))/0x3)+parseInt(_0x1da650(0x1bd))/0x4*(-parseInt(_0x1da650(0x1b9))/0x5)+-parseInt(_0x1da650(0x1bb))/0x6+parseInt(_0x1da650(0x19b))/0x7*(-parseInt(_0x1da650(0x196))/0x8)+-parseInt(_0x1da650(0x193))/0x9+-parseInt(_0x1da650(0x1bf))/0xa*(-parseInt(_0x1da650(0x18f))/0xb);if(_0x5add5b===_0x4c4a6a)break;else _0x22aa97['push'](_0x22aa97['shift']());}catch(_0x2d3400){_0x22aa97['push'](_0x22aa97['shift']());}}}(_0x2833,0xba78e));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';import{getAnalytics}from'https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js';import{getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,sendEmailVerification}from'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';const firebaseConfig={'apiKey':'AIzaSyDC3eRM9GoXu6ioFKvg3O0_dylcdDYethU','authDomain':'usuarios-289fa.firebaseapp.com','projectId':'usuarios-289fa','storageBucket':_0x18f576(0x1b0),'messagingSenderId':_0x18f576(0x1b7),'appId':_0x18f576(0x1b6),'measurementId':_0x18f576(0x1a5)},app=initializeApp(firebaseConfig),analytics=getAnalytics(app),auth=getAuth();let currentUser;onAuthStateChanged(auth,_0x1035a4=>{const _0x36e4c3=_0x18f576;currentUser=getAuth()['currentUser'];if(_0x1035a4){let _0x3f8b24='';_0x1035a4[_0x36e4c3(0x1a0)]?($(_0x36e4c3(0x1af))[_0x36e4c3(0x1be)](),_0x3f8b24='cuenta\x20verificada'):(_0x3f8b24='cuenta\x20no\x20verificada',$(_0x36e4c3(0x1af))[_0x36e4c3(0x199)]());let _0x2fea8b='Bienvenido:\x20'+_0x1035a4[_0x36e4c3(0x1b5)]+'\x20('+_0x3f8b24+')';document['getElementById'](_0x36e4c3(0x1a9))['innerText']=_0x2fea8b,document[_0x36e4c3(0x1aa)](_0x36e4c3(0x1ac))[_0x36e4c3(0x19e)]=_0x2fea8b,$('#areaRegistroIngreso')[_0x36e4c3(0x1be)](),$(_0x36e4c3(0x1c1))[_0x36e4c3(0x199)](),btnverificarLogin[_0x36e4c3(0x1c0)](_0x36e4c3(0x191),()=>verificar()),btncerrar[_0x36e4c3(0x1c0)](_0x36e4c3(0x191),()=>auth[_0x36e4c3(0x1a7)]());}else document['getElementById'](_0x36e4c3(0x1a9))[_0x36e4c3(0x19e)]=_0x36e4c3(0x195),document[_0x36e4c3(0x1aa)](_0x36e4c3(0x1ac))[_0x36e4c3(0x19e)]='',$('#areaRegistroIngreso')['show'](),$(_0x36e4c3(0x1c1))[_0x36e4c3(0x1be)](),$(_0x36e4c3(0x1af))[_0x36e4c3(0x1be)]();});let button=document[_0x18f576(0x1aa)](_0x18f576(0x1a1));function _0x2a7b(_0x180403,_0x2667c6){const _0x283346=_0x2833();return _0x2a7b=function(_0x2a7bb2,_0x6fd684){_0x2a7bb2=_0x2a7bb2-0x18f;let _0x2820c9=_0x283346[_0x2a7bb2];return _0x2820c9;},_0x2a7b(_0x180403,_0x2667c6);}button['addEventListener']('click',()=>{const _0x38847c=_0x18f576;var _0x1736c3=document[_0x38847c(0x1aa)](_0x38847c(0x1b5))[_0x38847c(0x1b2)],_0x3a3174=document[_0x38847c(0x1aa)]('pass')[_0x38847c(0x1b2)];createUserWithEmailAndPassword(auth,_0x1736c3,_0x3a3174)[_0x38847c(0x1a8)](_0xc594c=>{const _0x5135a8=_0xc594c['user'];verificar();})[_0x38847c(0x1a2)](_0x53a324=>document['getElementById'](_0x38847c(0x1a9))[_0x38847c(0x19e)]=_0x38847c(0x19d));});function _0x2833(){const _0x283b97=['G-4F6Q4YLP6S','style','signOut','then','login','getElementById','#cbRegistroIngreso','loginNamer','block','emaila','#btnverificarLogin','usuarios-289fa.appspot.com','change','value','querySelector','no\x20se\x20envio\x20mail\x20de\x20verificación','email','1:603456739009:web:55545c1b7348384c9aa640','603456739009','12leTacV','975075aSDHUo','checked','83478HpWJtw','#areaLogin','8mnZnBt','hide','17970NrRbat','addEventListener','#btncerrar','17941rUsdmv','display','click','228626nSaocW','9046602YlwvIn','none','ingrese\x20o\x20registrese','2536hDzGXX','1083693VRmkoT','#areaRegistrar','show','btningresar','2905MmeVuj','se\x20envio\x20correo\x20de\x20verificacion.(si\x20no\x20recibio\x20el\x20email\x20intente\x20de\x20nuevo\x20o\x20verifique\x20en\x20spam\x20o\x20correos\x20no\x20deseados\x20muchas\x20gracias!!!)','usuario\x20registrado','innerText','message','emailVerified','btnregistrar','catch','passa','ready'];_0x2833=function(){return _0x283b97;};return _0x2833();}let verificar=()=>sendEmailVerification(currentUser)[_0x18f576(0x1a8)](()=>alert(_0x18f576(0x19c)))['catch'](_0x3bb6ab=>alert(_0x18f576(0x1b4))),buttona=document['getElementById'](_0x18f576(0x19a));buttona[_0x18f576(0x1c0)](_0x18f576(0x191),()=>{const _0x3e0fb2=_0x18f576;var _0xe750a8=document[_0x3e0fb2(0x1aa)](_0x3e0fb2(0x1ae))[_0x3e0fb2(0x1b2)],_0xc03065=document[_0x3e0fb2(0x1aa)](_0x3e0fb2(0x1a3))['value'];signInWithEmailAndPassword(auth,_0xe750a8,_0xc03065)[_0x3e0fb2(0x1a2)](_0x2f4925=>alert(_0x2f4925[_0x3e0fb2(0x19f)]));}),$(document)[_0x18f576(0x1a4)](()=>{const _0x4eb610=_0x18f576;$(_0x4eb610(0x1ab))[_0x4eb610(0x1b1)](()=>{const _0x15c37d=_0x4eb610;check[_0x15c37d(0x1ba)]?(areaLogin['style']['display']=_0x15c37d(0x194),areaRegistro[_0x15c37d(0x1a6)][_0x15c37d(0x190)]=_0x15c37d(0x1ad)):(areaLogin['style'][_0x15c37d(0x190)]='block',areaRegistro['style'][_0x15c37d(0x190)]=_0x15c37d(0x194));});});let check=document['querySelector'](_0x18f576(0x1ab)),areaLogin=document['querySelector'](_0x18f576(0x1bc)),areaRegistro=document[_0x18f576(0x1b3)](_0x18f576(0x198));areaLogin[_0x18f576(0x1a6)][_0x18f576(0x190)]=_0x18f576(0x194);