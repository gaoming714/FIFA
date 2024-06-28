<template><div><h1 id="linux-label" tabindex="-1"><a class="header-anchor" href="#linux-label"><span>Linux_Label</span></a></h1>
<p>/dev/sdx1 的 label 更改至 Mars</p>
<p>Ext2/Ext3/Ext4
名稱不可以超過 16 個字元
e2label /dev/sdx1 Mars
tune2fs -L Mars /dev/sdx1</p>
<p>SGI XFS
名稱不可以超過 12 個字元
xfs_admin -L Mars /dev/sdx1</p>
<p>ReiserFS
名稱不可以超過 16 個字元
reiserfstune -l Mars /dev/sdx1</p>
<p>IBM JFS
名稱不可以超過 16 個字元
jfs_tune -L Mars /dev/sdx1</p>
<p>FAT
名稱不可以超過 11 個字元
mlabel -i /dev/sdx1 ::Mars
dosfslabel /dev/sdx1 Mars</p>
<p>ntfs
名稱不可以超過 128 個字元
ntfslabel /dev/sdx1 Mars</p>
</div></template>


