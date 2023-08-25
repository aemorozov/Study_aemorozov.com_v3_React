export const menuItems = {
    home: {
        url: "/",
        name: "home",
    },
    development: {
        url: "/development",
        name: "development",
    },
    traveling: {
        url: "/traveling",
        name: "traveling",
    },
    blog: {
        url: "/blog",
        name: "blog",
    },
    contacts: {
        url: "/contacts",
        name: "contacts",
    },
};

export const forIndexPage = [
    {
        imgUrl: require("../img/photo_2023-08-23_22-46-34.jpg"),
        alt: "Aleksei Morozov - Development",
        title: menuItems.development.name,
        link: menuItems.development.url,
        text: `Hello! My name is Aleksei. In this developer part of my life I will write about my projects and work.
        I have various experience in development, computer technologies and repair electronics. 
        Right now I am developing Single Page Applications (SPA) with React, API, JavaScript and other technologies for a little med-tech startup, 
        as well as I work in repair shop with computers and security networks.
        In this block you can download my CV and read more about my professional life.`,
    },
    {
        imgUrl: require("../img/photo_2023-08-23_22-46-32.jpg"),
        alt: "Aleksei Morozov - Traveling",
        title: menuItems.traveling.name,
        link: menuItems.traveling.url,
        text: `This part about travels in my life. After developing my favorite thing is travel. Now I live in Yerevan, Armenia 
        and every weekend I go to the mountains or travel other interesting places. In Armenia I start my little travel blog
        and I will write here about some interesting trips. For more photos, stories and videos you can follow my socials.`,
    },
];
