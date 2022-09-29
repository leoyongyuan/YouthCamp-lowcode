<template>
    <div class="ace">
      <!-- <div :style="obj" @click="clickaddevent">123</div> -->
      <div ref="ace" class="ace-editor"/>
      <!-- <div ref="ace2" class="ace-editor"/> -->
      <div class="ace-toolbar">
        <button @click="getCode">获取CSS</button>
        <button @click="setCode">设置</button>
        <button @click="getCodeJS">获取JS</button>
        <!-- <button v-on:click="codeComplete">代码完成</button>
        <button v-on:click="cancelCodeComplete">取消代码完成</button> -->
      </div>
      <!-- <div class="ace-toolbar">
        <button v-on:click="fillValue">填充值</button>
        <button v-on:click="clearValue">清空值</button>
      </div> -->
      <!-- <div class="ace-toolbar">
        <button v-on:click="getSelectText">获取选中文本</button>
        <button v-on:click="insert">光标处插入hello</button>
        <button v-on:click="getLineNum">获取总行数</button>
        <button v-on:click="getLineAndRow">获取光标所在行与列</button>
        <button v-on:click="gotoLine">光标跳转到1行1列</button>
      </div> -->
      <!-- <div class="ace-toolbar">
        <button v-on:click="setReadOnly(true)">编辑器只读</button>
        <button v-on:click="setReadOnly(false)">编辑器可编辑</button>
      </div> -->
      <div class="ace-toolbar">
        <button v-on:click="openSearchBox">打开编辑器搜素框</button>
        <button v-on:click="openReplaceBox">打开编辑器替换框</button>
      </div>
      <div class="ace-toolbar">
        <button v-on:click="updateEditorLanguage('ace/mode/json5')">更改编辑器语言：json</button>
        <!-- <button v-on:click="updateEditorLanguage('ace/mode/xml')">更改编辑器语言：xml</button>
        <button v-on:click="updateEditorLanguage('ace/mode/javascript')">更改编辑器语言：javascript</button> -->
      </div>
      <div class="ace-toolbar">
        <button v-on:click="updateEditorTheme('ace/theme/kuroir')">更改编辑器主题：kuroir</button>
        <button v-on:click="updateEditorTheme('ace/theme/one_dark')">更改编辑器主题：one_dark</button>
        <button v-on:click="updateEditorTheme('ace/theme/github')">更改编辑器主题：github</button>
      </div>
    </div>
</template>

<script>
//ace-editor
import ace from 'ace-builds'
// ace主题包
import 'ace-builds/src-min-noconflict/theme-kuroir'
import 'ace-builds/src-min-noconflict/theme-one_dark'
import 'ace-builds/src-min-noconflict/theme-github'
// ace 检索框
import 'ace-builds/src-min-noconflict/ext-searchbox'
// ace语言包
import 'ace-builds/src-min-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/mode-xml'
import 'ace-builds/src-min-noconflict/mode-json5'
//代码完成
import 'ace-builds/src-min-noconflict/ext-language_tools'
import { mapState } from 'vuex'

export default {
    name: 'AceDemo',
    data() {
        return {
            editor: null,
            event: function(){},
            eventobj: {
                "fn1": function() {
                    console.log
                }
            }
        }
    },
    computed: mapState([
        'canvasStyleData',
    ]),
    mounted() {
        ace.config.set("basePath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/");
        //快速开始-demo
            this.editor = ace.edit(this.$refs.ace, {
            maxLines: 24, // 最大行数，超过会自动出现滚动条
            minLines: 12, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
            fontSize: 14, // 编辑器内字体大小
            theme: 'ace/theme/kuroir', // 默认设置的主题
            mode: 'ace/mode/json5', // 默认设置的语言模式
            tabSize: 4,// 制表符设置为 4 个空格大小
            readOnly: false,//只读
            enableBasicAutocompletion: true, //boolea 或 completer数组,
            enableLiveAutocompletion: true, //boolean 或 completer数组,
            enableSnippets: true // boolean
        });
        this.editor.setValue(JSON.stringify(this.canvasStyleData, null, 4))

        this.editor2 = ace.edit(this.$refs.ace2, {
            maxLines: 24, // 最大行数，超过会自动出现滚动条
            minLines: 12, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
            fontSize: 14, // 编辑器内字体大小
            theme: 'ace/theme/one_dark', // 默认设置的主题
            mode: 'ace/mode/javascript', // 默认设置的语言模式
            tabSize: 4,// 制表符设置为 4 个空格大小
            readOnly: false,//只读
            enableBasicAutocompletion: true, //boolea 或 completer数组,
            enableLiveAutocompletion: true, //boolean 或 completer数组,
            enableSnippets: true // boolean
        });
        
        this.editor2.setValue(`(function () {\n    \n})`)
    },
    methods: {
        setCode() {
            this.editor.setValue(JSON.stringify(this.canvasStyleData, null, 4))
        },

        clickaddevent() {
            this.event()
        },

        getCodeJS() {
            this.event = eval("(false || "+this.editor2.getValue()+")")
        },

        getCode() {
            let str = this.editor.getValue()
            this.$store.commit('acesetCanvasData', JSON.parse(str))
        },  

        codeComplete: function () {
        this.editor.setOptions({
            enableBasicAutocompletion: true, //启动基本自动完成
            enableLiveAutocompletion: true, //启动实时自动完成
        })
        },
        cancelCodeComplete: function () {
        this.editor.setOptions({
            autoScrollEditorIntoView: false,
            copyWithEmptySelection: false,
        })
        },
        fillValue: function () {
        this.editor.setValue("hello world", -1)
        },
        clearValue: function () {
        this.editor.setValue("")
        },
        getSelectText: function () {
        let text = this.editor.getSelectedText()
        alert("选中文本为:" + text)
        },
        insert: function () {
        this.editor.insert("hello");
        },
        getLineNum: function () {
        let lineNum = this.editor.session.getLength();
        alert("总行数为:" + lineNum)
        },
        getLineAndRow: function () {
        let cursor = this.editor.selection.getCursor();
        alert("当前光标所在行列:" + JSON.stringify(cursor))
        },
        gotoLine: function () {
        this.editor.gotoLine(1, 1);
        },
        setReadOnly: function (readOnly) {
        this.editor.setReadOnly(readOnly)
        },

        openSearchBox: function () {
        this.editor.execCommand('find');
        },
        openReplaceBox: function () {
        this.editor.execCommand('replace');
        },
        updateEditorLanguage: function (language) {
        this.editor.setOption("mode", language);
        },
        updateEditorTheme: function (theme) {
        this.editor.setTheme(theme);
        },
    }
}
</script>

<style scoped>
.ace-editor {
    margin-bottom: 20px;
}

.ace-toolbar {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.ace-toolbar > button {
    margin-left: 20px;
}

.box {
    background-color: blue;
    width: 100px;
    height: 100px;
}

</style>
