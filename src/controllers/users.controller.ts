import type { Request, Response } from "express";
import type { UserService } from "../services/users.service";
import { successResponse } from "../utils/response";
import type { IUserListParams } from "../repository/users.repository";

export interface IUsersController {
  getAllUsers(req: Request, res: Response): Promise<void>;
  getUserById(req: Request, res: Response): Promise<void>;
  createUser(req: Request, res: Response): Promise<void>;
  updateUser(req: Request, res: Response): Promise<void>;
  updateUserStatus(req: Request, res: Response): Promise<void>;
  deleteUser(req: Request, res: Response): Promise<void>;
}

export class UsersController implements IUsersController {
  constructor(private usersService: UserService) { }

  getAllUsers = async (req: Request, res: Response) => {
    const { page, limit, search, isActive, sortBy, order } = req.query;

    const params: IUserListParams = {
      ...(page && { page: Number(page) }),
      ...(limit && { limit: Number(limit) }),
      ...(search && { search: search as string }),
      ...(isActive !== undefined && { isActive: isActive === "true" }),
      ...(sortBy && { sortBy: sortBy as string }),
      ...(order && { order: order as "asc" | "desc" }),
    };

    const result = await this.usersService.getAll(params);

    successResponse(res, "Get users success", result.data, result.meta);
  };


  getUserById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) throw new Error("Invalid user id");

    const user = await this.usersService.getById(id);
    successResponse(res, "Get user detail success", user.data);
  };

  createUser = async (req: Request, res: Response) => {
    const admin = req.user;
    if (!admin?.institutionId) throw new Error("Unauthorized");

    const { username, email, password } = req.body;
    // Default role 'WALI_SANTRI' if not provided, or force it? 
    // User requested "default role WALI_SANTRI".
    // Code accepts role from body, we can default it here or frontend sends it.
    // Frontend logic sends role: 'WALI_SANTRI'.
    // We strictly extract what we need.
    const role = req.body.role || 'WALI_SANTRI';

    if (!username || !email || !password) throw new Error("username, email, and password are required");

    const user = await this.usersService.create(
      { username, email, password, role },
      { institutionId: admin.institutionId }
    );

    successResponse(res, "Create user success", user);
  };

  updateUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) throw new Error("Invalid user id");

    const { username, email, role, institutionId } = req.body;
    const user = await this.usersService.update(id, { username, email, role, institutionId });

    successResponse(res, "Update user success", user);
  };

  updateUserStatus = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { isActive } = req.body;

    if (!id) throw new Error("Invalid user id");
    if (typeof isActive !== "boolean") throw new Error("Bad Request");

    const user = await this.usersService.updateStatus(id, isActive);
    successResponse(res, "Update user status success", user);
  };

  deleteUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) throw new Error("Invalid user id");

    await this.usersService.deleteUser(id);
    successResponse(res, "User deleted successfully", true);
  };
}
