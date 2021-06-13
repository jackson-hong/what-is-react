import logo from "./logo.svg";
import { Link, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>홈</Link>
        </li>
        <li>
          <Link to={"/about"}>소개</Link>
        </li>
        <li>
          <Link to={"/profiles"}> 프로필</Link>
        </li>
        <li>
          <Link to={"/history"}> History 예제</Link>
        </li>
      </ul>
      <Route path={"/"} component={Home} exact={true} />
      {/* /about 으로 들어가면 두개 다 나타난다 */}
      <Route path={["/about", "/info"]} component={About} />
      <Route path={"/profiles"} component={Profiles} />
      <Route path={"/history"} component={HistorySample} />
    </div>
  );
};

export default App;

//Link 컴포넌트는 클릭하면 다른 주소로 이동시켜주는 컴포넌트
//일반 웹 어플리케이션에서는 a 태그를 사용하지만
//리액트 라우터에서는 사용하면 안 된다
//이 태그는 새로운 페이지를 불러오기 때문에 어플리케이션이 들고 있던 상태들을 모두 날려버린다
