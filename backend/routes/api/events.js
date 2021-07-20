const express = require("express");
const asyncHandler = require("express-async-handler");
const { Event } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async (_req, res) => {
	const events = await Event.findAll();
	return res.json(events);
}));

module.exports = router;