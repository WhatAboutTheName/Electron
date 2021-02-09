import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './content.scss';

export const Content = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            let container = [];
            const res = await axios.get('/data/getFiles');
            res.data.data.forEach(el => {
                let binary = "";
                let bytes = [].slice.call(new Uint8Array(el.data.data));
                bytes.forEach((b) => (binary += String.fromCharCode(b)));
                container.push(binary);
            })
            setData(container);
        } catch (err) {
            console.error(err);
        }
    }, [])

    let template = <h4>Нет ни одной фотографии</h4>;
    if (data.length) {
        template = data.map(el => {
            return (
                <img className="content_img" key={el} src={el} alt='error' />
            );
        })
    }

    return (
        <div className="content">
            {
                template
            }
        </div>
    )
}
