import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
    {
        text: 'About',
        link: '/about/'
    },
    {
        text: 'Guides',
        children: [
            {
                text: 'Installation',
                children: [
                    '/installation/using-zip.md',
                    '/installation/development-setup.md',
                ]
            }
        ]
    },
]