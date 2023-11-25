import Cookies from 'js-cookie';
import axios from 'axios';

export const authMiddleware = async (req, res, next) => {
  try {
    const token = Cookies.get('token'); // خواندن توکن از کوکی با استفاده از js-cookie

    if (!token) {
      return res.status(401).json({ message: 'عدم دسترسی: توکن JWT موجود نیست.' });
    }

    // ارسال توکن به API Laravel برای تایید
    const response = await axios.get(`${process.env.API_URL}user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      return res.status(401).json({ message: 'عدم دسترسی: توکن JWT نامعتبر است.' });
    }

    // اگر توکن تایید شد، اطلاعات کاربر را به درخواست اضافه می‌کنیم
    req.user = response.data.user;
    next();
  } catch (error) {
    console.error('خطا در احراز هویت:', error);
    return res.status(500).json({ message: 'خطای سرور داخلی' });
  }
};
