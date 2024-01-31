'use client';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearchParams } from 'next/navigation';

const BookingDetailsPage: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [serviceType, setServiceType] = useState('');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // Parse the searchParams manually
        const params = new URLSearchParams(searchParams.toString());
        const serviceTypeParam = params.get('serviceType');
        if (serviceTypeParam) {
            setServiceType(serviceTypeParam);
        }
    }, [searchParams]);

    const formattedDate = startDate.toISOString().split('T')[0];
    const availabilityPageUrl = `/booking/availability?serviceType=${serviceType}&date=${formattedDate}`;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-8">Select a Date for {serviceType}</h1>
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                showDisabledMonthNavigation
            />
            <div className="mt-4">
                <a href={availabilityPageUrl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Check Availability
                </a>
            </div>
        </div>
    );
};

export default BookingDetailsPage;
