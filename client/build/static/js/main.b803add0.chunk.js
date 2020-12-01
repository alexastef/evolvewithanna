(this["webpackJsonpevolve-with-anna"]=this["webpackJsonpevolve-with-anna"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"products":[{"_id":"shirt1","title":"EWA x Vuori Energy Tank","image":"/images/EWA_womens_small.png","description":"Ultrasoft performance top with high neck and slight crop","price":45,"availableSizes":["XS","SM","MD","LG","XL"]},{"_id":"shirt2","title":"EWA x Vuori Strato Top","image":"/images/EWA_mens.png","description":"Soft performance knit for exercise or leisure","price":45,"availableSizes":["SM","MD","LG","XL","XXL"]}]}')},39:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c(1),a=c.n(r),i=c(5),n=c.n(i),o=(c(39),c(18)),l=c(26),d=c(27),h=c(33),j=c(32),u=c(28),b=c(3);function m(e){return"$"+Number(e.toFixed(2)).toLocaleString()+" "}var p=c(4),O=c.n(p),x=c(6),g=c.n(x),f=c(7),v=c.n(f);var y=function(e){var t=Object(r.useState)({}),c=Object(b.a)(t,2),a=c[0],i=c[1],n=Object(r.useState)([]),o=Object(b.a)(n,2),l=o[0],d=o[1],h=Object(r.useState)(),j=Object(b.a)(h,2),u=j[0],p=j[1],x=Object(r.useState)(!1),f=Object(b.a)(x,2),y=f[0],S=f[1],N=Object(r.useState)({_id:"",image:"",title:"",price:"",size:"",checkoutId:""}),C=Object(b.a)(N,2),w=C[0],k=C[1];function I(e){i(e),d(e.availableSizes),p(e.price),S(!0)}function A(){i({}),S(!1)}return Object(s.jsxs)("div",{children:[Object(s.jsx)(O.a,{bottom:!0,cascade:!0,children:Object(s.jsx)("ul",{className:"products",children:e.products.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsxs)("div",{className:"product",children:[Object(s.jsxs)("a",{href:"#"+e._id,onClick:function(){return I(e)},children:[Object(s.jsx)("img",{src:e.image,alt:e.title}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:e.title})})]}),Object(s.jsxs)("div",{className:"product-price",children:[Object(s.jsx)("p",{children:m(e.price)}),Object(s.jsx)("button",{className:"button primary",onClick:function(){return I(e)},children:"Select Size"})]})]})},e._id)}))})}),Object(s.jsx)(v.a,{isOpen:y,onRequestClose:A,children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)("button",{className:"close-modal",onClick:A,children:"x"}),Object(s.jsxs)("div",{className:"product-details",children:[Object(s.jsx)("img",{src:a.image,alt:a.title}),Object(s.jsxs)("div",{className:"product-details-description",children:[Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:a.title})}),Object(s.jsx)("p",{children:a.description}),Object(s.jsx)("p",{children:l.map((function(e){return Object(s.jsxs)("span",{children:[" "," "," ",Object(s.jsx)("button",{className:"button",id:e,onClick:function(e){return function(e){e.preventDefault();var t=e.target.id;k({_id:a._id,image:a.image,title:a.title,price:u,size:t,checkoutId:a._id+t})}(e)},children:e})]})}))}),Object(s.jsxs)("div",{className:"product-price",children:[Object(s.jsxs)("p",{children:["$",u]}),Object(s.jsx)("button",{className:"button primary add-to-cart",onClick:function(){e.addToCart(w),A()},children:"Add to Cart"})]})]})]})]})})]})};function S(){return Object(s.jsx)("div",{className:"about-section",children:Object(s.jsxs)(O.a,{bottom:!0,cascade:!0,children:[Object(s.jsxs)("div",{className:"about",children:[Object(s.jsx)("h4",{children:"Welcome, Kula, to Evolve with Anna"}),Object(s.jsx)("p",{children:"This is a 2 week fundraising campaign created for Anna with Community and Support at the forefront of our minds."}),Object(s.jsx)("p",{children:"Our dear friend and teacher has been diagnosed with Ewing Sarcoma, a rare type of Bone Cancer. Her treatments have already begun and to show she is not in this fight alone we have designed these shirts. We are stronger together and our hope is that they will help lift her up in these trying times."}),Object(s.jsx)("p",{children:"Please share this page so we can reach family, friends, and students both near and far. Vuroi has generously donated their product and we hope to see you around town sporting your Evolve with Anna gear. All proceeds will go directly to Chris and Anna to help with medical expenses. If you do not wish to buy a shirt, monetary donations are also appreciated. Thank you in advance!"}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"XO Ash and Alexa"})})]}),Object(s.jsxs)("div",{className:"ways-to-donate",children:[Object(s.jsxs)("p",{children:["To keep updated: ",Object(s.jsx)("a",{href:"https://www.caringbridge.org/visit/annaspalding",children:"Caring Bridge"})]}),Object(s.jsx)("p",{children:"For monetary or other donations, please search Anna Spalding on GoFundMe or reach out directly to Ashleigh at copas5983@gmail.com"}),Object(s.jsxs)("p",{children:["Shop more from Vuori ",Object(s.jsx)("a",{href:"https://www.vuoriclothing.com",children:"here!"})]})]})]})})}var N=c(29),C=c.n(N);var w=function(e){var t=e.cartItems,c=Object(r.useState)(!1),a=Object(b.a)(c,2),i=a[0],n=a[1],o=Object(r.useState)(!1),l=Object(b.a)(o,2),d=l[0],h=l[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:0===t.length?Object(s.jsx)("div",{className:"cart cart-header",children:"Cart is empty"}):Object(s.jsx)("div",{className:"cart cart-header",children:"Shopping Cart"})}),0!==t.length&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"cart",children:Object(s.jsx)(O.a,{left:!0,cascade:!0,children:Object(s.jsx)("ul",{className:"cart-items",children:t.map((function(t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:t.image,alt:t.title})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:t.title}),Object(s.jsxs)("p",{children:[t.size," x ",t.count,"  "]})]}),Object(s.jsx)("div",{className:"right",children:Object(s.jsx)("button",{id:t._id+t.size,onClick:function(c){return e.removeFromCart(c,t)},children:"X"})})]},t._id)}))})})})}),Object(s.jsx)("div",{className:"cart",children:Object(s.jsxs)("div",{className:"total",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["Total:"," ",m(t.reduce((function(e,t){return e+t.price*t.count}),0))]})}),Object(s.jsx)(C.a,{stripeKey:"pk_live_51Hqno3CUbxqSHspvOsqElOMwVgisyi6Q1mGz1HmODE2PN9TqQffNB6mxZO6fJhJilfRgYY2La7PEBXhxrffxh7PC00o9Gt044q",token:function(e){var c=t,s=100*t.reduce((function(e,t){return e+t.price*t.count}),0);console.log(e);var r={token:e,product:c,amount:s};return fetch("https://evolvewithanna.com/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){var t=e.status;console.log("STATUS: ",t),n(!0)})).catch((function(e){console.log(e),h(!0)}))},description:"Evolve With Anna x Vuori",shippingAddress:!0,billingAddress:!0,product:t,amount:100*t.reduce((function(e,t){return e+t.price*t.count}),0),children:Object(s.jsx)("button",{className:"button button primary",children:"Checkout"})})]})}),Object(s.jsx)(v.a,{isOpen:i,onRequestClose:function(){n(!1),t.length=0,localStorage.setItem("cartItems",[])},children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)("h4",{className:"checkout-modal",children:"Thank you for your purchase! Anna and Chris appreciate your support and can't wait to see everyone rocking their tees."}),Object(s.jsxs)("h4",{className:"checkout-modal",children:["You can expect to receive your shirt in 3-4 weeks. Please reach out if you have any questions!",Object(s.jsx)("img",{src:"https://i.imgur.com/k0xxxom.jpg",className:"thankyou-photo",alt:"Chris & Anna Thank You!"})]})]})}),Object(s.jsx)(v.a,{isOpen:d,onRequestClose:function(){h(!1)},children:Object(s.jsx)(g.a,{children:Object(s.jsx)("h4",{className:"checkout-modal",children:"Oops, something went wrong. Try placing your order again later."})})})]})]})},k=c(17),I=c(30),A=c(31),T=Object(I.a)("pk_test_51Hqno3CUbxqSHspvtJFJ7XYSpm1CfaCU5sjo24bJCeKZ1uWNOXQlzaEfrMGiHGdBAPzf4J5KuRrfdMTwektSgy15009hCPZZGq"),_=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).createOrder=function(e){alert("Need to save order for "+e.name)},e.removeFromCart=function(t){var c=t.target.id,s=e.state.cartItems.slice(),r=s.filter((function(e){return e.checkoutId!==c}));e.setState({cartItems:r}),localStorage.setItem("cartItems",JSON.stringify(s.filter((function(e){return e.checkoutId!==c}))))},e.addToCart=function(t){var c=e.state.cartItems.slice(),s=!1;c.forEach((function(e){e._id===t._id&&e.size===t.size&&(e.count++,s=!0)})),s||c.push(Object(o.a)(Object(o.a)({},t),{},{count:1})),e.setState({cartItems:c}),localStorage.setItem("cartItems",JSON.stringify(c))},e.state={products:u.products,cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],size:"",count:0},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsxs)("header",{children:[Object(s.jsx)(k.Link,{to:"about-section",className:"header-left",activeClass:"active",spy:!0,smooth:!0,children:Object(s.jsx)("strong",{children:Object(s.jsx)("span",{className:"welcome",children:"Evolve with Anna"})})}),Object(s.jsx)(k.Link,{to:"cart",className:"header-right",activeClass:"active",spy:!0,smooth:!0,children:Object(s.jsx)("i",{className:"fas fa-shopping-cart fa-lg"})})]}),Object(s.jsx)(A.Elements,{stripe:T,children:Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(S,{}),Object(s.jsx)(y,{products:this.state.products,addToCart:this.addToCart})]}),Object(s.jsx)("div",{className:"sidebar",children:Object(s.jsx)(w,{cartItems:this.state.cartItems,size:this.state.size,removeFromCart:this.removeFromCart,createOrder:this.createOrder})})]})})}),Object(s.jsx)("footer",{children:"Alexa Stef Creative"})]})}}]),c}(a.a.Component);n.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.b803add0.chunk.js.map