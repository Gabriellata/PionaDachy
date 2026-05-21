import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#f3f3f3] overflow-x-hidden text-black">
      
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-[#c42026]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* LOGO */}
          <Link
            href="/"
            className="relative w-[85px] h-[40px] sm:w-[140px] sm:h-[55px]"
          >
            <Image
              src="/images/logo/rysunek-1-removebg-preview.png"
              alt="Piona Dachy"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* PHONE BUTTON */}
          <a
            href="tel:+48123456789"
            className="
              bg-[#07503f]
              text-white
              text-xs
              sm:text-sm
              font-bold
              px-4
              py-2
              rounded-sm
              tracking-wide
              hover:bg-[#05382c]
              transition
              shadow-lg
            "
          >
            Zadzwoń
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        
        {/* IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/realizacje/tytulowa.jpg"
            alt="Dach"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062f28]/20 via-[#062f28]/35 to-[#062f28]/90" />

        {/* CONTENT */}
        <div className="relative z-10 px-5 sm:px-8 pb-24 sm:pb-28 max-w-2xl">
          
          {/* DECORATION */}
          <div className="flex gap-2 mb-5">
            <div className="w-4 h-2 bg-[#c42026]" />
            <div className="w-4 h-2 bg-[#c42026]" />
            <div className="w-4 h-2 bg-[#c42026]" />
          </div>

          {/* TITLE */}
          <h1 className="text-white font-black leading-tight text-4xl sm:text-5xl md:text-6xl mb-5">
            Solidne dachy na lata
          </h1>

          {/* TEXT */}
          <p className="text-white/90 text-base sm:text-lg leading-8 max-w-lg">
            Eksperckie rzemiosło, najwyższa precyzja i materiały odporne
            na każde warunki pogodowe.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 px-5 bg-[#f3f3f3]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-14">
            <div className="w-[2px] h-16 bg-[#c42026] mb-4"></div>

            <p className="uppercase tracking-[0.35em] text-xs text-[#c42026] mb-3 font-semibold">
              Nasza Misja
            </p>

            <h2 className="text-5xl font-light text-[#062f28]">
              O Nas
            </h2>
          </div>

          <div className="bg-[#07503f] text-white p-8 sm:p-10 max-w-xl border-b-4 border-[#c42026] shadow-2xl">
            <p className="leading-9 text-lg">
              PIONA DACHY to zespół pasjonatów budownictwa z wieloletnim
              doświadczeniem. Specjalizujemy się w kompleksowych usługach
              dekarskich, łącząc tradycyjną solidność z nowoczesnymi
              technologiami. Nasza praca to gwarancja bezpieczeństwa
              dla Twojego domu.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-[#c42026]" />

              <span className="uppercase tracking-[0.3em] text-xs text-gray-200">
                Certyfikowani specjaliści
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="py-24 px-5 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-5xl font-light text-center text-[#062f28] mb-16">
            Narzędzia i Realizacje
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* CARD 1 */}
            <div className="bg-white border border-gray-200 p-10 hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-[#07503f] flex items-center justify-center mb-8">
                <span className="text-white text-2xl">⌘</span>
              </div>

              <h3 className="text-3xl text-[#062f28] font-medium mb-4">
                Kalkulator wyceny
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                Otrzymaj wstępną wycenę swojego projektu w mniej niż 2 minuty.
              </p>

              <Link
                href="/kalkulator"
                className="uppercase tracking-[0.25em] text-sm text-[#c42026] hover:translate-x-2 transition inline-block"
              >
                Sprawdź teraz →
              </Link>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#07503f] text-white p-10 hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-[#c42026] flex items-center justify-center mb-8">
                <span className="text-white text-2xl">⌂</span>
              </div>

              <h3 className="text-3xl font-medium mb-4">
                Nasze realizacje
              </h3>

              <p className="text-gray-200 leading-8 mb-8">
                Zobacz galerie naszych ukończonych dachów i konstrukcji.
              </p>

              <Link
                href="/realizacje"
                className="uppercase tracking-[0.25em] text-sm underline underline-offset-4 hover:text-[#c42026] transition inline-block"
              >
                Projekty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRIPE SECTION ================= */}
      <section className="relative bg-[#07503f] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#c42026_0px,#c42026_10px,#07503f_10px,#07503f_20px)]" />

        <div className="max-w-4xl mx-auto text-center px-6 text-white">
          <div className="text-[#c42026] text-5xl mb-6">⌂</div>

          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm">
            Projektowanie • Montaż • Serwis
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#07503f] text-white border-t-2 border-[#c42026] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="relative mx-auto w-[120px] h-[70px] mb-10">
            <Image
              src="/images/logo/rysunek-1-removebg-preview.png"
              alt="Piona Dachy"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-gray-200 leading-8 mb-12">
            © 2024 PIONA DACHY.
            <br />
            Solidność i Precyzja.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.25em] text-gray-300">
            <Link href="#" className="hover:text-[#c42026] transition">
              Polityka Prywatności
            </Link>

            <Link href="#" className="hover:text-[#c42026] transition">
              Kontakt
            </Link>

            <Link href="/realizacje" className="hover:text-[#c42026] transition">
              Realizacje
            </Link>
          </div>
        </div>
      </footer>

      {/* ================= MOBILE NAV ================= */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#062f28] border-t border-[#1b6b59] z-50 lg:hidden">
        <div className="grid grid-cols-3 text-center text-white text-xs">
          
          <Link
            href="/"
            className="py-4 hover:bg-[#07503f] transition"
          >
            <div className="text-[#c42026] text-lg mb-1">⌂</div>
            Start
          </Link>

          <Link
            href="/realizacje"
            className="py-4 hover:bg-[#07503f] transition"
          >
            <div className="text-[#c42026] text-lg mb-1">⚒</div>
            Realizacje
          </Link>

          <Link
            href="/kalkulator"
            className="py-4 hover:bg-[#07503f] transition"
          >
            <div className="text-[#c42026] text-lg mb-1">⌘</div>
            Kalkulator
          </Link>
        </div>
      </nav>
    </main>
  );
} 