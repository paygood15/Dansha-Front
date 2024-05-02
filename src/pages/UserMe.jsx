import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../store/UserSlice";
import { useTranslation } from 'react-i18next';

const UserMe = () => {
    const { User } = useSelector((state) => state.UserSlice);
    const { t } = useTranslation();
    const dispatch = useDispatch();
 
  console.log(User);

    useEffect(() => {
      dispatch(getUser());
    }, [dispatch]);

  return (
  <>
  <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">

        <h3 className="text-lg leading-6 font-medium text-gray-900">
       asd
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {t("information about")} 
        </p>
    </div>
    {User && User?.data && (
        <div className="border-t border-gray-200 p-10">
<dl className="sm:divide-y sm:divide-gray-200">
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
            {t("Name")}
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {User.data.name}
        </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
           {t("Email")}
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {User.data.email}
        </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
            {t("Your phone")}
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {User.data.phone}
        </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
        {t("Your phone")}
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {User.data.phone}
        </dd>
    </div>
</dl>
</div>
)}

</div></>
  )
}

export default UserMe





