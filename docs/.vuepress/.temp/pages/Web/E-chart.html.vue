<template><div><h1 id="一、e-caharts的简介" tabindex="-1"><a class="header-anchor" href="#一、e-caharts的简介" aria-hidden="true">#</a> 一、E-caharts的简介</h1>
<p>官网：https://echarts.apache.org/zh/index.html</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1646551434368-65e08c7b-b5ed-4d77-a2c6-59ec60a7a2c4.png" alt="img"></p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h1 id="二、e-caharts的安装" tabindex="-1"><a class="header-anchor" href="#二、e-caharts的安装" aria-hidden="true">#</a> 二、E-caharts的安装</h1>
<p>安装方式——从 npm 获取</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>npm install echarts --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1646551973125-634b6bc7-d6e5-47ce-9bf4-c3567e73bdf5.png" alt="img"></p>
<h1 id="三、e-cahrts的使用——静态数据" tabindex="-1"><a class="header-anchor" href="#三、e-cahrts的使用——静态数据" aria-hidden="true">#</a> 三、E-cahrts的使用——静态数据</h1>
<h2 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图" aria-hidden="true">#</a> 折线图</h2>
<p>首先需要在页面中设置一个需要存放图表的容器</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 400px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用echarts在script中引用echarts</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mounted中的代码是复制官网上的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"home"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">{</span>

      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//页面元素渲染之后再触发  </span>
    <span class="token keyword">var</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Mon'</span><span class="token punctuation">,</span> <span class="token string">'Tue'</span><span class="token punctuation">,</span> <span class="token string">'Wed'</span><span class="token punctuation">,</span> <span class="token string">'Thu'</span><span class="token punctuation">,</span> <span class="token string">'Fri'</span><span class="token punctuation">,</span> <span class="token string">'Sat'</span><span class="token punctuation">,</span> <span class="token string">'Sun'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'value'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果展示：</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1646553484361-7d29b0b0-e290-4aaa-8756-deaa997a738d.png" alt="img"></p>
<h2 id="饼状图" tabindex="-1"><a class="header-anchor" href="#饼状图" aria-hidden="true">#</a> 饼状图</h2>
<p>页面需要一个容器</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 400px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>//折线图的容器
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pie<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 400px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> //饼状图的容器
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入echatrs,将官网代码复制</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"home"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">{</span>

      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//页面元素渲染之后再触发 </span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">//折线图</span>
    <span class="token keyword">var</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Mon'</span><span class="token punctuation">,</span> <span class="token string">'Tue'</span><span class="token punctuation">,</span> <span class="token string">'Wed'</span><span class="token punctuation">,</span> <span class="token string">'Thu'</span><span class="token punctuation">,</span> <span class="token string">'Fri'</span><span class="token punctuation">,</span> <span class="token string">'Sat'</span><span class="token punctuation">,</span> <span class="token string">'Sun'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'value'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//饼图</span>
    <span class="token keyword">var</span> PieOption <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">//更改折线图的option名称</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Referer of a Website'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">subtext</span><span class="token operator">:</span> <span class="token string">'Fake Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'center'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'item'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'vertical'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'left'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Access From'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'pie'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token string">'50%'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Search Engine'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">735</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Direct'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Email'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">484</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Union Ads'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Video Ads'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">'rgba(0, 0, 0, 0.5)'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> PieDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'pie'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取容器id</span>
    <span class="token keyword">var</span> PieChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>PieDom<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//初始化表格</span>
    PieChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>PieOption<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//启用饼状图</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果展示</p>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> <img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1646554564400-684fec49-659f-4249-ad92-defd5873baa7.png" alt="img"></h3>
<h1 id="四、e-charts动态渲染数据" tabindex="-1"><a class="header-anchor" href="#四、e-charts动态渲染数据" aria-hidden="true">#</a> 四、E-charts动态渲染数据</h1>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1646554791607-c661f205-79a6-4aff-ab52-7924b3826d41.png" alt="img"></p>
<p>思路分析：只要将动态的数据替换成数据库中的数据就可以了</p>
<p>在cotroller文件夹中新建EchartsColler.java文件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Result</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Loginuserwyt</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">SysTest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ILoginuserwytService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ISysTestService</span></span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>collection<span class="token punctuation">.</span></span><span class="token class-name">CollUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>date<span class="token punctuation">.</span></span><span class="token class-name">DateUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>date<span class="token punctuation">.</span></span><span class="token class-name">Quarter</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>


