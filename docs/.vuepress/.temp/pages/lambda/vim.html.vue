<template><div><h1 id="vim" tabindex="-1"><a class="header-anchor" href="#vim"><span>vim</span></a></h1>
<blockquote>
<p>[!NOTE]<br>
VIM, with Vundle or Plug</p>
</blockquote>
<h2 id="vundle-deprecated" tabindex="-1"><a class="header-anchor" href="#vundle-deprecated"><span>Vundle (deprecated)</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.vim/bundle/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>git clone files</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>copy .vimrc to /home</p>
<div class="language-vimrc line-numbers-mode" data-highlighter="prismjs" data-ext="vimrc" data-title="vimrc"><pre v-pre class="language-vimrc"><code><span class="line">set nocompatible              &quot; be iMproved, required</span>
<span class="line">filetype off                  &quot; required</span>
<span class="line"></span>
<span class="line">&quot; set the runtime path to include Vundle and initialize</span>
<span class="line">set rtp+=~/.vim/bundle/Vundle.vim</span>
<span class="line">call vundle#begin()</span>
<span class="line">&quot; alternatively, pass a path where Vundle should install plugins</span>
<span class="line">&quot;call vundle#begin('~/some/path/here')</span>
<span class="line"></span>
<span class="line">&quot; let Vundle manage Vundle, required</span>
<span class="line">Plugin 'VundleVim/Vundle.vim'</span>
<span class="line">&quot; theme</span>
<span class="line">Plugin 'morhetz/gruvbox'</span>
<span class="line">Plugin 'vim-airline/vim-airline'</span>
<span class="line">Plugin 'vim-airline/vim-airline-themes'</span>
<span class="line">&quot; beauty</span>
<span class="line">Plugin 'scrooloose/nerdtree'</span>
<span class="line">Plugin 'bronson/vim-trailing-whitespace'</span>
<span class="line">Plugin 'airblade/vim-gitgutter'</span>
<span class="line">Plugin 'yggdroot/indentline'</span>
<span class="line">&quot; edit</span>
<span class="line">Plugin 'ervandew/supertab'</span>
<span class="line">Plugin 'tpope/vim-surround'</span>
<span class="line">Plugin 'godlygeek/tabular'</span>
<span class="line">Plugin 'scrooloose/nerdcommenter'</span>
<span class="line">Plugin 'mattn/emmet-vim'</span>
<span class="line">Plugin 'jiangmiao/auto-pairs'</span>
<span class="line"></span>
<span class="line">&quot; All of your Plugins must be added before the following line</span>
<span class="line">call vundle#end()            &quot; required</span>
<span class="line">filetype plugin indent on    &quot; required</span>
<span class="line">&quot; To ignore plugin indent changes, instead use:</span>
<span class="line">&quot;filetype plugin on</span>
<span class="line">&quot;</span>
<span class="line">&quot; Brief help</span>
<span class="line">&quot; :PluginList       - lists configured plugins</span>
<span class="line">&quot; :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate</span>
<span class="line">&quot; :PluginSearch foo - searches for foo; append `!` to refresh local cache</span>
<span class="line">&quot; :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal</span>
<span class="line">&quot;</span>
<span class="line">&quot; see :h vundle for more details or wiki for FAQ</span>
<span class="line">&quot; Put your non-Plugin stuff after this line</span>
<span class="line"></span>
<span class="line">&quot; Basic settings</span>
<span class="line">set nu</span>
<span class="line">set expandtab</span>
<span class="line">set tabstop=4</span>
<span class="line">set shiftwidth=4</span>
<span class="line">set softtabstop=4</span>
<span class="line">set shiftround</span>
<span class="line">set smartindent</span>
<span class="line">set cursorline</span>
<span class="line">set numberwidth=5</span>
<span class="line">set backspace=indent,eol,start</span>
<span class="line"></span>
<span class="line">&quot; Theme</span>
<span class="line">set t_Co=256</span>
<span class="line">set background=dark</span>
<span class="line">syntax enable</span>
<span class="line">colorscheme gruvbox</span>
<span class="line">&quot; let g:solarized_termcolors=256</span>
<span class="line">&quot; colorscheme solarized</span>
<span class="line"></span>
<span class="line">&quot; airline</span>
<span class="line">let g:airline_theme=&quot;luna&quot;</span>
<span class="line">let g:airline_powerline_fonts = 1</span>
<span class="line">let g:airline#extensions#tabline#enabled = 1</span>
<span class="line">let g:airline#extensions#wordcount#filetypes = 0</span>
<span class="line"></span>
<span class="line">&quot; Map</span>
<span class="line">let g:user_emmet_leader_key='&lt;C-Y&gt;'</span>
<span class="line">map &lt;C-n&gt; :NERDTreeToggle&lt;CR&gt;</span>
<span class="line">map \\ \c&lt;space&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>open vi ,then run Vundle</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">:PluginInstall</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="vim-plug" tabindex="-1"><a class="header-anchor" href="#vim-plug"><span>vim Plug</span></a></h2>
<p>Download plug.vim and put it in the &quot;autoload&quot; directory.
<code v-pre>~/.vim/autoload/plug.vim</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">curl -fLo ~/.vim/autoload/plug.vim --create-dirs \</span>
<span class="line">    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>edit ~/.vimrc</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">set nocompatible              " be iMproved, required</span>
<span class="line">call plug#begin('~/.vim/plugged')</span>
<span class="line"></span>
<span class="line">" Make sure you use single quotes</span>
<span class="line"></span>
<span class="line">" theme</span>
<span class="line">Plug 'dracula/vim'</span>
<span class="line">Plug 'vim-airline/vim-airline'</span>
<span class="line">Plug 'vim-airline/vim-airline-themes'</span>
<span class="line">Plug 'tpope/vim-fugitive'</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">" pretty</span>
<span class="line">Plug 'scrooloose/nerdtree'</span>
<span class="line">Plug 'pangloss/vim-javascript'</span>
<span class="line">Plug 'bronson/vim-trailing-whitespace'</span>
<span class="line"></span>
<span class="line">Plug 'tpope/vim-commentary'</span>
<span class="line">Plug 'tpope/vim-surround'</span>
<span class="line">Plug 'ervandew/supertab'</span>
<span class="line">Plug 'godlygeek/tabular'</span>
<span class="line"></span>
<span class="line">" Initialize plugin system</span>
<span class="line">call plug#end()</span>
<span class="line"></span>
<span class="line">" Basic Settings</span>
<span class="line">set nu</span>
<span class="line">set expandtab</span>
<span class="line">set tabstop=4</span>
<span class="line">set shiftwidth=4</span>
<span class="line">set softtabstop=4</span>
<span class="line">set shiftround</span>
<span class="line">set smartindent</span>
<span class="line">set cursorline</span>
<span class="line">set backspace=indent,eol,start</span>
<span class="line">set numberwidth=5</span>
<span class="line"></span>
<span class="line">" Theme</span>
<span class="line">syntax enable</span>
<span class="line">colorscheme dracula</span>
<span class="line"></span>
<span class="line">" Airline</span>
<span class="line">" let g:airline_theme = "luna"</span>
<span class="line">let g:airline_powerline_fonts = 1</span>
<span class="line">let g:airline#extensions#tabline#enabled = 1</span>
<span class="line">" let g:airline#extensions#wordcount#filetypes = 0</span>
<span class="line">" let g:airline_section_b = '%{strftime("%T %a")}'</span>
<span class="line"></span>
<span class="line">" NERDTree</span>
<span class="line">map &lt;C-n> :NERDTreeToggle&lt;CR></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2>
<p>convert tab to space</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">:set ts=4</span>
<span class="line">:set expandtab</span>
<span class="line">:%retab!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>convert space to tab</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">:set ts=4</span>
<span class="line">:set noexpandtab</span>
<span class="line">:%retab!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


