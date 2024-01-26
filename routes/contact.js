const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all contacts
router.get('/:email', async (req, res) => {
  try {
    const contacts = await Contact.find({owner: req.params.email});
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new contact
router.post('/', async (req, res) => {
    console.log("I received: ", req.body)
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    Mobile: req.body.Mobile,
    facebook: req.body.facebook,
    Twitter: req.body.Twitter,
    Instagram: req.body.Instagram,
    // هنا
    owner: req.body.owner
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Update
router.put('/:id', async (req, res) => {
    try {
      const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(updatedContact);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Delete a contact
  router.delete('/:id', async (req, res) => {
    try {
      await Contact.deleteOne({ _id: req.params.id }).exec();
      res.json({ message: 'Contact deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
    
module.exports = router;
