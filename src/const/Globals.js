// import paths from "./paths";

const currentPathname = new URL(window.location.href).pathname;
export const RequestType = {
  GET: 0,
  POST: 1,
  PUT: 2,
  DELETE: 3,
};

export const paymentTypes = [
  {
    label: "תשלום מאובטח באשראי",
    value: "credit_card",
    // imgUrl: `${currentPathname}/regularPayment.png`,
    imgUrl: `https://dfus.co.il/wp-content/uploads/2020/07/%D7%AA%D7%A9%D7%9C%D7%95%D7%9D-%D7%9E%D7%90%D7%95%D7%91%D7%98%D7%97-%D7%91%D7%90%D7%A9%D7%A8%D7%90%D7%99.png`,
  },
  {
    label: "תשלום ב Bit",
    value: "bit",
    // imgUrl: `${currentPathname}/bit.png`,
    imgUrl: `https://upload.wikimedia.org/wikipedia/he/9/93/BIT_LOGO.jpg`,

  },
  {
    label: "תשלום ב ApplePay",
    value: "apple_pay",
    // imgUrl: `${currentPathname}/applePay.jpg`,
    imgUrl: `https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg`,
  },
  {
    label: "תשלום ב GooglePay",
    value: "google_pay",
    // imgUrl: `${currentPathname}/googlePay.png`,
    imgUrl: `https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg`,
  },
];
