import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[title, setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or desc cannot be blank");
        }
        props.addTodo(title,desc);
    }
    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
