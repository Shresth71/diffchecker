"use client";
import { useState } from "react";

export default function RatingsReviews() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <div className="absolute w-[1255.79px] h-[309px]  bg-white rounded-[5px] p-6 font-['Inter'] ">
      {/* Header */}
      <h2 className="text-[20px] font-medium text-[#222]w-[175px]h-[26px] mb-6">
        Ratings & Reviews
      </h2>

      {/* ⭐ Rating Section */}
      <div className="w-[1255px] h-[63px] mb-6">
        <h3 className="text-[13px] font-medium text-[#222] mb-[10px] leading-[100%] w-[107px]h-[16px]">
          Rate this product
        </h3>
        <div className="flex items-center gap-[10px]">
          <div className="flex gap-[10px] h-[24px] w-[138px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-[24px] w-[24px] h-[24px] leading-none ${
                  star <= rating ? "text-[#FFD646]" : "text-[#E0E0E0]"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <span className="absolute left-[1245.21px] text-green-600 text-[14px] font-medium leading-[100%] w-[37px] h-[17px] font-['Inter']">
            Good
          </span>
        </div>
      </div>

      {/* 📝 Review Textarea */}
      <div className="w-[1255.79px] h-[125px] mb-6">
        <h3 className="text-[13px] font-medium text-[#222] mb-[8px] leading-[100%] w-[124px]h-[16px]">
          Review this product
        </h3>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-[1255.79px] h-[125px] text-[12px] font-Inter leading-[100%]  border border-[#E5E5E5] rounded-[2px] resize-none outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-[11px]">
        {/* Cancel */}
        <button className="w-[100px] h-[44px]left-[1141px] border border-[#222] rounded-[5px] text-[#222] text-[13px] font-normal leading-[100%] hover:bg-gray-50 transition">
          Cancel
        </button>

        {/* Submit */}
        <button className="w-[100px] h-[44px] bg-[#07C994] rounded-[5px] text-white text-[13px] font-normal leading-[100%] ">
          Submit
        </button>
      </div>
    </div>
  );
}
