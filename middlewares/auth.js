import Cookies from 'js-cookie';
import axios from 'axios';

export const auth = async (context) => {
    const token = Cookies.get('token'); // خواندن توکن از کوکی با استفاده از js-cookie

    if (token) {
        // اگر توکن موجود نباشد، می‌توانید کاربر را به صفحه ورود منتقل کنید یا اقدامات دیگری را انجام دهید.
        return 'ok';
      }
      
};
