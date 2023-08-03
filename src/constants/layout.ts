import { NameMenuNavType } from "../types/layout";

export const listNameMenuNav: NameMenuNavType[] = [
  {
    id: 1,
    nameMenu: "MENU",
    children: [
      {
        id: 11,
        nameMenu: "Dashboard",
        icon: "mdi-home",
        children: [
          {
            id: 111,
            nameMenu: "Analytics Dashboard",
            icon: "mdi-circle-outline",
            path: "/analytics"
          },
          {
            id: 112,
            nameMenu: "Ecommerce Dashboard",
            icon: "mdi-circle-outline",
            path: "/ecommerce"
          },
          {
            id: 113,
            nameMenu: "Project Dashboard",
            icon: "mdi-circle-outline",
            path: "/project"
          },
          {
            id: 114,
            nameMenu: "CRM Dashboard",
            icon: "mdi-circle-outline",
            path: "/crm"
          },
          {
            id: 115,
            nameMenu: "Banking Dashboard",
            icon: "mdi-circle-outline",
            path: "/banking"
          },
        ]
      },
      {
        id: 12,
        nameMenu: "Users",
        icon: "mdi-account-box",
        path: "/user"
      }
    ]
  },
]
