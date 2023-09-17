import { useState } from "react";

const ProductForm = (props) => {
    const [content, setContent] = useState("")
    const { updateTodoList } = props

    const todoSubmission = (e) => { e.preventDefault()
        updateTodoList({ 
            content: content,   //Todo List Item
            isComplete: false,  //checkbox
            id: Math.floor(Math.random() * 10000).toString()})  //ID number
        setContent("")
    }

    return (
        <div className="form">
            <form onSubmit={todoSubmission}>
                <input value={content} onChange={(e) => { setContent(e.target.value) }} type="text" />
                <br/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ProductForm

