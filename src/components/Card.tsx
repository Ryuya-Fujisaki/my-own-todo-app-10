import React, { useState } from 'react';
import { TextField } from '@mui/material';
// import { Draggable } from 'react-beautiful-dnd';

interface Task {
    id: string;
    title: string;
}

interface CardProps {
    task: Task;
    onTextChange: (newTitle: string) => void;
}

const Card: React.FC<CardProps> = ({ task, onTextChange }) => {
    const [title, setTitle] = useState(task.title);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
        onTextChange(newTitle);
    };

    return (
        <div
            className='card'
            style={{
                backgroundColor: 'white',
                padding: '8px',
                marginBottom: '8px',
            }}
        >
            <TextField
                value={title}
                onChange={handleTitleChange}
                fullWidth
                variant="outlined"
                style={{ backgroundColor: '#F6F5EA', padding: '8px', borderRadius: '7px' }}
            />
        </div>
    );
};

export default Card;
