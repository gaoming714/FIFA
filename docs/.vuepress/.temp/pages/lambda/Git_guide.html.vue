<template><div><h1 id="git-guild" tabindex="-1"><a class="header-anchor" href="#git-guild"><span>Git Guild</span></a></h1>
<blockquote>
<p>for local git project</p>
</blockquote>
<hr>
<h2 id="create-bare-repo" tabindex="-1"><a class="header-anchor" href="#create-bare-repo"><span>create bare repo</span></a></h2>
<h3 id="create" tabindex="-1"><a class="header-anchor" href="#create"><span>create</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> init <span class="token parameter variable">--bare</span> name.git </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="change-user" tabindex="-1"><a class="header-anchor" href="#change-user"><span>change user</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">chown</span> <span class="token function">git</span> <span class="token parameter variable">-R</span> name.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="clone-repo" tabindex="-1"><a class="header-anchor" href="#clone-repo"><span>clone repo</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone git@domain:/home/git/name.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="create-initial-commit" tabindex="-1"><a class="header-anchor" href="#create-initial-commit"><span>create Initial commit</span></a></h2>
<h3 id="touch-new-readme-md" tabindex="-1"><a class="header-anchor" href="#touch-new-readme-md"><span>touch new README.md</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token builtin class-name">echo</span> name <span class="token operator">>></span> README.md</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> README.md</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">"Initial commit"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push-the-current-branch-and-set-the-remote-as-upstream" tabindex="-1"><a class="header-anchor" href="#push-the-current-branch-and-set-the-remote-as-upstream"><span>push the current branch and set the remote as upstream</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="develop" tabindex="-1"><a class="header-anchor" href="#develop"><span>develop</span></a></h2>
<h3 id="create-dev" tabindex="-1"><a class="header-anchor" href="#create-dev"><span>create dev</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> branch dev</span>
<span class="line"><span class="token function">git</span> checkout dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push-dev-with-upstream" tabindex="-1"><a class="header-anchor" href="#push-dev-with-upstream"><span>push dev with upstream</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> push --set-upstream origin dev</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clone-dev" tabindex="-1"><a class="header-anchor" href="#clone-dev"><span>clone dev</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> fetch</span>
<span class="line"><span class="token function">git</span> checkout dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-feature-0xa1" tabindex="-1"><a class="header-anchor" href="#create-feature-0xa1"><span>create feature/0xA1</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> checkout dev</span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/0xA1</span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/0xA1 dev</span>
<span class="line"><span class="token function">git</span> push --set-upstream origin feature/0xA1</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin feature/0xA1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="merge-feature-0xa1-then-delete" tabindex="-1"><a class="header-anchor" href="#merge-feature-0xa1-then-delete"><span>merge feature/0xA1 then delete</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> checkout dev</span>
<span class="line"><span class="token function">git</span> merge --no-ff feature/0xA1</span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> feature/0xA1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove-feature-on-remote" tabindex="-1"><a class="header-anchor" href="#remove-feature-on-remote"><span>remove feature on remote</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> serverfix</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="remove-feature-useless" tabindex="-1"><a class="header-anchor" href="#remove-feature-useless"><span>remove feature useless</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> fetch <span class="token parameter variable">-p</span></span>
<span class="line"><span class="token function">git</span> remote prune origin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="revert-revert-on-merget-m-1-means-mainline-is-1-dev" tabindex="-1"><a class="header-anchor" href="#revert-revert-on-merget-m-1-means-mainline-is-1-dev"><span>revert &amp; revert on merget . &quot;-m 1&quot; means mainline is 1(dev)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> revert <span class="token operator">&lt;</span>commit<span class="token operator">></span></span>
<span class="line"><span class="token function">git</span> revert <span class="token operator">&lt;</span>commit<span class="token operator">></span> <span class="token parameter variable">-m</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag"><span>tag</span></a></h2>
<h3 id="local-share" tabindex="-1"><a class="header-anchor" href="#local-share"><span>local &amp; share</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> tag tagname <span class="token operator">&lt;</span>commit<span class="token operator">></span></span>
<span class="line"><span class="token function">git</span> push <span class="token operator">&lt;</span>origin<span class="token operator">></span> <span class="token operator">&lt;</span>tagname<span class="token operator">></span></span>
<span class="line"><span class="token function">git</span> push <span class="token operator">&lt;</span>origin<span class="token operator">></span> <span class="token parameter variable">--tags</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-share" tabindex="-1"><a class="header-anchor" href="#delete-share"><span>delete &amp; share</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tagname<span class="token operator">></span></span>
<span class="line"><span class="token function">git</span> push origin :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">></span></span>
<span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>tagname<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="others-have-to-rebuild-all-tag" tabindex="-1"><a class="header-anchor" href="#others-have-to-rebuild-all-tag"><span>others have to rebuild all tag</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">git</span> tag <span class="token parameter variable">-d</span></span>
<span class="line"><span class="token function">git</span> fetch</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-new-repo" tabindex="-1"><a class="header-anchor" href="#create-new-repo"><span>create new repo</span></a></h3>
<p>…or create a new repository on the command line</p>
<p>echo &quot;# ff&quot; &gt;&gt; README.md
git init
git add README.md
git commit -m &quot;first commit&quot;
git branch -M master
git remote add origin https://github.com/gaoming714/ff.git
git push -u origin master</p>
<p>…or push an existing repository from the command line</p>
<p>git remote add origin https://github.com/gaoming714/ff.git
git branch -M master
git push -u origin master</p>
<p>…or import code from another repository</p>
<p>You can initialize this repository with code from a Subversion, Mercurial, or TFS project.</p>
<h2 id="speed-up-git" tabindex="-1"><a class="header-anchor" href="#speed-up-git"><span>speed up git</span></a></h2>
<p>git clone https://ghproxy.com/https://github.com/...
git remote -v
git remote set-url remote https://github.com/...</p>
</div></template>


