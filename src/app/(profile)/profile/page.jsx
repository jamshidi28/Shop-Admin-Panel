"use client"
import { useGetUser } from "@/hooks/useAuth"
import { toLocalDataString } from "@/utils/toLocalDate";
import PaymentTable from "./payments/PaymentTable";
import Link from "next/link";

function ProfilePage() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {}
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <h1 className="mb-2">{user.name} خوش آمدی</h1>
      <span >تاریخ پیوستن :</span>
      <span>{toLocalDataString(user.createdAt)}</span>
      <div className="border rounded-xl mt-8 p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">سفارشات کاربر</h2>
          <Link className="text-primary-900" href={"profile/payments"}>مشاهده همه سفارشات</Link>
        </div>
        <PaymentTable payments={
          payments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          ).slice(0, 2)} />
      </div>
    </div>
  )
}

export default ProfilePage
