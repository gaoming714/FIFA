<template><div><h1 id="git-server" tabindex="-1"><a class="header-anchor" href="#git-server"><span>Git server</span></a></h1>
<blockquote>
<p>build a git server
the easy to build a server for guys with same permission on Linux
on Linux</p>
</blockquote>
<h2 id="install-git-configure" tabindex="-1"><a class="header-anchor" href="#install-git-configure"><span>install git &amp; configure</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">	<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span></span>
<span class="line">	yum <span class="token function">install</span> <span class="token function">git</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>add user name git, it is only used when needing RSA</p>
<blockquote>
<p>Here I just used this user as a folder  <code v-pre>/home/git/</code></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">useradd</span> <span class="token parameter variable">-d</span> /home/git <span class="token function">git</span></span>
<span class="line"><span class="token function">passwd</span> <span class="token function">git</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>edit /etc/passwd</p>
<blockquote>
<p>git❌1000:1000::/home/git:/usr/bin/git-shell</p>
</blockquote>
<h2 id="initialized-empty-git-repository" tabindex="-1"><a class="header-anchor" href="#initialized-empty-git-repository"><span>Initialized empty Git repository</span></a></h2>
<blockquote>
<p>it is a repository that doesn’t contain a working directory (name.git)
the --bare means that it is only the .git part without working directory.</p>
</blockquote>
<p>Initialized empty Git repository in /home/git/name.git/</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> init <span class="token parameter variable">--bare</span> name.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>or If there exists a repositoty
make a new bare repository and scp to server</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone <span class="token parameter variable">--bare</span> my_project my_project.git</span>
<span class="line"><span class="token function">scp</span> <span class="token parameter variable">-r</span> my_project.git user@git.example.com:/home/git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="anyone-and-clone-through-ssh" tabindex="-1"><a class="header-anchor" href="#anyone-and-clone-through-ssh"><span>anyone and clone through SSH</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone root@domain:/home/git/name.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


