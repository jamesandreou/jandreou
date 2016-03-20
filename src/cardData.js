import React from 'react';
import { Term } from './term.js';
import { Skill } from './skill.js';

const COURSES = {
  '3B' : [
    'CS 456 - Computer Networks',
    'CO 487 - Applied Cryptography',
    'CS 447 - Software Testing',
    'CS 349 - User Interfaces',
    'SCI 207 - Physics, Universe, and Everything'
  ],
  '3A' : [
    'CS 350 - Operating Systems',
    'CS 341 - Algorithms',
    'CS 348 - Database Management',
    'CO 250 - Introduction to Optimization',
    'ECON 102 Macroeconomics'
  ],
  '2B' : [
    'CS 240 - Data Structures',
    'CS 241 - Foundations of Sequential Programs',
    'CS 251 - Computer Organization and Design',
    'STAT 231 - Statistics',
    'ENGL 119 - Communications in Computer Science'
  ],
  '2A' : [
    'CS 246 - Object-Oriented Software Development',
    'CS 245 - Logic and Computation',
    'MATH 239 - Introduction to Combinatorics',
    'STAT 230 - Probability',
    'AFM 101 - Financial Accounting'
  ],
  '1B' : [
    'CS 136 - Elementary Algorithm Design and Data Abstraction',
    'MATH 136 - Linear Algebra',
    'MATH 138 - Calculus 2',
    'PSYCH 101 - Introduction to Psychology',
    'MSCI 311 - Organizational Design and Technology'
  ],
  '1A' : [
    'CS 135 - Designing Functional Programs',
    'MATH 135 - Algebra',
    'MATH 137 - Calculus 1',
    'PHYS 111 - Physics 1',
    'ECON 101 - Microeconomics'
  ]
};

const SKILLS = {
  'tech' : [
    ['Android', 1],
    ['Linux', 0.8],
    ['Unix', 0.9],
    ['SQL', 0.6],
    ['GIT', 1],
    ['OpenGL', 0.8]
  ],
  'frameworks' : [
    ['ReactJS', 1],
    ['JQuery', 1],
    ['Boost', 0.4],
    ['NodeJS', 1],
    ['Saas', 0.8],
    ['OpenSSL', 0.6]
  ],
  'languages' : [
    ['JavaScript', 1],
    ['Java', 1],
    ['C++', 0.8],
    ['Python', 0.4],
    ['HTML 5', 1],
    ['CSS 3', 1]
  ]
};

let cards = [
  {
    'title1' : 'James Andreou',
    'title2' : 'Software Engineer',
    'icon' : 'me.png',
    'type' : 'skill',
    'date' : '',
    'data' : (
      <p>
        I am a Software Engineer and Computer Science student at University of Waterloo.
         I have a passion for using modern technologies to create scalable,
         efficient user interfaces and backend solutions.
      </p>
    )
  },
  {
    'title1' : 'Mozilla',
    'title2' : 'Software Engineering Intern',
    'icon' : 'mozilla.png',
    'type' : 'work',
    'date' : 'Summer 2016',
    'data' : (
      <p>Upcoming software engineer intern on the DOM team.
      The DOM team is a subset of the platform team working on
      the Gecko DOM implementation and JavaScript browser API.</p>
    )
  },
  {
    'title1' : 'Term 3B',
    'title2' : 'University of Waterloo, Honours Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2016',
    'data' : (<Term courses={COURSES['3B']} />)
  },
  {
    'title1' : 'Graph Toolbox',
    'title2' : 'Web Graph Theory Planarity Tester',
    'icon' : 'gtb.png',
    'type' : 'project',
    'date' : 'Summer 2015',
    'data' : (
      <p>
        <b>Description:</b> Created a web app to graphically create,
        manipulate and run algorithms on graphs with ReactJS. The app
        contains a <b>Planarity Testing</b> algorithm that finds a planar embedding
        for a graph or shows the K5 / K3,3 minor. Features include creating
        custom graphs with directed / weighted edges, algorithms, tools,
        default graphs and more to come.
      </p>
    )
  },
  {
    'title1' : 'Beugo the Blob',
    'title2' : 'Android Arcade Game',
    'icon' : 'beugo.png',
    'type' : 'project',
    'date' : 'Summer 2015',
    'data' : (
      <p>
        <b>Description:</b> Created an Android arcade game where a blob
        named Beugo has to bounce over and under obstacles while
        chasing a ghost. Features include soft body physics replication,
        random level generation, settings, OpenGL vector graphics,
        interactive tutorial, multiple difficulties and more.
      </p>
    )
  },
  {
    'title1' : 'Languages',
    'title2' : 'Proficient In',
    'icon' : 'laptop.png',
    'type' : 'skill',
    'date' : '',
    'data' : (<Skill skills={SKILLS['languages']} />)
  },
  {
    'title1' : 'Term 3A',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2015',
    'data' : (<Term courses={COURSES['3A']} />)
  },
  {
    'title1' : 'Frameworks',
    'title2' : 'Front End, Back End, Software Testing',
    'icon' : 'react.png',
    'type' : 'skill',
    'date' : '',
    'data' : (<Skill skills={SKILLS['frameworks']} />)
  },
  {
    'title1' : 'Term 2B',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2015',
    'data' : (<Term courses={COURSES['2B']} />)
  },
  {
    'title1' : 'Technologies',
    'title2' : 'Operating Systems, Version Control, Data Solutions',
    'icon' : 'android.png',
    'type' : 'skill',
    'date' : '',
    'data' : (<Skill skills={SKILLS['tech']} />)
  },
  {
    'title1' : 'Term 2A',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2014',
    'data' : (<Term courses={COURSES['2A']} />)
  },
  {
    'title1' : 'Term 1B',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2014',
    'data' : (<Term courses={COURSES['1B']} />)
  },
  {
    'title1' : 'Term 1A',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2013',
    'data' : (<Term courses={COURSES['1A']} />)
  }
]

module.exports = cards;
