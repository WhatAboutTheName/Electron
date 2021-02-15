import React from 'react';
import { DragAndDrop } from './drang-and-drop/drag-and-drop';
import { Content } from './content/content';
import { Footer } from './footer/footer';

export const Main = () => {

    return (
        <>
            <DragAndDrop />
            <Content />
            <Footer />
        </>
    );
}
