<template><div><h1 id="一、jwt简介" tabindex="-1"><a class="header-anchor" href="#一、jwt简介" aria-hidden="true">#</a> 一、JWT简介</h1>
<p>基于 Token 的身份验证：JSON Web Token(JWT)</p>
<p>​		Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).定义了一种简洁的，自包含的方法用于通信双方之间以JSON对象的形式安全的传递信息。因为数字签名的存在，这些信息是可信的，JWT可以使用HMAC算法或者是RSA的公私秘钥对进行签名</p>
<p><strong>1、传统与JWT验证的区别</strong></p>
<p>传统身份验证：</p>
<p>​		HTTP 是一种没有状态的协议，也就是它并不知道是谁是访问应用。这里我们把用户看成是客户端，客户端使用用户名还有密码通过了身份验证，不过下回这个客户端再发送请求时候，还得再验证一下。     解决的方法就是，当用户请求登录的时候，如果没有问题，我们在服务端生成一条记录，这个记录里可以说明一下登录的用户是谁，然后把这条记录的 ID 号发送给客户端，客户端收到以后把这个 ID 号存储在 Cookie 里，下次这个用户再向服务端发送请求的时候，可以带着这个 Cookie ，这样服务端会验证一个这个 Cookie 里的信息，看看能不能在服务端这里找到对应的记录，如果可以，说明用户已经通过了身份验证，就把用户请求的数据返回给客户端。     上面说的就是 Session，我们需要在服务端存储为登录的用户生成的 Session ，这些 Session 可能会存储在内存，磁盘，或者数据库里。我们可能需要在服务端定期的去清理过期的 Session 。</p>
<p>JWT的身份验证：</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1649577816129-71916022-4337-4468-8675-8e4b996a6657.png" alt="img"></p>
<p>使用基于 Token 的身份验证方法，在服务端不需要存储用户的登录记录。流程如下：
1、客户端使用用户名跟密码请求登录
2、 服务端收到请求，去验证用户名与密码
3、验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
4、客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里
5、客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
6、服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据</p>
<p>OR</p>
<p>1.使用JWT创建token，设置有效时间，返回数据等，然后将token返回到前端调用处</p>
<p>2.前端登录处调用后端接口然后接收到token后，将token存储到本地的浏览器中</p>
<p>3.每次前端需要访问数据的时候，发送请求的时候将token存入请求头中</p>
<p>4.后端通过在拦截器获取请求头中的token，做验证，查看用户是否登录</p>
<p>5.登录，放行，token验证不通过（未登录或者token过期），返回false，前端页面跳转到登录页面并且删除原有的token</p>
<p><strong>2、JWT的token组成</strong></p>
<p>实施 Token 验证的方法挺多的，还有一些标准方法，比如 JWT，读作：jot ，表示：JSON Web Tokens 。JWT 标准的 Token 有三个部分：</p>
<ul>
<li>header（头部）</li>
<li>payload（数据）</li>
<li>signature（签名）</li>
</ul>
<p><strong>头部：</strong></p>
<p>每个 JWT token 里面都有一个 header，也就是头部数据。里面包含了使用的算法，这个 JWT 是不是带签名的或者加密的。主要就是说明一下怎么处理这个 JWT token 。</p>
<p>头部里包含的东西可能会根据 JWT 的类型有所变化，比如一个加密的 JWT 里面要包含使用的加密的算法。唯一在头部里面要包含的是 <em>alg</em> 这个属性，如果是加密的 JWT，这个属性的值就是使用的签名或者解密用的算法。如果是未加密的 JWT，这个属性的值要设置成 <em>none</em>。</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1649397869591-80fcc9c9-ebea-4188-9186-fef9342e2556.png" alt="img"></p>
<p>意思是这个 JWT 用的算法是 HS256。上面的内容得用 <a href="https://tools.ietf.org/html/rfc4648#section-5" target="_blank" rel="noopener noreferrer">base64url<ExternalLinkIcon/></a> 的形式编码一下，所以就变成这样：</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1649397898871-31c58c8e-4d9a-4e6c-8ad0-1a65bd088ab0.png" alt="img"></p>
<p><strong>Payload：</strong></p>
<p>Payload 里面是 Token 的具体内容，这些内容里面有一些是标准字段，你也可以添加其它需要的内容。下面是标准字段：</p>
<p>iss：Issuer，发行者
sub：Subject，主题
aud：Audience，观众
exp：Expiration time，过期时间
nbf：Not before
iat：Issued at，发行时间
jti：JWT ID
比如下面这个 Payload ，用到了 iss 发行人，还有 exp 过期时间这两个标准字段。另外还有两个自定义的字段，一个是 name ，还有一个是 admin 。</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1649397947648-8b80d1f5-9890-4cc7-8bfa-7aaae4b31f41.png" alt="img"></p>
<p>使用 base64url 编码以后就变成了这个样子：</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1649397969189-6f62d2a4-b0d0-4976-8c64-01f32fb8606f.png" alt="img"></p>
<p><strong>Signature：</strong></p>
<p>JWT 的最后一部分是 Signature ，这部分内容有三个部分，先是用 Base64 编码的 header.payload ，再用加密算法加密一下，加密的时候要放进去一个 Secret ，这个相当于是一个密码，这个密码秘密地存储在服务端。</p>
<p>header
payload
secret</p>
<p>最后这个在服务端生成并且要发送给客户端的 Token 看起来像这样：
<img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1649398003042-c09dcd84-4e7b-4b6e-86d2-4f86b769139b.png" alt="img"></p>
<p><strong>3、签发和验证JWT的功能</strong></p>
<p>在应用里实施使用基于 JWT 这种 Token 的身份验证方法，你可以先去找一个签发与验证 JWT 的功能包。无论你的后端应用使用的是什么样的程序语言，系统，或者框架，你应该都可以找到提供类似功能的包。
下面我们在一个 Node.js 项目里，用最简单的方式来演示一下签发还有验证 JWT 的方法。练习有个视频版本，你可以参考《 <a href="https://ninghao.net/course/5018" target="_blank" rel="noopener noreferrer">JWT：JSON Web Token<ExternalLinkIcon/></a> 》这个免费的视频课程。</p>
<p><strong>项目代码</strong>：https://github.com/ninghao/jwt-demo</p>
<h2 id="_4-token使用的优点及注意事项" tabindex="-1"><a class="header-anchor" href="#_4-token使用的优点及注意事项" aria-hidden="true">#</a> 4.Token使用的优点及注意事项</h2>
<p>1.和session相比，token在分布式的应用下更有优势，因为token存储在浏览器，session在服务器存储，在分布式项目中session并不能跨域取值</p>
<p>2.和cookie相比同样，cookie不能跨域</p>
<p>3.和session相比因为session存在服务器占用服务器的内存，而token存用户的浏览器本地</p>
<p>4.token无状态，session有状态</p>
<p><strong>1.简洁(Compact): 可以通过<strong><strong>URL</strong></strong>，<strong><strong>POST</strong></strong>参数或者在<strong><strong>HTTP header</strong></strong>发送，因为数据量小，传输速度也很快</strong>
<strong>2.自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库</strong>
<strong>3.因为<strong><strong>Token</strong></strong>是以<strong><strong>JSON</strong></strong>加密的形式保存在客户端的，所以<strong><strong>JWT</strong></strong>是跨语言的，原则上任何web形式都支持。</strong>
<strong>4.不需要在服务端保存会话信息，特别适用于分布式微服务。</strong></p>
<p>#注意事项</p>
<p>在使用token返回用户的数据的时候要注意不要把盐或者用户的重要信息写在payload或者header中，因为盐暴露别人就能解开你的token，而别人可以截取你的token从而获取里面的重要信息。</p>
<p><strong>5、JWT的主要应用场景</strong></p>
<p>身份认证在这种场景下，一旦用户完成了登陆，在接下来的每个请求中包含JWT，可以用来**验证用户身份以及对路由，服务和资源的访问权限进行验证。<strong>由于它的开销非常小，可以轻松的在不同域名的系统中传递，所有目前在</strong>单点登录（SSO）**中比较广泛的使用了该技术。 信息交换在通信的双方之间使用JWT对数据进行编码是一种非常安全的方式，<strong>由于它的信息是经过签名的，可以确保发送者发送的信息是没有经过伪造的。</strong></p>
<h1 id="二、jwt使用" tabindex="-1"><a class="header-anchor" href="#二、jwt使用" aria-hidden="true">#</a> 二、JWT使用</h1>
<h2 id="_1、引入依赖" tabindex="-1"><a class="header-anchor" href="#_1、引入依赖" aria-hidden="true">#</a> 1、引入依赖</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- JWT依赖 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.auth0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>java-jwt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.10.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、编写生成token的工具类" tabindex="-1"><a class="header-anchor" href="#_2、编写生成token的工具类" aria-hidden="true">#</a> 2、编写生成token的工具类</h2>
<p>在utils文件夹下新建TokenUtils.java文件，编写生成token的代码</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>date<span class="token punctuation">.</span></span><span class="token class-name">DateUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span></span><span class="token class-name">JWT</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>algorithms<span class="token punctuation">.</span></span><span class="token class-name">Algorithm</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TokenUtils</span> <span class="token punctuation">{</span>

    <span class="token comment">//生成token</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">geTokenwyt</span><span class="token punctuation">(</span><span class="token class-name">String</span> iiid<span class="token punctuation">,</span><span class="token class-name">String</span> sign<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JWT</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withAudience</span><span class="token punctuation">(</span>iiid<span class="token punctuation">)</span> <span class="token comment">// 将 user id 保存到 token 里面,作为载荷</span>
        <span class="token punctuation">.</span><span class="token function">withExpiresAt</span><span class="token punctuation">(</span><span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">offsetHour</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2小时后token过期</span>
        <span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token class-name">Algorithm</span><span class="token punctuation">.</span><span class="token function">HMAC256</span><span class="token punctuation">(</span>sign<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 以 password 作为 token 的密钥        </span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Algorithm.HMAC256()<strong><strong>:使用</strong></strong>HS256<strong><strong>生成</strong></strong>token</strong>**,密钥则是我自己定义了一个32位的字符串，唯一密钥的话可以保存在服务端。**
**withAudience()**<strong>存入需要保存在token的信息，这里我把用户对象的信息存入token中</strong></p>
<h2 id="_3、设置token" tabindex="-1"><a class="header-anchor" href="#_3、设置token" aria-hidden="true">#</a> 3、设置token</h2>
<p>在dto(实体类)/登录的serviceImpl中设置token</p>
<p>private string token；</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1645095523037-0beb4226-6467-4782-a5db-df15b6f11a6e.png" alt="img"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//登录后能够获取个人信息</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">SysTestdto</span> <span class="token function">loginwyt</span><span class="token punctuation">(</span><span class="token class-name">SysTestdto</span> sysTestdto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SysTest</span> one <span class="token operator">=</span> <span class="token function">getSysTestInfowyt</span><span class="token punctuation">(</span>sysTestdto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>one <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BeanUtil</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>one<span class="token punctuation">,</span> sysTestdto<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//hutool工具复制属性,获取登录用户的信息</span>
        <span class="token comment">//设置token</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token class-name">TokenUtils</span><span class="token punctuation">.</span><span class="token function">geTokenwyt</span><span class="token punctuation">(</span>one<span class="token punctuation">.</span><span class="token function">getIiid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>one<span class="token punctuation">.</span><span class="token function">getMima</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sysTestdto<span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sysTestdto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">CODE_600</span><span class="token punctuation">,</span> <span class="token string">"用户名或密码错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1645095627298-7f76a07c-a3e9-48da-ae6d-847b1572cb87.png" alt="img"></p>
<p>测试后：生成三段不知名字符串</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1645095240146-1186d1ac-44c8-49db-b256-4b112905f0be.png" alt="img"></p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1645095861623-cfb21ef4-98d5-4037-8641-a5842fa235f4.png" alt="img"></p>
<h2 id="_4、改造request-js的拦截信息" tabindex="-1"><a class="header-anchor" href="#_4、改造request-js的拦截信息" aria-hidden="true">#</a> 4、改造request.js的拦截信息</h2>
<p>拦截器是先拦截所有的信息，然后放行编辑好的接口</p>
<p>先获取到存储的个人信息，判断这个信息是否存在，使用token</p>
<p>在前端请求加一个请求头给后端，后端拿到token后进行校验是否合法，再返回给前端相应的信息。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// request 拦截器</span>
<span class="token comment">// 可以自请求发送前对请求做一些处理</span>
<span class="token comment">// 比如统一加token，对请求参数统一加密</span>
request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'Content-Type'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'application/json;charset=utf-8'</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> admin <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>admin<span class="token punctuation">)</span><span class="token punctuation">{</span>

        config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'token'</span><span class="token punctuation">]</span> <span class="token operator">=</span> admin<span class="token punctuation">.</span>token<span class="token punctuation">;</span>  <span class="token comment">// 设置请求头</span>

    <span class="token punctuation">}</span>
  
  
    <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1645497186556-75c2e1d0-6fe0-476b-80cb-03455a4a83ec.png" alt="img"></p>
<p>检测：</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/25978174/1645497329742-82a677a1-c43b-4299-b2bf-e1f47de0da64.png" alt="img"></p>
<h2 id="_5、设置拦截器的相关信息" tabindex="-1"><a class="header-anchor" href="#_5、设置拦截器的相关信息" aria-hidden="true">#</a> 5、设置拦截器的相关信息</h2>
<p>实现一个拦截器就需要实现HandlerInterceptor接口</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>common<span class="token punctuation">.</span>interceptor</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StrUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span></span><span class="token class-name">JWT</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span></span><span class="token class-name">JWTVerifier</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>algorithms<span class="token punctuation">.</span></span><span class="token class-name">Algorithm</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span></span><span class="token class-name">JWTDecodeException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span></span><span class="token class-name">JWTVerificationException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span></span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token class-name">ServiceException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Constants</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Loginuserwyt</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">SysTest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ILoginuserwytService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wyt<span class="token punctuation">.</span>springbootwyt<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ISysTestService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpMethod</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpStatus</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>method<span class="token punctuation">.</span></span><span class="token class-name">HandlerMethod</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">HandlerInterceptor</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ISysTestService</span> sysTestService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ILoginuserwytService</span> loginuserwytService<span class="token punctuation">;</span>



    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//取出请求头中的token</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"token: "</span> <span class="token operator">+</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">UNAUTHORIZED</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token comment">//放行OPTIONS请求</span>
        <span class="token class-name">String</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"OPTIONS"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token comment">// 如果不是映射到方法直接通过</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>handler <span class="token keyword">instanceof</span> <span class="token class-name">HandlerMethod</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token comment">// 执行认证</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">CODE_401</span><span class="token punctuation">,</span> <span class="token string">"未获取到token，请重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token comment">// 获取 token 中的 user id</span>
        <span class="token class-name">String</span> iiid<span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> useridwyt<span class="token punctuation">;</span> 
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            iiid <span class="token operator">=</span> <span class="token constant">JWT</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAudience</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            useridwyt <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token constant">JWT</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAudience</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JWTDecodeException</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">CODE_401</span><span class="token punctuation">,</span> <span class="token string">"token验证失败，请重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token comment">// 根据token中的userid查询数据库</span>
        <span class="token class-name">SysTest</span> admin <span class="token operator">=</span> sysTestService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>iiid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Loginuserwyt</span> user <span class="token operator">=</span> loginuserwytService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>useridwyt<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>admin <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">CODE_401</span><span class="token punctuation">,</span> <span class="token string">"用户不存在，请重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token comment">// 用户密码加签验证 token</span>
        <span class="token class-name">JWTVerifier</span> jwtVerifier <span class="token operator">=</span> <span class="token constant">JWT</span><span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token class-name">Algorithm</span><span class="token punctuation">.</span><span class="token function">HMAC256</span><span class="token punctuation">(</span>admin<span class="token punctuation">.</span><span class="token function">getMima</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JWTVerifier</span> jwtVerifier1 <span class="token operator">=</span> <span class="token constant">JWT</span><span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token class-name">Algorithm</span><span class="token punctuation">.</span><span class="token function">HMAC256</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getPasswyt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            jwtVerifier<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 验证token</span>
            jwtVerifier1<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JWTVerificationException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">CODE_401</span><span class="token punctuation">,</span> <span class="token string">"token验证失败，请重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>   
    

        
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、设置拦截器的配置" tabindex="-1"><a class="header-anchor" href="#_6、设置拦截器的配置" aria-hidden="true">#</a> 6、设置拦截器的配置</h2>
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>package com.wyt.springbootwyt.config;


import com.wyt.springbootwyt.common.interceptor.JwtInterceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor())
                .addPathPatterns(&quot;/**&quot;)  // 拦截所有请求，通过判断token是否合法来决定是否需要登录
                //token合法后可以放行这些接口来进行使用
                .excludePathPatterns(&quot;ws://localhost:8001/**&quot;)
                .excludePathPatterns(&quot;/loginuserwyt/login&quot;, &quot;/loginuserwyt/zhuce&quot;,
                                    &quot;/sysTest/login&quot;,&quot;/managefiles/**&quot;,&quot;/alipay/**&quot;,&quot;/email/**&quot;,
                                    &quot;/**/export&quot;, &quot;/**/import&quot;,&quot;/**/page&quot;,&quot;/**/{id}&quot;,&quot;/**/del/batch&quot;,&quot;/**/saveorupdate&quot;,
                                    &quot;/morder/**&quot;
                                    
                                     );
    }

    @Bean
    public JwtInterceptor jwtInterceptor() {
        return new JwtInterceptor();
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


