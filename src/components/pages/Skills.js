import React from 'react'
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const data = [{
    "type": "sunburst",
    "labels": ["Skills", "Front-End","Back-End","Data-Base","ETL","Dev-Tools","Cloud",//1
                "Libs","Languages","B-Languages","B-Frameworks","Relational","Non Relational","ETL-Framework","Tool",//2
                "ReactJs","Jquery","Bootstrap","PlotlyJs","CSS","HTML","XML","Js","Java","Python","C#","Spring","Struts",//3
                "Oracle Db 11g","MySQL","DB2","Teradata","MS-SQL","CouchDB","Firebase","e3","AB-INITIO","DataStage",
                "Java-Core","Java-EE"//4
    ],
    "parents": ["", "Skills", "Skills","Skills","Skills","Skills","Skills",//1
                 "Front-End","Front-End","Back-End","Back-End","Data-Base","Data-Base","ETL","ETL",//2
                 "Libs","Libs","Libs","Libs","Languages","Languages","Languages","Languages","B-Languages","B-Languages","B-Languages",//3
                "B-Frameworks","B-Frameworks",
                "Relational","Relational","Relational","Relational","Relational","Non Relational","Non Relational","ETL-Framework","Tool","Tool",
                "Java","Java"//4
    ],
    "values":  [
        100, 0, 0, 0, 0,20,20,
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
        10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 
        100, 60
    ],
    "textposition": 'inside',
    "insidetextorientation": 'radial',
      "leaf": {"opacity": 0.8},
      "marker": {"line": {"width": 3}},
    }];
    
const layout = {
        "font": {size: 8},
        "autosize": true,
        "useResizeHandler": true,
        "paper_bgcolor" : 'rgba(0,0,0,0)',
        "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
};

function Skills() {
    
    return (
            <React.Fragment>
              <SkillsDetails className="conteiner-fluid align-items-center">
              <Plot data={data} layout={layout} useResizeHandler={true}style={{width: "95%", height: "95%"}}/>
              </SkillsDetails>
            </React.Fragment>
          );
    }
export default Skills;

const SkillsDetails = styled.body`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;
  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }
  h4 {
    color: var(--mainDark);
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 2%;
    color: var(--mainDark);
  }
  button {
    color: var(--mainWhite);
    background: var(--mainDark);
    margin-bottom: 8%;
  }
  button:hover {
    background: var(--mainBlue)
  }
  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }
  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .nav-item {
    height: 18.75rem;
  }
  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
