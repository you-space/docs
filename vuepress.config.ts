import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

import { en, ptBR } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
    head: [["link", { rel: "icon", href: "/logo-circle-200x200.png" }]],
    plugins: [
        [
            "@vuepress/plugin-search",
            {
                locales: {
                    "/": {
                        placeholder: "Search",
                    },
                },
            },
        ],
    ],
    // site-level locales config
    locales: {
        "/": {
            lang: "en-US",
            title: "You space",
            description: "Content management system",
        },
        // '/pt-BR/': {
        //         lang: 'pt-BR',
        //         title: 'You space',
        //         description: 'Sistema de administração de conteúdos',
        // },
    },
    themeConfig: {
        editLink: true,
        repo: "you-space/you-space",
        docsRepo: "you-space/docs",
        docsDir: "docs",
        contributors: false,
        locales: {
            "/": en,
            // '/pt-BR/': ptBR,
        },
    },
});
