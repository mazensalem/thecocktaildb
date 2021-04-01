import { useContext } from "react";
import { SearchConstext } from "../pages/index";

export default function SearchForm() {
  const obj = useContext(SearchConstext);
  return (
    <>
      <form>
        <label htmlFor="searchbar">Search your favourite cocktail</label>
        <br />
        <input
          id="searchbar"
          value={obj.word}
          onChange={(e) => {
            obj.changeword(e.target.value);
          }}
        />
      </form>
      <style jsx>{`
        form {
          background-color: white;
          width: 80%;
          margin: auto;
          margin-top: 5%;
          color: green;
          padding: 30px;
          font-size: 20px;
          height: 20%;
          border-radius: 4px;
          box-shadow: 3px 3px 5px #000;
        }
        @media screen and (min-width: 900px) {
          form {
            width: 40%;
          }
        }
        input {
          width: 100%;
          border: none;
          background-color: #f1f5f8;
          height: 40px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
