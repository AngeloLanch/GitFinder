import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from 'pages/Home/index';
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
            <Route path="/">
              <Home />
            </Route>
            <Route path="/login/github/callback">
              <Home />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
