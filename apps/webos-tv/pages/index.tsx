import { Button } from "ui";
import Head from "next/head";
import { useSystemInfo } from "hooks";

export default function Docs() {
  const info = useSystemInfo();
  return (
    <>
      <Head>
        <title>WebOs TV</title>
      </Head>
      <h1>webOS-TV</h1>
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
