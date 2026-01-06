import type { Request, Response } from "express";
import * as usersService from "../services/users.service";
import { successResponse } from "../utils/response";

export const getAllUsers = async (req: Request, res: Response) => {
  const {
    page = "1",
    limit = "10",
    search,
    isActive
  } = req.query;

  const result = await usersService.getAll({
    page: Number(page),
    limit: Number(limit),
    search: search as string | undefined,
    isActive: isActive !== undefined ? isActive === "true" : undefined
  });

  successResponse(
    res,
    "Get users success",
    result
  );
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    throw new Error("Invalid user id");
  }

  const user = await usersService.getById(Number(id));

  successResponse(
    res,
    "Get user detail success",
    user
  );
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    throw new Error("Invalid user id");
  }

  const {
    username,
    email,
    role,
    institutionId
  } = req.body;

  const user = await usersService.update(Number(id), {
    username,
    email,
    role,
    institutionId
  });

  successResponse(
    res,
    "Update user success",
    user
  );
};

export const createUser = async (req: Request, res: Response) => {
  const {
    username,
    email,
    password,
    role,
    institutionId
  } = req.body;

  if (!username || !email || !password || !role) {
    throw new Error("Bad Request");
  }

  const user = await usersService.create({
    username,
    email,
    password,
    role,
    institutionId
  });

  successResponse(
    res,
    "Create user success",
    user
  );
};

export const updateUserStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { isActive } = req.body;

  if (isNaN(Number(id))) {
    throw new Error("Invalid user id");
  }

  if (typeof isActive !== "boolean") {
    throw new Error("Bad Request");
  }

  const user = await usersService.updateStatus(
    Number(id),
    isActive
  );

  successResponse(
    res,
    "Update user status success",
    user
  );
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    throw new Error("Invalid user id");
  }

  await usersService.deleteUser(Number(id));

  successResponse(
    res,
    "User deleted successfully",
    200
  );
};