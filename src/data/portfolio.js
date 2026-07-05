import {
  Code2, CircuitBoard, Server, Wrench, Shield, Radio, Zap,
} from 'lucide-react'

export const personalInfo = {
  name: 'Tebogo Legoabe',
  title: 'Software Developer & Electrical Engineer',
  email: 'tebogolegoabe5@gmail.com',
  phone: '+27 71 422 7470',
  location: 'Johannesburg, South Africa',
  linkedin: 'https://www.linkedin.com/in/tebogo-legoabe',
  github: 'https://github.com/TebogoLegoabe',
  summary:
    'Electrical Engineering graduate and software developer building production-minded web platforms, secure backend services, embedded systems, and communication infrastructure. Strong in Python, C#, C/C++, Rust, SQL, React, Flask, .NET, PostgreSQL, Docker, and secure authentication flows.',
}

export const roles = [
  'Software Developer',
  'Electrical Engineer',
  'Embedded Systems Engineer',
  'Backend Developer',
  'Systems Architect',
]

export const stats = [
  { value: 7, label: 'Languages' },
  { value: 3, label: 'Years Exp.' },
  { value: 16, label: 'Tools' },
  { value: 5, label: 'Roles' },
]

export const experience = [
  {
    date: 'Nov 2025 - Present',
    role: 'Junior Application Developer',
    company: 'Sedna Inc',
    description:
      'Developing secure communication systems with OAuth 2.0/Keycloak SSO, Step CA certificate automation for mTLS, RabbitMQ messaging, and database-backed device identity. Designing exchange patterns and routing flows for reliable device-specific messaging.',
    tech: ['C# .NET', 'SQL Server', 'PostgreSQL', 'Docker', 'RabbitMQ', 'OAuth 2.0', 'Keycloak'],
  },
  {
    date: 'Jun-Jul 2022 & Nov-Dec 2023',
    role: 'Student Intern',
    company: 'Schauenburg Systems',
    description:
      'Tested, validated, and analyzed embedded systems and communication devices. Ran Acceptance Test Procedures on mobile radios, compiled technical reports, diagnosed EMPI tag faults, designed a battery test jig, and contributed user documentation for SCASII Manager.',
    tech: ['Embedded C', 'Hardware Testing', 'ATP/ATR', 'Circuit Analysis', 'Soldering', 'Documentation'],
  },
  {
    date: 'Feb 2024 - Nov 2025',
    role: 'Teaching Assistant & Lab Maintainer',
    company: 'Wits University',
    description:
      'Conducted software development tutorials and laboratory sessions. Maintained and calibrated lab equipment including oscilloscopes, function generators, multimeters, and power supplies.',
    tech: ['Python', 'C++', 'Lab Instrumentation', 'Technical Instruction'],
  },
  {
    date: 'Nov 2022 - Present',
    role: 'Engineering Tutor',
    company: 'Turtlejar Tutoring',
    description:
      'Individual tutoring in software development, Python, C++, circuit analysis, mathematics, and physics for university engineering students.',
    tech: ['Python', 'C++', 'Circuit Analysis', 'Mathematics'],
  },
]

export const skills = [
  {
    icon: Code2,
    title: 'Programming Languages',
    tags: ['C', 'C++', 'C#', 'Python', 'Rust', 'SQL', 'Assembly'],
  },
  {
    icon: CircuitBoard,
    title: 'Engineering & Hardware',
    tags: ['Embedded Systems', 'Signal Processing', 'Circuit Design', 'Measurement Systems'],
  },
  {
    icon: Server,
    title: 'Backend & Infrastructure',
    tags: ['.NET', 'Flask', 'SQL Server', 'PostgreSQL', 'RabbitMQ', 'OAuth 2.0', 'REST APIs', 'mTLS'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    tags: ['Linux/Unix', 'Docker', 'Git & GitHub', 'Postman', 'PgAdmin', 'Railway', 'Vercel', 'MATLAB', 'Power BI', 'CAD'],
  },
]

export const projects = [
  {
    icon: Server,
    number: '01',
    title: 'oneApplyHub 2.0',
    description:
      'Student accommodation platform for discovering verified residences, comparing options, submitting guided applications, tracking status, and managing admin workflows with secure authentication.',
    tech: ['React 19', 'Flask', 'PostgreSQL', 'JWT', 'Docker'],
  },
  {
    icon: Code2,
    number: '02',
    title: 'CodevMasters',
    description:
      'Private peer tutoring platform connecting coding students and tutors with role-based dashboards, tutoring requests, tutor applications, bookings, earnings tracking, and admin review tools.',
    tech: ['React', 'TypeScript', 'Flask', 'SQLAlchemy', 'Railway'],
  },
  {
    icon: Shield,
    number: '03',
    title: 'Secure Communication Platform',
    description:
      'Enterprise messaging infrastructure with OAuth 2.0/Keycloak SSO, mTLS certificate automation through Step CA, and RabbitMQ exchange patterns for device-specific routing.',
    tech: ['C# .NET', 'RabbitMQ', 'Keycloak', 'Docker', 'PostgreSQL'],
  },
  {
    icon: Radio,
    number: '04',
    title: 'Embedded Systems Validation Suite',
    description:
      'Full product validation cycle for communication devices, covering Acceptance Test Procedures on mobile radios, fault diagnosis, battery test jig design, and compliance reporting.',
    tech: ['Embedded C', 'Hardware Testing', 'ATP/ATR', 'Circuit Analysis'],
  },
  {
    icon: Zap,
    number: '05',
    title: 'Battery Test Jig',
    description:
      'Designed and built a custom hardware test jig for battery testing, with cross-team collaboration on supporting documentation and tooling.',
    tech: ['Circuit Design', 'Soldering', 'Hardware Prototyping'],
  },
]

export const education = [
  {
    year: '2020 - 2025',
    degree: 'BSc Electrical & Information Engineering',
    school: 'Wits University, Johannesburg',
  },
  {
    year: '2022 - 2023',
    degree: 'Software Engineering (Back-end)',
    school: 'ALX Africa',
  },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
