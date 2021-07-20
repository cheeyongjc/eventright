const GET_EVENTS = 'event/GET_EVENT';

export const getEvents = (events) => {
	return { type: GET_EVENTS, events };
}

export const getEventThunk = () => async (dispatch) => {
	const response = await fetch(`/api/events`);
	if (response.ok) {
		const events = await response.json();
		dispatch(getEvents(events));
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
