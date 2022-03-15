import React, { Component } from "react";
import { Consumer, Provider } from "./FormContext/index";
import FormInput from "./Input";
// import FormButton from './Button';
import withDataGroup from "../../HOC/withDatasGroup";

export default class Form extends Component {
  constructor(props) {
    super(props);
    const { getInfo, ...datas } = props.info;
    // 分离数据 input数据集 getinfo函数

    this.state = {
      datas: {
        ...datas,
      },
      getInfo,
      changeVal: (key, val) => {
        // change修改数据
        console.log(key, val)
        this.setState({
          datas: {
            ...this.state.datas,
            [key]: {
             ...this.state.datas[key],
             value: val
            },
          },
        });
      },
    };
  }

  render() {
    // console.log()
    const Inputs = withDataGroup(FormInput);
    return (
      <Provider value={this.state}>
        <Consumer>
          {(val) => (
            <form onSubmit={() => val.getinfo(val.datas)}>
              <Inputs datas={val.datas} chang={val.changeVal}/>
            </form>
          )}
        </Consumer>
      </Provider>
    );
  }
}
