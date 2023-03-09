import React from 'react';
import SplitScreen from "./SplitScreen";

const leftHandComponent = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "green"}}>Left!</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        voluptatum qui eveniet earum totam aperiam maiores ea fuga sit suscipit
        odit, quidem sed, corrupti obcaecati veniam, temporibus ad quis minima.
      </p> */}
    </div>
  );
};

const rightHandComponent = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red"}}>Right!</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem
        reiciendis ipsa atque beatae fuga autem nihil voluptatibus voluptatum
        animi est repudiandae neque voluptas ab maxime voluptate?
        Necessitatibus, sint impedit.
      </p> */}
    </div>
  );
};

function App() {
  return <SplitScreen left={leftHandComponent} right={rightHandComponent} />
    
}
export default App;
