import React from 'react'
import './SubscriptionRow.css'
import Avatar from "@material-ui/core/Avatar";

function SubscriptionRow({img, title}) {
    return (
        <div className="subscriptionRow">
            <Avatar className="imgLogo classes.small" alt="logo" src={img} />
            <h3>{title}</h3>
        </div>
    )
}

export default SubscriptionRow
