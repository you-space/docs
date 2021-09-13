import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
    "/installation/": [
        {
            text: "Installation",
            children: [
                "/installation/using-build-zip.md",
                "/installation/docker.md",
                "/installation/development-setup.md",
            ],
        },
    ],
    "/basics/": [
        {
            text: "Basics",
            children: [
                "/basics/types.md",
                "/basics/items.md",
                "/basics/origins.md",
            ],
        },
    ],
    "/tutorials/": [
        {
            text: "Tutorials",
            children: ["/tutorials/how-to-create-a-new-type.md"],
        },
    ],
    "/requests/": [
        {
            text: "Requests",
            children: [
                "/requests/post-auth.md",
                "/requests/post-admin-origins.md",
                "/requests/get-admin-origins.md",
            ],
        },
    ],
};
