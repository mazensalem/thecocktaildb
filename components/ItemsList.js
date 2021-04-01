import Item from "./Item";

export default function ItemsList({ items }) {
  return (
    <div className="list">
      <h1>Cocktails</h1>
      <div>
        {items.length ? (
          items.map((item) => <Item item={item} key={item.idDrink} />)
        ) : (
          <h1>no one found</h1>
        )}
      </div>
      <style jsx>
        {`
          .list {
            text-align: center;
            margin-top: 3%;
          }
          div {
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}
