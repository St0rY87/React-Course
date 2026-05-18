import { Link, useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

type PizzaType = {
    id: number,
    imageUrl: string,
    ingredients: string[],
    name: string,
    soldOut: boolean,
    unitPrice: number
}

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return <ul>{menu.map((pizza: PizzaType ) => <MenuItem pizza={pizza} key={pizza.id}/>)}</ul>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
