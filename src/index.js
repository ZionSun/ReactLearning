import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Clock} from './Clock';
import {Button} from './button';
import {LoginControl} from './LoginControl';
import {StudentList} from './StudentList';
import { NameForm } from './NameForm';
import {EssayForm} from './EssayForm';
import { TempCalculator } from './TempCalculator';


const root = ReactDOM.createRoot(document.getElementById('root'));

const element = 
    <div>
        <TempCalculator/>
    </div>;
root.render(element);