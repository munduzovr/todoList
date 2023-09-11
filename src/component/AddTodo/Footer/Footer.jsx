import React from 'react';

const Footer = ({counter}) => {
    
    // console.log(props.counter())
    return (
        <div>
            <div className="footer">
                <img src="https://cdn-icons-png.flaticon.com/512/3621/3621464.png" alt="" width="200" />
                <p>Instagram Logo</p>
                <input type="text" placeholder="Введите имя"/>
                <button onClick={()=>counter()} >Click</button>
            </div>

        </div>
    );
};

export default Footer;