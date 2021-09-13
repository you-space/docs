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
            text: "Authentication",
            children: ["/requests/auth/post-auth.md"],
        },
        {
            text: "Origins",
            children: [
                "/requests/origins/get-admin-origins.md",
                "/requests/origins/post-admin-origins.md",
                "/requests/origins/patch-admin-origins.md",
                "/requests/origins/del-admin-origins.md",
            ],
        },
        {
            text: "Types",
            children: [
                "/requests/types/get-types.md",
                "/requests/types/post-types.md",
                "/requests/types/patch-types.md",
                "/requests/types/del-types.md",
            ],
        },
        {
            text: "Type fields",
            children: [
                "/requests/type-fields/get-types-fields.md",
                "/requests/type-fields/get-types-fields-id.md",
                "/requests/type-fields/post-types-fields.md",
                "/requests/type-fields/patch-types-fields.md",
                "/requests/type-fields/del-types-fields.md",
            ],
        },
        {
            text: "Type items",
            children: [
                "/requests/type-items/get-types-items.md",
                "/requests/type-items/get-types-items-id.md",
                "/requests/type-items/post-types-items.md",
                "/requests/type-items/patch-types-items.md",
                "/requests/type-items/del-types-items.md",
            ],
        },
        {
            text: "Items",
            children: [
                "/requests/items/get-items.md",
                "/requests/items/post-items.md",
                "/requests/items/patch-items.md",
            ],
        },
    ],
};
