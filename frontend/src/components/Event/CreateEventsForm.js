import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEventThunk } from '../../store/event';
import { useHistory, useParams } from 'react-router-dom';
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

    return(
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
                onChange={(e)=> setName(e.target.value)}
                placeholder='Name for your event'
                />
            </label>
            </form>
        </div>
    )
}
