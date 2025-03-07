"use client"
import { useGetUser } from '@/hooks/useAuth'
import Loading from '@/ui/Loading';
import PaymentTable from './PaymentTable';

function PaymentPage() {
    const { data, isLoading } = useGetUser();
    const { payments, cart, user } = data || {}

    if (isLoading) return <Loading />
    return (
        <div>
            <h1 className='mb-6 text-xl font-bold'>سفارشات کاربر</h1>
           <PaymentTable payments={payments}/>
        </div>
    )
}

export default PaymentPage