<span class="token comment">//新建一个echarts的接口</span>


<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/echarts"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EchartsController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ILoginuserwytService</span> loginuserwytService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ISysTestService</span> sysTestService<span class="token punctuation">;</span>
<span class="token comment">//每个季度前台用户注册数量</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/members"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">members</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Loginuserwyt</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> loginuserwytService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//首先定义四个数;四个季度</span>
       <span class="token keyword">int</span> q1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token keyword">int</span> q2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token keyword">int</span> q3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token keyword">int</span> q4 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token comment">//循环</span>
       <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Loginuserwyt</span> loginuserwyt <span class="token operator">:</span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token class-name">Date</span> createTime <span class="token operator">=</span> loginuserwyt<span class="token punctuation">.</span><span class="token function">getCreatetime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token class-name">Quarter</span> quarter <span class="token operator">=</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">quarterEnum</span><span class="token punctuation">(</span>createTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">switch</span><span class="token punctuation">(</span>quarter<span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">case</span> <span class="token constant">Q1</span><span class="token operator">:</span>  q1<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">case</span> <span class="token constant">Q2</span><span class="token operator">:</span>  q2<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">case</span> <span class="token constant">Q3</span><span class="token operator">:</span>  q3<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">case</span> <span class="token constant">Q4</span><span class="token operator">:</span>  q4<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>

       <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">newArrayList</span><span class="token punctuation">(</span>q1<span class="token punctuation">,</span>q2<span class="token punctuation">,</span>q3<span class="token punctuation">,</span>q4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token comment">//每个季度后台管理员用户的数量</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/admin"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysTest</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> sysTestService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//首先定义四个数;四个季度</span>
       <span class="token keyword">int</span> q1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token keyword">int</span> q2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token keyword">int</span> q3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token keyword">int</span> q4 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token comment">//循环</span>
       <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SysTest</span> sysTest <span class="token operator">:</span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token class-name">Date</span> createTime1 <span class="token operator">=</span> sysTest<span class="token punctuation">.</span><span class="token function">getCreateTime1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token class-name">Quarter</span> quarter <span class="token operator">=</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">quarterEnum</span><span class="token punctuation">(</span>createTime1<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">switch</span><span class="token punctuation">(</span>quarter<span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">case</span> <span class="token constant">Q1</span><span class="token operator">:</span>  q1<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">case</span> <span class="token constant">Q2</span><span class="token operator">:</span>  q2<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">case</span> <span class="token constant">Q3</span><span class="token operator">:</span>  q3<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">case</span> <span class="token constant">Q4</span><span class="token operator">:</span>  q4<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>

       <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">newArrayList</span><span class="token punctuation">(</span>q1<span class="token punctuation">,</span>q2<span class="token punctuation">,</span>q3<span class="token punctuation">,</span>q4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端绑定</p>
<p>每个图表都需要一个容器</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>template<span class="token punctuation">></span></span>

<span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>row <span class="token operator">:</span>gutter<span class="token operator">=</span><span class="token string">"10"</span> style<span class="token operator">=</span><span class="token string">"margin-bottom: 100px"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">"6"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>card<span class="token operator">></span>
                <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-icon-user-solid"</span> style<span class="token operator">=</span><span class="token string">"margin-right: 15px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>用户总数<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"paddding:10px 0;text-align: center;font-weight: bold"</span><span class="token operator">></span><span class="token number">5000</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">"6"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>card<span class="token operator">></span>
                <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-icon-shopping-cart-1"</span> style<span class="token operator">=</span><span class="token string">"margin-right: 15px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>订单数量<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"paddding:10px 0;text-align: center;font-weight: bold"</span><span class="token operator">></span><span class="token number">320</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">"6"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>card<span class="token operator">></span>
                <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-icon-bank-card"</span> style<span class="token operator">=</span><span class="token string">"margin-right: 15px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>销售总额<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"paddding:10px 0;text-align: center;font-weight: bold"</span><span class="token operator">></span>￥<span class="token number">4590</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">"6"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>card<span class="token operator">></span>
                <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-icon-camera-solid"</span> style<span class="token operator">=</span><span class="token string">"margin-right: 15px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>拍摄评价<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"paddding:10px 0;text-align: center;font-weight: bold"</span><span class="token operator">></span>非常好<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">"12"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"main"</span> style<span class="token operator">=</span><span class="token string">"width: 500px;height: 400px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">"12"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"pie"</span> style<span class="token operator">=</span><span class="token string">"width: 500px;height: 400px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token generics"><span class="token punctuation">&lt;</span>script<span class="token punctuation">></span></span>
<span class="token keyword">import</span> <span class="token operator">*</span> as echarts from 'echarts'<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">request</span> from <span class="token string">"../utils/request"</span>
export <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token string">"home"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//页面元素渲染之后再触发 </span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token comment">//折线图</span>
    <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token punctuation">{</span>
        text<span class="token operator">:</span> '各季度前台用户注册数量统计'<span class="token punctuation">,</span>
        subtext<span class="token operator">:</span> <span class="token char">'趋势图'</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token char">'center'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//X轴的文本</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> 'category'<span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token char">'第一季度'</span><span class="token punctuation">,</span> <span class="token char">'第二季度'</span><span class="token punctuation">,</span> <span class="token char">'第三季度'</span><span class="token punctuation">,</span> <span class="token char">'第四季度'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//以下两个是点击图片会跟随显示动态文本</span>
      tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token char">'item'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        orient<span class="token operator">:</span> 'vertical'<span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token char">'left'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//Y轴的数据</span>
      yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token char">'value'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span><span class="token string">"折线图"</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">//里面的数据清空</span>
          type<span class="token operator">:</span> <span class="token char">'line'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span><span class="token string">"柱状图"</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">//里面的数据清空</span>
          type<span class="token operator">:</span> <span class="token char">'bar'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">var</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token char">'main'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//请求数据</span>
    request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/echarts/members"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      
      option<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> res<span class="token punctuation">.</span>data
      option<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> res<span class="token punctuation">.</span>data
      <span class="token comment">// 数据准备完毕之后再set</span>
      myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    
    <span class="token comment">//饼图</span>
    <span class="token keyword">var</span> <span class="token class-name">PieOption</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token punctuation">{</span>
        text<span class="token operator">:</span> '各季度后台管理员用户数量统计'<span class="token punctuation">,</span>
        subtext<span class="token operator">:</span> <span class="token char">'比例图'</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token char">'center'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token char">'item'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        orient<span class="token operator">:</span> 'vertical'<span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token char">'left'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token char">'管理员数量'</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token char">'pie'</span><span class="token punctuation">,</span>
          radius<span class="token operator">:</span> <span class="token char">'60%'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span><span class="token punctuation">{</span>            <span class="token comment">//饼图图形上的文本标签</span>
            normal<span class="token operator">:</span><span class="token punctuation">{</span>
              show<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
              position<span class="token operator">:</span><span class="token char">'inner'</span><span class="token punctuation">,</span> <span class="token comment">//标签的位置</span>
              textStyle <span class="token operator">:</span> <span class="token punctuation">{</span>
                fontWeight <span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">,</span>
                fontSize <span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>    <span class="token comment">//文字的字体大小</span>
                color<span class="token operator">:</span> <span class="token string">"#fff"</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              formatter<span class="token operator">:</span><span class="token char">'{d}%'</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              shadowBlur<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
              shadowOffsetX<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              shadowColor<span class="token operator">:</span> '<span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>'
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">var</span> <span class="token class-name">PieDom</span> <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token char">'pie'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> <span class="token class-name">PieChart</span> <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">PieDom</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//请求数据</span>
    request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/echarts/admin"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      
      <span class="token class-name">PieOption</span><span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"第一季度"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"第二季度"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"第三季度"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"第四季度"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
      <span class="token class-name">PieChart</span><span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token class-name">PieOption</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    
    
    
  <span class="token punctuation">}</span>
  
  
  
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1646626186414-73406b2c-c631-4c5a-a41e-bbad12808c01.png" alt="img"></p>
</div></template>


