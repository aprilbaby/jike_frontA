import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import AppRouter from './router';

const App = () => (
    <Fragment>
        <AppRouter />
    
    </Fragment>
);

ReactDom.render(<App />,document.getElementById('root'));