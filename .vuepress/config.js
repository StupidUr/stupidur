module.exports = {
  "title": "王狗狗个人笔记",
  "description": "向一个自己崇拜的自己去努力",
  "dest": "public",
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "valineConfig": {
      "appId": 'rhpAH4l8rV5Lyh3IpOfaWgiU-gzGzoHsz',// your appId
      "appKey": 'lRfXl66ye08fhniNqejifzYH', // your appKey
      "placeholder": "更加深入交流"
    },
    "huawei": true,
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "学习笔记",
            "link": "/docs/notes/"
          }
        ]
      },
      {
        "text": "相关连接",
        "icon": "reco-message",
        "items": [
          {
            "text": "Gitee",
            "link": "https://gitee.com/lucklydog",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/notes/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后一次更新",
    "author": "王狗狗",
    "authorAvatar": "/avatar.png",
    "record": "备案信息",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}