import React from "react";
import { ListGroupItem } from "react-bootstrap";
import moment from 'moment';

const Actions = ({action}) => {
    return (
        <ListGroupItem style={{backgroundColor: '#deeeea'}}>
            <span>{ action.title }</span>
            <small 
                className='float-end fw-normal text-muted' 
                style={{ fontSize: '12px' }}
            >
                {moment(action.time).calendar()}
            </small>
        </ListGroupItem> 
    ); 
};

export default Actions;