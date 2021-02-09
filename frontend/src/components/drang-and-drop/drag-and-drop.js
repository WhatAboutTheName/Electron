import React, { useState } from 'react';
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
            let files = [...e.dataTransfer.files];
            const formData = new FormData();
            files.forEach(e => {
                formData.append('file', e);
                axios.post()
            })
            setDrag(false);
        } catch(err) {
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
                    >Отпустите файл для загрузки</div> :
                    <div
                        className="drop_area"
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLiveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >Перенесите файл для загрузки</div>
            }
        </div>
    )
}
