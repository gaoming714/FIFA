<template><div><h1 id="selenium" tabindex="-1"><a class="header-anchor" href="#selenium"><span>selenium</span></a></h1>
<blockquote>
<p>Webdriver
https://www.selenium.dev/documentation/en/
https://selenium-python.readthedocs.io/</p>
</blockquote>
<hr>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>keys <span class="token keyword">import</span> Keys</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>firefox<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>ui <span class="token keyword">import</span> WebDriverWait</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support <span class="token keyword">import</span> expected_conditions <span class="token keyword">as</span> ExpC</span>
<span class="line"></span>
<span class="line"><span class="token comment">#This example requires Selenium WebDriver 3.13 or newe</span></span>
<span class="line">options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#options.add_argument('-headless') # headless</span></span>
<span class="line"><span class="token keyword">with</span> webdriver<span class="token punctuation">.</span>Firefox<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">'geckodriver'</span><span class="token punctuation">,</span> options<span class="token operator">=</span>options<span class="token punctuation">)</span> <span class="token keyword">as</span> driver<span class="token punctuation">:</span></span>
<span class="line">    wait <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">    driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"https://google.com/ncr"</span><span class="token punctuation">)</span></span>
<span class="line">    driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>NAME<span class="token punctuation">,</span> <span class="token string">"q"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">"cheese"</span> <span class="token operator">+</span> Keys<span class="token punctuation">.</span>RETURN<span class="token punctuation">)</span></span>
<span class="line">    first_result <span class="token operator">=</span> wait<span class="token punctuation">.</span>until<span class="token punctuation">(</span>ExpC<span class="token punctuation">.</span>presence_of_element_located<span class="token punctuation">(</span><span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">"h3>div"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>first_result<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">"textContent"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="following-is-add-on" tabindex="-1"><a class="header-anchor" href="#following-is-add-on"><span>following is add on</span></a></h2>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>installation</span></a></h2>
<p>pip install selenium
geckodriver in system path or user path
https://github.com/mozilla/geckodriver/releases/</p>
<h2 id="locating-elements" tabindex="-1"><a class="header-anchor" href="#locating-elements"><span>locating elements</span></a></h2>
<p>element is a WebElement, or error if no found
elements is a WebElement list, or [] if no found</p>
<pre><code>cheese = driver.find_element(By.ID, &quot;cheese&quot;)
cheese = driver.find_element_by_id(By.ID, &quot;cheese&quot;)
</code></pre>
<h3 id="find-element-returns-webdriver" tabindex="-1"><a class="header-anchor" href="#find-element-returns-webdriver"><span>find_element returns WebDriver</span></a></h3>
<p>represents the browser
find_element_by_id returns WebElement
represents a particular DOM node
(a control, e.g. a link or input field, etc.)</p>
<pre><code>By.CLASS_NAME           find_element_by_class_name
By.CSS_SELECTOR         find_element_by_css_selector
By.ID                   find_element_by_id
By.NAME                 find_element_by_name
By.LINK_TEXT            find_element_by_link_text
By.PARTIAL_LINK_TEXT    find_element_by_partial_link_text
By.TAG_NAME             find_element_by_tag_name
By.XPATH                find_element_by_xpath
</code></pre>
<h2 id="waits" tabindex="-1"><a class="header-anchor" href="#waits"><span>waits</span></a></h2>
<h3 id="explicit-wait" tabindex="-1"><a class="header-anchor" href="#explicit-wait"><span>Explicit wait</span></a></h3>
<pre><code>from selenium.webdriver.support import expected_conditions as ExpC
wait = WebDriverWait(driver, 10)
first_result = wait.until(ExpC.presence_of_element_located((By.CSS_SELECTOR, &quot;h3&gt;div&quot;)))
first_result = wait.until(lambda d: d.presence_of_element_located((By.CSS_SELECTOR, &quot;h3&gt;div&quot;)))
</code></pre>
<h3 id="implicit-wait" tabindex="-1"><a class="header-anchor" href="#implicit-wait"><span>Implicit wait</span></a></h3>
<p>driver.implicitly_wait(10)</p>
<h2 id="alert" tabindex="-1"><a class="header-anchor" href="#alert"><span>Alert</span></a></h2>
<p>Store the alert text in a variable
text = alert.text</p>
<p>Press the OK button</p>
<pre><code>alert.accept()
</code></pre>
<h2 id="keyboard" tabindex="-1"><a class="header-anchor" href="#keyboard"><span>Keyboard</span></a></h2>
<p>input</p>
<pre><code>driver.find_element(By.NAME, &quot;q&quot;).send_keys(&quot;webdriver&quot; + Keys.ENTER)
</code></pre>
<p>Clears the entered text</p>
<pre><code>SearchInput.clear()
</code></pre>
<h2 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>select</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>ui <span class="token keyword">import</span> Select</span>
<span class="line">select <span class="token operator">=</span> Select<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>NAME<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">select<span class="token punctuation">.</span>select_by_index<span class="token punctuation">(</span>index<span class="token punctuation">)</span></span>
<span class="line">select<span class="token punctuation">.</span>select_by_visible_text<span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">)</span></span>
<span class="line">select<span class="token punctuation">.</span>select_by_value<span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">select <span class="token operator">=</span> Select<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span><span class="token string">"//select[@name='name']"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">options <span class="token operator">=</span> select<span class="token punctuation">.</span>options <span class="token comment"># available option.</span></span>
<span class="line">all_selected_options <span class="token operator">=</span> select<span class="token punctuation">.</span>all_selected_options</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="window-and-frame" tabindex="-1"><a class="header-anchor" href="#window-and-frame"><span>window and frame</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line">driver<span class="token punctuation">.</span>switch_to_window<span class="token punctuation">(</span><span class="token string">"windowName"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">for</span> handle <span class="token keyword">in</span> driver<span class="token punctuation">.</span>window_handles<span class="token punctuation">:</span></span>
<span class="line">    driver<span class="token punctuation">.</span>switch_to_window<span class="token punctuation">(</span>handle<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">driver<span class="token punctuation">.</span>switch_to_frame<span class="token punctuation">(</span><span class="token string">"frameName"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


