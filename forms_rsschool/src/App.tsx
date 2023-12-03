import { Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/NotFound';
import MainPage from './pages/MainPage';
import FormPage from './pages/FormPage';
import FormHookPage from './pages/FormHookPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/formhook" element={<FormHookPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
