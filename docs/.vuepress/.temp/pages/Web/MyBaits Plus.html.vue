<template><div><h1 id="mybaits简介" tabindex="-1"><a class="header-anchor" href="#mybaits简介" aria-hidden="true">#</a> Mybaits简介</h1>
<p>官网地址：<a href="https://baomidou.com/" target="_blank" rel="noopener noreferrer">MyBatis-Plus (baomidou.com)<ExternalLinkIcon/></a></p>
<p>​	MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。</p>
<p>引入依赖环境</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code> <span class="token comment">&lt;!-- mybatis-plus --></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置application.yml文件</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置CameraerMapper.java文件</p>
<p>在config文件夹下新建MybaitsConfig.java</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DbType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">MybatisPlusInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>inner<span class="token punctuation">.</span></span><span class="token class-name">PaginationInnerInterceptor</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.wyt.springbootwyt.mapper"</span><span class="token punctuation">)</span><span class="token comment">//放在启动类的下方</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybaitsConfig</span> <span class="token punctuation">{</span>
  
    <span class="token comment">// 最新版</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@MapperScan(&quot;com.wyt.springbootwyt.mapper&quot;)</code>放在启动类的下方，就不用每个mapper都加@Mapper</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>



<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.wyt.springbootwyt.mapper"</span><span class="token punctuation">)</span>  <span class="token comment">//放这就行</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringbootwytApplication</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>


		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringbootwytApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

		
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="实现增删改" tabindex="-1"><a class="header-anchor" href="#实现增删改" aria-hidden="true">#</a> 实现增删改</h1>
<p><code v-pre>CameraService.java</code>文件要实现继承Mapper和实体类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">ServiceImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Cameraer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">CameraerMapper</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CameraService</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CameraerMapper</span><span class="token punctuation">,</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span> 

