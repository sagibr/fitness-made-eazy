import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./features/Home/Home";
import Learn from "./features/Learn/Learn";
import { Programs } from "./features/Programs/Programs";
import GenderQuestein from "./features/Quiz/GenderQuestein";
import QuestionFive from "./features/Quiz/questions/QuestionFive";
import QuestionFour from "./features/Quiz/questions/QuestionFour";
import QuestionOne from "./features/Quiz/questions/QuestionOne";
import QuestionThree from "./features/Quiz/questions/QuestionThree";
import QuestionTwo from "./features/Quiz/questions/QuestionTwo";
import QuizAnswer from "./features/Quiz/QuizAnswer";

import About from "./core/About/About";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Programs" element={<Programs></Programs>}></Route>
          <Route path="/Learn" element={<Learn></Learn>}></Route>
          <Route
            path="/genderquestion"
            element={<GenderQuestein></GenderQuestein>}
          ></Route>
          <Route
            path="/questionOne"
            element={<QuestionOne></QuestionOne>}
          ></Route>
          <Route
            path="/questionTwo"
            element={<QuestionTwo></QuestionTwo>}
          ></Route>
          <Route
            path="/questionthree"
            element={<QuestionThree></QuestionThree>}
          ></Route>
          <Route
            path="/questionFour"
            element={<QuestionFour></QuestionFour>}
          ></Route>
          <Route
            path="/questionFive"
            element={<QuestionFive></QuestionFive>}
          ></Route>
          <Route path="/quizAnswer" element={<QuizAnswer></QuizAnswer>}></Route>
          <Route path="/AboutUs" element={<About />}></Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
