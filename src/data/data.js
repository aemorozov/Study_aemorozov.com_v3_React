import { FixTildaBugs } from "../pages/Development/FixTildaBugs/FixTildaBugs";
// import fixTildaBugsImg1 from "/img/Screenshot2024-02-17140144.png"

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
        as well as I work in repair shop with computers and security networks.`,
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
        link: window.location.origin + "/programs/anydesk-7-1-16.exe",
    },
    {
        imgUrl: "img/forDevPage/GWXU70gOyWQVziFvkcmL.jpg",
        alt: "Deleting Avast app",
        title: "Avast Clear",
        description: "Fast download link. App for delete Avast Antivirus.",
        version: "N/A",
        link: window.location.origin + "/programs/avastclear.exe",
    },
    {
        imgUrl: "img/forDevPage/f3b904166cd767a7c2ba19204435ad6e.png",
        alt: "Auslogics Boostspeed 5.5.1.0",
        title: "BoostSpeed",
        description: "Fast download link. App for clear Windows.",
        version: "5.5.1.0",
        link: window.location.origin + "/programs/Auslogics_BoostSpeed_5.5.1.0.zip",
    },
    {
        imgUrl: "img/forDevPage/cam-box-164x231-1.png",
        alt: "Free cam 8",
        title: "Free Cam",
        description: "Fast download link. App for screen record.",
        version: "8.7.0",
        link: window.location.origin + "/programs/free_cam_ru_8_7_0.msi",
    },
    {
        imgUrl: "img/forDevPage/PlhlF0j9VbFwmGZvrf37Vg.jpeg",
        alt: "WinRAR",
        title: "WinRAR",
        description: "Fast download link. Classic WinRAR.",
        version: "5.2.0",
        link: window.location.origin + "/programs/winrar-x64-520.exe",
    },
    {
        imgUrl: "img/forDevPage/Wo-Mic-Apk-Download.webp",
        alt: "wo mic client setup",
        title: "WO Mic",
        description: "Fast download link. You can use your phone as laptop's microphone.",
        version: "N/A",
        link: window.location.origin + "/programs/wo_mic_client_setup.exe",
    },
];

const stylesForPostImg = {
    width: 100 + "%",
    marginBottom: 30 + "px",
    borderRadius: 20 + "px",
    boxShadow: "1px 1px 5px 5px rgba(34, 60, 80, 0.08)"
}

export const devPosts = [
    {
        title: "Fix Tilda bugs",
        imgUrl: "img/forDevPage/1643634019_14-papik-pro-p-tilda-logotip-14.png",
        alt: "Fix Tilda bugs",
        date: "12.10.2023",
        text: `As my mind Tilda is the best constructor for websites, but I can find bugs anywhere, 
        and Tilda is not exception! When I made one of the commercial site, I found three bugs on this 
        platform and report about these Tilda support team.`,
        link: "/development/fix-tilda-bugs",
        post: 'Text for post',
        fullText: () => {
            return (
                <ul>
                    <li>
                        <strong>You can't use 3 languages in the one website.</strong>
                        <p>
                            This problem is strange for me - you can use only one language for the one website (in "html" tag only one
                            option like lang="en"). I fixed it by my little script, which look to page address and change language for
                            real page language.
                        </p>
                        <img style={stylesForPostImg} src="/img/Screenshot2024-02-17140144.png" alt="You can't use 3 languages in the one website." />
                    </li>
                    <li>
                        <strong>Missing closing value quote in the alt tag.</strong>
                        <p>The IM07 block has a problem with the alt attribute of the img tag, it is missing the closing value quote,
                            but only if the blocks are in the correct order. If you check the "Flip horizontally" checkbox, the quote
                            miraculously returns.
                        </p>
                        <img style={stylesForPostImg} src="/img/Screenshot2024-02-17142532.png" alt="Missing closing value quote in the alt tag." />
                    </li>
                    <li>
                        <strong>The height in px is not explicitly specified for images.</strong>
                        <p>
                            In the ME303 and FR206 blocks, the height in px is not explicitly specified for images; all sorts of analyzers
                            and search engine robots usually complain about this. I fixed this with a script that collects similar pictures
                            and forces them to have a height.
                        </p>
                        <img style={stylesForPostImg} src="/img/Screenshot2024-02-17144005.png" alt="The height in px is not explicitly specified for images." />
                    </li>
                </ul >
            )
        },
        element: <FixTildaBugs />
    },
];