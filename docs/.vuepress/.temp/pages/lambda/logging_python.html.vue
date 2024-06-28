<template><div><h1 id="python-log" tabindex="-1"><a class="header-anchor" href="#python-log"><span>Python log</span></a></h1>
<blockquote>
<p>[!NOTE]<br>
using loguru logger in python</p>
</blockquote>
<hr>
<h2 id="package" tabindex="-1"><a class="header-anchor" href="#package"><span>package</span></a></h2>
<blockquote>
<p>loguru</p>
</blockquote>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>how to use</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token keyword">from</span> util <span class="token keyword">import</span> logConfig<span class="token punctuation">,</span> logger</span>
<span class="line">logConfig<span class="token punctuation">(</span><span class="token string">"logs/download.log"</span><span class="token punctuation">,</span> rotation<span class="token operator">=</span><span class="token string">"10 MB"</span><span class="token punctuation">,</span> level<span class="token operator">=</span><span class="token string">"DEBUG"</span><span class="token punctuation">,</span> lite<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">"Please Login~"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token comment">#util.py</span></span>
<span class="line"><span class="token keyword">from</span> loguru <span class="token keyword">import</span> logger</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">set_datetime</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    record<span class="token punctuation">[</span><span class="token string">"extra"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"datetime"</span><span class="token punctuation">]</span> <span class="token operator">=</span> pendulum<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token string">"Asia/Shanghai"</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">logConfig</span><span class="token punctuation">(</span>log_file<span class="token operator">=</span><span class="token string">"logs/default.log"</span><span class="token punctuation">,</span> rotation<span class="token operator">=</span><span class="token string">"10 MB"</span><span class="token punctuation">,</span> level<span class="token operator">=</span><span class="token string">"DEBUG"</span><span class="token punctuation">,</span> stdout<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> lite<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    配置 Loguru 日志记录</span>
<span class="line">    :param log_level: 日志级别，如 "DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"</span>
<span class="line">    :param log_file: 日志文件路径</span>
<span class="line">    :param rotation: 日志文件轮换设置，如 "10 MB" 表示文件大小达到 10MB 时轮换</span>
<span class="line">    使用方法</span>
<span class="line"></span>
<span class="line">    # 在程序开始时配置日志</span>
<span class="line">    from model.util import logConfig, logger</span>
<span class="line">    logConfig(log_file="myapp.log", rotation="5 MB")</span>
<span class="line">    # 使用 logger 记录日志</span>
<span class="line">    logger.info("This is an info message")</span>
<span class="line">    logger.debug("This is a debug message")</span>
<span class="line">    """</span></span>
<span class="line">    logger<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 移除默认的处理程序（如果有的话）</span></span>
<span class="line">    <span class="token keyword">if</span> lite<span class="token punctuation">:</span></span>
<span class="line">        style <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token string">" [ &lt;level>{level: &lt;8}&lt;/level>] "</span></span>
<span class="line">            <span class="token operator">+</span> <span class="token string">"&lt;cyan>{name}&lt;/cyan>:&lt;cyan>{function}&lt;/cyan>:&lt;cyan>{line}&lt;/cyan>"</span></span>
<span class="line">            <span class="token operator">+</span> <span class="token string">"&lt;green>♻ &lt;/green>"</span></span>
<span class="line">            <span class="token operator">+</span> <span class="token string">"&lt;level>{message}&lt;/level>"</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        style <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token string">"&lt;green>{extra[datetime]}&lt;/green>"</span></span>
<span class="line">            <span class="token operator">+</span> <span class="token string">" [ &lt;level>{level: &lt;8}&lt;/level>] "</span></span>
<span class="line">            <span class="token operator">+</span> <span class="token string">"&lt;cyan>{name}&lt;/cyan>:&lt;cyan>{function}&lt;/cyan>:&lt;cyan>{line}&lt;/cyan>"</span></span>
<span class="line">            <span class="token operator">+</span> <span class="token string">"&lt;green>♻ &lt;/green>"</span></span>
<span class="line">            <span class="token operator">+</span> <span class="token string">"&lt;level>{message}&lt;/level>"</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># alternative ➲ ⛏ ☄ ➜ ♻ ✨</span></span>
<span class="line">    logger<span class="token punctuation">.</span>configure<span class="token punctuation">(</span>patcher<span class="token operator">=</span>set_datetime<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> stdout <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">        logger<span class="token punctuation">.</span>add<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>stderr<span class="token punctuation">,</span> level<span class="token operator">=</span>level<span class="token punctuation">,</span> colorize<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span>style<span class="token punctuation">)</span></span>
<span class="line">    logger<span class="token punctuation">.</span>add<span class="token punctuation">(</span></span>
<span class="line">        log_file<span class="token punctuation">,</span> colorize<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span>style<span class="token punctuation">,</span> rotation<span class="token operator">=</span>rotation</span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    logger<span class="token punctuation">.</span>add<span class="token punctuation">(</span></span>
<span class="line">        log_file <span class="token operator">+</span> <span class="token string">".rich"</span><span class="token punctuation">,</span></span>
<span class="line">        colorize<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span></span>
<span class="line">        encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token builtin">format</span><span class="token operator">=</span>style<span class="token punctuation">,</span></span>
<span class="line">        rotation<span class="token operator">=</span>rotation<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    logger<span class="token punctuation">.</span>add<span class="token punctuation">(</span></span>
<span class="line">        log_file <span class="token operator">+</span> <span class="token string">".warning"</span><span class="token punctuation">,</span></span>
<span class="line">        level<span class="token operator">=</span><span class="token string">"WARNING"</span><span class="token punctuation">,</span></span>
<span class="line">        colorize<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span></span>
<span class="line">        encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token builtin">format</span><span class="token operator">=</span>style<span class="token punctuation">,</span></span>
<span class="line">        rotation<span class="token operator">=</span>rotation<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    logger<span class="token punctuation">.</span>add<span class="token punctuation">(</span></span>
<span class="line">        log_file <span class="token operator">+</span> <span class="token string">".warning.rich"</span><span class="token punctuation">,</span></span>
<span class="line">        level<span class="token operator">=</span><span class="token string">"WARNING"</span><span class="token punctuation">,</span></span>
<span class="line">        colorize<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span></span>
<span class="line">        encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token builtin">format</span><span class="token operator">=</span>style<span class="token punctuation">,</span></span>
<span class="line">        rotation<span class="token operator">=</span>rotation<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


