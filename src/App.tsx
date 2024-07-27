import { Route, HashRouter, Routes } from 'react-router-dom';
import Selection from './components/page/selection.tsx';
import { ThemeProvider } from 'styled-components';

const THEME = {
  color_blue: '#00cb8d'
};

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={THEME}>
        <Routes>
          <Route path='/' element={<Selection />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
