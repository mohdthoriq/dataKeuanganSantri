import "dotenv/config";
import express, { type Application, type Request, type Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { successResponse } from "./utils/response";
import { errorHandler } from "./middlewares/error.handler";
import { requestLogger } from "./middlewares/logging.middleware";
import { authenticate } from "./middlewares/auth.middlleware";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger";
import authRouter from "./routes/auth.router";
import usersRouter from "./routes/users.router";
import emailVerificationRouter from "./routes/emailVerification.router";
import institutionRouter from "./routes/institution.router";
import santriRouter from "./routes/santri.router";
import transactionRouter from "./routes/transaction.router";
import paymentRouter from "./routes/payment.router";
import categoryRouter from "./routes/category.router";
import notificationRouter from "./routes/notification.router";
import profileRouter from "./routes/profile.router";
import profileInstitutionRouter from "./routes/profileInstitution.router";


const app: Application = express()

app.use(express.json())
app.use(express.static('public'))
app.set('query parser', 'extended')
app.use(morgan('dev')) // Middleware logging HTTP request
// `morgan('dev')`: Middleware logging HTTP request. Format 'dev' memberikan output yang ringkas dan berwarna,
//                 sangat berguna saat pengembangan untuk melihat request yang masuk dan status responsnya.
app.use(helmet()) // Middleware keamanan header
// `helmet()`: Membantu mengamankan aplikasi Express dengan mengatur berbagai HTTP headers.
//             Ini melindungi dari beberapa kerentanan web yang diketahui seperti XSS.
app.use(cors()) // Middleware biar bisa di akses dari frontend
// `cors()`: Memungkinkan atau membatasi resource di server agar dapat diakses oleh domain lain (Cross-Origin Resource Sharing).
//           Sangat penting untuk API yang akan diakses oleh frontend dari domain berbeda.

app.use(requestLogger)

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.get('/', (_req: Request, res: Response) => {
    successResponse(
        res,
        "Selamat datang di API E-Commerce!"
    )
})

app.use('/api/auth',authRouter)
app.use('/api/profile', authenticate, profileRouter)
app.use('/api/users', authenticate, usersRouter)
app.use('/api/email-verification', emailVerificationRouter)
app.use('/api/institution', institutionRouter)
app.use('/api/profileinstitution', authenticate, profileInstitutionRouter);
app.use('/api/santri', authenticate, santriRouter)
app.use('/api/transaction', authenticate, transactionRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/category', authenticate, categoryRouter)
app.use('/api/notification', authenticate, notificationRouter)


app.get(/.*/, (req: Request, res: Response) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API E-Commerce`);
})

app.use(errorHandler)

export default app;