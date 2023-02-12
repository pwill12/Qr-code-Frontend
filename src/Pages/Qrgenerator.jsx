import "../App.css";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

function Qrgenerate() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const generateQrCode = async () => {
      try {
        const response = await QRCode.toDataURL('https://qrcode-nest.onrender.com');
        setImageUrl(response);
      } catch (error) {
        console.log(error);
      }
    };
    generateQrCode();
  }, []);

  return (
    <div className="Container">
      <div className="Center">
        <div className="qrtext">Qr-Code Generator</div>
        <div>
          {imageUrl ? (
            <a href='www.gmail.com' download>
              <img src={imageUrl} alt="img" width='300vw'/>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Qrgenerate;
