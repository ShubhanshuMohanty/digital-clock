import React from "react";
import DigitalClock from "./components/DigitalClock";
import Dropdown from "./components/DropDown";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <Nav/>
      <div className=" h-screen flex  flex-col items-center gap-1 dark:bg-customDark">
        {/* <Dropdown/> */}
        <DigitalClock />
        <DigitalClock mirror={true} />
      </div>
    </>
  );
}

export default App;
