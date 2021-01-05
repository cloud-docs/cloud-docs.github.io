(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return p}));var o=t(2),r=t(6),n=(t(0),t(79)),s=t(80),c={id:"entendiendo-la-capa-gratuita-de-gcp-cloud-storage",title:"Cloud Storage",description:"Serie de art\xedculos que te ayudar\xe1 a sacar el m\xe1ximo provecho a Google Cloud sin pagar de m\xe1s, en esta ocasi\xf3n veremos Cloud Storage",keywords:["Google Cloud Platform","Gcp","Cloud","Economy","Billing","Cloud Storage"],image:"./portada.jpeg"},l={unversionedId:"articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-storage",id:"articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-storage",isDocsHomePage:!1,title:"Cloud Storage",description:"Serie de art\xedculos que te ayudar\xe1 a sacar el m\xe1ximo provecho a Google Cloud sin pagar de m\xe1s, en esta ocasi\xf3n veremos Cloud Storage",source:"@site/docs/articles/serie-capa-gratuita/cloud-storage.mdx",slug:"/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-storage",permalink:"/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-storage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/articles/serie-capa-gratuita/cloud-storage.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Cloud Pub/Sub",permalink:"/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-pub-sub"},next:{title:"Bigquery",permalink:"/docs/articles/serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-bigquery"}},i=[],u={rightToc:i};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(s.a,{Photo:"https://miro.medium.com/fit/c/256/256/2*XKiHV-3_LJvO6xeiGKheDQ.png",Name:"Felipe Velasquez Castro",Position:"Google Developer Expert",mdxType:"Writter"}),Object(n.b)("p",null,"Serie de art\xedculos que te ayudar\xe1 a sacar el m\xe1ximo provecho a Google Cloud sin pagar de m\xe1s, en esta ocasi\xf3n veremos Cloud Storage"),Object(n.b)("p",null,"Otro servicio fundamental en toda infraestructura es el de Almacenamiento de archivos, para ello contamos con Google Cloud Storage, este servicios nos brinda m\xfaltiples opciones de almacenamiento ya sea a nivel Multi Regional, es decir, tus archivos se replican en m\xfaltiples locaciones, lo que mejora el acceso y la disponibilidad ante desastres, Regional, que almacena tus archivos en una sola regi\xf3n, Near Line, que tiene menos costo de almacenamiento con la condici\xf3n de acceder a tus archivo nos m\xe1s de una vez al mes y Cold Line, que es el m\xe1s econ\xf3mico de los tipos de almacenamiento, ya que se espera que accedas a tus archivo m\xe1ximo una vez al a\xf1o."),Object(n.b)("p",null,"En la imagen a continuaci\xf3n tienes algunos de los posibles usos de GCS en tus arquitecturas y la posibilidad de integraci\xf3n con otros servicios de Google Cloud Platform"),Object(n.b)("p",null,Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2000/0*-jFmrhVJKTHROTh-.png",alt:null}))),Object(n.b)("p",null,"Hay m\xfaltiples formas de ahorrar en el uso de Cloud Storage, entre las principales est\xe1n, el tener claro la cantidad de GB que ser\xe1n almacenados cada mes, el nivel de replicaci\xf3n que los archivo tendr\xe1n, la cantidad de veces que ser\xe1n accedidos y el tiempo que duren los archivos almacenados."),Object(n.b)("p",null,"Veamos los costos del servicios, cuales son los l\xedmites y qu\xe9 operaciones incluye la capa gratuita."),Object(n.b)("p",null,Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2000/0*YZVczMgWp0Gjhz4s.png",alt:null}))),Object(n.b)("p",null,"En lo que respecta a las operaciones, son estas:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clase A: A\xf1adir objetos y enumerar segmentos y objetos")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clase B: Obtener objetos y visualizar metadatos de segmentos y objetos"))),Object(n.b)("p",null,"Otro aspecto a considerar es el uso de la red, ya que si bien podemos almacenar 5GB, s\xf3lo tendremos 1GB de salida desde USA gratis."),Object(n.b)("p",null,"Por lo tanto, tenemos 5GB en Storage Regional, lo que es un ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"warning"))," importante ya que los storages se crean autom\xe1ticamente c\xf3mo M\xfalti Regional, as\xed que cuando crees un Bucket debes usar el siguiente comando para que su uso se considere en la capa gratuita al crearlo solo como Regional. La documentaci\xf3n ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/storage/docs/creating-buckets?hl=es-419#storage-create-bucket-gsutil"}),"aqu\xed"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"gsutil mb -c regional -l us-central1 gs://<BUCKET_NAME>/\n")),Object(n.b)("p",null,"Otro punto a muy importante es que GCP tambi\xe9n crea storages",Object(n.b)("strong",{parentName:"p"}," Multi Regionales")," para algunos productos ",Object(n.b)("strong",{parentName:"p"},"por defecto"),", dentro de los contenidos en la capa gratuita est\xe1n, App Engine, Cloud Functions, Cloud Build, Cloud container Registry entre otros, estos utilizan storage para almacenar el c\xf3digo que es deployado a estos servicios."),Object(n.b)("p",null,"Esto quiere decir que si utilizas Cloud Run en conjunto a Cloud Container Registry y tus im\xe1genes Docker son muy pesadas, por ejemplo un Debian que pesa finalmente 700 u 800 MB despu\xe9s de una par de versiones de tu imagen Docker tendr\xe1s un par de GB que son facturables al ser Multi Regional, para esto re recomiendo que uses im\xe1genes livianas de tipo ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/_/alpine"}),"Alpine")," o ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/_/scratch"}),"Scratch")," con solo los componentes necesarios."),Object(n.b)("p",null,"A modo personal lo que hago es crear ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/storage/docs/lifecycle"}),"**life cycles"),"** sobre los storages de App Engine, Cloud Functions y sobre todo Cloud Build (que despu\xe9s de compilar no sirven para nada), para que elimine los archivos autom\xe1ticamente despu\xe9s de unos d\xedas."),Object(n.b)("p",null,"Para crear tus propios life cycles debes primero crear un archivo json con la regla a aplicar."),Object(n.b)("p",null,"lifecycle.json"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n    "lifecycle": {\n        "rule": [{\n            "action": {\n                "type": "Delete"\n            },\n            "condition": {\n                "age": 2,\n                "isLive": true\n            }\n        }]\n    }\n}\n')),Object(n.b)("p",null,"Como puedes ver, esto ",Object(n.b)("em",{parentName:"p"},"eliminar\xe1 todos los archivos despu\xe9s de 2 d\xedas"),". Para aplicar la regla, debes indicar el nombre del storage que desees y ejecutar el siguiente comando"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"gsutil lifecycle set lifecycle.json gs://<BUCKET_NAME>/;\n")),Object(n.b)("p",null,"Otra artima\xf1a que ser\xeda fabulosa es la de cambiar la clase del storage, sin embargo nunca me ha resultado, por que no se puede ir de Multi Regional a regional, por que cambia la clase no la ubicaci\xf3n :( , pero por favor haz la prueba por tu cuenta, tal vez ir de Multi Regional a Nearline o Coldline"),Object(n.b)("p",null,"Este es un enlace a la ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/storage/docs/changing-storage-classes"}),"Documentaci\xf3n")," y ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/storage/docs/changing-default-storage-class"}),"esta"),";"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"gsutil rewrite -s [STORAGE_CLASS] gs://<BUCKET_NAME>/\n")),Object(n.b)("p",null,"Espero que estos tips te sean de utilidad, y nos vemos en el pr\xf3ximo articulo"))}p.isMDXComponent=!0},79:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return b}));var o=t(0),r=t.n(o);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),u=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=u(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return t?r.a.createElement(b,c(c({ref:a},i),{},{components:t})):r.a.createElement(b,c({ref:a},i))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<n;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var o=t(0),r=t.n(o);const n=({children:e,Name:a,Photo:t,Position:o})=>r.a.createElement("div",{className:"writter"},e,r.a.createElement("div",{className:"ilb"},r.a.createElement("a",{href:t},r.a.createElement("img",{alt:a,className:"",src:t,width:"80",height:"80"}))),r.a.createElement("div",{className:"ilb"},r.a.createElement("div",{className:""},r.a.createElement("p",{className:""},"Written by")),r.a.createElement("div",{className:""},r.a.createElement("h2",{className:""},a),r.a.createElement("div",{className:""})),r.a.createElement("div",{className:""},r.a.createElement("h4",{className:""},o))))}}]);