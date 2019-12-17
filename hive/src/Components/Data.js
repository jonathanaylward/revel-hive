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
      initialTop: 0,
      initialLeft: 0,
      fill: blackColor,
      stroke: whiteColor,
      category: `main`,
      text: ``,
    },
    {
      top: -101,
      left: 0,
      initialTop: 0,
      initialLeft: 0,
      delay: 200,
      fill: color1,
      stroke: stroke1,
      text: `Partnership Sales`,
      category: `partnership-sales`,

    },
    {
      top: -50,
      left: 76,
      initialTop: 0,
      initialLeft: 0,
      delay: 200,
      fill: color2,
      stroke: stroke2,
      text: `Marketing`,
      category: `marketing`,

    },
    {
      top: 50,
      left: 76,
      initialTop: 0,
      initialLeft: 0,
      delay: 200,
      fill: color3,
      stroke: stroke3,
      text: `Consulting`,
      category: `consulting`,

    },
    {
      top: 100,
      left: 0,
      initialTop: 0,
      initialLeft: 0,
      delay: 200,
      fill: color4,
      stroke: stroke4,
      text: `Contact Us`,
      category: `contact`,

    }
  ]

const partnershipSalesData = [
      {
        top: -101,
        left: 100,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
        stroke: stroke1,
        text: `Esports & Gaming`,
        category: `partnership-sales`,
      },
      {
        top: -101,
        left: 200,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
      stroke: stroke1,
        text: `Festivals & Events`,
        category: `partnership-sales`,
      },
      {
        top: -101,
        left: 300,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
      stroke: stroke1,
        text: `Traditional Sports`,
        category: `partnership-sales`,
      },
      {
        top: -101,
        left: 400,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
      stroke: stroke1,
        text: `Consulting`,
        category: `partnership-sales`,
      }
]

const marketingData = [
    {
      top: -50,
      left: 176,
      initialTop: -50,
      initialLeft: 76,
      delay: 0,
      fill: color2,
      stroke: stroke2,
      text: `Marketing Plans`,
      category: `marketing`,
    },
    {
      top: -50,
      left: 276,
      initialTop: -50,
      initialLeft: 76,
      delay: 0,
      fill: color2,
      stroke: stroke2,
      text: `Brand Marketing Campaigns`,
      category: `marketing`,
    },
    {
      top: -50,
      left: 376,
      initialTop: -50,
      initialLeft: 76,
      delay: 0,
      fill: color2,
      stroke: stroke2,
      text: `Direct Marketing`,
      category: `marketing`,
    }
]


const consultingData = [
    {
      top: 50,
      left: 176,
      initialTop: 50,
      initialLeft: 76,
      delay: 0,
      fill: color3,
      stroke: stroke3,
      text: `Hospitality`,
      category: `consulting`,
    },
    {
      top: 50,
      left: 276,
      initialTop: 50,
      initialLeft: 76,
      delay: 0,
      fill: color3,
      stroke: stroke3,
      text: `Marketing Strategy`,
      category: `consulting`,
    },
    {
      top: 50,
      left: 376,
      initialTop: 50,
      initialLeft: 76,
      delay: 0,
      fill: color3,
      stroke: stroke3,
      text: `Partnership Strategy`,
      category: `consulting`,
    }
]

const contactData = [
    {
      top: 101,
      left: 100,
      initialTop: 101,
      initialLeft: 0,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Set A Meeting`,
      category: `contact`,
    },
    {
      top: 101,
      left: 200,
      initialTop: 101,
      initialLeft: 0,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Request Pricing`,
      category: `contact`,
    },
    {
      top: 101,
      left: 300,
      initialTop: 101,
      initialLeft: 0,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Free Consultation`,
      category: `contact`,
    }
]

export { MainNavData, partnershipSalesData, marketingData, consultingData, contactData }