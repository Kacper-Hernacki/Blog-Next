import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center p-6">
        <Link href="/" className="font-bold text-blue-600 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 font-bold text-blue-600 mr-2" />Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;

