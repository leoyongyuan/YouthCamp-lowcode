<template>
    <div class="component-list" @dragstart="handleDragStart">
        <div
            v-for="(item,index) in componentList"
            :key="index"
            dragable
            :data-index="index"
        >
        <v-chip
            filter
            label
            link
            outlined
            pill
        >
        <v-icon
        
        >mdi-code-json</v-icon>
        </v-chip>
        </div>
    </div>
</template>

<script>
import componentList from '@/custom-component/component-list'

export default {
    data() {
        return {
            componentList,
        }
    },
    methods: {
        handleDragStart(e) {
            e.dataTransfer.setData('index',e.target.dataset.index)
        },
    },
}
</script>

<style lang="scss" scoped>
.item {
    margin: 4px;
}

.component-list {
    height: 65%;
    padding: 5px 5px 10px 10px;
    display: grid;
    grid-gap: 10px 19px;
    grid-template-columns: repeat(auto-fill, 80px);
    grid-template-rows: repeat(auto-fill, 40px);

    .list {
        width: 80px;
        height: 40px;
        border: 1px solid #ddd;
        cursor: grab;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:active {
            cursor: grabbing;
        }

        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }

        .icon-wenben,
        .icon-biaoge {
            font-size: 18px;
        }

        .icon-tupian {
            font-size: 16px;
        }
    }
}
</style>