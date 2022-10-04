export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
    collapseName: '', // 编辑组件时记录当前使用的是哪个折叠面板，再次回来时恢复上次打开的折叠面板，优化用户体验
    linkage: {
        duration: 0, // 过渡持续时间
        data: [ // 组件联动
            {
                id: '', // 联动的组件 id
                label: '', // 联动的组件名称
                event: '', // 监听事件
                style: [{ key: '', value: '' }], // 监听的事件触发时，需要改变的属性
            },
        ],
    },
}

export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

const list = [
    {
        component: 'VButton',
        label: '按钮',
        propValue: '按钮',
        icon: 'mdi-gesture-tap-button',
        style: {
            width: 100,
            height: 34,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
    },
    {
        component: 'VPicture',
        label: '图片',
        icon: 'mdi-image',
        propValue: {
            url: require('@/assets/title.jpg'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'VText',
        label: '文本',
        propValue: '文本',
        icon: 'mdi-format-text',
        style: {
            width: 80,
            height: 48,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: 20,
            fontWeight: 400,
            lineHeight: '',
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
    },
    {
        component: 'VMultilineText',
        label: '多行文本框',
        propValue: {
            value: '多行文本框',
            label: 'textarea',
        },
        icon: 'mdi-card-text-outline',
        style: {
            width: 300,
            height: 165,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: 20,
            fontWeight: 400,
            lineHeight: '',
            textAlign: '',
        },
    },
    {
        component: 'VLink',
        label: '链接',
        propValue: {
            text: '添加链接',
            link: '',
        },
        icon: 'el-icon-link',
        style: {
            width: 200,
            height: 28,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
        },
    },
    {
        component: 'Video',
        label: '视频',
        icon: 'el-icon-video-camera',
        propValue: {
            url: require('@/assets/video1.mp4'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 500,
            height: 300,
            borderRadius: '',
        },
    },
    {
        component: 'VTable',
        label: '表格',
        icon: 'mdi-file-table-box',
        propValue: {
            headers: [
                {
                    text: '表头',
                    value: 'name',
                    align: 'start',
                    filterable: false,
                },
                { text: '表头', value: 'value1' },
                { text: '表头', value: 'value2' },
            ],    
            itemlist: [
                {
                    name: '行1',
                    value1: 23,
                    value2: 314
                },
                {
                    name: '行2',
                    value1: 2453,
                    value2: 3114
                },
            ],
        },
        style: {
            width: 500,
            height: 300,
            borderRadius: '',
        },
    },
    {
        component: 'VCarousel',
        label: '轮播图',
        icon: 'mdi-view-carousel-outline',
        propValue: {
            url: [
                require('@/assets/image1.jpg'),
                require('@/assets/image2.jpg'),
                require('@/assets/image3.jpg'),
                require('@/assets/image4.jpg'),
                require('@/assets/image5.jpg')
            ],
            cycle: false,
        },
        style: {
            width: 800,
            height: 500,
            borderRadius: '',
        },
    },
    {
        component: 'VChartScatter',
        label: '散点图',
        icon: 'mdi-chart-scatter-plot',
        propValue: {
            chart: 'optionscatter',
            option: {
            },
        },
        style: {
            width: 800,
            height: 500,
            borderRadius: '',
        },
    },
    {
        component: 'VChartColumnar',
        label: '柱状图',
        icon: 'mdi-chart-bar',
        propValue: {
            chart: 'optioncolumnar',
            option: {
            },
        },
        style: {
            width: 800,
            height: 500,
            borderRadius: '',
        },
    },
    {
        component: 'VChartLine',
        label: '折线图',
        icon: 'mdi-chart-line',
        propValue: {
            chart: 'optionline',
            option: {
            },
        },
        style: {
            width: 800,
            height: 500,
            borderRadius: '',
        },
    },
    {
        component: 'VChartPie',
        label: '饼状图',
        icon: 'mdi-chart-pie',
        propValue: {
            chart: 'optionpie',
            option: {
            },
        },
        style: {
            width: 800,
            height: 500,
            borderRadius: '',
        },
    },
    {
        component: 'VSparkline',
        label: '迷你图表',
        icon: 'mdi-chart-timeline-variant-shimmer',
        propValue: {
            fill: true,
            selectedGradient: ['#00c6ff', '#F0F', '#FF0'],
            gradients: [
                ['#222'],
                ['#42b3f4'],
                ['red', 'orange', 'yellow'],
                ['purple', 'violet'],
                ['#00c6ff', '#F0F', '#FF0'],
                ['#f72047', '#ffd200', '#1feaea'],
            ],
            padding: 8,
            radius: 10,
            value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
            width: 2,
        },
        style: {
            width: 800,
            height: 250,
            borderRadius: '',
        },
    },
]

for (let i = 0 ; i < list.length; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list