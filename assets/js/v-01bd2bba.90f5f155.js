"use strict";(self.webpackChunk_you_space_docs=self.webpackChunk_you_space_docs||[]).push([[659],{5348:(a,e,n)=>{n.r(e),n.d(e,{data:()=>s});const s={key:"v-01bd2bba",path:"/requests/origins/patch-admin-origins.html",title:"PATCH /admin/origins/:id",lang:"en-US",frontmatter:{sidebarDepth:0},excerpt:"",headers:[{level:2,title:"Params",slug:"params",children:[{level:3,title:"id",slug:"id",children:[]}]},{level:2,title:"Body",slug:"body",children:[{level:3,title:"name",slug:"name",children:[]},{level:3,title:"active",slug:"active",children:[]},{level:3,title:"config",slug:"config",children:[]},{level:3,title:"schedule",slug:"schedule",children:[]},{level:3,title:"Payload Example:",slug:"payload-example",children:[]}]},{level:2,title:"Response",slug:"response",children:[]}],filePathRelative:"requests/origins/patch-admin-origins.md",git:{updatedTime:1631820748e3}}},4663:(a,e,n)=>{n.r(e),n.d(e,{default:()=>t});const s=(0,n(6252).uE)('<h1 id="patch-admin-origins-id" tabindex="-1"><a class="header-anchor" href="#patch-admin-origins-id" aria-hidden="true">#</a> PATCH /admin/origins/:id</h1><p>Update a origin</p><blockquote><p><strong>important</strong>: Require admin permissions</p></blockquote><h2 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li>type: <code>number</code></li><li>required: <code>true</code></li><li>details: id of origin</li></ul><h2 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li>type: <code>string</code></li></ul><h3 id="active" tabindex="-1"><a class="header-anchor" href="#active" aria-hidden="true">#</a> active</h3><ul><li>type: <code>string</code></li></ul><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><ul><li>type: <code>object</code></li><li>details: Config to pass to the provider</li></ul><h3 id="schedule" tabindex="-1"><a class="header-anchor" href="#schedule" aria-hidden="true">#</a> schedule</h3><ul><li>type: <code>object</code></li><li>details: Define the frequency of imports</li><li>example:</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;repeatEach&quot;</span><span class="token operator">:</span> <span class="token string">&quot;day&quot;</span> <span class="token comment">// minute, day, week, month</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="payload-example" tabindex="-1"><a class="header-anchor" href="#payload-example" aria-hidden="true">#</a> Payload Example:</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;youtube-channel&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;apiKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234565...&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;channelId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UC-azehnt...&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;origin updated&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',20),t={render:function(a,e){return s}}}}]);