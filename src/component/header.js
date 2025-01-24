

 function Header(){
    return (
        <div className="header">
           <img className="logo" src="https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x900.png" />

           <div className="options" >
            <button>Men's</button> <button>Womens</button>
            <button>chlidren</button> <button>home&leaving</button>
            <button>beauty</button> <button>studio</button>
            </div>

            <input placeholder="search products,brands and more"></input>

            <div className="cart">
              <h3>profile</h3>
              <h3>wishlist</h3>
              <h3>bag</h3>
            </div>



        </div>
    )
}


export default Header;