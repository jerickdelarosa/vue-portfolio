import { githubLogo, linkedinLogo } from '@/assets/icons/index'
import {
    angular,
    aspnet,
    blazor,
    bootstrap,
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

export const projectList = [
    {
        id: 'project-1',
        title: 'Records Management System',
        description: 'A management system that allows Philippine Charity Sweepstakes Office to process every record and document. The system makes non-confidential papers and other PCSO content searchable, readable, and printable for the general public over the intranet.',
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET CORE',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            }
        ],
    },
    {
        id: 'project-2',
        title: 'Charity Services Information System',
        description: 'An information system designed to support people looking for financial assistance for medical problems. It is based on the idea of increasing their funds and is carried out in collaboration with public and private hospitals, clinics, pharmacies, and other partners.',
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET CORE',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            }
        ],
    },
    {
        id: 'project-3',
        title: 'Online Event Registration',
        description: 'A website application for Philippine Charity Sweepstakes Office to track, process and dispose organizational document transactions.',
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET CORE',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            }
        ],
    },
    {
        id: 'project-4',
        title: 'Document Tracking System',
        description: 'A website application for Bulacan State University that tracks their organizational document transactions.',
        tech: [
            {
                id: 'stack-1',
                name: 'VUE',
            },
            {
                id: 'stack-2',
                name: 'LARAVEL',
            },
            {
                id: 'stack-3',
                name: 'MySQL',
            }
        ],
    }
]