import './App.css';
import Home from './components/Home';

type Person = {
  name: string;
};

const person: Person = {
  name: 'Karri Partanen',
};

const App = () => {
  return (
    <>
      <h1>Hello {person.name}</h1>
      <Home/>
    </>
  );
};
export default App;
