<template>
  <div class="md_root_content" v-bind:style="{width:this.width,height: this.height}">

    <!-- 功能按钮区 -->
    <div class="button_bar">
      <!-- 用 v-on 指令监听事件 -->
      <span v-on:click="Bold"><B>B</B></span>
      <span v-on:click="Underline"><B><u>U</u></B></span>
      <span v-on:click="Italic"><B><i>I</i></B></span>
      <span v-on:click="Strike"><B><s>S</s></B></span>
      <span v-on:click="H1_title"><B>H1</B></span>
      <span v-on:click="H2_title"><B>H2</B></span>
      <span v-on:click="H3_title"><B>H3</B></span>
      <span v-on:click="unordered_list"><B>ul</B></span>
      <span v-on:click="ordered_list"><B>ol</B></span>
      <span v-on:click="figure"><B>Fig</B></span>
      <span v-on:click="link" style="width: 80px"><B>Link</B></span>
      <span v-on:click="quote" style="width: 80px"><B>Quote</B></span>
      <span v-on:click="code"><B>Code</B></span>
      <span v-on:click="inline_code" style="width: 80px"><B>Inline</B></span>
      <span v-on:click="separate"><B>Sep</B></span>
      <span @click="getPdf('#pdfDom')" style="width: 110px"><B>Download</B></span>
      <span style="width: 160px">
        <B>
          Contact <a href="https://github.com/CarolYeh910/tech-training-camp-frontend">@CarolYeh</a>
        </B>
      </span>
    </div>

    <!-- 内容区 -->
    <div class="content_bar">

      <!-- Markdown编辑区 -->
      <div class="markdown_body">
        <textarea ref="ref_md_edit" class="md_textarea_content" v-model="markString">
        </textarea>
      </div>

      <!-- HTML显示区 -->
      <div id="pdfDom" class="html_body">
        <p v-html="htmlString"></p>
      </div>

    </div>

  </div>
</template>

<script>
  import marked from 'marked'       //将mardown转成HTML的库
  import hljs from 'highlight.js'   //对代码进行语法高亮的库
  import testData from '../test'  //测试数据

  export default {
    name: "Markdown",

    props: {
      width: {
        type: String,
        default: '100%'
      },

      height: {
        type: String,
        default: '640px'
      }
    },

    data() {
      return {
        markString: '',
        htmlString: '',
        htmlTitle: 'Markdown',
      }
    },

    mounted(){
      this.markString = testData
    },

    methods: {    //内联JS语句

      Bold() {        //粗体
        this.changeSelectedText("**","**")
      },

      Italic() {      //斜体
        this.changeSelectedText("_","_")
      },

      Underline() {   //下划线
        this.changeSelectedText("<u>","</u>")
      },

      Strike() {      //中划线
        this.changeSelectedText("~~", "~~")
      },

      H1_title() {    //一级标题
        this.changeSelectedText("# ", "\n")
      },

      H2_title() {    //二级标题
        this.changeSelectedText("## ", "\n")
      },

      H3_title() {    //三级标题
        this.changeSelectedText("### ", "\n")
      },

      unordered_list() {    //无序列表
        this.changeSelectedText("* ", "\n")
      },

      ordered_list() {      //有序列表
        this.changeSelectedText("1. ", "\n")
      },

      figure() {      //插入图片
        this.changeSelectedText("![", "]()")
      },

      link() {        //插入超链接
        this.changeSelectedText("[", "]()")
      },

      quote() {       //引用
        this.changeSelectedText("> ", "\n")
      },

      code() {        //插入代码块
        this.changeSelectedText("```\n", "\n```")
      },

      inline_code() {     //文本中插入代码(内联)
        this.changeSelectedText("`", "`")
      },

      separate() {        //添加分割线
        this.changeSelectedText("\n---", "\n")
      },

      changeSelectedText(startString,endString){
        let t = this.$refs.ref_md_edit
        if (window.getSelection) {
          if (t.selectionStart != undefined && t.selectionEnd != undefined) {
            //str2为鼠标选中的文本，str1和str3为其前后的文本
            let str1 = t.value.substring(0, t.selectionStart)
            let str2 = t.value.substring(t.selectionStart, t.selectionEnd)
            let str3 = t.value.substring(t.selectionEnd)

            let result = str1 + startString + str2 + endString + str3
            t.value = result
            this.markString = t.value
          }
        }
      }
    },

    watch: {  //用watch响应数据变化
      //监听markString的变化
      markString: function (value) {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        })
        //调用marked函数将mardown文件转成HTML
        this.htmlString = marked(value)
      },

      //监听htmlString并对其高亮
      htmlString: function (value) {
        this.$nextTick(() => {
          const codes = document.querySelectorAll(".html_body pre code");

          codes.forEach(elem => {
            elem.innerHTML = "<ul><li>" + elem.innerHTML.replace(/\n/g, "\n</li><li>") + "\n</li></ul>"
            hljs.highlightBlock(elem);
          });
        });
      }
    }

  }
</script>

<style scoped>
  .md_root_content {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }

  .button_bar {
    width: 100%;
    height: 40px;
    background-color: #d4d4d4;
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  div.button_bar span {
    width: 60px;
    line-height: 40px;
    text-align: center;
    color: black;
    cursor: pointer;
  }

  .content_bar {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 100%;
  }

  .markdown_body {
    width: 50%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    overflow-x: scroll;
  }

  .html_body {
    width: 50%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    padding-left: 60px;
    overflow-x: scroll;
  }

  .md_textarea_content {
    flex: 1;
    height: 100%;
    padding: 12px;
    overflow: auto;
    box-sizing: border-box;
    resize: none;
    outline: none;
    border: none;
    background-color: black;
    font-size: 14px;
    color: white;
    line-height: 24px;
  }


</style>
