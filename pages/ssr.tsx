import type { GetServerSideProps } from "next";
import Link from "next/link";

type Props = {
  formattedDate: string
};

export default function SSR({ formattedDate }: Props) {
  return (
    <>
      <h1>Static Page</h1>
      <p>This page is SSR. It was built on {formattedDate}</p>
      <p>
        <Link href="/"><a>View a static page</a></Link>
      </p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);

  console.log(`SSR ran on ${formattedDate}. This will be logged in CloudWatch.`);

  return { props: { formattedDate } };
}