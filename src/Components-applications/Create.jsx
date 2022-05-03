import { useState } from "react";
import { BrowserRouter as Router, useNavigate, Redirect } from "react-router-dom";
import './css/create.css'
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const Navigate = useNavigate();

    const submitting = (e)=>{
        e.preventDefault();
        const blog = {title,body,author}
        setIsPending(true);
        
        fetch('http://localhost:8000/content',{
            method:'POST',
            headers: {"Content-type" :"application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log('NEW BLOG ADDED')
            setIsPending(false);
            // Navigate.go(-1);
            Navigate.push('/');
        });
    }
    return ( 
        <div className="create" onSubmit={submitting}>
            <h2>Add a New Blog</h2>
            <form>
                <label>Title :</label>
                <input 
                type="text" 
                required
                value ={title}
                onChange ={(e)=> setTitle(e.target.value)}
                />
                <label>Formula: </label>
                <textarea
                required
                value= {body}
                onChange ={(e)=> setBody(e.target.value)}
                >
                </textarea>
                <label>Author :</label>
                <input 
                type="text" 
                required
                value={author}
                onChange ={(e)=> setAuthor(e.target.value)}
                />
                 {!isPending && <button>Add Blog</button>}
                 {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;