
// function Name() {
//  return <h1>Kitchener</h1>   
// }
// ReactDOM.render(<Name />, document.getElementById('root'))

// const Title = ()=> <h1>Kitchener</h1>   
//    ReactDOM.render(<Title />, document.getElementById('root'))


// ReactDOM.render(<h1>Opal</h1>, document.getElementById('root'))

/* ============= Practice exercises above ========================*/



// import Title from "./components/Title"
// import Image from './components/Image'
// import Header from "./components/Header"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// const Title = ()=> {
//     return <div>
//         <h1>Opal Mullings</h1>
//         <p> <em>Law Clerk / Paralegal</em> </p>
//         <p>I am detail oriented and my passions are travelling and reading.</p>
//     </div>
// }
// const Image =()=> {
//     return <img src="image\picopal2.png" alt="me" width="200px" />
// }

// const Header =() =>{
//     return (
//         <div>
//             <table cellpadding="10px">
//                  <tbody>
//                      <tr>
//                          <td><Image /></td>
//                          <td><Title /></td>
//                      </tr>
//                  </tbody>
//              </table>
//              <hr/>
//          </div>
//      )
//  }
// --------------------------------------------------------------------

//  const Subtitle =(props)=> {
//     return <h2>{props.title}</h2>
// }



//------------------------- Education Section
// const Education = () =>{
//     return (
//         <div>
//             {/* <h2>Education</h2> */}
//             <Subtitle title="Education" />
//             <ul>
//                  <li>Alpha Primary School</li>
//                 <li>North Albion Collegiate</li>
//                 <li>York University</li>
//                 <li>Success Business College</li>
//                 <li>Humber College</li>
//             </ul>
//             <hr/>
//         </div>
//     )
// }

// ---------------Work Experience

// const Experience = ()=>{
//     return(
//         <div>
//             <Subtitle title = "Experience"/> 
//             {/* <h2>Work Experience</h2> */}
//         <table>
//             <thead>
//                 <tr>
//                     <th>Dates</th>
//                     <th>Work</th>
//                     <th>Company</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 <tr>
//                     <td>1997 - present</td>
//                     <td>Law Clerk / Paralegal</td>
//                     <td>Yallen Associates</td>
//                 </tr>
//                 <tr>
//                     <td>1995 - 1996</td>
//                     <td>Telemarketer</td>
//                     <td>Response Marketing</td>
//                 </tr>
//                 <tr>
//                     <td>1989 - 1998</td>
//                     <td>Office Staff / Bookkeeper / Supervisor</td>
//                     <td>Oshawa Foods</td>
//                 </tr>
//                 <tr>
//                     <td>1989 - 1990</td>
//                     <td>Child Care Aid</td>
//                     <td>Kipling Acres</td>
//                 </tr>

//             </tbody>
//         </table> 
//         <hr />   
//         </div>
//     )
// }



//-------------------------- Skills section


// const Skills = () =>{
//     return (
//         <div>
//              <Subtitle title="Skills" />
//             {/* <ul> 
//                 <li>(prop.title)</li>
//             </ul>  */}
            
//             {/* <h2>Skills</h2> */}
//         <table>
//             <tbody>
//                 <tr>
//                     <td>Organization</td>
//                     <td>⭐⭐⭐⭐⭐</td>
//                     <td>Editing</td>
//                     <td>⭐⭐⭐⭐</td>
//                 </tr>
//                 <tr>
//                     <td>Accounting</td>
//                     <td>⭐⭐⭐⭐</td>
//                     <td>Problem Solving</td>
//                     <td>⭐⭐⭐</td>
//                 </tr>
//                 <tr>
//                     <td>Photography</td>
//                     <td>⭐⭐⭐</td>
//                     <td>Cooking</td>
//                     <td>⭐⭐⭐⭐</td>
//                 </tr>

//             </tbody>
//         </table>
//         <hr /> 
            
//         </div>
        
//     )
// }




// const App =() =>{
//     return(
//         <div>
//             <Header />
//             <Education />
//             <Experience />
//             <Skills />
//         </div> 

//     )
// }


ReactDOM.render(<App />, document.getElementById('root'))
