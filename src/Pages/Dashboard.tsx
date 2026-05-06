//import { useState } from "react"

import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import InventoryModal from "../Components/InventoryModal";
import axiosInstance from "../Lib/axiosInstance";
import { API_PATHS } from "../Lib/apiPath";
import { IoPlay } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type Inventory = {
  _id: string;
  uuid: string;
  tracknumber: string;
  itemname: string;
  quantity: number;
  origin: string;
  destination: string;
  currentposition: string;
  location: {
    name: string;
    long: number;
    lat: number;
  };
  createdAt: string;
  updatedAt: string;
  status: string;
};

const Dashboard = () => {
  const [parcelList, setParcelList] = useState<Inventory[]>([]);
  //const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const fetchInventories = async () => {
    console.log("Fetching Database links");
    try {
      // setLoading(true);

      const response = await axiosInstance.get(API_PATHS.INVENTORY.GETALL);

      if (response.data.success) {
        setParcelList(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching inventories:", error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventories();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const getStatusStyles = (status?: string) => {
    const normalizedStatus = status?.toLowerCase() || "pending";

    switch (normalizedStatus) {
      case "active":
        return {
          dot: "bg-green-500",
          text: "text-green-600",
          label: "Active",
        };

      case "pending":
        return {
          dot: "bg-yellow-400",
          text: "text-yellow-600",
          label: "Pending",
        };

      case "cancelled":
        return {
          dot: "bg-red-500",
          text: "text-red-600",
          label: "Cancelled",
        };

      default:
        return {
          dot: "bg-gray-400",
          text: "text-gray-600",
          label: status || "Unknown",
        };
    }
  };
  //const [parcelList, setParcelList]= useState(null)
  const { logout } = useAuth();

 const  deleteParcel = async (id: string) => {
  console.log(id)
    try {
      await axiosInstance.delete(`${API_PATHS.INVENTORY.DELETE}${id}`);
      fetchInventories();
    } catch (err) {
      console.error("Error deleting parcel:", err);
    }
  };

  const handleChangeStatus = async (id: string) => {
    // find the parcel in state
    const parcel = parcelList.find((item) => item.uuid === id);

    // stop if already active
    if (parcel?.status?.toLowerCase() === "active") {
      console.log("Parcel already active. No update needed.");
      return;
    }

    try {
      const response = await axiosInstance.patch(
        `${API_PATHS.INVENTORY.ACTIVATE}${id}`,
      );

      const updatedStatus = response.data.data.status;

      setParcelList((prev) =>
        prev.map((item) =>
          item.uuid === id ? { ...item, status: updatedStatus } : item,
        ),
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const logOutUser = () => {
    logout();
  };

  return (
    <div className="my-container background-gradient">
      <div className="py-5">
        <h1 className="text-white font-bold text-center text-3xl">
          Welcome to your Control Panel
        </h1>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-white mb-4">
          List of created Parcels
        </h4>
        <div className="flex flex-col lg:flex-row justify-between gap-15">
          <div className="w-full overflow-x-auto rounded-xl shadow-lg bg-white">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4">Tracking No</th>
                  <th className="px-6 py-4">Item Name</th>
                  <th className="px-6 py-4 hidden md:table-cell">
                    Current Location
                  </th>
                  <th className="px-6 py-4"></th>
                  <th className="px-6 py-4">Status</th>

                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {parcelList.map((item) => {
                  //   const statusStyle = getStatusStyles(item?.status);

                  return (
                    <tr
                      key={item.uuid}
                      className="hover:bg-gray-50 transition duration-200"
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {item.tracknumber}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {item.itemname}
                      </td>

                      <td className="px-6 py-4 hidden md:table-cell text-gray-600">
                        {item.currentposition}
                      </td>
                      <td
                        onClick={() =>
                          item.status?.toLowerCase() !== "active" &&
                          handleChangeStatus(item.uuid)
                        }
                      >
                        {item.status?.toLowerCase() === "pending" ? (
                          <IoPlay className="text-green-700 cursor-pointer" />
                        ) : (
                          <IoPauseSharp className="text-gray-400 cursor-not-allowed" />
                        )}
                      </td>

                      <td className="px-6 py-4">
                        {(() => {
                          const statusStyle = getStatusStyles(item.status);

                          return (
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-3 h-3 rounded-full border border-gray-200 ${statusStyle.dot}`}
                              ></span>
                              <span
                                className={`font-medium ${statusStyle.text}`}
                              >
                                {statusStyle.label}
                              </span>
                            </div>
                          );
                        })()}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button onClick ={() => deleteParcel(item.uuid)} className="px-4 py-1.5 rounded-md bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:border-red-400 transition duration-200">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm mb-15">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Quick Actions
            </h2>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition duration-200 shadow-sm"
              >
                Create Parcel
              </button>

              <button
              onClick={()=> navigate("/location")} 
              className="w-full py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition duration-200">
                Update Location
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={logOutUser}
        className="fixed bottom-6 left-6 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        Logout
      </button>
      <InventoryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={fetchInventories}
      />
    </div>
  );
};

export default Dashboard;
