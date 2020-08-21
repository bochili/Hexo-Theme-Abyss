# 欢迎使用Abyss主题！

Abyss主题是基于Landscape主题二次开发而成，使用了其中的网格布局、归档布局等。

这里我还要感谢所有为Abyss主题提出建议、发现Bug的各位，他们是Abyss主题设计开发过程中不可或缺的力量。

![image](https://cdn.jsdelivr.net/gh/bochili/fontscdn2/Abyss0.0.2.png)

***文档对应的主题版本：Abyss 0.0.2.5***

## 示例：
Bochi's Blog: [www.wanan.run](https://www.wanan.run)

如果您的站点使用了Abyss主题，欢迎通过邮箱提交链接[bochili@foxmail.com](mailto:bochili@foxmail.com)。我不会忽略任何一个站点。

## 主题色
在主题的_config.yml中找到这一行：

```
theme_color: o-apple（默认为o-apple）
```
主题一共提供了26种ColorfulUI V3中的配色，其中可能有辨识度较低的颜色，您可以自行尝试。

深色主题色为：
```
theme_color: dark
```


![配色表](https://cdn.jsdelivr.net/gh/bochili/fontscdn2/E3EC8A58-82A6-458E-B625-89E729A9B094.png)

> 其中，o-zhihu、o-bilibili、o-xhub和white都未参与颜色联动系统。

另外，0.0.2版本在侧边栏组件中新增了切换主题色的功能，此功能使用到了Cookie存储，因此引入了**预加载**，目前存在一个外观上的问题，在日后的版本更新中会将其修复。

> 存在问题为：<br>① 用户在config中设置了默认的主题色，当电脑未读取到cookie时，将使用默认主题色。但是当浏览者切换了主题色，页面会先加载默认主题色，再读取cookie，加载新的主题色，中间的时间差是肉眼可见的，所以出现了切换页面时有一瞬间颜色不一致的情况。

## 顶部导航栏是否固定

在主题的_config.yml中找到
```
nav_fixed: true（默认为固定）
```
这一行，将其改为false，则不跟页面移动。

## 预加载动画
因为我引用的预加载脚本的问题，所以它会预加载页面的所有内容，0.0.2.5临时改成了顶部的一个小条，可以防止它遮盖页面内容，影响操作。

已存的预加载动画
动画样式 | config中的对应名
---|---
Win10转圈圈 | win10
顶部小条 | loadbartop
彩虹条条 | rainbow
纯毛玻璃 | blur


## 侧边栏配置

侧边栏组件一共有9个：

组件名 | config中的对应名
---|---
博主信息卡片 | blogger
博客数据 | blog_info
标签 | tag
标签云 | tagcloud
归档 | archive
导航卡片 | navlist
分类 | category
最近文章 | recent_posts
**切换主题色** | **theme**

示例（主题的_config.yml）：

```
widgets:
- blogger
- blog_info
- tag
```
#### 侧边栏位置
```
sidebar:[left/right]  //Config中此项为侧边栏的位置
```


### 头像
在主题配置文件中的avatar填写头像外链。

示范：

```
avatar: https://i.loli.net/2020/04/02/vl5RntXL8VDTu9x.jpg
```
### Blogger卡片上的介绍

标题调用站点标题（config.title）

标题下的那句话在主题的config中。找到

```
introduce:
```
在冒号后填写内容即可。

### Follow Me按钮

同样在主题的config中找到
```
followurl:
```
在后面添加需要跳转到的地址。

## 抽屉导航内的组件配置
抽屉导航内的组件与侧边栏组件完全相同。一共有9个。

示例（主题的_config.yml）：

```
drawerwidgets:
- blogger
- navlist
- blog_info
- theme
```

## 阅读全文按钮
在主题的_config.yml中找到这两行
excerpt_link_shape的值有oval和square，一个为椭圆形一个为长方形。
excerpt_link_shadow的值为true或false，即开启或关闭按钮上的阴影。

```
excerpt_link_shape: oval（默认为椭圆）
excerpt_link_shadow: true（默认为开启阴影）
```


## 文章Front-Matter
下面是一个标准的Front-Matter示例：

```
---
title: Hexo-Theme-Abyss使用文档
tags: [Hexo]
date: 2020-7-4
author: Li Bochi
excerpt: Hexo-Theme-Abyss,你值得拥有。
banner: https://cdn.jsdelivr.net/gh/bochili/fontscdn2/40178663-5584-435E-B9BF-CA90953154C8.png
---
```
### 文章描述/摘要
在文章顶部的Front-matter部分添加excerpt项，内容即你希望在文章列表显示的描述。支持HTML代码。
```
若不在文章顶部添加excerpt，则从文章摘取内容，直到检索到<!-- more-->
结束。
```

```
若不添加<!-- more-->则展示全篇文章
```
### 首页文章列表大图
添加**banner**项，值为图片外链。

## 百度搜索资源平台
config中代码如下
enable为是否开启，baidu_site_verification为您在下图中找到的值：
![baidu_site_verification](https://cdn.jsdelivr.net/gh/bochili/fontscdn2/FFB45118-C781-45CC-830C-524A2A1F516A.png)


## Valine评论系统
config中代码如下
enable为是否开启，AppId和AppKey为您在LeanCloud创建的应用的对应值。
```
valine:
  enable: true
  AppId: XXXXXXXXXX
  AppKey: XXXXXXXXXXX
```


## Google AdSense

此版本不开启，日后版本将可以正常使用。

## Local Search

此版本不开启，日后版本将可以正常使用。
