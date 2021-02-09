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
      
          <React.Fragment >  {/*ini container semua*/}
            
            <section className="d-flex flex-column" style={{marginBottom:"10px"}}> {/* section judul*/}
             <h2 className="d-flex">FORM EVALUASI [evaluationOOHType]</h2>
            </section>

            <section className="d-flex flex-row" style={{marginLeft:"10em"}}> {/* section tabel 1 */}
              <section className=" flex-column" style={{marginRight:"10em", textAlign:"left"}}> {/* section label */}
                  <label style={{marginBottom:"40px", fontWeight:"bold" , marginTop:"25px"}}>Code FEB</label><br/>
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>Area</label> 
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>City</label>
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>District</label>
              </section>

              <section className="flex-column" style={{marginRight:"1em"}}> {/* section titik dua */}
                  <label style={{marginBottom:"40px", marginTop:"25px", fontWeight:"bold"}}>:</label>
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>:</label> 
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>:</label>
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>:</label>
              </section>

              <section className="flex-column" style={{width:"40em", marginRight:"5em"}}> {/* section tabel left */}
                <input style={{marginBottom:"20px", paddingBottom:"10px"}} placeholder="Code"
                  name="code"
                  value={code}
                //   onChange={handleRankChange}
                onchange={(e)=> setCode(e.target.value)}
                  />
              
                <input style={{marginBottom:"20px", paddingBottom:"10px"}} className="flex"
                  placeholder="Area"
                  name="area"
                  value={area}
                  onChange={(e)=> setArea(e.target.value)}
                    />

                <input style={{marginBottom:"20px", paddingBottom:"10px"}} className="flex"
                placeholder="City"
                name="city"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                  />
            
                <input style={{marginBottom:"20px", paddingBottom:"10px"}} className="flex"
                placeholder="District"
                name="district"
                value={dist}
                onChange={(e)=> setDist(e.target.value)}
                  />
                </section>

              <section style={{marginTop:"11.5em"}}>
                <label style={{ fontWeight:"bold", marginRight: "1em"}}>Tgl. Evaluasi</label>
                <label style={{ fontWeight:"bold", marginRight: "1em"}}>:</label>
                <input style={{marginBottom:"20px", paddingBottom:"10px", width:"24em"}} className="flex"
                placeholder="DD/MM/YYYY"
                name="tglE"
                value={tglE}
                onChange={(e)=> setTglE(e.target.value)}/>
              </section>
            </section>

            <section className="d-flex flex-row" style={{marginLeft:"10em"}}>
            <h3 className="d-flex">DATA [evaluationOOHType]</h3>
            </section>

            <section className="d-flex flex-row" style={{marginLeft:"10em"}}> {/* section tabel 1 */}
              <section className=" flex-column" style={{marginRight:"5.5em", textAlign:"left"}}> {/* section label */}
                  <label style={{marginBottom:"39px", fontWeight:"bold" , marginTop:"25px"}}>Lokasi</label><br/>
                  <label style={{marginBottom:"39px", fontWeight:"bold"}}>Side</label> 
                  <label style={{marginBottom:"39px", fontWeight:"bold", width:"150px"}}>Ukuran (T) x (L)</label>
                  <label style={{marginBottom:"39px", fontWeight:"bold"}}>View</label>
              </section>

              <section className="flex-column" style={{marginRight:"1em"}}> {/* section titik dua */}
                  <label style={{marginBottom:"40px", marginTop:"25px", fontWeight:"bold"}}>:</label>
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>:</label> 
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>:</label>
                  <label style={{marginBottom:"40px", fontWeight:"bold"}}>:</label>
              </section>

              <section className="flex-column" style={{width:"75em"}}> {/* section tabel left */}
              <input style={{marginBottom:"20px", paddingBottom:"10px"}} placeholder="streetAddress"
                name="streetAddress"
                value={loc}
              //   onChange={handleRankChange}
              onchange={(e)=> setLoc(e.target.value)}
                />
              
              <section className="flex-row"> {/* section side + networking */}
                <input style={{marginBottom:"20px", paddingBottom:"10px", width:"20em"}} className="flex"
                  placeholder="side"
                  name="side"
                  value={side}
                  onChange={(e)=> setSide(e.target.value)}
                    />

                <label style={{ fontWeight:"bold", marginRight: "1em", marginBottom:"10px", marginLeft:"30px"}}>Status Networking</label>
                <label style={{ fontWeight:"bold", marginRight: "1em",marginBottom:"10px" }}>:</label>
                <input style={{marginBottom:"20px", paddingBottom:"10px", width:"20em"}} className="flex"
                placeholder="statusNetworking"
                name="statN"
                value={statN}
                onChange={(e)=> setStatN(e.target.value)}/>
              </section>

              <section className="flex-row" style={{width:"36.6em"}}>
                <input style={{marginBottom:"20px", paddingBottom:"10px"}} className="flex"
                placeholder="sizeName"
                name="ukuran"
                value={ukuran}
                onChange={(e)=> setUkuran(e.target.value)}
                  />
                <label style={{ fontWeight:"bold", marginRight: "1em",marginBottom:"10px", marginLeft:"2em" }}>Meter</label>
              </section>
              
              <input style={{marginBottom:"20px", paddingBottom:"10px"}} className="flex"
              placeholder="view"
              name="view"
              value={view}
              onChange={(e)=> setView(e.target.value)}
                />
              </section>
            </section>

            <section className="d-flex flex-row" style={{marginLeft:"10em"}}> {/* section evaluasi */}
            <h3 className="d-flex">EVALUASI [evaluationOOHType]</h3>
            </section>
           
          </React.Fragment>
        </PdfContainer>
      </React.Fragment>
    );
}
/*

                />*/