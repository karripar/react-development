import './App.css';

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
    </>
  );
};
export default App;
