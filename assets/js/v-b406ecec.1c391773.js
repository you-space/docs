"use strict";(self.webpackChunk_you_space_docs=self.webpackChunk_you_space_docs||[]).push([[255],{8923:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-b406ecec",path:"/basics/items.html",title:"Items",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Items with local content",slug:"items-with-local-content",children:[]},{level:2,title:"External content",slug:"external-content",children:[]},{level:2,title:"Items serialization",slug:"items-serialization",children:[]}],filePathRelative:"basics/items.md",git:{updatedTime:1631820748e3}}},9665:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var i=a(6252);const n=(0,i.uE)('<h1 id="items" tabindex="-1"><a class="header-anchor" href="#items" aria-hidden="true">#</a> Items</h1><p>Items are the content itself of you-space, each item will belongs to a type that will define its&#39;s behavior in the application, things like display format of fields and how to edit the fields.</p><p>An item can be a local content like a video hosted in the server, or an external content like a youtube-video.</p><h2 id="items-with-local-content" tabindex="-1"><a class="header-anchor" href="#items-with-local-content" aria-hidden="true">#</a> Items with local content</h2><p>Items with local content are simple data saved in database, they can have any type of data like text, number, date, file, etc...</p><h2 id="external-content" tabindex="-1"><a class="header-anchor" href="#external-content" aria-hidden="true">#</a> External content</h2><p>Items with external content will have the raw data of the external content.</p><p>So for example if the external content is a youtube-video, the item will contain the raw data that came from youtube-api.</p><p>If you already have some items with external content you can check they in items-list-page to view the raw data.</p>',9),l=(0,i._)("strong",null,"Tip:",-1),o=(0,i.Uk)(" To have external content you will need a origin, that will handle the imports for you, check "),s={href:"/basics/origins.md",target:"_blank",rel:"noopener noreferrer"},r=(0,i.Uk)("origins-page"),c=(0,i.Uk)(" to know more about."),h=(0,i._)("h2",{id:"items-serialization",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#items-serialization","aria-hidden":"true"},"#"),(0,i.Uk)(" Items serialization")],-1),d=(0,i._)("p",null,"Well you-space do not use directly the items.",-1),u=(0,i._)("p",null,[(0,i.Uk)("All they have to pass to a process called "),(0,i._)("strong",null,"serialization by type"),(0,i.Uk)(", that will convert the data of items to a more readable way using the configuration defined in "),(0,i._)("code",null,"Type options"),(0,i.Uk)(".")],-1),p=(0,i._)("p",null,"If is an external content this process will convert the raw data to a internal format, and if is a local content it will simple return item with his fields values.",-1),m={render:function(e,t){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("blockquote",null,[(0,i._)("p",null,[l,o,(0,i._)("a",s,[r,(0,i.Wm)(a)]),c])]),h,d,u,p],64)}}}}]);