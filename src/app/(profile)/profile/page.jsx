"use client"
import { useGetUser } from "@/hooks/useAuth"
import { toLocalDataString } from "@/utils/toLocalDate";

function ProfilePage() {
  const {data,isLoading}= useGetUser();
  const {user} = data || {}
  if(isLoading) return <p>Loading...</p>
  return (
    <div>
    <h1>{user.name} خوش آمدی</h1>
    <span>تاریخ پیوستن :</span>
    <span>{toLocalDataString(user.createdAt)}</span>
    </div>
  )
}

export default ProfilePage
