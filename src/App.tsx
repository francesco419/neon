import { Route, HashRouter, Routes } from 'react-router-dom';
import Selection from './components/page/selection';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Selection />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
