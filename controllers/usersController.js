const { poolPromise } = require('../config/db'); // فقط استيراد poolPromise
const userModel = require('../models/userModel');

// الحصول على جميع المستخدمين
exports.getUsers = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM users');
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// إضافة مستخدم جديد
exports.addUser = async (req, res) => {
    const userData = req.body; // استخرج جميع البيانات من الجسم

    // التحقق من صحة البيانات
    if (!userData.name || !userData.pass) {
        return res.status(400).json({ message: 'Name and password are required' });
    }

    try {
        // استخدام النموذج لإضافة المستخدم
        await userModel.addUser(userData);
        res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// تسجيل دخول المستخدم
// تسجيل دخول المستخدم
exports.loginUser = async (req, res) => {
    const { name, pass } = req.body; // استخرج البيانات من الجسم

    // التحقق من صحة البيانات
    if (!name || !pass) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // التحقق من صحة بيانات المستخدم
        const result = await userModel.checkUserCredentials(name, pass);

        if (result.success) {
            res.status(200).json({ message: 'Login successful', user: result.user });
        } else {
            res.status(401).json({ message: result.message });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


