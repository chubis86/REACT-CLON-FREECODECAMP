import React from 'react';
import './hojas-de-estilo/Testimonio.css';


const datos=[
    {
        nombre:'Emma Bostian',
        pais:'Suecia',
        imagen:'../imagenes/testimonio-emma.png',
        cargo:'Ingeniera de Software',
        empresa: 'Spotify',
        testimonio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, pariatur! Quas cum adipisci, dolor, molestias alias accusamus ipsa inventore vero beatae nihil eaque illo, repellendus voluptatibus eveniet ut veniam optio?'
    },

    {
        nombre:'Shawn Wang',
        pais:'Singapur',
        imagen:'../imagenes/testimonio-shawn.png',
        cargo:'Ingeniero de Software',
        empresa: 'Amazon',
        testimonio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, pariatur! Quas cum adipisci, dolor, molestias alias accusamus ipsa inventore vero beatae nihil eaque illo, repellendus voluptatibus eveniet ut veniam optio?'
    },

    {
        nombre:'Sarah Chima',
        pais:'Nigeria',
        imagen:'../imagenes/testimonio-sarah.png',
        cargo:'Ingeniera de Software',
        empresa: 'ChatDesk',
        testimonio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, pariatur! Quas cum adipisci, dolor, molestias alias accusamus ipsa inventore vero beatae nihil eaque illo, repellendus voluptatibus eveniet ut veniam optio?'
    }
]
    



export default function Testimonio(){
    return(
        <>
        {datos.map((item)=>(
            <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={item.imagen}/> 
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{item.nombre}</strong> {item.pais}</p>
                <p className='cargo-testimonio'>{item.cargo} en <strong>{item.empresa}</strong></p>
                 <p className='texto-testimonio'>{item.testimonio}</p>
            </div>
            
        </div>

        ))  }
        </> 
           
    );
}   