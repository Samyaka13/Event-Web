"use client"
import React, { useEffect, useRef, useState } from 'react';
import RINGS from "vanta/dist/vanta.rings.min"
import * as THREE from "three";
function Test() {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(RINGS({
                el: vantaRef.current,
                THREE,
                color: 0x14b679,
                backgroundColor: 0x15173c,
                maxDistance: 34.0,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full"  />
            <div  className="absolute inset-0 bg-black/50 " />
            <div className="text-white relative z-10 min-h-screen">
                sdasdsaf
            </div>
        </div>
    );
}

export default Test;

// import React, { useEffect, useRef, useState } from 'react';
// import HALO from "vanta/dist/vanta.halo.min"
// import * as THREE from "three";
// function Test() {
//     const [vantaEffect, setVantaEffect] = useState(null);
//     const vantaRef = useRef(null);

//      useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         HALO({
//           el: vantaRef.current,
//           THREE,
//           color: 0x14b679,
//           backgroundColor: 0x15173c,
//           maxDistance: 34.0,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destory();
//     };
//   }, [vantaEffect]);

//     return (
//         <div className="relative z-50 min-h-screen w-full overflow-hidden">
//             <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
//             <div  className="absolute inset-0 bg-black/50 " />
//             <div ref={vantaRef} className="relative z-10 min-h-screen">
//                 checkdasfsdfdsfdfgdfgsfgsdfgsdfgdf
//             </div>
//         </div>
//     );
// }

// export default Test;
