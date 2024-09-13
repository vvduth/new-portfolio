export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Work Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Passionate about innovative solutions and continuous learning",
    description: "I enjoy taking on new challenges and building high-quality applications.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaborative approach to software development",
    description: "I thrive in team environments and value open communication.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Full-stack expertise with a focus on Next.js",
    description: "Specialized in building robust, scalable web applications.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "DevOps and Cloud Enthusiast",
    description: "Experienced with CI/CD, Docker, AWS, and Cloud Services.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring Web3 and AI Integration",
    description: "Focusing on the future of technology through personal projects.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next big project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Finance SaaS Platform",
    des: "Your all-in-one solution to effectively track and manage your finances. Easily monitor income and expenses, categorize transactions, and gain insights into your financial health with powerful, interactive tools.",
    img: "/finance.png", // You can replace this with the actual image URL if available
    iconLists: ["/next.svg","/tail.svg"], // Add relevant tech stack icons
    link: "https://finance-me-kappa.vercel.app/",
    github: "https://github.com/vvduth/finance-me",
  },
  {
    id: 2,
    title: "CV Builder",
    des: "A resume builder and parser to help students create professional resumes and understand how existing ATS (Applicant Tracking Systems) work. The app showcases output and offers options to upload an existing resume or create one from scratch.",
    img: "/cv-builder.png", // Replace with the actual image URL if available
    iconLists: ["/next.svg","/tail.svg"], // Add relevant tech stack icons
    link: "https://cv-builder-black.vercel.app/",
    github: "https://github.com/vvduth/cv-builder",
  },
  {
    id: 3,
    title: "Notion Clone",
    des: "A personal homage to Notion, this app replicates its core features, allowing users to create, organize, and manage notes, tasks, and schedules efficiently.",
    img: "/notion-clone.png", // Replace with the actual image URL if available
    iconLists: ["/next.svg","/tail.svg"], // Add relevant tech stack icons
    link: "https://note-writing-clone.vercel.app/",
    github: "https://github.com/vvduth/notion-clone",
  },
  {
    id: 4,
    title: "Airbnb Clone",
    des: "A clone of the Airbnb platform built with Next.js, Tailwind CSS, Prisma, and MongoDB. Allows users to register, create listings, make reservations, and manage their trips and favorites, leveraging server components for efficient rendering.",
    img: "/aircnc.png", // Replace with the actual image URL if available
    iconLists: ["/next.svg","/tail.svg"], // Add relevant tech stack icons
    link: "https://cnc-cnc.vercel.app/",
    github: "https://github.com/vvduth/air-bnb-clone",
  },
  {
    id: 5,
    title: "TikTok Clone",
    des: "Unleash your creativity and share videos with the world through this video-sharing app that mimics TikTok's core features.",
    img: "/tiktok.png", // Replace with the actual image URL if available
    iconLists: ["react.svg","/tail.svg"], // Add relevant tech stack icons
    link: "https://tiktok-clone-pukeduke12.vercel.app/",
    github: "https://github.com/vvduth/tiktok-clone",
  },
  {
    id: 6,
    title: "Pinterest Clone",
    des: "A visually stunning image-sharing app with features similar to Pinterest, built using React and Sanity, offering an intuitive interface for browsing and saving images.",
    img: "/pinterest.png", // Replace with the actual image URL if available
    iconLists: ["/react.svg", "/Sanity.svg", "tail.svg"], // Add relevant tech stack icons
    link: "https://playful-pudding-ba904e.netlify.app/",
    github: "https://github.com/vvduth/pinterest-clone",
  },
];
export const testimonials = [
  {
    quote:
      "You have done well, you have learned a lot. Keep learning and keep focusing on learning. There is no rush for you finish your tasks, just make sure that you are doing it as well as you can.",
    name: "Monthy Feedback - Mentti",
    title: "Software developers in CA Team - Telia Finland Oyj",
  },
  {
    quote:
      "Duc has gotten an ok start with CA work. It's still very early to say much more, but the potential is there to do well, as long as he keeps listening and learning, and asking for assistance when there's something unclear.",
    name: "Monthy Feedback - Mentti",
    title: "Software developers in CA Team - Telia Finland Oyj",
  },
  {
    quote:
      "Very good start. Remember that you have just began your developer journey, enjoy and try not to stress too much if something doesn't go as planned.",
    name: "Monthy Feedback - Mentti",
    title: "Software developers in CA Team - Telia Finland Oyj",
  },
  {
    quote:
    "You've been doing good work with the listing. You've also bravely tried your hand at other kinds of tasks. Remember that we don't expect you to be perfect, we just expect you to listen and learn and improve, and show that in your work.",
    name: "Monthy Feedback - Mentti",
    title: "Software developers in CA Team - Telia Finland Oyj",
  },
 
];

export const companies = [
  {
    id: 1,
    name: "integrify",
    img: "/integrify.png",
    nameImg: "/integrify.png",
  },
  {
    id: 2,
    name: "tamk",
    img: "/tamk.png",
    nameImg: "/tamk.png",
  },
  {
    id: 3,
    name: "TELIA",
    img: "/telia.png",
    nameImg: "/telia.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Teaching Assistant at Tampere University of Applied Sciences",
    date: "January 2022 - April 2022",
    desc: "Mentored graduate students, conducted live-coding workshops, and provided technical support for JavaScript programming courses. Collaborated with instructors to enhance student learning outcomes.",
    className: "md:col-span-2",
    thumbnail: "/tamk.png",
  },
  {
    id: 2,
    title: "Full Stack Developer at Integrify BootCamp",
    date: "January 2022 - October 2023",
    desc: "Collaborated on diverse projects using JavaScript, TypeScript, React.js, Node.js, and Redux. Developed front-end and back-end features, conducted API development, unit testing, and implemented DevOps practices using Docker and GitHub Actions.",
    className: "md:col-span-2",
    thumbnail: "/integrify.png",
  },
  {
    id: 3,
    title: "Software Developer - External Consultant at Telia",
    date: "October 2022 - October 2023",
    desc: "Designed and implemented a certificate authorization system with Java and Spring Boot. Developed user and technical documentation, conducted unit tests with Jest and JUnit5, and participated in Agile ceremonies.",
    className: "md:col-span-2",
    thumbnail: "/telia.png",
  },
 
  {
    id: 4,
    title: "Junior Software Developer - Telia Internal Employee",
    date: "May 2022 - September 2022",
    desc: "Enhanced security features by developing a certificate authorization system with Java and Spring Boot. Supported internal and external users through comprehensive documentation and training materials. Utilized Agile methodologies to ensure timely delivery.",
    className: "md:col-span-2",
    thumbnail: "/telia.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
