const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Contact = sequelize.define("Contact", {

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Contact name is required"
            },
            len: {
                args: [2, 100],
                msg: "Name must be between 2 and 100 characters"
            }
        }
    },

    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: {
            name: "unique_contact_email",
            msg: "Email already exists"
        },
        validate: {
            isEmail: {
                msg: "Please enter a valid email address"
            },
            notEmpty: {
                msg: "Email is required"
            }
        }
    },

    phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: {
            name: "unique_contact_phone",
            msg: "Phone number already exists"
        },
        validate: {
            notEmpty: {
                msg: "Phone number is required"
            },
            len: {
                args: [7, 20],
                msg: "Phone number must contain 7 to 20 characters"
            }
        }
    },

    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    company: {
        type: DataTypes.STRING(150),
        allowNull: true
    }

}, {
    tableName: "contacts",
    timestamps: true
});

module.exports = Contact;