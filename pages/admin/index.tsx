import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

// interface PageProps {
//   session: Session | null;
// }

// export const getServerSideProps: GetServerSideProps<PageProps> = async (
//   context
// ) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// };

export default function IndexAdmin() {
  return (
    <section>
      <h1 className="title">ADMIN</h1>
    </section>
  );
}
