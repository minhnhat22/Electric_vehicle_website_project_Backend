const connection = require("../config/database");

// get data from database
const getAllAccount = async () => {
    let [results, files] = await connection.query('select * from account');
    return results;
}

const postCreateAccountMD = async (nameAc, passwordAc, permissionsAc) => {
    let [results, flelds] = await connection.query(
        `INSERT INTO account (accountName , accountPassword, accountPermissions) VALUES (?, ?, ?) `, [nameAc, passwordAc, permissionsAc]
    );

}



// function to get user data by "ID"
const getAccountById = async (idAccout) => {
    // get user data from the database through the value of the userId variable
    let [results, files] = await connection.query('select * from account where accountId = ? ', [idAccout]);
    // console.log(">> req.params: ", req.params, userId)
    // console.log(">> results: ", results)
    // assign the variable "user = results" and check the array "results.length > 0".
    // If the test result is true, this expression returns the value of the result array "results[0]",
    // otherwise it returns the array {}
    let accountMD = results && results.length > 0 ? results[0] : {};
    // returns the array data to the user variable
    return accountMD;
}

// update data in the database through id = userId
const postUpdateAccountById = async (nameAc, passwordAc, permissionsAc, AcId) => {
    let [results, flelds] = await connection.query(
        `UPDATE account
        SET accountName = ?, accountPassword = ?, accountPermissions = ?
        WHERE accountId = ?`, [nameAc, passwordAc, permissionsAc, AcId]
    );
}

// delete data via id = id
const deleteAccountById = async (idAccout) => {
    let [results, flelds] = await connection.query(
        `DELETE FROM account  WHERE accountId = ?`, [idAccout],
    );
}

module.exports = {
    getAllAccount, getAccountById, postUpdateAccountById, deleteAccountById, postCreateAccountMD
}