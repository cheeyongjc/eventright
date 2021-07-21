import { csrfFetch } from "./csrf";

const GET_EVENTS = 'event/GET_EVENT';
const ADD_EVENTS = 'event/ADD_EVENT';

export const getEvents = (events) => {
	return { type: GET_EVENTS, events };
}
export const addEvent = event => {
	return {
		type: ADD_EVENTS,
		payload: event,
	};
}

export const getEventThunk = () => async (dispatch) => {
	const response = await fetch(`/api/events`);
	if (response.ok) {
		const events = await response.json();
		dispatch(getEvents(events));
	}
};
export const createEventThunk = (event) => async dispatch => {
	const { name, date, start_time, end_time, description, image } = event;
	const response = await csrfFetch(`/api/events`, {
		method: 'POST',
		body: JSON.stringify({
			name,
			date,
			start_time,
			end_time,
			description,
			image,
		}),
	});
	if (response.ok) {
		const events = await response.json();
		dispatch(addEvent(events.event));
		return response;
	}
};
const initialState = {
	events: []
};

const eventReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EVENTS:
			return { ...state, events: [...action.events] };
		default:
			return state;
	}
}
export default eventReducer;
