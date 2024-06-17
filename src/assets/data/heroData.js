import heroImg from '../../assets/images/oliverr.jpg';
import CV from '../../assets/images/CV.pdf';

const heroData = {
  name: "John Oliver",
  jobTitle: "Web Developer",
  description: "I'm John Oliver, a third-year college student studying Information System, deeply enthusiastic about web development.",
  email: "martillosjohn@gmail.com",
  cvLink: CV,
  image: heroImg,
  socialLinks: [
    {
      href: "https://www.youtube.com/",
      icon: "ri-youtube-line",
      label: "YouTube"
    },
    {
      href: "https://github.com/JohnOliver1212/JohnOliver1212",
      icon: "ri-github-fill",
      label: "GitHub"
    },
    {
      href: "https://www.facebook.com/Martillosjohn",
      icon: "ri-facebook-line",
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/john_0liverrr/",
      icon: "ri-instagram-line",
      label: "Instagram"
    }
  ],
  statistics: [
    { end: 3, suffix: '+', label: 'Years of Experience' },
    { end: 100, suffix: '%', label: 'Success Rate' },
    { end: 150, suffix: '+', label: 'Happy Clients' },
    { end: 30, suffix: '+', label: 'Projects Completed' }
  ]
};

export default heroData;
