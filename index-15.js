console.log("{{{ REACT APPLICATION }}}");
console.log("{{{ BEFORE React.createClass }}}");
var Button = React.createClass({
  getInitialState() {
    return {
      name: "",
      age: 0,
    };
  },
  render: function () {
    return (
      <div>
        <button
          onClick={() => {
            console.log("clicked 1");
            console.log("this inside onClick:", this);
            this.setState({ name: "itamar" }); // this.updater.enqueueSetState
          }}
        >
          Hello World
        </button>
        <button
          onClick={() => {
            console.log("clicked 2");
            console.log("this inside onClick 2:", this);
            let oldName = this.state.oldName;
            this.setState({ age: 10, name: oldName }); // this.updater.enqueueSetState
          }}
        >
          age:
          {this.state.age}
        </button>
      </div>
    );
  },
});
// var Button = React.createClass({
//   getInitialState() {
//     return {
//       name: "",
//       age: 0,
//     };
//   },
//   render: function () {
//     return (
//       <button
//         onClick={() => { // onClick like any other props sits inside this._currentElement.props of the component instance
//           console.log("clicked 1");
//           console.log("this inside onClick:", this);
//           this.setState({ name: "itamar" }); // this.updater.enqueueSetState
//         }}
//       >
//         Hello World
//       </button>
//     );
//   },
// });
console.log("{{{ AFTER React.createClass }}}");
console.log("Button:", new Button());
console.log("<Button />:", <Button />);
console.log(
  '{{{ ReactDOM.render(<Button />, document.getElementById("react-app")) }}} '
);
ReactDOM.render(<Button />, document.getElementById("react-app")); // ReactMount.render
