import React, {useState} from "react"
import ListContainer from "../ListContainer/ListContainer";


let i = 1;
const Input = () => {

    const [task, setTask] = useState()
    const [data, setData] = useState([])


    //Called when the add button is clicked
    const clickHandler = () => {
        setData(prevState => {
            console.log(prevState)
            return ([...prevState, task])
        });

    }

    //called whenever input value is changed
    const changeHandler = (event) => {

        const temp = {
            "id": i,
            "value": event.target.value,
            "isDone": false
        }
        setTask(temp)
        i++
    }

    // change the isDone property Function
    const doneHandler = (id) => {
        //putting state in new array
        const newArr =  data

        //change the isDone key if it is true put it false and reverse
        newArr.filter(item => item.id == id)[0].isDone
            ?
            newArr.filter(item => item.id == id)[0].isDone = false
            :
            newArr.filter(item => item.id == id)[0].isDone = true

         //put the updated array in state
         setData([...newArr])
    }

    return (
        <>
            <div className="input-container col-12 ">
                <input type="text" placeholder="Write your task" onChange={changeHandler}/>
                <button className="add-btn" onClick={clickHandler}>
                    Add Task
                </button>
            </div>


            {/*doneHandler is a up handed function that is triggered from ListContainer  */}
            <ListContainer doneFunc={doneHandler} data={data}/>
        </>


    )
}

export default Input