import { formatCurrency } from "../../utils/helpers";

type Props = {
  pizza: {
    id: number,
    imageUrl: string,
    ingredients: string[],
    name: string,
    soldOut: boolean,
    unitPrice: number
  }
}

function MenuItem({ pizza } : Props) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
