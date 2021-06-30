import {IconType} from "react-icons";

import {ImBook, ImCog, ImFire, ImHammer, ImHammer2, ImNewspaper, ImTruck, ImUserCheck, ImUsers} from "react-icons/im";


export const Configuration: ConfigurationProps = {
    company: {
        name: "КП \"Кременчукводоканал\".",
        department: "Охорона праці",
        logoImage: "/resources/img/logo.jpeg"
    },
    navLinks: [
        {
            icon: ImNewspaper,
            title: "Головна сторінка",
            src: "/"
        },
        {
            icon: ImUsers,
            title: "Працівники",
            src: "/workers"
        },
        {
            icon: ImHammer2,
            title: "Порушення",
            src: "/temp"
        },
        {
            icon: ImTruck,
            title: "Медогляд",
            src: "/temp"
        },
        {
            icon: ImFire,
            title: "Травматизм",
            src: "/temp"
        },
        {
            icon: ImBook,
            title: "Приписи",
            src: "/temp"
        },
        {
            icon: ImHammer,
            title: "Обладнання",
            src: "/temp"
        },
        {
            icon: ImUserCheck,
            title: "Інструктування",
            src: "/temp"
        },
        {
            icon: ImCog,
            title: "Debug board",
            src: "/debug"
        }
    ]
}

type ConfigurationProps = {
    company: { name: string, department: string, logoImage: string },
    navLinks: Array<{ icon: IconType, title: string, src: string }>
}