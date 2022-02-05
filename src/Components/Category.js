import React from 'react';
import {data} from '../data.json';
import  {withRouter} from 'react-router-dom';
import Header from './header';
class Category extends React.Component
{
    constructor(props) {
        super(props)
        //this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {category1:''}

      }
      getUniqueCategoryName(products) {
        const category = [... new Set(products.data.map((item)=> {return item.category_level1}))]
        return category.map((category1, index) => (
          <option key={index}>{category1}</option>
        ));
      }
      handleOnChange=(e)=>{
        this.setState({ category1: e.target.value })
      }
      handleOnSubmit=(e)=>{
          e.preventDefault()
        this.props.history.push({pathname:'/search',state:{category1: this.state.category1}});
      }
    render()
    {
        const items={data}
           return(
        <div>
            <Header />
            <div className="row">
            <div className="col-md-6">
              <h3>Category</h3>
              <div className="form-row">
                <div className="form-group col-md-6">

                  <label>Select Category :</label>
                  <select onChange={this.handleOnChange.bind(this)}>
                    <option>Select a Category</option>
                    {this.getUniqueCategoryName(items)}
                    </select>
                    <label>Select Category2 :</label>
                  <select>
                    <option>Select a Category</option>
                    </select>
                    <label>Select Category3 :</label>
                  <select>
                    <option>Select a Category</option>
                    </select>
                <button onClick={this.handleOnSubmit}>Submit</button>
              </div>
              </div>
          </div>               
        
        
        </div>
        </div>
    )
          }
}
export default withRouter(Category);