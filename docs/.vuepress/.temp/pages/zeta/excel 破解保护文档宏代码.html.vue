<template><div><h1 id="破解保护密码的excel文件" tabindex="-1"><a class="header-anchor" href="#破解保护密码的excel文件"><span>破解保护密码的Excel文件</span></a></h1>
<p>录制宏  alt+F11 ， 插入模块(可选)</p>
<p>1.打开您需要破解保护密码的Excel文件；
2.依次点击菜单栏上的工具---宏----录制新宏，输入宏名字如:aa；
3.停止录制(这样得到一个空宏)；
4.依次点击菜单栏上的工具---宏----宏,选aa,点编辑按钮；
5.删除窗口中的所有字符(只有几个),替换为下面的内容；</p>
<p>宏代码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">Option Explicit</span>
<span class="line">Public Sub AllInternalPasswords()</span>
<span class="line">' Breaks worksheet and workbook structure passwords. Bob McCormick</span>
<span class="line">' probably originator of base code algorithm modified for coverage</span>
<span class="line">' of workbook structure / windows passwords and for multiple passwords</span>
<span class="line">'</span>
<span class="line">' Norman Harker and JE McGimpsey 27-Dec-2002 (Version 1.1)</span>
<span class="line">' Modified 2003-Apr-04 by JEM: All msgs to constants, and</span>
<span class="line">' eliminate one Exit Sub (Version 1.1.1)</span>
<span class="line">' Reveals hashed passwords NOT original passwords</span>
<span class="line">Const DBLSPACE As String = vbNewLine &amp; vbNewLine</span>
<span class="line">Const AUTHORS As String = DBLSPACE &amp; vbNewLine &amp; _</span>
<span class="line">"Adapted from Bob McCormick base code by" &amp; _</span>
<span class="line">"Norman Harker and JE McGimpsey"</span>
<span class="line">Const HEADER As String = "AllInternalPasswords User Message"</span>
<span class="line">Const VERSION As String = DBLSPACE &amp; "Version 1.1.1 2003-Apr-04"</span>
<span class="line">Const REPBACK As String = DBLSPACE &amp; "Please report failure " &amp; _</span>
<span class="line">"to the microsoft.public.excel.programming newsgroup."</span>
<span class="line">Const ALLCLEAR As String = DBLSPACE &amp; "The workbook should " &amp; _</span>
<span class="line">"now be free of all password protection, so make sure you:" &amp; _</span>
<span class="line">DBLSPACE &amp; "SAVE IT NOW!" &amp; DBLSPACE &amp; "and also" &amp; _</span>
<span class="line">DBLSPACE &amp; "BACKUP!, BACKUP!!, BACKUP!!!" &amp; _</span>
<span class="line">DBLSPACE &amp; "Also, remember that the password was " &amp; _</span>
<span class="line">"put there for a reason. Don't stuff up crucial formulas " &amp; _</span>
<span class="line">"or data." &amp; DBLSPACE &amp; "Access and use of some data " &amp; _</span>
<span class="line">"may be an offense. If in doubt, don't."</span>
<span class="line">Const MSGNOPWORDS1 As String = "There were no passwords on " &amp; _</span>
<span class="line">"sheets, or workbook structure or windows." &amp; AUTHORS &amp; VERSION</span>
<span class="line">Const MSGNOPWORDS2 As String = "There was no protection to " &amp; _</span>
<span class="line">"workbook structure or windows." &amp; DBLSPACE &amp; _</span>
<span class="line">"Proceeding to unprotect sheets." &amp; AUTHORS &amp; VERSION</span>
<span class="line">Const MSGTAKETIME As String = "After pressing OK button this " &amp; _</span>
<span class="line">"will take some time." &amp; DBLSPACE &amp; "Amount of time " &amp; _</span>
<span class="line">"depends on how many different passwords, the " &amp; _</span>
<span class="line">"passwords, and your computer's specification." &amp; DBLSPACE &amp; _</span>
<span class="line">"Just be patient! Make me a coffee!" &amp; AUTHORS &amp; VERSION</span>
<span class="line">Const MSGPWORDFOUND1 As String = "You had a Worksheet " &amp; _</span>
<span class="line">"Structure or Windows Password set." &amp; DBLSPACE &amp; _</span>
<span class="line">"The password found was: " &amp; DBLSPACE &amp; "$$" &amp; DBLSPACE &amp; _</span>
<span class="line">"Note it down for potential future use in other workbooks by " &amp; _</span>
<span class="line">"the same person who set this password." &amp; DBLSPACE &amp; _</span>
<span class="line">"Now to check and clear other passwords." &amp; AUTHORS &amp; VERSION</span>
<span class="line">Const MSGPWORDFOUND2 As String = "You had a Worksheet " &amp; _</span>
<span class="line">"password set." &amp; DBLSPACE &amp; "The password found was: " &amp; _</span>
<span class="line">DBLSPACE &amp; "$$" &amp; DBLSPACE &amp; "Note it down for potential " &amp; _</span>
<span class="line">"future use in other workbooks by same person who " &amp; _</span>
<span class="line">"set this password." &amp; DBLSPACE &amp; "Now to check and clear " &amp; _</span>
<span class="line">"other passwords." &amp; AUTHORS &amp; VERSION</span>
<span class="line">Const MSGONLYONE As String = "Only structure / windows " &amp; _</span>
<span class="line">"protected with the password that was just found." &amp; _</span>
<span class="line">ALLCLEAR &amp; AUTHORS &amp; VERSION &amp; REPBACK</span>
<span class="line">Dim w1 As Worksheet, w2 As Worksheet</span>
<span class="line">Dim i As Integer, j As Integer, k As Integer, l As Integer</span>
<span class="line">Dim m As Integer, n As Integer, i1 As Integer, i2 As Integer</span>
<span class="line">Dim i3 As Integer, i4 As Integer, i5 As Integer, i6 As Integer</span>
<span class="line">Dim PWord1 As String</span>
<span class="line">Dim ShTag As Boolean, WinTag As Boolean</span>
<span class="line">Application.ScreenUpdating = False</span>
<span class="line">With ActiveWorkbook</span>
<span class="line">WinTag = .ProtectStructure Or .ProtectWindows</span>
<span class="line">End With</span>
<span class="line">ShTag = False</span>
<span class="line">For Each w1 In Worksheets</span>
<span class="line">ShTag = ShTag Or w1.ProtectContents</span>
<span class="line">Next w1</span>
<span class="line">If Not ShTag And Not WinTag Then</span>
<span class="line">MsgBox MSGNOPWORDS1, vbInformation, HEADER</span>
<span class="line">Exit Sub</span>
<span class="line">End If</span>
<span class="line">MsgBox MSGTAKETIME, vbInformation, HEADER</span>
<span class="line">If Not WinTag Then</span>
<span class="line">MsgBox MSGNOPWORDS2, vbInformation, HEADER</span>
<span class="line">Else</span>
<span class="line">On Error Resume Next</span>
<span class="line">Do 'dummy do loop</span>
<span class="line">For i = 65 To 66: For j = 65 To 66: For k = 65 To 66</span>
<span class="line">For l = 65 To 66: For m = 65 To 66: For i1 = 65 To 66</span>
<span class="line">For i2 = 65 To 66: For i3 = 65 To 66: For i4 = 65 To 66</span>
<span class="line">For i5 = 65 To 66: For i6 = 65 To 66: For n = 32 To 126</span>
<span class="line">With ActiveWorkbook</span>
<span class="line">.Unprotect Chr(i) &amp; Chr(j) &amp; Chr(k) &amp; _</span>
<span class="line">Chr(l) &amp; Chr(m) &amp; Chr(i1) &amp; Chr(i2) &amp; _</span>
<span class="line">Chr(i3) &amp; Chr(i4) &amp; Chr(i5) &amp; Chr(i6) &amp; Chr(n)</span>
<span class="line">If .ProtectStructure = False And _</span>
<span class="line">.ProtectWindows = False Then</span>
<span class="line">PWord1 = Chr(i) &amp; Chr(j) &amp; Chr(k) &amp; Chr(l) &amp; _</span>
<span class="line">Chr(m) &amp; Chr(i1) &amp; Chr(i2) &amp; Chr(i3) &amp; _</span>
<span class="line">Chr(i4) &amp; Chr(i5) &amp; Chr(i6) &amp; Chr(n)</span>
<span class="line">MsgBox Application.Substitute(MSGPWORDFOUND1, _</span>
<span class="line">"$$", PWord1), vbInformation, HEADER</span>
<span class="line">Exit Do 'Bypass all for...nexts</span>
<span class="line">End If</span>
<span class="line">End With</span>
<span class="line">Next: Next: Next: Next: Next: Next</span>
<span class="line">Next: Next: Next: Next: Next: Next</span>
<span class="line">Loop Until True</span>
<span class="line">On Error GoTo 0</span>
<span class="line">End If</span>
<span class="line">If WinTag And Not ShTag Then</span>
<span class="line">MsgBox MSGONLYONE, vbInformation, HEADER</span>
<span class="line">Exit Sub</span>
<span class="line">End If</span>
<span class="line">On Error Resume Next</span>
<span class="line">For Each w1 In Worksheets</span>
<span class="line">'Attempt clearance with PWord1</span>
<span class="line">w1.Unprotect PWord1</span>
<span class="line">Next w1</span>
<span class="line">On Error GoTo 0</span>
<span class="line">ShTag = False</span>
<span class="line">For Each w1 In Worksheets</span>
<span class="line">'Checks for all clear ShTag triggered to 1 if not.</span>
<span class="line">ShTag = ShTag Or w1.ProtectContents</span>
<span class="line">Next w1</span>
<span class="line">If ShTag Then</span>
<span class="line">For Each w1 In Worksheets</span>
<span class="line">With w1</span>
<span class="line">If .ProtectContents Then</span>
<span class="line">On Error Resume Next</span>
<span class="line">Do 'Dummy do loop</span>
<span class="line">For i = 65 To 66: For j = 65 To 66: For k = 65 To 66</span>
<span class="line">For l = 65 To 66: For m = 65 To 66: For i1 = 65 To 66</span>
<span class="line">For i2 = 65 To 66: For i3 = 65 To 66: For i4 = 65 To 66</span>
<span class="line">For i5 = 65 To 66: For i6 = 65 To 66: For n = 32 To 126</span>
<span class="line">.Unprotect Chr(i) &amp; Chr(j) &amp; Chr(k) &amp; _</span>
<span class="line">Chr(l) &amp; Chr(m) &amp; Chr(i1) &amp; Chr(i2) &amp; Chr(i3) &amp; _</span>
<span class="line">Chr(i4) &amp; Chr(i5) &amp; Chr(i6) &amp; Chr(n)</span>
<span class="line">If Not .ProtectContents Then</span>
<span class="line">PWord1 = Chr(i) &amp; Chr(j) &amp; Chr(k) &amp; Chr(l) &amp; _</span>
<span class="line">Chr(m) &amp; Chr(i1) &amp; Chr(i2) &amp; Chr(i3) &amp; _</span>
<span class="line">Chr(i4) &amp; Chr(i5) &amp; Chr(i6) &amp; Chr(n)</span>
<span class="line">MsgBox Application.Substitute(MSGPWORDFOUND2, _</span>
<span class="line">"$$", PWord1), vbInformation, HEADER</span>
<span class="line">'leverage finding Pword by trying on other sheets</span>
<span class="line">For Each w2 In Worksheets</span>
<span class="line">w2.Unprotect PWord1</span>
<span class="line">Next w2</span>
<span class="line">Exit Do 'Bypass all for...nexts</span>
<span class="line">End If</span>
<span class="line">Next: Next: Next: Next: Next: Next</span>
<span class="line">Next: Next: Next: Next: Next: Next</span>
<span class="line">Loop Until True</span>
<span class="line">On Error GoTo 0</span>
<span class="line">End If</span>
<span class="line">End With</span>
<span class="line">Next w1</span>
<span class="line">End If</span>
<span class="line">MsgBox ALLCLEAR &amp; AUTHORS &amp; VERSION &amp; REPBACK, vbInformation, HEADER</span>
<span class="line">End Sub</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.关闭编辑窗口；
7.依次点击菜单栏上的工具---宏-----宏,选AllInternalPasswords,运行,确定两次；</p>
<h2 id="等一会-有1-2分钟-就会出现一个对话框" tabindex="-1"><a class="header-anchor" href="#等一会-有1-2分钟-就会出现一个对话框"><span>等一会(有1~2分钟),就会出现一个对话框</span></a></h2>
</div></template>


