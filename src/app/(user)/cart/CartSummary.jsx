"use client"
import { creatPayment } from '@/services/paymentService';
import Loading from '@/ui/Loading';
import { toPersianNumbersWithComma } from '@/utils/toPersianNumbers'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';

function CartSummary({ payDetail }) {
    const { totalGrossPrice, totalOffAmount, totalPrice } = payDetail;
    const queryClient = useQueryClient();
    const { isLoading , mutateAsync } = useMutation({
        mutationFn: creatPayment,
    });
    const creatPaymentHadler = async () => {
        try {
            const { message } = await mutateAsync();
            queryClient.invalidateQueries({ queryKey: ["get-user"] })
            toast.success(message)
        } catch (error) {

        }
    }
    return (
        <div className='border rounded-xl p-4'>
            <p className='font-bold mb-3'>اطلاعات پرداخت</p>
            <div className='flex items-center justify-between mb-4'>
                <span className="">جمع کل : </span>
                <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
            </div>
            <div className='flex items-center justify-between mb-4'>
                <span className="">تخفیف : </span>
                <span>{toPersianNumbersWithComma(totalOffAmount)}-</span>
            </div>
            <div className='flex items-center justify-between mb-4 font-bold'>
                <span className=""> مبلغ قابل پرداخت : </span>
                <span>{toPersianNumbersWithComma(totalPrice)}</span>
            </div>
            <div>
                {
                    isLoading ? <Loading /> : (
                        <button onClick={creatPaymentHadler} className='btn btn--primary w-full'>ثبت سفارش</button>

                    )
                }
            </div>
        </div>
    )
}

export default CartSummary
