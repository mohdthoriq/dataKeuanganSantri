# Backend Data Keuangan Santri

Backend application for managing financial data for Santri (students), Institutions, and Guardians (Wali Santri).

## Overview

This project is built with:
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Language**: TypeScript

## Database Models

The application data structure is defined using Prisma and includes the following models:
- **Users**: Manages users with roles (`ADMIN`, `WALI_SANTRI`).
- **Santri**: Represents students, linked to `Users` (Wali) and `Institution`.
- **Institution**: Educational entities managed by Admins.
- **Transaction**: Records financial activities (`PEMASUKAN`, `PENGELUARAN`).
- **Category**: Categories for transactions.
- **AuthAccount**: Handles authentication credentials.
- **Profile**: Extended user profile information.
- **Notification**: System notifications for users.

## API Documentation

### Notification

Manajemen notifikasi pengguna.

| Method | Endpoint | Summary |
| :--- | :--- | :--- |
| `GET` | `/api/notification` | Get all notifications for current user |
| `PATCH` | `/api/notification/:id/read` | Tandai satu notifikasi sebagai sudah dibaca |
| `PATCH` | `/api/notification/read-all` | Tandai semua notifikasi sebagai sudah dibaca |

#### Endpoint Details

**1. Get My Notifications**
- **URL**: `/api/notification`
- **Method**: `GET`
- **Description**: Retrieves the list of notifications for the currently authenticated user.

**2. Read Notification**
- **URL**: `/api/notification/:id/read`
- **Method**: `PATCH`
- **Params**: `id` (UUID) - The ID of the notification.
- **Description**: Marks a specific notification as read.

**3. Read All Notifications**
- **URL**: `/api/notification/read-all`
- **Method**: `PATCH`
- **Description**: Marks all notifications for the current user as read.

---
*Note: This documentation is generated based on the available router files. Other endpoints (Auth, Santri, Transaction, etc.) exist in the system structure but are not listed here.*