import { formatCurrency } from "../../utils/helpers";
/* eslint-disable react/prop-types */

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;
  console.log(item);
  console.log(quantity, name, totalPrice);
  return (
    <li className="py-3 ">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
