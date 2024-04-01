import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  cookieParser  from  "cookie-parser";
import fileUpload from 'express-fileupload';
import userRouter  from './routes/JobSeekerRoutes/userRouter.js'
import jobRouter from './routes/JobSeekerRoutes/jobRoutes.js'
import employerRouter from './routes/EmployerRoutes/EmployerRouter.js'
import {dbConnection} from './database/dbconnection.js';
import {errorMiddleware} from './middlewares/error.js';
import applicationRouter from './routes/JobSeekerRoutes/applicationRoutes.js'

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

// Routes users -----------------------------------

app.use("/api/v1/user" , userRouter);
app.use("/api/v1/application" , applicationRouter );
app.use("/api/v1/job" , jobRouter);

//-------------------------------------------------

// Routes employer --------------------------------

app.use("/api/v1/employer", employerRouter);

//-------------------------------------------------

dbConnection();

app.use(errorMiddleware);

export default app;
