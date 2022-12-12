import { Request, Response } from "express";
import httpStatus from "http-status";
import * as todoRepository from "../repositories/todo-repository.js"

export async function getTicketTypes(req: Request, res: Response) {
    try {
      const list = todoRepository.getList();
      
      if(!list) {
        return res.sendStatus(httpStatus.NOT_FOUND);
      }
  
      return res.status(httpStatus.OK).send(list);
    } catch (error) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
}