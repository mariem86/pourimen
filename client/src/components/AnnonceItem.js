import React from 'react'
import {useDispatch} from "react-redux"
import {deleteAnnonce} from "../js/action/AnnonceAction"
function AnnonceItem({annonce ,getAnnoncee}) {
    const dispatch = useDispatch()
    const deleteAnnoncee=()=>{
        dispatch(deleteAnnonce(annonce._id))
    }
    return (
        
        <div>
            
        
    <p>{annonce && annonce.title}</p>
     <p>{annonce && annonce.typeTravaux}</p> 
     <p>{annonce && annonce.category}</p>
     <p>{annonce && annonce.description}</p>
     <p>{annonce && annonce.date}</p> 
     <button onClick={deleteAnnoncee}>Delete</button> 
      <button   onClick={()=>getAnnoncee(annonce)}>Edit</button>
      
    </div>  
 
    )
}

export default AnnonceItem
