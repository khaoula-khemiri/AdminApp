import React from 'react';
import "./widgetLg.css"

const WidgetLg = () => {
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTable"> Latest transaction</h3>
       <table className="widgetLgTable">
           <tr className="widgetLgTr">
               <th className="widgetLgTh">
                   Customer
               </th>

               <th className="widgetLgTh">
                   Date
               </th>

               <th className="widgetLgTh">
                   Amount
               </th>

               <th className="widgetLgTh">
                 Statuts
               </th>
           </tr>

           
       </table>
    </div>
  );
}

export default WidgetLg;