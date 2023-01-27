import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Ticket, TicketType } from "@/protocols";

export async function createTicket(ticket: Ticket): Promise<Ticket> {
  return prisma.ticket.create({
    data: ticket,
  });
}

export async function readTicket(ticketId: number): Promise<Ticket> {
  return prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    include: {
      TicketType: true,
    },
  });
}

export async function readAllTicketType(): Promise<TicketType[]> {
  return prisma.ticketType.findMany();
}

const ticketRepository = {
  createTicket,
  readTicket,
  readAllTicketType,
};

export default ticketRepository;
