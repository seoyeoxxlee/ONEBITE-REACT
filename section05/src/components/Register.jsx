import { useState, useRef } from 'react';

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onSubmit= () => {
        // 사용자가 모든 요소를 제대로 잘 입력했는지 먼저 확인.
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소에 포커스 주기
            //console.log(inputRef.current);
            inputRef.current.focus();
        }
    };

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };



    return (
        <div>
            <div>
                <input
                    ref = {inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"}
                />
            </div>

            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date"
                />
            </div>

            <div>

                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;