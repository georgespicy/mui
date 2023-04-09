// import Test7 from './components/Test7';
import Navbar from './navbar/Navbar';

function App() {
  const linksArray = ["Product", "Services", "Overview", "Contacts Us"];
  return (
    <>
    {/* <Test7 links={linksArray} /> */}
      <Navbar links={linksArray} />
    </>
  );
}

export default App;
