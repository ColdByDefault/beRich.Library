const navItems = [
  {
    section: "Backend",
    items: [
      {
        title: "Starters",
        items: [
          { title: "Basic Math", href: "/docs/math"},
        ],
      },
      {
        title: "Programming Languages",
        items: [
          {
            title: "JavaScript",
            items: [
              { title: "Node.Js",
                items: [
                  { title: "Basics", href: "/docs/javascriptDocs/" },
                  { title: "Advanced", href: "" },
                ],
              },
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
          { title: "Buttons", href: "" },
          { title: "Cards", href: "" },
        ],
      },
      {
        title: "Forms",
        items: [
          { title: "Sign-Up", href: "" },
          { title: "Log-In", href: "" },
        ],
      },
    ],
  },
];

export default navItems;
