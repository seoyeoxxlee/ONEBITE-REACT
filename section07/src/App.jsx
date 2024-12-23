import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';


function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false); // 초기값으로는 아직 이 컴포넌트는 마운트 되지 않았다는 의미의 false

  // 1. Mount
  useEffect(()=>{
    console.log("mount");
  }, []);

  // 2. Update
  useEffect(()=>{
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className = "App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
        }}/>
      </section>

      <section>
        <Viewer count={count} /> 
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
};

export default App
