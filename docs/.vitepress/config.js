import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";

export default defineConfig({
  lang: "zh",
  title: "zmt",
  base:"/",
  lastUpdated: true,
  lastUpdatedText: 'Updated Date',
  // head: [['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]],
  // markdown: {
  //   theme: 'material-palenight',
  //   lineNumbers: true,
  // },
  themeConfig:{
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present zmt',
    },
  }
});
