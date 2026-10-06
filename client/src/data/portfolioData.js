export const profile = {
  name: 'Manas Ranjan Bera',
  role: 'Full Stack MERN Developer',
  tagline: 'I build fast, accessible web applications with React, Node, Express, and MongoDB.',
  location: 'Bhubaneswar, India',
  email: 'work.manasranjanbera@gmail.com',
  github: 'https://github.com/manasranjn',
  linkedin: 'https://www.linkedin.com/in/manas-ranjan-bera/',
  resumeUrl: 'https://drive.google.com/file/d/19lwmo6cFdwIzVpii9vQAcuYPn-UTB_hW/view?usp=sharing',
};

export const skillGroups = [
  {
    category: 'frontend',
    items: [
      { name: 'React', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux Toolkit', level: 70 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    category: 'backend',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 90 },
      { name: 'JWT Auth', level: 82 },
      { name: 'Python', level: 78 },
    ],
  },
  {
    category: 'database',
    items: [
      { name: 'MongoDB', level: 87 },
      { name: 'Mongoose', level: 85 },
      { name: 'Oracle SQL', level: 65 },
      { name: 'PostgreSQL', level: 60 },
    ],
  },
  {
    category: 'tooling',
    items: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Claude Code', level: 75 },
      { name: 'Antigravity', level: 73 },
      { name: 'Cursor', level: 62 },
    ],
  },
];

export const projects = [
  {
    id: 'proj-01',
    file: 'employee-leave-management.js',
    title: 'Employee & Leave Management System',
    description:
      'A full-stack employee management system for managing employee profiles, departments, attendance, leave requests, and organizational records.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      'JWT authentication and role-based access control for Admin, HR, and Employee roles',
      'RESTful APIs for employee management, leave applications, approvals, attendance, and dashboard statistics',
      'Responsive dashboards with search, filtering, pagination, form validation, and real-time data updates',
    ]
  },
  {
    id: 'proj-02',
    file: 'bookbazaar.service.js',
    title: 'Online Book Selling & Buying Platform',
    description:
      'A full-stack book marketplace enabling users to browse books, view details, manage carts, and place and track orders.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      'JWT-based authentication and role-based authorization with RESTful APIs',
      'Book, category, cart, and order management for the complete buying workflow',
      'Responsive admin dashboard for managing books, categories, inventory, and customer orders',
    ]
  },
  {
    id: 'proj-03',
    file: 'elearning.application.js',
    title: 'E-Learning Web Application',
    description:
      'A scalable online learning platform featuring secure login, course management, and an admin dashboard.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      'Secure login and authentication for platform users',
      'Course management functionality for the learning platform',
      'Admin dashboard for managing and controlling platform content',
    ]
  },
  {
    id: 'proj-04',
    file: 'tour-travel.application.js',
    title: 'Tour & Travel Web Application',
    description:
      'A dynamic travel platform featuring tour package listings and booking management capabilities.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Dynamic tour package listings for users',
      'Booking management capabilities for travel packages',
      'Streamlined user navigation and enhanced overall application performance',
    ]
  },
];

export const experience = [
  {
    role: 'Software Development Engineer',
    company: 'Web_Bocket Software Pvt. Ltd.',
    period: 'October 2025 - Present',
    summary:
      'Own end-to-end feature delivery on a MERN SaaS product, from schema design to production deployment.',
  },
  {
    role: 'Software Developer',
    company: 'Web_Bocket Software Pvt. Ltd.',
    period: 'March 2025 - September 2025',
    summary:
      'Built and maintained React applications, while gaining hands-on experience with Node.js, Express.js, and MongoDB.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Web_Bocket Software Pvt. Ltd.',
    period: 'December 2024 - February 2025',
    summary:
      'Developed responsive and user-friendly web interfaces using React.js and Tailwind CSS, building reusable components, implementing modern UI designs with API integration.',
  },
];
