import { Router } from "express";
import PrismaInstance from "../database";
import { TransactionRepository } from "../repository/transaction.repository";
import { TransactionService } from "../services/transaction.service";
import { TransactionController } from "../controllers/transaction.controller";
import { InvoiceRepository } from "../repository/invoice.repository";
import { InvoiceService } from "../services/invoice.service";
import { validate } from "../utils/validator";
import { createTransactionValidation, getTransactionsValidation, transactionIdValidation, updateTransactionValidation } from "../validations/transaction.validation";

const router = Router();

const repo = new TransactionRepository(PrismaInstance)
const service = new TransactionService(repo)
const invoiceRepo = new InvoiceRepository(PrismaInstance)
const invoiceService = new InvoiceService(invoiceRepo)
const controller = new TransactionController(service, invoiceService)

/**
 * @swagger
 * tags:
 *   name: Transaction
 *   description: Manajemen transaksi Santri
 */

/**
 * @swagger
 * /api/transaction:
 *   post:
 *     summary: Create transaction
 *     tags:
 *       - Transaction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - santriId
 *               - categoryId
 *               - type
 *               - amount
 *               - transactionDate
 *             properties:
 *               santriId:
 *                 type: integer
 *                 example: 1
 *               categoryId:
 *                 type: integer
 *                 example: 2
 *               type:
 *                 type: string
 *                 enum: [PEMASUKAN, PENGELUARAN]
 *                 example: PEMASUKAN
 *               amount:
 *                 type: number
 *                 example: 150000
 *               transactionDate:
 *                 type: string
 *                 format: date
 *                 example: 2026-01-12
 *               description:
 *                 type: string
 *                 maxLength: 255
 *                 example: Pembayaran SPP bulan Januari
 *     responses:
 *       201:
 *         description: Transaksi berhasil dibuat
 *       400:
 *         description: Validasi gagal
 */

/**
 * @swagger
 * /api/transaction:
 *   get:
 *     summary: Get list transactions
 *     tags:
 *       - Transaction
 *     parameters:
 *       - in: query
 *         name: santriId
 *         schema:
 *           type: integer
 *         description: Filter transaksi berdasarkan Santri ID
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: integer
 *         description: Filter transaksi berdasarkan kategori
 *       - in: query
 *         name: createdBy
 *         schema:
 *           type: integer
 *         description: Filter transaksi berdasarkan pembuat
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [PEMASUKAN, PENGELUARAN]
 *         description: Filter transaksi berdasarkan tipe
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *           minimum: 0
 *         description: Jumlah data yang dilewati (pagination)
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         description: Jumlah data yang diambil (pagination)
 *     responses:
 *       200:
 *         description: List transaksi
 */

/**
 * @swagger
 * /api/transaction/{id}:
 *   get:
 *     summary: Get transaction by ID
 *     tags:
 *       - Transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Transaction ID
 *     responses:
 *       200:
 *         description: Detail transaksi
 *       404:
 *         description: Transaksi tidak ditemukan
 */

/**
 * @swagger
 * /api/transaction/{id}:
 *   put:
 *     summary: Update transaction by ID
 *     tags:
 *       - Transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Transaction ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               santriId:
 *                 type: integer
 *                 example: 1
 *               categoryId:
 *                 type: integer
 *                 example: 2
 *               type:
 *                 type: string
 *                 enum: [PEMASUKAN, PENGELUARAN]
 *                 example: PENGELUARAN
 *               amount:
 *                 type: number
 *                 example: 175000
 *               transactionDate:
 *                 type: string
 *                 format: date
 *                 example: 2026-01-15
 *               description:
 *                 type: string
 *                 maxLength: 255
 *                 example: Update pembayaran SPP
 *     responses:
 *       200:
 *         description: Transaksi berhasil diupdate
 *       404:
 *         description: Transaksi tidak ditemukan
 */

/**
 * @swagger
 * /api/transaction/{id}:
 *   delete:
 *     summary: Delete transaction by ID
 *     tags:
 *       - Transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Transaction ID
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
