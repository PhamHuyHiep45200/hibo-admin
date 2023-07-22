import { NameMenuNavType, MenuListProfile, MenuListHeader, ProfileUser } from "../types/layout";
import imgUser from "@/assets/images/img-user.jpg";

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
            path: "/analytics",
          },
          {
            id: 112,
            nameMenu: "Ecommerce Dashboard",
            icon: "mdi-circle-outline",
            path: "/ecommerce",
          },
          {
            id: 113,
            nameMenu: "Project Dashboard",
            icon: "mdi-circle-outline",
            path: "/project",
          },
          {
            id: 114,
            nameMenu: "CRM Dashboard",
            icon: "mdi-circle-outline",
            path: "/crm",
          },
          {
            id: 115,
            nameMenu: "Banking Dashboard",
            icon: "mdi-circle-outline",
            path: "/banking",
          },
        ],
      },
      {
        id: 12,
        nameMenu: "Users",
        icon: "mdi-account-box",
        path: "/user",
      },
    ],
  },
];

export const listNameMenuProfile: MenuListProfile[] = [
  {
    id: 1,
    nameMenu: "Profile",
    icon: "mdi-account-outline",
    path: "/profile",
  },
  {
    id: 2,
    nameMenu: "Chat",
    icon: "mdi-chat-processing-outline",
    path: "/chat",
  },
  {
    id: 3,
    nameMenu: "Email",
    icon: "mdi-email-outline",
    path: "/email",
  },
  {
    id: 4,
    nameMenu: "Todo",
    icon: "mdi-clipboard-check-outline",
    path: "/todo",
  },
  {
    id: 5,
    nameMenu: "Settings",
    icon: "mdi-cog",
    path: "/settings",
  },
  {
    id: 6,
    nameMenu: "Faq",
    icon: "mdi-help-circle-outline",
    path: "/faq",
  },
  {
    id: 7,
    nameMenu: "Logout",
    icon: "mdi-logout",
    path: "/log-out",
  },
];

export const listMenuHeaderBar: MenuListHeader[] = [
  {
    id: 1,
    nameMenu: "Message",
    icon: "mdi-chat-processing-outline",
    path: "/message",
    numOf: 10,
  },
  {
    id: 2,
    nameMenu: "Notify",
    icon: "mdi-bell-ring-outline",
    path: "/notify",
    numOf: 3,
  },
];

export const profileUser: ProfileUser = {
  nameUser: "Hibo Foods",
  imagePath: imgUser,
};
