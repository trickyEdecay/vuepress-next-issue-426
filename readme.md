# vuepress-next-issue-426

pay attention to two files:
```
docs/.vuepress/config.js
vuepress-plugin-test/clientAppEnhance.js
```

run:

```
npm run docs:dev
```

we can see console print something i want and css loaded from network panel
![console.png](https://i.loli.net/2021/09/08/Rv29dTwn6PUjWEV.png)  

![network panel.png](https://i.loli.net/2021/09/08/xQRNH9Af37LOlPY.png)

but the `<link>` tag doesn't appears at `<head>` tag:
![link-disappear.png](https://i.loli.net/2021/09/08/9OuK6XHSMmY8e3V.png)

if we just delete the head config in the `config.js` like this:

```
module.exports = {
    head:[
    ],
    plugins:[
        require('../../vuepress-plugin-test'),
    ]
}
```

and everything goes well:
![well.png](https://i.loli.net/2021/09/08/lIUQ1JDsxA98MKk.png)