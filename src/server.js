import app from "./app";
import { startDatabase } from "./database";
import 'dotenv/config'


export default app.listen(3000, async () => {

    await startDatabase();

    console.log("Server running in port 3000");
});