import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import { en, ptBR } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
    // site-level locales config
    locales: {
        '/': {
            lang: 'en-US',
            title: 'You space',
            description: 'Content management system',
        },
        '/pt-BR/': {
                lang: 'pt-BR',
                title: 'You space',
                description: 'Sistema de administração de conteúdos',
        },
    },
    themeConfig: {
        locales: {
            '/': en,
            '/pt-BR/': ptBR,
        }
    }
})