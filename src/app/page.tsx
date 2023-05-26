import { headers } from "next/headers";

export default function Home() {
  const headersStore = headers();

  const ipHeader = headersStore.get("x-ip");
  const cityHeader = headersStore.get("x-city");
  const regionHeader = headersStore.get("x-region");
  const countryHeader = headersStore.get("x-country");
  const latitudeHeader = headersStore.get("x-latitude");
  const longitudeHeader = headersStore.get("x-longitude");

  console.log({
    ipHeader,
    cityHeader,
    regionHeader,
    countryHeader,
    latitudeHeader,
    longitudeHeader,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="w-full max-w-5xl items-start justify-between font-mono text-sm gap-4 flex flex-col">
        <h1 className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello, pretty boy
        </h1>

        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          I&apos;m a edge function created for global domination.
        </p>

        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          And I know you.
        </p>

        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          You are talking from {cityHeader}, {regionHeader}, {countryHeader}
        </p>

        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          I know your IP is {ipHeader}
        </p>

        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          BTW, that&apos;s your location on the map:{" "}
          <a
            href={`https://www.google.com/maps/place/${latitudeHeader},${longitudeHeader}`}
            className="underline text-lg"
          >
            {latitudeHeader}, {longitudeHeader}
          </a>
        </p>

        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          See you soon
        </p>

        <small className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          If any of this information is wrong, please contact me at
          WorldDomination.com
        </small>
      </div>
    </main>
  );
}
