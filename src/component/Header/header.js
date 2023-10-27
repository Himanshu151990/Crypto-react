import React from "react";
const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-sm-12">
          <div className="header">
            <a href="#"><img className=" mr-2" src={require('../../assets/img/logo-green.png')} alt="Logo" /></a>
          </div>

        </div>
      </div>
    </header>

  )
}
export default Header;