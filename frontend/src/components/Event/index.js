import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEventThunk } from '../../store/event';

export default function Event() {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.eventState.events);
	const { id } = useParams();
	const allEvents = events.find((event) => event.id === +id);

	useEffect(() => {
		dispatch(getEventThunk());
	}, [dispatch]);

	return (
		<div>
			<h1>{allEvents?.name}</h1>
			<img src={allEvents?.image} alt={allEvents.name} />
		</div>
	)
}
