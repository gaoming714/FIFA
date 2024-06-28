<template><div><h1 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置"><span>git配置</span></a></h1>
<blockquote>
<p>here is git configure for Linux or windows</p>
</blockquote>
<hr>
<h2 id="_1-configure-name" tabindex="-1"><a class="header-anchor" href="#_1-configure-name"><span>1.configure name</span></a></h2>
<h3 id="_1-1-个人用户名" tabindex="-1"><a class="header-anchor" href="#_1-1-个人用户名"><span>1.1 个人用户名</span></a></h3>
<p>Linux place  <code v-pre>~/.gitconfig</code>
windows place  <code v-pre>~/.gitconfig</code></p>
<pre><code>git config --global user.name &quot;username&quot;
git config --global user.email &quot;username@gmail.com&quot;
</code></pre>
<h3 id="_1-2-系统用户名" tabindex="-1"><a class="header-anchor" href="#_1-2-系统用户名"><span>1.2 系统用户名</span></a></h3>
<p>the act place  <code v-pre>/etc/gitconfig</code>
the act place  <code v-pre>/mingw64/etc/gitconfig</code></p>
<pre><code>git config --system user.name &quot;username&quot;
git config --system user.email &quot;username@gmail.com&quot;
</code></pre>
<h2 id="_2-configure-rsa" tabindex="-1"><a class="header-anchor" href="#_2-configure-rsa"><span>2. configure RSA</span></a></h2>
<h3 id="_2-1-git-ssh" tabindex="-1"><a class="header-anchor" href="#_2-1-git-ssh"><span>2.1 git-ssh</span></a></h3>
<p>是否存在旧的密钥对,用已有的，或者删除</p>
<pre><code>ls -al ~/.ssh  #check
</code></pre>
<h3 id="_2-2-生成密钥对" tabindex="-1"><a class="header-anchor" href="#_2-2-生成密钥对"><span>2.2 生成密钥对</span></a></h3>
<p>默认路径~/.ssh/id_rsa和id_rsa.pub</p>
<p><code v-pre>ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;</code></p>
<p>规定输出文件</p>
<p><code v-pre>ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot; -f ./key</code></p>
<h3 id="_2-3-登录github-添加rsa-pub" tabindex="-1"><a class="header-anchor" href="#_2-3-登录github-添加rsa-pub"><span>2.3 登录Github, 添加rsa.pub</span></a></h3>
<p>添加id_rsa.pub</p>
<h3 id="_2-4-系统添加-rsa-到-ssh" tabindex="-1"><a class="header-anchor" href="#_2-4-系统添加-rsa-到-ssh"><span>2.4 系统添加 rsa 到 ssh</span></a></h3>
<p>ssh_config 指定 id_rsa ( ~/.ssh/config )</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">Host github.com</span>
<span class="line">    HostName github.com</span>
<span class="line">    IdentityFile /<span class="token punctuation">..</span>./_rsa</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5测试" tabindex="-1"><a class="header-anchor" href="#_2-5测试"><span>2.5测试</span></a></h3>
<p>返回 下文即为正确</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com</span>
<span class="line"><span class="token operator">></span> Hi <span class="token string">"username!"</span> You've successfully authenticated, but GitHub does not provide shell access.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>可能需要更改id_rsa的权限</p>
<h2 id="_3-多账号设置-的方法" tabindex="-1"><a class="header-anchor" href="#_3-多账号设置-的方法"><span>3. 多账号设置 的方法</span></a></h2>
<p>这样你就已经正确的生成好了两个密钥，假设是：github_a和github_b分别对应的是你的账户aaaaaa和账户bbbbbb</p>
<p>修改config文件</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">vim</span> ~/.ssh/config        个人</span>
<span class="line"><span class="token function">vim</span> /etc/ssh/ssh_config  全局</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加如下代码</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">Host aaaaaa.github.com</span>
<span class="line">    HostName github.com</span>
<span class="line">    User <span class="token function">git</span></span>
<span class="line">    IdentityFile ~/.ssh/github_a</span>
<span class="line">Host bbbbbb.github.com</span>
<span class="line">    HostName github.com</span>
<span class="line">    User <span class="token function">git</span></span>
<span class="line">    IdentityFile ~/.ssh/github_b</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改ssh URL(maybe)</p>
<pre><code>例如原来的url是：git@github.com:aaaaaa/xxxxxx.git
需要改成：git@aaaaaa.github.com:aaaaaa/xxxxxx.git
bbbbbb账号的修改也是如此
</code></pre>
<h2 id="_4-windows-init-处理字符为lf" tabindex="-1"><a class="header-anchor" href="#_4-windows-init-处理字符为lf"><span>4. windows init 处理字符为LF</span></a></h2>
<p>git config --global core.autocrlf false</p>
<p>~/.gitconfig</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token punctuation">[</span>core<span class="token punctuation">]</span></span>
<span class="line">    editor <span class="token operator">=</span> <span class="token function">vim</span></span>
<span class="line">    autocrlf <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


