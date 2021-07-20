import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEventThunk } from '../../store/event';
import { useHistory } from 'react-router-dom';

export default function Event({ single }) {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.eventState.events);
	const { id } = useParams();
	const allEvents = events.find((event) => event.id === Number(id));
	const history = useHistory();

	const handleEventClick = (event, eachId) => {
		event.preventDefault();
		history.push(`/${eachId}`);
	}

	useEffect(() => {
		dispatch(getEventThunk());
	}, [dispatch]);
	if (single) {
		return (
			<div>
				<h1>{allEvents?.name}</h1>
				<img src={allEvents?.image} alt={allEvents?.name} />
			</div>
		)
	}
	return (
		<div>
			{events?.map((event) => (
				<>
					<h1>{event.name}</h1>
					<img src={event?.image} alt={event?.name} onClick={e => handleEventClick(e, event.id)} />
				</>
			))}

		</div>
	)
}
