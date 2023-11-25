import { authMiddleware } from '../middlewares/authMiddleware';
import Cookies from 'js-cookie';



export async function getServerSideProps(context) {
  // خواندن توکن از کوکی با استفاده از js-cookie
  const token = Cookies.get('token');

  // if (!token) {
  //   // اگر توکن موجود نبود، می‌توانید کاربر را به صفحه ورود منتقل کنید یا اقدامات دیگری را انجام دهید.
  //   return {
  //     redirect: {
  //       destination: '/login', // مثال: انتقال به صفحه ورود
  //       permanent: false,
  //     },
  //   };
  // }

  // اعمال میان‌میانه authMiddleware بر روی context
  await authMiddleware(context);

  // حالا می‌توانید از اطلاعات کاربر در درخواست استفاده کنید
  const user = context.req.user;

  return {
    props: {
      user,
    },
  };
}

const ProtectedPage = ({ user }) => {
  return (
    <div>
      <h1>صفحه محافظت شده</h1>
      <p>کاربر: {user.name}</p>
      <p>ایمیل: {user.email}</p>
    </div>
  );
};

export default ProtectedPage;
