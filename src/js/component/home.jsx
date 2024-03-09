import React, {useState} from "react";

//create your first component
export function Home (){
    const [selectorColor, setselectorColor] = useState ("ColRojo");
    return(
        <>
        <div className="semaforo">
        <div
          onClick={() => setselectorColor("ColRojo")} // Actualiza el estado con "ColRojo"
          className={`light ColRojo ${selectorColor === "ColRojo" && "glow"}`} // Clases condicionales
        >
          a
        </div>
            <div onClick={()=> selectorColor("ColAmarillo")} className={"light ColAmarillo" + (setselectorColor === "ColAmarillo"? "glow" : "") }>b</div>
            <div onClick={()=> selectorColor("ColVerde")} className={"light ColVerde" + (setselectorColor === "ColVerde"? "glow" : "") }>c</div>
        </div></>
   




    

    );
}
export default Home;

