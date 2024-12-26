import { lazy, Suspense, useMemo } from "react"
import Counter from "./counter";
const LazyCounter = lazy(() => import("./counter"));

export default function App() {

    const pathName = useMemo(() => {
        if (typeof window !== 'undefined'){
            const pathName = window.location.pathname;
            return pathName;
        }
    }, []);

    return <>
        <h1>這是計時器</h1>
        {
            pathName === "/pipe" ? <Suspense fallback={<span>載入中</span>}>
                <LazyCounter />
            </Suspense> : <Counter />
        }
    </>
}