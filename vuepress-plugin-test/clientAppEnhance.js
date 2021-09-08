import { defineClientAppEnhance } from '@vuepress/client'
export default defineClientAppEnhance(({ app, router, siteData }) => {
    if ( __VUEPRESS_SSR__) return

    console.log('yeah!we are here')
    const styleTag = document.createElement('link')
    styleTag.href = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
    styleTag.rel = 'stylesheet'
    document.head.appendChild(styleTag)
    

})