export const profile = {
  name: 'kn8s',
  role: 'Creative developer',
  intro: 'Exploring the space between thoughtful design and expressive code. Building for the web, one considered detail at a time.',
  email: '',
  socials: [{ label: 'GitLab', href: 'https://gitlab.com/kn8s/portfolio' }],
};

export const projects = [
  {
    id: 'orbit', title: 'Orbit', category: 'Product interface', year: 'Concept 01',
    theme: 'orbit', headline: 'A little more focus.', subline: 'A little less noise.',
    description: 'A self-directed dashboard concept exploring calm data visualization and clear visual hierarchy. The preview is an interface study, not a live product.',
    tags: ['Interface design', 'Data visualization', 'Concept'],
  },
  {
    id: 'forma', title: 'Forma', category: 'Digital experience', year: 'Concept 02',
    theme: 'forma', headline: 'Objects with', subline: 'a different perspective.',
    description: 'An editorial storefront concept pairing sculptural forms with oversized typography. A visual exploration of a possible shopping experience, not a commissioned project.',
    tags: ['Art direction', 'Editorial', 'Concept'],
  },
];

export const skills = [
  { title: 'Interfaces, with intent.', label: '01 / FOUNDATION', description: 'Composable experiences built with React. Clear structure, thoughtful states, and room to grow.', tokens: ['React', 'JavaScript', 'HTML'], style: 'wide', mark: '⟨/⟩' },
  { title: 'A system of details.', label: '02 / VISUAL LANGUAGE', description: 'Responsive layouts and a consistent visual rhythm.', tokens: ['Tailwind CSS', 'CSS'], style: 'tall', mark: 'Aa' },
  { title: 'Less friction. More flow.', label: '03 / MOVEMENT', description: 'Spring physics, scroll reveals, and smooth transitions that respect your motion preferences.', tokens: ['Framer Motion', 'Lenis'], style: 'wide', mark: '↗' },
  { title: 'Built to ship.', label: '04 / TOOLING', description: 'A fast development loop, from the first idea to the browser.', tokens: ['Vite', 'Git', 'GitLab'], style: '', mark: '＋' },
];
