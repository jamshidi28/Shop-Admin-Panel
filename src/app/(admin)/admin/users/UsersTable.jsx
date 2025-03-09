import { userTHead } from "@/constants/tableUserHead"
import { toLocalDataStringShort } from "@/utils/toLocalDate"
import Link from "next/link"
import { HiCheckCircle } from "react-icons/hi"

function UsersTable({ users }) {
    return (
        <div className='shadow-sm overflow-auto my-6'>
            <table className='w-full border-collapse table-auto min-w-[800px] text-sm'>
                <thead>
                    <tr >
                        {
                            userTHead.map(item => {
                                return (
                                    <th className='whitespace-nowrap table__th' key={item.id}>{item.lable}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr className='' key={user._id}>
                                    <td className='table__td'>
                                        {index}
                                    </td>
                                    <td className='table__td'>
                                        {user.name}
                                    </td>
                                    <td className='table__td'>
                                        <div className="flex items-center whitespace-nowrap gap-x-2">
                                        {user.phoneNumber} {user.isVerifiedPhoneNumber && <HiCheckCircle className="text-green-600 w-6 h-6" />}  
                                        </div>
                                    </td>
                                    <td className='table__td'>
                                        {user.email}
                                    </td>
                                    <td className='table__td'>
                                        <div className='flex flex-col gap-y-2 items-start'>
                                            {user.Products.map((product,index) => {
                                                return (
                                                    <div className='badge badge--secondary ' key={index}>{product.title} </div>
                                                )
                                            })}
                                        </div>
                                    </td>

                                    <td className='table__td'>
                                        {toLocalDataStringShort(user.createdAt)}
                                    </td>
                                    <td className='table__td font-bold'>
                                        <Link href={`/admin/users/${user._id}`}>مشاهده جزییات</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable
