import Header from './components/Cabecalho/Cabecalho';
import Hero from './components/Hero/Hero';
import ListaVagas from './containers/ListaVagas/ListaVagas';
import GlobalStyle from './Global.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  );
}


export default App;
