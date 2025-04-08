import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaTimes, FaFilter, FaSearch, FaStar, FaPlane, FaShoppingBag, FaGasPump, FaUtensils, FaFilm, FaGift } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Card categories
const categories = [
  'All',
  'Travel',
  'Shopping',
  'Fuel',
  'Dining',
  'Entertainment',
  'Lifestyle'
];

// Card features for comparison
const comparisonFeatures = [
  'Annual Fee',
  'Joining Fee',
  'Reward Rate',
  'Welcome Benefits',
  'Lounge Access',
  'Fuel Surcharge',
  'EMI Options',
  'Contactless',
  'Insurance',
  'Forex Markup'
];

interface CreditCard {
  id?: string;
  name: string;
  bank: string;
  category?: string;
  image: string;
  annualFee: string;
  joiningFee: string;
  rewardRate?: string;
  welcomeBenefits?: string;
  loungeAccess?: string;
  fuelSurcharge?: string;
  emiOptions?: string;
  contactless?: string;
  insurance?: string;
  forexMarkup?: string;
  features: string[];
  link: string;
  rewards?: string;
}

const creditCards = [
  // IDFC FIRST Bank Cards
  {
    id: "11",
    name: 'FIRST Classic Credit Card',
    bank: 'IDFC FIRST Bank',
    category: 'rewards',
    image: '/images/credit-cards/idfc-first-classic.png',
    annualFee: 'Lifetime Free',
    joiningFee: 'Lifetime Free',
    rewardRate: '10 reward points per ₹100 spent',
    welcomeBenefits: '2,000 reward points on first spend',
    loungeAccess: '4 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '10 reward points per ₹100 spent',
      '4 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Zero forex markup on international transactions',
      'EMI conversion facility'
    ],
    link: 'https://www.idfcfirstbank.com/credit-card/ntb-diy/apply?cardType=RPLP&utm_source=Partner&utm_medium=MMM&utm_campaign=HPCL_NSH_102'
  },
  {
    id: "12",
    name: 'FIRST Select Credit Card',
    bank: 'IDFC FIRST Bank',
    category: 'lifestyle',
    image: '/images/credit-cards/idfc-first-select.png',
    annualFee: '₹2,999',
    joiningFee: '₹2,999',
    rewardRate: '6X rewards on dining, entertainment, shopping',
    welcomeBenefits: '₹3,000 worth rewards on activation',
    loungeAccess: 'Unlimited domestic, 4 international',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '1.5%',
    features: [
      '6X rewards on dining, entertainment, shopping',
      'Unlimited domestic lounge access',
      '4 international lounge visits per year',
      '1% fuel surcharge waiver',
      'Golf privileges'
    ],
    link: 'https://www.idfcfirstbank.com/credit-card/ntb-diy/apply?cardType=RPLP&utm_source=Partner&utm_medium=MMM&utm_campaign=HPCL_NSH_102'
  },
  {
    id: "13",
    name: 'FIRST Wealth Credit Card',
    bank: 'IDFC FIRST Bank',
    category: 'premium',
    image: '/images/credit-cards/idfc-first-wealth.png',
    annualFee: '₹4,999',
    joiningFee: '₹4,999',
    rewardRate: '10X rewards on travel, dining, shopping',
    welcomeBenefits: '₹10,000 worth rewards on activation',
    loungeAccess: 'Unlimited domestic & international',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Premium travel insurance',
    forexMarkup: '1%',
    features: [
      '10X rewards on travel, dining, shopping',
      'Unlimited domestic & international lounge access',
      'Premium concierge services',
      'Golf privileges worldwide',
      'Premium travel insurance'
    ],
    link: 'https://www.idfcfirstbank.com/credit-card/ntb-diy/apply?cardType=RPLP&utm_source=Partner&utm_medium=MMM&utm_campaign=HPCL_NSH_102'
  },
  {
    id: "14",
    name: 'FIRST Power+ Credit Card',
    bank: 'IDFC FIRST Bank',
    category: 'fuel',
    image: '/images/credit-cards/idfc-first-power.png',
    annualFee: '₹499',
    joiningFee: '₹499',
    rewardRate: '5% cashback on fuel spends',
    welcomeBenefits: '₹500 worth fuel voucher',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '5% cashback on fuel spends',
      '1% cashback on all other spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Roadside assistance'
    ],
    link: 'https://www.idfcfirstbank.com/credit-card/ntb-diy/apply?cardType=RPLP&utm_source=Partner&utm_medium=MMM&utm_campaign=HPCL_NSH_102'
  },
  // Axis Bank Cards
  {
    bank: 'Axis Bank',
    name: 'Axis Bank Flipkart Credit Card',
    image: '/images/credit-cards/axis-flipkart.png',
    annualFee: '₹500 + GST',
    joiningFee: '₹500 + GST',
    rewards: '5% cashback on Flipkart, 4% on Myntra, 1.5% on other spends',
    features: [
      '5% cashback on Flipkart',
      '4% cashback on Myntra',
      '1.5% cashback on all other spends',
      '1% fuel surcharge waiver'
    ],
    link: '/apply-now?product=credit-card&type=flipkart'
  },
  {
    bank: 'Axis Bank',
    name: 'Axis Bank My Zone Credit Card',
    image: '/images/credit-cards/axis-my-zone.png',
    annualFee: '₹500 + GST',
    joiningFee: '₹500 + GST',
    rewards: '4% cashback on entertainment, 2% on dining, 1% on other spends',
    features: [
      '4% cashback on entertainment',
      '2% cashback on dining',
      '1% cashback on all other spends',
      '1% fuel surcharge waiver'
    ],
    link: '/apply-now?product=credit-card&type=myzone'
  },
  // SBI Cards
  {
    id: "1",
    name: 'SBI SimplySAVE Credit Card',
    bank: 'SBI Card',
    category: 'rewards',
    image: '/images/credit-cards/sbi-simplysave.png',
    annualFee: '₹2,999',
    joiningFee: '₹999',
    rewardRate: '5X Reward Points on all spends',
    welcomeBenefits: '5,000 Reward Points on joining',
    loungeAccess: '4 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '2%',
    features: [
      '5X Reward Points on all spends',
      '4 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Comprehensive travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://www.sbicard.com/sbi-card-en/credit-cards/rewards/sbi-card-pulse.page'
  },
  {
    id: "2",
    name: 'SBI SimplyCLICK Credit Card',
    bank: 'SBI Card',
    category: 'shopping',
    image: '/images/credit-cards/sbi-simplyclicks.png',
    annualFee: '₹499',
    joiningFee: '₹499',
    rewardRate: '10X Reward Points on online spends',
    welcomeBenefits: '2,000 Reward Points on joining',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '10X Reward Points on online spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://www.sbicard.com/sbi-card-en/credit-cards/shopping/simplyclick-sbi-card.page'
  },
  {
    id: "3",
    name: 'SBI PRIME Credit Card',
    bank: 'SBI Card',
    category: 'travel',
    image: '/images/credit-cards/sbi-prime.png',
    annualFee: '₹2,999',
    joiningFee: '₹2,999',
    rewardRate: '5X Reward Points on all spends',
    welcomeBenefits: '5,000 Reward Points on joining',
    loungeAccess: '4 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '2%',
    features: [
      '5X Reward Points on all spends',
      '4 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Comprehensive travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://www.sbicard.com/sbi-card-en/credit-cards/rewards/sbi-card-prime.page'
  },
  {
    id: "4",
    name: 'SBI ELITE Credit Card',
    bank: 'SBI Card',
    category: 'travel',
    image: '/images/credit-cards/sbi-elite.png',
    annualFee: '₹4,999',
    joiningFee: '₹4,999',
    rewardRate: '5X Reward Points on travel & dining',
    welcomeBenefits: '10,000 Reward Points on joining',
    loungeAccess: 'Unlimited domestic, 8 international',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '1.99%',
    features: [
      '5X Reward Points on travel & dining',
      'Unlimited domestic lounge access',
      '8 international lounge visits per year',
      '1% fuel surcharge waiver',
      'Comprehensive travel insurance'
    ],
    link: 'https://www.sbicard.com/sbi-card-en/credit-cards/travel/sbi-card-elite.page'
  },
  {
    id: "5",
    name: 'SBI PULSE Credit Card',
    bank: 'SBI Card',
    category: 'shopping',
    image: '/images/credit-cards/sbi-pulse.png',
    annualFee: '₹499',
    joiningFee: '₹499',
    rewardRate: '10X Reward Points on online spends',
    welcomeBenefits: '2,000 Reward Points on joining',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '10X Reward Points on online spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://www.sbicard.com/sbi-card-en/credit-cards/shopping/pulse-sbi-card.page'
  },
  {
    id: "6",
    name: 'HDFC Millennia Credit Card',
    bank: 'HDFC Bank',
    category: 'lifestyle',
    image: '/images/credit-cards/hdfc-millennia.png',
    annualFee: '₹1,000',
    joiningFee: '₹1,000',
    rewardRate: '5% cashback on Amazon, Flipkart, Myntra, Swiggy, Zomato',
    welcomeBenefits: '₹1,000 Amazon voucher',
    loungeAccess: '4 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '2%',
    features: [
      '5% cashback on Amazon, Flipkart, Myntra, Swiggy, Zomato',
      '1% cashback on all other spends',
      '4 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Comprehensive travel insurance'
    ],
    link: 'https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XRKD&SMCode=H5399&LGCode=NSDRM1&LCCode=NSDRM1#nbb'
  },
  {
    id: "7",
    name: 'HDFC MoneyBack+ Credit Card',
    bank: 'HDFC Bank',
    category: 'rewards',
    image: '/images/credit-cards/hdfc-moneyback.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '4% value back on IndianOil fuel spends',
    welcomeBenefits: '₹500 fuel voucher',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '4% value back on IndianOil fuel spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XRKD&SMCode=H5399&LGCode=NSDRM1&LCCode=NSDRM1&LC2=NSDRM1#nbb'
  },
  {
    id: "8",
    name: 'IndianOil HDFC Bank Credit Card',
    bank: 'HDFC Bank',
    category: 'fuel',
    image: '/images/credit-cards/hdfc-indianoil.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '4% value back on IndianOil fuel spends',
    welcomeBenefits: '₹500 fuel voucher',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '4% value back on IndianOil fuel spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XRKD&SMCode=H5399&LGCode=NSDRM1&LCCode=NSDRM1&LC2=NSDRM1#nbb'
  },
  {
    id: "9",
    name: 'HDFC Freedom Credit Card',
    bank: 'HDFC Bank',
    category: 'shopping',
    image: '/images/credit-cards/hdfc-freedom.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '5% cashback on online shopping',
    welcomeBenefits: '₹500 Amazon voucher',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '5% cashback on online shopping',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XRKD&SMCode=H5399&LGCode=NSDRM1&LCCode=NSDRM1&LC2=NSDRM1#nbb'
  },
  {
    id: "10",
    name: 'HDFC Swiggy Credit Card',
    bank: 'HDFC Bank',
    category: 'dining',
    image: '/images/credit-cards/hdfc-swiggy.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '5% cashback on Swiggy, 1% on other spends',
    welcomeBenefits: '₹500 Swiggy Money',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '5% cashback on Swiggy',
      '1% cashback on all other spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance'
    ],
    link: 'https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XRKD&SMCode=H5399&LGCode=NSDRM1&LCCode=NSDRM1&LC2=NSDRM1#nbb'
  },
  {
    id: "21",
    name: 'YES FIRST Marquee Credit Card',
    bank: 'YES Bank',
    category: 'premium',
    image: '/images/credit-cards/yes-marquee.png',
    annualFee: '₹5,000',
    joiningFee: '₹5,000',
    rewardRate: '5X rewards on travel, dining, shopping',
    welcomeBenefits: '₹10,000 worth rewards on activation',
    loungeAccess: 'Unlimited domestic & international',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Premium travel insurance',
    forexMarkup: '1%',
    features: [
      '5X rewards on travel, dining, shopping',
      'Unlimited domestic & international lounge access',
      'Premium concierge services',
      'Golf privileges worldwide',
      'Premium travel insurance'
    ],
    link: 'https://rkpl.getpopcard.co/?utm_source=EARNTRA&utm_campaign=NS&utm_medium=941912'
  },
  {
    id: "22",
    name: 'YES FIRST Reserv Credit Card',
    bank: 'YES Bank',
    category: 'premium',
    image: '/images/credit-cards/yes-reserv.png',
    annualFee: '₹3,000',
    joiningFee: '₹3,000',
    rewardRate: '4X rewards on dining, entertainment, shopping',
    welcomeBenefits: '₹5,000 worth rewards on activation',
    loungeAccess: 'Unlimited domestic, 4 international',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '1.5%',
    features: [
      '4X rewards on dining, entertainment, shopping',
      'Unlimited domestic lounge access',
      '4 international lounge visits per year',
      '1% fuel surcharge waiver',
      'Golf privileges'
    ],
    link: 'https://rkpl.getpopcard.co/?utm_source=EARNTRA&utm_campaign=NS&utm_medium=941912'
  },
  {
    id: "23",
    name: 'YES FIRST Elite+ Credit Card',
    bank: 'YES Bank',
    category: 'premium',
    image: '/images/credit-cards/yes-elite-plus.png',
    annualFee: '₹1,000',
    joiningFee: '₹1,000',
    rewardRate: '5X rewards on online shopping',
    welcomeBenefits: '₹1,000 Amazon voucher',
    loungeAccess: '4 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '5X rewards on online shopping',
      '4 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://rkpl.getpopcard.co/?utm_source=EARNTRA&utm_campaign=NS&utm_medium=941912'
  },
  {
    id: "24",
    name: 'YES SELECT Credit Card',
    bank: 'YES Bank',
    category: 'lifestyle',
    image: '/images/credit-cards/yes-select.png',
    annualFee: '₹2,500',
    joiningFee: '₹2,500',
    rewardRate: '5X rewards on dining, entertainment, shopping',
    welcomeBenefits: '₹5,000 worth rewards on activation',
    loungeAccess: '6 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '1.5%',
    features: [
      '5X rewards on dining, entertainment, shopping',
      '6 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Comprehensive travel insurance',
      'Travel concierge services'
    ],
    link: 'https://rkpl.getpopcard.co/?utm_source=EARNTRA&utm_campaign=NS&utm_medium=941912'
  },
  {
    id: "25",
    name: 'YES RuPay Credit Card',
    bank: 'YES Bank',
    category: 'rewards',
    image: '/images/credit-cards/yes-rupay.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '1% cashback on all spends',
    welcomeBenefits: '₹500 Amazon voucher',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '1% cashback on all spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://rkpl.getpopcard.co/?utm_source=EARNTRA&utm_campaign=NS&utm_medium=941912'
  },
  {
    id: "26",
    name: 'My Zone Credit Card',
    bank: 'Axis Bank',
    category: 'lifestyle',
    image: '/images/credit-cards/axis-my-zone.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '4X rewards on entertainment, 2X on dining',
    welcomeBenefits: '₹500 Amazon voucher',
    loungeAccess: '4 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '4X rewards on entertainment',
      '2X rewards on dining',
      '4 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance'
    ],
    link: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa111&axisreferralcode=MMMNS202'
  },
  {
    id: "27",
    name: 'Flipkart Axis Bank Credit Card',
    bank: 'Axis Bank',
    category: 'shopping',
    image: '/images/credit-cards/axis-flipkart.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '5% cashback on Flipkart, 4% on Myntra',
    welcomeBenefits: '₹500 Flipkart voucher',
    loungeAccess: '4 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '5% cashback on Flipkart',
      '4% cashback on Myntra',
      '4 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance'
    ],
    link: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa111&axisreferralcode=MMMNS202'
  },
  {
    id: "28",
    name: 'IndianOil Axis Bank Credit Card',
    bank: 'Axis Bank',
    category: 'fuel',
    image: '/images/credit-cards/axis-indianoil.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '4% value back on IndianOil fuel spends',
    welcomeBenefits: '₹500 fuel voucher',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '4% value back on IndianOil fuel spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa111&axisreferralcode=MMMNS202'
  },
  {
    id: "29",
    name: 'Rewards Credit Card',
    bank: 'Axis Bank',
    category: 'rewards',
    image: '/images/credit-cards/axis-reward.png',
    annualFee: '₹500',
    joiningFee: '₹500',
    rewardRate: '2X rewards on all spends',
    welcomeBenefits: '₹500 Amazon voucher',
    loungeAccess: '2 per year',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Basic travel insurance',
    forexMarkup: '2%',
    features: [
      '2X rewards on all spends',
      '2 complimentary domestic lounge visits per year',
      '1% fuel surcharge waiver',
      'Basic travel insurance',
      'Contactless payments enabled'
    ],
    link: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa111&axisreferralcode=MMMNS202'
  },
  {
    id: "30",
    name: 'Axis Bank Privilege',
    bank: 'Axis Bank',
    category: 'premium',
    image: '/images/credit-cards/axis-privilege.png',
    annualFee: '₹3,000',
    joiningFee: '₹3,000',
    rewardRate: '5X rewards on travel, dining, shopping',
    welcomeBenefits: '₹5,000 worth rewards on activation',
    loungeAccess: 'Unlimited domestic, 4 international',
    fuelSurcharge: '1% waiver',
    emiOptions: 'Yes',
    contactless: 'Yes',
    insurance: 'Comprehensive travel insurance',
    forexMarkup: '1.5%',
    features: [
      '5X rewards on travel, dining, shopping',
      'Unlimited domestic lounge access',
      '4 international lounge visits per year',
      '1% fuel surcharge waiver',
      'Comprehensive travel insurance'
    ],
    link: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa111&axisreferralcode=MMMNS202'
  }
];

