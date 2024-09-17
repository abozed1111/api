require('dotenv').config(); // تأكد من أن هذا السطر في أعلى الملف
const express = require('express');

const app = express();
const usersRoutes = require('./routes/usersRoutes');

app.use(express.json()); // لتحليل جسم الطلب بتنسيق JSON

// استخدام التوجيهات
app.use('/api', usersRoutes);

const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
