import { Request, Response } from "express";
import httpStatus from "http-status";
import * as todoRepository from "../repositories/todo-repository";
import { Item } from "../protocols.js";

export async function getList(req: Request, res: Response) {
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

export async function postNewItem(req: Request, res: Response) {
    const newItem: Item = req.body;

    if(!newItem.todo || !newItem.deadline) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
      const list = todoRepository.createNewItem(newItem);

      if(!list) {
          return res.sendStatus(httpStatus.NOT_FOUND);
      }
  
      return res.status(httpStatus.CREATED).send(list);
    } catch (error) {
          return res.sendStatus(httpStatus.NOT_FOUND);
    }
}