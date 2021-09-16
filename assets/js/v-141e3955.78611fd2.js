"use strict";(self.webpackChunk_you_space_docs=self.webpackChunk_you_space_docs||[]).push([[981],{281:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-141e3955",path:"/requests/origins/get-admin-origins.html",title:"GET /admin/origins",lang:"en-US",frontmatter:{sidebarDepth:0},excerpt:"",headers:[{level:2,title:"Query",slug:"query",children:[{level:3,title:"page",slug:"page",children:[]},{level:3,title:"limit",slug:"limit",children:[]}]},{level:2,title:"Response",slug:"response",children:[]}],filePathRelative:"requests/origins/get-admin-origins.md",git:{updatedTime:1631819767e3}}},1547:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="get-admin-origins" tabindex="-1"><a class="header-anchor" href="#get-admin-origins" aria-hidden="true">#</a> GET /admin/origins</h1><p>Return the array of origins</p><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h2><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h3><ul><li>type: <code>number</code></li><li>details: page of request</li></ul><h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> limit</h3><ul><li>type: <code>number</code></li><li>details: items per request, max: 40</li></ul><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token comment">// pagination information</span>\n    <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// array of origins</span>\n    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Teste&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;providerName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;youtube-videos&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;valid&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// tell if is a valid provider</span>\n            <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// provider fields</span>\n            <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;schedule&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// schedule of imports</span>\n            <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-09-09T18:10:59.815-03:00&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-09-09T18:11:02.336-03:00&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',9),p={render:function(n,s){return e}}}}]);