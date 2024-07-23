import { getInvoicesByUser, getUser } from "@/actions/actions";

import InvoicesContextProvider from "@/context/InvoicesContext";
import InvoicesHeader from "@/components/invoices/InvoicesHeader";
import InvoicesDisplay from "@/components/invoices/InvoicesDisplay";

export default async function Home() {
  const user = await getUser("test@gamil.com");
  const userInvoices = await getInvoicesByUser(user.id);

  return (
    <InvoicesContextProvider invoices={userInvoices}>
      <main className="mx-auto my-8 w-full max-w-4xl flex-1 px-4 lg:my-10">
        <InvoicesHeader />
        <InvoicesDisplay />
      </main>
    </InvoicesContextProvider>
  );
}
