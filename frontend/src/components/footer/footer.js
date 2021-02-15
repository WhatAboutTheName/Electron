import React, { useState, useEffect } from 'react';
import { remote } from 'electron';
import './footer.scss';

export const Footer = () => {

    let allWindows = remote.BrowserWindow.getAllWindows();
    const [settings, setSettings] = useState(undefined);

    useEffect(_ => {
        allWindows.forEach(el => {
            if (el.getTitle() === 'Настройки') {
                setSettings(el);
            }
        });
    }, [])

    const showSettingsWindow = () => {
        settings.isVisible() ? settings.hide() : settings.show();
    }

    return (
        <div className='footer_container'>
            <img onClick={_ => showSettingsWindow()} className="settings_img" src='./img/settings.png' alt='img_error' />
        </div>
    );
}
