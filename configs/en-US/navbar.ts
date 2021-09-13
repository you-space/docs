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
                text: "Tutorials",
                children: ["/tutorials/how-to-create-a-new-type.md"],
            },
        ],
    },
    {
        text: "Reference",
        children: [
            {
                text: "Basics",
                children: [
                    "/basics/types.md",
                    "/basics/items.md",
                    "/basics/origins.md",
                ],
            },
            {
                text: "Plugins",
                children: ["/plugin-list.md"],
            },
            {
                text: "Themes",
                children: ["/theme-list.md"],
            },
            {
                text: "Requests",
                children: [
                    {
                        text: "Authentication",
                        link: "/requests/auth/post-auth.md",
                    },
                    {
                        text: "Origins",
                        link: "/requests/origins/post-admin-origins.md",
                    },
                    {
                        text: "Types",
                        link: "/requests/types/post-types.md",
                    },
                    {
                        text: "Type fields",
                        link: "/requests/type-fields/get-types-fields.md",
                    },
                ],
            },
        ],
    },
];
