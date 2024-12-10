import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      icons:{
        js: {
          name:"JavaScript",
          code: 'fa-brands fa-js',
          svg: '/icons/javascript.svg',
        },
        vue: {
          name:"Vue",
          code: 'fa-brands fa-vuejs',
          svg: '/icons/vue.svg',
        },
        react: {
          name:"React",
          code: "fa-brands fa-react",
          svg:""
        },
        svelte: {
          name:"Svelte",
          code: "fa-brands fa-s",
          svg:""
        },
        tailwind: {
          name: "Tailwind",
          code: "",
          svg: "/icons/tailwind.svg",
        },
        figma: {
          name:"Figma",
          code: 'fa-brands fa-figma',
          svg: '/icons/figma.svg',
        },
        git: {
          name:"Git",
          code: 'fa-brands fa-git',
          svg: '/icons/git.svg',
        },
        express: {
          name:"Express.js",
          code: 'fa-brands fa-node-js',
          svg: '/icons/express.svg',
        },
        python: {
          name:"Python",
          code: 'fa-brands fa-python',
          svg: '/icons/python.svg',
        },
        sql: {
          name:"SQL",
          code: 'fa-solid fa-database',
          svg: '/icons/sql.svg',
        },
        AI: {
          name: "AI",
          code: 'fa-solid fa-brain',
          svg: "",
        }
      },
      projects: [{
        title: 'Website V1',
        icons: ["vue", "express", "sql", "git"],
        description: "Website V1 was the first iteration of this website. I put a bigger emphasis on features and functionality, but decided that a simplistic design would be better for a portfolio appeal, which led me to create V2. <br><br>The main difference between the two websites is the customization of Vue-Router, Vuex, media queries, and unique components to better suit each website's design. A contact form using Express.js, PostgreSQL, and Supabase was also implemented in V1.",
        demoLink: 'https://my-website-ten-jet-20.vercel.app/home',
        gitHubLink: 'https://github.com/scrsund/scr-website',
      },
      {
        title: 'E-commerce Website',
        icons: ["vue", "git", "tailwind"],
        description: 'A minimalistic e-commerce website built using Vuex, Vue Router, and Tailwind CSS. I developed this project to enhance my understanding of modular architecture and responsive design while crafting a modern, stylish user interface.<br><br>The website features dynamic product listings, a functional shopping cart, and smooth UI interactions. It showcases my ability to build scalable and maintainable front-end architectures, manage state with Vuex, and create highly responsive designs using Tailwind CSS.',
        demoLink: 'https://ecom-website-flame.vercel.app',
        gitHubLink: 'https://github.com/scrsund/ecom-website',
      },
      {
        title: 'Trading Journal<br><i style="font-size: small; color: var(--clr-p2)">in development</i>',
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
      },
      // {
      //   title: 'Recipe App',
      //   icons: ["html", "css", "vue"],
      //   description: 'The Recipe App was the first Vue.js project I did on my own. Through inspiration from a project in the Udemy Course I was taking, I wanted to challenge my understanding of Vue.js by creating something simple to understand but had more complexity.<br><br>The app demonstrates knowledge in reusable components, state management, component communication patterns (such as props, provide/inject, slots, etc), and CSS scoped styling.',
      //   demoLink: 'https://recipe-app-ten-gamma.vercel.app',
      //   gitHubLink: 'https://github.com/scrsund/recipe-app',
      // },
    ],
    };
  },
  getters: {
    getProjectIcons: (state) => (project) => {
      return project.icons.map(iconKey => {
        const icon = state.icons[iconKey];
        return {code: icon.code, svg: icon.svg}

      })
    }
  }
});

export default store;
