<template>
    <div class="home">
        <Toolbar />
        <main>
          <section class="left">
            <v-chip
                filter
                label
                link
                pill
                class="chip"
            >
            <v-icon
            >mdi-puzzle</v-icon>
            </v-chip>
            <v-chip
                filter
                label
                link
                pill
                class="chip"
            >
            <v-icon
            >mdi-code-json</v-icon>
            </v-chip>
            <v-chip
                filter
                label
                link
                pill
                class="chip"
            >
            <v-icon
            >mdi-database</v-icon>
            </v-chip>
            <!-- <ComponentList /> -->
          </section>
          <section class="center">
            <div
                class="content">
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
    data: () => ({ drawer: null }),
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
