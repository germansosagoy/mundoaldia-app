"use client";
import { Bitter } from "next/font/google";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const bitter = Bitter({ subsets: ["latin"] });

export default function SignIn() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) console.error("Error al iniciar sesión:", error.message);
    else alert("¡Enlace de inicio de sesión enviado!");
  };

  return (
    <div className="w-full md:py-8">
      <div className="flex items-center justify-center">
        <h1 className={`${bitter.className} antialiased text-7xl font-extrabold capitalize`}>
          Mundo al Día
        </h1>
      </div>
      <hr className="my-8 text-foreground w-full max-w-full" />
      <div className="flex items-center justify-center">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresar tu email"
        className="p-2 border border-gray-300 rounded-md"
      />
      <button onClick={handleSignIn} className="px-4 py-2 bg-[#FBFF22] text-foreground border border-foreground/20 text-md rounded-md transition">Ingresar</button>
      </div>
    </div>
  );
}
