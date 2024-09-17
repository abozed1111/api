const sql = require('mssql');
const bcrypt = require('bcrypt');
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.setMaxListeners(20); // تعيين العدد الجديد للمستمعين

// تعريف إعدادات قاعدة البيانات
const dbConfig = {
    user: process.env.DB_USER,           // اسم المستخدم لقاعدة البيانات
    password: process.env.DB_PASS,       // كلمة المرور لقاعدة البيانات
    server: process.env.DB_SERVER,       // عنوان الخادم، على سبيل المثال "localhost"
    database: process.env.DB_NAME,       // اسم قاعدة البيانات
    options: {
        encrypt: false,                  // تعيين إلى true إذا كنت تستخدم SSL
        trustServerCertificate: true    // تعيين إلى false في الإنتاج
    }
};

// إنشاء اتصال بقاعدة البيانات
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
