import { Link } from "react-router-dom";
import './css/addlist.css'
import './css/formula.css'
const AddedList = ({content, clickevent,title}) => {
    return (
        <li className="content-list">
            <h1>{title}</h1>
            {content.map((content)=> (<div className="content-preview" key={content.id}>
                <Link className="lists newList"to={`/contents/${content.id}`}>{content.title}</Link>
                </div>
            ))}
        </li>
    );
}
 
export default AddedList;