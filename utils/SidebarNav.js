const navItems = [
  {
    section: "Backend",
    items: [
      {
        title: "Starters",
        items: [
          { title: "Overview", href: "#overview" },
          {
            title: "Subjects",
            items: [
              { title: "Basic Knowledge", href: "#basic" },
              { title: "Databases", href: "#databases" },
              { title: "APIs", href: "#api" },
            ],
          },
        ],
      },
      {
        title: "Programming Languages",
        items: [
          { title: "Java", href: "#java" },
          {
            title: "Python",
            items: [
              { title: "Basics", href: "#basicsPy" },
              { title: "Advanced", href: "#advancedPy" },
            ],
          },
        ],
      },
    ],
  },
  {
    section: "Frontend",
    items: [
      {
        title: "UI Elements",
        items: [
          { title: "Buttons", href: "#buttons" },
          { title: "Cards", href: "#cards" },
        ],
      },
      {
        title: "Forms",
        items: [
          { title: "Sign-Up", href: "#signup" },
          { title: "Log-In", href: "#login" },
        ],
      },
    ],
  },
];

export default navItems;
