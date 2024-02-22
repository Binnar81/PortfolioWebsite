import { FaGithub, FaLinkedinIn, FaRegSmileWink } from 'react-icons/fa';
import { HiOutlineMail, HiCode, HiDatabase, HiOutlineDocumentDownload } from 'react-icons/hi';

// Logo Image
const LogoImage = "newSANJAY.png";
const TitleLogo="title.png";

// Profile Image
const profileImage = 'SanjayBinnarProfilePhoto.png';
const devImage='developer.png';

// Name, will display in title, hero section, and footer
const devName = 'Sanjay Binnar';

// Roles array for typewriter effect in hero
const roles = [' Frontend  Developer',  ' Problem Solver', ' Tea Lover', ' Cricket Lover'];

// Social URL Links
const socialLinks = [
  {
    name: 'email',
    icon: <HiOutlineMail />,
    url: 'mailto:sbinny2001@gmail.com',
  },
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/sanjay-binnar/',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    url: 'https://github.com/Binnar81',
  },
];

// Resume URL link
const resumeLink = 'https://drive.google.com/file/d/1LWeNSOpk6muZH-wTZ6evVHOGfCCApos7/view?usp=sharing';

// Bio paragraphs for About section
const bioParagraphs = [
  {
    id: 'paragraph1',
    text: `Hi everyone! My name is Sanjay and I'm a Frontend  developer with a Degree in BSC IT from Mumbai University and a passion for technology, creativity, and learning.`,
  },
  {
    id: 'paragraph2',
    text: `As a quick learner and versatile problem-solver, I'm able to collaborate with teams to develop projects with simple, elegant designs. I'm eager to demonstrate my newly acquired skills and build innovative applications that help me grow as a developer and provide users with immersive digital experiences.`,
  },
  {
    id: 'paragraph3',
    text: `When I'm not coding on my laptop, skimming through documentation, or searching Google for solutions to various issues, I enjoy playing cricket, watching International Affair News and learning new skills.`,
  }
];

// objects containing data for Call to Action sections
const contactCTA = {
  message: `Feel free to reach out and connect with me!`,
  buttonMessage: 'Get in touch',
  buttonIcon: <FaRegSmileWink />,
  linkURL: '#contact',
};


// icon, title, summary, and skills list for Skill Cards
const skillCardData = [
  // for front-end
  {
    id: 'frontEndSkills',
    icon: <HiCode />,
    title: 'Front-End Development',
    summary:
      'I am passionate about bringing ideas to life and creating visually stunning projects using a variety of modern technologies and frameworks.',
    skills: [
      {name:'HTML',image:"/assets/html5.png"},
      {name:'CSS', image:"/assets/CSS3.png"},
      {name:'JavaScript', image:"/assets/js.jpeg"},
      {name:'TypeScript', image:"/assets/typescript.png"},
      {name:'Next.js', image:"/assets/Next.png"},
      {name:'React.js',image:"/assets/react.png"},
      {name:'SCSS', image:"/assets/SCSS.png"},
      {name:'Bootstrap',image:"/assets/bootstrap.jpeg"},
      {name:'Tailwind CSS',image:"/assets/Tailwindcss.png"},
      {name:'Redux',image:"/assets/redux.png"},
      {name:'Framer Motion',image:"/assets/framermotion.jpeg"},
      {name:'Git', image:"/assets/git.png"},
      {name:'Github' ,image:"/assets/newgithub.png"},
    ],

   
    
  },
]
 

// Project List for Projects section
const projectList = [
  {
    title: 'GymSaarthi Website',
    image: 'GymSaarthi.png',
    description: `GymSaarthi is Frontend based website and This is a Gym-Exercise website and using this website users can take a classes to learn different types of Exercise like Yoga, Meditation, Karate.  `,
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Firebase'],
    projectLink: 'https://gymsaarthi.vercel.app/',
    githubLink: 'https://github.com/Binnar81/GymSaarthi',
  },
  {
    title: 'CryptoMudra Website',
    image: 'cryptomudra.png',
    description: `CryptoMudra is a frontend based crypto currency website and using this website user can get all the information related to all the crypto currency market price and market capitalization in Indian Rupees `,
    tech: ['React.js','SCSS','JavaScript'],
    projectLink: 'https://crypto-mudra-website.vercel.app/',
    githubLink: 'https://github.com/Binnar81/CryptoMudra-Website',
  },
  {
    title: 'ShoppingMart Website',
    image: 'Ecommerce.png',
    description: `ShoppingMart is a Frontend based E-Commerce website and using this website user can do a shopping of their favourite products`,
    tech: ['React.js','Vanilla CSS','JavaScript'],
    projectLink: 'https://shoppingmartwebsite.vercel.app/',
    githubLink: 'https://github.com/Binnar81/ShoppingMart-Website',
  },
  {
    title: 'BSRO Rockets Website',
    image: 'BSRO.png',
    description: `BSRO Rocket is a landing page of BSRO space agency `,
    tech: ['React.js','Tailwind CSS','JavaScript'],
    projectLink: 'https://bsro-website.vercel.app/',
    githubLink: 'https://github.com/Binnar81/bsro-website',
  },
  {
    title: 'Blogging Website',
    image: 'Blogging.png',
    description: `This is a Technical Blogging website and here user can read and post technical blogs related to their favourite technology `,
    tech: ['React.js','Tailwind CSS','JavaScript'],
    projectLink: 'https://sanjutechblog.vercel.app/',
    githubLink: 'https://github.com/Binnar81/techbloggingwebsite',
  },
  {
    title: 'Prashad Restaurant Website',
    image: 'Restaurant.png',
    description: `This is a landing page of Prashad Restaurant website `,
    tech: ['HTML','CSS','JavaScript','Bootstrap'],
    projectLink: 'https://prashad-restaurant.vercel.app/',
    githubLink: 'https://github.com/Binnar81/RestaurantwebsiteProject',
  },
  
];

export {
  TitleLogo,
  LogoImage,
  profileImage,
  devName,
  roles,
  socialLinks,
  resumeLink,
  bioParagraphs,
  contactCTA,
  skillCardData,
  projectList,
  devImage
};
