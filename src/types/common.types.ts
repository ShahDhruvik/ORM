import { Dropdowns, SideBarItemChildNames, SideBarItemNames } from "@/utils/constants";
type EnumValues<T extends Record<string, string | number>> = T[keyof T];
export type RequestMethods = {
    Get: 'get',
    Post: 'post'
}

export type SearchDropdown = {
    _id: string,
    label: string
}
export type SideBarType = {
    itemName: EnumValues<typeof SideBarItemNames>,
    itemChildren?: {
        itemName: EnumValues<typeof SideBarItemChildNames>,
    }[]
}[]

export type DropdownOptions = keyof typeof Dropdowns;
