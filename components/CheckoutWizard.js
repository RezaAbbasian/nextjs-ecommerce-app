function CheckoutWizard({activeStep=0}){
    const title =[
        'ورود',
        'آدرس',
        'روش ارسال',
        'زمان ارسال',
        'روش پرداخت',
        'تایید نهایی'
    ]
    return (
        <div className="mb-5 flex flex-wrap">
            {title.map((item, index)=>(
                <div 
                className={
                    `flex-1 border-b2 text-center
                    ${
                        index<= activeStep ?
                        'border-blue-600 text-blue-600'
                        :
                        'border-gray-400 text-gray-400'
                    }`
                }
                key="item">{item}</div>
            ))}
        </div>
    )
}



export default CheckoutWizard