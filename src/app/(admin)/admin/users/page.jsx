"use client"
import Loading from '@/ui/Loading';
import React from 'react'
import UsersTable from './usersTable';
import { useGetAllUser } from '@/hooks/useAuth';

function UserPage() {
    const { data, isLoading } = useGetAllUser()
    const { users } = data || {}

    if (isLoading) return <Loading />
    return (
        <div>
            <h1 className='mb-6 text-xl font-bold'> کاربران</h1>
            <UsersTable users={users} />
        </div>
    )
}

export default UserPage
