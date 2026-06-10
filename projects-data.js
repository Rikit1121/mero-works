/* =========================================================
   Mero Works — Projects (single source of truth)

   Add a project by appending an object to this array.
   The homepage hero stat and the /projects page both read
   from here automatically — no other files need editing.

   Fields:
     name        (string)   required
     status      (string)   e.g. "Active Development", "Live", "Archived"
     statusType  (string)   "active" → pulsing green dot | "live" → solid blue
     description (string)   required
     stack       (string[]) technologies shown as tags
     cover       (string)   image path relative to /assets/ folder
                            (e.g. "assets/browseros.png")
     monogram    (string)   letter shown when there's no cover image
     github      (string)   repo URL — shown as a GitHub button
     demo        (string)   live URL — shown as a "Live Demo" button
                            (omit or leave "" for "Demo — soon")
   ========================================================= */
window.PROJECTS = [
  {
    name: "BrowserOS",
    status: "Active Development",
    statusType: "active",
    description: "A Chrome extension for reducing browser clutter, spotting distraction patterns, and making tab-heavy sessions feel calmer. Combines local browser-state analysis, focus actions, and lightweight behavioral awareness — designed to feel like a calm assistant, not a noisy dashboard.",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Chrome Extensions MV3"],
    cover: "assets/BrowserOS.png",
    monogram: "B",
    github: "https://github.com/Rikit1121/browseros",
    demo: ""
  },
  {
    name: "Himalaya Palace",
    status: "Live",
    statusType: "live",
    description: "A premium restaurant website for Himalaya Palace — Flavors of the Himalayas. Built with a focus on atmosphere, storytelling, and elegant UI that brings the warmth of Nepali hospitality to the web.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    cover: "assets/himalaya_palace.png",
    monogram: "H",
    github: "",
    demo: "https://himalaya-palace.vercel.app/"
  },
  {
    name: "Foam House",
    status: "Live",
    statusType: "live",
    description: "A full-featured e-commerce website for Foam House, Nepal's premium home furnishings store. Product catalogue, gallery, custom furniture inquiry system, and WhatsApp integration — built for Kathmandu's discerning homeowners.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    cover: "assets/Foam_house.png",
    monogram: "F",
    github: "",
    demo: "https://foam-house-e-commerce-website.vercel.app/"
  },
  {
    name: "Himalayan Chautari Resort",
    status: "Live",
    statusType: "live",
    description: "A luxury resort website for Himalayan Chautari — a mountain retreat in Nepal. Crafted to capture the serenity of the Himalayas with immersive visuals, room showcases, and seamless booking experience.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    cover: "assets/Resort_himalaya.png",
    monogram: "H",
    github: "",
    demo: "https://himalayanchautariresort.vercel.app/"
  }
];
