import Header  from './components/Header';
import Hero from './components/Hero'
import './App.css'
import './styles/styles.css'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
    </div>
  );
};
export default App;
