import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const ContentDetails = () => {

    const {id} = useParams();

    const [content,setcontent] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const clickevent = ()=>{
        fetch('http://localhost:8000/content/'+ id,{
            method : 'DELETE',
        }).then(()=>{
            Navigate.push('/');
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/content/" + id)
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
        <div className="content-details">
            {isPending && <div>Loading...</div>}
            {content && (<article>
                <h2>{content.title}</h2>
                <p>Written by {content.author}</p>
                <div>{content.body}</div>
                <Link to="/Formula"><button className="btn btn--white btn--animated" onClick={clickevent}>Delete</button></Link>
            </article>)}
            {error && <div>{error}</div>}
        </div>
     );
}
 
export default ContentDetails;