import { getitem } from "../../lib/getitem";
import gettheingrediets from "../../functions/getingredients";
import Link from "next/link";
import Head from "next/head";
import Ui from "../../components/ui";

export default function ItemPage({ drink }) {
  drink = drink.drink;
  console.log();
  return (
    <div>
      <Head>
        <title>{drink.strDrink}</title>
      </Head>
      <Ui />
      <Link href="/">
        <a>go home</a>
      </Link>
      <h1>{drink.strDrink}</h1>
      <div>
        <img src={drink.strDrinkThumb} alt="drink img" />
        <p>
          <span className="title">name:</span> {drink.strDrink}
        </p>
        <p>
          <span className="title">catagroy:</span> {drink.strCategory}
        </p>
        <p>
          <span className="title">info:</span> {drink.strAlcoholic}
        </p>
        <p>
          <span className="title">glass:</span> {drink.strGlass}
        </p>
        <p>
          <span className="title">instructons:</span> {drink.strInstructions}
        </p>
        <p>
          <span className="title">ingredients:</span>{" "}
          {gettheingrediets(drink).map((ing) => (
            <>{ing} </>
          ))}
        </p>
      </div>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        div {
          width: 100%;
        }
        .title {
          background-color: #7ddfab;
          border-radius: 5px;
        }
        img {
          float: left;
          width: 400px;
          height: 400px;
          margin-left: 50px;
          margin-right: 30px;
        }
        a {
          display: block;
          text-align: center;
          margin: auto;
          background-color: green;
          border-radius: 8px;
          width: 10%;
          margin-bottom: 10px;
          color: white;
          transition: all 1s;
          margin-top: 40px;
        }
        a:hover {
          background-color: #7ddfab;
          color: black;
          text-decoration: none;
        }
        p {
          font-size: 25px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const drink = await getitem(params.id);
  return {
    props: {
      drink,
    },
  };
}
