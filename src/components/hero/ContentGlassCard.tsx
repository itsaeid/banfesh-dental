import { Phone, Clock } from "lucide-react";

export default function ContactGlassCard() {
  return (
    <div className="rounded-3xl border border-white/30 bg-white/20 p-6 text-white shadow-xl z-20 backdrop-blur-xl">
      <div className="flex items-start gap-4 border-b border-primary-600/20 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-400/20">
          <Phone className="text-primary-900" />
        </div>

        <div>
          <h3 className="font-semibold text-primary-800">تماس با ما</h3>

          <p className="mt-2 text-sm text-primary-700 opacity-80">0912 345 6789</p>

          <p className="text-sm text-primary-700 opacity-80">info@drbanafsheh.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4 pt-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-400/20">
          <Clock className="text-primary-900" />
        </div>

        <div>
          <h3 className="font-semibold text-primary-800">ساعات کاری</h3>

          <p className="mt-2 text-sm opacity-80 text-primary-800">شنبه تا پنجشنبه | ۹ صبح تا ۷ عصر</p>

          <p className="text-sm opacity-80 text-primary-800">جمعه | با تعیین وقت قبلی</p>
        </div>
      </div>
    </div>
  );
}
