import { useState } from 'react'

import Courses from './components/Courses';
import Founders from './components/Founders';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import PopupForm from './components/PopupForm';
import CTA from './components/CTA';
import Header from './components/Header';

import './styles/WhyChooseSection.css'
import "./styles/Cta.css";
import "./styles/Courses.css";
import "./styles/Testimonials.css";
import "./styles/Founders.css";
import WhyChooseSection from './components/WhyChooseSection';
import QuantumHealing from './components/QuantumHealing';

function App() {
  const [open, setOpen] = useState(false);
;
  return (
    <>
     <Header/>
      <main className="page-content">
        {/* <CTA onOpenForm={() => setOpen(true)} /> */}
        <CTA/>
        <WhyChooseSection/>
        <Courses/>
        <Testimonials/>
        <Founders/>
        <QuantumHealing/>
        <Contact/>
        {open && <PopupForm onClose={() => setOpen(false)} />}
      </main>

    </>
  );
}

export default App
