import pasir from "../../public/project/pasir.png";
import Dago_Kopedia from "../../public/project/1.Dago_Kopedia.png";
import SMA_Bandung from "../../public/project/2.SMA_Bandung.png";
import Redesain_GEO_MAPID from "../../public/project/3.Redesain_GEO_MAPID.png";
import Map_Transportasi_Jakarta from "../../public/project/4.Map_Transportasi_Jakarta.png";
import Dashboard_VO from "../../public/project/5.Dashboard_VO.png";
import Kopi_Dimedja from "../../public/project/6.Kopi_Dimedja.png";
import Voffe from "../../public/project/7.Voffe.png";
import Sekolah_Dasar from "../../public/project/8.Sekolah_Dasar.png";
import Vowatch from "../../public/project/9.Vowatch.png";
import UiVOFEE1 from "../../public/project/UI-VOFFEE-1.png";
import UiVOFEE2 from "../../public/project/UI-VOFFEE-2.png";
import UiMicasa1 from "../../public/project/UI-MICASA-1.png";
import UiMicasa2 from "../../public/project/UI-MICASA-2.png";
import UiSidebar from "../../public/project/UI-Sidebar-mapid.png";
import UiVape from "../../public/project/15.Vape_Storage.png";

export const list_project = [
  {
    id: 124,
    title: "Pasir",
    category: "web",
    techology: ["nextJs", "scss", "axios"],
    desc: "A Point-of-Sale web application built with Next.js, Axios, and SCSS, designed to manage transactions, products, and sales efficiently for small businesses.",
    photo: pasir,
    linkWeb: "https://fe-pasir.vercel.app/",
    linkGit: "https://github.com/movinoary",
  },
  {
    id: 123,
    title: "Kopi dimedja",
    category: "web",
    techology: ["reactJs", "scss", "axios"],
    desc: "A modern and responsive landing page for a local coffee shop. Built using React and SCSS, it showcases brand identity and menu highlights.",
    photo: Kopi_Dimedja,
    linkWeb: "https://kopi-dimedja.netlify.app/",
    linkGit: "https://github.com/movinoary",
  },
  {
    id: 1,
    title: "Dago Kopedia",
    category: "web",
    techology: ["reactJs", "scss", "axios", "mapbox"],
    desc: "A geospatial web directory for coffee shops in the Dago area. Built with React and Mapbox, this app helps users find and explore local cafes easily.",
    photo: Dago_Kopedia,
    linkWeb: "https://kopipedia.netlify.app/",
    linkGit: "https://github.com/movinoary/-Projek-Coffe_Map",
  },
  {
    id: 3,
    title: "Redesain GEO.MAPID",
    category: "web",
    techology: ["reactJs", "scss", "redux"],
    desc: "A UX/UI redesign project for the geo.mapid platform, improving user interface and state management using React, SCSS, and Redux for better usability.",
    photo: Redesain_GEO_MAPID,
    linkWeb: "https://redesain-geo.netlify.app/",
    linkGit: "https://github.com/movinoary/Port_Redesign_Geo",
  },
  {
    id: 8,
    title: "Sekolah Dasar",
    category: "web",
    techology: ["reactJs", "scss", "axios", "framer-motion", "react-query"],
    desc: "A complete elementary school website featuring a public landing page and a private admin dashboard. Built with React, Axios, React Query, and Framer Motion.",
    photo: Sekolah_Dasar,
    linkWeb: "https://port-sd.netlify.app/",
    linkGit: "https://github.com/movinoary/Port-SD-1C",
  },
  {
    id: 4,
    title: "Map Transportasi Jakarta",
    category: "web",
    techology: ["reactJs", "styled component", "axios", "redux", "mapbox"],
    desc: "A comprehensive map-based web app for navigating transportation routes in Jakarta, using Mapbox and Redux for dynamic spatial features.",
    photo: Map_Transportasi_Jakarta,
    linkWeb: "https://vomap-transportasi.netlify.app/",
    linkGit: "https://github.com/movinoary/Port_Map-Rute",
  },
  {
    id: 5,
    title: "Dashboard VO",
    category: "web",
    techology: ["reactJs", "scss", "redux"],
    desc: "A simple and clean admin dashboard interface for managing user data. Developed using React, Redux, and SCSS for optimal performance and scalability.",
    photo: Dashboard_VO,
    linkWeb: "https://dashboard-vowallet.netlify.app/",
    linkGit: "https://github.com/movinoary/Port_Wallet_Dashboard",
  },
  // {
  //   id: 6,
  //   title: "Kopi Dimedja",
  //   category: "web",
  //   techology: ["nextJs", "scss"],
  //   desc: " ",
  //   photo: Kopi_Dimedja,
  //   linkWeb: "https://coffe-shop-kopi-dimedja.vercel.app/",
  //   linkGit: "https://github.com/movinoary/Port_kopi_dimedja",
  // },
  {
    id: 7,
    title: "Voffe",
    category: "web",
    techology: ["nextJs", "scss"],
    desc: "A sleek, customer-focused landing page for a coffee brand, designed with Next.js and SCSS to deliver a professional and elegant user experience.",
    photo: Voffe,
    linkWeb: "https://voffe-darkbrown.vercel.app/",
    linkGit: "https://github.com/movinoary/Port_coffe_darkbrown",
  },
  {
    id: 2,
    title: "SMA Bandung",
    category: "web",
    techology: ["reactJs", "tailwind", "axios", "mapbox"],
    desc: "A GIS-based web app for high schools in Bandung, offering features like isochrone and buffer analysis using Mapbox. Built with React and Tailwind CSS.",
    photo: SMA_Bandung,
    linkWeb: "https://map-sma-bandung.netlify.app/",
    linkGit: "https://github.com/movinoary/Port_map_sma_bandung",
  },
  {
    id: 9,
    title: "VOWatch",
    category: "web",
    techology: ["nextJs", "tailwind", "axios"],
    desc: "A digital catalog platform for saving and browsing movies and series. Developed with Next.js, Axios, and Tailwind CSS, featuring a clean and minimalist UI.",
    photo: Vowatch,
    linkWeb:
      "https://www.figma.com/proto/nHdMXQ1EkJ5zHFodk4ln5d/Untitled?page-id=0%3A1&type=design&node-id=1-2&viewport=797%2C454%2C0.14&t=P6hFPgaCl64LFxu6-1&scaling=min-zoom&mode=design",
    linkGit: "https://github.com/movinoary/Port_VOWatch",
  },
  {
    id: 10,
    title: "Voffee Shop -1",
    techology: [],
    category: "ui desain",
    desc: "",
    photo: UiVOFEE1,
    linkWeb:
      "https://www.figma.com/proto/nHdMXQ1EkJ5zHFodk4ln5d/Untitled?page-id=0%3A1&type=design&node-id=1-2&viewport=797%2C454%2C0.14&t=P6hFPgaCl64LFxu6-1&scaling=min-zoom&mode=design",
    linkGit:
      "https://www.figma.com/proto/L3N4ccXu3dO8wzPjAJ1J1A/Coffe-1?page-id=0%3A1&type=design&node-id=1-2&viewport=567%2C333%2C0.24&t=8tStoFZrzvEGJptb-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design",
  },
  {
    id: 11,
    title: "Voffee Shop - 2",
    techology: [],
    category: "ui desain",
    desc: "",
    photo: UiVOFEE2,
    linkWeb:
      "https://www.figma.com/proto/w3KFV8pr4FKCRmBWDm8t62/VOFEE-2?page-id=0%3A1&type=design&node-id=0-3&viewport=718%2C497%2C0.16&t=ZZc36EzWaLjUfpzo-1&scaling=min-zoom&mode=design",
    linkGit:
      "https://www.figma.com/proto/w3KFV8pr4FKCRmBWDm8t62/VOFEE-2?page-id=1%3A2&type=design&node-id=1-3&viewport=718%2C497%2C0.16&t=DvIE1dmsuHqOboNh-1&scaling=min-zoom&mode=design",
  },
  {
    id: 12,
    title: "Micasa - 1",
    techology: [],
    category: "ui desain",
    desc: "",
    photo: UiMicasa1,
    linkWeb:
      "https://www.figma.com/proto/vNA8hcuDtRXOrTBhqL4zAd/MICASA---1?page-id=0%3A1&type=design&node-id=1-2&viewport=718%2C497%2C0.17&t=X9S1HHG0hrzAe1xs-1&scaling=min-zoom&mode=design",
    linkGit:
      "https://www.figma.com/proto/vNA8hcuDtRXOrTBhqL4zAd/MICASA---1?page-id=1%3A179&type=design&node-id=1-180&viewport=718%2C497%2C0.17&t=pm28mmoFlBkK7AGZ-1&scaling=min-zoom&mode=design",
  },
  {
    id: 13,
    title: "Micasa - 2",
    techology: [],
    category: "ui desain",
    desc: "",
    photo: UiMicasa2,
    linkWeb:
      "https://www.figma.com/proto/mOV7GfgZF3rzslLWz2KvA6/MICASA---2?page-id=0%3A1&type=design&node-id=1-2&viewport=718%2C497%2C0.22&t=h7yncx2gwT0OU4OM-1&scaling=min-zoom&mode=design",
    linkGit:
      "https://www.figma.com/proto/mOV7GfgZF3rzslLWz2KvA6/MICASA---2?page-id=1%3A161&type=design&node-id=1-162&viewport=718%2C497%2C0.17&t=YehwulujGm20CmFg-1&scaling=min-zoom&mode=design",
  },
  {
    id: 14,
    title: "New Sidebar MAPID",
    techology: [],
    category: "ui desain",
    desc: "",
    photo: UiSidebar,
    linkWeb:
      "https://www.figma.com/proto/7cx23NnoO7Gl2gExnzbeWE/SIDEBAR-MAPID?page-id=0%3A1&type=design&node-id=1-2&viewport=718%2C497%2C0.13&t=uGuqGY9o7gjIRvWE-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design",
    linkGit: "",
  },
  {
    id: 14,
    title: "Kasir",
    techology: [],
    category: "ui desain",
    desc: "",
    photo: UiVape,
    linkWeb:
      "https://www.figma.com/proto/E5V3nsNndKNaN2CPtlC2kQ/KASIR?page-id=0%3A1&type=design&node-id=84-3&viewport=-410%2C-21%2C0.11&t=qs2TLUmKHTsTBAE8-1&scaling=min-zoom&starting-point-node-id=84%3A1220&mode=design",
    linkGit: "",
  },
];
