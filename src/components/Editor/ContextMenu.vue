<template>
    <div v-show="menuShow" class="contextmenu" :style="{ top: menuTop + 'px', left: menuLeft + 'px' }">
        <ul @mouseup="handleMouseUp">
            <v-subheader>菜单</v-subheader>
            <template v-if="curComponent">
                <template>
                    <li @click="copy">
                        <v-icon class="op">mdi-content-copy</v-icon>
                        复制
                    </li>
                    <li @click="paste">
                        <v-icon class="op">mdi-content-paste</v-icon>
                        粘贴
                    </li>
                    <li @click="cut">
                        <v-icon class="op">mdi-content-cut</v-icon>
                        剪切
                    </li>
                    <li @click="deleteComponent">
                        <v-icon class="op">mdi-delete-empty-outline</v-icon>
                        删除
                    </li>
                    <li @click="topComponent">
                        <v-icon class="op">mdi-format-align-top</v-icon>
                        置顶
                    </li>
                    <li @click="bottomComponent">
                        <v-icon class="op">mdi-format-align-bottom</v-icon>
                        置底
                    </li>
                </template>
            </template>
            <li v-else @click="paste">
                <v-icon class="op">mdi-content-paste</v-icon>
                粘贴
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            copyData: null,
        }
    },
    computed: mapState([
        'menuTop',
        'menuLeft',
        'menuShow',
        'curComponent',
    ]),
    methods: {
        // 点击菜单时不取消当前组件的选中状态
        handleMouseUp() {
            this.$store.commit('setClickComponentStatus', true)
        },

        cut() {
            this.$store.commit('cut')
        },

        copy() {
            console.log(1)
            this.$store.commit('copy')
        },

        paste() {
            this.$store.commit('paste', true)
            this.$store.commit('recordSnapshot')
        },

        deleteComponent() {
            this.$store.commit('deleteComponent')
            this.$store.commit('recordSnapshot')
        },

        topComponent() {
            this.$store.commit('topComponent')
            this.$store.commit('recordSnapshot')
        },

        bottomComponent() {
            this.$store.commit('bottomComponent')
            this.$store.commit('recordSnapshot')
        },
    },
}
</script>

<style lang="scss" scoped>
.contextmenu {
    position: absolute;
    z-index: 1000;
    .op {
        margin-right: 5px;
    }
    ul {
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        box-sizing: border-box;
        margin: 5px 0;
        padding: 6px 0;

        li {
            font-size: 14px;
            padding: 0 20px;
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #606266;
            height: 34px;
            line-height: 34px;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                background-color: #f5f7fa;
            }
        }
    }
}
</style>