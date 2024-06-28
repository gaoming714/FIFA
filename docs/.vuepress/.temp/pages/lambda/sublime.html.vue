<template><div><h1 id="sublime" tabindex="-1"><a class="header-anchor" href="#sublime"><span>sublime</span></a></h1>
<hr>
<h2 id="key-sublime3" tabindex="-1"><a class="header-anchor" href="#key-sublime3"><span>key  sublime3</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">----- BEGIN LICENSE -----</span>
<span class="line">sgbteam</span>
<span class="line">Single User License</span>
<span class="line">EA7E-1153259</span>
<span class="line">8891CBB9 F1513E4F 1A3405C1 A865D53F</span>
<span class="line">115F202E 7B91AB2D 0D2A40ED 352B269B</span>
<span class="line">76E84F0B CD69BFC7 59F2DFEF E267328F</span>
<span class="line">215652A3 E88F9D8F 4C38E3BA 5B2DAAE4</span>
<span class="line">969624E7 DC9CD4D5 717FB40C 1B9738CF</span>
<span class="line">20B3C4F1 E917B5B3 87C38D9C ACCE7DD8</span>
<span class="line">5F7EF854 86B9743C FADC04AA FB0DA5C0</span>
<span class="line">F913BE58 42FEA319 F954EFDD AE881E0B</span>
<span class="line">------ END LICENSE ------</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="packagecontrol-io-installation" tabindex="-1"><a class="header-anchor" href="#packagecontrol-io-installation"><span>packagecontrol.io/installation</span></a></h2>
<p>The console is accessed via the ctrl+` shortcut or the View &gt; Show Console menu.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="packages" tabindex="-1"><a class="header-anchor" href="#packages"><span>packages</span></a></h2>
<p>aterial Theme
arkdown Preview
Emmet
JsForamt
TrailingSpaces
BracketHightlighter
DocBlockr
Filediffs
Compare Side-By-Side
A File Icon
HTMLBeautify</p>
<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2>
<p>{
&quot;always_show_minimap_viewport&quot;: true,
&quot;color_scheme&quot;: &quot;Packages/Material Theme/schemes/Material-Theme.tmTheme&quot;,
&quot;default_line_ending&quot;: &quot;unix&quot;,
&quot;font_face&quot;: &quot;Source Code Pro Semibold&quot;,
&quot;font_options&quot;:
[
&quot;gray_antialias&quot;,
&quot;subpixel_antialias&quot;
],
&quot;font_size&quot;: 12,
&quot;ignored_packages&quot;:
[
],
&quot;indent_guide_options&quot;:
[
&quot;draw_normal&quot;,
&quot;draw_active&quot;
],
&quot;line_padding_bottom&quot;: 0,
&quot;line_padding_top&quot;: 0,
&quot;overlay_scroll_bars&quot;: &quot;enabled&quot;,
&quot;tab_size&quot;: 4,
&quot;theme&quot;: &quot;Material-Theme.sublime-theme&quot;,
&quot;translate_tabs_to_spaces&quot;: true,
&quot;word_wrap&quot;: &quot;true&quot;
}</p>
</div></template>


