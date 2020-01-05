import React from 'react';

function Order (props){
          return (
            <div className="card">
                <div className="card-header">
                    Order
                </div>
                <div className="card-body">
                    <h5 className="card-title">Client: <strong>{props.nameclient}</strong></h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-8">
                                    Sándiwch jamón y queso
                                </div>
                                <div className="col-2">
                                    10
                                </div>
                                <div className="col-2">
                                <button type="button" className="btn btn-link">x</button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-8">
                                    Sándiwch jamón y queso
                                </div>
                                <div className="col-2">
                                    10
                                </div>
                                <div className="col-2">
                                <button type="button" className="btn btn-link">x</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="text-right">
                    	<p>Total: <strong>20</strong></p>
                    </div>
                </div>
                <div className="card-footer text-right">
                    <a href="#" className="btn btn-primary">Save</a>
                </div>
                
            </div>
          );
      }
// class Order extends React.Component {
//     render () {
//         return(
//             <div className="card">
//                 <div className="card-header">
//                     Order
//                 </div>
//                 <div className="card-body">
//                     <h5 className="card-title">Client Name</h5>
//                     <ul className="list-group">
//                         <li className="list-group-item">
//                             <div className="row">
//                                 <div className="col-8">
//                                     Sándiwch jamón y queso
//                                 </div>
//                                 <div className="col-2">
//                                     10
//                                 </div>
//                                 <div className="col-2">
//                                 <button type="button" className="btn btn-link">x</button>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="list-group-item">
//                             <div className="row">
//                                 <div className="col-8">
//                                     Sándiwch jamón y queso
//                                 </div>
//                                 <div className="col-2">
//                                     10
//                                 </div>
//                                 <div className="col-2">
//                                 <button type="button" className="btn btn-link">x</button>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                     <div className="text-right">
//                     	<p>Total: <strong>20</strong></p>
//                     </div>
//                 </div>
//                 <div className="card-footer text-right">
//                     <a href="#" className="btn btn-primary">Save</a>
//                 </div>
                
//             </div>
//         );
//     }
// }

export default Order;