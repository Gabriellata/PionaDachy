"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function KalkulatorPage() {
  const [values, setValues] = useState({
    wiezba: "",
    wzmocnienie: "",
    osb: "",
    membrany: "",
    blachodachowka: "",
    trapez: "",
    panelowa: "",
    felc: "",
    okno: "",
    wylaz: "",
    komin: "",
    rynny: "",
    sniegolap: "",
    docieplenie: "",
    demontaz: "",
  });

  /* ================= LIVE CALCULATOR ================= */

  const total =
    (Number(values.wiezba) || 0) * 50 +
    (Number(values.wzmocnienie) || 0) * 100 +
    (Number(values.osb) || 0) * 20 +
    (Number(values.membrany) || 0) * 30 +
    (Number(values.blachodachowka) || 0) * 50 +
    (Number(values.trapez) || 0) * 45 +
    (Number(values.panelowa) || 0) * 80 +
    (Number(values.felc) || 0) * 100 +
    (Number(values.okno) || 0) * 700 +
    (Number(values.wylaz) || 0) * 500 +
    (Number(values.komin) || 0) * 200 +
    (Number(values.rynny) || 0) * 60 +
    (Number(values.sniegolap) || 0) * 50 +
    (Number(values.docieplenie) || 0) * 40 +
    (Number(values.demontaz) || 0) * 20;

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (
    key: keyof typeof values,
    value: string
  ) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <main className="bg-[#f3f3f3] min-h-screen overflow-x-hidden">
      
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

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-10 text-sm">
            <Link href="/" className="hover:text-[#c42026] transition">
              Start
            </Link>

            <Link href="/" className="hover:text-[#c42026] transition">
              O nas
            </Link>

            <Link
              href="/kalkulator"
              className="text-[#c42026] font-semibold border-b-2 border-[#c42026] pb-1"
            >
              Kalkulator
            </Link>
          </div>

          {/* PHONE BUTTON */}
          <a
            href="tel:+48609140634"
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

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-5 pt-36 pb-32">
        
        {/* TITLE */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#062f28] mb-6">
            Kalkulator Wyceny
          </h1>

          <p className="text-gray-600 text-lg leading-9 max-w-2xl">
            Uzyskaj wstępną wycenę swojego dachu w kilku prostych krokach.
            Wprowadź wymiary, a system automatycznie obliczy koszty.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
          
          {/* ================= LEFT ================= */}
          <div className="space-y-6">

            {/* SECTION */}
            <Section title="1. Konstrukcja więźby">

              <InputRow
                label="Nowa więźba (50zł/m2)"
                unit="m2"
                value={values.wiezba}
                onChange={(value) =>
                  handleChange("wiezba", value)
                }
              />

              <InputRow
                label="Wzmocnienie konstrukcji (100zł/m2)"
                unit="m2"
                value={values.wzmocnienie}
                onChange={(value) =>
                  handleChange("wzmocnienie", value)
                }
              />

            </Section>

            {/* SECTION */}
            <Section title="2. Poszycie dachu">

              <InputRow
                label="Deskowanie lub OSB (20zł/m2)"
                unit="m2"
                value={values.osb}
                onChange={(value) =>
                  handleChange("osb", value)
                }
              />

            </Section>

            {/* SECTION */}
            <Section title="3. Warstwy montażowe">

              <InputRow
                label="Membrany + kontrłaty + łaty (30zł/m2)"
                unit="m2"
                value={values.membrany}
                onChange={(value) =>
                  handleChange("membrany", value)
                }
              />

            </Section>

            {/* SECTION */}
            <Section title="4. Pokrycie dachowe">

              <InputRow
                label="Blachodachówka (50zł/m2)"
                unit="m2"
                value={values.blachodachowka}
                onChange={(value) =>
                  handleChange("blachodachowka", value)
                }
              />

              <InputRow
                label="Blacha trapezowa (45zł/m2)"
                unit="m2"
                value={values.trapez}
                onChange={(value) =>
                  handleChange("trapez", value)
                }
              />

              <InputRow
                label="Blacha panelowa felc klik (80zł/m2)"
                unit="m2"
                value={values.panelowa}
                onChange={(value) =>
                  handleChange("panelowa", value)
                }
              />

              <InputRow
                label="Blacha na felc (100zł/m2)"
                unit="m2"
                value={values.felc}
                onChange={(value) =>
                  handleChange("felc", value)
                }
              />

            </Section>

            {/* SECTION */}
            <Section title="5. Elementy dodatkowe">

              <InputRow
                label="Montaż okna dachowego (700zł/szt)"
                unit="szt"
                value={values.okno}
                onChange={(value) =>
                  handleChange("okno", value)
                }
              />

              <InputRow
                label="Wyłaz dachowy (500zł/szt)"
                unit="szt"
                value={values.wylaz}
                onChange={(value) =>
                  handleChange("wylaz", value)
                }
              />

              <InputRow
                label="Okucie komina blachą płaską (200zł/m2)"
                unit="m2"
                value={values.komin}
                onChange={(value) =>
                  handleChange("komin", value)
                }
              />

              <InputRow
                label="Rynny metal/PVC (60zł/m2)"
                unit="m2"
                value={values.rynny}
                onChange={(value) =>
                  handleChange("rynny", value)
                }
              />

              <InputRow
                label="Śniegołap (50zł/m2)"
                unit="m2"
                value={values.sniegolap}
                onChange={(value) =>
                  handleChange("sniegolap", value)
                }
              />

              <InputRow
                label="Docieplanie dachu (40zł/m2)"
                unit="m2"
                value={values.docieplenie}
                onChange={(value) =>
                  handleChange("docieplenie", value)
                }
              />

              <InputRow
                label="Demontaż starego pokrycia (20zł/m2)"
                unit="m2"
                value={values.demontaz}
                onChange={(value) =>
                  handleChange("demontaz", value)
                }
              />

            </Section>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="lg:sticky lg:top-28">

            <div className="bg-[#062f28] text-white border-2 border-[#c42026] p-8 shadow-2xl">
              
              <h2 className="text-4xl font-bold mb-4">
                Twoja Wycena
              </h2>

              <p className="text-gray-300 mb-8">
                Koszt aktualizuje się automatycznie.
              </p>

              <div className="border-t border-gray-500 pt-8 flex justify-between items-center">
                
                <span className="text-xl">
                  Suma:
                </span>

                <span className="text-5xl font-black text-[#ff6a6a]">
                  {total.toLocaleString("pl-PL")} zł
                </span>
              </div>

              <button
                className="
                  w-full
                  mt-10
                  bg-[#c42026]
                  py-5
                  font-bold
                  text-lg
                  hover:bg-red-700
                  transition
                "
              >
                ZAMÓW DOKŁADNĄ WYCENĘ →
              </button>
            </div>
          </div>
        </div>
      </section>

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

/* ================= SECTION ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f3f3f3] border border-gray-300 p-8">
      <h2 className="text-3xl font-semibold text-[#062f28] mb-8 border-b pb-4">
        {title}
      </h2>

      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

/* ================= INPUT ROW ================= */

function InputRow({
  label,
  unit,
  value,
  onChange,
}: {
  label: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      
      <label className="text-base text-[#1f1f1f]">
        {label}
      </label>

      <div className="flex items-center gap-2">
        
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-28
            border-b-2
            border-gray-400
            bg-white
            px-3
            py-2
            text-black
            outline-none
            focus:border-[#07503f]
          "
          placeholder={unit}
        />

        <span className="text-sm text-gray-700">
          {unit}
        </span>
      </div>
    </div>
  );
}