<span class="token comment">/*     @Autowired
    private CameraerMapper cameraerMapper;

    public int save(Cameraer cameraer){
        if(cameraer.getId() == null){  // user没有id，则表示是新增
           return cameraerMapper.insert(cameraer);

        }else{   // 否则为更新
           return cameraerMapper.update(cameraer);
        }

    } */</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>CameraerMapper.java</code>要实现类继承</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BaseMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Cameraer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Delete</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Insert</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Select</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Update</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CameraerMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span> <span class="token operator">/</span>继承实体类
    <span class="token comment">//查询</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">"SELECT * from camera_er"</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token function">findeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//添加</span>
    <span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">"INSERT into camera_er(name,password,nickname,email,phone,address)VALUES(#{name},#{password},#{nickname},#{email},#{phone},#{address});"</span><span class="token punctuation">)</span>

    <span class="token keyword">int</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">Cameraer</span> cameraer<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//更新数据</span>
    <span class="token annotation punctuation">@Update</span><span class="token punctuation">(</span><span class="token string">"UPDATE camera_er SET name=#{name},password=#{password},nickname=#{nickname},email=#{email},phone=#{phone},address=#{address} WHERE id=#{id}"</span><span class="token punctuation">)</span>
    
    <span class="token keyword">int</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Cameraer</span> cameraer<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Integer</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Cameraer</span> cameraer<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//删除</span>
    <span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">"delete from camera_er where id=#{id}"</span><span class="token punctuation">)</span>

    <span class="token class-name">Integer</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\hpp\AppData\Roaming\Typora\typora-user-images\image-20220823170506290.png" alt="image-20220823170506290"></p>
<h2 id="新增和修改" tabindex="-1"><a class="header-anchor" href="#新增和修改" aria-hidden="true">#</a> 新增和修改</h2>
<p>直接引用Mybaitsplus中的<code v-pre>saveOrUpdate(cameraer)</code>方法，既能更新又能插入，有三种方法.</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//CameraService.java</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">ServiceImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Cameraer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">CameraerMapper</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CameraService</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CameraerMapper</span><span class="token punctuation">,</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">saveCamera</span><span class="token punctuation">(</span><span class="token class-name">Cameraer</span> cameraer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//方法三：Mybaitsplus提供的方法，表示插入数据或更新数据</span>
        <span class="token keyword">return</span> <span class="token function">saveOrUpdate</span><span class="token punctuation">(</span>cameraer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token doc-comment comment">/***************************以下为剩下两种方法都不如上面的简单***********************/</span>
    
<span class="token comment">/*   //方法一：手敲代码自己写
    @Autowired
    private CameraerMapper cameraerMapper;

    public int save(Cameraer cameraer){
        if(cameraer.getId() == null){  // user没有id，则表示是新增
           return cameraerMapper.insert(cameraer);

        }else{   // 否则为更新
           return cameraerMapper.update(cameraer);
        }

    } */</span>
<span class="token comment">/* 
    //方法二：Mybaitsplus提供的方法，表示插入数据或更新数据
    if(cameraer.getId()==null){
        return save(cameraer);
    }else{
        return  updateById(cameraer);
    }
} */</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加（更改）返回布尔型，并且更改(创建)为<code v-pre>saveCamera()</code>方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//CameraerController.java</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Cameraer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">CameraerMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">CameraService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DeleteMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestBody</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/cameraer"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CameraerController</span><span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">CameraerMapper</span> cameraerMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CameraService</span> cameraService<span class="token punctuation">;</span>


    <span class="token comment">//新增或修改</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Cameraer</span> cameraer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
       <span class="token keyword">return</span> cameraService<span class="token punctuation">.</span><span class="token function">saveCamera</span><span class="token punctuation">(</span>cameraer<span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询全部" tabindex="-1"><a class="header-anchor" href="#查询全部" aria-hidden="true">#</a> 查询全部</h2>
<p>直接更改<code v-pre>CameraerController.java</code>文件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//查询所有数据</span>
<span class="token annotation punctuation">@GetMapping</span>
<span class="token keyword">public</span> <span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cameraService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除id" tabindex="-1"><a class="header-anchor" href="#删除id" aria-hidden="true">#</a> 删除ID</h2>
<p>直接更改<code v-pre>CameraerController.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//删除</span>
<span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> cameraService<span class="token punctuation">.</span><span class="token function">removeById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="实现分页查询" tabindex="-1"><a class="header-anchor" href="#实现分页查询" aria-hidden="true">#</a> 实现分页查询</h1>
<p>前提：<code v-pre>MybaitsConfig.java</code>文件配置分页插件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DbType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">MybatisPlusInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>inner<span class="token punctuation">.</span></span><span class="token class-name">PaginationInnerInterceptor</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.wyt.springbootwyt.mapper"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybaitsConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">innerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//注释下面的可能出现获取不到总数的效果</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//CameraerMapper.java</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BaseMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Cameraer</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CameraerMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//CameraerController.java</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>conditions<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">QueryWrapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span></span><span class="token class-name">IPage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span></span><span class="token class-name">Page</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Cameraer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">CameraService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DeleteMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestBody</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestParam</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/cameraer"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CameraerController</span><span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CameraService</span> cameraService<span class="token punctuation">;</span>


    <span class="token comment">//新增或修改</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Cameraer</span> cameraer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
       <span class="token keyword">return</span> cameraService<span class="token punctuation">.</span><span class="token function">saveCamera</span><span class="token punctuation">(</span>cameraer<span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
    <span class="token comment">//查询所有数据</span>
    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cameraService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//删除</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> cameraService<span class="token punctuation">.</span><span class="token function">removeById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 


    <span class="token comment">//分页查询:方法二</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/page"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> <span class="token function">findPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span>
                                <span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span>
                                <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span>
                                <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token class-name">String</span> nickname<span class="token punctuation">,</span>
                                <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token class-name">String</span> address<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cameraer</span><span class="token punctuation">></span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>nickname<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"nickname"</span><span class="token punctuation">,</span> nickname<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"address"</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cameraService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



<span class="token comment">/*  //分页查询 方法一
    // 访问 /cameraer/page
    //@RequestParam 接收 ？pageNum=1&amp;pageSize=10
    //查询总条数
    @GetMapping("/page")
    public Map&lt;String,Object> findPage(@RequestParam Integer pageNum,
                                       @RequestParam Integer pageSize
                                       ) {  //会将pageNumber和pageSize映射到这里来
        pageNum = (pageNum-1)*pageSize;
        List&lt;Cameraer> data = cameraerMapper.selectPage1(pageNum,pageSize, null);
        Integer total = cameraerMapper.selectTotal();
        Map&lt;String,Object> res = new HashMap&lt;>();
        res.put("data",data);
        res.put("total", total);
        return res;
    } */</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="代码生成器" tabindex="-1"><a class="header-anchor" href="#代码生成器" aria-hidden="true">#</a> 代码生成器</h1>
<p><strong>#前提：添加依赖  除此之外还有swgger依赖</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 代码生成器 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 模板引擎依赖--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.velocity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>velocity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--swagger--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springfox-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个Generate.java的文件，位置如下</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644117792349-e56ba995-f3c8-46f5-b0c5-ff3cd8161290.png" alt="img"></p>
<p><strong>SweggerConfig设置——SwaggerConfig.java（config文件夹下）</strong></p>
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>package com.wyt.springbootwyt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;


@Configuration
@EnableOpenApi
public class SwaggerConfig {


    /**
     * 创建API应用
     * apiInfo() 增加API相关信息
     * 通过select()函数返回一个ApiSelectorBuilder实例,用来控制哪些接口暴露给Swagger来展现，
     * 本例采用指定扫描的包路径来定义指定要建立API的目录。
     *
     * @return
     */
    @Bean
    public Docket restApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName(&quot;标准接口&quot;)
                .apiInfo(apiInfo(&quot;Spring Boot中使用Swagger2构建RESTful APIs&quot;, &quot;1.0&quot;))
                .useDefaultResponseMessages(true)
                .forCodeGeneration(false)
                .select()
                .apis(RequestHandlerSelectors.basePackage(&quot;com.qingge.springboot.controller&quot;))
                .paths(PathSelectors.any())
                .build();
    }

    /**
     * 创建该API的基本信息（这些基本信息会展现在文档页面中）
     * 访问地址：http://ip:port/swagger-ui.html
     *
     * @return
     */
    private ApiInfo apiInfo(String title, String version) {
        return new ApiInfoBuilder()
                .title(title)
                .description(&quot;更多请关注: https://blog.csdn.net/xqnode&quot;)
                .termsOfServiceUrl(&quot;https://blog.csdn.net/xqnode&quot;)
                .contact(new Contact(&quot;xqnode&quot;, &quot;https://blog.csdn.net/xqnode&quot;, &quot;xiaqingweb@163.com&quot;))
                .version(version)
                .build();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>#快速生成（代码复制）</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>generator<span class="token punctuation">.</span></span><span class="token class-name">FastAutoGenerator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>generator<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">OutputFile</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Generator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">FastAutoGenerator</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"password"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">globalConfig</span><span class="token punctuation">(</span>builder <span class="token operator">-></span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">author</span><span class="token punctuation">(</span><span class="token string">"baomidou"</span><span class="token punctuation">)</span> <span class="token comment">// 设置作者</span>
            <span class="token punctuation">.</span><span class="token function">enableSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 开启 swagger 模式</span>
            <span class="token punctuation">.</span><span class="token function">fileOverride</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 覆盖已生成文件</span>
            <span class="token punctuation">.</span><span class="token function">outputDir</span><span class="token punctuation">(</span><span class="token string">"D://"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指定输出目录</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">packageConfig</span><span class="token punctuation">(</span>builder <span class="token operator">-></span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">"com.baomidou.mybatisplus.samples.generator"</span><span class="token punctuation">)</span> <span class="token comment">// 设置父包名</span>
            <span class="token punctuation">.</span><span class="token function">moduleName</span><span class="token punctuation">(</span><span class="token string">"system"</span><span class="token punctuation">)</span> <span class="token comment">// 设置父包模块名</span>
            <span class="token punctuation">.</span><span class="token function">pathInfo</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonMap</span><span class="token punctuation">(</span><span class="token class-name">OutputFile</span><span class="token punctuation">.</span>mapperXml<span class="token punctuation">,</span> <span class="token string">"D://"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置mapperXml生成路径</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">strategyConfig</span><span class="token punctuation">(</span>builder <span class="token operator">-></span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">addInclude</span><span class="token punctuation">(</span><span class="token string">"t_simple"</span><span class="token punctuation">)</span> <span class="token comment">// 设置需要生成的表名</span>
            <span class="token punctuation">.</span><span class="token function">addTablePrefix</span><span class="token punctuation">(</span><span class="token string">"t_"</span><span class="token punctuation">,</span> <span class="token string">"c_"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置过滤表前缀</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">templateEngine</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FreemarkerTemplateEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 使用Freemarker引擎模板，默认的是Velocity引擎模板</span>
    <span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>#快速生成（更改代码）运行此文件就可以</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package com.wyt.springbootwyt.utils;

import java.util.Collections;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.OutputFile;

public class Generator {
    public static void main(String[] args){

        generate();

    }

    
    private static void generate(){

        //配置数据库
        FastAutoGenerator.create("jdbc:mysql://localhost:3308/test_wyt?serverTimezone=GMT%2b8", "root", "wyt557")

        //全局配置
        .globalConfig(builder -> {
            builder.author("王雨婷") // 设置作者
                   .enableSwagger() // 开启 swagger 模式
                   .fileOverride() // 覆盖已生成文件
                   .outputDir("D:\\Graduation project\\Graduationtest\\demo_11\\springbootwyt\\src\\main\\java"); // 指定输出目录
        })

        //包配置
        .packageConfig(builder -> {
            builder.parent("com.wyt.springbootwyt") // 设置父包名
                   .moduleName(null) // 设置父包模块名,设为null后，getmapping只会生成一个/而不是//
                   .pathInfo(Collections.singletonMap(OutputFile.mapperXml, "D:\\Graduation project\\Graduationtest\\demo_11\\springbootwyt\\src\\main\\resources\\mapper")); // 设置mapperXml生成路径
        })

        //策略配置
        .strategyConfig(builder -> {
            builder.entityBuilder().enableLombok();
            
            builder.controllerBuilder()
                   //.enableHyphenStyle()  // 开启驼峰转连字符
                   .enableRestStyle();  // 开启生成@RestController 控制器
            builder.addInclude("sys_test") // 设置需要生成的表名(数据库里的表名)
                   .addTablePrefix("t_", "c_"); // 设置过滤表前缀，忽略前面的某些字母
        })


        //注入配置——>模板配置
        .injectionConfig(builder -> {
           
           
            //默认的是Velocity引擎模板 

            builder.customFile(Collections.singletonMap("controller.java", "/com/wyt/springbootwyt/templates/controller.vm"));
        })



        //执行
        .execute();

    }
    
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>他会生成@controller，但是会出错，一定要改为@RestController</p>
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>package com.wyt.springbootwyt.controller;


import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.wyt.springbootwyt.entity.SysTest;
import com.wyt.springbootwyt.service.ISysTestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

/**
 * &lt;p&gt;
 * id 前端控制器
 * &lt;/p&gt;
 *
 * @author 王雨婷
 * @since 2022-02-06
 */
@RestController
@RequestMapping(&quot;/sysTest&quot;)
public class SysTestController {

    @Autowired
    private ISysTestService sysTestService;


    //新增或修改
    @PostMapping
    public boolean save(@RequestBody SysTest sysTest) {
        
       return sysTestService.saveOrUpdate(sysTest);   
    }
    //查询所有数据
    @GetMapping
    public List &lt;SysTest&gt; findAll() {
        return sysTestService.list();
    }
    //删除
    @DeleteMapping(&quot;/{id}&quot;)
    public boolean delete(@PathVariable Integer id){
       return sysTestService.removeById(id);
    } 


    //分页查询:方法二
    @GetMapping(&quot;/page&quot;)
    public IPage&lt;SysTest&gt; findPage(@RequestParam Integer pageNum,
                                @RequestParam Integer pageSize,
                                @RequestParam(defaultValue = &quot;&quot;) String name,
                                @RequestParam(defaultValue = &quot;&quot;) String nickname,
                                @RequestParam(defaultValue = &quot;&quot;) String address) {
        IPage&lt;SysTest&gt; page = new Page&lt;&gt;(pageNum, pageSize);
        QueryWrapper&lt;SysTest&gt; queryWrapper = new QueryWrapper&lt;&gt;();
        if (!&quot;&quot;.equals(name)) {
            queryWrapper.like(&quot;name&quot;, name);
        }
        if (!&quot;&quot;.equals(nickname)) {
            queryWrapper.like(&quot;nickname&quot;, nickname);
        }
        if (!&quot;&quot;.equals(address)) {
            queryWrapper.like(&quot;address&quot;, address);
        }
        return sysTestService.page(page, queryWrapper);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="自定义controller层" tabindex="-1"><a class="header-anchor" href="#自定义controller层" aria-hidden="true">#</a> 自定义controller层</h1>
<p>如果maven不显示出现background process terminated with code 1.</p>
<p>通过mvn help:effective-settings命令查看配置，看问题出现在什么地方，我的是因为maven中的Setting.xml中的&lt;!--&gt;注释出现标红，加空格解决好就出现了</p>
<p>它只能查看依赖不能看依赖下方的文件。</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644128087284-3a99130f-7851-468a-a74f-ec5714635917.png" alt="img"></p>
<p><strong>寻找controller.java.vm文件</strong></p>
<p>默认VScode的资源管理器中的显示只有工作区（项目文件目录），大纲（类的层级），maven（项目依赖）</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644129218569-cae4d583-775b-4335-a398-927801aed841.png" alt="img"></p>
<p>最后经过一系列的操作后发现，需要在资源管理器的空白处右击，选择Java Progects命令</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644129301758-d1adfae7-60f3-46eb-871c-d23243a0cd05.png" alt="img"></p>
<p>找到Maven Dependencies</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644129406098-bb31a053-8190-413b-9f64-b0bd11b5e671.png" alt="img"></p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644129466665-bc8f8242-d9ca-4d7a-9c03-0499afad6718.png" alt="img"></p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644129508486-8d4c7066-086a-416c-b1af-8aad880b24fa.png" alt="img"></p>
<p><strong>.vm文件是个啥</strong></p>
<p>基于java的<a href="https://so.csdn.net/so/search?q=velocity&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">velocity<ExternalLinkIcon/></a>模板引擎的一种页面控制文件，你可以用文本编译器打开，能够看到他只是一些类似html的语句和一种叫VLT的语句构成的。</p>
<p>*.vm 后缀的文件，是velocity的文件。velocity是基于java的一种页面模板引擎，支持#if #else#<a href="https://so.csdn.net/so/search?q=foreach&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">foreach<ExternalLinkIcon/></a>等写法的前台文件。$link.contextPath是该引擎支持的一种默认写法，可以取得应用程序执行根路径。</p>
<p>Velocity是一个基于java的模板引擎（template engine）。它允许任何人仅仅简单的使用模板语言（templatelanguage）来引用由java代码定义的对象。当Velocity应用于web开发时，界面设计人员可以和java程序开发人员同步开发一个遵循MVC架构的web站点，也就是说，页面设计人员可以只关注页面的显示效果，而由java程序开发人员关注业务逻辑编码。Velocity将java代码从web页面中分离出来，这样为web站点的长期维护提供了便利，同时也为我们在JSP和PHP之外又提供了一种可选的方案。Velocity的能力远不止web站点开发这个领域，例如，它可以从模板（template）产生SQL和PostScript、XML，它也可以被当作一个独立工具来产生源代码和报告，或者作为其他系统的集成组件使用。Velocity也可以为Turbineweb开发架构提供模板服务（templateservice）。Velocity+Turbine提供一个模板服务的方式允许一个web应用以一个真正的MVC模型进行开发。</p>
<p>这个插件能查看它的引擎模板，有颜色，不是全白的</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644129917312-88b8c486-20c8-41ed-a403-f6f54c2a1f61.png" alt="img"></p>
<p><strong>自修改controller.java.vm文件（VSＣＯＤＥ不能修改新建这个文件）</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> $<span class="token punctuation">{</span><span class="token class-name"><span class="token namespace">package<span class="token punctuation">.</span></span>Controller</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span></span><span class="token class-name">Page</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> $<span class="token operator">!</span><span class="token punctuation">{</span><span class="token class-name"><span class="token namespace">package<span class="token punctuation">.</span></span>Service</span><span class="token punctuation">}</span><span class="token punctuation">.</span>$<span class="token punctuation">{</span>table<span class="token punctuation">.</span>serviceName<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> $<span class="token punctuation">{</span><span class="token class-name"><span class="token namespace">package<span class="token punctuation">.</span></span>Entity</span><span class="token punctuation">}</span><span class="token punctuation">.</span>$<span class="token punctuation">{</span>entity<span class="token punctuation">}</span><span class="token punctuation">;</span>


#<span class="token keyword">if</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>restControllerStyle<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
#<span class="token keyword">else</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
#end
#<span class="token keyword">if</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>superControllerClassPackage<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> $<span class="token punctuation">{</span>superControllerClassPackage<span class="token punctuation">}</span><span class="token punctuation">;</span>
#end

<span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
 * $!<span class="token punctuation">{</span>table.comment<span class="token punctuation">}</span> 前端控制器
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
 *
 * <span class="token keyword">@author</span> $<span class="token punctuation">{</span>author<span class="token punctuation">}</span>
 * <span class="token keyword">@since</span> $<span class="token punctuation">{</span>date<span class="token punctuation">}</span>
 */</span>
#<span class="token keyword">if</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>restControllerStyle<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
#<span class="token keyword">else</span>
<span class="token annotation punctuation">@Controller</span>
#end
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"#if(${package.ModuleName})/${package.ModuleName}#end/#if(${controllerMappingHyphenStyle})${controllerMappingHyphen}#else${table.entityPath}#end"</span><span class="token punctuation">)</span>
#<span class="token keyword">if</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>kotlin<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>controllerName<span class="token punctuation">}</span>#<span class="token keyword">if</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>superControllerClass<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>superControllerClass<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>#end

#<span class="token keyword">else</span>
#<span class="token keyword">if</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>superControllerClass<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>controllerName<span class="token punctuation">}</span> <span class="token keyword">extends</span> $<span class="token punctuation">{</span>superControllerClass<span class="token punctuation">}</span> <span class="token punctuation">{</span>
#<span class="token keyword">else</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>controllerName<span class="token punctuation">}</span> <span class="token punctuation">{</span>
#end


    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>serviceName<span class="token punctuation">}</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token class-name">Service</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> $<span class="token punctuation">{</span>entity<span class="token punctuation">}</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token class-name">Service</span><span class="token punctuation">.</span><span class="token function">saveOrUpdate</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token class-name">Service</span><span class="token punctuation">.</span><span class="token function">removeById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/del/batch"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">deleteBatch</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> ids<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token class-name">Service</span><span class="token punctuation">.</span><span class="token function">removeByIds</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>$<span class="token punctuation">{</span>entity<span class="token punctuation">}</span><span class="token operator">></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token class-name">Service</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> $<span class="token punctuation">{</span>entity<span class="token punctuation">}</span> <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token class-name">Service</span><span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/page"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token operator">&lt;</span>$<span class="token punctuation">{</span>entity<span class="token punctuation">}</span><span class="token operator">></span> <span class="token function">findPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span>
                                <span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token punctuation">{</span>table<span class="token punctuation">.</span>entityPath<span class="token punctuation">}</span><span class="token class-name">Service</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

#end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注入到代码生成器中</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//注入配置——>模板配置</span>
        <span class="token punctuation">.</span><span class="token function">injectionConfig</span><span class="token punctuation">(</span>builder <span class="token operator">-></span> <span class="token punctuation">{</span>
           
           
            <span class="token comment">//使用自己定义的模板</span>

            builder<span class="token punctuation">.</span><span class="token function">customFile</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonMap</span><span class="token punctuation">(</span><span class="token string">"controller.java"</span><span class="token punctuation">,</span> <span class="token string">"/com/wyt/springbootwyt/templates/controller.vm"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>　
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>右击运行代码后：生成代码</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1644225873365-5aab8259-f4a4-4ada-ac97-f7efddd40c84.png" alt="img"></p>
<p>前端绑定后能够正常使用</p>
<p>findone和下面的不能连用</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/page"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysTest</span><span class="token punctuation">></span></span> <span class="token function">findPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span>
                                  <span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span>
                                  <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token class-name">String</span> iiid<span class="token punctuation">,</span>
                                  <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token class-name">String</span> xingming<span class="token punctuation">,</span>
                                  <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token class-name">String</span> address<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysTest</span><span class="token punctuation">></span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>iiid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"iiid"</span><span class="token punctuation">,</span> iiid<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>xingming<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"xingming"</span><span class="token punctuation">,</span> xingming<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"address"</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

            queryWrapper<span class="token punctuation">.</span><span class="token function">orderByDesc</span><span class="token punctuation">(</span><span class="token string">"iiid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> sysTestService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">,</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://mp.weixin.qq.com/s/n22mPSG4JlCxxf89mA3TtQ" target="_blank" rel="noopener noreferrer">MyBatis-plus 从入门到入土 ! 【4万字干货】 (qq.com)<ExternalLinkIcon/></a></p>
</div></template>


