import type { GetStaticProps } from 'next';
import Link from 'next/link';

type Props = {
  formattedDate: string
};

export default function Home({ formattedDate }: Props) {
  return (
    <>
      <h1>Static Page</h1>
      <p>This page is static. It was built on {formattedDate}</p>
      <p>
        <Link href="/ssr"><a>View a SSR page</a></Link>
      </p>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
