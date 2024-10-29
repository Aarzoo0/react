//import Display from "./components/Display";


//import Number from "./components/Number";
//import FruitObjectArray from "./components/FruitObjectArray";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InputDemo from "./components/InputDemo";
import ButtonClick from "./components/ButtonClick";
import Counter from "./components/Counter";
import ProductList from "./components/product/ProductList";
import ActorList from "./components/actor/ActorList";
import Person from "./components/person/Person";
import TogleMovie from "./components/TogleMovie";
import EcomList from "./components/ecommerce/EcomList";
import EcomAdd from "./components/ecommerce/EcomAdd";
import EcomEdit from "./components/ecommerce/EcomEdit";

import Error from "./components/Error";
import EcomAddValidation from "./components/ecommerce/EcomAddValidation";
import Todolist from "./components/todo/Todolist";

import HeaderComp from "./components/HeaderComp";
import Venuelist from "./components/training/venue/Venuelist";
import HeaderTraining from "./components/training/HeaderTraining";
import Cohortlist from "./components/training/cohort/Cohortlist";


function App() {
  return (
    <>
    

      {/* <h2>This is App Component!</h2> */}
      {/* <Display></Display> */}
      {/* <Movie></Movie> */}
      {/* <Color></Color> */}
      {/* <Number></Number> */}
      {/* <Person></Person> */}
      {/* <FruitObjectArray></FruitObjectArray> */}
      {/* <ActorList></ActorList> */}
      {/* <Person></Person>
      <ProductList></ProductList> */}
      {/* <ButtonClick></ButtonClick> */}
      {/* <Counter></Counter> */}
      {/* <TogleMovie></TogleMovie> */}
      {/* <InputDemo></InputDemo> */}
      {/* <EcomList></EcomList> */}
      {/* <EcomAdd></EcomAdd>  */}
      {/* <EcomEdit></EcomEdit> */}
      {/* <EcomAddValidation></EcomAddValidation> */}
      
      {/* <Todolist></Todolist> */}
 

 {/* {
  <Venuelist></Venuelist>
 }
      */}

    <BrowserRouter>
      <HeaderComp></HeaderComp>
         <Routes>
          <Route path="/" element={<Counter/>}></Route>
          <Route path="/todo" element={<Todolist/>}></Route>
          <Route path="/ecom" element={<EcomList/>}></Route>
          <Route path="/actor" element={< ActorList/>}></Route>
          <Route path="/training" element={<HeaderTraining />}>
                <Route path="venue-list" element={<Venuelist />} />
                <Route path="cohort-list" element={<Cohortlist />} />
            </Route>
          <Route path="/*" element={<Error/>}></Route>
         </Routes>
    </BrowserRouter>
    
     
    </>
  );
}

export default App;
