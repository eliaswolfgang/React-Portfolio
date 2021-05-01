import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="main">
        <Header />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
