import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize()
.then(res=>{
console.log("Initialize DataBase");
server.listen(PORT, () => {
console.log(`Server listening on Port ${PORT}`);
});
});

// server.listen(PORT, () => {
//   console.log(`Server listening on Port ${PORT}`);
// });
