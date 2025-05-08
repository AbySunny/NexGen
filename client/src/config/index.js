export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "monitor", label: "Monitor" },
      { id: "mouse", label: "Mouse" },
      { id: "Keyboard", label: "Keyboard" },
      { id: "g_card", label: "Graphics Card" },
      { id: "chair", label: "Chair" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "gigabyte", label: "Gigabyte" },
      { id: "logitech", label: "Logitech" },
      { id: "asus", label: "ASUS" },
      { id: "samsung", label: "Samsung" },
      { id: "green_soul", label: "Green Soul" },
      { id: "razer", label: "Razer" },
      
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "monitor",
    label: "Monitor",
    path: "/shop/listing",
  },
  {
    id: "mouse",
    label: "Mouse",
    path: "/shop/listing",
  },
  {
    id: "Keyboard",
    label: "Keyboard",
    path: "/shop/listing",
  },
  {
    id: "g_card",
    label: "Graphic Card",
    path: "/shop/listing",
  },
  {
    id: "chair",
    label: "Chair",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  monitor: "Monitor",
  mouse: "Mouse",
  Keyboard: "Keyboard",
  g_card: "Graphic Card",
  chair: "Chair",
};

export const brandOptionsMap = {
  gigabyte: "Gigabyte",
  logitech: "Logitech",
  asus: "ASUS",
  samsung: "Samsung",
  green_soul: "Green Soul",
  razer: "Razer",
 
};

export const filterOptions = {
  category: [
    { id: "monitor", label: "Monitor" },
    { id: "mouse", label: "Mouse" },
    { id: "Keyboard", label: "Keyboard" },
    { id: "g_card", label: "Graphic Card" },
    { id: "chair", label: "Chair" },
  ],
  brand: [
    { id: "gigabyte", label: "Gigabyte" },
    { id: "logitech", label: "Logitech" },
    { id: "asus", label: "ASUS" },
    { id: "samsung", label: "Samsung" },
    { id: "green_soul", label: "Green Soul" },
    { id: "razer", label: "Razer" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
