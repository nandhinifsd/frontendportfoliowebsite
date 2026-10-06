

const projects = [
  {
    title: "Task Bloom",
    subtitle: "AI Enabled Personal Task Manager and Goal Tracker",
    category: "featured",
    badge: "Strongest project",
    description:
      "A personal task manager and goal tracker with Kanban-style task boards, daily planning and progress tracking. Groq AI helps generate subtasks when we give Goal as input, and the React frontend talks to a Node.js and Express backend.",
    technologies: [
      "React", "JavaScript", "React Router", "Redux Toolkit", "Tailwind CSS", "Axios",
      "REST APIs", "Node.js", "Express.js", "JSON Server", "Groq AI", "Web APIs",
    ],
    features: [
      "User authentication",
      "Task management",
      "Goal creation and tracking",
      "Kanban-style task organization",
      "Daily task planning",
      "Progress tracking",
      "Filtering",
      "Responsive dashboard",
      "AI-assisted goal/task generation",
      "API and backend integration",
      "Deployed online",
    ],
    demonstrates: [
      "React", "State management", "Routing", "API integration",
      "Backend communication", "AI integration", "Responsive UI", "Deployment",
    ],
    image: "/screenshots/taskbloom.png",
    github: "https://github.com/nandhinifsd/Smart-AI-Enabled-Personal-Task-Manger-and-Goal-Tracker-.git",
    live: "https://smartpersonaltaskmanagergoaltracker.netlify.app",
  },
  {
    title: "Stampora",
    subtitle: "Dashboard to manage Products, Customers and Orders on a single page",
    category: "featured",
    description:
      "A React ecommerce/product management application that lets a company organise and maintain its products, customers and orders from one dashboard.",
    technologies: ["React", "JavaScript", "React Router", "Axios", "REST APIs", "JSON Server", "CRUD operations"],
    features: [
      "Product listing",
      "Product CRUD",
      "Product filtering",
      "Product details",
      "Order management",
      "Customer information",
      "Order status management",
      "API integration",
      "Responsive UI",
    ],
    demonstrates: ["CRUD operations", "API integration", "Filtering", "Routing", "Frontend development"],
    image: "/screenshots/stampora.png",
    github: "https://github.com/nandhinifsd/React-stampore-project-crudoperations-and-filters-on-products-dashboard.git",
    live: "https://stampora.netlify.app",
  },
  {
    title: "Independence Day Greeting",
    subtitle: "Emotional Greeting with a quiz page",
    category: "featured",
    description:
      "An Greeting demonstrating the pain and scarifies behind the joy of freedom we enjoy A quiz page also assess our knowledge about our country.",
    technologies: ["React", "JavaScript", "React Router", "Motion"],
    features: [
      "Product listing",
      "Product CRUD",
      "Product filtering",
      "Product details",
      "Order management",
      "Customer information",
      "Order status management",
      "API integration",
      "Responsive UI",
    ],
    demonstrates: ["Responsive Design", "UI design", "Routing", "Frontend development"],
    image: "/screenshots/quiz.png",
    github: "https://github.com/nandhinifsd/Independencedaygreetingcardand-quizwith-react.git",
    live: "https://independencedaygreetingandquiz.netlify.app",
  },
  {
    title: "JourneyCraft",
    subtitle: "AI Powered Travel Planner",
    category: "featured",
    description:
      "Generate a personalised itinerary with AI and build your travel bucket list, so you can open your plans from anywhere.",
    technologies: ["Bootstrap", "JavaScript", "Node.js", "Express.js", "REST APIs", "Groq AI"],
    features: [
      "Personalized travel planning",
      "AI-generated itineraries",
      "Destination planning",
      "Travel preferences",
      "Travel bucket list",
      "API integration",
    ],
    demonstrates: [
      "React development", "Backend integration", "REST APIs",
      "AI API integration", "Practical full-stack development",
    ],
    image: "/screenshots/AItravelplanner.png",
    github: "https://github.com/nandhinifsd/nandhini-multistepform-ai-itinerary-generator.git",
    live: "https://nandhinifsd.github.io/nandhini-multistepform-ai-itinerary-generator/",
  },
  {
    title: "Tanjore Tales ",
    subtitle: "A Gallery for my Tanjore Paintings",
    category: "featured",
    description:
      "A Website that showcases my Tanjore arts and helps to scale my art instagram page to next level",
    technologies: ["Bootstrap", "JavaScript", "HTML","CSS"],
    features: [
      "Personalized travel planning",
      "AI-generated itineraries",
      "Destination planning",
      "Travel preferences",
      "Travel bucket list",
      "API integration",
    ],
    demonstrates: [
      "React development", "Backend integration", "REST APIs",
      "AI API integration", "Practical full-stack development",
    ],
    image: "/screenshots/tanjorepainting.jpeg",
    github: "https://github.com/nandhinifsd/bootstrap_responsive_website.git",
    live: "https://nandhinifsd.github.io/bootstrap_responsive_website/",
  },

  // ---------- Smaller JavaScript projects ----------
  {
    title: "Weather App",
    subtitle: "OpenWeather API with dynamic backgrounds and icons",
    category: "javascript",
    description:
      "A JavaScript weather application that retrieves and displays weather information using an API.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    features: [
      "Fetches live weather data from an API",
      "Backgrounds and icons change with the weather",
      "Current conditions and forecast",
    ],
    image: "/screenshots/weatherapp.png",
    github: "https://github.com/nandhinifsd/weather-app.git",
    live: "https://nandhinifsd.github.io/weather-app/",
  },
  {
    title: "Phone Book",
    subtitle: "CRUD operations with image upload",
    category: "javascript",
    description:
      "A JavaScript phone book/contact management application for storing and retrieving contacts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Create, read, update and delete contacts",
      "Profile image upload",
      "Favourite contacts",
    ],
    image: "/screenshots/phonebook.png",
    github: "https://github.com/nandhinifsd/Phonebookapp-with-CRUD-operations-on-server.git",
    live: "https://nandhinifsd.github.io/Phonebookapp-with-CRUD-operations-on-server/",
  },
  {
    title: "Todo List",
    subtitle: "Tasks saved with Local Storage",
    category: "javascript",
    description:
      "A simple JavaScript todo list application that uses browser Local Storage to persist tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    features: [
      "Add and manage tasks",
      "Tasks persist after reload",
      "Clean, simple interface",
    ],
    image: "/screenshots/Todo-list.png",
    github: "https://github.com/nandhinifsd/To-do-App-with-local-storage..git",
    live: "https://nandhinifsd.github.io/To-do-App-with-local-storage./",
  },
  {
    title: "Calculator",
    subtitle: "Basic arithmetic in JavaScript",
    category: "javascript",
    description:
      "A calculator application built using JavaScript to perform basic arithmetic operations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Basic arithmetic operations", "Button-driven interface"],
    image: "/screenshots/calc.png",
    github: "https://github.com/nandhinifsd/calculator.git",
    live: "https://nandhinifsd.github.io/calculator/",
  },
  {
    title: "Student Grade Calculator",
    subtitle: "Marks and average calculations",
    category: "javascript",
    description:
      "A JavaScript application for managing and displaying student marks and related calculations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Enter and display student marks", "Calculates averages and related results"],
    image: "/screenshots/Grade-calculator.png",
    github: "https://github.com/nandhinifsd/studentgradecalculator.git",
    live: "https://nandhinifsd.github.io/studentgradecalculator/",
  },
];

export default projects;