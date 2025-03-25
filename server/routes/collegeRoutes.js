const express = require("express");
const College = require("../models/College");

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const { name, description, location,image } = req.body;

       
        const existingCollege = await College.findOne({ name });
        if (existingCollege) {
            return res.status(400).json({
                success: false,
                message: "College with this name already exists"
            });
        }

        const college = await College.create({
            name,
            description,
            location,
            image,
            createdBy: req.body.createdBy || null
        });

        res.status(201).json({
            success: true,
            data: college,
            message: "College created successfully, waiting for approval"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


router.get("/all", async (req, res) => {
    try {
        const colleges = await College.find()

        res.status(200).json({
            success: true,
            data: colleges,
            message: "Colleges fetched successfully"
        });
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const college = await College.findById(req.params.id);

        if (!college) {
            return res.status(404).json({
                success: false,
                message: "College not found"
            });
        }

       res.status(200).json({
            success: true,
            data: college,
            message: "College fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


router.put("/:id", async (req, res) => {
    try {
        const college = await College.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!college) {
            return res.status(404).json({
                success: false,
                message: "College not found"
            });
        }

        res.status(200).json({
            success: true,
            data: college,
            message: "College updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const college = await College.findByIdAndDelete(req.params.id);

        if (!college) {
            return res.status(404).json({
                success: false,
                message: "College not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "College deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
