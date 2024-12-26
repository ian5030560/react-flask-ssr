import { useCallback, useState } from "react";

export default function Counter() {
    const [value, setValue] = useState(0);

    const handleClick = useCallback(() => {
        setValue(prev => ++prev);
    }, []);

    return <button onClick={handleClick}>{value}</button>
}