require('dotenv').config(); // تأكد من أن هذا السطر في أعلى الملف
const sql = require('mssql');
const bcrypt = require('bcrypt');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.setMaxListeners(20); 

// تعريف إعدادات قاعدة البيانات
const dbConfig = {
    user: process.env.DB_USER,     
    password: process.env.DB_PASS,       
    server: process.env.DB_SERVER,       
    database: process.env.DB_NAME,        
    options: {
        encrypt: false,                 
        trustServerCertificate: true    
    }
};

// إنشاء اتصال بقاعدة البياناتغ
const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

module.exports = { sql, poolPromise };
