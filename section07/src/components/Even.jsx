import { useEffect } from 'react';

const Even = () => {
    useEffect(() => {

        return () => {
            console.log("unmount");
        };
        // 클린업, 정리 함수 
    }, []);
    return <div>짝수입니다</div>;
};

export default Even;