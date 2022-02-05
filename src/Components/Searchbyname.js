import React from 'react';
import data from '../data.json';
class SearchByName extends React.Component{

    getproducts(products)
    {   
        const result=products.data.data.map (product=> {
            return(
                
                product.name==this.props.location.state.name?product.name:null
            )
            }
        )
       if(result.length)
       {
           return(
            <div className="containers">
            <div className="head">
                   <p>Cool! Take a look.We have these items of  {this.props.location.state.name}</p>
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
           <h4>Sorry,There are no items in {this.props.location.state.name}.Try other items</h4>
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
export default SearchByName;