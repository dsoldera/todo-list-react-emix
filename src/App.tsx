import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { TodoProps } from "./types/Todo";
import { TaskList } from "./components/TaskList";

export const App = () => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [isIdEditValue, setIsIdEditValue] = useState<String>('');
  const [checkDone, setCheckDone] = useState<Boolean>(false);
  const [inputText, setInputText] = useState('');
  const placeholder = 'Digite aqui uma nova tarefa...';

  useEffect(() =>{
    setTodoList(todoList);
    setCheckDone(false);
  }, [todoList, checkDone])

  const handleAddTodo = () => {
    if(inputText == ''){
      return
    }

    if(isIdEditValue){
      const editTodo = todoList.filter(todo => todo.id == isIdEditValue)
      editTodo[0].text = inputText;
      setInputText('');
      return
    } 
    //setTodoList()
    setTodoList(todoList => [
      ...todoList,
      {
        id: String(new Date().getTime()),
        text: inputText,
        statusInProgress: true,
      }
    ]);
    setInputText('');
    localStorage.setItem('TodoListEmix', JSON.stringify(todoList));
  }

  const handleDeleteTodo = (id: string) => {
    const filteredTodos = todoList.filter((todo) => todo.id !== id)
    setTodoList(filteredTodos);
  }

  const handleEditTodo = (id: string) => {
    const filteredTodo = todoList.filter((todo) => todo.id === id)
    setInputText(filteredTodo[0].text);
    setIsIdEditValue(filteredTodo[0].id);
  }

  const handleCheckDone = (id: string) => {
    const filteredTodo = todoList.filter((todo) => todo.id === id)
    filteredTodo[0].statusInProgress = false;
    setCheckDone(true);
  }

  return (
    <>
      <Header />
      <div className="container mx-auto w-1/2 bg-slate-200 p-5">
        <div className="flex">
          <input 
            className="w-5/6 p-2 placeholder-gray-400 placeholder-opacity-50 italic"
            type="text" 
            value={inputText} 
            placeholder={placeholder} 
            onChange={e => setInputText(e.target.value)} 
            />
          <button 
            className="bg-cyan-500 text-white text-xs p-2 font-bold ml-1"
            type="button" 
            onClick={handleAddTodo}>
              ADICIONAR
          </button>
        </div>
        <h2 className="green-dark text-[#003331] font-bold text-sm mt-5">A FAZER</h2>
        { todoList.filter(todo => todo.statusInProgress).map(todomap => {
          return (
            <TaskList
              key={todomap.id}
              id={todomap.id}
              text={todomap.text}
              statusInProgress={todomap.statusInProgress}
              onDelete={()=> handleDeleteTodo(todomap.id)}
              onEdit={()=> handleEditTodo(todomap.id)}
              onCheckDone={() => handleCheckDone(todomap.id)}
            />
          )
        })}
        <h2 className="green-dark text-[#003331] font-bold text-sm mt-5">FEITO</h2>
        { todoList.filter(todo => !todo.statusInProgress).map(todomap => {
          return (
            <TaskList 
              key={todomap.id}
              id={todomap.id}
              text={todomap.text}
              statusInProgress={todomap.statusInProgress}
              onDelete={()=> handleDeleteTodo(todomap.id)}
              onCheckDone={() => handleCheckDone(todomap.id)}
            />
          )
        })}
      </div>   
    </>
  )
}
