---
sidebarDepth: 1
---
# CSS
[[toc]]
## CSS常用属性
### 1.css区块属性（*block）

|   行高     |     line-height:数值   | line-height:数值	inherit（继承）/ normal;       |
| :---        |    :----:   |   :----: |
|字间距 | letter-spacing: 数值  |  line-height:数值	inherit（继承）/ normal;|
| 词间距  | word-spacing: 数值| inherit / normal;|
| 空格|空格	white-space: |pre(保留) | nowrap(不换行) | normal;|
```css
/*表格宽度自适应*/

th {
  line-height:normal;
  letter-spacing:normal;
  word-spacing:normal;
  white-space: nowrap;
  
}

```

``` css
/*display:*/
display:none; /*不显示，使用的场景非常多*/
display:block; /*把内联标签变成块级标签*/
display:inline; /*把块级标签变成内联标签*/
display:list-item; /*列表项*/
display:run-in; /*追加部分*/
display:compact; /*紧凑*/
display:marker; /*标记*/
display:table;
display:inline-table;
display:table-raw-group;
display:table-header-group;
display:table-footer-group;
display:table-raw;
display:table-column-group;
display:table-column;
display:table-cell;
display:table-caption; /*表格标题*/
```
### 2.css盒子属性（*box）
宽度 | width: | width: 	长度 / 百分比 / auto; | 
:-: | :-: | :-: | 
高度 | height: | width: 	长度 / 百分比 / auto; |  
清除 | clear:| clear:	none / left / right / both; | 
边界 | margin:| 上 右 下 左  |
填充 | padding:| 上 右 下 左  |
定位 | position:| absolute / relative / static; |
透明度 | visibility| inherit /  visible / hidden; |
溢出 | overflow| visible / hidden / scroll auto; |

### 3.css漂浮属性（float）
漂浮 ==float: left | right | none;== 页面靠右、靠左在页面布局的时候用的最多<br>
but,子标签使用了float时候，父标签的样式失效

```html 
/*父样式失效*/
<p style='background-color:red;'>
    <p style="float: left">p1</p>
    <p style="float: left">p2</p>
</p>
```
```html 
/*解决方案一：clear: both*/
<p style='background-color:red;'>
    <p style="float: left">p1</p>
    <p style="float: left">p2</p>
    <p style="clear: both;"></p> <!--加上clear：both之后就正常了-->
</p>
```

```css
/*解决方案二：clearfix*/
<p style='background-color:red;' class="clearfix">
    <p style="float: left">p1</p>
    <p style="float: left">p2</p>
</p>

.clearfix:after{
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;

}
```

### 4.css定位属性（position）
==fixed==一般用来写网页顶端的固定导航条，或者两侧的菜单。
```html
<div style="position:fixed;height:10%;background-color:lightskyblue;color:white;width:100%;top:0px;">导航</div>
<div style="">
    <div style="position:fixed;bottom: 0px;top:10%;float: left;width: 20%;background-color:indianred">菜单</div>
    <div style="float: right;width:80%;">
        <p>测试</p>
        <p>测试</p>
    </div>
</div>
```
absolute与relative:这两者一般配合使用，用于调整div之间的相对位置
```html
<div style="">
   <div style="position:relative;width: 300px;height: 150px;">
    <div style="position:absolute;float: left;width: 40%;background-color:indianred;bottom: 0px;right: 0px;">这是一个菜单</div>
</div>
```
### 5.css 透明度
```css
.image{
    opacity: 0.5
}
```
### 6.css字体属性（font）
::: tip font
颜色    **color**: 数值;<br>
大小    **font-size**: 数值;<br>
字体    **font-family**: "Courier New", Courier, monospace, "Times New Roman", Times, serif, Arial, Helvetica, sans-serif, Verdana<br>
样式    **font-style**: oblique;(偏斜体) italic;(斜体) normal;(正常)<br>
粗细    **font-weight**: bold;(粗体) lighter;(细体) normal;(正常)<br>
变体    **font-variant**: small-caps;(小型大写字母) normal;(正常)<br>
:::

### 7.css背景属性(background)
```css
background:transparent; /*透视背景*/    背景 
background-color: 数值;                 颜色
background-image: url() | none;         图片
background-repeat: inherit | no-repeat | repeat | repeat-x | repeat-y;                    重复

background-repeat : repeat; /*重复排列-网页默认*/
background-repeat : no-repeat; /*不重复排列*/
background-repeat : repeat-x; /*在x轴重复排列*/
background-repeat : repeat-y; /*在y轴重复排列*/

background-attachment: fixed | scroll;设置背景图像是与页面的其余部分一起滚动还是固定的。           滚动 
background-position:数值 | top | bottom | left | right | center;                               位置 
background-position : 90% 90%; /*背景图片x与y轴的位置*/
background-position : top; /*向上对齐*/
background-position : buttom; /*向下对齐*/
background-position : left; /*向左对齐*/
background-position : right; /*向右对齐*/
background-position : center; /*居中对齐*/
background-clip:  定义背景（颜色或图像）应在元素内延伸的距离。
background-size:  大小
```
### 8.css文本属性(text)
```css
大小写 text-transform: capitalize | uppercase | lowercase | none;
修饰 text-decoration: underline;(下划线) overline;(上划线) line-through;(删除线) blink;(闪烁)
排列 text-align: justify | left | right | center;
缩进 text-indent: 数值 | inherit;
阴影 text-shadow:数值;
```
### 9.css边框属性（border）

```css
边框样式 border-style: dotted;(点线) dashed;(虚线) solid; double;(双线) groove;(槽线) ridge;(脊状) inset;(凹陷) outset;
边框宽度 border-width: 数值;
边框颜色 border-color: top值 right值 bottom值 left值

边　　框 {border:border-width border-style color}
上 边 框 {border-top:border-top-width border-style color}
右 边 框 {border-right:border-right-width border-style color}
下 边 框 {border-bottom:border-bottom-width border-style color}
左 边 框 {border-left:border-left-width border-style color}
```





## CSS 常用布局

## CSS 伪类伪元素

## CSS 预处理语言