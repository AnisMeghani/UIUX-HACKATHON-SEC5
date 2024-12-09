import {
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
} from "react-icons/fa";

const PaymentIcons = () => (
  <div className="flex space-x-4">
    <FaPaypal className="text-blue-500 text-3xl" />
    <FaCcVisa className="text-blue-600 text-3xl" />
    <FaCcMastercard className="text-red-600 text-3xl" />
    <FaGooglePay className="text-green-500 text-3xl" />
  </div>
);

export default PaymentIcons;
