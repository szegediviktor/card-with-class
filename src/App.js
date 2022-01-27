import Card from "./components/Card";
import CardWithClass from "./components/CardWithClass";

function App() {
    const peoples = [
        {
            id: 1,
            name: "Gipsz Jakab",
            details: "lorem ipsum dolor et",
        },
        {
            id: 2,
            name: "Kolompár Gandalf",
            details: "fewfws lorem ipsum fewfw dolor et asda",
        },
        {
            id: 3,
            name: "Rostás Lopótök",
            details: "lorem ipsum  jhdas asjl dolor et",
        },
    ];

    return (
        <div className="App">
            {peoples.map((item) => {
                return (
                    <Card
                        name={item.name}
                        details={item.details}
                        key={item.id}
                    />
                );
            })}
            {peoples.map((item) => {
                return (
                    <CardWithClass
                        name={item.name}
                        details={item.details}
                        key={item.id}
                    />
                );
            })}
        </div>
    );
}

export default App;
