import { createContext, useState } from "react";

const RotateContext = createContext();

const initialRotation = "rotateL2R";

const RotateProvider = ({ children }) => {
  const [rotation, setRotation] = useState(initialRotation);

  const handleRotate = (e) => {
    if (e.target.checked) {
      setRotation("");
    } else {
      setRotation("rotateL2R");
    }
    console.log(rotation);
  };

  const data = { rotation, handleRotate, setRotation };

  return (
    <RotateContext.Provider value={data}>{children}</RotateContext.Provider>
  );
};

export { RotateProvider };
export default RotateContext;
