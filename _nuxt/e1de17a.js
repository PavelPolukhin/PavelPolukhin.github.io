(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){"use strict";var r=n(0),o=n(244),c=n.n(o),d=n(245),l=n.n(d);r.default.use(c.a,{locale:l.a})},247:function(e,t,n){n(248),e.exports=n(249)},295:function(e,t,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(111).default)("2d79f4b2",content,!0,{sourceMap:!1})},296:function(e,t,n){var r=n(100)(!1);r.push([e.i,'body,html{margin:0;padding:0;font-family:"Roboto",sans-serif}.el-main{padding:72px 80px}@media(max-width:992px){.el-main{padding:72px 40px}}@media(max-width:768px){.el-main{padding:72px 20px}}.el-button{padding:12px 40px;font-style:normal;font-weight:500;font-size:16px;line-height:20px;font-family:"Roboto",sans-serif;border-radius:3px}.el-button--primary{color:#fff;background-color:#1a45db;transition:all .3s ease}.el-button--primary:hover{background-color:#173dc2}h2{font-style:normal;font-weight:400;font-size:24px;line-height:28px;color:#3d3d3d;margin:0}.cards-list{display:flex;flex-wrap:wrap;margin-top:24px}.card{height:100%;position:relative;display:flex;flex-direction:column;cursor:pointer}.card-img{display:flex;justify-content:center;align-items:center;padding:20px;margin-bottom:20px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.card-img img{max-width:100%}.card-price{font-style:normal;font-weight:500;font-size:20px;line-height:24px;color:#141414;display:flex;margin-bottom:8px}.card-title{font-style:normal;font-weight:400;font-size:16px;line-height:20px;color:#525252;margin-bottom:20px;transition:all .3s ease}.card__price,.card__price-old{display:flex;align-items:center}.card__price-old{font-style:normal;font-weight:400;font-size:16px;line-height:20px;color:#8f8f8f;position:relative}.card__price-old:before{content:"";position:absolute;left:0;height:1px;right:0;background-color:#ff0d55;z-index:9;transform:rotate(-13deg)}.card__price-new{font-style:normal;font-weight:500;font-size:20px;line-height:24px;color:#141414;margin-right:8px}.card__favourite{position:absolute;right:17px;top:23px;cursor:pointer}.card-action{margin-top:auto;display:flex;justify-content:center}.card .numberOfProducts{display:flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.card .numberOfProducts-count{font-style:normal;font-weight:400;font-size:16px;line-height:20px;color:#525252;padding:0 17px}.card .numberOfProducts-minus,.card .numberOfProducts-plus{cursor:pointer;display:flex;align-items:center;justify-content:center;background:#f8f8f8;border-radius:3px;transition:all .3s ease;padding:12px;height:20px;width:20px}.card .numberOfProducts-minus:hover,.card .numberOfProducts-plus:hover{background:#f2f2f2}.card .numberOfProducts-minus:active,.card .numberOfProducts-plus:active{background:#ededed}.card:hover .card-title{color:#4a6eed}',""]),e.exports=r},297:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o}));n(211),n(142);var r=function(){return{bucket:[]}},o={addBucket:function(e,t){e.bucket.push(t)},changeBucket:function(e,t){var n=e.bucket.findIndex((function(e){return e.id===t.id}));t.numberOfProducts>=1?e.bucket.splice(n,1,t):t.numberOfProducts<=0&&e.bucket.splice(n,1)}}},298:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o}));n(211),n(142);var r=function(){return{favourites:[]}},o={addFavorites:function(e,t){e.favourites.push(t)},deleteFavorites:function(e,t){var n=e.favourites.findIndex((function(e){return e.id===t}));e.favourites.splice(n,1)}}},299:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r}));var r=function(){return{recommendedData:[{img:"image1",price:"189",title:"Oral-B ополаскиватель для полости рта Комплекс LASTING FRESHNESS Arctic Mint 250 мл",id:"0"},{img:"image4",price:"801",title:"Сменные насадки для электрических зубных щеток Oral-B Sensi Ultrathin для бережной чистки, 2 шт.\n",id:"1"},{img:"image3",price:"2289",title:"Электрическая зубная щетка Philips Sonicare 2 Series Gum Health HX6232/20 с двумя насадками, черный бла бла бла бла бла",id:"2"},{img:"image2",price:"385",oldPrice:"540",title:"Oral-B Зубная нить Essential Floss вощеная, мята, 2шт",id:"3"}]}}}},[[247,5,1,6]]]);