/*****************************
*   DEPENDENCIES
*****************************/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MouseProvider } from './components/motion/MouseProvider';
import './index.css';
/*****************************
*   ROUTES
*****************************/
import { HOME, ERROR, FORECAST, THEORY } from './store/routes';
/*****************************
*   VIEWS
*****************************/
import { HomePage } from './views/HomePage';
import { ForecastPage } from './views/ForecastPage';
import { NotFoundPage } from './views/NotFoundPage';
import { TheoryPage } from './views/TheoryPage';
const App = () => {
  return (
    <Router>
      <MouseProvider />
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={FORECAST} element={<ForecastPage />} />
        <Route path={THEORY} element={<TheoryPage />} />
        <Route path={ERROR} element={<NotFoundPage />} />  
      </Routes>
    </Router>
  );
};

export default App;