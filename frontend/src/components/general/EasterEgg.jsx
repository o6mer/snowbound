import React from 'react';
import DosPlayer from "./dos-player";

function EasterEgg() {
  return (
    <div className="App" style={{ width: "1000px", height: "1000px" }}>
      <DosPlayer bundleUrl="digger.jsdos" />
    </div>
  );
}

export default EasterEgg;