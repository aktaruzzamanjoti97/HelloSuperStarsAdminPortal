import React from "react";
import CompleteAdminAuditionsSlider from "../CompleteAdminAuditionSlider/CompleteAdminAuditionsSlider";
import AdminAuditionNav from "./AdminAuditionNav/AdminAuditionNav";

const AdminAudition2 = () => {
  return (
    <>
      <AdminAuditionNav />

      <div className="liveMeetupBorder my-5">
        <div className="d-flex px-4 pt-3">
          <div className="faTrophy">
            <i class="fas fa-trophy"></i>
          </div>
          <h4 className="mx-3 text-white p-2">Completed Auditions</h4>
        </div>

        <div className="pb-3">
            <CompleteAdminAuditionsSlider />
            </div>
      </div>
    </>
  );
};

export default AdminAudition2;
