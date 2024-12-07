import PaymentCard from "./payment-card";

const Billing = () => {
    // WIP: Fetch billing information for the customer
    return (
        <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 mt-5 container">
            <PaymentCard current={'FREE'} label="FREE"  />
            <PaymentCard current={'FREE'} label="PRO" />
        </div>
    );
};
export default Billing;