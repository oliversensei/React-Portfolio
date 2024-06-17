import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import uiImg from '../../assets/images/design.png';
import appsImg from '../../assets/images/apps.png';

import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import javascript from '../../assets/icons/javascript.png';
import bootstrap from '../../assets/icons/bootstrap.png';
import php from '../../assets/icons/php.png';
import nodejs from '../../assets/icons/nodejs.png';
import Vue from '../../assets/icons/Vue.png';
import react from '../../assets/icons/react.png';
import mongodb from '../../assets/icons/mongodb.png';
import angular from '../../assets/icons/angular.png';

export const servicesData = [
  {
    title: "Frontend Development",
    description: "Frontend development focuses on creating the visual and interactive parts of websites or applications using HTML, CSS, and JavaScript.",
    imgUrl: frontendImg,
    aos: "fade-right",
    aosDuration: "1200"
  },
  {
    title: "Backend Development",
    description: "Backend Development involves building the server-side logic, databases, and APIs that enable the frontend to function and interact with data.",
    imgUrl: backendImg,
    aos: "fade-left",
    aosDuration: "1300"
  },
  {
    title: "UI/UX Design",
    description: "UI-UX design concentrates on enhancing user satisfaction by improving usability, accessibility, and the overall experience during interaction with the product.",
    imgUrl: uiImg,
    aos: "fade-right",
    aosDuration: "1400"
  },
  {
    title: "Apps Development",
    description: "Apps Development refers to creating software applications that run on mobile devices or desktops, ensuring they are functional, intuitive, and meet user needs.",
    imgUrl: appsImg,
    aos: "fade-left",
    aosDuration: "1500"
  }
];

export const techStack = [
  { name: "Html-5", imgUrl: html },
  { name: "CSS-3", imgUrl: css },
  { name: "Javascript", imgUrl: javascript },
  { name: "Bootstrap", imgUrl: bootstrap },
  { name: "Php", imgUrl: php },
  { name: "Node.js", imgUrl: nodejs },
  { name: "Vue.js", imgUrl: Vue },
  { name: "React.js", imgUrl: react },
  { name: "Angular", imgUrl: angular },
  { name: "MongoDB", imgUrl: mongodb }
];
