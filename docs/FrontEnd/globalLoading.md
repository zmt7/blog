## 挂载 vue 原型的全局 loding

- **utils 目录下 loding.js**

```js
// 引入element
import { Loading } from "element-ui";

let loading = null;

// 调用elment 提供的api传入配置项(写组件可以借鉴抛出api接口，接收参数对象)
const loadingShow = () => {
  loading = Loading.service({
    lock: false,
    body: true,
    text: "加载中,请稍后...",
    spinner: "el-icon-loading",
    background: "rgba(255,255,255, .2)",
  });
};

const loadingHide = () => {
  loading.close();
};

const load = {
  loadingShow,
  loadingHide,
};

export default load;
```

- **main.js**

```js
// 全局引入挂载
import load from "./utils/loading";
Vue.prototype.$load = load;
```
