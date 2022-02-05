import React, { Component } from 'react';
import  {withRouter} from 'react-router-dom';
class Search extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:''
        }
    }
    handleOnChange=(e)=>{
        this.setState({ name: e.target.value })
      }
      handleOnSubmit=(e)=>{
          e.preventDefault()
        this.props.history.push({pathname:'/searchbyname',state:{name: this.state.name}});
      }
  render () {
    return (
      
        <div className='searchbar-container centered bg'>
          <form className='example' onSubmit={e => e.preventDefault()}>
          <div className='buttonIn container1 centered'> 
          <input
            type='text'
            size='45'
            placeholder=' Find products...'
            onChange={this.handleOnChange.bind(this)}
            value={this.state.name} 
           
            />
             <button className="btn-without-border"
            type='submit'
            onClick={this.handleOnSubmit.bind(this)}>
            <i className="fas fa-search"></i>
            </button>
          </div>
          </form>
        </div>
    )
  }
}
export default withRouter(Search);