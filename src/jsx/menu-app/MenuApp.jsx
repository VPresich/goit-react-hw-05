import { NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { BookPhone } from '../components/bookphone/BookPhone';
import { CafeFeedback } from '../components/cafe-feedback/CafeFeedback';
import { ProfileSection } from '../components/profile-section/PofileSection';
import { Controls } from '../components/controls/Controls';
import { LoginForm } from '../components/login-form/LoginForm';
import { FormikForm } from '../components/formik/FormikFrom';
import { HttpComponent } from '../components/http-query/HttpComponent';
import { HttpImages } from '../components/gallery/HttpImages';

import styles from './MenuApp.module.css';
import clsx from 'clsx';

export const MenuApp = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = to => {
    setActiveLink(to);
  };

  const buildLinkClassName = to => {
    const nameClass = clsx(styles.link, to === activeLink && styles.active);
    console.log(nameClass);
    return clsx(styles.link, to === activeLink && styles.active);
  };

  return (
    <div>
      <nav className={styles.menu}>
        <NavLink
          className={buildLinkClassName('/')}
          to="/"
          onClick={() => handleNavLinkClick('/')}
        >
          Profile
        </NavLink>

        <NavLink
          className={buildLinkClassName('/cafefeedback')}
          to="/cafefeedback"
          onClick={() => handleNavLinkClick('/cafefeedback')}
        >
          Feedback
        </NavLink>

        <NavLink
          className={buildLinkClassName('/bookphone')}
          to="/bookphone"
          onClick={() => handleNavLinkClick('/bookphone')}
        >
          Phone book
        </NavLink>

        <NavLink
          className={buildLinkClassName('/controls')}
          to="/controls"
          onClick={() => handleNavLinkClick('/controls')}
        >
          Controls
        </NavLink>

        <NavLink
          className={buildLinkClassName('/loginform')}
          to="/loginform"
          onClick={() => handleNavLinkClick('/loginform')}
        >
          LoginForm
        </NavLink>

        <NavLink
          className={buildLinkClassName('/formikform')}
          to="/formikform"
          onClick={() => handleNavLinkClick('/formikform')}
        >
          Formikform
        </NavLink>

        <NavLink
          className={buildLinkClassName('/httpcomponent')}
          to="/httpcomponent"
          onClick={() => handleNavLinkClick('/httpcomponent')}
        >
          HttpComponent
        </NavLink>

        <NavLink
          className={buildLinkClassName('/httpImages')}
          to="/httpImages"
          onClick={() => handleNavLinkClick('/httpImages')}
        >
          PhotosGallery
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProfileSection />} />
        <Route path="/cafefeedback" element={<CafeFeedback />} />
        <Route path="/bookphone" element={<BookPhone />} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/formikform" element={<FormikForm />} />
        <Route path="/httpcomponent" element={<HttpComponent />} />
        <Route path="/httpImages" element={<HttpImages />} />
      </Routes>
    </div>
  );
};
