import React, { Component } from 'react'
import CheckBoxGroup from "./index"
import { getStudents } from '../../getData';

export default class Test extends Component {
  // 获得远程数据
    state = {
        datas: [],
        chooseDatas: []
    }

    async componentDidMount() {
        const stus = await getStudents();
        this.setState({
            datas: stus.map(it => ({ value: it.id.toString(), text: it.name }))
        })
    }

    
    render() {
        return (
            <div>
                <CheckBoxGroup
                    name="loves"
                    {...this.state}
                    onChange={newArr => {
                        this.setState({
                            chooseDatas: newArr
                        })
                    }}
                />
            </div>
        )
    }
}