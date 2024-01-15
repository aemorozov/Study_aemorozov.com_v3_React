import { FixTildaBugs } from "../pages/Development/FixTildaBugs/FixTildaBugs";


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
        imgUrl: "img/photo_2023-08-23_22-46-34.jpg",
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
        imgUrl: "img/photo_2023-08-23_22-46-32.jpg",
        alt: "Aleksei Morozov - Traveling",
        title: menuItems.traveling.name,
        link: menuItems.traveling.url,
        text: `This part is about travels in my life. After developing my favorite thing is travel. Now I live in Yerevan, Armenia 
        and every weekend I go to the mountains or travel other interesting places. In Armenia I start my little travel blog
        and I will write here about some interesting trips. For more photos, stories and videos you can follow my socials.`,
    },
    {
        imgUrl: "img/photo_2023-08-31_11-20-42.jpg",
        alt: "Aleksei Morozov - Blog",
        title: menuItems.blog.name,
        link: menuItems.blog.url,
        text: `Here I write about some interesting things about my life, work and travel. There are mixed content and you can find here random post and themes.`,
    },
    {
        imgUrl: "img/Screenshot_2023-08-31_113219.png",
        alt: "Aleksei Morozov - Contacts",
        title: menuItems.contacts.name,
        link: menuItems.contacts.url,
        text: `Contacts and feedback form.`,
    },
];

export const forDevPage = [
    {
        imgUrl: "img/forDevPage/AnyDesk_Logo_red.png",
        alt: "AnyDesk for my friends",
        title: "AnyDesk",
        description: "Fast download link. This is remote connection app.",
        version: "7.1.16",
        link: window.location.origin + "../programs/anydesk-7-1-16.exe",
    },
    {
        imgUrl: "img/forDevPage/GWXU70gOyWQVziFvkcmL.jpg",
        alt: "Deleting Avast app",
        title: "Avast Clear",
        description: "Fast download link. App for delete Avast Antivirus.",
        version: "N/A",
        link: window.location.origin + "../programs/avastclear.exe",
    },
    {
        imgUrl: "img/forDevPage/f3b904166cd767a7c2ba19204435ad6e.png",
        alt: "Auslogics Boostspeed 5.5.1.0",
        title: "BoostSpeed",
        description: "Fast download link. App for clear Windows.",
        version: "5.5.1.0",
        link: window.location.origin + "../programs/Auslogics_BoostSpeed_5.5.1.0.zip",
    },
    {
        imgUrl: "img/forDevPage/cam-box-164x231-1.png",
        alt: "Free cam 8",
        title: "Free Cam",
        description: "Fast download link. App for screen record.",
        version: "8.7.0",
        link: window.location.origin + "../programs/free_cam_ru_8_7_0.msi",
    },
    {
        imgUrl: "img/forDevPage/PlhlF0j9VbFwmGZvrf37Vg.jpeg",
        alt: "WinRAR",
        title: "WinRAR",
        description: "Fast download link. Classic WinRAR.",
        version: "5.2.0",
        link: window.location.origin + "../programs/winrar-x64-520.exe",
    },
    {
        imgUrl: "img/forDevPage/Wo-Mic-Apk-Download.webp",
        alt: "wo mic client setup",
        title: "WO Mic",
        description: "Fast download link. You can use your phone as laptop's microphone.",
        version: "N/A",
        link: window.location.origin + "../programs/wo_mic_client_setup.exe",
    },
];

export const devPosts = [
    {
        imgUrl: "img/forDevPage/1643634019_14-papik-pro-p-tilda-logotip-14.png",
        alt: "Fix Tilda bugs",
        title: "Fix Tilda bugs",
        date: "12.10.2023",
        text: `As my mind Tilda is the best constructor for websites, but I can find bugs anywhere, and Tilda is not exception! 
        When I made one of the commercial site, I found three bugs on this platform and report about these Tilda support team.`,
        link: "/development/fix-tilda-bugs",
        post: 'Text for post',
        element: <FixTildaBugs />
    },
];
