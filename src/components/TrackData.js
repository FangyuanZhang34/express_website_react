import React from 'react';
import { Avatar, Divider, Button } from 'antd';

export class OrderId extends React.Component {

    getArrival = (arrival) => {
        var res = arrival.split(':')
        if(hasArrived(res)) {
            return "Your package has already arrived at " + res[0] + ':' + res[1];
        }
        return "Your package will arrived at " + res[0] + ':' + res[1];
    };

    hasArrived = (res) => {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var diffHour = hour - res[0];
        var diffMinute = minute - res[1];
        var diffSecond = second - res[2];
        return (diffHour > 0 || (diffHour == 0 && diffMinute > 0) || (diffHour == 0 && diffMinute == 0 && diffSecond > 0));
    }

    render(){
        const message = this.getArrival(this.props.trackData)
        return (
            <div className="routesList">
                <br/>
                hi
                <Divider>Order id {this.props.orderId}</Divider>
                {message}
                <Divider dashed />
                <br/>
                <br/>
                <Button onClick={this.backToTrackOrder}>Back to track an order</Button>
            </div> 
        )
    }
}