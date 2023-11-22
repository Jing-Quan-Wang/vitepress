import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Homepage', link: '/' },
  { text: 'Bio', link: 'Bio/bio' },
  { text: 'Experience', items: Nav_Docs(), activeMatch: '/skill/' },
  { text: 'Research', items: Nav_Research(), activeMatch: '/Research/' },
  { text: 'Publications', items: Nav_Fe(), activeMatch: '/fe/' }
]

//
export function Nav_Docs() {
  return [
    {
      items: [
        { text: 'Education', link: 'Experience/Education' },
        { text: 'Awards & Honors', link: 'Experience/Awards & Honors' },
        { text: 'Projects & Roles', link: 'Experience/Projects & Roles' }
      ]
    }
  ]
}

//
export function Nav_Fe() {
  return [
    {
      items: [
        { text: 'Journal Papers', link: 'Publications/Journal Papers' },
        { text: 'Book Chapters', link: 'Publications/Book Chapters' },
        {
          text: 'Conference Oral Presentations',
          link: 'Publications/Conference Oral Presentations'
        },
        {
          text: 'Conference Poster Presentations',
          link: 'Publications/Conference Poster Presentations'
        },
        { text: 'Patents', link: 'Publications/Patents' }
      ]
    }
  ]
}

//
export function Nav_bio() {
  return [
    {
      items: [{ text: 'bio', link: 'Bio/bio' }]
    }
  ]
}

//
export function Nav_Research() {
  return [
    {
      items: [{ text: 'Research', link: 'Research/Research' }]
    }
  ]
}
