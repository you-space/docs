"use strict";(self.webpackChunk_you_space_docs=self.webpackChunk_you_space_docs||[]).push([[488],{2721:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-137b1576",path:"/requests/items/post-items.html",title:"POST /items",lang:"en-US",frontmatter:{sidebarDepth:0},excerpt:"",headers:[{level:2,title:"Body",slug:"body",children:[{level:3,title:"typeId",slug:"typeid",children:[]},{level:3,title:"visibilityId",slug:"visibilityid",children:[]},{level:3,title:"value",slug:"value",children:[]},{level:3,title:"sourceId",slug:"sourceid",children:[]},{level:3,title:"Example",slug:"example",children:[]}]},{level:2,title:"Response",slug:"response",children:[]}],filePathRelative:"requests/items/post-items.md",git:{updatedTime:1631819767e3}}},8483:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="post-items" tabindex="-1"><a class="header-anchor" href="#post-items" aria-hidden="true">#</a> POST /items</h1><p>Create a new item</p><h2 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h2><h3 id="typeid" tabindex="-1"><a class="header-anchor" href="#typeid" aria-hidden="true">#</a> typeId</h3><ul><li>type: <code>number</code></li><li>required: <code>true</code></li></ul><h3 id="visibilityid" tabindex="-1"><a class="header-anchor" href="#visibilityid" aria-hidden="true">#</a> visibilityId</h3><ul><li>type: <code>number</code></li><li>required: <code>true</code></li></ul><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h3><ul><li>type: <code>object</code></li><li>required: <code>true</code></li></ul><h3 id="sourceid" tabindex="-1"><a class="header-anchor" href="#sourceid" aria-hidden="true">#</a> sourceId</h3><ul><li>type: <code>string</code></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;typeId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;visibilityId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;sourceId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7e690d9ec04912130daafc55bba7&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7e690d9ec04912130daafc55bba7&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;some title&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;typeId&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;typeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;youtube-videos&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;visibilityId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;visibilityName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;sourceId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7e690d9ec04912130daafc55bba7&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7e690d9ec04912130daafc55bba7&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;some title&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-09-13T09:56:39.623-03:00&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',15),t={render:function(s,n){return e}}}}]);