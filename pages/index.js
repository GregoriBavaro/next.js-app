import Link from "next/link";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">NextJS Is A Great framework</Link>
        </li>
        <li><Link href="">Something Else</Link></li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
