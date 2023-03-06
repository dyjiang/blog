### 锚点跨页面跳转

```js
要在页面A中创建一个指向页面B中锚点的链接，可以使用以下语法：

<a href="pageB.html#myAnchor">Link to Page B's Anchor</a>

然后在页面B中添加锚点：

<a name="myAnchor">This is the anchor on Page B</a>


需要注意的是，锚点是已过时的HTML语法，新的语法是使用id来标记锚点

<h2 id="myAnchor">This is the anchor on Page B</h2>

链接到这个锚点
<a href="pageB.html#myAnchor">Link to Page B's Anchor</a>

```

