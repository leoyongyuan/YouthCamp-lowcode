import Vue from 'vue'

const components = [
    'VButton',
    'VPicture',
    'VText',
    'VMultilineText',
    'VLink',
    'Video',
    'VTable',
    'VCarousel',
    'VChartScatter',
    'VChartColumnar',
    'VChartLine',
    'VChartPie',
    'VSparkline',
    'VForm',
    'VTab',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/${key}/Attr`))
    Vue.component(key + 'SuperAttr', () => import(`@/custom-component/${key}/SuperAttr`))
})