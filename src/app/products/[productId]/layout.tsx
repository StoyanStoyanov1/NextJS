type Params = {
    children: React.ReactNode;
}

export default function ProductDeatulsLayout({children}: Params) {
    return (
        <>
            {children}
            <h2>Features products</h2>
        </>
    )
}