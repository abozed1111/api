const bcrypt = require('bcrypt'); // استيراد bcrypt
const { sql, poolPromise } = require('../config/db');

// دالة لإدراج مستخدم جديد
const addUser = async (userData) => {
    try {
        const pool = await poolPromise; // استلم اتصال قاعدة البيانات

        const result = await pool.request()
            .input('name', sql.NVarChar, userData.name)
            .input('pass', sql.NVarChar, userData.pass) // استخدم كلمة المرور بدون تشفير
            .input('admin', sql.Bit, userData.admin)
            .input('managment', sql.Bit, userData.managment)
            .input('accounts', sql.Bit, userData.accounts)
            .input('items', sql.Bit, userData.items)
            .input('newitem', sql.Bit, userData.newitem)
            .input('edititem', sql.Bit, userData.edititem)
            .input('sales', sql.Bit, userData.sales)
            .input('buy', sql.Bit, userData.buy)
            .input('show', sql.Bit, userData.show)
            .input('shift', sql.Bit, userData.shift)
            .input('openshift', sql.Bit, userData.openshift)
            .input('closeshift', sql.Bit, userData.closeshift)
            .input('emp', sql.Bit, userData.emp)
            .input('users', sql.Bit, userData.users)
            .input('newusers', sql.Bit, userData.newusers)
            .input('editusers', sql.Bit, userData.editusers)
            .input('report', sql.Bit, userData.report)
            .input('sreport', sql.Bit, userData.sreport)
            .input('breport', sql.Bit, userData.breport)
            .input('shiftreport', sql.Bit, userData.shiftreport)
            .input('comp', sql.Bit, userData.comp)
            .input('setting', sql.Bit, userData.setting)
            .input('money', sql.Bit, userData.money)
            .input('publicset', sql.Bit, userData.publicset)
            .input('format', sql.Bit, userData.format)
            .input('printset', sql.Bit, userData.printset)
            .input('invoicesale', sql.Bit, userData.invoicesale)
            .input('throwbaxksale', sql.Bit, userData.throwbaxksale)
            .input('editsale', sql.Bit, userData.editsale)
            .input('invoicebuy', sql.Bit, userData.invoicebuy)
            .input('throwbackbuy', sql.Bit, userData.throwbackbuy)
            .input('editbuy', sql.Bit, userData.editbuy)
            .input('newemp', sql.Bit, userData.newemp)
            .input('editemb', sql.Bit, userData.editemb)
            .input('bouns', sql.Bit, userData.bouns)
            .input('embreport', sql.Bit, userData.embreport)
            .input('career', sql.Bit, userData.career)
            .input('editaccount', sql.Bit, userData.editaccount)
            .input('payment', sql.Bit, userData.payment)
            .input('newpayment', sql.Bit, userData.newpayment)
            .input('editpayment', sql.Bit, userData.editpayment)
            .input('accountreport', sql.Bit, userData.accountreport)
            .input('accountreport2', sql.Bit, userData.accountreport2)
            .input('discount', sql.Bit, userData.discount)
            .input('editdiscoumt', sql.Bit, userData.editdiscoumt)
            .input('newbocket', sql.Bit, userData.newbocket)
            .input('editbocket', sql.Bit, userData.editbocket)
            .input('newcash', sql.Bit, userData.newcash)
            .input('editcash', sql.Bit, userData.editcash)
            .input('bocketmoves', sql.Bit, userData.bocketmoves)
            .input('itemreport', sql.Bit, userData.itemreport)
            .input('throwbacksalereport', sql.Bit, userData.throwbacksalereport)
            .input('throwbackbuyreport', sql.Bit, userData.throwbackbuyreport)
            .input('store', sql.Bit, userData.store)
            .input('newstore', sql.Bit, userData.newstore)
            .input('editstore', sql.Bit, userData.editstore)
            .input('storemoves', sql.Bit, userData.storemoves)
            .input('exelex', sql.Bit, userData.exelex)
            .input('exelimp', sql.Bit, userData.exelimp)
            .input('deletitems', sql.Bit, userData.deletitems)
            .input('editprice', sql.Bit, userData.editprice)
            .input('newacc', sql.Bit, userData.newacc)
            .query(`
                INSERT INTO users (
                    name, pass, admin, managment, accounts, items, newitem, edititem, sales, buy, show, shift,
                    openshift, closeshift, emp, users, newusers, editusers, report, sreport, breport, shiftreport,
                    comp, setting, money, publicset, format, printset, invoicesale, throwbaxksale, editsale, 
                    invoicebuy, throwbackbuy, editbuy, newemp, editemb, bouns, embreport, career, editaccount, payment,
                    newpayment, editpayment, accountreport, accountreport2, discount, editdiscoumt, newbocket, 
                    editbocket, newcash, editcash, bocketmoves, itemreport, throwbacksalereport, throwbackbuyreport,
                    store, newstore, editstore, storemoves, exelex, exelimp, deletitems, editprice, newacc
                ) 
                VALUES (
                    @name, @pass, @admin, @managment, @accounts, @items, @newitem, @edititem, @sales, @buy, @show,
                    @shift, @openshift, @closeshift, @emp, @users, @newusers, @editusers, @report, @sreport, @breport,
                    @shiftreport, @comp, @setting, @money, @publicset, @format, @printset, @invoicesale, @throwbaxksale,
                    @editsale, @invoicebuy, @throwbackbuy, @editbuy, @newemp, @editemb, @bouns, @embreport, @career,
                    @editaccount, @payment, @newpayment, @editpayment, @accountreport, @accountreport2, @discount,
                    @editdiscoumt, @newbocket, @editbocket, @newcash, @editcash, @bocketmoves, @itemreport,
                    @throwbacksalereport, @throwbackbuyreport, @store, @newstore, @editstore, @storemoves, @exelex,
                    @exelimp, @deletitems, @editprice, @newacc
                )
            `);
        return result;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

const checkUserCredentials = async (name, pass) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('name', sql.NVarChar, name)
            .input('pass', sql.NVarChar, pass) // تأكد من إضافة هذا السطر
            .query(`SELECT * FROM users WHERE name = @name AND pass = @pass`);
        
        if (result.recordset.length > 0) {
            // إذا تم العثور على المستخدم وكلمة المرور تطابق
            return { success: true, user: result.recordset[0] };
        } else {
            // إذا لم يكن هناك تطابق
            return { success: false, message: 'اسم المستخدم أو كلمة المرور غير صحيحة' };
        }
    } catch (error) {
        console.error('Error checking user credentials:', error);
        return { success: false, message: 'Internal Server Error' };
    }
};



module.exports = {
    addUser,
    checkUserCredentials
};
