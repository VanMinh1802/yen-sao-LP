"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../types/contact.types";
import { ContactInfo } from "./ContactInfo";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    // Mock submission — simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  const inputClasses =
    "w-full bg-black/25 border border-white/15 rounded-xl px-[18px] py-[14px] text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-gold-500 focus:shadow-[0_0_0_4px_rgba(212,168,67,0.15)] focus:bg-black/40 text-[15px]";

  return (
    <div className="w-full h-full bg-gradient-to-br from-[rgba(38,17,8,0.95)] to-[rgba(138,28,28,0.95)] p-8 lg:p-12 z-20 relative flex flex-col justify-center">
      {/* Card Header */}
      <h3 className="text-2xl md:text-[28px] font-bold text-gold-400 mb-2 leading-tight">
        Kết Nối Với Chúng Tôi
      </h3>
      <p className="text-white/70 text-[14px] md:text-[15px] mb-6">
        Gửi Yêu Cầu Tư Vấn Mua Hàng
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Nhập họ và tên của bạn *"
            aria-label="Họ và tên"
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputClasses, errors.name && "border-red-400")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Số Điện Thoại (VD: 0986786753) *"
            aria-label="Số điện thoại"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(inputClasses, errors.phone && "border-red-400")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Bạn quan tâm tới sản phẩm nào? Hoặc muốn đặt lịch tham quan nhà yến?"
            aria-label="Lời nhắn"
            className={cn(inputClasses, "resize-y min-h-[120px]")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={cn(
            "w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-300 mt-1",
            isSuccess
              ? "bg-gradient-to-r from-green-600 to-green-700 text-white cursor-default"
              : "bg-gold-500 text-brown-900 hover:bg-gold-400 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(212,168,67,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
          )}
        >
          {isSuccess
            ? "✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm."
            : isSubmitting
              ? "Đang gửi..."
              : "GỬI YÊU CẦU TƯ VẤN"}
        </button>
      </form>

      {/* Contact Info */}
      <ContactInfo />
    </div>
  );
}
