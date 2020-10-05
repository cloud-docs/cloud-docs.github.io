(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{53:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return u})),t.d(a,"default",(function(){return d}));var r=t(2),o=t(6),s=(t(0),t(76)),n=t(78),c={id:"entendiendo-la-capa-gratuita-de-gcp-pub-sub",title:"Entendiendo la capa gratuita de GCP\u200a\u2014\u200aCloud Pub/Sub",description:"Serie de art\xedculos que te ayudar\xe1 a sacar el m\xe1ximo provecho a Google Cloud sin pagar de m\xe1s , ahora veremos Cloud Pub/Sub.",keywords:["Google Cloud Platform","Gcp","Cloud","Economy","Billing","Pub/Sub"],image:"./portada.jpeg"},i={unversionedId:"articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-pub-sub",id:"articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-pub-sub",isDocsHomePage:!1,title:"Entendiendo la capa gratuita de GCP\u200a\u2014\u200aCloud Pub/Sub",description:"Serie de art\xedculos que te ayudar\xe1 a sacar el m\xe1ximo provecho a Google Cloud sin pagar de m\xe1s , ahora veremos Cloud Pub/Sub.",source:"@site/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-pub-sub.mdx",slug:"/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-pub-sub",permalink:"/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-pub-sub",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-pub-sub.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Entendiendo la capa gratuita de GCP\u200a\u2014\u200aCloud Functions",permalink:"/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-functions"},next:{title:"Entendiendo la capa gratuita de GCP\u200a\u2014\u200aCloud Storage",permalink:"/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-storage"}},u=[{value:"Caracter\xedsticas principales",id:"caracter\xedsticas-principales",children:[]},{value:"Capa/cuota gratuita",id:"capacuota-gratuita",children:[]},{value:"C\xf3mo debes usarlo para no pasarte de los l\xedmites",id:"c\xf3mo-debes-usarlo-para-no-pasarte-de-los-l\xedmites",children:[]},{value:"Ojo: Quota units",id:"ojo-quota-units",children:[]},{value:"Todo se debe medir",id:"todo-se-debe-medir",children:[]}],l={rightToc:u};function d(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)(n.a,{Photo:"https://miro.medium.com/fit/c/256/256/2*XKiHV-3_LJvO6xeiGKheDQ.png",Name:"Felipe Velasquez Castro",Position:"Google Developer Expert",mdxType:"Writter"}),Object(s.b)("p",null,"Serie de art\xedculos que te ayudar\xe1 a sacar el m\xe1ximo provecho a Google Cloud sin pagar de m\xe1s , ahora veremos Cloud Pub/Sub."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Articulo principal",Object(s.b)("strong",{parentName:"em"}," ["),"aqu\xed](",Object(s.b)("a",Object(r.a)({parentName:"em"},{href:"https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-2d80143f70f1?source=friends_link&sk=e7c4c52c1702efb51103762f587eb5cb"}),"https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-2d80143f70f1?source=friends_link&sk=e7c4c52c1702efb51103762f587eb5cb"),")")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"undefined"}),"*Julio Quinteros P.")," es responsable de gran parte de este articulo :)*"),Object(s.b)("h2",{id:"caracter\xedsticas-principales"},"Caracter\xedsticas principales"),Object(s.b)("p",null,"Otro servicio \xedcono de GCP es ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/pubsub/"}),"Cloud Pub/Sub"),": Este es un servicio full administrado de mensajer\xeda, fundamental para tus ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://es.wikipedia.org/wiki/Arquitectura_dirigida_por_eventos"}),"*arquitecturas basadas en eventos"),Object(s.b)("em",{parentName:"p"},", ya que puedes definir un "),"t\xf3pico",Object(s.b)("em",{parentName:"p"}," y asociados a este, tener tanto "),"publicadores de mensajes",Object(s.b)("em",{parentName:"p"},", como "),"suscriptores* interesados en los mensajes de dicho t\xf3pico."),Object(s.b)("p",null,"Pub/Sub al ser full administrado por Google escala seg\xfan la necesidad de forma autom\xe1tica, y tiene una muy alta performance."),Object(s.b)("p",null,"Puedes conectarlo de forma nativa a m\xfaltiples productos de GCP entre los m\xe1s significativos para nuestros escasos recursos son Cloud Functions y las alertas de Billing (que veremos en otro articulo)."),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2000/0*QEAOy-pa251rkYtZ.png",alt:null}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"(opciones de productos a conectar\u2026 \xbfreconoces los \xedconos de los productos?)")),Object(s.b)("p",null,"Sin lugar a dudas querr\xe1s tener t\xf3picos de Pub/Sub en tu infraestructura pero debes tener presente cuales son los umbrales considerados dentro de la capa gratuita y cuanto pagar\xe1s si te pasas."),Object(s.b)("h2",{id:"capacuota-gratuita"},"Capa/cuota gratuita"),Object(s.b)("p",null,"La capa gratuita de Pub/Sub contempla los ",Object(s.b)("strong",{parentName:"p"},"10 primeros GB gratis"),", si te pasas como promedia pagar\xe1s ",Object(s.b)("strong",{parentName:"p"},"USD 0.90")," por cada 10 GB, ahora, si te pasas de eso como referencia pagar\xe1s USD60 por cada TB extra y ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/pubsub/pricing"}),"entre m\xe1s TB uses m\xe1s barato ser\xe1"),". Esto quiere decir que tenemos ",Object(s.b)("strong",{parentName:"p"},"*10 GB")," de transferencia",Object(s.b)("em",{parentName:"p"}," y "),"hasta 10.000 t\xf3picos* que podemos utilizar gratis todos los meses, si quieres m\xe1s informaci\xf3n aqu\xed te dejo el link a las ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/pubsub/quotas#resource_limits"}),"cuotas y l\xedmites"),"."),Object(s.b)("h2",{id:"c\xf3mo-debes-usarlo-para-no-pasarte-de-los-l\xedmites"},"C\xf3mo debes usarlo para no pasarte de los l\xedmites"),Object(s.b)("p",null,"Mientras no se muevan m\xe1s de ",Object(s.b)("strong",{parentName:"p"},"10 GB,")," o no crees m\xe1s de 10.000 t\xf3picos, no deber\xedas pagar nada. Sin embargo debes considerar como mide el tama\xf1o m\xednimo de los mensajes este servicio para no tener sorpresas."),Object(s.b)("h2",{id:"ojo-quota-units"},"Ojo: Quota units"),Object(s.b)("p",null,"Si vamos a la documentaci\xf3n ",Object(s.b)("em",{parentName:"p"},"en ingl\xe9s")," (cosa que recomendamos ampliamente, las traducciones no siempre est\xe1n al d\xeda!):"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Cada solicitud o respuesta medida cuenta como \u201cel mayor de 1 kB o el tama\xf1o total de la solicitud o respuesta\u201d.")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"El uso de la cuota para cada solicitud o respuesta se redondea al incremento de 1 kB m\xe1s cercano. Considere una solicitud de publicaci\xf3n con 100 mensajes de 50 bytes cada uno y una longitud de nombre de tema igual a 30 bytes. El uso de la cuota de la solicitud ser\xeda max(1, ceil (5030/1000)) = 6kB.")),Object(s.b)("p",null,"Puntualmente en la documentaci\xf3n se indica esto:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Pueden producirse desajustes de cuota cuando los mensajes publicados o recibidos son menores de 1000 bytes. Por ejemplo:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("em",{parentName:"p"},"Si publica 10 mensajes de 500 bytes en solicitudes separadas, el uso de la cuota de su publicador ser\xe1 de 10,000 bytes. Esto se debe a que los mensajes de menos de 1000 bytes se redondean autom\xe1ticamente al siguiente incremento de 1000 bytes."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("em",{parentName:"p"},"Si recibe esos 10 mensajes en una sola respuesta, el uso de la cuota de suscriptor podr\xeda ser de s\xf3lo 5 kB, ya que el tama\xf1o real de cada mensaje se combina para determinar la cuota general."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("em",{parentName:"p"},"La inversa tambi\xe9n es cierta. El uso de la cuota del suscriptor puede ser mayor que el uso de la cuota del publicador si publica varios mensajes en una sola solicitud de publicaci\xf3n o recibe los mensajes en respuestas separadas.")))),Object(s.b)("h2",{id:"todo-se-debe-medir"},"Todo se debe medir"),Object(s.b)("p",null,"Recuerda que siempre puedes monitorear el uso de recursos."),Object(s.b)("p",null,"Tu mejor aliado para esto es sin duda alguna ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/develasquez/understanding-gcp-free-tier/blob/master/seasons/S01"}),"stackdriver"),": puedes leer m\xe1s respecto al monitoreo de pubsub ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/pubsub/docs/monitoring"}),"en este enlace"),". Con stackdriver recuerda que puedes no s\xf3lo visualizar dashboards interactivos, lo mejor es establecer alertas que te permitir\xe1n reaccionar a tiempo (para evitar sobreconsumos, por ejemplo). En el caso de pubsub, dispones de ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/monitoring/api/metrics_gcp#gcp-pubsub"}),"varias m\xe9tricas para monitorear"),"."),Object(s.b)("p",null,"Tambi\xe9n en la Season 02 veremos un Dashboard de Sata Studio que te ayudar\xe1 a saber cuanto has consumido y cuanto tendr\xe1s que pagar por ellos a fin de mes."),Object(s.b)("p",null,"Nos vemos en el pr\xf3ximo articulo."))}d.isMDXComponent=!0},76:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var r=t(0),o=t.n(r);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var a=o.a.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=l(e.components);return o.a.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},b=o.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,n=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,m=d["".concat(n,".").concat(b)]||d[b]||p[b]||s;return t?o.a.createElement(m,c(c({ref:a},u),{},{components:t})):o.a.createElement(m,c({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,n=new Array(s);n[0]=b;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,n[1]=c;for(var u=2;u<s;u++)n[u]=t[u];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},78:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(0),o=t.n(r);const s=({children:e,Name:a,Photo:t,Position:r})=>o.a.createElement("div",{className:"writter"},e,o.a.createElement("div",{className:"ilb"},o.a.createElement("a",{href:t},o.a.createElement("img",{alt:a,className:"",src:t,width:"80",height:"80"}))),o.a.createElement("div",{className:"ilb"},o.a.createElement("div",{className:""},o.a.createElement("p",{className:""},"Written by")),o.a.createElement("div",{className:""},o.a.createElement("h2",{className:""},a),o.a.createElement("div",{className:""})),o.a.createElement("div",{className:""},o.a.createElement("h4",{className:""},r))))}}]);