import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function PersonView(props) {
  const { userData } = useContext(FormContext);
  return (
    <div>
      {userData.map((item, index) => {
        return (<div>
          <h4 key={Math.random()}>{item.name}</h4>
          <h4 key={Math.random()}>{item.email}</h4>
          <h4 key={Math.random()}>{item.phone}</h4>
        </div>)
      })}
    </div>
  );
}

export default PersonView;
