const { Op } = require("sequelize");
const Contact = require("../models/Contact");

// CREATE CONTACT
const createContact = async (req, res) => {
    try {
        const { name, email, phone, address, company } = req.body;

        const contact = await Contact.create({
            name,
            email,
            phone,
            address,
            company
        });

        res.status(201).json({
            success: true,
            message: "Contact created successfully",
            data: contact
        });

    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                success: false,
                message: "Email or phone number already exists"
            });
        }

        if (error.name === "SequelizeValidationError") {
            return res.status(400).json({
                success: false,
                message: error.errors.map(err => err.message)
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to create contact",
            error: error.message
        });
    }
};


// GET ALL CONTACTS (SEARCH, SORT & PAGINATION)
const getAllContacts = async (req, res) => {
    try {
        const {
            search,
            sortBy = "createdAt",
            order = "DESC",
            page = 1,
            limit = 10
        } = req.query;

        const pageNumber = Math.max(1, parseInt(page, 10) || 1);
        const pageLimit = Math.min(100, Math.max(1, parseInt(limit, 10) || 10));

        const allowedSortFields = [
            "name",
            "email",
            "phone",
            "company",
            "createdAt"
        ];

        const sortField = allowedSortFields.includes(sortBy)
            ? sortBy
            : "createdAt";

        const sortOrder = order.toUpperCase() === "ASC" ? "ASC" : "DESC";

        const where = {};

        if (search) {
            where[Op.or] = [
                { name: { [Op.like]: `%${search}%` } },
                { email: { [Op.like]: `%${search}%` } },
                { phone: { [Op.like]: `%${search}%` } }
            ];
        }

        const { count, rows } = await Contact.findAndCountAll({
            where,
            order: [[sortField, sortOrder]],
            limit: pageLimit,
            offset: (pageNumber - 1) * pageLimit
        });

        res.status(200).json({
            success: true,
            message: "Contacts retrieved successfully",
            totalContacts: count,
            currentPage: pageNumber,
            totalPages: Math.ceil(count / pageLimit),
            data: rows
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve contacts",
            error: error.message
        });
    }
};


// GET CONTACT BY ID
const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }

        res.status(200).json({
            success: true,
            data: contact
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve contact",
            error: error.message
        });
    }
};


// UPDATE CONTACT
const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }

        await contact.update(req.body);

        res.status(200).json({
            success: true,
            message: "Contact updated successfully",
            data: contact
        });

    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                success: false,
                message: "Email or phone number already exists"
            });
        }

        if (error.name === "SequelizeValidationError") {
            return res.status(400).json({
                success: false,
                message: error.errors.map(err => err.message)
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to update contact",
            error: error.message
        });
    }
};


// DELETE CONTACT
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }

        await contact.destroy();

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete contact",
            error: error.message
        });
    }
};


module.exports = {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
};