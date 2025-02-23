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

export const exampleAST = [
    {
        "id": 8,
        "name": "new section",
        "children": [
            {
                "childId": "child-0",
                "children": [
                    {
                        "type": "paragraph",
                        "children": [
                            {
                                "text": "new section"
                            }
                        ]
                    }
                ],
                "className": ""
            },
            {
                "childId": "child-1",
                "children": [
                    {
                        "type": "image",
                        "children": [
                            {
                                "src": "https://nbfkesfgzlbgewtvqwbb.supabase.co/storage/v1/object/public/portfolio-media/1738669329986-learning%20map.jpg",
                                "text": "1738669329986-learning map.jpg"
                            }
                        ]
                    }
                ],
                "className": ""
            }
        ],
        "isActive": false,
        "description": "this is a new section",
        "layout": "1/2 flex justify-start flex-wrap items-start gap-3",
        "metadata": {
            "createdAt": "1738669198776",
            "updatedAt": "1738669198776"
        }
    },
    {
        "id": 9,
        "name": "first section",
        "children": [
            {
                "childId": "child-0",
                "children": [
                    {
                        "type": "heading-one",
                        "children": [
                            {
                                "text": "Big Title"
                            }
                        ]
                    },
                    {
                        "type": "paragraph",
                        "children": [
                            {
                                "text": " and some text bellow"
                            }
                        ]
                    }
                ],
                "className": ""
            }
        ],
        "isActive": true,
        "description": "this is the first section created by the completed version of the section builder system",
        "layout": "1/1 w-full flex flex-wrap justify-start items-start gap-3",
        "metadata": {
            "createdAt": "1739092080461",
            "updatedAt": "1739092080461"
        }
    }
]
