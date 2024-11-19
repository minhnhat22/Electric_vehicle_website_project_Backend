const connection = require('../config/database');
const {getAllAccount, getAccountById, deleteAccountById, postUpdateAccountById, postCreateAccountMD} = require('../services/CRUDService');

// print data to views through function getAllUsers() that already has data from the database
const getAccountPage = async (req, res) => {
    let results = await getAllAccount();
    // pass a value from express to ejs and display that data on views
    return res.render('accountList.ejs', {accountList: results}) // return res.render('link views', {oject})
    
   
}

// show views create.ejs
const getaccountCreationPage = (req, res) => {
    res.render('createAccount.ejs')
}


// pass data from views to database
const postCreateAccount = async (req, res) => {
    let nameAc = req.body.taikhoan;
    let passwordAc = req.body.matkhau;
    let permissionsAc = req.body.quyen;
    // let (email, name, city) = req.body; 
    // Là viết tắt của:        
    // let email = req.body.email;
    // let name = req.body.myname;
    // let city = req.body.hello;

    // connection.query(
    //     `INSERT INTO
    //     Users (email , name , city)
    //     VALUES (?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //       console.log(results);

    //       res.send(' Created user succeed !')
    //     }
    // );

    // pass data from the array (input views) to columns in the database
    await postCreateAccountMD(nameAc, passwordAc, permissionsAc)

    res.redirect('/')
    
    // res.send(' Created user succeed !')

    // connection.query(
    //     'select * from Users',
    //     function (err, results, flelds) {
    //         console.log(">>> results= ", results); // results contains rows return
    //     }
    // );

    // const [results, flelds] = await connection.query('select * from Users');
}

// update function via id
const getUpdatePage = async (req, res) => {
    // assign the "id value" in views to the UserId variable
    const idAccout = req.params.idTK
    // assign the queried value (data) through the "UserId" variable
    let accountCTL = await getAccountById(idAccout)
    // pass a value from express to ejs and display that data on views
    res.render('updateAccount.ejs', {accountEdit : accountCTL}); // x <- y
}

// function to update data to the database
const postUpdateAccount = async (req, res) => {
    // get data from input via "name"
    let nameAc = req.body.taikhoan;
    let passwordAc = req.body.matkhau;
    let permissionsAc = req.body.quyen;
    let AcId = req.body.idAc;
    // console.log(">>> email= ", accout, "name = ", pasword, "city = ", quyen, 'userId = ', idAccout);

    // let (email, name, city) = req.body; 
    // Là viết tắt của:        
    // let email = req.body.email;
    // let name = req.body.myname;
    // let city = req.body.hello;

    // connection.query(
    //     `INSERT INTO
    //     Users (email , name , city)
    //     VALUES (?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //       console.log(results);

    //       res.send(' Created user succeed !')
    //     }
    // );

    // assign data to columns from array (input views)
    // let [results, flelds] = await connection.query(
    //     `UPDATE Users 
    //     SET email = ?, city = ?, name = ?
    //     WHERE id = ?`, [email, city, name, userId]
    // );

    await postUpdateAccountById(nameAc, passwordAc, permissionsAc, AcId)

    // console.log(">>> results= ", results)
    
    // res.send(' Updated user succeed !')
    res.redirect('/')

    // connection.query(
    //     'select * from Users',
    //     function (err, results, flelds) {
    //         console.log(">>> results= ", results); // results contains rows return
    //     }
    // );

    // const [results, flelds] = await connection.query('select * from Users');
}

// get the data you want to delete via userId
const getDeleteAccount = async (req, res) => {
    // assign the "id value" in views to the UserId variable
    const idAccout = req.params.idTK
    // Call the function to get user data (getUserById) through the userId variable
    let accountCTL = await getAccountById(idAccout)
    // pass a value from express to ejs and display that data on views
    res.render('deleteAccount.ejs', {accountEdit : accountCTL}); // x <- y
}

// Call the function to delete data (updateUserById) with the variable id
const postDeleteAccount = async (req, res) => {
    const idAccout = req.body.idAc;
    await deleteAccountById(idAccout);
    res.redirect('/');
}

module.exports = {
    getAccountPage, getaccountCreationPage, postCreateAccount, getUpdatePage,
    postUpdateAccount, getDeleteAccount, postDeleteAccount
}