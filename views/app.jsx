import { useMemo, lazy, Suspense } from "react"
import Counter from "./counter";
import { useSSR } from "./ssr";

export default function App(props) {
    const ssr = useSSR();

    const pathName = useMemo(() => {
        let pathName;
        if (!ssr){
            pathName = "/";
        }
        else{
            pathName = "/pipe";
        }

        return pathName;
    }, [ssr]);

    return <>
        <h1>這是計時器</h1>
        <Counter/>
    </>
}