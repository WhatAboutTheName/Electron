import React, { useState } from 'react';
import { ipcRenderer } from 'electron';
import './settings.scss';

export const Settings = () => {

    const [colorSettings, setColorSettings] = useState({
        background: '#412adb',
        border: '#412adb'
    });

    const hideSettings = () => {
        ipcRenderer.send('settings_hide');
    }

    const cheangeSettings = e => {
        setColorSettings({
            ...colorSettings,
            [e.target.name]: e.target.value
        });
    }

    const saveSettings = () => {
        if (colorSettings.background !== '#412adb') {
            ipcRenderer.send('new_background_color', colorSettings.background);
        }
        if (colorSettings.border !== '#412adb') {
            document.body.style.borderColor = colorSettings.border;
            document.getElementsByClassName('settings_header')[0].style.borderBottomColor = colorSettings.border;
        }
    }

    return (
        <div className='settings_container'>
            <div className='settings_header'>
                <div className='drag_and_drop'></div>
                <img onClick={_ => hideSettings()} className='settings_close' src='./img/close.png' alt='img_error' />
            </div>
            <div className='settings_content'>
                <div className='settings_background settings_block'>
                    <span>
                        Изменить цыет заднего фона:
                    </span>
                    <input onChange={cheangeSettings} type='color' name='background' value={colorSettings.background} />
                </div>
                <div className='settings_border settings_block'>
                    <span>
                        Изменить цыет рамки:
                    </span>
                    <input onChange={cheangeSettings} type='color' name='border' value={colorSettings.border} />
                </div>
                <button onClick={_ => saveSettings()} className='settings_btn'>Сохранить</button>
            </div>
        </div>
    );
}
