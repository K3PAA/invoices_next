import { getInvoicesByUser, getUser } from "@/actions/actions";

import InvoicesContextProvider from "@/context/InvoicesContext";
import InvoicesHeader from "@/components/invoices/InvoicesHeader";
import InvoicesDisplay from "@/components/invoices/InvoicesDisplay";
import PageWrapper from "@/components/PageWrapper";

export default async function Home() {
  const user = await getUser("test@gamil.com");
  const userInvoices = await getInvoicesByUser(user.id);

  return (
    <InvoicesContextProvider invoices={userInvoices}>
      <PageWrapper className="gap-6 md:gap-8">
        <InvoicesHeader />
        <InvoicesDisplay />
      </PageWrapper>
    </InvoicesContextProvider>
  );
}
