import { Link } from "react-router-dom";
import { Post } from "../components/Post/Post";

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
        title: "Avast Cleaner",
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


// Стили для JSX в постах
const stylesForPostImg = {
    width: 100 + "%",
    marginBottom: 30 + "px",
    borderRadius: 20 + "px",
    boxShadow: "1px 1px 5px 5px rgba(34, 60, 80, 0.08)",
    height: 200 + "px",
    objectFit: "cover"
}

const links = {
    display: "block",
    width: "max-content",
    padding: "10px 30px",
    minWidth: 80 + "px",
    color: "#eee",
    background: "#006d77",
    borderRadius: "20px",
    margin: "30px auto 30px auto"
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
        fullJSX: () => {
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
        element: <Post id={0} />
    },
    {
        title: "Little JS scripts",
        imgUrl: "img/forDevPage/Screenshot2024-02-21102152.png",
        alt: "Little JS scripts",
        date: "20.02.2024",
        text: `This post is about my scripts for some project, which I did from 2020 to 2023. `,
        link: "/development/little-JS-scripts",
        fullJSX: () => {
            return (
                <>
                    <ul>
                        <li>
                            <p><a href="/archive/CircleText/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>CircleText (new tab) </strong>
                            </a>
                                - if your designer is crazy and want to add circle text into the web project.</p>
                            <p><a href="/archive/CircleText/CircleText.zip" target="_blank" style={{ color: "#003057" }}>Download CircleText (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/DragAndDrop/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>DragAndDrop (new tab) </strong>
                            </a>
                                - do you need drag and drop any objects in your project? It's easy.</p>
                            <p><a href="/archive/DragAndDrop/DragAndDrop.zip" target="_blank" style={{ color: "#003057" }}>Download DragAndDrop (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/DynamicHorizontalMenu/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>DynamicHorizontalMenu (new tab) </strong>
                            </a>
                                - classic horizontal menu, but stop, no, it's dynamic!</p>
                            <p><a href="/archive/DynamicHorizontalMenu/DynamicHorizontalMenu.zip" target="_blank" style={{ color: "#003057" }}>Download DynamicHorizontalMenu (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/DynamicMobileMenu/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>DynamicMobileMenu (new tab) </strong>
                            </a>
                                - mobile menu with JS. Now I do it with CSS only, but you can use JS.</p>
                            <p><a href="/archive/DynamicMobileMenu/DynamicMobileMenu.zip" target="_blank" style={{ color: "#003057" }}>Download DynamicMobileMenu (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/Opacity-text/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>OpacityText (new tab) </strong>
                            </a>
                                - code from real project, minimalistic and cool.</p>
                            <p><a href="/archive/Opacity-text/Fade-in_text_aemorozov.zip" target="_blank" style={{ color: "#003057" }}>Download OpacityText (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/PrintingTextLines/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>PrintingTextLines (new tab) </strong>
                            </a>
                                - do you need printing text with two lines? Easy.</p>
                            <p><a href="/archive/PrintingTextLines/PrintingTextLines.zip" target="_blank" style={{ color: "#003057" }}>Download PrintingTextLines (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/SliderForReviews/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>SliderForReviews (new tab) </strong>
                            </a>
                                - one of the sliders with popup. Some times I use it in real projects.</p>
                            <p><a href="/archive/SliderForReviews/TestimonialsSliderAndPopup.zip" target="_blank" style={{ color: "#003057" }}>Download SliderForReviews (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/SliderForWeb/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>SliderForWeb (new tab) </strong>
                            </a>
                                - beautiful slider for some image cards.</p>
                            <p><a href="/archive/SliderForWeb/SliderForWeb.zip" target="_blank" style={{ color: "#003057" }}>Download SliderForWeb (zip)</a></p>
                        </li>
                        <li>
                            <p><a href="/archive/SuperSlider/index.html" target="_blank" style={{ color: "#003057" }}>
                                <strong>SuperSlider (new tab) </strong>
                            </a>
                                - cool slider for the little web-project.</p>
                            <p><a href="/archive/SuperSlider/SuperSlider.zip" target="_blank" style={{ color: "#003057" }}>Download SuperSlider (zip)</a></p>
                        </li>

                    </ul>
                </>
            )
        },
        element: <Post id={1} />
    },
    {
        title: "DocInfo",
        imgUrl: "img/forDevPage/Screenshot2024-02-22103228.png",
        alt: "DocInfo",
        date: "22.02.2024",
        text: `This is a little medtech startup, which I work fo free, because I like do something cool. 
        I do frontend with React, use API, authorization, privet routes and create all of the interface.`,
        link: "/development/docinfo",
        fullJSX: () => {
            return (
                <>
                    <p>
                        One day I saw a message in a telegram, that one guy looking for frontend developers for his project.
                        We met and talked about his idea, I liked it and I started working on this project. We do it because we want to
                        get an experience in teamwork and React. We have a frontend, backend, QA guys, who help us. We want to create
                        the real product for help real clinics optimizing their business process.
                    </p>
                    <p>
                        All the time I work with design, colors, content, API and logic. This work is fun for me and I like do that.
                    </p>
                    <a href="https://docinfoam-clinics.netlify.app/" target="_blank" style={links}>Open app (new tab)</a>
                    <a href="https://github.com/DocInfoAM/frontend" target="_blank" style={links}>Git (new tab)</a>
                </>
            )
        },
        element: <Post id={2} />
    },
    {
        title: "Snake_1.5",
        imgUrl: "img/forDevPage/Screenshot2024-02-19155022.png",
        alt: "Snake_1.5",
        date: "19.02.2024",
        text: `This is my first big project, which I wrote in 2020 with vanilla JS and a lot of math operations. 
        From time to time I really play this game and I like it, you should try it too.`,
        link: "/development/snake_game_1.5",
        fullJSX: () => {
            return (
                <>
                    <p>
                        That game is my real project. I did it in night after work, not every day, but regularly,
                        because I like JS and wanted to create something cool. And I did it.
                    </p>
                    <strong>Snake_1.0</strong>
                    <ul>
                        <li>the logic of movement to the right, left, up, down has been created</li>
                        <li>PC keyboard control created</li>
                        <li>the logic of transitions at field boundaries was created</li>
                        <li>the logic for the random appearance of a target has been created</li>
                        <li>the logic for catching a target has been created</li>
                        <li>a final screen with a score and a new game button has been created</li>
                        <li>removed a bug when random squares appeared in the snake’s body</li>
                        <li>bugs with transitions at field boundaries have been fixed</li>
                        <li>tail collision logic created</li>
                    </ul>

                    <strong>Snake_1.1</strong>
                    <ul>
                        <li>added field dimension (3 versions)</li>
                        <li>added start screen</li>
                        <li>added the ability to select field size</li>
                        <li>added the ability to select speed</li>
                    </ul>

                    <strong>Snake_1.2</strong>
                    <ul>
                        <li>added the ability to control from the touchscreen</li>
                    </ul>

                    <strong>Snake_1.3</strong>
                    <ul>
                        <li>removed the bug "collision with the tail when quickly changing the direction of movement twice"</li>
                        <li>optimized field and speed selection code, code compressed into 40 lines</li>
                    </ul>

                    <strong>Snake_1.4</strong>
                    <ul>
                        <li>added neon glow</li>
                        <li>moved the repeated code for coloring and extinguishing the color of the snake into a separate function forIAndESquares</li>
                        <li>decided that choosing 2 conditions before the game is too boring and introduced a choice of Difficulty, which changes the size of the field and speed</li>
                    </ul>

                    <strong>Snake_1.5</strong>
                    <ul>
                        <li>the speed of the snake increases by 2% at all levels for each square eaten. This can be tracked in the console.</li >
                    </ul >
                    <a href="https://www.aemorozov.com/archive/Snake/Snake_1.5/index.html" target="_blank" style={links}>Play (new tab)</a>
                </>
            )
        },
        element: <Post id={3} />
    },

];

export const travelPosts = [
    {
        title: "Berlin 2020",
        imgUrl: "img/forDevPage/1643634019_14-papik-pro-p-tilda-logotip-14.png",
        alt: "Berlin",
        date: "24.02.2024",
        text: `As my mind Tilda is the best constructor for websites, but I can find bugs anywhere, 
            and Tilda is not exception! When I made one of the commercial site, I found three bugs on this 
            platform and report about these Tilda support team.`,
        link: "/traveling/berlin-2020",
        fullJSX: () => {
            return (
                <p>Berlin 2020</p>
            )
        },
        element: <Post id={0} />
    }
]