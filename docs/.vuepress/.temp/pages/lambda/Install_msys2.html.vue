<template><div><h1 id="配置一个msys2" tabindex="-1"><a class="header-anchor" href="#配置一个msys2"><span>配置一个msys2</span></a></h1>
<blockquote>
<p>My solution</p>
</blockquote>
<hr>
<h2 id="lite-context" tabindex="-1"><a class="header-anchor" href="#lite-context"><span>lite context</span></a></h2>
<ol start="0">
<li>mkdir /root</li>
<li>run msys2 , wait for the terminal prompt, close msys2</li>
<li>run msys2, install packages  <code v-pre>pacman -S vim zsh git p7zip rsync winpty</code></li>
<li>alias vim to vi <code v-pre>ln -s /bin/vim.exe /bin/vi</code></li>
<li>edit nsswitch.conf, change home_path to /root</li>
<li>edit nsswitch.conf, change shell to zsh (db_shell: /usr/bin/zsh)</li>
<li>install on-my-zsh, <code v-pre>sh install.sh</code></li>
<li>install vimrc</li>
<li>configure zshrc</li>
<li>activate poetry</li>
<li>cp font to folder</li>
</ol>
<h2 id="pacman-source" tabindex="-1"><a class="header-anchor" href="#pacman-source"><span>pacman_source</span></a></h2>
<p>configure source (deprecated)</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">/etc/pacman.d/mirrorlist.mingw32</span>
<span class="line">Server <span class="token operator">=</span> http://mirrors.ustc.edu.cn/msys2/mingw/i686</span>
<span class="line"></span>
<span class="line">/etc/pacman.d/mirrorlist.mingw64</span>
<span class="line">Server <span class="token operator">=</span> http://mirrors.ustc.edu.cn/msys2/mingw/x86_64</span>
<span class="line"></span>
<span class="line">/etc/pacman.d/mirrorlist.msys</span>
<span class="line">Server <span class="token operator">=</span> http://mirrors.ustc.edu.cn/msys2/msys/<span class="token variable">$arch</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config file link:</p>
<p><a href="/delta/msys64_build/root/src/mirrorlist.mingw32">mirrorlist.mingw32</a></p>
<p><a href="/delta/msys64_build/root/src/mirrorlist.mingw64">mirrorlist.mingw64</a></p>
<p><a href="/delta/msys64_build/root/src/mirrorlist.msys">mirrorlist.msys</a></p>
<h2 id="configure-path" tabindex="-1"><a class="header-anchor" href="#configure-path"><span>configure PATH</span></a></h2>
<p>mkdir /root</p>
<p>configure nsswitch.conf</p>
<p>change db_home to /root</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># Begin /etc/nsswitch.conf</span></span>
<span class="line"></span>
<span class="line">passwd: files db</span>
<span class="line">group: files db</span>
<span class="line"></span>
<span class="line">db_enum: cache <span class="token builtin class-name">builtin</span></span>
<span class="line"></span>
<span class="line">db_home: /root</span>
<span class="line">db_shell: /usr/bin/bash</span>
<span class="line">db_gecos: cygwin desc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># End /etc/nsswitch.conf</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-packages" tabindex="-1"><a class="header-anchor" href="#install-packages"><span>Install packages</span></a></h2>
<p>pacman -S vim       (ln -s /bin/vim.exe /bin/vi)
pacman -S zsh
pacman -S git
pacman -S p7zip
pacman -S rsync
pacman -S winpty</p>
<h2 id="install-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#install-oh-my-zsh"><span>install oh-my-zsh</span></a></h2>
<p>At first, make sure db_home is /root</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">with <span class="token function">curl</span></span>
<span class="line">    <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class="token variable">)</span></span>"</span></span>
<span class="line">or <span class="token function">wget</span></span>
<span class="line">    <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh <span class="token parameter variable">-O</span> -<span class="token variable">)</span></span>"</span></span>
<span class="line">or manual</span>
<span class="line">    <span class="token function">git</span> clone https://github.com/ohmyzsh/ohmyzsh.git ~/tmp</span>
<span class="line">    <span class="token function">sh</span> ~/tmp/tools/install.sh</span>
<span class="line">or mine</span>
<span class="line">    copy github.com/ohmyzsh/ohmyzsh.git:tools/install.sh to /root/install.sh</span>
<span class="line">    <span class="token function">sh</span> /root/install.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>update configure PATH nsswitch.conf</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">db_shell: /usr/bin/zsh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="install-vim" tabindex="-1"><a class="header-anchor" href="#install-vim"><span>Install VIM</span></a></h2>
<p>copy .vimrc to ~/.vimrc
copy .vim/autoload to ~/.vim/  (Enable autoload)</p>
<p><a href="/delta/vim/.vim/autoload">.vim/autoload</a>
<a href="/delta/vim/.vimrc">.vimrc</a></p>
<h2 id="若需要打包" tabindex="-1"><a class="header-anchor" href="#若需要打包"><span>若需要打包</span></a></h2>
<p>升级系统
pacman -Syu</p>
<p>删除所有缓存
pacman -Scc</p>
<h2 id="plus-zshrc" tabindex="-1"><a class="header-anchor" href="#plus-zshrc"><span>Plus zshrc</span></a></h2>
<p>copy .zshrc.win to ~/.zshrc
<a href="/delta/vim/.vimrc">.zshrc.win</a></p>
<h2 id="readme-md-for-msys2" tabindex="-1"><a class="header-anchor" href="#readme-md-for-msys2"><span>README.md  for  Msys2</span></a></h2>
<p>This is a custom version of msys2</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">HOME PATH   is /root</span>
<span class="line">source      is mirrors.ustc.edu.cn</span>
<span class="line">manager     is pacman</span>
<span class="line">vim         is built with vim-plug</span>
<span class="line">Shell       is ZSH with on-my-zsh</span>
<span class="line">Font        is SourceCodePro-Semibold</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install SourceCodePro-Semibold.otf at first.</p>
<p>Python &amp; nodejs can be append to .zshrc:</p>
</div></template>


