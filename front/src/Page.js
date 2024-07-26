import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class Page extends PureComponent {
  render() {
    const { value, increment1, increment2, increment3} = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={increment1}>increment</button>
        <button onClick={increment2}>increment</button>
        <button onClick={increment3}>increment</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => console.log(state)||({
  value: state.foo,
});

const mapDispatchToProps = (dispatch) => ({
    increment1: () => dispatch({type:'SET_FOO', foo:[1,2]}),
    increment2: () => dispatch({type:'PUSH_FOO', foo:3}),
    increment3: () => dispatch({type:'PUSH_FOO', foo:6}),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
