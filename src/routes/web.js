const express = require('express');
const { getAccountPage, postCreateAccount, getaccountCreationPage, getUpdatePage,
     postUpdateAccount, getDeleteAccount, postDeleteAccount} = require('../controllers/acListAdController');

const router = express.Router();

// router.Method('/route', handler)

// Khai báo route
router.get('/', getAccountPage);

router.get('/createAccount-G', getaccountCreationPage);

router.post('/createAccount-P', postCreateAccount);

// Ide là tự đặt và nó sẽ được sử dụng trong homeControllers thông qua "Route parameters: req.params.ide"
router.get('/updateAccount-G/:idTK', getUpdatePage);

router.post('/updateAccount-P', postUpdateAccount);

router.get('/deletAccount-G/:idTK', getDeleteAccount);

router.post('/deletAccount-P', postDeleteAccount);

module.exports = router; //export default