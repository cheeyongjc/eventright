const express = require("express");
const asyncHandler = require("express-async-handler");
const { Event } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async (_req, res) => {
	const events = await Event.findAll();
	return res.json(events);
}));
router.get('/:id', asyncHandler(async (req, res) => {
	const event = await Event.findByPk(req.params.id);
	return res.json(event);
}))
module.exports = router;
