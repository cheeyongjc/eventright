import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEventThunk, getEventThunk } from '../../store/event';
import { useHistory, useParams } from 'react-router-dom';
import './Event.css';

export default function Event({ single }) {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.eventState.events);
	const { id } = useParams();
	const allEvents = events.find((event) => event.id === Number(id));
	const history = useHistory();
	// const sessionUser = useSelector(state => state.session.user);

	const handleEventClick = (event, eachId) => {
		event.preventDefault();
		history.push(`/${eachId}`);
	}
	// const handleDeleteEvent = async () => {
	// 	await dispatch(deleteEventThunk(id));
	// 	history.push('/');
	// }
	useEffect(() => {
		dispatch(getEventThunk());
	}, [dispatch]);
	if (single) {
		return (
			<div>
				<img src={allEvents?.image} alt={allEvents?.name} />
				<h1>{allEvents?.name}</h1>
				{/* <button hidden={allEvents.hostId !== sessionUser.id} onClick={handleDeleteEvent}>Delete</button> */}
			</div>
		)
	}
	return (
		<>
			<div className='background-container'>
				<img className='eventBackground' src='https://photodumpeventsright.s3.us-east-2.amazonaws.com/48-487865_festival-coachella.png' alt='background'></img>
			</div>
			<div className='eventsContainer'>
				{events?.map((event) => (
					<>
						<div className='eventContainer'>
							<img className='eventImages' src={event?.image} alt={event?.name} onClick={e => handleEventClick(e, event.id)} />
							<h1 className='eventName'>{event.name}</h1>
							<h2 className='eventDescription'>{event.description}</h2>
						</div>
					</>
				))}

			</div>
		</>
	)
}
