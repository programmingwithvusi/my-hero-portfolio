// src/data/projects.ts
export interface Project {
    title: string;
    stack: string;
    description: string;
    link: string;
    refLink: string;
    category: 'Web' | 'Mobile' | 'QA Automation';
}

export const projects: Project[] = [
    {
        title: 'PCClarity',
        stack: '.NET 8 · React · TypeScript · Stripe · Claude API · WMI',
        description:
            'Windows SaaS application for PC health monitoring and diagnostics. Features a real WMI-based backend, React/Vite frontend, Stripe subscription billing (R149/month Pro plan), and an AI assistant powered by the Claude API.',
        link: 'https://pcclarity-app.netlify.app',
        refLink: "#",
        category: 'Web',
    },
    /*
    {
        title: 'PCClarity',
        stack: '.NET 8 · React · TypeScript · Stripe · Claude API · WMI',
        description:
            'Windows SaaS application for PC health monitoring and diagnostics. Features a real WMI-based backend, React/Vite frontend, Stripe subscription billing (R149/month Pro plan), and an AI assistant powered by the Claude API.',
        link: 'https://programmingwithvusi.github.io/my-website/#skills',
        category: 'Web',
    },
    */
    {
        title: 'MechanicalRepairApp',
        stack: 'React · Vite · TypeScript · Node.js · JavaScript · Express · SQLite/ Postgres · Netlify-Frentend · Render-Backend',
        description:
            'This project is a mechanical repair management app that tracks vehicles and repair jobs, supports database seeding, and deploys via Render and Netlify for seamless full‑stack hosting and API communication.',
        link: 'https://mechanical-repair-app.netlify.app',
        refLink: "https://playwright-showcase.netlify.app/",
        category: 'Web',
    },
    {
        title: 'SciCalcApp - Vercel',
        stack: 'Apache Cordova · JavaScript · Android',
        description:
            'Cross-platform mobile calculator and system monitor. Covers physics calculators (E=mc², KE, heat transfer), battery and network monitoring, localStorage persistence, and a self-test suite — built through a five-chapter structured progression.',
        link: 'https://scicalcapp.vercel.app/',
        refLink: 'https://scicalcapp.vercel.app/',
        category: 'Mobile',
    },
    {
        title: 'PlaywrightTests',
        stack: 'C# · Playwright · MSTest · .NET 10',
        description:
            'Automated end-to-end browser testing project using Microsoft Playwright with MSTest and C#, targeting .NET 10. Covers test discovery, NuGet package configuration, and browser automation for web application QA.',
        link: 'https://mechanical-repair-app.netlify.app/playwright-report/',
        refLink: "#",
        category: 'QA Automation',
    },
    {
        title: 'PlaywrightTestsCodeSnipet',
        stack: 'C# · Playwright · MSTest · .NET 10',
        description: 'The code snippet demonstrates a Playwright test case in C# using MSTest. It automates browser interactions, including navigation, element selection, and assertions, to validate web application functionality.',
        link: 'https://playwright-showcase.netlify.app',
        refLink: "#",
        category: 'QA Automation',
    },
    {
        title: 'ERP QA Automation',
        stack: 'Jenkins · SYSPRO Business Objects · Test Planning',
        description:
            'Automated business object regression pipelines at SYSPRO using Jenkins. Authored the standard test plan template library adopted across the QA team — reducing manual regression overhead across major ERP release cycles.',
        link: '#',
        refLink: "#",
        category: 'QA Automation',
    },
];