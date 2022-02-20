import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Auth from "../components/Auth";
import Chat from "../components/Chat";

export default function Home({ currentUser, session, supabase }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(session);
    setLoggedIn(Boolean(session));
  }, [session]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Supabase Chattr</title>
      </Head>

      <main className={styles.main}>
        {loggedIn && session?.user ? (
          <Chat
            currentUser={currentUser}
            session={session}
            supabase={supabase}
          />
        ) : (
          <Auth supabase={supabase} />
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
