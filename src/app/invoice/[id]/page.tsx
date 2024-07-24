import { getFullInvoiceData } from "@/actions/actions";
import ActionButtons from "@/components/invoice/ActionButtons";
import ActionsBar from "@/components/invoice/ActionsBar";
import BackButton from "@/components/invoice/BackButton";
import ContentBlock from "@/components/invoice/ContentBlock";
import PageWrapper from "@/components/PageWrapper";
import SingleInvoiceContextProvider from "@/context/SingleInvoiceContext";

type InvoiceProps = {
  params: { id: string };
};

export default async function Invoice({ params }: InvoiceProps) {
  const invoice = await getFullInvoiceData(params.id);

  if (!invoice) return <h1>No invoice found</h1>;

  return (
    <SingleInvoiceContextProvider invoice={invoice}>
      <PageWrapper className="overflow-auto">
        <BackButton />
        <ActionsBar />
        <ContentBlock />

        <div className="mt-4 block w-full rounded-md bg-card py-4 shadow-md md:hidden">
          <ActionButtons className="justify-center gap-4 sm:gap-2" />
        </div>
      </PageWrapper>
    </SingleInvoiceContextProvider>
  );
}
