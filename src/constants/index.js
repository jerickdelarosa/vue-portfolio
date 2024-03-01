import { githubLogo, linkedinLogo } from '@/assets/icons/index'
import {
    angular,
    aspnet,
    blazor,
    bootstrap,
    dotnet,
    laravel,
    sass,
    tailwind,
    typescript,
    vueIcon
} from '@/assets/stack-icons/index'

export const navLinks = [
    {
        id: "home",
        name: "Home",
        href: '#home',
    },
    {
        id: "about",
        name: "About",
        href: '#about',
    },
    {
        id: "project",
        name: "Projects",
        href: '#projects',
    },
    {
        id: "contact",
        name: "Contact",
        href: '#contact',
    },
];

export const footerLinks = [
    {
        id: "media-1",
        name: "linkedin",
        href: "https://www.linkedin.com/in/delarosa-jerick-t/",
        icon: linkedinLogo
    },
    {
        id: "media-2",
        name: "github",
        href: "https://github.com/jerickdelarosa",
        icon: githubLogo
    }
    
]

export const stack1 = [
    {
        id: "stack-1",
        icon: vueIcon
    },
    {
        id: "stack-2",
        icon: angular
    }
]

export const stack2 = [
    {
        id: "stack2-1",
        icon: typescript
    },
    {
        id: "stack2-2",
        icon: typescript
    }
]

export const stack3 = [
    {
        id: "stack3-1",
        icon: vueIcon
    },
    {
        id: "stack3-2",
        icon: angular
    },
    {
        id: "stack3-3",
        icon: blazor
    }
]

export const stack4 = [
    {
        id: "stack4-1",
        icon: laravel
    },
    {
        id: "stack4-2",
        icon: aspnet
    }
]

export const stack5 = [
    {
        id: "stack5-1",
        icon: tailwind
    },
    {
        id: "stack5-2",
        icon: bootstrap
    },
    {
        id: "stack5-3",
        icon: sass
    }
]