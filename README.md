# 欢迎使用Abyss主题！

Abyss主题是基于Landscape主题二次开发而成，使用了其中的网格布局、归档布局等。

这里我还要感谢所有为Abyss主题提出建议、发现Bug的各位，他们是Abyss主题设计开发过程中不可或缺的力量。

![image](https://cdn.jsdelivr.net/gh/bochili/fontscdn2/Abyss0.1.0.png)

***文档对应的主题版本：Abyss 0.1.0***

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
<br>②
预加载阶段页面位置有问题。

## 顶部导航栏是否固定

在主题的_config.yml中找到
```
nav_fixed: true（默认为固定）
```
这一行，将其改为false，则不跟页面移动。


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
## 单独页面

在创建独立页面时，您可以在文件的Front-Matter处添加“**layout**”来赋予页面一个初始模板

目前Abyss主题只提供了**tag**（标签展示）、**category**（分类展示）这两种模板，日后会陆续更新其他模板

## 站内搜索

Abyss主题提供了对 **hexo-generator-search** 搜索插件的支持，您只需要安装此插件即可开始使用搜索功能。

安装命令为：

```
npm install hexo-generator-search --save
```

如果您不想开启搜索功能，请将主题config下的 search: **true** 改为 search: **false** 

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

### 文章类型: PostType

从 Abyss **0.1.0** 开始，引入了文章类型的概念，目前仅有“随心记”和普通文章两种样式，日后会陆续添加。如有建议欢迎提出。

(注：“随心记”就是简短的几句话，而不是普通blog那样的有图片有文字有样式，可以用随心记的方式记录您一瞬间的想法或其他发生的事情。)

如果您希望某篇文章已随心记的形式展示在首页，可以在文章的Front-Matter处填写：

```
posttype: sentence
```
不写即为默认样式

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
