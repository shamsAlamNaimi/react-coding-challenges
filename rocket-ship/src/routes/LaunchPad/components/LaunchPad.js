import React, { useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

   //after every 500ms the state rerenderCount is being updated thus causing the function to re-render
  //in order to stop this i just commented this function of
  ///////////////changes////////////////////////
  //setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);
  /////////////changes////////////////////////

  return (
    <div className="launchpad">
      <ClassRocket />
    </div>
  );
}
