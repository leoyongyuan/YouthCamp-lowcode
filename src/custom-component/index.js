import Vue from 'vue'

const components = [
    'VButton',
    'VPicture',
    'VText',
    'VMultilineText',
    'VLink',
    'VTable',
    'VCarousel',
    'VSparkline',
    'VForm',
    'VTab',
    'VPagination',
    'VProgress',
    'VDialogs',

]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/${key}/Attr`))
    Vue.component(key + 'SuperAttr', () => import(`@/custom-component/${key}/SuperAttr`))
})