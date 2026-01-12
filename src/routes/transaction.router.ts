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

/**
 * @swagger
 * tags:
 *   - name: Transaction
 *     description: Manajemen transaksi keuangan
 */

/**
 * @swagger
 * /api/transaction:
 *   post:
 *     summary: Buat transaksi baru
 *     tags: [Transaction]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - type
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 50000
 *                 description: Nominal transaksi
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *                 example: income
 *                 description: Jenis transaksi
 *               description:
 *                 type: string
 *                 example: Donasi bulan Januari
 *                 description: Keterangan transaksi
 *               categoryId:
 *                 type: string
 *                 example: "category-123"
 *                 description: ID kategori transaksi
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2026-01-10"
 *                 description: Tanggal transaksi
 *     responses:
 *       201:
 *         description: Transaksi berhasil dibuat
 *       400:
 *         description: Data transaksi tidak valid
 */

/**
 * @swagger
 * /api/transaction:
 *   get:
 *     summary: Ambil daftar transaksi
 *     tags: [Transaction]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [income, expense]
 *         description: Filter berdasarkan jenis transaksi
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter transaksi dari tanggal
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter transaksi sampai tanggal
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         description: Filter berdasarkan kategori
 *     responses:
 *       200:
 *         description: Daftar transaksi berhasil diambil
 */

/**
 * @swagger
 * /api/transaction/{id}:
 *   get:
 *     summary: Ambil transaksi berdasarkan ID
 *     tags: [Transaction]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID transaksi
 *     responses:
 *       200:
 *         description: Transaksi berhasil diambil
 *       404:
 *         description: Transaksi tidak ditemukan
 */

/**
 * @swagger
 * /api/transaction/{id}:
 *   put:
 *     summary: Update transaksi berdasarkan ID
 *     tags: [Transaction]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID transaksi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 75000
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *                 example: expense
 *               description:
 *                 type: string
 *                 example: Pembelian ATK
 *               categoryId:
 *                 type: string
 *                 example: "category-456"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2026-01-11"
 *     responses:
 *       200:
 *         description: Transaksi berhasil diupdate
 */

/**
 * @swagger
 * /api/transaction/{id}:
 *   delete:
 *     summary: Hapus transaksi berdasarkan ID
 *     tags: [Transaction]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID transaksi
 *     responses:
 *       200:
 *         description: Transaksi berhasil dihapus
 *       404:
 *         description: Transaksi tidak ditemukan
 */

router.post("/", validate(createTransactionValidation), controller.createTransaction);
router.get("/", validate(getTransactionsValidation), controller.getTransactions);
router.get("/:id", validate(transactionIdValidation), controller.getTransactionById);
router.put("/:id", validate(updateTransactionValidation), controller.updateTransaction);
router.delete("/:id", controller.deleteTransaction);

export default router;
