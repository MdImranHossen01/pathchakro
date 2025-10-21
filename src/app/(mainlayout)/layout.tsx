import React from "react";
import Navbar from "./components/Navbar";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

const MainLayout = ({ children }:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar/>
     <div className="grid grid-cols-12">
        <div className="col-span-3">
            <LeftComponent/>
        </div>
         <div className="col-span-6">{children}</div>
         <div className="col-span-3">
            <RightComponent/>
         </div>
     </div>
    </>
  );
};

export default MainLayout;
