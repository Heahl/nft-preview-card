import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Preview Card</title>
        <meta name="description" content="nft-preview-card" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-main-bg font-sans">
        {/* Card Component */}
        <div className="my-20 flex w-[90vw] flex-col rounded-3xl bg-card-bg p-9 shadow-2xl md:max-w-[480px]">
          <div className="relative mb-2 h-auto overflow-hidden rounded-xl">
            <Image
              className="h-full w-full rounded-xl"
              src="/images/image-equilibrium.jpg"
              height={100}
              width={100}
              alt="Equilibrium-Image"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-cyan bg-opacity-50 opacity-0 transition-opacity duration-200 hover:cursor-pointer hover:opacity-100">
              <Image
                src="images/icon-view.svg"
                height={40}
                width={42}
                alt="View-Icon"
              />
            </div>
          </div>
          <h2 className="py-7 text-3xl font-semibold tracking-wide text-white hover:cursor-pointer hover:text-cyan">
            Equilibrium #3429
          </h2>
          <p className="text-2xl font-light leading-10 text-soft-blue">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="mb-2 flex w-full flex-row content-center justify-between border-b-2 border-slate-700 py-4">
            <div className="flex flex-row items-center text-cyan">
              <Image
                className="mr-2 h-6 w-4"
                src="/images/icon-ethereum.svg"
                width={24}
                height={24}
                alt="Ethereum-Icon"
              />
              <span className="text-lg font-semibold">0.041 ETH</span>
            </div>
            <div className="flex flex-row items-center text-soft-blue">
              <Image
                className="mr-2"
                src="/images/icon-clock.svg"
                width={24}
                height={24}
                alt="Clock-Icon"
              />
              <span className="text-lg font-medium">3 days left</span>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row items-center">
            <div className="mr-5 flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Image
                className="w-9"
                src="/images/image-avatar.png"
                width={24}
                height={24}
                alt="Avatar-Image"
              />
            </div>
            <p className="mr-2 text-xl text-soft-blue">Creation of</p>
            <span className="text-xl text-white hover:cursor-pointer hover:text-cyan">
              Jules Wyvern
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
