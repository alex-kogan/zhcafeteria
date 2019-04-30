import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './StatsControl.css';

const StatsControlPannel = ({minStartDate, maxEndDate, startDate, endDate,
                            onStartDateCahnge, onEndDateCahnge
                            }) => {
  return (
    <div className="flex bt2">
      <div className="w-10"></div>
      <div className="w-40">
        <label className="f6 b mb2 mr2">Start date</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          minDate={minStartDate}
          maxDate={endDate}
          onChange={(date)=>onStartDateCahnge(date)}
        />
      </div>
      <div className="w-40">
        <label className="f6 b mb2 mr2 ml4">End date</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          minDate={startDate}
          maxDate={maxEndDate}
          onChange={(date)=>onEndDateCahnge(date)}
        />
      </div>
      <div className="w-10"></div>
    </div>
  )
}

export default StatsControlPannel;