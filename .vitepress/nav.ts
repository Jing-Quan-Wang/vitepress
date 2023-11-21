import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Homepage', link: '/' },
  { text: 'Experience', items: Nav_Docs(), activeMatch: '/skill/' },
  { text: 'Publications', items: Nav_Fe(), activeMatch: '/fe/' }
  // { text: 'VPS使用指南', items: Nav_Vps(), activeMatch: '/VPS/' },
  // { text: 'ESXI安装指南', items: Nav_Esxi(), activeMatch: '/ESXI/' },
  // { text: '青龙面板', items: Nav_Ql(), activeMatch: '/Docker/' },
  // { text: '我的网站', items: Nav_Zd() }
]

// 文档记录
export function Nav_Docs() {
  return [
    {
      items: [
        { text: 'Education', link: '/' },
        { text: 'Awards & Honors', link: '/' },
        { text: 'Projects & Roles', link: '/' }
      ]
    }
  ]
}

// 前端物语
export function Nav_Fe() {
  return [
    {
      items: [
        { text: 'JJournal Papers', link: '/' },
        { text: 'Book Chapters', link: '/' },
        { text: 'Conference Oral Presentations', link: '/' },
        { text: 'Conference Poster Presentations', link: '/' },
        { text: 'Patents', link: '/' }
      ]
    }
    // {
    //   items: [
    //     { text: '工程化项目原理', link: '/fe/gc/GC-01' },
    //     { text: '浏览器知识', link: '/fe/browser/' },
    //     { text: '概念知识点', link: '/fe/concept/module' },
    //     { text: '编程题', link: '/fe/coding/' }
    //   ]
    // }
  ]
}

// VPS使用指南
export function Nav_Vps() {
  return [
    {
      items: [
        { text: '基础设置', link: '/VPS/01' },
        { text: '进阶使用', link: '/VPS/02' },
        { text: '搭建服务', link: '/VPS/06' }
      ]
    }
  ]
}

// ESXI安装指南
export function Nav_Esxi() {
  return [
    {
      items: [
        { text: 'ESXi 8.0安装', link: '/ESXI/ESXI-01' },
        { text: 'ESXI — OpenWrt', link: '/ESXI/OP-01' }
      ]
    }
  ]
}

// 青龙面板
export function Nav_Ql() {
  return [
    {
      items: [
        { text: '安装青龙面板', link: '/Docker/QL-01' },
        { text: '获取京东Cookie', link: '/Docker/JD-01' },
        { text: '获取阿里云盘Cookie', link: '/Docker/AL-01' }
      ]
    }
  ]
}
// 个人站点
export function Nav_Zd() {
  return [
    {
      items: [
        { text: '流媒体森林', link: 'https://theovan.wiki/' },
        { text: '玄学宝典', link: 'https://xx.theovan.xyz/' },
        { text: 'ChatGPT', link: 'https://ai.theovan.xyz/' },
        { text: '赞助我', link: 'https://github.com/sponsors/Theo-messi' }
      ]
    }
  ]
}
