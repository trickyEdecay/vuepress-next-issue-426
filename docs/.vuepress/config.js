module.exports = {
    head:[
        ['link',{rel:"preconnect",href:'https://fonts.googleapis.com'}],
        ['link',{rel:"preconnect",href:'https://fonts.gstatic.com',crossorigin:true}],
        ['link',{rel:"stylesheet",href:'https://fonts.googleapis.com/css2?family=Noto+Serif+SC&family=PT+Serif&display=swap'}],
    ],
    plugins:[
        require('../../vuepress-plugin-test'),
    ]
}