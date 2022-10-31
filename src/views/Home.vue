<template>
    <div class="home">
        <Toolbar />
        <main>
          <section class="left">
            <div v-for="(item,index) in list" :key="index">
                <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                        <v-chip
                            filter
                            label
                            link
                            pill
                            v-bind="attrs"
                            v-on="on"
                            class="chip"
                            color="#B2DFDB"
                            @click="showPanle(index)"
                        >
                        <v-icon
                        >{{ item.icon }}</v-icon>
                        </v-chip>
                    </template>
                    <span> {{ item.tips }} </span>
                </v-tooltip>
            </div>
            <template>
                <v-dialog
                    v-model="dialog"
                    width="600px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        class="que"
                        color="#607D8B"
                        large
                        v-bind="attrs"
                        v-on="on"
                    >
                        mdi-file-question-outline
                    </v-icon>
                </template>
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">如何使用LowCode？</span>
                        </v-card-title>
                            <v-card-text>
                                {{ text }}
                            </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                        >
                            OK
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </template>
          </section>
          <section class="center">
            <div 
                class="content"
                @drop="handleDrop"
                @dragover="handleDragOver"
                @mousedown="handleMouseDown"
                @mouseup="deselectCurComponent"
            >
                <Editor />
            </div>
          </section>
          <section class="right">
            <v-tabs v-model="tab">
                <v-tab href="#tab-1">
                    属性<v-icon>mdi-checkbox-multiple-blank</v-icon></v-tab>
                <v-tab href="#tab-2">
                    联动<v-icon>mdi-vector-link</v-icon>
                </v-tab>
                <v-tab href="#tab-3">
                    高级<v-icon>mdi-arrow-up-right-bold</v-icon>
                </v-tab>
            </v-tabs>
            <v-tabs-items 
                v-if="curComponent" 
                v-model="tab">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'tab-' + i"
                    v-if="curComponent" 
                >
                    <v-card flat v-if="i == 1">
                        <component :is="curComponent.component + 'Attr'" />
                    </v-card>
                    <v-card flat v-else-if="i == 2">
                        <LinkComponent />
                    </v-card>
                    <v-card flat v-else-if="i == 3">
                        <component :is="curComponent.component + 'SuperAttr'" />
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
            <v-card flat v-else>
                <CanvasAttr />
            </v-card>
          </section>
        </main>
        <div v-show="show">
            <div class="panle" v-if="select === 0">
                <ComponentList />
            </div>
            <div class="panle" style="width:600px"  v-else-if="select === 1">
                <AceEditorJSON @closeEditor="closeEditor"/>
            </div>
            <div class="panle" style="width:600px;background-color:#333333;" v-else-if="select === 2">
                <AceEditorJS @closeEditor="closeEditor"/>
            </div>
            <div class="panle" v-else-if="select === 3">
                4
            </div>
        </div>
    </div>
</template>
<script>
import Toolbar from "../components/Toolbar.vue";
import Editor from "../components/Editor/index.vue";
import ComponentList from "../components/ComponentList.vue";
import componentList from '@/custom-component/component-list'
import { listenGlobalKeyDown } from '@/utils/shortcutKey'
import { mapState } from "vuex";
import { deepCopy } from '@/utils/utils'
import generateID from '@/utils/utils'
import CanvasAttr from "@/components/CanvasAttr.vue";
import AceEditorJSON from "@/components/AceEditorJSON.vue";
import AceEditorJS from "../components/AceEditorJS.vue";
import LinkComponent from "@/custom-component/common/LinkComponent.vue";
import { text } from '@/utils/text'

export default {
    name: 'Home',
    data() {
        return {
            tab: null,
            dialog: false,
            text: text,
            list: [ 
                {
                    icon: 'mdi-puzzle',
                    tips: '组件库'
                },
                {
                    icon: 'mdi-code-json',
                    tips: 'JSON'
                },
                {   
                    icon: 'mdi-language-javascript',
                    tips: 'javascript'
                },
                {
                    icon: 'mdi-database',
                    tips: '数据源'
                }
            ],
            show: false,
            select: 0,
        }
    },
    components: {
        Toolbar,
        Editor,
        ComponentList,
        CanvasAttr,
        AceEditorJSON,
        AceEditorJS,
        LinkComponent
    },

    computed: mapState([
        'componentData',
        'curComponent',
        'isClickComponent',
        'canvasStyleData',
        'editor',
    ]),
    created() {
        this.restore()
        // 全局监听按键事件
        listenGlobalKeyDown()
    },
    methods: {
        restore() {
            // 用保存的数据恢复画布
            if (localStorage.getItem('canvasData')) {
                this.$store.commit('setComponentData', this.resetID(JSON.parse(localStorage.getItem('canvasData'))))
            }

            if (localStorage.getItem('canvasStyle')) {
                this.$store.commit('setCanvasStyle', JSON.parse(localStorage.getItem('canvasStyle')))
            }
        },

        resetID(data) {
            data.forEach(item => {
                item.id = generateID()
            })

            return data
        },

        showPanle(id) {
            this.show = !this.show
            this.select = id
        },

        handleDrop(e) {
            e.preventDefault()
            e.stopPropagation()
            const index = e.dataTransfer.getData('index')
            const rectInfo = this.editor.getBoundingClientRect()
            if (index) {
                const component = deepCopy(componentList[index])
                component.style.top = e.clientY - rectInfo.y
                component.style.left = e.clientX - rectInfo.x
                component.id = generateID()
                this.$store.commit('addComponent', { component })
                this.$store.commit('recordSnapshot')
            }
        },

        handleDragOver(e) {
            e.preventDefault()
            e.dataTransfer.dropEffect = 'copy'
        },

        handleMouseDown(e) {
            e.stopPropagation()
            this.$store.commit('setClickComponentStatus', false)
            this.$store.commit('setInEditorStatus', true)
        },

        deselectCurComponent(e) {
            if (!this.isClickComponent) {
                this.$store.commit('setCurComponent', { component: null, index: null })
            }

            // 0 左击 1 滚轮 2 右击
            if (e.button != 2) {
                this.$store.commit('hideContextMenu')
            }
        },

        closeEditor() {
            this.showPanle(-1)
        },
    }
}
</script>

<style lang="scss" scoped>
.el-tabs__nav-scroll {
    padding: 0px;
    margin: 50px;
}
.home {
    height: 100vh;
    background: #fff;
    overflow: hidden;
    main {
        height: calc(100% - 64px);
        position: relative;
        .left {
            position: absolute;
            height: 100%;
            width: 50px;
            left: 0;
            top: 0;
            .chip {
                margin: 10px;
                margin-top: 40px;
            }
            .que {
                margin-top: 200px;
                margin-left: 17px;
            }
        }
        .right {
            position: absolute;
            height: 100%;
            width: 288px;
            right: 0;
            top: 0;
            margin: -10px;
            margin-top: 10px;
            .el-select {
                width: 100%;
            }
            overflow: auto;
            .col {
                background-color: #80DEEA;
            }
        }


        .center {
            margin-left: 70px;
            margin-right: 288px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;

            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }

    .panle {
        position: absolute;
        height: calc(100% - 64px);
        width: 250px;
        left: 70px;
        top: 66px;
        background-color: #E0F2F1;
        border: 1px solid #ddd;
    }

    .placeholder {
        text-align: center;
        color: #333;
    }

    .global-attr {
        padding: 10px;
    }
}
</style>
