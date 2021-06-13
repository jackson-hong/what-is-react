import logo from "./logo.svg";
import "./App.css";
import React, { useState, useCallback } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPages";

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c221b58e2f3c4e00b8153dd75a956d9f"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // // };
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);
  //useCallback은 []를 뒤에 넣는 경우 함수가 컴포넌트가 처음 렌더링 됐을 때만 생성해주는 함수
  //useState를 사용하지 않을 경우 컴포넌트를 렌더링 할 때마다 새로 만들어진 함수를 사용한다
  //useCallback 뒤 배열에 지정된 객체를 넣을 경우 그 객체가 변화했을 때 지정된 함수를 새로 생성해준다.
  return <Route path={"/:category?"} component={NewsPage} />;
};

export default App;
