"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import { Session } from "@supabase/supabase-js";

const supabase = createClientComponentClient();

interface SessionContextType {
  session: Session | null;
}

// crea y exporta el contexto
export const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

// custom hook para acceder al contexto
export const useSession = () => {
  const context = useContext(SessionContext);
  
  if (!context) {
    throw new Error("useSession debe usarse dentro de un SessionProvider");
  }
  return context;
};
