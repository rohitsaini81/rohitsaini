import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

export default function Techstack() {
  return (
    <div className="flex-center" style={{flexDirection:"column",width:'100vw',height:'50vh'}}>
      <div className="flex-center" style={{width:"40em",height:'50em',margin:"5px 0",}}>Professional  &nbsp;<span style={{color:"red"}}> Skillset</span></div>

      <div className="flex-center" style={{width:"40em",height:'50em',margin:"5px 0",}}>
      <CgCPlusPlus size={80}/><DiJavascript1 size={80} border /> <DiNodejs size={80}/><DiReact size={80} /><DiMongodb size={80}/> <SiNextdotjs size={80} /><DiGit size={80} /></div>
      <div className="flex-center" style={{width:"40em",height:'50em',margin:"5px 0",}}><SiRedis size={80} /><DiJava size={80} /><SiPostgresql size={80} /><DiPython size={80} /></div>
    </div>
  );
}


