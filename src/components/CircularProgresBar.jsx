import React from 'react'

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'
const CircularProgresBar = () => {
  let percentage=86;
  return (
    <div style={{ width: 150, height: 150 }}>
    <Flat  
   progress={50}
   range={{ from: 0, to: 100 }}
   sign={{ value: '%', position: 'end' }}
   showMiniCircle={false}
   showValue={true}
   sx={{
     strokeColor: '#80DB66',
     barWidth: 5, 
     bgStrokeColor: '#d6d6d6', 
     shape: 'full',
     strokeLinecap: 'butt',
     valueSize: 22,
     valueWeight: 'bold',
     valueColor: '#2e2e37',
     valueFamily: 'Trebuchet MS',
     textSize: 13,
     textWeight: 'bold',
     textColor: '#2e2e37',
     textFamily: 'Trebuchet MS',
     loadingTime: 1000,
     miniCircleColor: '#80DB66',
     miniCircleSize: 5,
     valueAnimation: true,
     intersectionEnabled: true
   }}
/>
</div>
  //  
        
  //   <CircularProgressbar
  //     value={percentage}
  //     text={`${percentage}%`}
  //     styles={buildStyles({
  //       // Rotation of path and trail, in number of turns (0-1)
  //       rotation: 1,

  //       // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
  //       strokeLinecap: "butt",

  //       // Text size
  //       textSize: "22px",
      
  //       // How long animation takes to go from one percentage to another, in seconds
  //       pathTransitionDuration: 0.5,

  //       // Can specify path transition in more detail, or remove it entirely
  //       // pathTransition: 'none',

  //       // Colors
  //       pathColor: `#80DB66`,
  //       textColor: "#111",
  //       trailColor: "#d6d6d6",
  //     })}
  //   />
    
  // </div>
  )
}

export default CircularProgresBar
