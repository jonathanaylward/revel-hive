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
      text: `Operations`,
      category: `operations`,

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
        left: 151,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
        stroke: stroke1,
        text: `Esports & Gaming`,
        category: `partnership-sales`,
        link: `/partnership-sales/esports`,
      },
      {
        top: -101,
        left: 251,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
        stroke: stroke1,
        text: `Festivals & Events`,
        category: `partnership-sales`,
        link: `/partnership-sales/festivals-and-events`,
      },
      {
        top: -101,
        left: 351,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
        stroke: stroke1,
        text: `Traditional Sports`,
        category: `partnership-sales`,
        link: `/partnership-sales/traditional-sports`,
      },
      {
        top: -101,
        left: 451,
        initialTop: -101,
        initialLeft: 0,
        delay: 0,
        fill: color1,
        stroke: stroke1,
        text: `Consulting`,
        category: `partnership-sales`,
        link: `/partnership-sales/consulting`,
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
      link: `/marketing/#marketingplans`,
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
      link: `/marketing/#brandmarketingcampaigns`,
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
      link: `/marketing/#directmarketing`,
    }
]


const operationsData = [
    {
      top: 50,
      left: 176,
      initialTop: 50,
      initialLeft: 76,
      delay: 0,
      fill: color3,
      stroke: stroke3,
      text: `Hospitality`,
      category: `operations`,
      link: `/operations#hospitality`,
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
      category: `operations`,
      link: `/operations#marketingstrategy`,
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
      category: `operations`,
      link: `/operations#partnershipstrategy`,
    }
]

const contactData = [
    {
      top: 101,
      left: 151,
      initialTop: 101,
      initialLeft: 0,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Set A Meeting`,
      category: `contact`,
      link: `/contact#set-a-meeting`,
    },
    {
      top: 101,
      left: 251,
      initialTop: 101,
      initialLeft: 0,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Request Pricing`,
      category: `contact`,
      link: `/contact#request-pricing`,
    },
    {
      top: 101,
      left: 351,
      initialTop: 101,
      initialLeft: 0,
      delay: 0,
      fill: color4,
      stroke: stroke4,
      text: `Free Consultation`,
      category: `contact`,
      link: `/contact#free-consultation`,
    }
]

export { MainNavData, partnershipSalesData, marketingData, operationsData, contactData }