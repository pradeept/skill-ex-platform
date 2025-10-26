import Image from "next/image";
import loginCoverImage from "@/../public/loginCover.jpg";
import LoginForm from "@/components/LoginForm";

export default function page() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 overflow-x-hidden'>
      {/* cover image */}
      <section>
        <Image
          src={loginCoverImage}
          alt='login-cover-image'
          width={700}
          height={700}
          className='w-full h-screen'
        />
      </section>
      {/* form */}
      <LoginForm />
    </section>
  );
}
