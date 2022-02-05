import React from 'react';
import data from '../data.json';
class SearchList extends React.Component{
    constructor(props)
    {
        super(props)
    this.state={
        category1:this.props.location.state.category1,
        category2:this.props.location.state.category2,
        category3:this.props.location.state.category3,
    };
}

    getproducts(products)
    {   
        let result;
        console.log(this.state.category1)
        console.log(this.state.category2)
        console.log(this.state.category3)
        if(this.state.category1)
        {
            if(this.state.category2)
            {
                if(this.state.category3)
                {
                       result= products.data.data.map (product=> {
                            return(
                                
                                (product.category_level1==this.state.category1 && product.category_level2==this.state.category2
                                    && product.category_level3==this.state.category3)?{"name":product.name,"id":product.id}:null
                            )
                            }
                        )
                }
                else{
                    result= products.data.data.map (product=> {
                        return(
                            
                            (product.category_level1==this.state.category1 && product.category_level2==this.state.category2
                               )?{"name":product.name,"id":product.id}:null
                        )
                        }
                    )
                    }
            }
            else
            {
                result= products.data.data.map (product=> {
                    return(
                        
                        (product.category_level1==this.state.category1 )?{"name":product.name,"id":product.id}:null
                    )
                    }
                )
            }
        } 
       if(result.length)
       {
           return(
            <div className="containers">
            <div className="head">
                   <p>Cool! Take a look.We have these items</p>
               </div>
               {result.map((results, index)=>{
                    return(
                    results?
                    <p><a href="" >{results.name}</a></p>
                    :<p></p>
                   )
               })}
           </div>
           )
       }
       else{
           return
           <h4>Sorry,There are no items.Try other items</h4>
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
