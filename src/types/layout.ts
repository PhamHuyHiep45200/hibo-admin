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
