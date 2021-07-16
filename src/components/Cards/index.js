import React from 'react' ;
import Card from '../Card';
import './styles.scss';
import startups from "../../data/startups.json";
import { Link } from 'react-router-dom';

class Cards extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            cards: startups
        };
    }

    render() {
        const {cards} = this.state;
        const {filter} = this.props
        return(
            <div className="cardsContainer">
                {cards.map ((card, key) => {
                return (
                        <>
                        {card.name.toLowerCase().includes(filter.toLowerCase()) && ( //FILTRAME POR LOS NOMBRES DE LAS EMPRESAS QUE INCLUYAN FILTER
                            <Link to={`/productos/${card.name.toLocaleLowerCase()}`}>
                                <Card 
                                    key={key} 
                                    name={card.name}  
                                    logo={card.logo}
                                    desc={card.desc} 
                                /> 
                            </Link>
                        )}
                        </>
                    );
                })}

            </div>
        );
    }
}
export default Cards;