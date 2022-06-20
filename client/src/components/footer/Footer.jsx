import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Anugerah Cahaya Utama</li>
                    <li className="fListItem">Rachel Kasih Salusu</li>
                    <li className="fListItem">Shafiyatul Chanifah</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">10120171</li>
                    <li className="fListItem">10120901</li>
                    <li className="fListItem">11120233</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">cahayoyo@gmail.com</li>
                    <li className="fListItem">salusurachelk@gmail.com</li>
                    <li className="fListItem">hanifahshafiyatul@gmail.com</li>
                </ul>
            </div>
            <div className="fText">Copyright 2022 Allah SWT</div>
        </div>
    );
};

export default Footer;
