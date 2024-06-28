<template><div><h1 id="python-alphabeta" tabindex="-1"><a class="header-anchor" href="#python-alphabeta"><span>Python AlphaBeta</span></a></h1>
<h3 id="json-pickle" tabindex="-1"><a class="header-anchor" href="#json-pickle"><span>JSON &amp; pickle</span></a></h3>
<p><img src="/berry.png" alt="An image"></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token comment"># json</span></span>
<span class="line">data <span class="token operator">=</span> <span class="token boolean">None</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">load_it</span><span class="token punctuation">(</span>json_path<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>json_path<span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span></span>
<span class="line">        data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> data</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">save_it</span><span class="token punctuation">(</span>json_path<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>json_path<span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span></span>
<span class="line">        json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># pickle</span></span>
<span class="line">data <span class="token operator">=</span> <span class="token boolean">None</span></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"file.pickle"</span><span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">    data <span class="token operator">=</span> pickle<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"file.pickle"</span><span class="token punctuation">,</span> <span class="token string">'wb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">    pickle<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>data<span class="token punctuation">,</span> f<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dict-to-json" tabindex="-1"><a class="header-anchor" href="#dict-to-json"><span>dict to json</span></a></h3>
<p>data = None
json.dumps(data)</p>
<h3 id="series-df-to-json" tabindex="-1"><a class="header-anchor" href="#series-df-to-json"><span>Series DF to JSON</span></a></h3>
<p>ss = pd.Series()
ss.to_json()</p>
<p>df = pd.DataFrame()
df.to_json() # for column
df.T.to_json() #for row</p>
<p>df.T.to_json(force_ascii=False) # ZH ascii</p>
<p>pd.read_json(jj,orient=&quot;index&quot;)</p>
<h3 id="json-to-dict" tabindex="-1"><a class="header-anchor" href="#json-to-dict"><span>json to dict</span></a></h3>
<p>data_dict = json.loads(json_str)
json_str = json.dumps(data_dict)</p>
<h2 id="df" tabindex="-1"><a class="header-anchor" href="#df"><span>DF</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token comment">#方法1：</span></span>
<span class="line">data<span class="token punctuation">[</span><span class="token string">'升阻比'</span><span class="token punctuation">]</span><span class="token operator">=</span>data<span class="token punctuation">[</span><span class="token string">'升力系数'</span><span class="token punctuation">]</span><span class="token operator">/</span>data<span class="token punctuation">[</span><span class="token string">'阻力系数'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#方法2：</span></span>
<span class="line"><span class="token comment">#data.eval('升阻比=升力系数/阻力系数',inplace=True)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#方法3：</span></span>
<span class="line"><span class="token comment">#data['升阻比']=data.apply(lambda x:x['升力系数']/x['阻力系数'],axis=1)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#方法4：</span></span>
<span class="line"><span class="token comment">#data['升阻比']=data.apply(lambda x:x[1]/x[2],axis=1)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">se_tmp <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="venv" tabindex="-1"><a class="header-anchor" href="#venv"><span>venv</span></a></h2>
<p>python -m venv venvname
source venvname/Scripts/activate
deactivate</p>
<h2 id="project" tabindex="-1"><a class="header-anchor" href="#project"><span>project</span></a></h2>
<p>import os
import sys
<strong>file</strong> = os.getcwd()
BASE_DIR = os.path.dirname(os.path.abspath(<strong>file</strong>))
sys.path.append(BASE_DIR)</p>
<h2 id="debug-module" tabindex="-1"><a class="header-anchor" href="#debug-module"><span>debug module</span></a></h2>
<p>PySnooper</p>
<h2 id="name-file" tabindex="-1"><a class="header-anchor" href="#name-file"><span><strong>name</strong> , <strong>file</strong></span></a></h2>
<p><strong>name</strong> 是package的名，立即执行的__name__ == '<strong>main</strong>'
<strong>file</strong> 是当前文件的相对路径的文件名
os.getcwd()会得到的是运行文件的起始位置</p>
<h2 id="jump-to-ipython" tabindex="-1"><a class="header-anchor" href="#jump-to-ipython"><span>jump to IPython</span></a></h2>
<p>from IPython import embed</p>
<p>embed()</p>
<h2 id="static-http-server" tabindex="-1"><a class="header-anchor" href="#static-http-server"><span>static http server</span></a></h2>
<p>python -m http.server 9000</p>
<h3 id="pm2-static-http-server" tabindex="-1"><a class="header-anchor" href="#pm2-static-http-server"><span>pm2 static http server</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="line"><span class="token key atrule">apps</span><span class="token punctuation">:</span></span>
<span class="line">   <span class="token punctuation">-</span> <span class="token key atrule">name</span> <span class="token punctuation">:</span> <span class="token string">"http-server"</span></span>
<span class="line">     <span class="token key atrule">script</span> <span class="token punctuation">:</span> <span class="token string">"serve"</span></span>
<span class="line">     <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">       <span class="token key atrule">PM2_SERVE_PATH</span> <span class="token punctuation">:</span> <span class="token string">'.'</span></span>
<span class="line">       <span class="token key atrule">PM2_SERVE_PORT</span> <span class="token punctuation">:</span> <span class="token number">9000</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nodejs-static-http-server" tabindex="-1"><a class="header-anchor" href="#nodejs-static-http-server"><span>nodejs static http server</span></a></h3>
<p>http-server -p 9000</p>
<h2 id="isolated-poetry" tabindex="-1"><a class="header-anchor" href="#isolated-poetry"><span>isolated poetry</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">poetry config <span class="token parameter variable">--list</span></span>
<span class="line">poetry config cache-dir <span class="token string">"D:<span class="token entity" title="\\">\\</span>Portable<span class="token entity" title="\\">\\</span>Python"</span></span>
<span class="line">poetry config virtualenvs.in-project <span class="token boolean">true</span> <span class="token parameter variable">--local</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="crlf-lf" tabindex="-1"><a class="header-anchor" href="#crlf-lf"><span>CRLF LF</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">find</span> ./ <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">grep</span> <span class="token string">'^M'</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-s</span></span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/^M//g'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


