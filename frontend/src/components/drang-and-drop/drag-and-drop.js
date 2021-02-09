import React, { useState } from 'react';
import axios from 'axios';
import './drag-and-drop.scss';

export const DragAndDrop = () => {

    const [drag, setDrag] = useState(false);

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    }

    const dragLiveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    }

    const onDropHandler = async (e) => {
        try {
            e.preventDefault();
            let files = dataTransfer.files;
            const data = new FormData();
            data.append("image", files);
            await axios.post('/data/addFile', data);
            setDrag(false);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="drag_and_drop">
            {
                drag ?
                    <div
                        className="drop_area"
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLiveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >Отпустите фото для загрузки</div> :
                    <div
                        className="drop_area"
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLiveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >Перенесите фото для загрузки</div>
            }
        </div>
    )
}
