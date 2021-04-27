import React from "react";

export default function List (){
    return(
        <ul>
            {new Array(10).fill({name:'咕咕咕',id:Math.random()}).map(({name,id})=>{
                <li key={id}>{`${name}${id}`}</li>
            })}
        </ul>
    )
}