import {createServer} from 'miragejs'

export default function (){
    let arr=[{id:"1", text:"Hello"}]
    createServer({
        routes(){
            this.namespace="/fakeapi"
            this.get("/getTodos", {todos:arr})
            this.post("/addTodos" ,(_,req)=>{
                console.log("req" , req)
                arr.push(req.requestBody)
            })
        }
    })

}