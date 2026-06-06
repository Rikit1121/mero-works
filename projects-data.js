/* =========================================================
   Mero Works — Projects (single source of truth)

   Add a project by appending an object to this array.
   The homepage hero stat and the /projects page both read
   from here, so counts and cards stay in sync automatically.

   Fields:
     name        (string)  required
     status      (string)  e.g. "Active Development", "Live", "Archived"
     statusType  (string)  "active" gives the pulsing green dot
     description (string)  required
     stack       (string[]) technologies
     cover       (string)  optional image path (e.g. "assets/browseros.png"
                            from home, resolved automatically on /projects)
     monogram    (string)  optional letter shown when there's no cover
     github      (string)  optional repo URL
     demo        (string)  optional live demo URL
   ========================================================= */
window.PROJECTS = [
  {
    name: "BrowserOS",
    status: "Active Development",
    statusType: "active",
    description: "An experimental browser extension exploring AI-powered browsing, productivity workflows, and intelligent web interactions.",
    stack: ["TypeScript", "React", "Chrome Extensions API", "LLM / AI", "Vite"],
    cover: "",
    monogram: "B",
    github: "https://github.com/",
    demo: ""
  }
];
