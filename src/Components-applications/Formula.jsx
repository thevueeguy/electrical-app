import React from 'react'
import { useState, useEffect } from 'react'
import { Addnew } from './Addnew'
import './css/formula.css'
import { Link } from 'react-router-dom'
import AddedList from './AddedList'


const Formula = () => {
  const [content,setcontent] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const clickevent = (id)=>{
      const newcontent = content.filter((blog)=>{
          return blog.id!==id;
      })    
      setcontent(newcontent);    
  }

  useEffect(()=>{
      setTimeout(()=>{
          fetch("http://localhost:8000/content")
      .then(res=>{
          if(!res.ok){
              throw Error('Could not Fetch The Data');
          }
          return res.json();
      }).then(data=>{
          setError(null);
          setcontent(data);
          setIsPending(false);
      }).catch(err=>{
          setError(err.message);
          setIsPending(false);
      });
      },100);
  },[]);
  return (
    
    <div className='formulaes'>
      <ul >
        <li ><Link className='lists oh' to='/ohm'>Ohm's Law</Link></li>
        <li ><Link className='lists se' to='/series-parallel'>Series-Parallel</Link></li>
        <li ><Link className='lists si' to='/singlephase'>Single Phase</Link></li>
        <li ><Link className='lists th' to='/3phases'>Three Phase</Link></li>
        <li ><Link className='lists co' to='/conversion'>Conversion</Link></li>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {content && <AddedList content={content}  clickevent = {clickevent} title={content.title}/>}
      </ul>
        <Link to='/create'> <Addnew/> </Link>
    </div>
  )
}

export default Formula