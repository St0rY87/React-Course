import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";
import { decreaseItemQuatity, increaseItemQuatity } from "./cartSlice";

export const UdpatedItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1.5 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuatity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuatity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};
