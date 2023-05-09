import React from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Categories from './Components/Categories/Categories';
import Sort from './Components/Sort/Sort';

function App() {
  const [pizzaItem, setPizzaItem] = React.useState([]);

  React.useEffect(() => {
    async function PizzaBack() {
      const pizzaRes = await axios.get(
        'https://file.notion.so/f/s/36ad4e93-800e-451b-9831-ae6abe1b28ef/pizzas.json?id=e934efcc-4042-481d-9d73-76f227f1696e&table=block&spaceId=b3238354-86d5-4ba6-9ad7-eb01112a9acd&expirationTimestamp=1683699692307&signature=t4X9XZ0whHWsOPcsJNg_F0Z374j2rjwaRnch5Hpsr18&downloadName=pizzas.json',
      );

      setPizzaItem(pizzaRes.data);
    }

    PizzaBack();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzaItem.map((obj, i) => (
                <Card key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
