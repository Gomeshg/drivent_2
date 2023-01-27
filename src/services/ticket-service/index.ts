import { AddressEnrollment } from "@/protocols";
import { getAddress } from "@/utils/cep-service";
import { notFoundError } from "@/errors";
import addressRepository, { CreateAddressParams } from "@/repositories/address-repository";
import { exclude } from "@/utils/prisma-utils";
import { Address, Enrollment } from "@prisma/client";

import ticketRepository from "@/repositories/ticket-repository";
import enrollmentRepository, { CreateEnrollmentParams } from "@/repositories/enrollment-repository";

import { Ticket, TicketType } from "@/protocols";
// : Promise<Ticket>
async function readTicket(userId: number) {
  // const userHaventEnrollment = await enrollmentRepository.return;
}

async function createTicket() {
  return;
}

async function readAllTicketType(): Promise<TicketType[]> {
  const ticketsType = (await ticketRepository.readAllTicketType()) as TicketType[];

  return ticketsType;
}

const ticketService = {
  readTicket,
  createTicket,
  readAllTicketType,
};

export default ticketService;
