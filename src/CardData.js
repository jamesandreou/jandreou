export const experienceCards = [
  {
    place : 'Uber',
    icon : require('./assets/uber.png'),
    role : 'Software Engineering Intern',
    date : 'Summer 2017',
    description: 'I interned on the Logistics team (Dispatch for UberEats). I added the ability for operations to boost different vehicle types like bicycles or walkers in a particular geo area or restaurant. My main project was investigating new models to improve the pre-dispatch ETA calculation. After experimenting, I implemented a Gradient Boosted Tree model reducing ETA error by 15%, driving / waiting time by 4% and total trip time by 2%!',
    tech: ['Java', 'Go', 'Python', 'JavaScript']
  },
  {
    place : 'Google',
    icon : require('./assets/google.png'),
    role : 'Software Engineering Intern',
    date : 'Fall 2016',
    description: 'During my internship at Google I created a natural language processing tool for Adword\'s reporting. I created a back end translation system and modified Google\'s NLP library to support contextual queries allowing users to build reports with multiple queries. I worked with user research and product management to create a front end experience that validated NLP queries in real time.',
    tech: ['c++', 'Java', 'Web']
  },
  {
    place : 'Mozilla',
    icon : require('./assets/firefox.png'),
    role : 'Software Engineering Intern',
    date : 'Summer 2016',
    description: 'I spent the Summer interning on the platform team (DOM). I worked on two interesting projects on the Gecko web engine. The first project was integrating the Web Origin security model with private browsing resulting in more secure private browsing context seperation. My second project was overhauling the DOM node child API resulting in node operations (appendChild, childNodes, removeChild, firstChild, etc) performing 200-600% faster.',
    tech: ['c++', 'JavaScript']
  }
]

export const educationCards = [
  {
    term: '1A',
    date: 'Fall 2013',
    courses: [
      'CS 135 - Designing Functional Programs',
      'MATH 135 - Algebra',
      'MATH 137 - Calculus 1',
      'PHYS 111 - Physics 1',
      'ECON 101 - Microeconomics'
    ]
  },
  {
    term: '1B',
    date: 'Winter 2014',
    courses: [
      'CS 136 - Elementary Algorithm Design and Data Abstraction',
      'MATH 136 - Linear Algebra',
      'MATH 138 - Calculus 2',
      'MSCI 311 - Organizational Design and Technology',
      'PSYCH 101 - Introduction to Psychology'
    ]
  },
  {
    term: '2A',
    date: 'Fall 2014',
    courses: [
      'CS 246 - Object-Oriented Software Development',
      'CS 245 - Logic and Computation',
      'MATH 239 - Introduction to Combinatorics',
      'STAT 230 - Probability',
      'AFM 101 - Financial Accounting'
    ]
  },
  {
    term: '2B',
    date: 'Winter 2015',
    courses: [
      'CS 240 - Data Structures',
      'CS 241 - Foundations of Sequential Programs',
      'CS 251 - Computer Organization and Design',
      'STAT 231 - Statistics',
      'ENGL 119 - Communications in Computer Science'
    ]
  },
  {
    term: '3A',
    date: 'Fall 2015',
    courses: [
      'CS 350 - Operating Systems',
      'CS 341 - Algorithms',
      'CS 348 - Database Management',
      'CO 250 - Introduction to Optimization',
      'ECON 102 - Macroeconomics'
    ]
  },
  {
    term: '3B',
    date: 'Winter 2016',
    courses: [
      'CS 456 - Computer Networks',
      'CO 487 - Applied Cryptography',
      'CS 447 - Software Testing',
      'CS 349 - User Interfaces',
      'SCI 207 - Physics, Universe, and Everything'
    ]
  },
  {
    term: '4A',
    date: 'Winter 2017',
    courses: [
      'CS 489 - Machine Learning',
      'CS 454 - Distributed Systems',
      'CS 458 - Computer Security and Privacy',
      'ECON 220 - Entrepreneurship Principles',
      'SPCOM 223 - Public Speaking'
    ]
  },
  {
    term: '4B',
    date: 'Fall 2017',
    courses: [
      'CS 458 - Computer Security and Privacy',
      'STAT 442 - Data Visualization',
      'CO 456 - Intro to Game Theory',
      'AFM 131 - Intro to Business in N.A.',
      'PHIL 215 - Professional & Business Ethics'
    ]
  }
]

export const projectCards = [
  {
    name: 'Graph Toolbox',
    icon: require('./assets/graph.png'),
    link: 'www.graphtoolbox.com',
    href: 'http://www.graphtoolbox.com',
    description: 'Created a web app to graphically create, manipulate and run algorithms on graphs. The app contains a Planarity Testing algorithm that finds a planar embedding for a graph or shows the K5 / K3,3 minor. Features include creating custom graphs with directed / weighted edges, algorithms, tools, default graphs and more to come.',
    tech: ['c++', 'JavaScript', 'Web'],
    date: 'Summer 2015'
  },
  {
    name: 'Beugo the Blob',
    icon: require('./assets/beugo.png'),
    link: 'play.google.com/beugo',
    href: 'https://play.google.com/store/apps/details?id=beugo.android&hl=en',
    description: 'Created an Android arcade game where a blob named Beugo has to bounce over and under obstacles while chasing a ghost. Features include soft body physics replication, random level generation, OpenGL graphics, interactive tutorial, multiple difficulties and more.',
    tech: ['Java', 'c++', 'Android'],
    date: 'Summer 2015'
  }
]