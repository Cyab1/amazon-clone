import React, { useContext } from "react";
<<<<<<< HEAD
import {useHistory} from 'react-router-dom'
import './Subtotal.css'
import ShoppingContext from "../Context/shopping/shoppingContext";
//import reactRouterDom from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
=======
import { useHistory } from "react-router-dom";
import "./Subtotal.css";
import { ShoppingContext } from "../Context/shopping/ShoppingContext";
//import ShoppingContext from "../../Context/shopping/shoppingContext";
//import reactRouterDom from "react-router-dom";
import CurrencyFormat from "react-currency-format";
>>>>>>> 0fd6362 (updated commit)
// resolve the space issue***Important***

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="Subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
<<<<<<< HEAD
        displayType={'text'}
        prefix={'$'}
      />
      <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
=======
        displayType={"text"}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
>>>>>>> 0fd6362 (updated commit)
    </div>
  );
};

<<<<<<< HEAD
export default Subtotal;
=======
export default Subtotal;
>>>>>>> 0fd6362 (updated commit)