const getPropertyValue = (card: CreditCard, feature: string): string => {
  const propertyMap: { [key: string]: keyof CreditCard } = {
    'Annual Fee': 'annualFee',
    'Joining Fee': 'joiningFee',
    'Reward Rate': 'rewardRate',
    'Welcome Benefits': 'welcomeBenefits',
    'Lounge Access': 'loungeAccess',
    'Fuel Surcharge': 'fuelSurcharge',
    'EMI Options': 'emiOptions',
    'Contactless': 'contactless',
    'Insurance': 'insurance',
    'Forex Markup': 'forexMarkup'
  };

  const propertyName = propertyMap[feature];
  if (!propertyName) return '-';
  
  const value = card[propertyName];
  return value ? String(value) : '-';
};

const CreditCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFee, setSelectedFee] = useState('');
  const [selectedRewardRate, setSelectedRewardRate] = useState('');
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleCardSelection = (cardId: string) => {
    setSelectedCards(prev => 
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : prev.length < 3 
          ? [...prev, cardId]
          : prev
    );
  };

  const filteredCards = creditCards.filter(card => {
    // Search functionality
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      (card.name && card.name.toLowerCase().includes(searchLower)) ||
      (card.bank && card.bank.toLowerCase().includes(searchLower));
    
    // Category filter
    const matchesCategory = selectedCategory === 'All' || 
      (card.category && card.category.toLowerCase() === selectedCategory.toLowerCase());
    
    // Annual Fee filter
    const matchesFee = !selectedFee || 
      (card.annualFee && parseInt(card.annualFee.replace(/[^0-9]/g, '') || '0') <= parseInt(selectedFee));
    
    // Reward Rate filter
    const matchesRewardRate = !selectedRewardRate || 
      (card.rewardRate && parseFloat(card.rewardRate.replace('%', '') || '0') >= parseFloat(selectedRewardRate));
    
    return matchesSearch && matchesCategory && matchesFee && matchesRewardRate;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 fixed top-0 left-0 right-0 z-10 bg-white shadow-sm"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-900 mb-4">
            Credit Cards
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare and apply for the best credit cards with exclusive rewards and benefits
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 mt-32">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by card name or bank..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="All">All Categories</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Fuel">Fuel</option>
                <option value="Dining">Dining</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Rewards">Rewards</option>
              </select>
              <select
                value={selectedFee}
                onChange={(e) => setSelectedFee(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Annual Fee</option>
                <option value="1000">₹1,000 or less</option>
                <option value="2500">₹2,500 or less</option>
                <option value="5000">₹5,000 or less</option>
              </select>
              <select
                value={selectedRewardRate}
                onChange={(e) => setSelectedRewardRate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Reward Rate</option>
                <option value="1">1% or more</option>
                <option value="2">2% or more</option>
                <option value="3">3% or more</option>
                <option value="5">5% or more</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600" />
                  <div className="p-6">
                    <div className="flex items-center justify-center h-32 sm:h-40 md:h-48 mb-4">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('placeholder')) {
                            target.src = '/images/placeholder-card.png';
                          }
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-display font-bold text-primary-900 group-hover:text-primary-600 transition-colors duration-300">
                          {card.name}
                        </h3>
                        <p className="text-gray-600">{card.bank}</p>
                      </div>
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800">
                        {card.category}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Annual Fee</p>
                        <p className="font-medium">{card.annualFee}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Reward Rate</p>
                        <p className="font-medium">{card.rewardRate}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      {card.id ? (
                        <button
                          onClick={() => handleCardSelection(card.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                            selectedCards.includes(card.id)
                              ? 'bg-primary-600 text-white hover:bg-primary-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {selectedCards.includes(card.id) ? 'Remove' : 'Compare'}
                        </button>
                      ) : (
                        <button
                          disabled
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-400"
                        >
                          Compare
                        </button>
                      )}
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors duration-300"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Comparison Section */}
        {selectedCards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">Compare Cards</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      {selectedCards.map((cardId) => {
                        const card = creditCards.find((c) => c.id === cardId);
                        if (!card) return null;
                        return (
                          <th
                            key={cardId}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {card.name}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {comparisonFeatures.map((feature) => (
                      <tr key={feature} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {feature}
                        </td>
                        {selectedCards.map((cardId) => {
                          const card = creditCards.find((c) => c.id === cardId);
                          if (!card) return null;
                          return (
                            <td key={cardId} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {getPropertyValue(card, feature)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CreditCards; 