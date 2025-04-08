import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [ad, setAd] = useState("");
  const [numara, setNumara] = useState("");
  const [ay, setAy] = useState("");
  const [yil, setYil] = useState("");
  const [cvv, setCvv] = useState("");

  const handleClick = () => {
    alert(`Adınız: ${ad}
      Numara: ${numara}
      Ay: ${ay}
      Yıl: ${yil}
      CVV: ${cvv}`);
  };

  return (
    <div className="container">
      <div className="header">
        <h8>Ödeme Bilgileri</h8>
        <h2>Kredi Kartı Bilgilerinizi Giriniz</h2>
      </div>
      <div className="card">
        <h4>Kart Üzerindeki İsim</h4>
        <input
          type="text"
          placeholder="Ahmet Yılmaz"
          onChange={(e) => setAd(e.target.value)}
        />

        <div>
          <h4>Kart Numarası</h4>
          <input
            type="text"
            placeholder="0000 0000 0000 0000 "
            onChange={(e) => setNumara(e.target.value)}
          />
        </div>

        <div className="footer">
          <div>
            <h5>Ay</h5>
            <select onChange={(e) => setAy(e.target.value)}>
              <option value="">AA</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>

          <div>
            <h5>Yıl</h5>
            <select onChange={(e) => setYil(e.target.value)}>
              <option value="">YY</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
            </select>
          </div>

          <div>
            <h5>Güvenlik Kodu</h5>
            <input
              className="cvv"
              type="text"
              placeholder="123"
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleClick}>
        Şimdi Öde
      </button>
    </div>
  );
};

export default App;
