import './styles.css';
import Header from './components/header/Header'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import data from './data'

function App() {
  const dataElements = data.map(data => {
    return(
      <Card key={data.id} {...data}/>
    )
  })
  return (
    <div className="App">
      <div className="App-center">
        <Header />
        <div className="main-container">
          <main className="main">
            {dataElements}
            {/* {data.map(data => <Card key={data.id} {...data}/>)} */}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
