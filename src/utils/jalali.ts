import moment from 'moment-jalaali';

// تنظیم زبان فارسی برای moment-jalaali
moment.loadPersian({
  usePersianDigits: true, // استفاده از اعداد فارسی
  dialect: 'persian-modern' // استفاده از نام‌های مدرن ماه‌ها
});

// نام‌های روزهای هفته به فارسی
const persianWeekdays = {
  Saturday: 'شنبه',
  Sunday: 'یکشنبه',
  Monday: 'دوشنبه',
  Tuesday: 'سه‌شنبه',
  Wednesday: 'چهارشنبه',
  Thursday: 'پنج‌شنبه',
  Friday: 'جمعه'
};

// نام‌های ماه‌های شمسی
const persianMonths = {
  Farvardin: 'فروردین',
  Ordibehesht: 'اردیبهشت',
  Khordad: 'خرداد',
  Tir: 'تیر',
  Mordad: 'مرداد',
  Shahrivar: 'شهریور',
  Mehr: 'مهر',
  Aban: 'آبان',
  Azar: 'آذر',
  Dey: 'دی',
  Bahman: 'بهمن',
  Esfand: 'اسفند'
};

// تنظیم نام‌های فارسی
moment.updateLocale('fa', {
  weekdays: Object.values(persianWeekdays),
  months: Object.values(persianMonths)
});
