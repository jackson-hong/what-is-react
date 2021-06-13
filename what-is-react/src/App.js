import "./App.css";
import MyComponent from "./TestComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import RefSample from "./RefSample";
import React, { useState } from "react";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import Counter1 from "./Counter1";
import Info from "./Info";
import Average from "./Average";

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

const App = () => {
  return <Info />;
};
export default App;
