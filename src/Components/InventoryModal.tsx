import { useState, type FormEvent, type ChangeEvent } from "react";
import axiosInstance from "../Lib/axiosInstance";
import { API_PATHS } from "../Lib/apiPath";

type InventoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type InventoryFormData = {
  receiver_name: string;
  receiver_address: string;
  receiver_email: string;
  receiver_phone: string;

  item_name: string;
  quantity: number;
  weight: string;
  service: string;

  origin: string;
  destination: string;
  completion: number;
  delivery_mode: string;

  item_image: File | null;

  expected_delivery: string;
  current_position: string;
  location: string; // now a simple string
};

export default function InventoryModal({
  isOpen,
  onClose,
  onSuccess,
}: InventoryModalProps) {
  const [formData, setFormData] = useState<InventoryFormData>({
    receiver_name: "",
    receiver_address: "",
    receiver_email: "",
    receiver_phone: "",

    weight: "",
    service: "",
    delivery_mode: "",
    completion: 0,
    expected_delivery: "",

    item_name: "",
    quantity: 0,

    item_image: null,

    origin: "",
    destination: "",
    current_position: "",
    location: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "item_image" && files) {
      console.log("Selected file:", files[0]);

      setFormData((prev) => ({
        ...prev,
        item_image: files[0],
      }));
    } else if (name === "quantity") {
      setFormData((prev) => ({
        ...prev,
        quantity: Number(value),
      }));
    } else if (name === "location") {
      setFormData((prev) => ({
        ...prev,
        location: value,
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
      const form = new FormData();

      form.append("receiver_name", formData.receiver_name);
      form.append("receiver_address", formData.receiver_address);
      form.append("receiver_email", formData.receiver_email);
      form.append("receiver_phone", formData.receiver_phone);

      form.append("weight", formData.weight);
      form.append("service", formData.service);
      form.append("delivery_mode", formData.delivery_mode);
      form.append("completion", String(formData.completion));
      form.append("expected_delivery", formData.expected_delivery);

      form.append("item_name", formData.item_name);
      form.append("quantity", String(formData.quantity));

      form.append("origin", formData.origin);
      form.append("destination", formData.destination);
      form.append("current_position", formData.current_position);

      form.append("status", "Pending");
      form.append("location", formData.location);

      if (formData.item_image) {
        form.append("item_image", formData.item_image);
      }

      for (let [key, value] of form.entries()) {
        console.log(key, value);
      }
      const response = await axiosInstance.post(
        API_PATHS.INVENTORY.INSERT,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data", // ← let axios set boundary automatically
            // or even better — just remove this line completely
          },
        },
      );

      console.log("Response:", response.data);

      if (response?.data?.success) {
        onSuccess();
        onClose();
      }
    } catch (error: any) {
      console.error("Submit error:", error);

      if (error.response) {
        console.log("Server Error:", error.response.data);
        console.log("Status:", error.response.status);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error Message:", error.message);
      }

      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Add Inventory</h2>

        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="receiver_name"
            placeholder="Enter receiver name"
            value={formData.receiver_name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="receiver_address"
            placeholder="Enter receiver address"
            value={formData.receiver_address}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="receiver_email"
            placeholder="Enter receiver email"
            value={formData.receiver_email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="receiver_phone"
            placeholder="Enter receiver phone"
            value={formData.receiver_phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="number"
            name="weight"
            placeholder="Enter weight"
            value={formData.weight}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="service"
            placeholder="Enter Service"
            value={formData.service}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="delivery_mode"
            placeholder="Enter delivery mode"
            value={formData.delivery_mode}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <div className="flex items-end gap-2">
            <input
              type="number"
              name="completion"
              placeholder="Enter Percentage"
              value={formData.completion}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
            />
            <span className="font-bold">% completed</span>
          </div>

          <input
            type="date"
            name="expected_delivery"
            placeholder="Enter delivery date"
            value={formData.expected_delivery}
            onChange={handleChange}
            className="border p-2 rounded"
          />

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
            name="location"
            placeholder="Location Name"
            value={formData.location}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="file"
            name="item_image"
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <div className="flex justify-between mb-20">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 px-4 py-2 rounded text-white"
            >
              Cancel
            </button>

            <button
              disabled={isLoading}
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded text-white"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
