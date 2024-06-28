<template><div><h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1>
<blockquote>
<p>[!NOTE]<br>
easy way to build a nginx connect others(reverse proxy) and automatically start
An open proxy forwarding requests from and to anywhere on the Internet
A reverse proxy talking requests from the Internet and forwarding them to servers in an interneal network. Those making requests connect to the proxy and may not be aware of the internal netwark.</p>
</blockquote>
<h2 id="install-niginx" tabindex="-1"><a class="header-anchor" href="#install-niginx"><span>Install niginx</span></a></h2>
<p>install nginx, it will create user <code v-pre>nginx</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">apt install nginx</span>
<span class="line">yum install nginx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>edit  <code v-pre>/etc/nginx/nginx.conf</code>
at the end of http, ADD  &quot;include vhosts.d&quot;</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">http {</span>
<span class="line">	...</span>
<span class="line">include vhosts.d/*.conf;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>edit <code v-pre>/etc/nginx/vhosts.d/domain.com.conf</code>
configre location or reverse proxy</p>
<ol start="0">
<li>type0</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">	server {</span>
<span class="line">	        listen 80;</span>
<span class="line">	        server_name 118.31.22.163;</span>
<span class="line">	        root /home/nginx;</span>
<span class="line">	        location / {</span>
<span class="line">	                index index.html;</span>
<span class="line">	                # proxy_pass http://127.0.0.1:3002;</span>
<span class="line">	        }</span>
<span class="line">	}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>type1</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">	server {</span>
<span class="line">	        listen 8080;</span>
<span class="line">	        server_name www.jokerpy.com;</span>
<span class="line">	        root /home/nginx;</span>
<span class="line">	        location / {</span>
<span class="line">	                index index.html;</span>
<span class="line">	                proxy_pass http://127.0.0.1:3000;</span>
<span class="line">	        }</span>
<span class="line">	}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


