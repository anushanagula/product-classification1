import React from 'react';
import {data} from '../data.json';
import  {withRouter} from 'react-router-dom';
import Header from './header';
class Category extends React.Component
{
    constructor(props) {
        super(props)
        //this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {category1:'',
                      category2:'',
                      category3:'',}

      }
      getUniqueCategoryName(products) {
        const category = [... new Set(products.data.map((item)=> {return item.category_level1}))]
        return category.map((category1, index) => (
          <option key={index}>{category1}</option>
        ));
      }
      getUniqueCategoryName2(items,category1) {
        if(category1)
        {
        const products=items.data.filter(function(item){
          return item.category_level1 == category1;         
              })
        const category = [... new Set(products.map((item)=> {return item.category_level2}))]
        return category.map((category2, index) => (
          <option key={index}>{category2}</option>
        ));
        }
        else 
        return 
      }
      getUniqueCategoryName3(items,category2) {
        if(category2)
        {
        const products=items.data.filter(function(item){
          return item.category_level2 == category2;         
              })
        const category = [... new Set(products.map((item)=> {return item.category_level3}))]
        return category.map((category3, index) => (
          <option key={index}>{category3}</option>
        ));
        }
        else 
        return 
      }
      handleOnChange=(e)=>{
        e.preventDefault()
        this.setState({ category1: e.target.value })

      }
      handleOnChange2=(e)=>{
        e.preventDefault()
        this.setState({ category2: e.target.value })

      }
      handleOnChange3=(e)=>{
        e.preventDefault()
        this.setState({ category3: e.target.value })

      }
      handleOnSubmit=(e)=>{
          e.preventDefault()
        this.props.history.push({pathname:'/search',state:{category1: this.state.category1,category2:this.state.category2,category3:this.state.category3}});
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
                  <select  onChange={this.handleOnChange2.bind(this)}>  
                    <option>Select a Category</option>
                    {this.state.category1}?(
                    {this.getUniqueCategoryName2(items,this.state.category1)}):()
                    </select>    
                    <label>Select Category3 :</label>
                  <select  onChange={this.handleOnChange2.bind(this)}>
                    <option>Select a Category</option>
                    {this.state.category2}?(
                    {this.getUniqueCategoryName3(items,this.state.category2)}):()
                    </select>
              </div>
              </div>
              <button onClick={this.handleOnSubmit}>Submit</button>
          </div>               
        
        
        </div>
        </div>
    )
          }
}
export default withRouter(Category);
