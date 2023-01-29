const router = require('express').Router();
const { getAllUsers ,createUsers,deleteUsers,getOneUsers, updateUsers } = require('../controllers/users.controller');


router.get('/', getAllUsers);
router.get('/:id', getOneUsers);
router.post('/', createUsers);
router.delete('/:id', deleteUsers);
router.patch('/:id', updateUsers);

module.exports=router;
