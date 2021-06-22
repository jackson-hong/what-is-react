import logo from './logo.svg';
import {Route} from 'react-router-dom';
import './App.css';
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import WritePage from "./pages/WritePage";
const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path={'/login'} />
      <Route component={RegisterPage} path={'/register'} />
      <Route component={WritePage} path={'/write'} />
      <Route component={PostPage} path={'/@:username/:postId'} />
    </>
  );
}

export default App;
