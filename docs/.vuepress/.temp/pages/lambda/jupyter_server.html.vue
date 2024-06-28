<template><div><h1 id="install-jupyter-server" tabindex="-1"><a class="header-anchor" href="#install-jupyter-server"><span>Install jupyter server</span></a></h1>
<blockquote>
<p>[!NOTE]<br>
jupyter server</p>
</blockquote>
<h2 id="required" tabindex="-1"><a class="header-anchor" href="#required"><span>required</span></a></h2>
<p>nginx
jupyter</p>
<h2 id="jupyter" tabindex="-1"><a class="header-anchor" href="#jupyter"><span>jupyter</span></a></h2>
<p>cmd to create ~/.jupyter/jupyter_notebook_config.py</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">jupyter notebook --generate-config</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>cmd to create password to ~/.jupyter/jupyter_notebook_config.json</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">jupyter notebook password</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="edit-config-py" tabindex="-1"><a class="header-anchor" href="#edit-config-py"><span>edit config.py</span></a></h2>
<p>edit ~/.jupyter/jupyter_notebook_config.py
demo:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token comment">### Local IP addresses (such as 127.0.0.1 and ::1) are allowed as local, along </span></span>
<span class="line"><span class="token comment">### with hostnames configured in local_hostnames.</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>allow_remote_access <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"><span class="token comment">## The IP address the notebook server will listen on.</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>ip <span class="token operator">=</span> <span class="token string">'127.0.0.1'</span></span>
<span class="line"><span class="token comment">### The directory to use for notebooks and kernels.</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>notebook_dir <span class="token operator">=</span> <span class="token string">'/home/gaoming/bin'</span></span>
<span class="line"><span class="token comment">### Set ip to '\*' to bind on all interfaces (ips) for the public server</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>open_browser <span class="token operator">=</span> <span class="token boolean">False</span> </span>
<span class="line"><span class="token comment">### It is a good idea to set a known, fixed port for server access</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>port <span class="token operator">=</span> <span class="token number">3888</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>allow_remote_access <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>ip <span class="token operator">=</span> <span class="token string">'127.0.0.1'</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>notebook_dir <span class="token operator">=</span> <span class="token string">'/home/gaoming/bin'</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>open_browser <span class="token operator">=</span> <span class="token boolean">False</span></span>
<span class="line">c<span class="token punctuation">.</span>NotebookApp<span class="token punctuation">.</span>port <span class="token operator">=</span> <span class="token number">3888</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>run cmd : jupyter notebook</p>
<p>or using command to run</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">jupyter notebook --no-browser <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">3888</span> <span class="token parameter variable">--ip</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1>
<p>create server /etc/nginx/site-avaliable/jupyter.conf
map 8888 &gt; 3888</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">server { </span>
<span class="line">    # use 'listen 80 deferred;' for Linux </span>
<span class="line">    # use 'listen 80 accept_filter=httpready;' for FreeBSD</span>
<span class="line">    listen 8888;</span>
<span class="line">    client_max_body_size 4G;</span>
<span class="line">    </span>
<span class="line">    # set the correct host(s) for your site</span>
<span class="line">    server_name example.com www.example.com;</span>
<span class="line">    </span>
<span class="line">    keepalive_timeout 5;</span>
<span class="line">    </span>
<span class="line">    # path for static files</span>
<span class="line">    root /path/to/app/current/public;</span>
<span class="line">    </span>
<span class="line">    location / {</span>
<span class="line">        # checks for static file, if not found proxy to app</span>
<span class="line">        try_files $uri @proxy_to_app;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    location @proxy_to_app {</span>
<span class="line">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">        proxy_set_header X-Forwarded-Proto $scheme;</span>
<span class="line">        proxy_set_header Host $http_host;</span>
<span class="line">        # we don't want nginx trying to do something clever with</span>
<span class="line">        # redirects, we set the Host: header above already.</span>
<span class="line">        proxy_redirect off;</span>
<span class="line">        proxy_pass http://127.0.0.1:3888;</span>
<span class="line">        proxy_http_version 1.1;</span>
<span class="line">        proxy_read_timeout 3600s;</span>
<span class="line">        proxy_set_header Upgrade $http_upgrade;</span>
<span class="line">        proxy_set_header Connection "upgrade";</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    error_page 500 502 503 504 /500.html;</span>
<span class="line">    location = /500.html {</span>
<span class="line">        root /path/to/app/current/public;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd"><span>cmd</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">systemctl restart nginx</span>
<span class="line"></span>
<span class="line">jupyter notebook</span>
<span class="line"></span>
<span class="line">http://host:8888/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="daemon-with-pm2" tabindex="-1"><a class="header-anchor" href="#daemon-with-pm2"><span>daemon with pm2</span></a></h2>
<p>create daemon.sh with</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">/home/gaoming/Python/bin/jupyter notebook</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


