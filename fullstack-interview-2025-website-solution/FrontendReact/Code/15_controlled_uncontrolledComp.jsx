
// Controlled Component - Form data is controlled by React state
function Form() {
    const [name, setName] = useState("");

    return (
        <input value={name}
            onChange={(e) => setName(e.target.value)}
        />
    )
}
// Uncontrolled Components - Form data is handled by the DOM itself, use useRef to access the DOM element

function FormUn() {
    const inputRef = useRef();
    const handleSubmit = () => {
        console.log(inputRef.current.value)
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}