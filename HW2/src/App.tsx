import Form from './components/form/form.component';
import './App.css';
import TodoData from './components/Tododata/Tododata.component';
import AllTodos from './components/AllTodos/AllTodos.component';
import { useState } from 'react';
import { ITodoitem } from './components/type';

function App() {
  const [Todos, setTodos] = useState<ITodoitem[]>([]);

  const handleNewItem = (item : ITodoitem) => {
    setTodos([...Todos,item]);
  };

  const handleTaskToggle = (e : React.ChangeEvent<HTMLInputElement>) => {
    const itemId= e.target.dataset["itemId"];
    const newTodos = Todos.map((item) => {
      if(item.id === Number(itemId)) {
        return {...item, isDone : !item.isDone }
      }
      return item;

  } );
  setTodos(newTodos);
  };

  const handleDelete =(index : number) => {
    setTodos([...Todos.slice(0,index), ...Todos.slice(index + 1,Todos.length)]);

  }
  

  return (
    <div className='container'>
      <h1> {new Date().toDateString()} </h1>
      <Form onSubmit={handleNewItem}/> 
      <TodoData items={Todos} />
      <AllTodos items={Todos} onToggle={handleTaskToggle} onDelete={handleDelete}/>
    </div>

  )
}


export default App;
