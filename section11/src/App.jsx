import './App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "설거지하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch(action.type){
    case 'CREATE' : 
      return [action.data, ...state];
    case 'UPDATE' :
      return state.map((item)=>item.id === action.targetId? {...item, isDone: !item.isDone} : item);
    case 'DELETE' :
      return state.filter((item)=>item.id !== action.targetId);
      default :
      return state;
  }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  // todo 추가
  const onCreate = useCallback((content)=>{
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

// todo 수정
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  }, []);

  // todo 삭제 
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  }, [])

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider 
          value={memoizedDispatch}
        >
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>  
    </div>
  );
}

export default App
