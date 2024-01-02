import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

const QRCodeGenPage = () => {
  const [room, setRoom] = useState("");
  const [id, setId] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const generateLink = () => {
    const link = `/example/hotel/${room}/${id}`;
    setGeneratedLink(link);
  };

  return (
    <div>
      <div>
        <label htmlFor="room">Room: </label>
        <input type="text" id="room" value={room} onChange={handleRoomChange} />
      </div>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" value={id} onChange={handleIdChange} />
      </div>
      <button onClick={generateLink}>Generate QR Code</button>

      {generatedLink && (
        <div>
          <p>Generated Link: {generatedLink}</p>
          <QRCode value={generatedLink} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenPage;
