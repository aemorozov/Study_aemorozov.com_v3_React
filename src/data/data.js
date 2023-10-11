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
        imgUrl: process.env.PUBLIC_URL + "img/photo_2023-08-23_22-46-34.jpg",
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
        imgUrl: process.env.PUBLIC_URL + "img/photo_2023-08-23_22-46-32.jpg",
        alt: "Aleksei Morozov - Traveling",
        title: menuItems.traveling.name,
        link: menuItems.traveling.url,
        text: `This part about travels in my life. After developing my favorite thing is travel. Now I live in Yerevan, Armenia 
        and every weekend I go to the mountains or travel other interesting places. In Armenia I start my little travel blog
        and I will write here about some interesting trips. For more photos, stories and videos you can follow my socials.`,
    },
    {
        imgUrl: process.env.PUBLIC_URL + "img/photo_2023-08-31_11-20-42.jpg",
        alt: "Aleksei Morozov - Blog",
        title: menuItems.blog.name,
        link: menuItems.blog.url,
        text: `Here I write about some interesting things about my life, work and travel. There are mixed content and you can find here random post and themes.`,
    },
    {
        imgUrl: process.env.PUBLIC_URL + "img/Screenshot_2023-08-31_113219.png",
        alt: "Aleksei Morozov - Contacts",
        title: menuItems.contacts.name,
        link: menuItems.contacts.url,
        text: `Contacts and feedback form.`,
    },
];

export const forDevPage = [
    {
        imgUrl: process.env.PUBLIC_URL + "img/forDevPage/AnyDesk_Logo_red.png",
        alt: "AnyDesk for my friends",
        title: "AnyDesk",
        description: "Fast download link. This is remote connection app.",
        version: "7.1.16",
        link: process.env.PUBLIC_URL + "../programs/anydesk-7-1-16.exe"
    },
    {
        imgUrl: process.env.PUBLIC_URL + "img/forDevPage/GWXU70gOyWQVziFvkcmL.jpg",
        alt: "Deleting Avast app",
        title: "Avast Clear",
        description: "Fast download link. App for delete Avast Antivirus.",
        version: "N/A",
        link: process.env.PUBLIC_URL + "../programs/avastclear.exe"
    },
    {
        imgUrl: process.env.PUBLIC_URL + "img/forDevPage/f3b904166cd767a7c2ba19204435ad6e.png",
        alt: "Auslogics Boostspeed 5.5.1.0",
        title: "BoostSpeed",
        description: "Fast download link. App for clear Windows.",
        version: "5.5.1.0",
        link: process.env.PUBLIC_URL + "../programs/Auslogics_BoostSpeed_5.5.1.0.zip"
    },
    {
        imgUrl: process.env.PUBLIC_URL + "img/forDevPage/cam-box-164x231-1.png",
        alt: "Free cam 8",
        title: "Free Cam",
        description: "Fast download link. App for screen record.",
        version: "8.7.0",
        link: process.env.PUBLIC_URL + "../programs/free_cam_ru_8_7_0.msi"
    },
    {
        imgUrl: process.env.PUBLIC_URL + "img/forDevPage/PlhlF0j9VbFwmGZvrf37Vg.jpeg",
        alt: "WinRAR",
        title: "WinRAR",
        description: "Fast download link. Classic WinRAR.",
        version: "5.2.0",
        link: process.env.PUBLIC_URL + "../programs/winrar-x64-520.exe"
    },
    {
        imgUrl: process.env.PUBLIC_URL + "img/forDevPage/Wo-Mic-Apk-Download.webp",
        alt: "wo mic client setup",
        title: "WO Mic",
        description: "Fast download link. You can use your phone as laptop's microphone.",
        version: "N/A",
        link: process.env.PUBLIC_URL + "../programs/wo_mic_client_setup.exe"
    },
]


