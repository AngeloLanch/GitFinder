import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Search } from 'pages/Search';
import GlobalStyle from 'styles/GlobalStyles';
import { Footer } from 'components/Footer';
import { AuthProvider } from 'context/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search/:user">
              <Search />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
