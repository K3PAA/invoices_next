import { getFullInvoiceData } from "@/actions/actions";
import ActionsBar from "@/components/invoice/ActionsBar";
import BackButton from "@/components/invoice/BackButton";
import PageWrapper from "@/components/PageWrapper";

type InvoiceProps = {
  params: { id: string };
};

export default async function Invoice({ params }: InvoiceProps) {
  const invoice = await getFullInvoiceData(params.id);

  console.log(invoice);

  return (
    <PageWrapper>
      <BackButton />
      <ActionsBar />
    </PageWrapper>
  );
}
