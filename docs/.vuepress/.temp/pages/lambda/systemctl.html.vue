<template><div><h1 id="systemctl-serivce" tabindex="-1"><a class="header-anchor" href="#systemctl-serivce"><span>systemctl.serivce</span></a></h1>
<blockquote>
<p>[!NOTE]<br>
systemctl</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"></span>
<span class="line"><span class="token comment"># Name of task</span></span>
<span class="line"><span class="token comment"># =======================</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># description</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>A high performance web server and a reverse proxy server</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>forking</span>
<span class="line"><span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/run/shadowsocks.pid</span>
<span class="line"><span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/lambda/bin/walls</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/lambda/bin/poetry run ssserver <span class="token parameter variable">-p</span> <span class="token number">8699</span> <span class="token parameter variable">-k</span> password <span class="token parameter variable">-m</span> rc4-md5 <span class="token parameter variable">--user</span> nobody <span class="token parameter variable">-d</span> start</span>
<span class="line"><span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/home/lambda/bin/poetry run ssserver <span class="token parameter variable">-d</span> stop</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step" tabindex="-1"><a class="header-anchor" href="#step"><span>Step:</span></a></h2>
<p>cp this.service to /usr/lib/systemd/system/shadowsock.service</p>
</div></template>


