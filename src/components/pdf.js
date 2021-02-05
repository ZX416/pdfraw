import React, { useState } from 'react';
// import { render } from 'react-dom';
import './pdf.css';
import Doc from './DocService';
import PdfContainer from './PdfContainer';

export default function Pdf(props) {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Still, Jaime',
//       rank: 'SGT',
//       description: 'Demonstrate how to export an HTML section to PDF'
//     };
//   }

 const [area, setArea] = useState('');
 const [code, setCode] = useState('');
 const [city, setCity] = useState('');
 const [dist, setDist] = useState('');
 const [tglE, setTglE] = useState('');
 
 const [loc, setLoc] = useState('');
 const [side, setSide] = useState('');
 const [ukuran, setUkuran] = useState('');
 const [view, setView] = useState('');
 const [statN, setStatN] = useState('');

//   const onChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState((state) => {
//       state[name] = value;
//       return state;
//     })
//   }

//VERSI VARIABLE (BISA DI TARO ONCHANGE LANGSUNG)
//   const handleRankChange = (e) => {
//       setRank(e.target.value);
//   }

  const createPdf = (html) => Doc.createPdf(html);

    return (
      <React.Fragment>
        <PdfContainer createPdf={createPdf}>
          <React.Fragment>
            
            <section className="flex-column">
            <h2 className="flex">FORM EVALUASI [evaluationOOHType]</h2>
              <section className="flex-row">
                <section className="flex-column">
                    <label>Code FEB :</label>
                    <label>Area :</label> 
                    <label>City :</label>
                    <label>District :</label>
                </section>

                <section className="flex-column"> 
                <input placeholder="Code"
                  name="code"
                  value={code}
                //   onChange={handleRankChange}
                onchange={(e)=> setCode(e.target.value)}
                  />
                
                <input className="flex"
                  placeholder="Area"
                  name="area"
                  value={area}
                  onChange={(e)=> setArea(e.target.value)}
                   />

                
                <input className="flex"
                placeholder="City"
                name="city"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                 />

                <section>
                
                <input className="flex"
                placeholder="District"
                name="district"
                value={dist}
                onChange={(e)=> setDist(e.target.value)}
                 />

                <label>Tgl. Evaluasi :</label>
                <input className="flex"
                placeholder="tgl evaluasi"
                name="tglE"
                value={tglE}
                onChange={(e)=> setTglE(e.target.value)}
                 />
                </section>

                </section>

                </section>
            </section>
          </React.Fragment>
        </PdfContainer>
      </React.Fragment>
    );
}