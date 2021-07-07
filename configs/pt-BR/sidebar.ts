import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/pt-BR/guide/': [
        {
            text: 'Guia',
            children: [
                '/pt-BR/guide/README.md'
            ]
        }
    ]
}