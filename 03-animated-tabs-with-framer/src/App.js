import './App.css';
import TabList from './components/TabList';

function App() {
  const tabs = [
    "World",
    "N.Y.",
    "Business",
    "Art",
    "Science"
  ];

  return (
    <div className="App bg-black h-screen flex flex-column justify-center items-center">
      <div className='text-white'>
        <TabList 
          tabs={tabs}
          activeIndex={1}
          onClick={({ newActiveIndex }) => {
            console.log(newActiveIndex);
          }}
        />
      </div>
    </div>
  );
}

export default App;
