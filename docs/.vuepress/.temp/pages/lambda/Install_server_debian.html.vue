<template><div><h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic"><span>basic</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">apt update</span>
<span class="line">apt install zsh</span>
<span class="line">apt install git</span>
<span class="line">apt install vim</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-user" tabindex="-1"><a class="header-anchor" href="#add-user"><span>add user</span></a></h2>
<p>adduser lambda
/etc/passwd</p>
<blockquote>
<p>/bin/bash &gt; /bin/zsh</p>
</blockquote>
<p>/etc/sudoer</p>
<blockquote>
<p>sudo:&gt;..... + lambda</p>
</blockquote>
<h2 id="zsh-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#zsh-oh-my-zsh"><span>zsh &amp; oh-my-zsh</span></a></h2>
<p><RouteLink to="/lambda/zsh.html">zsh.md</RouteLink></p>
<h2 id="vimrc" tabindex="-1"><a class="header-anchor" href="#vimrc"><span>vimrc</span></a></h2>
<p><RouteLink to="/lambda/vi.html">vim.md</RouteLink></p>
<h2 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>python</span></a></h2>
<p>download miniconda</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">./miniconda <span class="token operator">></span> /home/lambda/Python</span>
<span class="line"></span>
<span class="line">conda <span class="token function">install</span> poetry</span>
<span class="line">conda update <span class="token parameter variable">--all</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/lambda/Python/bin/poetry /home/lambda/bin/poetry</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>note: <code v-pre>poetry</code> is the unique interface</p>
<h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs"><span>nodejs</span></a></h2>
<p>install nvm &amp; nodejs</p>
</div></template>


