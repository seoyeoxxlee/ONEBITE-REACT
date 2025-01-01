import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
    const { onCreate }= useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    /* Enter(13)를 눌렀을 때도 todo가 입력되도록 함. */
    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (content === "") {
            /* Todo의 입력값이 빈칸일 때 입력칸에 focus 효과 */
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className="Editor">
            <input 
            ref={contentRef}
            value={content} 
            onKeyDown={onKeydown}
            onChange={onChangeContent} 
            placeholder="새로운 Todo.." 
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;