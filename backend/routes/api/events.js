const express = require("express");
const asyncHandler = require("express-async-handler");
const { Event } = require("../../db/models");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();
const validateEvent = [
	check('name')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a name for your event.'),
	check('date')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a date for your event'),
	check('start_time')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a time that your event will start at.'),
	check('end_time')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a time that your event will end at.'),
	check('description')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a description for your event.'),
	check('image')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a URL for the image youd like to use.'),
	handleValidationErrors,
];
//list all events
router.get('/', asyncHandler(async (_req, res) => {
	const events = await Event.findAll();
	return res.json(events);
}));

//list one event
router.get('/:id', asyncHandler(async (req, res) => {
	const event = await Event.findByPk(req.params.id,
		{ include: [Users] });
	return res.json(event);
}));

//create event
router.post('/', validateEvent, asyncHandler(async (req, res) => {
	const { hostId, name, date, start_time, end_time, description, image } = req.body;
	const event = await Event.create({
		hostId,
		name,
		date,
		start_time,
		end_time,
		description,
		image,
	});
	return res.json({ event });
}));

router.delete('/:id', asyncHandler(async (req, res) => {
	const event = await Event.findByPk(req.params.id);
	await event.destroy();
	return res.json();
}));

module.exports = router;
