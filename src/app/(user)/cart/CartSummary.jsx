import React from 'react'
totalGrossPrice
: 
40890000
totalOffAmount
: 
39000
totalPrice
: 
40851000
function CartSummary({ payDetail }) {
    const {totalGrossPrice, totalOffAmount,totalPrice} = payDetail
    return (
        <div className='border rounded-xl p-4'>
            <p className='font-bold mb-3'>اطلاعات پرداخت</p>
            <div className='flex items-center justify-between mb-4'>
                <span className="">جمع کل : </span>
                <span>{totalGrossPrice }</span>
            </div>
            <div className='flex items-center justify-between mb-4'>
                <span className="">تخفیف : </span>
                <span>{totalOffAmount }-</span>
            </div>
            <div className='flex items-center justify-between mb-4 font-bold'>
                <span className=""> مبلغ قابل پرداخت : </span>
                <span>{totalPrice }</span>
            </div>
            <button className='btn btn--primary w-full'>ثبت سفارش</button>

        </div>
    )
}

export default CartSummary
