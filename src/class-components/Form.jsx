import React from "react";

export class Form extends React.Component {
    state ={
        name:"gb",
        arr:['ivanov','petrov','sidorov']
    }
    handleChangeName = (ev) =>{
        this.setState({ name: ev.target.value})
    }
    handleSubmit = (ev) =>{
        ev.preventDefault()
        console.log(this.state.name)
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            {this.state.arr.map((item,idx) => {
                return<div key={idx}>{item}</div>
            })}
        <input type="text" onChange={this.handleChangeName}/>
        <button>send form</button>
    </form>
    }
}