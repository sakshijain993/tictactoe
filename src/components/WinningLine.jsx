function WinningLine({ line }) {

  const linePosition = {
    "0,1,2": { x1: 50, y1: 50, x2: 250, y2: 50 },

    "3,4,5": { x1: 50, y1: 150, x2: 250, y2: 150 },

    "6,7,8": { x1: 50, y1: 250, x2: 250, y2: 250 },


    "0,3,6": { x1: 50, y1: 50, x2: 50, y2: 250 },

    "1,4,7": { x1: 150, y1: 50, x2: 150, y2: 250 },

    "2,5,8": { x1: 250, y1: 50, x2: 250, y2: 250 },


    "0,4,8": { x1: 60, y1: 60, x2: 240, y2: 240 },

    "2,4,6": { x1: 240, y1: 60, x2: 60, y2: 240 },
  };


  const pos = linePosition[line.join(",")];

  if (!pos) return null;


  return (
    <svg
      className="
      absolute 
      inset-0 
      w-full 
      h-full 
      pointer-events-none
      "
      viewBox="0 0 300 300"
      preserveAspectRatio="none"
    >

      <line
        x1={pos.x1}
        y1={pos.y1}
        x2={pos.x2}
        y2={pos.y2}
        stroke="#FACC15"
        strokeWidth="10"
        strokeLinecap="round"
      />

    </svg>
  );
}

export default WinningLine;