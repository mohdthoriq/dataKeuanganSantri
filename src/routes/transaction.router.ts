import { Router } from "express";
import PrismaInstance from "../database";
import { TransactionRepository } from "../repository/transaction.repository";
import { TransactionService } from "../services/transaction.service";
import { TransactionController } from "../controllers/transaction.controller";
import { validate } from "../utils/validator";
import { createTransactionValidation, getTransactionsValidation, transactionIdValidation, updateTransactionValidation } from "../validations/transaction.validation";

const router = Router();

const repo = new TransactionRepository(PrismaInstance)
const service = new TransactionService(repo)
const controller = new TransactionController(service)

router.post("/", validate(createTransactionValidation), controller.createTransaction);
router.get("/", validate(getTransactionsValidation), controller.getTransactions);
router.get("/:id", validate(transactionIdValidation), controller.getTransactionById);
router.put("/:id", validate(updateTransactionValidation), controller.updateTransaction);
router.delete("/:id", controller.deleteTransaction);

export default router;
