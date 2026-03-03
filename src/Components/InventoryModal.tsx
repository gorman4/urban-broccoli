import { useState, type FormEvent, type ChangeEvent } from "react";
import axiosInstance from "../Lib/axiosInstance";
import { API_PATHS } from "../Lib/apiPath";

type InventoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type InventoryFormData = {
  item_name: string;
  quantity: number;
  origin: string;
  destination: string;
  current_position: string;
  location: {
    name: string;
  };
  
};

export default function InventoryModal({
  isOpen,
  onClose,
  onSuccess,
}: InventoryModalProps) {
  const [formData, setFormData] = useState<InventoryFormData>({
    item_name: "",
    quantity: 0,
    origin: "",
    destination: "",
    current_position: "",
    location: {
      name: "",
    },
  
  });
  const [isloading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "location_name") {
      setFormData((prev) => ({
        ...prev,
        location: { name: value },
      }));
    } else if (name === "quantity") {
      setFormData((prev) => ({
        ...prev,
        quantity: Number(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const payLoad = {
      ...formData,
      status: "Pending",
    };

    const response = await axiosInstance.post(
      API_PATHS.INVENTORY.INSERT,
      payLoad
    );

    console.log("Response:", response);

    // 👇 Safe optional chaining
    if (response?.data?.success) {
      onSuccess();
      onClose();
    }

  } catch (error) {
    console.error("Submit error:", error);
    alert("Something went wrong!");
  } finally {
    setIsLoading(false);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Add Inventory</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="item_name"
            placeholder="Item Name"
            value={formData.item_name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity > 0 ? formData.quantity : ""}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="origin"
            placeholder="Origin e.g Berlin, Germany"
            value={formData.origin}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="destination"
            placeholder="Destination e.g Texas, USA"
            value={formData.destination}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="current_position"
            placeholder="Current Position e.g Seoul, South Korea"
            value={formData.current_position}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="location_name"
            placeholder="Location Name"
            value={formData.location.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
         


          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 px-4 py-2 rounded text-white"
            >
              Cancel
            </button>

            <button
              disabled={isloading}
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded text-white"
            >
              {isloading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
