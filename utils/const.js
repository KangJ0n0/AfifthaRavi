export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "Home",
      href: "/home",
    },

    {
      id: 2,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 3,
      name: "Blog",
      href: "/blog",
    },
    {
      id: 4,
      name: "Certificates",
      href: "/certificates",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/mysql-logo.svg",
      name: "MySQL",
      alt: "MySQL logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/php-logo.svg",
      name: "PHP",
      alt: "PHP logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/laravel-logo.svg",
      name: "Laravel",
      alt: "Laravel logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "NuxtJS",
      alt: "NuxtJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/materialui-original.svg",
      name: "Material UI",
      alt: "Material UI logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/flutter-logo.svg",
      name: "Flutter",
      alt: "Flutter logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/elysia-logo.svg",
      name: "ElysiaJS",
      alt: "Elysia logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/firebase-plain.svg",
      name: "Firebase",
      alt: "Firebase logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
  ];

  const editSet = [
    {
      name: "Adobe Photoshop",
      imgUrl: "/logos/photoshop.svg",
      alt: "Adobe Photoshop Logo",
      width: 150,
      height: 150,
    },
    {
      name: "Figma",
      imgUrl: "/logos/figma.svg",
      alt: "Figma Logo",
      width: 150,
      height: 150,
    },
  ];

  const otherSet = [
    {
      name: "Godot Engine",
      imgUrl: "/logos/godot.svg",
      alt: "Godot Engine Logo",
      width: 150,
      height: 150,
    },
    {
      name: "Arduino",
      imgUrl: "/logos/arduino.svg",
      alt: "Arduino Logo",
      width: 150,
      height: 150,
    },
    {
      name: "Cisco Packet Tracer",
      imgUrl: "/logos/cisco.svg",
      alt: "Cisco Packet Tracer Logo",
      width: 150,
      height: 150,
    },
  ];

  const hobbies = [
    {
      title: "Learning Language",
      text: "Adds a new skill and may open up travel, career, or networking opportunities.",
      classBg: "bg-languange",
    },
    {
      title: "Fishing",
      text: "To pen down my thoughts, memories and interesting things that occur in life",
      classBg: "bg-fishing",
    },
    {
      title: "Trying new technologies/framework",
      text: "To explore and expand my skillsets. \n Recently exploring Firebase and Elysia.js",
      classBg: "bg-programming",
    },

    {
      title: "Listening to music",
      text: "Recent favourites: Giga, Charlie Puth, Ed Sheeran, and TUYU",
      classBg: "bg-music",
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "Warung Purba",

      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-10",
      imageUrl: "/projects/warung.png",
      description:
        "A web application designed to showcase local eateries and their culinary offerings in Purbalingga, Indonesia.",
      techStack: ["PHP", "Laravel", "TailwindCSS", "Node.js", "MySQL"],
      githubLink: "https://github.com/KangJ0n0/Warung-Purba",
      category: "website",
    },
    {
      isReverse: true,
      title: "Weather App",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-10",
      imageUrl: "/projects/weather.png",
      description:
        "A simple website that use for check the weather, build with Vue.js, Tailwind CSS, and WeatherAPI",
      techStack: ["Vue", "TailwindCSS", "WeatherAPI", "Node.js"],
      isUrl: true,
      urlLink: "https://weather-appli.vercel.app/",
      githubLink: "https://github.com/KangJ0n0/Weather-app",
      category: "website",
    },
    {
      isReverse: false,
      title: "Rantai Kebaikan",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-10",
      imageUrl: "/projects/rantai.png",
      description:
        "an online crowdfunding platform where users can submit fundraising requests.",
      techStack: ["PHP", "Blade", "TailwindCSS", "MySQL", "Node.js"],
      githubLink: "https://github.com/KangJ0n0/Rantai-Kebaikan",
      category: "website",
    },
    {
      isReverse: true,
      title: "Satuportal Bayumas",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-10",
      imageUrl: "/projects/satuportal.png",
      description: "Redesign for SatuPortal Banyumas Website",
      techStack: ["PHP", "Blade", "LARAVEL", "TailwindCSS", "MySQL"],
      isUrl: false,
      githubLink: "https://github.com/KangJ0n0/Satuportal-Banyumaskab",
      category: "website",
    },
    {
      isReverse: false,
      title: "EMMA",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-10",
      imageUrl: "/projects/emma.png",
      description:
        "A mobile app that helps users prioritize tasks using the Eisenhower Matrix. The app categorizes tasks into four quadrants to ensure focus on what matters most.",
      techStack: ["Flutter", "Firebase"],
      githubLink: "https://github.com/KangJ0n0/EMMA",
      category: "mobile",
    },
  ];

  // new timeline
  const timeline = [
    {
      logo: "/logos/al-irsyad.png",
      logoBorderColor: "transparent",
      companyName: "Al Irsyad Al Islamiyyah Purwokerto",
      duration: "January 2025 - Present",
      jobScope: [
        "Working as an extracurricular Robotic Club’s tutor at SDIT Al-Irsyad 01 Purwokerto",
        "Guided students in exploring the fundamentals of robotics and programming.",
        "Designed and delivered a curriculum covering Scratch Programming, Tinkercad Programming, and hands-on Arduino projects.",
      ],
    },
    {
      logo: "/logos/quadrantio.jpg",
      logoBorderColor: "#1C63A2",
      companyName: "Quadrant.io.",
      duration: "September 2024 - November 2024",
      jobScope: [
        "Working as a freelance, evaluated and approved photos for clarity, relevance, and compliance with project guidelines.",
        "Assessed POI data submitted by contributors to ensure quality, accuracy, and adherence to set standards.",
      ],
    },

    {
      logo: "/logos/kominfo.jpg",
      logoBorderColor: "#FFFFFF",
      companyName: "Dinkominfo Kabupaten Banyumas",
      duration: "July 2024 - August 2024",
      jobScope: [
        "Doing one month internship in semester break at Dinas Kominfo Kabupaten Banyumas in Purwokerto, Jawa Tengah.",
        "Focused on improving user experience (UX) for the Banyumas Satuportal website to make it more intuitive and user-friendly.",
        "Contributed to interface design upgrades, creating a more visually appealing and functional layout.",
      ],
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    timeline,
    editSet,
    otherSet,
  };
}
