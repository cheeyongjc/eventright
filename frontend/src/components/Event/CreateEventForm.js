import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createEventThunk } from '../../store/event';
import './Event.css';

function CreateEventForm() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [start_time, setStart_time] = useState('');
    const [end_time, setEnd_Time] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);
    const { user } = useSelector((state) => state.session);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let createdEvent = await dispatch(createEventThunk({ hostId: user.id, name, date, start_time, end_time, description, image }))
        .catch(async(response)=>{
            const data = await response.json();
            if(data && data.errors) setErrors(data.errors)
        });
        if (createdEvent) {
            history.push(`/`);
        }
    };

    return (
        <div className='createEventContainer'>
            <img className='create-background' src='https://photodumpeventsright.s3.us-east-2.amazonaws.com/48-487865_festival-coachella.png' alt='background'></img>
            <form onSubmit={handleSubmit} className='create-form'>
                <div className='createEvent-error-container'>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
                <label>
                    <input
                        className='create-label'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name for your event'
                    />
                </label>
                <label>
                    <input
                        className='create-label-d'
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        className='create-label-t'
                        type='time'
                        value={start_time}
                        onChange={(e) => setStart_time(e.target.value)}
                        placeholder='Enter a start time ex. 9:00'
                    />
                </label>
                <label>
                    <input
                        className='create-label-t'
                        type='time'
                        value={end_time}
                        onChange={(e) => setEnd_Time(e.target.value)}
                        placeholder='Enter an end time ex. 17:00'
                    />
                </label>
                <label>
                    <input
                        className='create-label'
                        type='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter a description for your event'
                    />
                </label>
                <label>
                    <input
                        className='create-label'
                        type='text'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder='Enter an image URL here'
                    />
                </label>
                <button type='submit' className='create-btn'>Create New Event</button>
            </form>
        </div>
    )
}

export default CreateEventForm;
