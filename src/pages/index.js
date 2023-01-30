import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan
          urna lacus, vel semper nisi feugiat a. Phasellus fermentum hendrerit
          efficitur.
        </p>
        <p className={styles.text}>
          Sed ullamcorper egestas neque sit amet consectetur. Mauris vitae
          libero a nulla accumsan porttitor eu quis augue. Donec eu nisi sit
          amet mi consectetur euismod eget quis est. Donec vel congue sapien.
          Nulla lorem ligula, molestie id egestas ac, rhoncus vel elit. Mauris
          sit amet varius nibh, sit amet posuere massa.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
