import { useState } from "react";
import { stagger, useAnimate } from "framer-motion";

export default function CheckList() {
  const [ref, animate] = useAnimate();

  const [todos, setTodos] = useState([
    {id: 1, name: "One", checked: false},
    {id: 2, name: "Two", checked: true},
    {id: 3, name: "Three", checked: false},
    {id: 4, name: "Four", checked: true},
    {id: 5, name: "Five", checked: false},
    {id: 6, name: "Six", checked: false},
  ]);

  const handleChecked = (e, item) => {
    const temp = [...todos];
    temp.map((todo) => {
      if(todo.id === item.id) {
        todo.checked = !item.checked
      }
      return todo;
    });

    setTodos(temp);

    // Animate the checkboxes when all are checked
    
    if(temp.every(item => item.checked)) {

      // Bounce Effect
      animate(
        'input', 
        { scale: [1, 1.25, 1] },
        { duration: 0.4, delay: stagger(0.1, { from: "first" }) }
      );

      // Shake Effect
      animate(
        'input', 
        { x: [0, 2, -2, 0] },
        { duration: 0.4, delay: stagger(0.1, { from: "first" }) }
      );

      // Rotate Effect
      animate(
        'input', 
        { rotate: [0, 10, -10, 0] },
        { duration: 0.4, delay: stagger(0.1, { from: "first" }) }
      );
    }

  }


  return (
    <div className='p-6 bg-white w-96 rounded-md'>
      <h3 className='text-2xl font-medium'>Todos</h3>
      <div ref={ref} className='mt-4'>
        {todos.map((item, index) => (
          <div onClick={(e) => handleChecked(e, item)} className='flex items-center gap-4 hover:bg-gray-100 p-4 rounded-md'>
            <input 
              className='h-6 w-6' 
              checked={item.checked} 
              type='checkbox'
            />
            <span className={`${item.checked ? 'line-through text-gray-400' : ''} text-lg`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
