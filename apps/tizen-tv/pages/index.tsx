import { Button } from "ui";
import Head from "next/head";
import { useSystemInfo } from "hooks";

export default function Web() {
  const info = useSystemInfo();
  return (
    <>
      <Head>
        <title>Tizen </title>
      </Head>
      <h1>Tizen TV</h1>
      {info && (
        <>
          <h1>system info</h1>
          <pre>{JSON.stringify(info)}</pre>
        </>
      )}
      <Button />
    </>
  );
}
