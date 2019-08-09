import React from 'react';
import Navitem  from './NavItem.js';
import './NavMenu.css';
import "./bootstrap.min.css";

function item(name,link,nestList=""){
    this.name=name;
    this.link=link;
    nestList!=="" ? this.nestList=<ul>{nestList}</ul>:this.nestList="";
  
}

let entrepreneur=new item("for entrepreneur","#")
let student=new item("for student","#")
let hobbyists=new item("for hobbyists","#")
let secondList=[entrepreneur,student,hobbyists]
let droplist=listItem(secondList)

let home=new item("home","#")
let service=new item("Service","#",droplist)
let contact=new item("Contact","#",)

let mainList=[home,service,contact]

function listItem(list){
   return(
       list.map(el =>
        <Navitem name={el.name} link={el.link} newlist={el.nestList}/>
        )
   )
}
let navlist=listItem(mainList)

function Navmenu() {
  return (
      <nav className="">
            <ul className="mainmenu">
                {navlist}
            </ul>
      </nav>
    
  );
}

export default Navmenu;
