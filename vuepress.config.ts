import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

import { en, ptBR } from "./configs";

const isProduction = process.env.NODE_ENV === "production";

export default defineUserConfig<DefaultThemeOptions>({
    base: isProduction ? "/docs/" : "/",
    head: [["link", { rel: "icon", href: "/logo-circle-200x200.png" }]],
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
        repo: "you-space/docs",
        locales: {
            "/": en,
            // '/pt-BR/': ptBR,
        },
    },
});
