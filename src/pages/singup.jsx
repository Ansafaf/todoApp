function Signup(){
    return (
        <div>
            <h1>Create Account</h1>

            <form>
                <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="Enter your email"/>
                <input type="password"  placeholder="Enter your password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Signup;