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
    vueIcon,
    html,
    css,
    javascript
} from '@/assets/stack-icons/index'
import { MapPinIcon, EnvelopeOpenIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'

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
        icon: html
    },
    {
        id: "stack-2",
        icon: css
    }
]

export const stack2 = [
    {
        id: "stack2-1",
        icon: javascript
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
        icon: sass
    },
    {
        id: "stack5-3",
        icon: bootstrap
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
            },
            {
                id: 'stack-4',
                name: 'MUDBLAZOR',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
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
            },
            {
                id: 'stack-4',
                name: 'MUDBLAZOR',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
            }
        ],
    },
    {
        id: 'project-3',
        title: 'Online Event Registration',
        description: 'A digital platform designed to facilitate the seamless registration process for citizens attending agency-hosted events and activities. Through this system, individuals can easily sign up for events, workshops, and seminars, providing necessary information and preferences.',
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
            },
            {
                id: 'stack-4',
                name: 'MUDBLAZOR',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
            }
        ],
    },
    {
        id: 'project-4',
        title: 'Document Tracking System',
        description: 'A tracking system designed to efficiently manage and monitor the flow of important documents within the institution. It streamlines processes such as submission, review, approval, ensuring transparency, accountability, and compliance with relevant regulations.',
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
            },
            {
                id: 'stack-4',
                name: 'VUETIFY',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
            }
        ],
    }

]

export const contactList = [
    {
        id: 1,
        title: 'Location',
        description: 'Hagonoy, Bulacan, PH',
        icon: MapPinIcon,
        link: 'https://maps.app.goo.gl/PGcCXJhjycSChDia8',
    },
    {
        id: 2,
        title: 'Mail',
        description: 'delarosajerick26@gmail.com',
        icon: EnvelopeOpenIcon,
        link: 'mailto: delarosajerick26@gmail.com',
    },
    {
        id: 3,
        title: 'Resume',
        description: 'Dela Rosa, Jerick T.',
        icon: DocumentTextIcon,
        link: '/downloads/Dela Rosa, Jerick T. - CV 2024.pdf',
    }
]