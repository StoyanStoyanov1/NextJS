"use client"
type Params = {
    error: Error;
    reset: () => void;
}

export default function ErrorBoundary({error, reset}: Params){
    return (
    <div>{error.message} 
        <button onClick={reset}>Try again</button>
    </div>
)
}