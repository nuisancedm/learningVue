用 install(){ } 和 vue.use() 配合来开发和引入全局组件
在 install(){ } 中vue.component(‘name’, component) 声明的组件，可在main.js中用 vue.use ()加载，便于全局直接使用而无需每个页面都import。

步骤：
1：在components文件夹下 创立index.vue和index.js两个文件
    index.vue里写好组件文件 template script style
    index.js里面对新构建的组件名字进行注册

2：在main.js里引入组件并调用vue.use在全局使用该插件

3：在全局使用
