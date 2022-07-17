import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          hendrerit efficitur ligula posuere pharetra. Ut id sollicitudin augue.
          Etiam pharetra mollis metus ut tincidunt. Nunc tincidunt tincidunt
          dolor, quis mollis odio pretium et. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nullam vel sem
          aliquet, condimentum mauris ut, posuere ligula. Vivamus eleifend, diam
          efficitur porta suscipit, ex diam auctor leo, a auctor eros libero sit
          amet dui.
        </p>
        <p className={styles.text}>
          Suspendisse porttitor non elit eu congue. Praesent eu felis euismod
          est eleifend bibendum id sed lacus. Suspendisse nunc odio, fermentum
          ac augue non, dignissim posuere nibh. Proin non volutpat orci.
          Suspendisse eleifend ex at erat ultricies, quis blandit leo accumsan.
          Nunc dictum sapien mauris, non bibendum diam gravida id. Curabitur
          mollis, augue id malesuada venenatis, nisl tortor eleifend tellus, nec
          convallis quam velit non ipsum.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
