import React from 'react';
import data from '../data.json';
class SearchList extends React.Component{

    getproducts(products)
    {   
        const result=products.data.data.map (product=> {
            return(
                
                product.category_level1==this.props.location.state.category1?product.name:null
            )
            }
        )
       if(result.length)
       {
           return(
            <div className="containers">
            <div className="head">
                   <p>Cool! Take a look.We have these items of  {this.props.location.state.category1}</p>
               </div>
               {result.map((results, index)=>{
                   return(
                    <p><a href="" >{results}</a></p>
                   )
               })}
           </div>
           )
       }
       else{
           return
           <h4>Sorry,There are no items in {this.props.location.state.category1}.Try other items</h4>
       }
    }
    
    render()
    {
        const products={data}
    {
        return(
            <div>
                <h5>{this.getproducts(products)}</h5>
            </div>
        )
    }}
}
export default SearchList;