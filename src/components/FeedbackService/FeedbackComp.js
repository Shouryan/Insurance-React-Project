// BasicTabs.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Box, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ActionTypes } from '../../redux/constants/feedbackType';
import axios from 'axios';

const FeedbackComp = (props) => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackComp);
  const { tabIndex, feedbackFrom } = useParams();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const unacknowledgedResponse = await axios.get('http://localhost:8030/feedbackService/getUnacknowledge');
            dispatch({ type: ActionTypes.GET_UNACKNOWLEDGED, payload: unacknowledgedResponse.data });
    
            const acknowledgedResponse = await axios.get('http://localhost:8030/feedbackService/getAcknowledge');
            dispatch({ type: ActionTypes.GET_ACKNOWLEDGED, payload: acknowledgedResponse.data });
    
            if (tabIndex === '2' && feedbackFrom) {
              const byOwnerResponse = await axios.get(`http://localhost:8030/feedbackService/feedbackByOwner/${feedbackFrom}`);
              dispatch({ type: ActionTypes.GET_BY_OWNER, payload: byOwnerResponse.data });
            }
    
            // setLoading(false);
          } catch (error) {
            console.error('Error fetching feedback:', error);
            // setLoading(false);
          }
        };
    
        fetchData();
      }, [dispatch, tabIndex, feedbackFrom]);

  return (
    <Box sx={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Tabs value={parseInt(tabIndex, 10)} centered>
          <Tab label="Unacknowledged" />
          <Tab label="Acknowledged" />
          <Tab label="By Owner" />
        </Tabs>
        <div>
            {console.log(feedback)}
          {tabIndex === 0 && feedback.unacknowledged && feedback.unacknowledged.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
          {tabIndex === 1 && feedback.acknowledged && feedback.acknowledged.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
          {tabIndex === 2 && feedback.byOwner && feedback.byOwner.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
        </div>
      </Paper>
    </Box>
  );
};

export default FeedbackComp;
