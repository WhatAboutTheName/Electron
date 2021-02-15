import React, { useState } from 'react';
import axios from 'axios';
import './drag-and-drop.scss';

export const DragAndDrop = () => {

    const [drag, setDrag] = useState(false);

    const dragStartHandler = () => {
        setDrag(true);
    }

    const dragLiveHandler = () => {
        setDrag(false);
    }

    const onDropHandler = async () => {
        try {
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
        <div className="drag_and_drop_area">
            {
                drag ?
                    <div
                        className="drop_area"
                        onDragStart={_ => dragStartHandler()}
                        onDragLeave={_ => dragLiveHandler()}
                        onDragOver={_ => dragStartHandler()}
                        onDrop={_ => onDropHandler()}
                    >Отпустите фото для загрузки</div> :
                    <div
                        className="drop_area"
                        onDragStart={_ => dragStartHandler()}
                        onDragLeave={_ => dragLiveHandler()}
                        onDragOver={_ => dragStartHandler()}
                    >Перенесите фото для загрузки</div>
            }
        </div>
    )
}
