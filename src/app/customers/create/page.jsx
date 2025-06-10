"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import createCustomer from "./createCustomer";

export default function CreatePage() {
  const formRef = useRef();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const customerId = formData.get("customer_id")?.trim();

    if (!customerId) {
      alert("Customer IDは必須です。入力してください。");
      return;
    }

    await createCustomer(formData);
    router.push(`./create/confirm?customer_id=${customerId}`);
  };

  return (
    <>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-md m-4">
        <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="card-body">
              <h2 className="card-title">
                <p>
                  <input
                    type="text"
                    name="customer_name"
                    placeholder="桃太郎"
                    className="input input-bordered"
                  />
                </p>
