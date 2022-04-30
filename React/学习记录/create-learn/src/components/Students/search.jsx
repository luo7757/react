import React, { PureComponent } from 'react'
import './css/search.css'


export default class SearchBar extends PureComponent {
  constructor(props){
    super(props)
    this.state = Object.assign({}, {search: '', sex: -1}, props.defaultValue)
    this.onSearch = props.onSearch
  }

  checkedHandle = (e) => {
    this.setState({
      sex: +e.target.value
    })
  }

  render(){
    return (
      <div className='search-container'>
        <div>
          <label htmlFor="keyWord">
            关键词：
            <input id='keyWord' type="text" onChange={(e) => {
              this.setState({
                search: e.target.value
              })
            }} value={this.state.search}/>
          </label>
        </div>
        <div>
          性别：
          <label>
            不限<input name='sex' value={-1} type="radio" onChange={this.checkedHandle} checked={this.state.sex === -1}/>
          </label>
          <label>
            女<input name='sex' value={0} type="radio" onChange={this.checkedHandle} checked={this.state.sex === 0}/>
          </label>
          <label>
            男<input name='sex' value={1} type="radio" onChange={this.checkedHandle} checked={this.state.sex === 1}/>
          </label>
        </div>
        <div>
          <button type='button' onClick={() => {
            this.onSearch({search: this.state.search, sex: this.state.sex})
          }}>查询</button>
        </div>
      </div>
    )
  }
}