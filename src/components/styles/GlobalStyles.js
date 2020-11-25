import { createGlobalStyle } from 'styled-components'
import { themes } from './ColorStyles'

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${themes.light.backgroundColor};

        @media (prefers-color-scheme: dark) {
            background: ${themes.dark.backgroundColor};
            color: ${themes.dark.text1};
        }
    }
    a {
        color: ${themes.light.text1};
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1};
            border-color: ${themes.light.backgroundColor};
        }
    }

    a:hover {
        color: ${themes.dark.text1};
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1};
            border-color: ${themes.light.backgroundColor};
        }
    }

    button {
        color: ${themes.light.text1}!important;
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1}!important;
            border-color: ${themes.light.backgroundColor};
        }
    }

    button:hover {
        border-color: ${themes.dark.backgroundColor};
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.25);
        background-color: #333;
        color: white!important;

        @media (prefers-color-scheme: dark) {
            box-shadow: 0 10px 20px rgba(255,255,255,255.25)!important;
            color: ${themes.dark.text1}!important;
            background-color: #333;
            border-color: ${themes.light.backgroundColor};
        }
    }
    li.tab-list-item{
        color: ${themes.light.text1};
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1};
            border-color: ${themes.light.backgroundColor};
        }
    }
`