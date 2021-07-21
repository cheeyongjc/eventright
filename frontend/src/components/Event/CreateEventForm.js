import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEventThunk } from '../../store/event';
import { Redirect } from "react-router-dom";

function CreateEventForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [start_time, setStart_time] = useState('');
    const [end_time, setEnd_Time] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);

    if (!sessionUser) return <Redirect to='/signup' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(createEventThunk({ name, date, start_time, end_time, description, image }))
            .catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
    };

    return (
        <div className='createEventContainer'>
            <form onSubmit={handleSubmit} className='createEventForm'>
                <div className='createEvent-error-container'>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
                <label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name for your event'
                    />
                </label>
                <label>
                    <input
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type='time'
                        value={start_time}
                        onChange={(e) => setStart_time(e.target.value)}
                        placeholder='Enter a start time ex. 9:00'
                    />
                </label>
                <label>
                    <input
                        type='time'
                        value={end_time}
                        onChange={(e) => setEnd_Time(e.target.value)}
                        placeholder='Enter an end time ex. 17:00'
                    />
                </label>
                <label>
                    <input
                        type='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter a description for your event'
                    />
                </label>
                <label>
                    <input
                        type='text'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder='Enter an image URL here'
                    />
                </label>
                <button type='submit'>Create New Event</button>
            </form>
        </div>
    )
}

export default CreateEventForm;
