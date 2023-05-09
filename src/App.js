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
        'https://645ab72565bd868e9322de44.mockapi.io/items',
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
