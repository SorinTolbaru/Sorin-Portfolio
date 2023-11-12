const sr = ScrollReveal({
  distance: "50px",
  duration: 2550,
  reset: false,
})

sr.reveal(".description h1", { delay: 100, origin: "top" })
sr.reveal(".intro", { delay: 200, origin: "left" })
sr.reveal(".media", { delay: 200, origin: "left" })
sr.reveal(".my-photo-container", { delay: 300, origin: "right" })
sr.reveal(".tech-stack", { delay: 300, origin: "bottom" })
