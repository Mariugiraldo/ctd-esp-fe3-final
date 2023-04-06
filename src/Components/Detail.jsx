import React from 'react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Detail from '../Routes/Detail';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
    const [detail, setDetail] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'    
    useEffect( () => {        
        axios(url).then(res => setDetail(res.data.details))
    }, [])     

    return (    
        <div style={{display:'flex', flexDirection:'row'}}>        
            {
                detail.map( det => (
                    <div id={det.id} className="card">
                        <h2>{det.name}</h2>
                        <h3>{det.email}</h3>
                        <h3>{det.phone}</h3>
                        <h3>{det.website}</h3>
                        <img src='images/doctor.jpg' alt="" width={200}/>
                    </div>
                ))        
            }        
        </div>
      )
    }
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico



      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}


      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}


export default Detail