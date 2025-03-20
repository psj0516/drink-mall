import Head from "next/head";
import Main from "@/components/home/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>RE-DRINK</title>
        <meta name="description" content="당신이 찾는 완벽한 음료" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
