let blue = '#08174A';
let mediumBlue = '#283D6B';
let lightBlue = '#5F7EA2';

const MainNavData = [
    {
      top: 0,
      left: 0,
      delay: 0,
      fill: `black`,
      category: `main`,
      imageLink: `http://www.revelmarketing.co/uploads/1/6/2/6/16262646/revel-marketing-partnership-solutions-2.png`,
    },
    {
      top: -250,
      left: 0,
      delay: 400,
      fill: mediumBlue,
      category: `esports`,
      imageLink: "",
    },
    {
      top: -120,
      left: 140,
      delay: 400,
      fill: lightBlue,
      category: `events`,
      imageLink: "",
    },
    {
      top: -120,
      left: -140,
      delay: 400,
      fill: blue,
      category: `regularSports`,
      imageLink: "",
    }
  ]

const esportsNavData = [
    {   
        top: 0,
        left: 0,
        delay: 0,
        fill: mediumBlue,
        category: `events`,
      },
      {
        top: -250,
        left: 0,
        delay: 0,
        fill: mediumBlue,
        category: `events`,
      },
      {
        top: -120,
        left: 140,
        delay: 0,
        fill: mediumBlue,
        category: `events`,
      },
      {
        top: -120,
        left: -140,
        delay: 0,
        fill: mediumBlue,
        category: `events`,
      }
]

const eventsNavData = [
  {   
      top: 0,
      left: 0,
      delay: 0,
      fill: lightBlue,
      category: `events`,
    },
    {
      top: -250,
      left: 0,
      delay: 0,
      fill: lightBlue,
      category: `events`,
    },
    {
      top: -120,
      left: 140,
      delay: 0,
      fill: lightBlue,
      category: `events`,
    },
    {
      top: -120,
      left: -140,
      delay: 0,
      fill: lightBlue,
      category: `events`,
    }
]


const regularSports = [
  {   
      top: 0,
      left: 0,
      delay: 0,
      fill: blue,
      category: `events`,
    },
    {
      top: -250,
      left: 0,
      delay: 0,
      fill: blue,
      category: `events`,
    },
    {
      top: -120,
      left: 140,
      delay: 0,
      fill: blue,
      category: `events`,
    },
    {
      top: -120,
      left: -140,
      delay: 0,
      fill: blue,
      category: `events`,
    }
]

export { MainNavData, esportsNavData, eventsNavData, regularSports }