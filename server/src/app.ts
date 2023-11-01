import express, { Express } from "express";
import expRouter from "./routes/expenseRoute";

const app: Express = express();
const port = process.env.PORT || 5000;

app.use("/expenses", expRouter);

app.listen(port, () => {
    console.log(`Expense Manager Server started on http://localhost:${port}`);
});