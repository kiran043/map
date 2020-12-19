import React, { useState } from "react";
const App = () => {
  const [data] = useState([
    {
      id: 1,
      title: "Kiran",
      Image: require("./Images/kk/domain.png").default,
      description: "lorems",
    },
    {
      id: 2,
      title: "Kiran",
      Image: require("./Images/kk/domain.png").default,
      description: "lorems",
    },
  ]);
  return (
    <div>
      {data.map((data, i) => {
        return (
          <div key={i}>
          <p>{data.id}</p>
            <p>{data.title}</p>
            <img style={{ width: "100px", height: "100px" }} src={data.Image} alt='' />
            <p>{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
