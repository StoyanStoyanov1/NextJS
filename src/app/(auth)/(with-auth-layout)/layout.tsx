type Params = {
    children: React.ReactNode;
}

export default function AuthLayout({children}: Params) {
    return (
        <>
            <div>
                <h2>Inner layout</h2>
                {children}
            </div>
        </>
    )
}