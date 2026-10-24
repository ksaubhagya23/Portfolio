export const profile = {
  name: 'Saubhagya Kumar',
  role: 'Aspiring Software Engineer',
  college: 'GL Bajaj Institute of Technology and Management',
  location: 'Greater Noida, Uttar Pradesh, India',
  degree: 'B.Tech',
  branch: 'Computer Science and Information Technology (CSIT)',
  semester: '3rd Semester',
  email: 'ksaubhagya23@gmail.com',
  github: 'https://github.com/ksaubhagya23',
  linkedin: 'https://www.linkedin.com/in/saubhagya-kumar-6a4a41400',
  portfolioRepository: 'https://github.com/ksaubhagya23/Portfolio',
  photo: '/images/1792824740809.png',
};

export const projects = [
  {
    number: '01',
    title: 'MSD 45',
    eyebrow: 'Birthday tribute website',
    description: "A special website created to celebrate the 45th birthday of MS Dhoni. This project combines creativity and web development to create a personalised digital tribute to one of cricket's most celebrated players.",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live Demo',
    url: 'https://msd-app-steel.vercel.app/',
    theme: 'cricket',
    mark: '45',
  },
  {
    number: '02',
    title: 'Online Bookstore',
    eyebrow: 'Web development lab',
    description: 'An online bookstore website developed as part of my web development laboratory project. It explores how books can be presented in an organised digital catalogue with an intuitive browsing experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live Demo',
    url: 'https://web-development-lab-eight.vercel.app/',
    theme: 'books',
    mark: '01',
  },
  {
    number: '03',
    title: 'Asteroid Sentinel',
    eyebrow: 'Asteroid tracking website',
    description: 'A space-focused web project exploring asteroid tracking and presenting information about objects travelling through our solar system. It reflects my interest in astronomy, space technology, and data-driven web applications.',
    technologies: ['React', 'JavaScript', 'Space tech'],
    status: 'Live Demo',
    url: 'https://asteroid-sentinel-dashboard--ksaubhagya23.replit.app',
    theme: 'space',
    mark: '∞',
  },
  {
    number: '04',
    title: 'Teen Wallet',
    eyebrow: 'Student finance app concept',
    description: 'A student-focused app concept aimed at encouraging financial awareness and better money-management habits among young people. The project is currently at the drawing board stage.',
    technologies: ['Product concept', 'UI direction', 'Fintech'],
    status: 'Concept Stage',
    url: '#contact',
    theme: 'wallet',
    mark: '₹',
  },
] as const;

export const codingProfiles = [
  { name: 'LeetCode', description: 'Practising patterns, algorithms, and interview-style problem solving.', url: 'https://leetcode.com/u/sk2306/' },
  { name: 'Code360', description: 'Building consistency through structured DSA practice and learning paths.', url: 'https://www.naukri.com/code360/profile/3abe0a60-cc83-4bb9-a4ea-39220afcda98' },
  { name: 'GeeksforGeeks', description: 'Exploring computer science concepts and sharpening fundamentals.', url: '#' },
  { name: 'HackerRank', description: 'Learning by solving programming challenges across core topics.', url: '#' },
] as const;

export const skills = [
  { label: 'Programming', items: ['C', 'C++'], accent: 'cyan' },
  { label: 'Web Development', items: ['HTML', 'CSS', 'JavaScript'], accent: 'blue' },
  { label: 'Core Computer Science', items: ['OOP', 'Data Structures', 'Algorithms'], accent: 'amber' },
  { label: 'Tools & Workflow', items: ['Git', 'GitHub', 'VS Code', 'AI-assisted development'], accent: 'green' },
] as const;
