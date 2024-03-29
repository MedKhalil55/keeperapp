import React,{useState} from "react";

function CreateArea(props) {
const [text,settext] = useState({
    title :"",
    content : ""
}
    
);
function handlechange(e){
    e.preventDefault();
    const { value, name } = e.target;
    settext(prevValue => {
        return {
          ...prevValue,
          [name]: value
        };
      });
}
  return (
    <div>
      <form>
        <input onChange={handlechange} name="title" placeholder="Title" value={text.title}/>
        <textarea onChange={handlechange} name="content" placeholder="Take a note..." rows="3" value={text.content} />
        <button onClick={
            (e) => {
                e.preventDefault();
                props.addnote(text);
                settext({
                    title :"",
                    content : ""
                });
            }

        }>Add Note</button>
      </form>
    </div>
  );
}

export default CreateArea;
