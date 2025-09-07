// // config/database.js


// backend/config/database.js
import pg from "pg";
import env from "dotenv";

env.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required for Neon
  },
});

// Test connection when starting
pool.connect()
  .then((client) => {
    console.log("✅ Connected to Neon PostgreSQL");
    client.release();
  })
  .catch((err) => console.error("❌ Neon DB connection error:", err));

export default pool;

// import pg from "pg";
// import env from "dotenv";

// env.config();

// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // required for Neon
//   },
// });

// // Test connection when starting
// pool.connect()
//   .then((client) => {
//     console.log("✅ Connected to Neon PostgreSQL");
//     client.release();
//   })
//   .catch((err) => console.error("❌ Neon DB connection error:", err));

// export default pool;
