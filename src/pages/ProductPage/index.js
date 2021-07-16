import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Startups from "../../data/startups.json";
import "./styles.scss";


class ProductPage extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            logo:'',
            name:'',
            desc:''
        }
    }
    componentDidMount () {
        const filtered = Startups.filter((startup) => {
            return startup.id == this.props.match.params.productId;
        })
        this.setState({
            name: filtered[0].name,
            logo: filtered[0].logo,
            desc: filtered[0].desc
        })
    }
    render() {
        const {logo, name, desc} = this.state;

        return(
            <>
            < Navbar />
            <div className='wrapper'>
                <div className="wrapperBlue"></div>
                <div className="wrapperWhite">
                    <img className='img' src={logo}></img>
                    <p>Mi nombre es {name}</p>
                    <p>Mi desc es:{desc}</p>
                </div>
            </div>
            <Footer/>
            </>
            
        )
    }
}

export default ProductPage;