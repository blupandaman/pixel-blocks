import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pixel Blocks</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-500 md:text-[5rem]">
          <span className="text-black">Pixel</span> Blocks
        </h1>
        <div className="h-2"></div>
        <WalletMultiButtonDynamic className="btn bg-black px-6" />
      </main>
    </>
  );
};

export default Home;
