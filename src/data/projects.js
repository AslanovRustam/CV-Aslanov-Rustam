export const PROJECTS = [
  {
    id: 4,
    name: "Gipper",
    role: "Full Stack Developer",
    duration: "Oct 2025 – Aug 2026",
    generalInfo: `Sports graphics platform that helps schools, athletic departments, and teams create professional branded graphics in minutes. The product includes a canvas-based graphic editor with a template library, media gallery, newsletters, and digital displays, built as a microfrontend ecosystem of 14 React modules`,
    tasks: [
      `Feature Research & Development: Researched and developed a new Tables feature for the canvas-based graphic editor — from prototyping to production implementation, including cell editing, styling, and rendering on the Fabric.js canvas`,
      `Server-side Image Rendering: Researched and implemented server-side rendering of editor canvases to production-ready images using Skia (CanvasKit) with HarfBuzz text shaping in Node.js, with automated asset delivery to S3`,
      `Drag & Drop Interactions: Developed and improved drag-and-drop functionality across the editor and content management interfaces`,
      `UI Modernization: Updated and refined the interface of individual platform elements to improve usability and visual consistency`,
      `Microfrontend Development: Delivered features across a Module Federation based ecosystem of React modules with MobX state management`,
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
      `Legacy System Modernization: Led large-scale migration of a legacy React 16 application to React 19, including major dependency upgrades and compatibility fixes across the entire front-end ecosystem`,
      `Legacy Refactoring: Refactored outdated and tightly coupled legacy code into scalable and reusable architecture without disrupting existing business-critical workflows`,
      `Incremental Migration Strategy: Implemented safe step-by-step migration approach to modernize the application while minimizing regressions and ensuring uninterrupted system operation`,
      `Technical Debt Reduction: Eliminated deprecated patterns, optimized obsolete business logic, and improved long-term maintainability of the codebase`,
      `State Management Optimization: Maintained and optimized complex MobX-driven state flows across large interconnected CRM modules`,
      `Performance Optimization: Improved rendering performance and responsiveness in data-heavy interfaces by refactoring inefficient legacy components and reducing unnecessary re-renders`,
      `Role-based Dashboard Development: Designed and developed new operational boards and workflows for pilots and shift planners with permission-based access and scheduling functionality`,
      `API Integration: Integrated modernized front-end modules with backend services for real-time operational data synchronization and reporting`,
      `Cross-team Collaboration: Collaborated with backend developers, QA engineers, and business stakeholders to safely deliver migration milestones and enterprise-level functionality`,
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
      `UI Component Development: Build reusable and maintainable UI components to accelerate new feature delivery`,
      `Responsive Design Implementation: Ensure platform usability across desktop, tablet, and mobile devices`,
      `API Integration: Connect front-end components with backend services for data retrieval, form submissions, and reporting`,
      `Accessibility Compliance: Implement WCAG standards to ensure the platform is usable by all employees, including those with disabilities`,
      `Performance Optimization: Improve loading speed and responsiveness of training modules and dashboards`,
      `State Management: Implement Redux Toolkit for efficient handling of application state across modules`,
      `Role-based Access Control: Integrate permission-based UI rendering depending on user roles (admin, owner, subcontractor, employee)`,
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
      `Implemented scalable front-end architecture to support user profiles, content feeds, and real-time interactions`,
      `Implemented secure user authentication and role-based profile management with seamless onboarding flow.`,
      `User Authentication and Profile Management`,
      `Developed core social features including private messaging, notifications, project management boards, and team collaboration tools.`,
      `Collaborated with backend developers to define API contracts, implement efficient data fetching, and handle real-time updates via WebSocket`,
      `Search: Implement advanced search functionalities to help users find jobs, studios, teams, or collaborators`,
      `Conducted code reviews, maintained clean reusable components, and followed best practices for accessibility and SEO`,
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
      `Collaborated with designers to translate style guides and visual mockups into clean and maintainable code`,
      `Responsive layout implementation using HTML, CSS(no UI libraries), and JS to ensure pixel-perfect, cross-browser performance`,
      `Animated UI elements and smooth scrolling for dynamic content sections`,
      `Optimized image and media loading (web-optimized formats, lazy loading) to enhance performance`,
      `Ensured accessibility (ARIA attributes, semantic HTML) and SEO best practices (meta-tags, fast loading, structured content)`,
      `Integration of contact forms with validation and submission handling to capture client inquiries`,
      `Integrated AWS cloud storage for delivering project assets, ensuring fast and reliable content delivery`,
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
