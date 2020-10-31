import React, {  useState } from 'react'

let baseurl="fakeapi"
export const Todo = () => {
    const [data, setData]=useState()

    const addTodoHandler=()=>{
        fetch(`/${baseurl}/addTodos` , {
            method:"POST",
            body:{id:"2",text:"Hyy"}
        }).then((res)=>{
            console.log("Success",res)
        }).catch((error)=>{
            console.log("Error",error)
        })
    }
    const getTodo=()=>{
        fetch(`/${baseurl}/getTodos`).then((res)=>res.json()).then((data)=>{setData(data)})
    }
    return (
        <div>
            <button onClick={()=>{addTodoHandler()}}>Add Todo</button>
            <button onClick={()=>{getTodo()}}>Get Todo</button>
            {
                JSON.stringify(data)
            }
        </div>
    )
}
