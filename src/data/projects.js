export const PROJECTS = [
  {
    id: 4,
    name: "Gipper",
    role: "Full Stack Developer",
    duration: "Oct 2025 – Aug 2026",
    generalInfo: `Sports graphics platform that helps schools, athletic departments, and teams create professional branded graphics in minutes. The product includes a canvas-based graphic editor with a template library, media gallery, newsletters, and digital displays, built as a microfrontend ecosystem of 14 React modules`,
    tasks: [
      `Researched and built a Tables feature for the Fabric.js canvas editor, from prototype to production: cell editing, styling and canvas rendering.`,
      `Implemented server-side rendering of editor canvases into production-ready images with Skia (CanvasKit) and HarfBuzz text shaping on Node.js, with automated upload to S3.`,
      `Improved drag-and-drop in the editor and the content management interfaces.`,
      `Reworked the UI of individual platform elements to make them easier to use and consistent with each other.`,
      `Delivered features across a Module Federation ecosystem of 14 React modules with MobX state management.`,
    ],
    stack: "React, MobX",
  },
  {
    id: 3,
    name: "Port Management CRM System",
    role: "Front-end Developer",
    duration: "Jun 2025 – Nov 2025",
    generalInfo: `Enterprise CRM platform developed for Latvian ports to centralize and coordinate operational workflows across multiple port authorities. The system supports vessel management, pilot coordination, scheduling, reporting, and daily operational processes through a unified interface used by planners, operators, and port staff`,
    tasks: [
      `Led the migration of a legacy React 16 application to React 19, including major dependency upgrades and compatibility fixes across the whole front end.`,
      `Migrated step by step, so the system kept running without interruption and regressions stayed minimal.`,
      `Refactored tightly coupled legacy code into reusable modules without breaking business-critical workflows.`,
      `Removed deprecated patterns and outdated business logic.`,
      `Maintained and optimized complex MobX state flows across interconnected CRM modules.`,
      `Sped up data-heavy screens by refactoring slow legacy components and cutting unnecessary re-renders.`,
      `Designed and built operational boards and workflows for pilots and shift planners, with role-based access and scheduling.`,
      `Connected the modernized modules to back-end services for real-time data sync and reporting.`,
      `Worked with back-end developers, QA engineers and business stakeholders to ship migration milestones.`,
    ],
    stack: "React, MobX, AntD",
  },
  {
    id: 2,
    name: "Platform for Industrial Safety & Training",
    role: "Front-end Developer",
    duration: "Oct 2024 – Jun 2025",
    generalInfo: `Web platform designed to improve safety, training, and operational performance in the construction 
and resource extraction industries. The system provides decision support tools, workforce training modules, 
and real-time data dashboards to enhance productivity and reduce risks with builders management and safety.`,
    tasks: [
      `Built reusable UI components that sped up delivery of new features.`,
      `Made the platform responsive on desktop, tablet and mobile.`,
      `Connected front-end components to back-end APIs for data retrieval, form submissions and reporting.`,
      `Implemented WCAG standards so employees with disabilities can use the platform.`,
      `Improved loading speed of training modules and dashboards.`,
      `Managed application state across modules with Redux Toolkit.`,
      `Implemented permission-based UI for 4 roles: admin, owner, subcontractor and employee.`,
    ],
    stack: "Next.js, TS",
  },
  {
    id: 1,
    name: "Social Network",
    role: "Front-end Developer",
    duration: "Mar 2024 – Sep 2024",
    generalInfo: `Social media platform that accumulates all those who are involved in video content creation: 
motion designers, creatives, 3d modelers, VFX specialists and many others. The main goal is 
to share video content and view other users' content. Create own resume, find a job, studio, 
team or interesting projects`,
    tasks: [
      `Built the front-end architecture for user profiles, content feeds and real-time interactions.`,
      `Implemented authentication, role-based profiles and the onboarding flow.`,
      `Developed private messaging, notifications, project boards and team collaboration tools.`,
      `Defined API contracts with back-end developers and handled real-time updates over WebSocket.`,
      `Implemented search for jobs, studios, teams and collaborators.`,
      `Reviewed code and kept components reusable, accessible and SEO-friendly.`,
    ],
    stack: "Next.js, TS, RTK",
  },
  {
    id: 0,
    name: "Architecture Agency",
    role: "Full Stack Developer",
    duration: "Nov 2023 – Mar 2024",
    generalInfo: `An architectural agency that specializes in supporting architects and interior designers worldwide by offering innovative project management solutions. With integrated tools, the agency helps clients focus on creative tasks, trusting us with the management of logistics, planning and coordination.`,
    tasks: [
      `Turned style guides and mockups into clean, maintainable code together with designers.`,
      `Built a responsive, pixel-perfect, cross-browser layout in plain HTML, CSS and JS, without UI libraries.`,
      `Added UI animations and smooth scrolling to content sections.`,
      `Sped up image and media loading with modern formats and lazy loading.`,
      `Followed accessibility (ARIA, semantic HTML) and SEO practices (meta tags, fast loading, structured content).`,
      `Built contact forms with validation and submission handling.`,
      `Integrated AWS cloud storage to serve project assets.`,
    ],
    stack: "Next.js, JS, RTK",
  },
  //   {
  //     id: 0,
  //     name: "CRM Dashboard",
  //     role: "Full Stack Developer",
  //     duration: "July 2023 – March 2024",
  //     generalInfo: `A CRM dashboard application built with Next.js and TypeScript, offering a user-friendly
  // interface for managing company information and promotions. The dashboard enables users to
  // easily track company data, monitor promotional activities, and streamline workflow. Its
  // responsive design ensures seamless access across devices, while integration with REST APIs
  // allows efficient data management.`,
  //     tasks: [
  //       `Implement features to track and display company data, including promotional activity and
  // performance metrics`,
  //       `Develop tools to streamline workflow processes, such as scheduling
  // promotions, sending notifications, and generating reports`,
  //       `Backend layer Integration and API Development`,
  //       `Ensure the CRM dashboard is fully responsive, providing seamless access across various
  // devices and screen sizes`,
  //       `Optimize design and functionality for mobile, tablet, and desktop use to improve user
  // experience across platforms`,
  //     ],
  //   },
];
