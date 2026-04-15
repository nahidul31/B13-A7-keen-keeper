import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a3d30] text-white mt-7">
      <div className="flex flex-col items-center text-center py-12 px-6 gap-4">
        <h2 className="text-4xl md:text-5xl font-bold">KeenKeeper</h2>

        <p className="text-sm text-white/60 max-w-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <p className="text-sm font-semibold mt-2">Social Links</p>

        <div className="flex gap-3">
          <Link href="#">
            <Image
              src="/img/facebook.png"
              alt="facebook"
              width={40}
              height={40}
            />
          </Link>

          <Link href="#">
            <Image
              src="/img/instagram.png"
              alt="instagram"
              width={40}
              height={40}
            />
          </Link>

          <Link href="#" className=" ">
            <Image
              src="/img/twitter.png"
              alt="twitter"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10" />

      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-5 gap-3 text-xs text-white/50">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
