/**
 * This file is used to store static data that is used in the application.
 */

export const landingPageCardData = [
    {
        title: "Programming Languages",
        content: "HTML, CSS, JavaScript, TypeScript",
    },
    {
        title: "Frontend",
        content: "React, Next.js, Tailwind CSS",
    },
    {
        title: "Version Control",
        content: "Git, GitHub",
    },
    {
        title: "Extra Skills",
        content: "Python, PHP, C, C++",
    }
]

export const projects = [
    {
        title: "Project one",
        description: "This is a project description",
        img: "https://via.placeholder.com/150",
        link: "https://www.google.com"
    },
    {
        title: "Project two",
        description: "This is a project description",
        img: "https://via.placeholder.com/150",
        link: "https://www.google.com"
    },
    {
        title: "Project three",
        description: "This is a project description",
        img: "https://via.placeholder.com/150",
        link: "https://www.google.com"
    }
]

export const navLinks = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Contact",
        link: "#contact",
    },
]

export const adminNavLinks = [
    {
        href: "/admin",
        name: "Home",
        description: "some text here",
        subLinks: [],
        flag: "ongoing",
    },
    {
        href: "/admin/portfolio",
        name: "Portfolio",
        description: "some text here",
        subLinks: [
            {
                href: "/admin/header",
                name: "Header",
                description: "some text here",
                subLinks: [],
            },
            {
                href: "/admin/sections",
                name: "Sections",
                description: "some text here",
                subLinks: [],
            },
            {
                href: "/admin/footer",
                name: "Footer",
                description: "some text here",
                subLinks: [],
            },
            {
                href: "/admin/components",
                name: "Components",
                description: "some text here",
                subLinks: [],
            },
        ],
        flag: "ongoing",
    },
    {
        href: "/admin/blog",
        name: "Blog",
        description: "some text here",
        subLinks: [],
        flag: "disabled",
    }
]

