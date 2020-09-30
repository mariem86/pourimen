import React,{useState} from 'react'
import { addAnnoces } from '../js/action/AnnonceAction';

 function AddAnnonces({title, typeTravaux,category,description,date, 
    setTitle, setTypeTravaux, setCategory, setDescription,setDate,edit,action}) {
       /* const handleSubmit = (e) => {
            e.preventdefault();
            addannoncee();
            setTitle('');
            setTypeTravaux('');
            setCategory('');
            setDescription('');
           setDate('');
          };*/
 
    return (
        <div>
          <input placeholder="enter your title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input placeholder="enter your typeTravaux" type="text" value={typeTravaux} onChange={(e)=>setTypeTravaux(e.target.value)}/>
            <input placeholder="enter your category" type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
            <input placeholder="enter your description" type="text" value={description} onChange={(e)=> setDescription(e.target.description)} />
            <input placeholder="enter your date" type="text" value={date} onChange={(e)=>setDate(e.target.date)} />
            
            <input type="button" value={edit? "edit annonce":"add annonce"} onClick={action} />
            
          
        </div>
    )
}
export default AddAnnonces
//<button onClick={handleSubmit}>AddAnnonce </button>