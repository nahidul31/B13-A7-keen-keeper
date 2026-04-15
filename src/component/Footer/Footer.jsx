export default function Footer() {
  return (
    <footer className="bg-[#1a3d30] text-white mt-7">
      {/* Top section */}
      <div className="flex flex-col items-center text-center py-12 px-6 gap-4">
        {/* Brand */}
        <h2 className="text-4xl md:text-5xl font-bold">KeenKeeper</h2>

        <p className="text-sm text-white/60 max-w-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social */}
        <p className="text-sm font-semibold mt-2">Social Links</p>

        <div className="flex gap-3">
          {/* Instagram placeholder */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-black hover:bg-black/70 flex items-center justify-center"
          >
            {/* img later */}
          </a>

          {/* Facebook placeholder */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-black hover:bg-black/70 flex items-center justify-center"
          >
            {/* img later */}
          </a>

          {/* Twitter/X placeholder */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-black hover:bg-black/70 flex items-center justify-center"
          >
            {/* img later */}
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom section */}
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
