import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/installation/': [
        {
            text: 'Installation',
            children: [
                '/installation/using-zip.md',
                '/installation/development-setup.md',
            ]
        }
    ]
}