import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import style from '../Scanner/Scanner.module.css';
import scanImg from '../../images/scan.jpg';

export default function Scan() {

    const [scanResult, setScanResult] = useState(null);
    const [userId, setUserId] = useState("12345");  // Replace with actual user ID retrieval logic
    const [userName, setUserName] = useState("John Doe");  // Replace with actual user name retrieval logic

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250
            },
            fps: 5,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        }

        function error(err) {
            console.warn(err);
        }
    }, []);

    return (
        <div className='container'>
            <div className={`d-flex justify-content-between align-items-center ${style.scan}`}>
                <div className="w-50">
                    { scanResult
                        ? <div>
                            Success:
                            <form action={scanResult} method='POST'>
                                <input type="hidden" name="id" value={userId} />
                                <input type="hidden" name="username" value={userName} />
                                <input type="submit" value="Send Data" />
                            </form>
                        </div>
                        : <div id='reader'></div>
                    }
                </div>
                <div className="w-50">
                    <img src={scanImg} className={style.scanImage} alt="Scan" />
                </div>
            </div>
        </div>
    );
}