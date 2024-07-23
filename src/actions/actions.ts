"use server";

import prisma from "@/lib/db";

export const getUser = async (email: unknown) => {
  if (typeof email !== "string") {
    throw new Error("Email must be a string");
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getInvoicesByUser = async (userId: unknown) => {
  if (typeof userId !== "string") {
    throw new Error("User ID must be a string");
  }

  const invoices = await prisma.invoice.findMany({
    where: {
      authorId: userId,
    },
  });

  if (!invoices) {
    throw new Error("Invoices not found");
  }

  return invoices;
};

export const getFullInvoiceData = async (id: unknown) => {
  if (typeof id !== "string") {
    throw new Error("ID must be a string");
  }

  const invoice = await prisma.invoice.findUnique({
    where: {
      id,
    },
    include: {
      items: true,
      senderAddress: true,
      clientAddress: true,
    },
  });
  if (!invoice) {
    throw new Error("Invoice not found");
  }

  return invoice;
};
