console.log("{{{ REACT APPLICATION }}}");
console.log("{{{ BEFORE React.createClass }}}");
function Button() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
console.log("{{{    AFTER function Button() {}   }}");
console.log(
  '{{{ ReactDOM.render(<Button />, document.getElementById("react-app")) }}} '
);
ReactDOM.render(<Button />, document.getElementById("react-app")); // ReactMount.render
