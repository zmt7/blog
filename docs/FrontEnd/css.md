# css相关


## 实际场景分享

分享一个工作上遇到的一个移动端兼容插件的一个问题，场景是这样：公司需要做一个年度账单，安装了postcss-px2rem 这个插件会将项目中的px全部转化成rem， 而你用的插件又是px格式，这时候只要在用到px单位简单加上/no/就可以了。代码如下：

```css
<style>
  .class {
    width: 500px;/*no*/
    height: 500px;/*no*/
  }
</style>
```