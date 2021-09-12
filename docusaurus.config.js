module.exports = {
  "title": "Motif Software",
  "tagline": "My Obsidian site",
  "url": "https://motif.software",
  "baseUrl": "/",
  "favicon": "img/favicon.png",
  "organizationName": "github.com",
  "projectName": "motif-software",
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Logo",
        "src": "static/img/logo.png"
      },
      "items": [
        {
          "label": "About",
          "to": "/docs/about"
        },
        {
          "label": "Projects",
          "to": "/docs/projects"
        },
        {
          "label": "Blog",
          "to": "/blog"
        }
      ]
    },
    "footer": {
      "copyright": "Copyright © 2021"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": require.resolve('./sidebars.js'),
          "editUrl": "https://github.com/motif-software/website/edit/main/",
          "admonitions": {
            "infima": true,
            "customTypes": {
              "right": {
                "ifmClass": "success",
                "keyword": "right",
                "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg>"
              },
              "wrong": {
                "ifmClass": "danger",
                "keyword": "wrong",
                "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z\"/></svg>"
              }
            }
          }
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/motif-software/website/edit/main/"
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": [],
  "scripts": [],
  "themes": [],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Lato:wght@400;900|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css"
  ]
}
