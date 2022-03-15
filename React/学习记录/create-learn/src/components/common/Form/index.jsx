import React, { Component } from 'react'
import { Provider } from "./FormContext/index";
import FormInput from "./Input/index"
import PropTypes from "prop-types"
import FormButton from "./Button/index"

export default class Form extends Component {

    state = {
        formData: {}, //表单数据对象
        //修改formData中的数据
        changeFormData: (name, val) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: val
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    render() {
        return (
            <div>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

Form.Input = FormInput
Form.Button = FormButton