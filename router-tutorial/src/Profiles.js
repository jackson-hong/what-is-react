import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";
const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <Link to={"/profiles/velopert"}>velopert</Link>
        </li>
        <li>
          <Link to={"/profiles/gildong"}>gildong</Link>
        </li>
      </ul>

      <Route
        path={"/profiles"}
        exact // exact = {true}와 같다 JSX에서 props의 값을 생략하면 자동으로 true가 된다
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path={"/profiles/:username"} component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
