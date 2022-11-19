import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import "./feautredinfo.css"

const Feautredinfo = () => {
  return (
    <div className='feautredinfo'>
      <div className="padge">
        <div className="padgeTitle">Revanue</div>
        <div className="padgeMoneyContainer">
          <div className="padgeMoney">
            $2,415
          </div>
          <div className="padgeMoneyIncrease">
            -11.4
            <ArrowDownward className="padgeIcon" />
          </div>
        </div>
        <span className="padgeCommentaire">
          compared to last month
        </span>

      </div>

      <div className="padge">
        <div className="padgeTitle">Sales</div>
        <div className="padgeMoneyContainer">
          <div className="padgeMoney">
            $4,415
          </div>
          <div className="padgeMoneyIncrease">
            -1.4
            <ArrowDownward className="padgeIcon" />
          </div>
        </div>
        <span className="padgeCommentaire">
          compared to last month
        </span>

      </div>

      <div className="padge">
        <div className="padgeTitle">Cost</div>
        <div className="padgeMoneyContainer">
          <div className="padgeMoney">
            $2,225
          </div>
          <div className="padgeMoneyIncrease">
            +2.4
            <ArrowUpward className="padgeIcon positive" />
          </div>
        </div>
        <span className="padgeCommentaire">
          compared to last month
        </span>

      </div>
    </div>
  );
}

export default Feautredinfo;
