//feature- 1
// did some changesgit di
import React from 'react';
import data from './data.json';
import Products from './components/products';

class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      products:data.products,
      size:"",
      sort:""
       
    };
  }
  
  render(){
  return (
    <div className="grid-container">
        <header>
        <a href="/">React shopping cart</a>
         </header>
         <main>
           <div className='centent'>
             <div className="main">
               <Products products={this.state.products}></Products>

             </div>
             <div className='sidebar'>cart items</div>
           </div>
        </main>
        <footer>
          All rights reseverd
        </footer>
    </div>
  );
  }
}

export default App;
