<template>
    <div
        v-if="editMode == 'edit'"
        class="v-text"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
    >
        <!-- tabindex >= 0 使得双击时聚焦该元素 -->
        <el-link 
            ref="text"
            type="primary"
            :contenteditable="canEdit"
            :class="{ canEdit }"
            :tabindex="element.id"
            :style="{ verticalAlign: element.style.verticalAlign }"
            @dblclick="setEdit"
            @paste="clearStyle"
            @mousedown="handleMousedown"
            @blur="handleBlur"  
            @input="handleInput"
            @click="openLink"
            v-html="element.propValue.text"
        ></el-link>
    </div>
    <div v-else class="v-text preview">
        <el-link 
            type="primary" 
            :style="{ verticalAlign: element.style.verticalAlign }" 
            @click="openLink" 
            v-html="element.propValue.text"
        ></el-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { keycodes } from '@/utils/shortcutKey.js'
import OnEvent from '../common/OnEvent'

export default {
    extends: OnEvent,
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            canEdit: false,
            ctrlKey: 17,
            isCtrlDown: false,
        }
    },
    computed: {
        ...mapState([
            'editMode',
        ]),
    },
    methods: {
        openLink() {
            window.open(this.element.propValue.link)
        },

        handleInput(e) {
            this.$emit('input', this.element, e.target.innerHTML)
        },

        handleKeydown(e) {
            // 阻止冒泡，防止触发复制、粘贴组件操作
            this.canEdit && e.stopPropagation()
            if (e.keyCode == this.ctrlKey) {
                this.isCtrlDown = true
            } else if (this.isCtrlDown && this.canEdit && keycodes.includes(e.keyCode)) {
                e.stopPropagation()
            } else if (e.keyCode == 46) { // deleteKey
                e.stopPropagation()
            }
        },

        handleKeyup(e) {
            // 阻止冒泡，防止触发复制、粘贴组件操作
            this.canEdit && e.stopPropagation()
            if (e.keyCode == this.ctrlKey) {
                this.isCtrlDown = false
            }
        },

        handleMousedown(e) {
            // return;
            // 如果可以编辑取消拖动默认事件
            if (this.canEdit) {
                e.stopPropagation()
            }
        },

        clearStyle(e) {
            e.preventDefault()
            const clp = e.clipboardData
            // 获取刚刚复制好的文本
            const text = clp.getData('text/plain') || ''
            if (text !== '') {
                document.execCommand('insertText', false, text)
            }

            this.$emit('input', this.element, e.target.innerHTML)
        },

        handleBlur(e) {
            this.element.propValue.text = e.target.innerHTML || '&nbsp;'
            const html = e.target.innerHTML
            if (html !== '') {
                this.element.propValue.text = e.target.innerHTML
            } else {
                this.element.propValue.text = ''
                this.$nextTick(() => {
                    this.element.propValue.text = '&nbsp;'
                })
            }
            this.canEdit = false
        },

        setEdit() {
            if (this.element.isLock) return

            this.canEdit = true
            // 全选
            // 通过ref取得整个DOM div
            this.selectText(this.$refs.text)  
        },

        // 双击让光标获取整个句子
        selectText(element) {
            // selection 是获取光标中的字段
            const selection = window.getSelection()
            const range = document.createRange()

            // 用range可以获取到光标字段的内容，参数为选取的DOM对象中的文本
            range.selectNodeContents(element)

            // 清除掉刚刚selection中的字段，在把range获取到的文本加进来
            selection.removeAllRanges()
            selection.addRange(range)
        },
    },
}
</script>

<style lang="scss" scoped>
.v-text {
    width: 100%;
    height: 100%;
    display: table;

    div {
        display: table-cell;
        width: 100%;
        height: 100%;
        outline: none;
        word-break: break-all;
        padding: 4px;
    }

    .canEdit {
        cursor: text;
        height: 100%;
    }
}

.preview {
    user-select: none;
}
</style>
