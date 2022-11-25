<template>
    <div class="attr-list">
        <el-form>
            <el-form-item label="图表示例">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="(item, index) in optionsum"
                        :key="index"
                        :label="item.label"
                        :value="item.label"
                        :disabled="item.disabled"
                        @click.native="selectoption(item.chart)"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="属性列表" name="linkage">
                <el-form>
                    <el-form-item label="标题">
                        <el-switch
                            v-model="option.title.show"
                            active-text="显示标题">
                        </el-switch>
                        <el-input 
                            v-model="option.title.text"
                            placeholder="请输入内容">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="工具提示">
                        <el-switch
                            v-model="option.tooltip.show"
                            active-text="显示提示">
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="图例">
                        <el-switch
                            v-model="option.legend.show"
                            active-text="显示图例">
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="横坐标">
                        <el-switch
                            v-model="option.xAxis.show"
                            active-text="显示横坐标">
                        </el-switch>
                    </el-form-item>
                    <el-form-item>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                更换图表类型<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <div @click="selectchart('bar')">
                                    <el-dropdown-item>柱状图</el-dropdown-item>
                                </div>
                                <div @click="selectchart('scatter')">
                                    <el-dropdown-item>散点图</el-dropdown-item>
                                </div>
                                <div @click="selectchart('line')">
                                    <el-dropdown-item>折线图</el-dropdown-item>
                                </div>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="数据来源" name="linkage">
                <el-form>
                    <el-form-item label="静态数据源">
                        <el-button @click="openStaticWinbox">修改数据</el-button>
                    </el-form-item>
                    <el-form-item label="接口数据源">
                        <el-button @click="openIOWinbox">调式接口</el-button>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
        <div style="display: none">
            <div id="staticData">
                <div class="modal-form-item dark-theme">
                    <div ref="ace"></div>
                </div>
                <v-btn
                    class="gap-2"
                    elevation="2"
                    raised
                    small
                    color="#04A9F5"
                    @click="updatedata"
                    >
                    <v-icon>mdi-update</v-icon>更新数据
                </v-btn>
            </div>
        </div>
        <div style="display: none">
            <div id="IOData">
                <el-form>
                    <p style="margin:5px;color:black">请求类型: </p>
                    <el-radio v-model="curComponent.propValue.radio" label="GET">GET</el-radio>
                    <el-radio v-model="curComponent.propValue.radio" label="POST">POST</el-radio>
                    <p style="margin:7px;color:black">请求地址: </p>
                    <el-input>
                        <template slot="prepend">HTTPS://</template>
                    </el-input>
                </el-form>
                <p style="margin:10px 0 10px 10px;color:black">请求体参数JSON: </p>
                <div class="modal-form-item dark-theme">
                    <div ref="ace2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { optionsum } from '@/utils/echart/columnar.js'
import ace from 'ace-builds'
import 'ace-builds/src-min-noconflict/theme-github'
import 'ace-builds/src-min-noconflict/theme-chrome'
import 'ace-builds/src-min-noconflict/mode-json5'
import WinBox from 'winbox/src/js/winbox'
export default {
    data() {
        return {
            optionsum,
            value: '柱状图',
            activeName: '',
        }
    },
    mounted() {
        ace.config.set("basePath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/");
        this.editor = ace.edit(this.$refs.ace, {
            maxLines: 28, // 最大行数，超过会自动出现滚动条
            minLines: 28, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
            fontSize: 14, // 编辑器内字体大小
            theme: 'ace/theme/chrome', // 默认设置的主题
            mode: 'ace/mode/json5', // 默认设置的语言模式
            tabSize: 4,// 制表符设置为 4 个空格大小
            readOnly: false, //只读
            enableBasicAutocompletion: true, //boolea 或 completer数组,
            enableLiveAutocompletion: true, //boolean 或 completer数组,
            enableSnippets: true // boolean
        });

        this.editor2 = ace.edit(this.$refs.ace2, {
            maxLines: 20, // 最大行数，超过会自动出现滚动条
            minLines: 20, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
            fontSize: 14, // 编辑器内字体大小
            theme: 'ace/theme/chrome', // 默认设置的主题
            mode: 'ace/mode/json5', // 默认设置的语言模式
            tabSize: 4,// 制表符设置为 4 个空格大小
            readOnly: false, //只读
            enableBasicAutocompletion: true, //boolea 或 completer数组,
            enableLiveAutocompletion: true, //boolean 或 completer数组,
            enableSnippets: true // boolean
        });

        this.editor.setValue(JSON.stringify(this.curComponent.propValue.option.series.data) + '\n' +JSON.stringify(this.curComponent.propValue.option.xAxis.data))
        this.editor2.setValue("{\n  \n}")
    },
    watch: {
        'propValue.option.series': function() {
            let arr = [];
            for (let i = 0; i < this.curComponent.propValue.option.series.length; i ++ ) {
                let obj = this.curComponent.propValue.option.series[i];
                arr.push(obj.data)
            }
            this.editor.setValue(JSON.stringify(arr))
        },
    },
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },
        option() {
            return this.$store.state.curComponent.propValue.option
        },
    },
    methods: {
        selectoption(chart) {
            this.curComponent.propValue.chart = chart
        },
        openStaticWinbox() {
            new WinBox('Static Data', {
                background: "#04A9F5",
                x: 'center',
                y: 'center',
                width: '75%',
                height: '75%',
                class: 'modern',
                mount: document.getElementById('staticData')
            })
        },
        openIOWinbox() {
            new WinBox('IO Data', {
                color: 'white',
                background: "#04A9F5",
                x: 'center',
                y: 'center',
                width: '75%',
                height: '75%',
                class: 'modern',
                mount: document.getElementById('IOData'),
                onblur: function(){
                    this.setBackground("#999");
                },
            })
        },
        findstring(str,ch1,ch2) {
            return str.substr(str.indexOf(ch1),str.indexOf(ch2) + 1)
        },

        updatedata() {
            let str = this.editor.getValue()
            let Arrdata = this.findstring(str,'[',']')
            let ArrXAxis = this.findstring(str.substr(str.indexOf(']') + 1) ,'[',']')
            this.curComponent.propValue.option.series.data = JSON.parse(Arrdata)
            this.curComponent.propValue.option.xAxis.data = JSON.parse(ArrXAxis)
        },
        selectchart(chart) {
            this.curComponent.propValue.option.series.type = chart
        }
    },
}
</script>
<style lang="less">
@import '~winbox/src/css/themes/modern.less';
@import '~winbox/src/css/winbox.less';

.chart-data-option {
  .fullscreen {
    z-index: 99;
    cursor: pointer;
    position: absolute;
    bottom: 25px;
    right: 45px;
    font-size: 20px;
  }
}

.winbox.modern {
  z-index: 99 !important;
  animation: none !important;
  background: var(--color-primary);

  .wb-body {
    padding: 5px;
    background-color: #FFFFFF;
  }
}

.modal-form-item {
  display: flex;
  flex-direction: column;

  .label {
    margin: 15px 0 10px;
  }

  .control-wrapper {
  }
}
.gap-2 {
    float: right;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
