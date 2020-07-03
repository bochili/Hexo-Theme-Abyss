# Hexo-Theme-Abyss
Demo:www.wanan.run
***文档对应的主题版本：Abyss 0.0.1***

# 基本配置
## 侧边栏配置

侧边栏组件一共有8个：

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
抽屉导航内的组件与侧边栏组件完全相同。一共有8个：

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

示例（主题的_config.yml）：

```
drawerwidgets:
- blogger
- navlist
- blog_info
```

## 主题配置
### 字体配置

字体配置文件位于
```
博客目录/theme/abyss/source/css/style.styl
```
Tarawa主题内置了1个英文字体。为Google Sans

可以修改字体配置文件第78行修改站点字体。

**注意**：使用混搭时，应该让英文字体位于中文字体的前面，否则页面不会应用英文字体。
