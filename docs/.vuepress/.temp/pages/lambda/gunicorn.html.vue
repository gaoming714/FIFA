<template><div><h1 id="gunicorn" tabindex="-1"><a class="header-anchor" href="#gunicorn"><span>gunicorn</span></a></h1>
<blockquote>
<p>[!NOTE]<br>
Python WSGI HTTP Server for UNIX
daemon for python server.</p>
</blockquote>
<ol>
<li>nginx</li>
<li>gunicorn</li>
</ol>
<h2 id="_1-nginx" tabindex="-1"><a class="header-anchor" href="#_1-nginx"><span>1. nginx</span></a></h2>
<p>configure file for nginx</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">/etc/nginx/sites-available/site.conf</span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/nginx/sites-available/site.conf /etc/nginx/sites-enable/site.conf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>site.conf</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># use 'listen 80 deferred;' for Linux</span></span>
<span class="line">    <span class="token comment"># use 'listen 80 accept_filter=httpready;' for FreeBSD</span></span>
<span class="line">    listen <span class="token number">3000</span><span class="token punctuation">;</span></span>
<span class="line">    client_max_body_size 4G<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># set the correct host(s) for your site</span></span>
<span class="line">    server_name ip_host<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    keepalive_timeout <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment"># path for static files</span></span>
<span class="line">    root /path/to/applicationroot<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment"># checks for static file, if not found proxy to app</span></span>
<span class="line">        try_files <span class="token variable">$uri</span> @proxy_to_app<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    location @proxy_to_app <span class="token punctuation">{</span></span>
<span class="line">        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span></span>
<span class="line">        proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span></span>
<span class="line">        proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment"># we don't want nginx trying to do something clever with</span></span>
<span class="line">        <span class="token comment"># redirects, we set the Host: header above already.</span></span>
<span class="line">        proxy_redirect off<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment"># proxy_pass http://127.0.0.1:8000;</span></span>
<span class="line">        proxy_pass http://unix:/path/to/applicationroot/socket<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /500.html<span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">=</span> /500.html <span class="token punctuation">{</span></span>
<span class="line">        root /path/to/app/current/public<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-gunicorn-one-app-type-i" tabindex="-1"><a class="header-anchor" href="#_2-1-gunicorn-one-app-type-i"><span>2.1 gunicorn one app type I,</span></a></h2>
<blockquote>
<p>two filem service &amp; socket</p>
</blockquote>
<p>/etc/systemd/system/gunicorn.service:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">[Unit]</span>
<span class="line">Description=gunicorn daemon</span>
<span class="line">Requires=gunicorn.socket</span>
<span class="line">After=network.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">PIDFile=/run/gunicorn/pid</span>
<span class="line">User=someuser</span>
<span class="line">Group=someuser</span>
<span class="line">RuntimeDirectory=gunicorn</span>
<span class="line">WorkingDirectory=/path/to/applicationroot</span>
<span class="line">ExecStart=/usr/bin/gunicorn --pid /run/gunicorn/pid   \</span>
<span class="line">          --bind unix:/run/gunicorn/socket applicationname.wsgi</span>
<span class="line">ExecReload=/bin/kill -s HUP $MAINPID</span>
<span class="line">ExecStop=/bin/kill -s TERM $MAINPID</span>
<span class="line">PrivateTmp=true</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/etc/systemd/system/gunicorn.socket:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">[Unit]</span>
<span class="line">Description=gunicorn socket</span>
<span class="line"></span>
<span class="line">[Socket]</span>
<span class="line">ListenStream=/run/gunicorn/socket</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=sockets.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-gunicorn-one-app-type-ii" tabindex="-1"><a class="header-anchor" href="#_2-2-gunicorn-one-app-type-ii"><span>2.2 gunicorn one app type II</span></a></h2>
<p>/etc/systemd/system/gunicorn.service:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">[Unit]</span>
<span class="line">Description=gunicorn daemon</span>
<span class="line">After=network.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">ListenStream=/path/to/applicationroot/socket</span>
<span class="line">PIDFile=/path/to/applicationroot/pid</span>
<span class="line">RuntimeDirectory=gunicorn</span>
<span class="line">WorkingDirectory=/path/to/applicationroot</span>
<span class="line">ExecStart=/usr/local/bin/gunicorn                     \</span>
<span class="line">        --pid /path/to/applicationroot/pid            \</span>
<span class="line">        --bind unix:/path/to/applicationroot/socket   \</span>
<span class="line">        applicationname.wsgi</span>
<span class="line">ExecReload=/bin/kill -s HUP $MAINPID</span>
<span class="line">ExecStop=/bin/kill -s TERM $MAINPID</span>
<span class="line">PrivateTmp=true</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-gunicorn-one-app-type-iii" tabindex="-1"><a class="header-anchor" href="#_2-3-gunicorn-one-app-type-iii"><span>2.3 gunicorn one app type III</span></a></h2>
<p>/etc/systemd/system/gunicorn.service:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">[Unit]</span>
<span class="line">Description=gunicorn daemon</span>
<span class="line">After=network.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">ListenStream=/path/to/applicationroot/socket</span>
<span class="line">PIDFile=/run/gunicorn/pid</span>
<span class="line">RuntimeDirectory=gunicorn</span>
<span class="line">WorkingDirectory=/path/to/applicationroot</span>
<span class="line">ExecStart=/usr/local/bin/gunicorn --config gunicorn.ini  applicationname.wsgi</span>
<span class="line">ExecReload=/bin/kill -s HUP $MAINPID</span>
<span class="line">ExecStop=/bin/kill -s TERM $MAINPID</span>
<span class="line">PrivateTmp=true</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/path/to/applicationroot/gunicorn.ini</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">import multiprocessing</span>
<span class="line">pid = "/path/to/applicationroot/pic"</span>
<span class="line">bind = "unix:/path/to/applicationroot/socket"</span>
<span class="line">workers = multiprocessing.cpu_count() * 2 + 1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-gunicorn-mutiweb-app-type-i-not-work" tabindex="-1"><a class="header-anchor" href="#_2-4-gunicorn-mutiweb-app-type-i-not-work"><span>2.4 gunicorn Mutiweb App type I  (not work)</span></a></h2>
<blockquote>
<p>(nginx has seperate port or socket)</p>
</blockquote>
<p>App-A  gunicorn.one &amp;&amp; gunicorn.two</p>
<p>/lib/systemd/system/gunicorn.one</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">[Unit]</span>
<span class="line">Description=gunicorn daemon</span>
<span class="line">After=network.target</span>
<span class="line">PartOf=gunicorn.target</span>
<span class="line">ReloadPropagetedFrom=gunicorn.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">ListenStream=/path/to/applicationroot/socket</span>
<span class="line">PIDFile=/path/to/applicationroot/pid</span>
<span class="line">RuntimeDirectory=gunicorn</span>
<span class="line">WorkingDirectory=/path/to/applicationroot</span>
<span class="line">ExecStart=/usr/local/bin/gunicorn --config gunicorn.ini  applicationname.wsgi</span>
<span class="line">ExecReload=/bin/kill -s HUP $MAINPID</span>
<span class="line">ExecStop=/bin/kill -s TERM $MAINPID</span>
<span class="line">PrivateTmp=true</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=gunicorn.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/lib/systemd/system/gunicorn.target</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">[Unit]</span>
<span class="line">Description=gunicorn</span>
<span class="line">Documentation=https://example.com/path/to/your/docs</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/path/to/applicationroot/gunicorn.ini</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">import multiprocessing</span>
<span class="line">pid = "/path/to/applicationroot/pic"</span>
<span class="line">bind = "unix:/path/to/applicationroot/socket"</span>
<span class="line">workers = multiprocessing.cpu_count() * 2 + 1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-command-systemd" tabindex="-1"><a class="header-anchor" href="#_3-command-systemd"><span>3. command systemd</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">systemctl start gunicorn</span>
<span class="line">systemctl stop gunicorn</span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> gunicorn</span>
<span class="line">systemctl disable gunicorn</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


