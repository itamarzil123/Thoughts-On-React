console.log("{{{ REACT APPLICATION }}}");
var Button = React.createClass({
  render: function () {
    return <button onClick={() => console.log("clicked")}>Hello World</button>;
  },
});
ReactDOM.render(<Button />, document.getElementById("react-app"));
