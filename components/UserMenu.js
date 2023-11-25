import Link from "next/link"

export default function UserMenu() {

    return(

        <div>
        <div className="border-b-2 px-2 py-2 border-gray-300">
        <Link href={'/user'} >
        حساب کاربری
          </Link>
        </div>
        <div className="border-b-2 px-2 py-2 border-gray-300">
          <Link href={'/user/orders'} >
          سفارش‌ها
          </Link>
        </div>
        <div className="border-b-2 px-2 py-2 border-gray-300">
        <Link href={'/user/edit'} >
        ویرایش مشخصات
          </Link>
        </div>
        <div className="border-b-2 px-2 py-2 border-gray-300">
        <Link href={'/user/addresses'} >
        آدرس‌ها               </Link></div>
        <div className="border-b-2 px-2 py-2 border-gray-300">
        <Link href={'/user/logout'} >
        خروج
          </Link>
          </div>
      </div>
    )
}