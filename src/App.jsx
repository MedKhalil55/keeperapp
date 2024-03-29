import react,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
//import notes from "./Notes";
import CreateArea from "./CreateArea";

/*function createnote(note){
  return(
    <Note key={note.key} title={note.title} content={note.content}/>
  );
}*/

export default function App(){
 const [notes,setnotes] = useState(
  [
  ]

 );


  function ajoutnote(note){
   
    setnotes([...notes,note]);
  }
  function deletenote(id){
    setnotes(prevnotes => {
      return prevnotes.filter((note,index) => {
        return index != id ;
      });
    });

  }
    return(
      <div>
        <Header></Header>
        <CreateArea addnote={ajoutnote}/>
        {notes.map((note,index) => (<Note  id={index} title={note.title} content={note.content} delete={deletenote}/>))}
        <Footer></Footer>
      </div>
    );
}