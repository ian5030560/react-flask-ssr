import { lazy, Suspense } from "react"
// import Counter from "./counter";
const Counter = lazy(() => import("./counter"));

export default function App() {
    return <>
        <h1>這是計時器</h1>
        <Suspense fallback={<span>載入中</span>}>
            <Counter />
        </Suspense>
    </>
}