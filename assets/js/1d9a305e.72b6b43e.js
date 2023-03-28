"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),c=r,m=h["".concat(i,".").concat(c)]||h[c]||d[c]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Module 10 \u2013 Working with APIs",sidebar_position:10,slug:"/10"},l=void 0,s={unversionedId:"module-10",id:"module-10",title:"Module 10 \u2013 Working with APIs",description:"List of Links for this week",source:"@site/content/modules/module-10.md",sourceDirName:".",slug:"/10",permalink:"/modules/10",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Module 10 \u2013 Working with APIs",sidebar_position:10,slug:"/10"},sidebar:"defaultSidebar",previous:{title:"Module 9 \u2013 Web Scraping",permalink:"/modules/9"},next:{title:"Module 11 \u2013 Hosting and Deploying",permalink:"/modules/11"}},i={},u=[{value:"REST and APIs",id:"rest-and-apis",level:2},{value:"Calling a 3rd party API",id:"calling-a-3rd-party-api",level:2},{value:"Lab 9",id:"lab-9",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"List of Links for this week"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://home.openweathermap.org/api_keys"},"https://home.openweathermap.org/api_keys"))),(0,r.kt)("h2",{id:"rest-and-apis"},"REST and APIs"),(0,r.kt)("p",null,"While as a systems administrator, you may not be coding against web services every day, it's important to understand how they work so you can have a better idea of how to efficiently host them or manage systems that call them."),(0,r.kt)("p",null,"Let's discuss APIs, what they are and how they work."),(0,r.kt)("p",null,"An API is an Application Programming Interface, which is the way an application allows a developer to talk with it. For example, you can use the Twitter API to post tweets, which requires authentication, URLs, classes, methods, and so on. API's typically reserve data in the form of JSON. Any client can make a request to an API."),(0,r.kt)("p",null,"For an API to be RESTful, it must be client to server, must be stateless, must use HTTP methods (GET, POST, etc)."),(0,r.kt)("p",null,"APIs are basically middlemen to a server, so a client (laptop, desktop, phone) makes a call to the API, which then makes a call to the server."),(0,r.kt)("p",null,"Client to server is how HTTP connections work, so this shouldn't be a new concept for you."),(0,r.kt)("p",null,"Stateless means that there is no memory of the previous request. For example, if you make a call to a RESTful service, then make another subsequent call, the server will not be able to serve that second request with any information from the first. It's completely unaware of these subsequent requests and treats them independently."),(0,r.kt)("p",null,"The last one is the HTTP method. GET and POST are the most common, so that's what we'll focus on."),(0,r.kt)("h2",{id:"calling-a-3rd-party-api"},"Calling a 3rd party API"),(0,r.kt)("p",null,"Let's try calling an API that's currently available. There is an open one that should remain open as long as we keep our requests light, and that's ",(0,r.kt)("a",{parentName:"p",href:"https://openweathermap.org/current"},"https://openweathermap.org/current")),(0,r.kt)("p",null,"Click the Sign-in or Sign Up button if you don't have an account already. Go ahead and create an account."),(0,r.kt)("p",null,"Once logged in, click API keys"),(0,r.kt)("p",null,"If you don't have a key already filled in, you should be able to generate one."),(0,r.kt)("p",null,"There are all kinds of ways to get the API data, but for this example, we'll simply request the zip code and get back some weather info. The request is"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://api.openweathermap.org/data/2.5/weather?zip=12345,us&appid=YOURAPIKEY"},"http://api.openweathermap.org/data/2.5/weather?zip=12345,us&appid=YOURAPIKEY")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"YOURAPIKEY")," with, you guessed it, your API key that you generated. You can also change zip=12345 to be replaced with the zip code you want to input. US is the US country code, so don't change that."),(0,r.kt)("p",null,"You can put this directly into a web browser and view the JSON that is returned."),(0,r.kt)("p",null,"You can also do it in your code. Let's do this with Python."),(0,r.kt)("p",null,"Create a Python file in your Python file called ",(0,r.kt)("inlineCode",{parentName:"p"},"weatherApi.py"),"."),(0,r.kt)("p",null,"Now, let's write our script."),(0,r.kt)("p",null,"For this, we'll be parsing json and also making a web request. Let's import the modules we'll need for this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\n\nimport requests\n")),(0,r.kt)("p",null,"Now, let's just try calling the API and displaying the data, before we ask for input."),(0,r.kt)("p",null,"Use the requests.get to get the data and assign it to a variable called r."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"r = requests.get('http://api.openweathermap.org/data/2.5/weather?zip=12345,us&appid=YOURAPIKEY')\n")),(0,r.kt)("p",null,"Now, the data comes back as text as far as python is concerned. We need to tell python that the data is JSON, then assign that to it'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data=r.json()\n")),(0,r.kt)("p",null,"Now, let's print the data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(data)\n")),(0,r.kt)("p",null,"It's JSON, but it's not pretty. We can parse it, though, to get exactly what we want. If you take a look, you'll see one of the top attributes is called \"weather\". Let's parse to get this with the following syntax."),(0,r.kt)("p",null,"print(data","['weather']",")"),(0,r.kt)("p",null,'Closer, but I think I still want just the "description". We can parse it further using the following syntax'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(data['weather'][0]['description'])\n")),(0,r.kt)("p",null,"What's with the ","[0]","? JSon typically returns all of the 'weather' attributes, which in this case is only 1. Some cases may return more, so to tell Python which object to grab, we pass a zero-based index value of ","[0]"," to tell it to grab the first object. And from that first object, grab the description. Now, let's prompt for our zip code and assign that value in our URL string using string substitution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\nimport requests\n\nprint('Please enter your zip code:')\nzip = input()\n\nr = requests.get('http://api.openweathermap.org/data/2.5/weather?zip=%s,us&appid=YOURAPIKEY' % zip)\ndata=r.json()\nprint(data['weather'][0]['description'])\n")),(0,r.kt)("p",null,"And that's it, it's as simple to call json an dig in further."),(0,r.kt)("p",null,"Create your Own API"),(0,r.kt)("p",null,"Now we're going to write our own API. Let's do this using Node, because that is the simplest way to create a web server, which we'll need to serve our API."),(0,r.kt)("p",null,"In your Node folder, create a new file called api.js"),(0,r.kt)("p",null,"In your file, let's add our http module, just like we did in lab 5"),(0,r.kt)("p",null,"These are the basic trappings of an HTTP request server, just like we did in lab 5, only this is a stripped down version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const http = require("http");\n\nconst server = http.createServer((req, res) => {\n  if (req.url === "/") {\n    res.writeHead(200, {"Content-Type": "text/json"});\n    res.end();\n  } else {\n    res.writeHead(404, {"Content-Type": "text/plain"});\n    res.end("Data not found");\n  }\n});\n\nserver.listen(3000);\nconsole.log("Server is listening on port 3000");\n')),(0,r.kt)("p",null,"Now, we need to get some JSON data to serve to our API users. JSON is the typical data type returned with APIs. It allows javascript the ability to read, filter and display the data to the user very easily. Let's add a few things to our server to allow us to serve our json data."),(0,r.kt)("p",null,'First, download the json file from Canvas under Assignments, Lab 9, click "Download widgets.json". Right-click | Save Link As\u2026  | Save to a directory that you\'ll remember (eg. C:\\temp)'),(0,r.kt)("p",null,"If you're on a linux machine, you can just click the file from Windows and copy/paste the contents to a text file on your machine. Save it as widgets.json."),(0,r.kt)("p",null,"Right under the first line, we'll pull in our data, just like we did our \"http\" module. To do this, we'll just 'require' the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const http = require("http");\nconst data = require("C:/widgets.json");\n')),(0,r.kt)("p",null,'The "require" value for your data should point to the path of your widgets.json file that you just downloaded. The path on linux will be something like /home/username/widgets.json)'),(0,r.kt)("p",null,"Now, in your server, we need to return our data to make sure it's working. To do this, find the res.end() entry and edit it to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const server = http.createServer((req, res) => {\n  if (req.url === "/") {\n    res.writeHead(200, {"Content-Type": "text/json"});\n    res.end(JSON.stringify(data));\n  }\n  else {\n    res.writeHead(404, {"Content-Type": "text/plain"});\n    res.end("Data not found");\n  }\n});\n')),(0,r.kt)("p",null,"JSON.stringify is a delivered Node feature that will take our data and return it as json."),(0,r.kt)("p",null,'Also notice we are telling our Content-Type to be "text/json", so our client (your browser) will know what kind of data they\'re getting back.'),(0,r.kt)("p",null,"Save this file and run it."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ node api")),(0,r.kt)("p",null,"Open a browser and browse to your web server on port 3000. You should see the data listed as such"),(0,r.kt)("p",null,"Take a look at the data for a second. We have 4 items in the JSON data, denoted by the curly braces { } around each object. The whole thing is wrapped in square brackets ","[ ]",", which matches the JSON format."),(0,r.kt)("p",null,'We have widget1, 2, 3 and X; each with a "color" attribute.'),(0,r.kt)("p",null,"With this knowledge, let's go back to our code."),(0,r.kt)("p",null,"We're going to write a function that filters this JSON data, then we're going to add another route for our API to return only the 'blue' widgets."),(0,r.kt)("p",null,"Let's create our function. At the bottom of your api.js file, add the following function called listBlue()."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const listBlue = (res) => {\n  const colorBlue = data.filter((item) => {\n    return item.color === "blue";\n  });\n\n  res.end(JSON.stringify(colorBlue));\n}\n')),(0,r.kt)("p",null,"This function listBlue() takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," object, creates a variable that is assigned the value of a callback function that filters the each returned object in our JSON (4 total) by the ",(0,r.kt)("inlineCode",{parentName:"p"},'item.color === "blue"')," (2 total)."),(0,r.kt)("p",null,"We then return the JSONified data with our ",(0,r.kt)("inlineCode",{parentName:"p"},"response.end"),"."),(0,r.kt)("p",null,"With that function in our code, we can add another ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),", which is as simple as adding an additional ELSE IF statement to our server. A route is also known as a path, which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," at the end of the URL. In this case we're adding a route for ",(0,r.kt)("inlineCode",{parentName:"p"},"/blue"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const server = http.createServer((req, res) => {\n    if (req.url === "/") {\n      res.writeHead(200, {"Content-Type": "text/json"});\n      res.end(JSON.stringify(data));\n    } else if (req.url === "/blue") {\n      listBlue(res);\n    } else {\n      res.writeHead(404, {"Content-Type": "text/plain"});\n      res.end("Data not found");\n    }\n});\n')),(0,r.kt)("p",null,"Now, when a user requests /blue, they should only see the widgets with color = 'blue'. Let's try it out. Restart the node server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node api\n")),(0,r.kt)("p",null,"In our browser, request ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/blue"},"http://localhost:3000/blue")),(0,r.kt)("p",null,"Now we only have 2 widgets. We can also still browse to '/' to get all the widgets, and a route that doesn't exists, like '/red' will return a 404."),(0,r.kt)("p",null,"Congratulations, you just wrote your first API."),(0,r.kt)("h2",{id:"lab-9"},"Lab 9"),(0,r.kt)("p",null,"Using the Python code example we wrote to call a 3rd party API, and the Node code we used to create our own API, create a Python script that calls your Node API and returns a list of the widget names and their respective colors in an easy to read format, like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Widget1 is blue.\nWidget2 is green.\n")),(0,r.kt)("p",null,"Etc\u2026"),(0,r.kt)("p",null,"The best way to do this is to run your NodeJS script and python script on the same server. Run the node API server you created, then call it using localhost:3000 in your python script."),(0,r.kt)("p",null,"Formatting the output is important in this lab."))}d.isMDXComponent=!0}}]);