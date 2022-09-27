import Express, { json } from "express";
import morgan from "morgan";
import router from "./router/router.js";

const app = Express();

app.use(json());
app.use(morgan("dev"));
router(app);
app.listen(3000);
