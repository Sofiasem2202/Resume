// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: "Ivan",
    lastname: "Ivanov",
},
  position: "Junior Fullstack JS Developer",
 sallary: "600$ на місяць",
 address:"вул.Київська 12"
}
var footer = {

  social:{
    email:{
      text:'ivanov@mail.com',
      href:'mailto:ivanov@mail.com',
    },
    phone:{
      text:'+30670000123',
      href:'tel:+30670000123',
    },
    Linkedin:{
    href:'https://www.linkedin.com/in',
    text:'Linkedin',
   },
  },
}



// ================================================================


// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page:{
      title:'Resume \summary',
    },

    header,
    
    main:{
   summary: {
    title:"Summary",
    text:`Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
    work on a new project I learn the domain and try to understand the idea of the project. Good team
    player, every colleague is a friend to me.`
   },
   experience: {
    title:"Other experience",
    text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`
   },},
    footer,
  })}
)


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page:{
      title:'Resume\skills',
    },

    header,
      main: {
        hobbies:[
       {name: 'Football',isMain: false},
       {name: 'Books',isMain: true },
       {name: 'Game',isMain: false },
        ],
        skills:[
        {
        name:'HTML',
        point: 10,
        isTop: true,
        },
        {
          name:'Handlebars',
        point: 2,
        isTop: true,
        },
        {
          name:'VS Code',
        point: 0,
        },
        {
          name:'Git',
        point: null,
        },
      ],
    },
    footer,
  })
})


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page:{
      title:'Resume\education',
    },

    header,
     main: {
      certificates: [
{ name: 'Диплом' ,id: 42552},
{ name: 'Ліцензія',id: 86552},
{ name: 'Грамота',id: 15525},
{ name: 'Диплом HTML',id: 15522},
 ],

        education: [
          {
            name: 'Школа',

            isEnd: true
             
          },
          {
            name: 'Уіверситет',
           
            isEnd: true
          },
          {
            name: 'Садок',
            
            isEnd: true
          },
          {
            name: 'Інтернат',
            
            isEnd: false  
          }],
        },
    footer,
  })
})




//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page:{
      title:'Resume\Work',
    },

    header,

     main: {
      works: [ 
        {
        position: 'Junior Fullstack Develper',
        company: {
        name: 'IT-Brains',
        url:'https:it-brains.com.ua',
      },
     duration: {
      from: '10.10.2022',
      to:null,
    },
    projectAmount: 3,
    projects: [
      {
      name: 'Resume',
      url: 'https:resume.com.ua',
      about: 'template-express-live-reload:server',
      stacks: [
        {
        name: 'React.js',

      },
      {
        name: 'HTML',
        
      },{
        name: 'Node.js',
        
      }, ],
    awards:[
      {
        name: "Створити список certificates на сторінці /education",
      },
      {
        name: "Захищена й розумна електронна пошта, якою легко користуватися",
      },
    ],
stackAmount: 3,
    sawardAmount: 2,

    }
  ]
   },
  ],
},
 footer,
  }
  )
}
)



// Підключаємо роутер до бек-енду
module.exports = router
