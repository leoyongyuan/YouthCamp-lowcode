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
]

for (let i = 0 ; i < list.length; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list