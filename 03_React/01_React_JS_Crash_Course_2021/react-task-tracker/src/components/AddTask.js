import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Please add a task');
            return;
        }

        onAdd({ text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label htmlFor='TaskName'>Task</label>
                <input type="text" name='TaskName' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor='DayTime'>Day & Time</label>
                <input type="text" name='DayTime' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}  />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor='Reminder'>Set Reminder</label>
                <input type="checkbox" checked={reminder} name='Reminder' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Save' className='btn btn-block' />
        </form>
    )
}

export default AddTask
