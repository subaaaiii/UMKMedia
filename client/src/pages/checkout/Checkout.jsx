import React from "react";
import MainChekcout from "../../components/checkout/detail-checkout/MainCheckout";
// import ApprovalCheckout from "../../components/checkout/approval-checkout/ApprovalCheckout";

function Checkout() {
    return (
        <div className=" flex flex-col justify-center items-center shrink-0">
            <MainChekcout />
        </div>
    );
}

export default Checkout;