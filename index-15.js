console.log("{{{ REACT APPLICATION }}}");
console.log("{{{ BEFORE React.createClass }}}");
var Button = React.createClass({
  render: function () {
    return (
      <button
        onClick={() => {
          console.log("clicked");
          console.log("this inside onClick:", this);
          this.setState({ name: "itamar" }); // this.updater.enqueueSetState
        }}
      >
        Hello World
      </button>
    );
  },
});
console.log("{{{ AFTER React.createClass }}}");
console.log("Button:", new Button());
console.log("<Button />:", <Button />);
console.log(
  '{{{ ReactDOM.render(<Button />, document.getElementById("react-app")) }}} '
);
ReactDOM.render(<Button />, document.getElementById("react-app")); // ReactMount.render
