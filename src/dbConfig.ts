import { DataSource } from "typeorm";
import path from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "cdadmin@55",
  database: "Library management",
  synchronize: false,
  logging: true,
  entities: [path.join(process.cwd(), "src/models/*.ts")],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});

export const checkConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("db connected successfully");
  } catch (error) {
    
    console.log("cannot connect to db",error);
  }
};
