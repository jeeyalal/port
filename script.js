const projects = [
    {
        title: "Flavor-forge",
        description:
            "FlavorForge is a dynamic web application designed for food enthusiasts to discover, manage, and personalize their favorite recipes",
        img: "./images/flavour.png",
        tech: ["React", "Context API", "CSS"],
        github: "https://github.com/jeeyalal/FlavorForge-/tree/main",
        live: "https://flavor-forge-eight.vercel.app/"
    },
    {
        title: "Eduloom",
        description:
            "This project simulates a full-featured e-learning marketplace using mock data and modern React tooling",
        img: "./images/log.png",
        tech: ["React", "Mock API", "CSS"],
        github: "https://github.com/jeeyalal/EDULOOM",
        live: "https://eduloom.vercel.app/"
    },
    {
        title: "Agency-ai",
        description:
            "A modern, responsive, and animated website featuring smooth UI interactions, reusable components, and a clean design for an engaging web experience.",
        img: "./images/agency.png",
        tech: ["React", "Framer Motion", "Tailwind CSS"],
        github: "https://github.com/jeeyalal/agency-ai.git",
        live: "https://agency-ai-chi.vercel.app/"
    },
    {
        title: "Coin Vista",
        description:
            "A modern cryptocurrency tracker and analysis dashboard. It integrates the CoinGecko API to provide real-time crypto data, interactive price charts, and market insights with a clean, responsive UI",
        img: "./images/coinV.png",
        tech: ["React", "CoinGecko API", "Google Charts", "CSS"],
        github: "https://github.com/jeeyalal/CoinVista.git",
        live: "https://coin-vista-seven.vercel.app/"
    },
    {
        title: "Fin Track",
        description:
            "FinTrack is a simple yet powerful web application for tracking personal income and expenses. It allows users to add income and expense entries with amount, category, and description.",
        img: "./images/fintrack.png",
        tech: ["React", "LocalStorage", "CSS"],
        github: "https://github.com/jeeyalal/FINTRACK",
        live: "https://fintrack-kohl-nine.vercel.app/"
    },
    {
        title: "Nove-Games",
        description:
            "Nove Game, interactive visual novel built using React and GSAP for rich animations and smooth storytelling transitions.",
        img: "./images/nova.jpeg",
        tech: ["React", "GSAP", "CSS"],
        github: "https://github.com/jeeyalal/Nove-game",
        live: "https://nove-game.vercel.app/"
    },
    {
        title: "Lagunitas",
        description:
            "The project focuses on delivering smooth, modern animations and scroll-based effects using GSAP.",
        img: "./images/beer.jpeg",
        tech: ["React", "GSAP", "CSS"],
        github: "https://github.com/jeeyalal/Lagunitas",
        live: "https://lagunitas-alpha.vercel.app/"
    },
    {
        title: "Pixel-Perfect",
        description:
            "Pixel Perfect is an AI-powered image enhancement web app. It allows users to upload low-quality or blurry images and instantly enhance them with the help of AI.",
        img: "./images/pixel.png",
        tech: ["React", "AI API", "CSS"],
        github: "https://github.com/jeeyalal/pixcel-perfcet",
        live: "https://pixcel-perfcet.vercel.app/"
    },
    {
        title: "Github-Account-Finder",
        description:
            "GitHub Account Finder is a simple React app where users can enter a GitHub username and instantly view that user’s profile details.",
        img: "./images/github.jpeg",
        tech: ["React", "GitHub API", "CSS"],
        github: "https://github.com/jeeyalal/Github_Acoount_finder",
        live: "https://github-acoount-finder.vercel.app/"
    }
];






const container = document.getElementById("projects");

container.innerHTML = projects
    .map(
        (p) => `
    <div class="project-card">
      <img src="${p.img}" alt="${p.title}" />
      <div class="project-content">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
      <div class="project-tech">
        ${p.tech.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <div class="project-hover">
        <a href="${p.github}" target="_blank">GitHub</a>
        <a href="${p.live}" target="_blank">Live Site</a>
      </div>
    </div>
  `
    )
    .join("");


