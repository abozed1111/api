const express = require('express');
const router = express.Router();
const dbConfigController = require('../controllers/dbConfigController');
require('dotenv').config();
// مسار تحديث إعدادات الاتصال
router.post('/update-db-config', dbConfigController.updateDBConfig);

router.get('/get-db-config', (req, res) => {
    const dbConfig = {
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_SERVER: process.env.DB_SERVER,
        DB_NAME: process.env.DB_NAME,
    };
    res.status(200).json(dbConfig);
});

module.exports = router;
