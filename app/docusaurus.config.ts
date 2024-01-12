import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'MOERP',
    tagline: 'MOERP STUDIO : Enterprise Resource Planning with odoo version 17.',
    favicon: 'img/MOERP.ico',
    organizationName: 'Majin',
    projectName: 'MOERP STUDIO',
    url: 'https://odoo17.majin.xyz',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'th',
        locales: ['th'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/majins2532/project-website-docusaurus/tree/main/app/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/majins2532/project-website-docusaurus/tree/main/app/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'MOERP',
            logo: {
                alt: 'MOERP Logo',
                src: 'img/MOERP.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'LearningSidebar',
                    position: 'left',
                    label: 'Learning',
                },
                {
                    type: 'docSidebar',
                    position: 'left',
                    sidebarId: 'PythonSidebar',
                    label: 'Python',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://odoo17.majin.xyz',
                    label: 'Odoo17',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Learning Odoo 17.',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/MaJinS2532',
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/in/saharat-iamjaeng-082bb31b6',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/majins2532',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} MOERP, Inc.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
