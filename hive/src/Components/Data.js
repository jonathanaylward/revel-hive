// let color1 = '#262626';
// let color2 = '#4C4C4C';
// let color3 = '#727272';
// let color4 = '#999999';


// let color1 = 'rgb(76,76,76)';
// let color2 = '#4C4C4C';
// let color3 = '#4C4C4C';
// let color4 = '#4C4C4C';

// let stroke1 = '#97E0AE';
// let stroke2 = '#97E0AE';
// let stroke3 = '#97E0AE';
// let stroke4 = '#97E0AE';

let blackColor = 'rgb(0, 0, 0)';
let whiteColor = 'rgb(255, 255, 255)';

let color1 = 'rgb(76,76,76)';
let color2 = 'rgb(76,76,76)';
let color3 = 'rgb(76,76,76)';
let color4 = 'rgb(76,76,76)';

let stroke1 = '#97E0AE';
let stroke2 = '#97E0AE';
let stroke3 = '#97E0AE';
let stroke4 = '#97E0AE';

const MainNavData = [
    {
      top: 0,
      left: 0,
      delay: 0,
      fill: blackColor,
      stroke: whiteColor,
      category: `main`,
      text: ``,
      imageLink: `http://www.revelmarketing.co/uploads/1/6/2/6/16262646/revel-marketing-partnership-solutions-2.png`,
    },
    {
      top: -200,
      left: 0,
      delay: 200,
      fill: color1,
      stroke: stroke1,
      text: `Partnership Sales`,
      category: `partnership-sales`,
      imageLink: "",
    },
    {
      top: 0,
      left: 220,
      delay: 200,
      fill: color2,
      stroke: stroke2,
      text: `Marketing`,
      category: `marketing`,
      imageLink: "",
    },
    {
      top: 0,
      left: -220,
      delay: 200,
      fill: color3,
      stroke: stroke3,
      text: `Consulting`,
      category: `consulting`,
      imageLink: "",
    },
    {
      top: 200,
      left: 0,
      delay: 200,
      fill: color4,
      stroke: stroke4,
      text: `Contact Us`,
      category: `contact`,
      imageLink: "",
    }
  ]

const partnershipSalesData = [
    {   
        top: 0,
        left: 0,
        delay: 0,
        fill: `black`,
        stroke: `white`,
        text: `Partnership Sales`,
        category: `partnership-sales`,
      },
      {
        top: 0,
        left: -220,
        delay: 0,
        fill: color1,
      stroke: stroke1,
        text: `Esports & Gaming`,
        category: `partnership-sales`,
      },
      {
        top: -200,
        left: 0,
        delay: 0,
        fill: color1,
      stroke: stroke1,
        text: `Festivals & Events`,
        category: `partnership-sales`,
      },
      {
        top: 0,
        left: 220,
        delay: 0,
        fill: color1,
      stroke: stroke1,
        text: `Consulting`,
        category: `partnership-sales`,
      }
]

const marketingData = [
  {   
      top: 0,
      left: 0,
      delay: 0,
      fill: `black`,
      stroke: `white`,
      text: `Marketing`,
      category: `marketing`,
    },
    {
      top: 0,
      left: -220,
      delay: 0,
      fill: color2,
      stroke: stroke2,
      text: `Marketing Plans`,
      category: `marketing`,
    },
    {
      top: -200,
      left: 0,
      delay: 0,
      fill: color2,
      stroke: stroke2,
      text: `Brand Marketing Campaigns`,
      category: `marketing`,
    },
    {
      top: 0,
      left: 220,
      delay: 0,
      fill: color2,
      stroke: stroke2,
      text: `Direct Marketing`,
      category: `marketing`,
    }
]


const consultingData = [
  {   
      top: 0,
      left: 0,
      delay: 0,
      fill: `black`,
      stroke: `white`,
      text: `Consulting`,
      category: `consulting`,
    },
    {
      top: 0,
      left: -220,
      delay: 0,
      fill: color3,
      stroke: stroke3,
      text: `Hospitality`,
      category: `consulting`,
    },
    {
      top: -200,
      left: 0,
      delay: 0,
      fill: color3,
      stroke: stroke3,
      text: `Marketing Strategy`,
      category: `consulting`,
    },
    {
      top: 0,
      left: 220,
      delay: 0,
      fill: color3,
      stroke: stroke3,
      text: `Partnership Strategy`,
      category: `consulting`,
    }
]

const contactData = [
  {   
      top: 0,
      left: 0,
      delay: 0,
      fill: `black`,
      stroke: `white`,
      text: `Contact Us`,
      category: `contact`,
    },
    {
      top: 0,
      left: -220,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Set A Meeting`,
      category: `contact`,
    },
    {
      top: -200,
      left: 0,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Request Pricing`,
      category: `contact`,
    },
    {
      top: 0,
      left: 220,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Free Consultation`,
      category: `contact`,
    }
]

export { MainNavData, partnershipSalesData, marketingData, consultingData, contactData }