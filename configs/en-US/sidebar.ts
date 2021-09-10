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
            children: ["/basics/types.md", "/basics/items.md"],
        },
    ],
    "/tutorials/": [
        {
            text: "Tutorials",
            children: ["/tutorials/how-to-create-a-new-type.md"],
        },
    ],
};
