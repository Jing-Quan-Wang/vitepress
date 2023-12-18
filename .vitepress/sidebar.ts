import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  //
  '/Bio/': { base: '/Bio/', items: Sidebar_Esxi() },

  '/Experience': { base: '/Experience/', items: Sidebar_Vps() },
  //
  '/Publications/': { base: '/Publications/', items: Sidebar_Fe() },

  //
  '/Research/': { base: '/Research/', items: Sidebar_Docker() },
 
 //
  '/Contact/': { base: '/Contact/', items: Sidebar_Esxii() }
}

//
export function Sidebar_Fe() {
  return [
    {
      // 分组名称
      // text: 'JavaScript 基础知识',
      // 下拉开关
      // collapsed: false,
      // 分组路径
      base: '/Publications/',
      // 分组页面
      items: [
        { text: 'Journal Papers', link: 'Journal Papers' },
        { text: 'Book Chapters', link: 'Book Chapters' },
        {
          text: 'Conference Oral Presentations',
          link: 'Conference Oral Presentations'
        },
        {
          text: 'Conference Poster Presentations',
          link: 'Conference Poster Presentations'
        },
        { text: 'Patents', link: 'Patents' }
      ]
    }
  ]
}

//
export function Sidebar_Vps() {
  return [
    {
      // 分组名称
      // text: '基础设置',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Experience/',
      // 分组页面
      items: [
        { text: 'Education', link: 'Education' },
        { text: 'Awards & Honors', link: 'Awards & Honors' },
        { text: 'Projects & Roles', link: 'Projects & Roles' }
      ]
    }
  ]
}

//
export function Sidebar_Esxi() {
  return [
    {
      // 分组名称
      // text: 'ESXi 8.0安装',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Bio/',
      // 分组页面
      items: [{ text: 'Bio', link: 'bio' }]
    }
  ]
}

//
export function Sidebar_Esxii() {
  return [
    {
      // 分组名称
      // text: 'ESXi 8.0安装',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Contact/',
      // 分组页面
      items: [{ text: 'Contact', link: 'contact' }]
    }
  ]
}

//
export function Sidebar_Docker() {
  return [
    {
      // 分组名称
      // text: '安装青龙面板',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Research/',
      // 分组页面
      items: [{ text: 'Research', link: 'Research' }]
    }
  ]
}
