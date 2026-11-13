const express = require("express");
const router = express.Router();

const {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
} = require("../controllers/contactController");

// CREATE CONTACT
router.post("/", createContact);

// GET ALL CONTACTS (SEARCH, SORT & PAGINATION)
router.get("/", getAllContacts);

// GET CONTACT BY ID
router.get("/:id", getContactById);

// UPDATE CONTACT
router.put("/:id", updateContact);

// DELETE CONTACT
router.delete("/:id", deleteContact);

module.exports = router;