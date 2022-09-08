import{ Form } from './components/Form/Form';
import{ Form as FormClass} from './class-components/Form';
import { Count as CountClass} from "./class-components/Count";
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';

import './index.css';


export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)

  const hadleChangeName = (ev) =>{
    setName(ev.target.value)
  }
  return (
    <div className="App">
    <Form /> 
    <h2 style={{backgroundColor: "green"}}>Class components</h2>
     <CountClass count={10}/>
    <hr/>
    <FormClass/>
    <hr/>
    <h2>Func components</h2>
    <Count />
    <hr/>
    <h3>Parent components</h3>
    <p>{count}</p>
    <input onChange={hadleChangeName}/>
    <h3>Child components</h3>
    <Child name={name} handleChangeCount={setCount}/>
    <Form />
    </div>
  );
}


