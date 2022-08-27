<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<p>1、首先进入到vue的文件夹</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1643697419709-aeb4e51f-1008-4ae7-905e-3a028baf68ee.png" alt="img"></p>
<p>2、在终端输入安装命令     npm i axios -S</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1643697505294-8bcf8efd-dec9-451a-9ac5-7b25a6462d43.png" alt="img"></p>
<p>3、等待安装</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1643697543555-35d3e6c2-018f-4739-b507-c3b471fa1c7b.png" alt="img"></p>
<p>安装完成：</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1643697632812-d19c9408-7db4-42d2-b97f-aac1d972d3cd.png" alt="img"></p>
<h1 id="三、使用" tabindex="-1"><a class="header-anchor" href="#三、使用" aria-hidden="true">#</a> 三、使用</h1>
<h2 id="request-js封装axios" tabindex="-1"><a class="header-anchor" href="#request-js封装axios" aria-hidden="true">#</a> request.js封装axios</h2>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1643889491220-7a3c34ec-f8e2-430b-9875-f8127817954c.png" alt="img"></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>import axios from 'axios'

const request = axios.create(<span class="token punctuation">{</span>
	baseURL<span class="token operator">:</span> '/api'<span class="token punctuation">,</span>  <span class="token comment">// 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！</span>
    timeout<span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span>)

<span class="token comment">// request 拦截器</span>
<span class="token comment">// 可以自请求发送前对请求做一些处理</span>
<span class="token comment">// 比如统一加token，对请求参数统一加密</span>
request.interceptors.request.use(config => <span class="token punctuation">{</span>
    config.headers<span class="token punctuation">[</span>'Content-Type'<span class="token punctuation">]</span> = 'application/json;charset=utf<span class="token number">-8</span>';
  
 <span class="token comment">// config.headers['token'] = user.token;  // 设置请求头</span>
    return config
<span class="token punctuation">}</span><span class="token punctuation">,</span> error => <span class="token punctuation">{</span>
    return Promise.reject(error)
<span class="token punctuation">}</span>);

<span class="token comment">// response 拦截器</span>
<span class="token comment">// 可以在接口响应后统一处理结果</span>
request.interceptors.response.use(
    response => <span class="token punctuation">{</span>
        let res = response.data;
        <span class="token comment">// 如果是返回的文件</span>
        if (response.config.responseType === 'blob') <span class="token punctuation">{</span>
            return res
        <span class="token punctuation">}</span>
        <span class="token comment">// 兼容服务端返回的字符串数据</span>
        if (typeof res === 'string') <span class="token punctuation">{</span>
            res = res ? JSON.parse(res) <span class="token operator">:</span> res
        <span class="token punctuation">}</span>
        return res;
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    error => <span class="token punctuation">{</span>
        console.log('err' + error) <span class="token comment">// for debug</span>
        return Promise.reject(error)
    <span class="token punctuation">}</span>
)


export default request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在main-js中引用" tabindex="-1"><a class="header-anchor" href="#在main-js中引用" aria-hidden="true">#</a> 在main.js中引用</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">'element-plus'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'../src/assets/gloable.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">"../src/utils/request.js"</span><span class="token punctuation">;</span>  <span class="token comment">//引用</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./element-variables.scss'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$request <span class="token operator">=</span> request<span class="token punctuation">;</span> <span class="token comment">//引用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在vue中使用" tabindex="-1"><a class="header-anchor" href="#在vue中使用" aria-hidden="true">#</a> 在VUE中使用</h2>
<p>先测试一波：之前的分页里面load（）方法测试，请求200且有数据就行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">"../utils/request"</span>
<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://localhost:2022/cameraer/page?pageNum="</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pageNum <span class="token operator">+</span> <span class="token string">"&amp;pageSize="</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">/*       fetch("http://localhost:2022/cameraer/page?pageNum=" + this.pageNum + "&amp;pageSize=" + this.pageSize).then(res => res.json()).then(res =>{
          console.log(res)
          this.tableData = res.data
          this.total = res.total
        }) */</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644062441766-ea8f760f-5e0e-438f-ae60-5d398f025174.png" alt="img"></p>
<p>但是total和pages不应为0</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644062472654-1f0f89fb-12be-47a4-bda7-5fd1189f726d.png" alt="img"></p>
<p>原因：<code v-pre>MybaitsConfig.java</code>里面没有声明配置类</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644065660129-d22d733c-90a3-49b2-b008-54b84a165924.png" alt="img"></p>
<p>测试成功！</p>
</div></template>


