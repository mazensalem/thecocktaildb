import Link from "next/link";

export default function Ui() {
  return (
    <nav>
      <Link href="/">
        <a>
          <img src="/images/logo.svg" />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            position: relative;
            width: auto;
            background-color: white;
            height: 60px;
            box-shadow: 5px 4px 10px #000;
          }
          img {
            width: 12rem;
            height: 60px;
            margin-left: 30px;
          }
          ul {
            position: absolute;
            list-style-type: none;
            top: 0px;
            right: 5%;
            margin-top: 15px;
          }
          li {
            display: inline;
            margin-top: 6px;
            margin-left: 20px;
            font-size: 1.3rem;
          }
        `}
      </style>
    </nav>
  );
}
