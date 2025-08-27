import React from "react";

import Data from "./Shared/Data";
import Search from "./Search";


function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[620px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">Encuentre coches en venta y alquiler cerca</h2>
        <h2 className="text-[60px] font-bold">Encuentra el coche de tus sueños</h2>

        <Search />
        <img src="/tesla.png" alt="imagen" className="mt-10" />
      </div>
    </div>
  );
}

export default Hero;
