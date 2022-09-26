<template>
    <div class="home">
        <Toolbar />
        <main>
          <section class="left">
            <div v-for="(item,index) in list">
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
                        >
                        <v-icon
                        >{{ item.icon }}</v-icon>
                        </v-chip>
                    </template>
                    <span> {{ item.tips }} </span>
                </v-tooltip>
            </div>
            <!-- <ComponentList /> -->
          </section>
          <section class="center">
            <div class="content">
                <Editor />
            </div>
          </section>
          <section class="right">
            right
          </section>
        </main>
    </div>
</template>
<script>
import Toolbar from "../components/Toolbar.vue";
import Editor from "../components/Editor/index.vue";
import ComponentList from "../components/ComponentList.vue";

export default {
    name: 'Home',
    data() {
        return {
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
                    icon: 'mdi-database',
                    tips: '数据源'
                }]
        }
    },
    components: {
        Toolbar,
        Editor,
        ComponentList,
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
            .el-select {
                width: 100%;
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

    .placeholder {
        text-align: center;
        color: #333;
    }

    .global-attr {
        padding: 10px;
    }
}
</style>
