import React, { useState, useEffect } from 'react';
import { getDashboardData } from '../services/dashboard_service';
import GraphWidget from '../components/graph'; // Import the Graph Widget
import { Box, Tabs, Tab, Typography } from '@mui/material';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDashboardData();
        console.log('Fetched data:', result); // Add this line to check the data
        setData(result);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabLabels = ['Attendance', 'Offering'];

  if (!data) {
    return <Typography>Loading...</Typography>;
  }

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: tabLabels[activeTab],
        data: data[tabLabels[activeTab].toLowerCase().replace(' ', '')].actual, // Adjust based on tab
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="dashboard tabs">
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
      <Box sx={{ mt: 3 }}>
        <GraphWidget
          title={tabLabels[activeTab]}
          labels={data.dates}
          data={data[tabLabels[activeTab].toLowerCase().replace(' ', '')].actual} // Adjust based on tab
        />
      </Box>
    </Box>
  );
};

export default DashboardPage;
