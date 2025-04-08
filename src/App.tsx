import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';
import Home from './pages/Home';
import Loans from './pages/loans/Loans';
import PersonalLoan from './pages/loans/PersonalLoan';
import HomeLoan from './pages/loans/HomeLoan';
import BusinessLoan from './pages/loans/BusinessLoan';
import EducationLoan from './pages/loans/EducationLoan';
import CarLoan from './pages/loans/CarLoan';
import GoldLoan from './pages/loans/GoldLoan';
import LoanAgainstProperty from './pages/loans/LoanAgainstProperty';
import TwoWheelerLoan from './pages/loans/TwoWheelerLoan';
import CreditCard from './pages/credit-cards/CreditCard';
import RewardsCreditCard from './pages/credit-cards/RewardsCreditCard';
import TravelCreditCard from './pages/credit-cards/TravelCreditCard';
import FuelCreditCard from './pages/credit-cards/FuelCreditCard';
import ShoppingCreditCard from './pages/credit-cards/ShoppingCreditCard';
import LifeInsurance from './pages/insurance/LifeInsurance';
import HealthInsurance from './pages/insurance/HealthInsurance';
import CarInsurance from './pages/insurance/CarInsurance';
import TwoWheelerInsurance from './pages/insurance/TwoWheelerInsurance';
import HomeInsurance from './pages/insurance/HomeInsurance';
import TravelInsurance from './pages/insurance/TravelInsurance';
import TermInsurance from './pages/insurance/TermInsurance';
import ULIP from './pages/insurance/ULIP';
import ChildInsurance from './pages/insurance/ChildInsurance';
import RetirementInsurance from './pages/insurance/RetirementInsurance';
import CriticalIllnessInsurance from './pages/insurance/CriticalIllnessInsurance';
import DentalInsurance from './pages/insurance/DentalInsurance';
import VisionInsurance from './pages/insurance/VisionInsurance';
import PetInsurance from './pages/insurance/PetInsurance';
import GadgetInsurance from './pages/insurance/GadgetInsurance';
import Insurance from './pages/insurance/Insurance';
import Investments from './pages/investments/Investments';
import Compare from './pages/Compare';
import ApplyNow from './pages/ApplyNow';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import Sitemap from './pages/Sitemap';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PartnerLogin from './pages/auth/PartnerLogin';
import PartnerRegister from './pages/auth/PartnerRegister';
import BusinessLoans from './pages/services/BusinessLoans';
import PersonalLoans from './pages/services/PersonalLoans';
import InsuranceServices from './pages/services/Insurance';
import InvestmentServices from './pages/services/Investments';
import CreditCards from './pages/services/CreditCards';
import CreditCardDetails from './pages/services/CreditCardDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/business-loans" element={<BusinessLoans />} />
            <Route path="/services/personal-loans" element={<PersonalLoans />} />
            <Route path="/services/insurance" element={<InsuranceServices />} />
            <Route path="/services/investments" element={<InvestmentServices />} />
            <Route path="/services/credit-cards" element={<CreditCards />} />
            <Route path="/services/credit-cards/:id" element={<CreditCardDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/register" element={<PartnerRegister />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/loans/personal" element={<PersonalLoan />} />
            <Route path="/loans/home" element={<HomeLoan />} />
            <Route path="/loans/business" element={<BusinessLoan />} />
            <Route path="/loans/education" element={<EducationLoan />} />
            <Route path="/loans/car" element={<CarLoan />} />
            <Route path="/loans/gold" element={<GoldLoan />} />
            <Route path="/loans/loan-against-property" element={<LoanAgainstProperty />} />
            <Route path="/loans/two-wheeler" element={<TwoWheelerLoan />} />
            <Route path="/credit-cards" element={<CreditCard />} />
            <Route path="/credit-cards/rewards" element={<RewardsCreditCard />} />
            <Route path="/credit-cards/travel" element={<TravelCreditCard />} />
            <Route path="/credit-cards/fuel" element={<FuelCreditCard />} />
            <Route path="/credit-cards/shopping" element={<ShoppingCreditCard />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/insurance/life" element={<LifeInsurance />} />
            <Route path="/insurance/health" element={<HealthInsurance />} />
            <Route path="/insurance/car" element={<CarInsurance />} />
            <Route path="/insurance/two-wheeler" element={<TwoWheelerInsurance />} />
            <Route path="/insurance/home" element={<HomeInsurance />} />
            <Route path="/insurance/travel" element={<TravelInsurance />} />
            <Route path="/insurance/term" element={<TermInsurance />} />
            <Route path="/insurance/ulip" element={<ULIP />} />
            <Route path="/insurance/child" element={<ChildInsurance />} />
            <Route path="/insurance/retirement" element={<RetirementInsurance />} />
            <Route path="/insurance/critical-illness" element={<CriticalIllnessInsurance />} />
            <Route path="/insurance/dental" element={<DentalInsurance />} />
            <Route path="/insurance/vision" element={<VisionInsurance />} />
            <Route path="/insurance/pet" element={<PetInsurance />} />
            <Route path="/insurance/gadget" element={<GadgetInsurance />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
