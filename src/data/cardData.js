import React from 'react';

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
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2016',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>CS 456 - Computer Networks</li>
        <li>CO 487 - Applied Cryptography</li>
        <li>CS 447 - Software Testing</li>
        <li>CS 349 - User Interfaces</li>
        <li>SCI 207 - Physics, Universe, and Everything</li>
      </ul>
    )
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
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>JavaScript</li>
        <li>Java</li>
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>C++</li>
        <li>Python</li>
      </ul>
    )
  },
  {
    'title1' : 'Term 3A',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2015',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>CS 350 - Operating Systems</li>
        <li>CS 341 - Algorithms</li>
        <li>CS 348 - Database Management</li>
        <li>CO 250 - Introduction to Optimization</li>
        <li>ECON 102 Macroeconomics</li>
      </ul>
    )
  },
  {
    'title1' : 'Frameworks',
    'title2' : 'Front End, Back End, Software Testing',
    'icon' : 'react.png',
    'type' : 'skill',
    'date' : '',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>ReactJS</li>
        <li>JQuery</li>
        <li>Boost</li>
        <li>NodeJS</li>
        <li>Sass</li>
        <li>Open SSL</li>
      </ul>
    )
  },
  {
    'title1' : 'Term 2B',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2015',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>CS 240 - Data Structures</li>
        <li>CS 241 - Foundations of Sequential Programs</li>
        <li>CS 251 - Computer Organization and Design</li>
        <li>STAT 231 - Statistics</li>
        <li>ENGL 119 - Communications in Computer Science</li>
      </ul>
    )
  },
  {
    'title1' : 'Technologies',
    'title2' : 'Operating Systems, Version Control, Graphics',
    'icon' : 'android.png',
    'type' : 'skill',
    'date' : '',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>Android</li>
        <li>Linux</li>
        <li>Unix</li>
        <li>GIT</li>
        <li>OpenGL</li>
      </ul>
    )
  },
  {
    'title1' : 'Term 2A',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2014',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>CS 246 - Object-Oriented Software Development</li>
        <li>CS 245 - Logic and Computation</li>
        <li>MATH 239 - Introduction to Combinatorics</li>
        <li>STAT 230 - Probability</li>
        <li>AFM 101 - Financial Accounting</li>
      </ul>
    )
  },
  {
    'title1' : 'Term 1B',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Winter 2014',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>CS 136 - Elementary Algorithm Design and Data Abstraction</li>
        <li>MATH 136 - Linear Algebra</li>
        <li>MATH 138 - Calculus 2</li>
        <li>PSYCH 101 - Introduction to Psychology</li>
        <li>MSCI 311 - Organizational Design and Technology</li>
      </ul>
    )
  },
  {
    'title1' : 'Term 1A',
    'title2' : 'University of Waterloo, Computer Science',
    'icon' : 'uw.png',
    'type' : 'school',
    'date' : 'Fall 2013',
    'data' : (
      <ul style={{listStyleType : 'disc'}}>
        <li>CS 135 - Designing Functional Programs</li>
        <li>MATH 135 - Algebra</li>
        <li>MATH 137 - Calculus 1</li>
        <li>PHYS 111 - Physics 1</li>
        <li>ECON 101 - Microeconomics</li>
      </ul>
    )
  }
]

module.exports = cards;
