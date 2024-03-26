import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
