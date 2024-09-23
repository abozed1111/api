require('dotenv').config(); // تأكد من أن هذا السطر في أعلى الملف
const express = require('express');
const app = express();
const usersRoutes = require('./routes/usersRoutes');
const productRoutes = require('./routes/productRoutes');
const dbRoutes = require('./routes/dbRoutes');
const ordersalesDataTypesRoutes = require('./routes/ordersalesDataTypesRoutes'); // تأكد من صحة المسار
app.use(express.json()); // لتحليل جسم الطلب بتنسيق JSON

// استخدام التوجيهات

app.use('/api', usersRoutes);
app.use('/api', productRoutes);

app.use('/api', dbRoutes);
app.use('/api/ordersalesdatatypes', ordersalesDataTypesRoutes); // تأكد من صحة المسار
const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
