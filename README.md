# 🏏 XYZ Organization - Cricket Tournament Website

## Table of Contents
- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Technologies Used](#technologies-used)
- [Modules Used](#modules-used)
- [Required Installations](#required-installations)
- [Project Flow](#project-flow)
- [Components](#components)
- [Conclusion](#conclusion)

## Introduction

Welcome to the XYZ Organization’s Cricket Tournament website! This interactive platform serves as a hub for cricket enthusiasts and players, dedicated to showcasing various cricket tournaments across multiple formats. Developed using React.js and styled with Tailwind CSS, this website provides a dynamic and engaging experience for users. Immerse yourself in the world of cricket, explore upcoming tournaments, register for events, and access a wealth of cricket-related information. Whether you're a player, a fan, or a sponsor, this platform is designed to meet all your cricket needs!

## Problem Statement

The objective is to create an interactive and responsive web page using the following React components:

1. *Navbar*: A navigation bar for easy access to different sections of the website.
2. *Sidebar*: A collapsible menu to navigate between various pages.
3. *Search Bar*: A user-friendly input for searching events and tournaments.
4. *Cards*: Display at least four cards, each containing an image and relevant information about cricket tournaments.
5. *Pie Charts*: At least four pie charts representing relevant cricket statistics or information.
6. *Table*: A table with a minimum of five columns and four rows displaying cricket data.
7. *Form*: A form that includes date selection, dropdowns, checkboxes (minimum of 3), radio buttons (minimum of 2), text boxes (minimum of 2), and a submit button.
8. *Footer*: Content relevant to the XYZ Organization.

The website should exhibit smooth responsive behavior, adapting seamlessly to different screen sizes and devices.

## Technologies Used

### React.js
React.js is utilized for building a component-based UI, enhancing reusability and performance in dynamic web interfaces. The virtual DOM ensures efficient updates, resulting in faster rendering.

### Tailwind CSS
Tailwind CSS is employed for styling, providing a utility-first approach that allows for rapid UI development while maintaining design consistency.

## Modules Used

### React
The core library for building user interfaces in JavaScript.

### React Router DOM
- *Route*: Defines components that render based on the current URL.
- *Routes*: Manages multiple routes within the application.

### React Icons
Icons for enhancing UI elements such as the navbar and sidebar.

### useState and useRef
React hooks for managing state and creating references in functional components.

### Chart.js and React-Chartjs-2
Libraries for rendering pie charts and other statistical representations in a React-friendly way.

## Required Installations

To set up the project locally, ensure you have Node.js installed, then follow these steps:

1. *Clone the repository*:
   bash
     git clone https://github.com/MukthaMeti/Cricket.git
     cd xyz-organization-website
2. **Install the necessary npm packages and run it:**
   bash
     npm install react react-icons react-chartjs-2 chart.js@latest react-router-dom
     npm start