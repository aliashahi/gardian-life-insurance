import { Main } from "./pages";
/* 
با سلام 
این مینی پروژه در مدت 5 ساعت به ترتیب سه ساعت دیزاین و 2 ساعت منطق نوشته شده است
از کتابخانه های استایل 
tailwind
daisyui
استفاده شده است
همچنین از استیت منیجر 
recoil 
نیز بهره گرفته شده است 

پ.ن: سعی کردم از کتابخانه های 
ant design 
استفاده نکنم 
من تجربه کار با این کلاس را داشته ام و برای همین خواستم این پروژه را 
کمی برای خودم چالش بر انگیز کنم 

علی اکبر شاهی
1400/10/23
*/
function App() {
  return (
    <div
      className="w-screen overflow-x-hidden
     flex justify-center items-center md:h-screen main-bg"
    >
      <Main />
    </div>
  );
}

export default App;
