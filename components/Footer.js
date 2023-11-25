import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <>
    <footer className="py-5">
{/* footer copyright  */}
    {/* <div className="py-5">
      <div>
      <Image 
      width={174}
      height={50}
      alt="logo" 
      src={"/images/logo-light.webp"} />
        <div className="flex gap-2 pt-[18px]">
        <p className=" text-base font-semiBold leading-[25px] text-white">۱۴۰۲</p>
        <p className=" text-sm font-medium leading-[22px] text-white">
        تمامی حقوق مادی و معنوی این سایت متعلق به بیبی شیک شاپ می‌باشد.
        </p>
        </div>
      </div>
    </div> */}
    {/* footer contact  */}
    <div className="border-t !border-opacity-50 text-gray-800 py-5">
    <div className="flex flex-col md:flex-row justify-center">

      <p className="text-sm font-medium leading-[22px] whitespace-nowrap ml-5">تلفن: 
      <span className="whitespace-nowrap dir-ltr">09331689463</span>
      </p>

      <p className=" text-sm font-medium whitespace-nowrap ml-5">ایمیل: 
      <span className=" ">info@babyshikshop.com</span>
      </p>

      <div className="flex flex-col md:flex-row ml-5">
        <p className="text-sm font-medium whitespace-nowrap">شبکه‌های اجتماعی: </p>
          <div className="flex gap-[23px] mx-5">
          <Link rel="nofollow noopener"
          href="https://www.instagram.com/" 
          target="_blank" className="h-[30px]">
          <Image
          width="20" 
          height="20" 
          alt="اینستاگرام" 
          title="اینستاگرام" 
          src="/images/icons/static_instagram.svg"/>
          </Link>
          <Link rel="nofollow noopener" href="https://t.me/" target="_blank" className="h-[30px]">
          <Image 
          width="20" 
          height="20" 
          alt="تلگرام" 
          title="تلگرام" 
          src="/images/icons/static_telegram.svg"/>
          </Link>
          </div>
      </div>
    </div>
    </div>
{/* footer menu  */}
    <div className="text-gray-800">
    <div className="flex flex-col w-full sm:flex-row justify-between">
    <div className="w-1/3 pt-12 2xl:w-auto 2xl:pt-0">

    <p className=" text-xl font-semiBold leading-[31px] ">دسترسی سریع</p>
    <div className=" pt-6">
    <Link target="_blank" className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="/blog">بلاگ</Link>
    <Link className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">محصولات</Link>
    <Link className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">حساب کاربری</Link>
    <Link className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">شرایط و ضوابط</Link>
    </div></div>
    <div className="sm:w-1/3 pt-12 2xl:w-auto 2xl:pt-0">
        <p className=" text-xl font-semiBold leading-[31px] ">دسته بندی محصولات</p>
        <div className=" pt-6"><Link target="_blank" className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">محصولات دخترانه</Link>
    <Link target="_blank" className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">محصولات پسرانه</Link>
    <Link target="_blank" className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">محصولات اسپرت</Link>
    <Link target="_blank" className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">محصولات تعداد محدود</Link>
    <Link target="_blank" className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">محصولات تخفیف دار</Link>
    </div></div>
    <div className="w-1/3 pt-12 2xl:w-auto 2xl:pt-0">
        <p className=" text-xl font-semiBold leading-[31px] ">درباره ما</p>
    <div className=" pt-6">
        <Link className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">بیبی شیک در یک نگاه</Link>
        <Link className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">اهداف و تعهدهای ما</Link>
        <Link className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">داستان بیبی شیک</Link>
        <Link className="block pb-3 text-sm font-medium leading-[22px] !text-gray-800" href="#">تماس با ما</Link>
    </div></div>
        </div>
        <div className="flex justify-end py-5">
            <section className="flex items-center justify-center gap-[18px] lg:gap-[38px] rounded-2xl p-6 [&amp;>*]:lg:h-[76px] [&amp;>*]:lg:w-[76px] [&amp;>*]:h-[58px] [&amp;>*]:w-[58px] [&amp;>*]:rounded-md [&amp;>*]:bg-white">
        <Link target="_blank" href="#" className="flex items-center justify-center">
        <Image 
        width ={100}
        height ={100}
        src={"/images/icons/enamad.webp"} 
        loading="lazy" 
        alt="نماد اعتماد الکترونیکی تکنولایف" 
        id="" 
        className="permit-image"/>
        </Link>

        <Link className="flex items-center justify-center" target="_blank" 
        href="#">
        <Image 
        className="permit-image" 
        width={100} 
        height={100} 
        src={"/images/icons/rezi.webp"}
        alt="انجمن علمی تجارت الکترونیکی ایران" 
        loading="lazy"/>
        </Link>
        <Link 
        target="_blank" 
        className="flex items-center justify-center" 
        href="#">
        <Image 
        src={"/images/icons/logo-white.svg"}
        width={100} 
        height={100} 
        alt="اتحادیه کشوری کسب و کار های مجازی" 
        loading="lazy" 
        className="permit-image" />
        </Link>
        <Link className="flex items-center justify-center" target="_blank" 
        href="#">
        <Image 
        src={"/images/icons/logo.svg"}
        width={100} 
        height={100} 
        loading="lazy" 
        alt="جشنواره وب موبایل ایران" 
        className="permit-image" />
        </Link>
    </section>
    </div>
    </div>


</footer>
</>
  )
}
