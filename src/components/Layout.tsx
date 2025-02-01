import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 animate-gradient bg-[length:400%_400%]"
        style={{
          backgroundImage: "linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
        }}
      />
      
      {/* Content container */}
      <div className="relative w-[80%] mx-auto min-h-screen bg-white/90 backdrop-blur-sm shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;