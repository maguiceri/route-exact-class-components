import React from 'react' ;
import Card from '../Card';
import './styles.css';

class Cards extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                {
                    name: 'CourseIt',
                    img: 'https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg',
                    desc:'Desc CourseIt'
                },
                {
                    name:'Endava',
                    img:'https://pbs.twimg.com/profile_images/1052208764726730753/s5bagDr__400x400.jpg',
                    desc:'Desc Endava'
                }
            ]
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
                            <Card 
                                key={key} 
                                name={card.name}  
                                img={card.img} 
                                desc={card.desc} 
                            /> 
                        )}
                    </>
                );

                })}

            </div>
        );
    }
}
export default Cards;