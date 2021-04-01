import Link from "next/link";

export default function Item({ item }) {
  return (
    <div>
      <img src={item.strDrinkThumb} alt="drink thumb" />
      <h1>{item.strDrink}</h1>
      <h4>{item.strGlass}</h4>
      <p>{item.strAlcoholic}</p>
      <Link href={`item/${item.idDrink}`}>
        <a>details</a>
      </Link>
      <style jsx>
        {`
          div {
            float: left;
            background-color: white;
            border: none;
            border-radius: 7px;
            height: auto;
            margin-bottom: 40px;
            margin-right: 10px;
            box-shadow: 5px 5px 10px #000;
            width: 90%;
            margin-left: 4%;
          }
          @media screen and (min-width: 816px) {
            div {
              width: 45%;
              margin-left: 3%;
            }
          }
          @media screen and (min-width: 1216px) {
            div {
              width: 30%;
              margin-left: 2%;
            }
          }
          div:hover {
            box-shadow: 8px 8px 10px #000;
          }
          a {
            background-color: green;
            border-radius: 8px;
            width: 30%;
            display: inline-block;
            margin-bottom: 10px;
            color: white;
            transition: all 1s;
          }
          a:hover {
            background-color: #7ddfab;
            color: black;
            text-decoration: none;
          }
          img {
            width: 100%;
            height: 50%;
            border-radius: 7px 7px 0 0;
          }
        `}
      </style>
    </div>
  );
}
