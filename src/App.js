import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
