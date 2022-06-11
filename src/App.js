import './styles.css';
import { Header } from './components/header/Header'
import { Card } from './components/card/Card'
import { data } from './data'

function App() {
  const dataElements = data.map(data => {
    return(
      <Card key={data.id} {...data}/>
    )
  })
  return (
    <div className="App">
      <Header />
      <main className="main">
        {dataElements}
      </main>
    </div>
  );
}

export default App;
