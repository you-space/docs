import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
    {
        text: "About",
        link: "/about/",
    },
    {
        text: "Guides",
        children: [
            {
                text: "Installation",
                children: [
                    "/installation/using-build-zip.md",
                    "/installation/docker.md",
                    "/installation/development-setup.md",
                ],
            },
            {
                text: "Basics",
                children: ["/basics/types.md"],
            },
            {
                text: "Tutorials",
                children: ["/tutorials/how-to-create-a-new-type.md"],
            },
        ],
    },
];
