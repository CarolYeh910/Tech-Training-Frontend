// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./assets/github.css"
import html2pdf from './html2pdf.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },   //注册全局组件
  template: '<App/>'
})
Vue.use(html2pdf)
