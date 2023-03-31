import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function BasicExample() {
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [comments, setComments] = useState([]);
  
    const onClickHandle = () => {
      setComments([...comments, { name: name, text: text }]);
      setName("");
      setText("");
    };
  
    const onSubmitHandle = (e) => {
      e.preventDefault();
    };
  
    const onChangneHandle = (e) => {
      if (e.target.id === "name") {
        setName(e.target.value);
      } else if (e.target.id === "text") {
        setText(e.target.value);
      }
    };
    const deleteHandle = (index) => {
        const updatedItems = comments.filter((curr, ind) => ind !== index);
        setComments(updatedItems);
      };
      
  
    return (
      <div className="container">
        <Form onChange={onChangneHandle} onSubmit={onSubmitHandle}>
          <Form.Group className="mb-3" controlId="name">
            <div>
              <h4 className="add"> Add your comment</h4>
            </div>
            <Form.Control
              type="text"
              placeholder="Your Name"
              style={{ borderRadius: "0px" }}
              value={name}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="text">
            <Form.Control
              type="text"
              placeholder="Your Comment"
              style={{ height: "65px", borderRadius: "0px" }}
              value={text}
            />
          </Form.Group>
  
          <Button
            onClick={onClickHandle}
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "#39beb9",
              border: "#39beb9",
              padding: "4px 35px",
            }}
          >
            ADD
          </Button>
        </Form>
  
        {comments.map((comment, index) => {
          return (
            <div key={index}>
             <div className="container" style={{position:'relative', top:'146%', left:'23%'}}>
             {comment.name} <button className='del' onClick={()=> deleteHandle(index)}> X Delete</button>
             <hr />
              {comment.text}
             </div>
            </div>
          );
        })}
      </div>
    );
  }
  
export default BasicExample;