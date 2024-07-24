import { getFullInvoiceData } from "@/actions/actions";
import ActionsBar from "@/components/invoice/ActionsBar";
import BackButton from "@/components/invoice/BackButton";
import ContentBlock from "@/components/invoice/ContentBlock";
import PageWrapper from "@/components/PageWrapper";

type InvoiceProps = {
  params: { id: string };
};

export default async function Invoice({ params }: InvoiceProps) {
  const invoice = await getFullInvoiceData(params.id);

  return (
    <PageWrapper>
      <BackButton />
      <ActionsBar />
      <ContentBlock />
    </PageWrapper>
  );
}
