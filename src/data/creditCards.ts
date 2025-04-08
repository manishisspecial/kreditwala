export interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  annualFee: string;
  joiningFee: string;
  rewardRate: string;
  welcomeBenefits?: string;
  loungeAccess?: string;
  fuelSurcharge?: string;
  emiOptions?: string;
  contactless?: string;
  insurance?: string;
  forexMarkup?: string;
  rewards?: string;
}

export const creditCards: CreditCard[] = [
  {
    id: '1',
    name: 'HDFC Regalia',
    issuer: 'HDFC Bank',
    annualFee: '₹2,500',
    joiningFee: '₹1,000',
    rewardRate: '4 Reward Points per ₹150',
    welcomeBenefits: '5,000 Reward Points on joining',
    loungeAccess: '4 Complimentary Airport Lounge Access',
    fuelSurcharge: '1% Waiver on fuel transactions',
    emiOptions: 'No Cost EMI on 3,000+ merchants',
    contactless: 'Yes',
    insurance: 'Air Accident Cover up to ₹1 Crore',
    forexMarkup: '2%',
    rewards: 'Earn 4 Reward Points per ₹150 spent. 1 Reward Point = ₹0.20'
  },
  {
    id: '2',
    name: 'SBI SimplyCLICK',
    issuer: 'SBI Card',
    annualFee: '₹499',
    joiningFee: '₹499',
    rewardRate: '10X Reward Points on Online Shopping',
    welcomeBenefits: '₹500 Amazon Gift Card on joining',
    loungeAccess: '2 Complimentary Airport Lounge Access',
    fuelSurcharge: '1% Waiver on fuel transactions',
    emiOptions: 'No Cost EMI on 3,000+ merchants',
    contactless: 'Yes',
    insurance: 'Air Accident Cover up to ₹50 Lakhs',
    forexMarkup: '3.5%',
    rewards: 'Earn 10X Reward Points on online shopping and movie ticket purchases'
  },
  {
    id: '3',
    name: 'ICICI Amazon Pay',
    issuer: 'ICICI Bank',
    annualFee: '₹0',
    joiningFee: '₹0',
    rewardRate: '5% Cashback on Amazon',
    welcomeBenefits: '₹500 Amazon Gift Card on joining',
    fuelSurcharge: '1% Waiver on fuel transactions',
    emiOptions: 'No Cost EMI on Amazon',
    contactless: 'Yes',
    insurance: 'Air Accident Cover up to ₹25 Lakhs',
    forexMarkup: '3.5%',
    rewards: '5% cashback on Amazon purchases, 2% on other spends'
  }
]; 