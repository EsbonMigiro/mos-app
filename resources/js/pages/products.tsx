export default function Products() {
    return (
        <>
            <div className="border-3 border-black">
                <h1>Register</h1>
                <form action={'/proregister'} method="GET">
                    <input type="text" placeholder="name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Register</button>
                </form>
            </div>
        </>
    );
}
