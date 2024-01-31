import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  serviceType: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ serviceType }) => {
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();

  const handleDateChange = (date: Date) => {
    setStartDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    router.push(`/booking/availability?serviceType=${serviceType}&date=${formattedDate}`);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        minDate={new Date()}
        showDisabledMonthNavigation
      />
    </div>
  );
};

export default CustomDatePicker;
