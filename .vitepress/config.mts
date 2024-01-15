﻿import { defineConfig } from 'vitepress'
import { nav, sidebar } from './index'

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: '一HomePage一',

  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark-dimmed'
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  // 源目录
  srcDir: 'src',

  // 网站头部

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 站点地图
  // sitemap: {
  //   hostname: 'https://theovan.xyz',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },
  themeConfig: {
    // 目录设置
    outline: 'deep', // 索引级别

    // algolia搜索
    nav,
    sidebar
  }
})

footer: {
      // message: 'Released Under The MIT License.',
      copyright:
        'Copyright 2019 - 2023 <a href=" "
		target="_blank">Theo</a > . All Rights Reserved.'
    }
