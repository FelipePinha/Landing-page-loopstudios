import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string,
            black: string,
            darkGray: string,
            veryDarkGray: string
        }
    }
}

export interface MobileMenuProps {
    menuIsOpen: boolean
}