import { useNavigate } from "react-router-dom";

const Invoice=({ onClose })=>
{
    const navigate=useNavigate();
    return(
        <>
        <div class="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
    <h1 class="font-bold text-2xl my-4 text-center text-blue-600">DO-CO-MO Services</h1>
    <div class="flex justify-between mb-6">
        <h1 class="text-lg font-bold">Invoice</h1>
        <div class="text-gray-700">
            <div>Date: 01/05/2023</div>
            <div>Invoice #: INV12345</div>
        </div>
    </div>
    <div class="mb-8">
        <h2 class="text-lg font-bold mb-4">Bill To:</h2>
        <div class="text-gray-700 mb-2">John Doe</div>
        {/* <div class="text-gray-700 mb-2">123 Main St.</div> */}
        {/* <div class="text-gray-700 mb-2">Anytown, USA 12345</div> */}
        <div class="text-gray-700 mb-2">9445422734</div>
        <div class="text-gray-700">johndoe@example.com</div>
    </div>
    <table class="w-full mb-8">
        <thead>
            <tr>
                <th class="text-left font-bold text-gray-700">Description</th>
                <th class="text-right font-bold text-gray-700">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-left text-gray-700">Plan 1</td>
                <td class="text-right text-gray-700">$100.00</td>
            </tr>
            <tr>
                <td class="text-left text-gray-700">Add-on 5</td>
                <td class="text-right text-gray-700">$50.00</td>
            </tr>
            
        </tbody>
        <tfoot>
            <tr>
                <td class="text-left font-bold text-gray-700">Total</td>
                <td class="text-right font-bold text-gray-700">$150.00</td>
            </tr>
        </tfoot>
    </table>
    <div class="text-gray-700 mb-2">Thank you for your business!</div>
    
    <button className="bg-black text-white w-full h-[50px] rounded-[10px]" onClick={()=>{navigate("/pay")}}>Make Payment</button>
    <button
          className="bg-black text-white w-full h-[50px] rounded-[10px] mt-4"
          onClick={onClose}
        >
          Cancel
        </button>
</div>

        </>
        
    );
}
export default Invoice;