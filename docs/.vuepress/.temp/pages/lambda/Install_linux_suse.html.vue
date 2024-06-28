<template><div><h1 id="opensuse-install" tabindex="-1"><a class="header-anchor" href="#opensuse-install"><span>opensuse install</span></a></h1>
<blockquote>
<p>personal way</p>
</blockquote>
<hr>
<h2 id="edit-repositories-and-control" tabindex="-1"><a class="header-anchor" href="#edit-repositories-and-control"><span>edit Repositories and Control</span></a></h2>
<p>add Repository</p>
<p>zypper addrepo -f https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/oss/ openSUSE-Oss
zypper addrepo -f https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/non-oss/ openSUSE-Non-Oss
zypper addrepo -f https://mirrors.aliyun.com/opensuse/update/leap/15.0/oss/ openSUSE-Update-Oss
zypper addrepo -f https://mirrors.aliyun.com/opensuse/update/leap/15.0/non-oss/ openSUSE-Update-Non-Oss
zypper addrepo -f https://mirrors.aliyun.com/packman/openSUSE_Leap_15.0/ Packman</p>
<p>edit boot loader time =&gt; 0
language
network for name</p>
<p>tweak for ctrl</p>
<h3 id="install-disk" tabindex="-1"><a class="header-anchor" href="#install-disk"><span>install disk</span></a></h3>
<p>ls -al /dev/disk/by-uuid
vi /etc/fstab</p>
<h3 id="softwares" tabindex="-1"><a class="header-anchor" href="#softwares"><span>softwares</span></a></h3>
<p>aptitude
gnome-tweak-tool
fcitx-googlepinyin
virtualbox
openssh-server
freerdp2-x11
git
nodejs
npm
nginx
testdist
tree
cmatrix</p>
<h2 id="zsh-and-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#zsh-and-oh-my-zsh"><span>zsh and 'oh my zsh'</span></a></h2>
<p>cat /etc/shells
install zsh
$ sh -c &quot;$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)&quot;
restart</p>
<p>anual</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh.git</span>
<span class="line"><span class="token function">cp</span> ~/.zshrc ~/.zshrc.orig</span>
<span class="line"><span class="token function">cp</span> ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc</span>
<span class="line">chsh <span class="token parameter variable">-s</span> /bin/zsh</span>
<span class="line"><span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fonts" tabindex="-1"><a class="header-anchor" href="#fonts"><span>fonts</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">sudo cp ./Documents/DocX_help/font/SourceCodePro-Semibold.otf /usr/share/fonts</span>
<span class="line">sudo fc-cache -fv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zshrc" tabindex="-1"><a class="header-anchor" href="#zshrc"><span>~/.zshrc</span></a></h2>
<p>export PATH=$HOME/bin:$HOME/Nightly:/usr/local/bin:$PATH</p>
<p>alias @create=&quot;bash create_activate&quot;
alias @act=&quot;source activate&quot;
alias @dct=&quot;deactivate&quot;
alias @venv=&quot;source /home/lambda/bin/AlphaBeta/.venv/Scripts/activate&quot;
alias @@@=&quot;cd /home/lambda/bin/AlphaBeta&quot;</p>
</div></template>


