document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menuToggle');  // الزر لفتح وإغلاق القائمة
  const dropdownMenu = document.querySelector('.main-menu');  // القائمة الرئيسية
  const subMenus = document.querySelectorAll('.main-menu > li > a'); // الروابط الرئيسية التي تحتوي على القوائم الفرعية

  // فتح وإغلاق القائمة الرئيسية عند النقر على الزر
  toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
  });

  // إضافة مستمع للنقر على الروابط التي تحتوي على قوائم فرعية
  subMenus.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
      const subMenu = menuItem.nextElementSibling;  // القائمة الفرعية المقابلة

      // إذا كانت هناك قائمة فرعية، نُظهر أو نُخفيها بناءً على الكلاس active
      if (subMenu && subMenu.classList.contains('sub-menu')) {
        subMenu.classList.toggle('active');  // إضافة أو إزالة الكلاس active
        e.preventDefault();  // منع التوجه إلى الرابط إذا كان "#"
      }
    });
  });
});
