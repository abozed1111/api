const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController'); // تأكد من أن المسار صحيح
const { loginUser } = require('../controllers/usersController');
// تعريف المسارات واستخدام الدوال في المتحكمات (controllers)
router.get('/users', usersController.getUsers);  // التأكد من وجود دالة getUsers في usersController
router.post('/users', usersController.addUser);  // التأكد من وجود دالة addUser في usersController
router.post('/login', loginUser);// إضافة مسارات أخرى حسب الحاجة

module.exports = router;
