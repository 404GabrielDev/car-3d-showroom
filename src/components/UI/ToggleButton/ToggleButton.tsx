import { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [animation, setAnimation] = useState(false);

  const handleAnimation = () => {
    setAnimation(!animation);
  };
  return (
    <>
      {/*From Uiverse.io by cssbuttons-io*/}
      <div className="container-toggleBtn">
        <button id="btnMoreCars">More Cars</button>
      </div>
    </>
  );
};

export default ToggleButton;
