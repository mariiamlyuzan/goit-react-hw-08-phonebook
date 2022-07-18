import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const BtnLng = () => {
  const { i18n } = useTranslation(['common']);

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en');
    }
  }, []);

  const handleLanguageChange = e => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <select
              className="nav-link bg-dark border-0 ml-1 mr-2"
              value={localStorage.getItem('i18nextLng')}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="ua">Українська</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BtnLng;
