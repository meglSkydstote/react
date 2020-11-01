const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all items   We're already in the items file, therefore '/' and not '/api/items/'
// @access  Public
router.get('/items', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create an item   We're already in the items file, therefore '/' and not '/api/items/'
// @access  Public
router.post('/items', (req, res) => {
    const newItem = new Item({
        id: req.body.id,
        name: req.body.name
    });

    newItem
        .save()
        .then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete an item   We're already in the items file, therefore '/' and not '/api/items/'
// @access  Public
router.delete('/items/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


// router.post("/items/item", (req, res) => {
//     const { id, update } = req.body;
//     Item.findByIdAndUpdate(id, update, err => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true });
//     });
// });

// router.delete("/items/item", (req, res) => {
//     const { id } = req.body;
//     Item.findByIdAndRemove(id, err => {
//         if (err) return res.send(err);
//         return res.json({ success: true });
//     });
// });

// router.post("/putData", (req, res) => {
//     let data = new Data();

//     const { id, message } = req.body;

//     if ((!id && id !== 0) || !message) {
//         return res.json({
//             success: false,
//             error: "INVALID INPUTS"
//         });
//     }
//     data.message = message;
//     data.id = id;
//     data.save(err => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true });
//     });
// });

module.exports = router;