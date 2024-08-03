import { Route, HashRouter, Routes } from 'react-router-dom';
import SelectPage from './components/page/common/selectPage';
import { ThemeProvider } from 'styled-components';

const THEME = {
  color_blue: '#00cb8d'
};

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={THEME}>
        <Routes>
          <Route path='/' element={<SelectPage />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
