import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    handleChange(e) {
        const inputValue = e.target.value;
        const { getData } = this.props;
        getData(inputValue);
    }

    render(){
        const {showAutocomplete} = this.props;
        return(
            <nav >
                <div className="autocompleteContainer">
                    <h1>Startup argentina </h1>
                    {showAutocomplete && (
                    <input onChange={(e) => this.handleChange(e)} type="" placeholder="buscar startup" />
                    )}
                </div>
                <Link to="/form">
                    <button>formulario</button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;