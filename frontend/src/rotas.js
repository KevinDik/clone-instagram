import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';

function Rotas() {
    return (
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/new" element={<New />} />
        </Routes>
    );
}

export default Rotas;