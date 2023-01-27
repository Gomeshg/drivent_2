import { AuthenticatedRequest } from "@/middlewares";
// import enrollmentsService from "@/services/enrollments-service"; TICKET SERVICE
import ticketService from "@/services/ticket-service";
import { Ticket, TicketType } from "@/protocols";

import { Response } from "express";
import httpStatus from "http-status";

export async function getTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const ticket = await ticketService.readTicket(userId);
    return res.status(httpStatus.OK).send(ticket);
  } catch (err) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }

  return 0;
}

export async function postTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  return 0;
}

export async function getTicketType(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const ticketsType = (await ticketService.readAllTicketType()) as TicketType[];
    return res.status(httpStatus.OK).send(ticketsType);
  } catch (err) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
