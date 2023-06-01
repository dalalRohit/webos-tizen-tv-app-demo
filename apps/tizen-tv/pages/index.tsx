import Head from "next/head";
import { Routes } from "ui";
import "ui/poc-routes/styles/routes.css";
const Web = () => {
  return (
    <div>
      <Head>
        <title>Tizen </title>
      </Head>
      <Routes focusKey="ROUTES" />
    </div>
  );
};
export default Web;
