import Head from "next/head";
import SearchForm from "../components/SearchForm";
import Ui from "../components/ui";
import ItemList from "../components/ItemsList";
import React, { useState, useEffect } from "react";
import search from "../functions/getdata";
import Loding from "../components/Loding";

export const SearchConstext = React.createContext("");

let is_Loding = false;
export default function Home({ row_items }) {
  const [word, setWord] = useState("");
  const [items, setItems] = useState(row_items);

  const changeword = (word) => {
    setWord(word);
    is_Loding = true;
    search(word).then((x) => {
      setItems(x);
    });
  };

  useEffect(() => {
    is_Loding = false;
  });

  return (
    <SearchConstext.Provider value={{ word, changeword }}>
      <Head>
        <title>the cocktail db</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Ui />
      <SearchForm />
      {is_Loding ? <Loding /> : <ItemList items={items} />}
    </SearchConstext.Provider>
  );
}

export async function getStaticProps() {
  let data = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );
  const items = await data.json();
  return {
    props: {
      row_items: items.drinks,
    },
  };
}
