import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      icons:{
        html: 'fa-brands fa-html5',
        css: 'fa-brands fa-css3-alt',
        js: 'fa-brands fa-js',
        vue: 'fa-brands fa-vuejs',
        express: 'fa-brands fa-node-js',
        python: 'fa-brands fa-python',
        sql: 'fa-solid fa-database',
        git: 'fa-brands fa-git',
        figma: 'fa-brands fa-figma',
      },
      projects: [{
        title: 'Website V1',
        icons: ["vue", "express", "sql", "git"],
        description: "Website V1 was the first iteration of this website. I put a bigger emphasis on features and functionality, but decided that a simplistic design would be better for a portfolio appeal, which led me to create V2. <br><br>The main difference between the two websites is the customization of Vue-Router, Vuex, media queries, and unique components to better suit each website's design. A contact form using Express.js, PostgreSQL, and Supabase was also implemented in V1.",
        demoLink: 'https://my-website-ten-jet-20.vercel.app/home',
        gitHubLink: 'https://github.com/scrsund/scr-website',
      },
      {
        title: 'Recipe App',
        icons: ["html", "css", "vue"],
        description: 'The Recipe App was the first Vue.js project I did on my own. Through inspiration from a project in the Udemy Course I was taking, I wanted to challenge my understanding of Vue.js by creating something simple to understand but had more complexity.<br><br>The app demonstrates knowledge in reusable components, state management, component communication patterns (such as props, provide/inject, slots, etc), and CSS scoped styling.',
        demoLink: 'https://recipe-app-ten-gamma.vercel.app',
        gitHubLink: 'https://github.com/scrsund/recipe-app',
      },
      {
        title: 'Trading Journal<br><i style="font-size: small; ">in development</i>',
        icons: ["vue", "express", "sql", "git", "figma"],
        description: 'This project is a passion project. I wanted to create something to help day traders with their psychological hang ups and make it easier to stick to their strategies. It will have features such as reminders, current trades, trade history, predictions, statistics and more.<br><br>It will be the biggest project I have done to-date, and I will be finding ways to broaden my skill set as well as continuing to implement Vue-Router, Vuex, PostgreSQL, and Express.js.',
        demoLink: 'https://trading-journal-iota.vercel.app/dashboard',
        gitHubLink: 'https://github.com/scrsund/trading-journal',
      },
      {
        title: 'Turtle Cross',
        icons: ["python"],
        description: 'Turtle Cross is an interactive game that I developed using python and its native Turtle graphics module. The game features multiple levels of increasing difficulty, where players must navigate through obstacles while tracking their progress on a scoreboard. <br><br>I created the game using Object-Oriented Programming (OOP), implementing modular and scalable classes for each game element, ensuring that future enhancements can be easily made.',
        demoLink: '',
        gitHubLink: 'https://github.com/scrsund/turtle-cross',
      }
    ],
    };
  },
  getters: {
    getProjectIcons: (state) => (project) => {
      return project.icons.map(iconKey => state.icons[iconKey])
    }
  }
});

export default store;
