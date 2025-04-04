import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
import Compare from './pages/Compare';
import ApplyNow from './pages/ApplyNow';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Loans */}
            <Route path="/loans" element={<Loans />} />
            <Route path="/loans/personal" element={<PersonalLoan />} />
            <Route path="/loans/home" element={<HomeLoan />} />
            <Route path="/loans/business" element={<BusinessLoan />} />
            <Route path="/loans/education" element={<EducationLoan />} />
            <Route path="/loans/car" element={<CarLoan />} />
            <Route path="/loans/gold" element={<GoldLoan />} />
            <Route path="/loans/loan-against-property" element={<LoanAgainstProperty />} />
            <Route path="/loans/two-wheeler" element={<TwoWheelerLoan />} />

            {/* Credit Cards */}
            <Route path="/credit-cards" element={<CreditCard />} />
            <Route path="/credit-cards/rewards" element={<RewardsCreditCard />} />
            <Route path="/credit-cards/travel" element={<TravelCreditCard />} />
            <Route path="/credit-cards/fuel" element={<FuelCreditCard />} />
            <Route path="/credit-cards/shopping" element={<ShoppingCreditCard />} />

            {/* Insurance */}
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

            {/* Other Pages */}
            <Route path="/compare" element={<Compare />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
