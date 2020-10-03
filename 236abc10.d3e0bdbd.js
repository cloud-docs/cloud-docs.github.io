(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/portada-3392bf8af3ed98994504665b85fcf27b.jpg"},60:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return p}));var o=n(2),t=n(6),r=(n(0),n(73)),s={id:"nivelacion-kubernetes",title:"Nivelaci\xf3n Kubernetes"},c={unversionedId:"architectures/nivelacion-kubernetes",id:"architectures/nivelacion-kubernetes",isDocsHomePage:!1,title:"Nivelaci\xf3n Kubernetes",description:"Portada",source:"@site/docs/architectures/nivelacion-kubernetes.md",slug:"/architectures/nivelacion-kubernetes",permalink:"/docs/architectures/nivelacion-kubernetes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/architectures/nivelacion-kubernetes.md",version:"current",sidebar:"someSidebar",previous:{title:"Style Guide",permalink:"/docs/"},next:{title:"This is Document Number 3",permalink:"/docs/articles/doc3"}},l=[{value:"Slides",id:"slides",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[{value:"1 - App Base",id:"1---app-base",children:[]},{value:"2 - Dockerfile",id:"2---dockerfile",children:[]},{value:"3 - Creamos el Balanceador de carga",id:"3---creamos-el-balanceador-de-carga",children:[]},{value:"4 - Creamos el Deployment",id:"4---creamos-el-deployment",children:[]},{value:"5 - Exponemos el nombre de cada pod como variable de entorno.",id:"5---exponemos-el-nombre-de-cada-pod-como-variable-de-entorno",children:[]},{value:"6 - Limitamos el consumo de cada Pod",id:"6---limitamos-el-consumo-de-cada-pod",children:[]},{value:"7 - Este commit se perdio en el limbo XD",id:"7---este-commit-se-perdio-en-el-limbo-xd",children:[]},{value:"8 - Una mirada final de lo que se puede hacer",id:"8---una-mirada-final-de-lo-que-se-puede-hacer",children:[]}]}],i={rightToc:l};function p(e){var a=e.components,s=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,s,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"Portada",src:n(104).default})),Object(r.b)("h2",{id:"slides"},"Slides"),Object(r.b)("p",null,"Aqu\xed te de dejo los slides de la presentaci\xf3n original. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1z1AW6JPWl381OLqKR2f9Sr8_lVQiufjjzWbEsK5pZMM"}),"Presentacion")),Object(r.b)("h2",{id:"como-utilizar"},"Como utilizar"),Object(r.b)("p",null,"Para entender mejor este ejemplo te recomiendo viajar entre los Commits."),Object(r.b)("p",null,"para viajar en el tiempo a trav\xe9s de los commits debes tomar los 7 caracteres de cada commit que viene ac\xe1 abajo y ejecutar:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"git checkout XXXXXXX #(dc0f9d8 por ejemplo)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"commit dc0f9d8")),Object(r.b)("h3",{id:"1---app-base"},"1 - App Base"),Object(r.b)("p",null,"Nada que decir, esta es tu app y corre en tu pc con"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install\n#esperar unos segundos y ejecutar con\nnode server.js\n")),Object(r.b)("p",null,"y el c\xf3digo es mas o menos as\xed"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"var express = require('express');\nvar app = express();\n\napp.get('/', function (req, res) {\n    res.send('Hola Perro!');\n});\n\napp.listen(8080, function () {\n    console.log('Listos en el 8080');\n});\n")),Object(r.b)("p",null,"Pero como vimos en la presentaci\xf3n lo que gobierna el mundo hoy es Docker as\xed que veamos c\xf3mo montar nuestro servicio en docker as\xed que vamos al siguiente commit."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"commit 2dbad3a")),Object(r.b)("h3",{id:"2---dockerfile"},"2 - Dockerfile"),Object(r.b)("p",null,"Creamos el Dockerfile y ya tenemos nuestra App en un container."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-Dockerfile"}),'FROM node:alpine\n\nWORKDIR /app\nCOPY . .\nRUN npm i\nEXPOSE 8080\nCMD  ["node", "server.js"]\n')),Object(r.b)("p",null,"Excelente ya tenemos el Docker pero lo que queremos es que esto corra en la Nube as\xed que vamos al siguiente commit y veamos que necesitamos tener para hacer que nuestro servicio reciba trafico."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"commit d9b1e1d")),Object(r.b)("h3",{id:"3---creamos-el-balanceador-de-carga"},"3 - Creamos el Balanceador de carga"),Object(r.b)("p",null,"Aqui entramos en el mundo de Kuberneres."),Object(r.b)("p",null,"Creamos un service de tipo LoadBalancer que va a ser la puerta de entrada a nuestro servicio y se va a encargar de distribuir los request entre los Nodos, decir las m\xe1quinas virtuales en las que se despliegan nuestros Pods."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"kind: Service\napiVersion: v1\nmetadata:\n  name: lb\nspec:\nselector:\n    app: servicio\n\n#Lo realmente importante esta aca\nports:\n    - protocol: TCP\n    port: 80\n    targetPort: 8080\n\n#El tipo puede variar\ntype: LoadBalancer\n")),Object(r.b)("p",null,"Para crear este balanceador dentro de GCP y que apunte al servicio dentro de nuestro cluster basta con ejecutar:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f service-load-balancer.yaml\n")),Object(r.b)("p",null,"Lo interesante esta por venir, vamos al siguiente commit."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"commit b77b4db")),Object(r.b)("h3",{id:"4---creamos-el-deployment"},"4 - Creamos el Deployment"),Object(r.b)("p",null,"Qui\xe9n se va a encargar de llevar nuestro contenedor a Kubernetes y crear las replicas necesarias es el Deployment."),Object(r.b)("p",null,'Pero antes tenemos que subir nuestro App "empaquetada" en Docker y dejarla en el Google Cloud Registry de nuestro proyecto. Para ello debemos "Tagear" la imagen con docker poniendo como tag la url que tendr\xe1 la imagen una vez que se suba al registry de Google en tu proyecto.'),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),'docker build -t "gcr.io/MY-PROYECTO-GCP/servicio:1" .\n')),Object(r.b)("p",null,"Y con el siguiente comando subimos la imagen tageada al registry."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"gcloud docker -- push -- gcr.io/MY-PROYECTO-GCP/servicio:1\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"-t")," para decir que vamos a tagear"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"gcr.io")," es el dominio que mediante el cual Google expone las im\xe1genes (Es accesible solo dentro del proyecto por defecto, si se desea abrir al mundo se debe dar permisos al Google Cloud Storage que crea para almacenar estas im\xe1genes en el proyecto)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},".")," para decir que el Dockerfile esta en el directorio actual")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: servicio\nspec:\n# La m\xe1gia comienza ac\xe1\n  replicas: 3\n\n  template:\n    metadata:\n      labels:\n        app: servicio\n    spec:\n  # y ac\xe1\n      containers:\n  # Puede ser una lista de contenedores en un POD\n        - name: servicio\n        image: "gcr.io/MY-PROYECTO-GCP/servicio:1"\n        ports:\n          - name: http\n          containerPort: 8080\n')),Object(r.b)("p",null,"Para aplicar esta configuraci\xf3n en nuestro cluster basta con escribir."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f deployment.yaml\n")),Object(r.b)("p",null,"Ya puedes probar tu servicio veamos que IP se asigno."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl get services\n")),Object(r.b)("p",null,"F\xedjate la IP que te asigno y puedes abrirla en el browser o hacer un curl a lo macho."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"curl http://<LA IP DEL BALACEADOR>/\n")),Object(r.b)("p",null,"Pero hagamos esto un poco m\xe1s interesante, entendamos c\xf3mo funciona el balanceo a nivel de Nodos y el balanceo a nivel de Pods (replicas)\npara eso vamos al siguiente commit."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"commit d9c0028")),Object(r.b)("h3",{id:"5---exponemos-el-nombre-de-cada-pod-como-variable-de-entorno"},"5 - Exponemos el nombre de cada pod como variable de entorno."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: servicio\nspec:\n# La m\xe1gia comienza ac\xe1\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: servicio\n    spec:\n  # y ac\xe1\n      containers:\n  # Puede ser una lista de contenedores en un POD\n        - name: servicio\n        image: "gcr.io/MY-PROYECTO-GCP/servicio:2"\n        ports:\n          - name: http\n          containerPort: 8080\n# Veamos que Pod nos responde al Balancear - Ver server.js              \n    env:\n      - name: MY_NODE_NAME\n      valueFrom:\n        fieldRef:\n        fieldPath: spec.nodeName            \n      - name: MY_POD_NAME\n      valueFrom:\n        fieldRef:\n        fieldPath: metadata.name\n')),Object(r.b)("p",null,"Para aplicar esta configuraci\xf3n en nuestro cluster basta con escribir."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f deployment.yaml\n")),Object(r.b)("p",null,"Y las leemos desde nuestro server.js"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"app.get('/', function (req, res) {\n    res.send({\n        nodo: process.env.MY_NODE_NAME,\n        pod: process.env.MY_POD_NAME\n    });\n});\n")),Object(r.b)("p",null,"Esto va a responder con el nombre del Nodo (la maquina virtual) y del Pod (Cada una de las replicas de nuestro servicio)."),Object(r.b)("p",null,"Quieres ver algo hermoso, ejecuta este comando y veras como funciona el balanceo en los dos niveles."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"while true; do sleep 0.1; curl http://<LA IP DEL BALACEADOR>/; echo -e '\\n';done\n")),Object(r.b)("p",null,"ya tienes una configuraci\xf3n b\xe1sica de tu servicio. Veamos algunos conceptos que le dar\xe1n m\xe1s robustez a tu soluci\xf3n en el siguiente commit."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"commit 88ad465")),Object(r.b)("h3",{id:"6---limitamos-el-consumo-de-cada-pod"},"6 - Limitamos el consumo de cada Pod"),Object(r.b)("p",null,"Con kubernetes podemos establecer cu\xe1nta RAM y cu\xe1nta CPU va a tener disponible cada POD, de esta forma podemos controlar el uso y evitar que un error de c\xf3digo eleve el uso de CPU y Memoria y pueda hacer caer al Nodo completo, solo por poner un ejemplo."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: servicio\nspec:\n# La m\xe1gia comienza ac\xe1\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: servicio\n    spec:\n  # y ac\xe1\n      containers:\n  # Puede ser una lista de contenedores en un POD\n        - name: servicio\n        image: "gcr.io/MY-PROYECTO-GCP/servicio:3"\n        ports:\n          - name: http\n          containerPort: 8080\n# Veamos que Pod nos responde al Balancear - Ver server.js              \n    env:\n      - name: MY_NODE_NAME\n      valueFrom:\n        fieldRef:\n        fieldPath: spec.nodeName            \n      - name: MY_POD_NAME\n      valueFrom:\n        fieldRef:\n        fieldPath: metadata.name\n\n    #Podemos limitar los recursos que utiliza cada Pod\n\n    resources:\n        limits:\n        cpu: 0.2\n        memory: "100Mi"\n')),Object(r.b)("p",null,"Ya a esta altura deber\xedas saber como aplicarlo pero te dejo el comando por si acaso."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f deployment.yaml\n")),Object(r.b)("h3",{id:"7---este-commit-se-perdio-en-el-limbo-xd"},"7 - Este commit se perdio en el limbo XD"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"commit 486b6c7")),Object(r.b)("h3",{id:"8---una-mirada-final-de-lo-que-se-puede-hacer"},"8 - Una mirada final de lo que se puede hacer"),Object(r.b)("p",null,"Lo \xfaltimo que veremos en este ejemplo son readinessProbe y livenessProbe."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"readinessProbe")," este mecanismo permite establecer cuando nuestro servicio esta listo para recibir trafico, y evitar que el balanceador le env\xede peticiones antes de que este todo listo a nivel de servicio."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"livenessProbe")," este mecanismo permite establecer un periodo de tiempo y un endpoint de nuestro servicio que sirva para preguntar si sigue con vida, de lo contrario Kubernetes va a matar al POD y crear uno nuevo, por que este no esta dando se\xf1ales de vida."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: servicio\nspec:\n# La m\xe1gia comienza ac\xe1\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: servicio\n    spec:\n  # y ac\xe1\n      containers:\n  # Puede ser una lista de contenedores en un POD\n        - name: servicio\n        image: "gcr.io/MY-PROYECTO-GCP/servicio:4"\n        ports:\n          - name: http\n          containerPort: 8080\n# Veamos que Pod nos responde al Balancear - Ver server.js              \n    env:\n      - name: MY_NODE_NAME\n      valueFrom:\n        fieldRef:\n        fieldPath: spec.nodeName            \n      - name: MY_POD_NAME\n      valueFrom:\n        fieldRef:\n        fieldPath: metadata.name\n\n    #Podemos limitar los recursos que utiliza cada Pod\n\n    resources:\n        limits:\n        cpu: 0.2\n        memory: "100Mi"\n\n    # Validamos que nuesto pod esta vivo\n    livenessProbe:\n        httpGet:\n        path: /health\n        port: 8080\n        scheme: HTTP\n        initialDelaySeconds: 5\n        periodSeconds: 15\n        timeoutSeconds: 5\n\n    # Esperamos a que este listo para mandarle carga \n    readinessProbe:\n        httpGet:\n        path: /ready\n        port: 8080\n        scheme: HTTP\n        initialDelaySeconds: 5\n        timeoutSeconds: 5\n')),Object(r.b)("p",null,"Si a esta altura no sabes como aplicar esta configuraci\xf3n estamos mal, pero te la dejo igual XD."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f deployment.yaml\n")),Object(r.b)("p",null,"Espero que esto te sirva para entender c\xf3mo funciona b\xe1sicamente Kubernetes y como llevar tu servicio a la Nube muy f\xe1cilmente."),Object(r.b)("p",null,"Un abrazo."))}p.isMDXComponent=!0}}]);