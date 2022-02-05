import React, {Component} from "react";
import { withRouter,Link} from 'react-router-dom';
import Search from "./Search";

class Header extends Component{
    render(){
        return(
            <header>
			<div >
				<nav className=' navbar navbar-expand-md navbar-dark bg-dark row'>
                    <div className='col-sm-auto' style={{color:"white"}}>Phygital24</div>
                    <div className=" col-sm-auto">
                    <Link to="#">
                        <button id='about' type='submit'>About Us</button>
                    </Link>
                    </div>
                    <div className="col-sm-auto">
                    <ul className='navbar-nav'>
                    <div className='searchbar-container '>
                    <div ><Search/></div>
                    </div> 
                    </ul>
                   </div>
                    </nav>

                
			</div>
		</header>
	);
    }
}
export default withRouter(Header);