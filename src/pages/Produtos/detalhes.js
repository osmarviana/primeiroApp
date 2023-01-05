import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";

function Detalhes(){
    const params = useParams();
    console.log(params.id);

useEffect(() => {

}, [])

    return (
        <div>
            <Header />
            Detalhes            
        </div>
    )
}

export default Detalhes;