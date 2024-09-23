const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// مسار ملف .env
const envFilePath = path.resolve(__dirname, '../.env');

// دالة لتحديث المتغيرات في ملف .env
const updateEnvVariables = (newConfig) => {
    const envVariables = `
DB_USER=${newConfig.DB_USER}
DB_PASS=${newConfig.DB_PASS}
DB_SERVER=${newConfig.DB_SERVER}
DB_NAME=${newConfig.DB_NAME}
    `.trim(); // إزالة المسافات الزائدة

    fs.writeFileSync(envFilePath, envVariables);
};

// الـ API لتحديث الاتصال
exports.updateDBConfig = (req, res) => {
    const { DB_USER, DB_PASS, DB_SERVER, DB_NAME } = req.body;

    if (!DB_USER || !DB_PASS || !DB_SERVER || !DB_NAME) {
        return res.status(400).send('جميع الحقول مطلوبة.');
    }

    const newConfig = { DB_USER, DB_PASS, DB_SERVER, DB_NAME };

    try {
        updateEnvVariables(newConfig);
        
        // إعادة تحميل متغيرات البيئة
        require('dotenv').config();

        // إعادة تشغيل التطبيق باستخدام pm2
        exec('pm2 restart <app_name_or_id>', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error restarting pm2: ${error}`);
                return res.status(500).send('حدث خطأ أثناء إعادة تشغيل التطبيق.');
            }
            console.log(`pm2 output: ${stdout}`);
            res.status(200).send('تم تحديث الإعدادات بنجاح وإعادة تشغيل التطبيق.');
        });
    } catch (error) {
        console.error('Error updating env variables:', error);
        res.status(500).send('حدث خطأ أثناء تحديث الإعدادات.');
    }
};
