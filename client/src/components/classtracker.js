// import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from "react-router-dom";

// class Classtracker extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       email: '',
//       password: '',
//     }
//   }


//   render() {
//     return (
//       <div>
//         <h1 style={{ 'textAlign': 'center' }}>Class Tracker</h1>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 class-tracker-col">
//               <h2>Login</h2>
//               <form>
//                 <div className="form-group">
//                   <label>Email address</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     aria-describedby="emailHelp"
//                     placeholder="Enter email"
//                     onChange={this.props.change}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     onChange={this.props.change}
//                   />
//                 </div>
//                 <Link to="/logintwo"><button type="submit" className="signin" onClick={this.props.click} >
//                   Submit
//                 </button></Link>
//               </form>
//             </div>

//             <div className="col-md-6 class-tracker-col">
//               <h2>Signup</h2>
//               <form>
//                 <div className="form-group">
//                   <label>Email address</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     aria-describedby="emailHelp"
//                     placeholder="Enter email"
//                     onChange={this.props.change}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     onChange={this.props.change}
//                   />
//                 </div>
//                 <Link to="/createtwo"><button type="submit" className="create" onClick={this.props.click} >
//                   Submit
//                 </button></Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Classtracker;