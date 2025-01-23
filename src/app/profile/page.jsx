import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";

const page = async () => {

  const {isAuthenticated} = await getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect('/api/auth/login');
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-75px)]">
        <h1 className="font-bold text-3xl">Welcome to your profile!</h1>
    </div>
  )
}

export default page
