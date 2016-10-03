import React from 'react';
import { Term } from './term.js';
import { Skill } from './skill.js';
import { Stack } from './stack.js';
import { Glyphicon } from 'react-bootstrap';

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
    ['Android', 0.6],
    ['Linux', 0.8],
    ['Unix', 0.9],
    ['SQL', 0.6],
    ['Web Browsers', 1],
    ['GIT', 1],
    ['OpenGL', 0.8]
  ],
  'frameworks' : [
    ['ReactJS', 1],
    ['JQuery', 0.9],
    ['Boost', 0.4],
    ['NodeJS', 1]
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
    'icon' : 'profile.jpg',
    'type' : 'skill',
    'date' : '',
    'data' : (
      <div>
        <p>
          I am a Software Engineer and Computer Science student at University of Waterloo.
           I have a passion for using modern technologies to create scalable,
           performance sensitive, and elegantly designed software.
        </p>
        <b>Areas of Computer Science I enjoy:</b>
        <ul>
          <li>Web</li>
          <li>Algorithms</li>
          <li>Operating Systems</li>
          <li>Security</li>
          <li>Compilers</li>
        </ul>
        <span>
          <Glyphicon glyph='share-alt' />
          <b>{' Email: '}</b>
          <a href={'mailto:jandreou25@gmail.com'}>jandreou25@gmail.com</a>
        </span>
        <span>
          <Glyphicon glyph='share-alt' />
          <b>{' GitHub: '}</b>
          <a href={'https://www.github.com/jamesandreou'}>github.com/jamesandreou</a>
        </span>
        <span>
          <Glyphicon glyph='share-alt' />
          <b>{' Resume: '}</b>
          <a href={'/resume'}>View Resume</a>
        </span>
      </div>
    )
  },
  {
    'title1' : 'Mozilla',
    'title2' : 'Software Engineering Intern',
    'icon' : 'mozilla.png',
    'type' : 'work',
    'date' : 'Summer 2016',
    'data' : (
      <div>
        <p>During Summer 2016 I interned at Mozilla on the DOM team. I got the chance to work on two very interesting projects on the
         Gecko web engine.
         <br/><b>Private Browsing in Web Origins</b><br/>
         <br/>My first project was integrating private browsing into the Web Origin security model. The model ensures that
         content on a web page can only interact with other content that comes from the same "origin". An origin is described by the
         URL, port, and network protocal it originates from. For example a Facebook like button should not be able to read a 
         username or password field on the same webpage.
         <br/>However, two identical port/URL/schemes in a private tab
         and non-private tab should not be equivilant. My task was to extend that origin definition to include another axis dictating
         whether or not the origin was from a private session.
         <br/><b>DOM Node Children Data Structure Overhaul</b><br/>
         <br/>
         My second project was rewriting the DOM node children data structure. Originally Gecko stored DOM node children in a memory
         shifting array. This was a problem because whenever a new DOM node was inserted or removed the CPU spent a ton of time executing
         the memmove() calls. I rewrote the data structure as a linked list to better suit insertion and removal operations.
         However, naturally with a linkedlist, indexing the children became extremely slow.<br/>To resolve this issue I implemented a cache that
         only cached the DOM node that was previously indexed. The strategy for indexing was now to lookup the cached node and iterate to the
         node being indexed from there. This results in iterating sequentially being O(1) instead of O(n) which is great because 99.9% of
         websites will iterate on a child node list and not randomly access children by indices. I then performed micro optimizaitons to
         reduce memory requirements on DOM nodes and speed up DOM node operations on benchmarks. The end result of the new data structure was
         insertion and removal operations performing 200%-600%!</p>
        <Stack stack={['C++', 'JavaScript']} />
      </div>
    )
  },
    {
    'title1' : 'Google',
    'title2' : 'Software Engineering Intern',
    'icon' : 'google.png',
    'type' : 'work',
    'date' : 'Fall 2016',
    'data' : (
      <div>
        <p>During Fall 2016 I am interning at Google on the Adwords team. My project involes integrating natural language
         processing with Adwords Reporting. I will update this after completing the internship with details!</p>
        <Stack stack={['Java', 'JavaScript']} />
      </div>
    )
  },
  {
    'title1' : 'University of Waterloo',
    'title2' : 'Honours Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2013 - Winter 2017',
    'data' : (
      <div>
        <p>Candidate for:
        <b>Honours Computer Science</b>
        Software Engineering Option, Combinatorics and Optimization Minor</p>
        <b>(6/8) Terms Completed</b>
      </div>
    )
  },
  {
    'title1' : 'Term 3B',
    'title2' : 'University of Waterloo',
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
      <div>
        <p>
          <b>Description:</b> Created a web app to graphically create,
          manipulate and run algorithms on graphs with ReactJS. The app
          contains a Planarity Testing algorithm that finds a planar embedding
          for a graph or shows the K5 / K3,3 minor. Features include creating
          custom graphs with directed / weighted edges, algorithms, tools,
          default graphs and more to come.
        </p>
        <Stack stack={['JavaScript', 'ReactJS', 'NodeJS', 'C++']} />
        <p><b>Take a look:</b></p>
        <a href={'http://www.graphtoolbox.com/'}> www.graphtoolbox.com</a>
      </div>
    )
  },
  {
    'title1' : 'Beugo the Blob',
    'title2' : 'Android Arcade Game',
    'icon' : 'beugo.png',
    'type' : 'project',
    'date' : 'Summer 2015',
    'data' : (
      <div>
        <p><b>Description:</b> Created an Android arcade game where a blob
        named Beugo has to bounce over and under obstacles while
        chasing a ghost. Features include soft body physics replication,
        random level generation, settings, OpenGL vector graphics,
        interactive tutorial, multiple difficulties and more.</p>
        <Stack stack={['Java', 'Android', 'OpenGL']} />
        <p><b>Take a look:</b></p>
        <a href={'https://play.google.com/store/apps/details?id=beugo.android&hl=en'}>
          play.google.com/beugo</a>
      </div>
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
    'title2' : 'University of Waterloo',
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
    'title2' : 'University of Waterloo',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2015',
    'data' : (<Term courses={COURSES['2B']} />)
  },
  {
    'title1' : 'WLP4 Compiler',
    'title2' : 'Compiles a subset of the C++ language.',
    'icon' : 'terminal.png',
    'type' : 'project',
    'date' : 'Winter 2015',
    'data' : (
      <div>
        <p>
          <b>Description:</b> Built a compiler from scratch for the language WLP4 as part of a school
          course on compilers. WLP4 is a subset of c++ including memory allocation,
          functions, scopes, loops, and variables. The project included
          tokenizing code, assembling MIPS to byte code, parse tree construction, and MIPS
          code generation.
        </p>
        <Stack stack={['C++', 'Bash', 'MIPS']} />
      </div>
    )
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
    'title2' : 'University of Waterloo',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2014',
    'data' : (<Term courses={COURSES['2A']} />)
  },
  {
    'title1' : 'Term 1B',
    'title2' : 'University of Waterloo',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2014',
    'data' : (<Term courses={COURSES['1B']} />)
  },
  {
    'title1' : 'Term 1A',
    'title2' : 'University of Waterloo',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2013',
    'data' : (<Term courses={COURSES['1A']} />)
  }
]

module.exports = cards;
