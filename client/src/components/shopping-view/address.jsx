// import { useEffect, useState } from "react";
// import CommonForm from "../common/form";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { addressFormControls } from "@/config";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addNewAddress,
//   deleteAddress,
//   editaAddress,
//   fetchAllAddresses,
// } from "@/store/shop/address-slice";
// import AddressCard from "./address-card";
// import { useToast } from "../ui/use-toast";

// const initialAddressFormData = {
//   address: "",
//   city: "",
//   phone: "",
//   pincode: "",
//   notes: "",
// };

// function Address({ setCurrentSelectedAddress, selectedId }) {
//   const [formData, setFormData] = useState(initialAddressFormData);
//   const [currentEditedId, setCurrentEditedId] = useState(null);
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const { addressList } = useSelector((state) => state.shopAddress);
//   const { toast } = useToast();

//   function handleManageAddress(event) {
//     event.preventDefault();

//     if (addressList.length >= 3 && currentEditedId === null) {
//       setFormData(initialAddressFormData);
//       toast({
//         title: "You can add max 3 addresses",
//         variant: "destructive",
//       });

//       return;
//     }

//     currentEditedId !== null
//       ? dispatch(
//           editaAddress({
//             userId: user?.id,
//             addressId: currentEditedId,
//             formData,
//           })
//         ).then((data) => {
//           if (data?.payload?.success) {
//             dispatch(fetchAllAddresses(user?.id));
//             setCurrentEditedId(null);
//             setFormData(initialAddressFormData);
//             toast({
//               title: "Address updated successfully",
//             });
//           }
//         })
//       : dispatch(
//           addNewAddress({
//             ...formData,
//             userId: user?.id,
//           })
//         ).then((data) => {
//           if (data?.payload?.success) {
//             dispatch(fetchAllAddresses(user?.id));
//             setFormData(initialAddressFormData);
//             toast({
//               title: "Address added successfully",
//             });
//           }
//         });
//   }

//   function handleDeleteAddress(getCurrentAddress) {
//     dispatch(
//       deleteAddress({ userId: user?.id, addressId: getCurrentAddress._id })
//     ).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(fetchAllAddresses(user?.id));
//         toast({
//           title: "Address deleted successfully",
//         });
//       }
//     });
//   }

//   function handleEditAddress(getCuurentAddress) {
//     setCurrentEditedId(getCuurentAddress?._id);
//     setFormData({
//       ...formData,
//       address: getCuurentAddress?.address,
//       city: getCuurentAddress?.city,
//       phone: getCuurentAddress?.phone,
//       pincode: getCuurentAddress?.pincode,
//       notes: getCuurentAddress?.notes,
//     });
//   }

//   function isFormValid() {
//     return Object.keys(formData)
//       .map((key) => formData[key].trim() !== "")
//       .every((item) => item);
//   }

//   useEffect(() => {
//     dispatch(fetchAllAddresses(user?.id));
//   }, [dispatch]);

//   console.log(addressList, "addressList");

//   return (
//     <Card>
//       <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2  gap-2">
//         {addressList && addressList.length > 0
//           ? addressList.map((singleAddressItem) => (
//               <AddressCard
//                 selectedId={selectedId}
//                 handleDeleteAddress={handleDeleteAddress}
//                 addressInfo={singleAddressItem}
//                 handleEditAddress={handleEditAddress}
//                 setCurrentSelectedAddress={setCurrentSelectedAddress}
//               />
//             ))
//           : null}
//       </div>
//       <CardHeader>
//         <CardTitle>
//           {currentEditedId !== null ? "Edit Address" : "Add New Address"}
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-3">
//         <CommonForm
//           formControls={addressFormControls}
//           formData={formData}
//           setFormData={setFormData}
//           buttonText={currentEditedId !== null ? "Edit" : "Add"}
//           onSubmit={handleManageAddress}
//           isBtnDisabled={!isFormValid()}
//         />
//       </CardContent>
//     </Card>
//   );
// }

// export default Address;




import { useEffect, useState } from "react";
import CommonForm from "../common/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAddress,
  deleteAddress,
  editaAddress,
  fetchAllAddresses,
} from "@/store/shop/address-slice";
import AddressCard from "./address-card";
import { useToast } from "../ui/use-toast";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};

function Address({ setCurrentSelectedAddress, selectedId }) {
  const [formData, setFormData] = useState(initialAddressFormData);
  const [errors, setErrors] = useState({});
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.shopAddress);
  const { toast } = useToast();

  useEffect(() => {
    dispatch(fetchAllAddresses(user?.id));
  }, [dispatch, user?.id]);

  // Validation function for each field
  function validateField(name, value) {
    let errorMessage = "";
    if (name === "address" && !value.trim()) errorMessage = "Address is required.";
    if (name === "city" && !value.trim()) errorMessage = "City is required.";
    if (name === "phone" && (!/^\d{10}$/.test(value) || !value.trim()))
      errorMessage = "Enter a valid 10-digit phone number.";
    if (name === "pincode" && (!/^\d{6}$/.test(value) || !value.trim()))
      errorMessage = "Enter a valid 6-digit pincode.";

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  }

  // Handle input field changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the field when typing
    validateField(name, value);
  }

  // Function to check if all fields are valid
  function isFormValid() {
    return Object.values(errors).every((err) => err === "") && 
           Object.values(formData).every((val) => val.trim() !== "");
  }

  function handleManageAddress(event) {
    event.preventDefault();

    // Validate all fields before submitting
    const newErrors = {};
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    if (!isFormValid()) return;

    if (addressList.length >= 3 && currentEditedId === null) {
      setFormData(initialAddressFormData);
      toast({ title: "You can add max 3 addresses", variant: "destructive" });
      return;
    }

    const action = currentEditedId
      ? editaAddress({ userId: user?.id, addressId: currentEditedId, formData })
      : addNewAddress({ ...formData, userId: user?.id });

    dispatch(action).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllAddresses(user?.id));
        setCurrentEditedId(null);
        setFormData(initialAddressFormData);
        setErrors({});
        toast({ title: currentEditedId ? "Address updated" : "Address added" });
      }
    });
  }

  function handleDeleteAddress(getCurrentAddress) {
    dispatch(deleteAddress({ userId: user?.id, addressId: getCurrentAddress._id })).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllAddresses(user?.id));
        toast({ title: "Address deleted successfully" });
      }
    });
  }

  function handleEditAddress(getCuurentAddress) {
    setCurrentEditedId(getCuurentAddress?._id);
    setFormData({ ...getCuurentAddress });
  }

  return (
    <Card>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {addressList.length > 0 &&
          addressList.map((singleAddressItem) => (
            <AddressCard
              key={singleAddressItem._id}
              selectedId={selectedId}
              handleDeleteAddress={handleDeleteAddress}
              addressInfo={singleAddressItem}
              handleEditAddress={handleEditAddress}
              setCurrentSelectedAddress={setCurrentSelectedAddress}
            />
          ))}
      </div>
      <CardHeader>
        <CardTitle>{currentEditedId ? "Edit Address" : "Add New Address"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <form onSubmit={handleManageAddress}>
          {addressFormControls.map((control) => (
            <div key={control.name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {control.label}
              </label>
              <input
                type={control.type || "text"}
                name={control.name}
                value={formData[control.name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors[control.name] && (
                <p className="text-red-500 text-xs mt-1">{errors[control.name]}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded ${
              !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isFormValid()}
          >
            {currentEditedId ? "Update" : "Add"}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Address;
