export interface NameMenuNavType {
    id: number,
    nameMenu: string,
    icon?: string,
    path?: string,
    children?: NameMenuNavType[]
}

export interface MenuListProfile {
    id: number,
    nameMenu: string,
    icon: string,
    path: string
}

export interface MenuListHeader {
    id: number,
    nameMenu: string,
    icon: string,
    path: string,
    numOf: number
}

export interface ProfileUser {
    nameUser: string,
    imagePath: string
}
