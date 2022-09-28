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
                            @click="showPanle(index)"
                        >
                        <v-icon
                        >{{ item.icon }}</v-icon>
                        </v-chip>
                    </template>
                    <span> {{ item.tips }} </span>
                </v-tooltip>
            </div>
          </section>
          <section class="center">
            <div 
                class="content"
                @drop="handleDrop"
                @dragover="handleDragOver"
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
                >
                    <v-card flat v-if="i == 1">
                        <component :is="curComponent.component + 'Attr'" />
                    </v-card>
                    <v-card flat v-else-if="i == 2">
                        {{ text }}
                    </v-card>
                    <v-card flat v-else>
                        {{ text }}
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
          </section>
        </main>
        <div v-show="show" class="panle">
            <div v-if="select === 0">
                <ComponentList />
            </div>
            <div v-else-if="select === 1">
                2
            </div>
            <div v-else-if="select === 2">
                3
            </div>
            <div v-else-if="select === 3">
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
import { mapState } from "vuex";
import { deepCopy } from '@/utils/utils'
import generateID from '@/utils/utils'

export default {
    name: 'Home',
    data() {
        return {
            tab: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    },

    computed: mapState([
        'componentData',
        'curComponent',
        'isClickComponent',
        'canvasStyleData',
        'editor',
    ]),

    methods: {
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
            }
        },

        handleDragOver(e) {
            e.preventDefault()
            e.dataTransfer.dropEffect = 'copy'
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
        background-color: #fff;
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
