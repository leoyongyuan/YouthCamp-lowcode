<template>
    <div class="ace">
        <v-btn
        class="gap"
        elevation="2"
        raised
        small
        @click="openSearchBox"
        ><v-icon>mdi-magnify-expand</v-icon></v-btn>
        <v-btn
        class="gap"
        elevation="2"
        raised
        small
        @click="closeEditor"
        ><v-icon>mdi-window-close</v-icon></v-btn>
        <el-col :span="18" class="gap">
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                更换风格<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <div
                    @click="updateEditorTheme('ace/theme/github')">
                    <el-dropdown-item><v-icon>mdi-github</v-icon>GitHub</el-dropdown-item>
                </div>
                <div 
                    @click="updateEditorTheme('ace/theme/kuroir')">
                    <el-dropdown-item><v-icon>mdi-atom</v-icon>Kuroir</el-dropdown-item>
                </div>
                <div
                    @click="updateEditorTheme('ace/theme/one_dark')">
                    <el-dropdown-item><v-icon>mdi-brightness-4</v-icon>Dark</el-dropdown-item>
                </div>
            </el-dropdown-menu>
            </el-dropdown>
        </el-col>
      <div ref="ace" class="ace-editor"/>
        <v-btn
            class="gap-2"
            elevation="2"
            raised
            small
            color="blue-grey"
            @click="getCode"
            >
            <v-icon>mdi-file-upload-outline</v-icon>保存提交
        </v-btn>
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

export default {
    name: 'AceDemoJS',
    data() {
        return {
            editor: null,
            obj: null,
            event: null,
        }
    },

    mounted() {
        ace.config.set("basePath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/");
        //快速开始-demo
        this.editor = ace.edit(this.$refs.ace, {
            maxLines: 36, // 最大行数，超过会自动出现滚动条
            minLines: 36, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
            fontSize: 14, // 编辑器内字体大小
            theme: 'ace/theme/one_dark', // 默认设置的主题
            mode: 'ace/mode/javascript', // 默认设置的语言模式
            tabSize: 4,// 制表符设置为 4 个空格大小
            readOnly: false,//只读
            enableBasicAutocompletion: true, //boolea 或 completer数组,
            enableLiveAutocompletion: true, //boolean 或 completer数组,
            enableSnippets: true // boolean
        });
        this.editor.setValue(`(function () {\n    // start Code...   \n})`)
    },
    methods: {
        getCode() {
            let event = eval("(false || "+this.editor.getValue()+")")
            event()
        },
        
        openSearchBox: function () {
            this.editor.execCommand('find');
        },
        openReplaceBox: function () {
            this.editor.execCommand('replace');
        },
        updateEditorTheme: function (theme) {
            this.editor.setTheme(theme);
        },
        closeEditor() {
            this.$emit('closeEditor')
        },
    }
}
</script>

<style scoped>
.ace-editor {
    margin-bottom: 7px;
}

.gap {
    margin: 7px;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin: 10px;
}

.gap-2 {
    float: right;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: -3px;
}

</style>
