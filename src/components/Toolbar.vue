<template>
    <div>
        <img src="@/assets/logo1.jpg" alt="">
        <div class="toolbar">
            <div style="display: inline-block;">
            </div>
            <div class="canvas-config">
                <span style="margin: 7px;"><v-icon> mdi-laptop</v-icon></span>
                <input v-model="canvasStyleData.width">
                <span>*</span>
                <input v-model="canvasStyleData.height">
            </div>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="gap" elevation="1" @click="undo" v-on="on" v-bind="attrs"><v-icon>mdi-arrow-u-left-top</v-icon></v-btn>
                    </template>
                    <span>撤回</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="gap" v-on="on" v-bind="attrs" elevation="1" @click="redo"><v-icon>mdi-arrow-u-right-top</v-icon></v-btn>
                    </template>
                    <span>回溯</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="gap" v-on="on" v-bind="attrs" elevation="1" @click="preview(false)"><v-icon>mdi-archive-eye-outline</v-icon></v-btn>
                    </template>
                    <span>预览</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="gap" v-on="on" v-bind="attrs" elevation="1" @click="save"><v-icon>mdi-content-save-all-outline</v-icon></v-btn>
                    </template>
                    <span>保存</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="gap" v-on="on" v-bind="attrs" elevation="1" @click="clearCanvas"><v-icon>mdi-delete-circle-outline</v-icon></v-btn>
                    </template>
                    <span>清空</span>
            </v-tooltip>
            
            <el-popover
                placement="bottom-start"
                width="200"
                trigger="hover"
            >
                <ul>
                    <li>ctrl / command + c : 复制 </li>
                    <br>
                    <li>ctrl / command + v : 粘贴 </li>
                    <br>
                    <li>ctrl / command + x : 剪切 </li>
                    <br>
                    <li>ctrl / command + y : 重做 </li>
                    <br>
                    <li>ctrl / command + z : 撤销 </li>  
                    <br>
                    <li>ctrl / command + s : 保存 </li>  
                    <br> 
                    <li>ctrl / command + p : 预览 </li>  
                    <br> 
                    <li>ctrl / command + d : 删除 </li> 
                    <br>
                    <li>ctrl / command + e : 清空 </li>   
                    <br> 
                    <li>Backspace : 撤销 </li>  
                    <br>
                    <li>Delete : 撤销 </li>  
                </ul>
                <div slot="reference" class="shortcut">
                    <span class="el-icon-question"></span>
                    <span>快捷键</span>
                </div>
            </el-popover>
        </div>    
        
        <Preview v-model="isShowPreview" :is-screenshot="isScreenshot" @change="handlePreviewChange" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Preview from './Preview.vue'
export default {
    components: {
        Preview,
    },
    data() {
        return {
            isShowPreview: false,
            isScreenshot: false,
        }
    },

    computed:mapState([
        'componentData',
        'canvasStyleData',
        'areaData',
        'curComponent',
        'curComponentIndex',
    ]),

    methods: {
        undo() {
            this.$store.commit('undo')
        },

        redo() {
            this.$store.commit('redo')
        },

        preview(isScreenshot) {
            this.isScreenshot = isScreenshot
            this.isShowPreview = true
            this.$store.commit('setEditMode', 'preview')
        },

        save() {
            localStorage.setItem('canvasData', JSON.stringify(this.componentData))
            localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
            this.$message.success('保存成功')
        },

        clearCanvas() {
            this.$store.commit('setCurComponent', { component: null, index: null })
            this.$store.commit('setComponentData', [])
            this.$store.commit('recordSnapshot')
        },

        handlePreviewChange() {
            this.$store.commit('setEditMode', 'edit')
        },
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 230px;
    height: 68px;
    position: fixed;
}
ul li{
    list-style-type:none;
}
.shortcut{
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;
        span {
            margin-left: 10px;
        }
}

.shortcut:hover{
    color: #409EFF;
    cursor: pointer;
}
.toolbar {
    padding: 15px 10px;
    overflow-x: auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
    height: 68px;
    .gap {
        margin-left: 10px;
        margin-right: 10px;
        color: #80CBC4;
    }
    .canvas-config {
        display: inline-block;
        margin-left: 400px;
        margin-right: 100px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 4px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            margin-left: 10px;
        }
    }
}
</style>