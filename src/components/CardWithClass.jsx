import { Component } from "react";

// function CardWithClass(props) {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.details}</p>
//         </div>
//     );
// }

// export default CardWithClass;

class CardWithClass extends Component {
    render() {
        console.log(this);

        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.details}</p>
            </div>
        );
    }
}

export default CardWithClass;
