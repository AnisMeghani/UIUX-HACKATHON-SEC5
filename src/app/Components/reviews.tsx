import React from "react";
import { Star } from "lucide-react";
import { CircleCheck } from "lucide-react";

const Reviews = () => {
  return (
    <div className="flex justify-evenly w-11/12 h-[240px] mx-14 ">
      <div className=" w-[400px] h-[240px] border border-gray-400 rounded-lg px-5 py-5 ">
        <div className="flex gap-2">
          <Star className="fill-yellow-500 text-yellow-500 text-sm" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
        </div>
        <br />
        <h6 className="flex font-bold text-xl">
          Sarah M.
          <CircleCheck className="text-white fill-green-600" />
        </h6>
        <br />
        <p className="font-normal text-gray-500">
          &quot;I&apos;m blown away by the quality and style of the clothes I
          received from Shop.co. From casual wear to elegant dresses, every
          piece I&aposve bought has exceeded my expectations.&quot;
        </p>
      </div>

      <div className=" w-[400px] h-[240px] border border-gray-400 rounded-lg px-5 py-5 ">
        <div className="flex gap-2">
          <Star className="fill-yellow-500 text-yellow-500 text-sm" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
        </div>
        <br />
        <h6 className="flex font-bold text-xl">
          Alex K.
          <CircleCheck className="text-white fill-green-600" />
        </h6>
        <br />
        <p className="font-normal text-gray-500">
          &quot;Finding clothes that align with my personal style used to be a
          challenge until I discovered Shop.co. The range of options they offer
          is truly remarkable, catering to a variety of tastes and
          occasions.&quot;
        </p>
      </div>
      <div className=" w-[400px] h-[240px] border border-gray-400 rounded-lg px-5 py-5 ">
        <div className="flex gap-2">
          <Star className="fill-yellow-500 text-yellow-500 text-sm" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
        </div>
        <br />
        <h6 className="flex font-bold text-xl">
          James L.
          <CircleCheck className="text-white fill-green-600" />
        </h6>
        <br />
        <p className="font-normal text-gray-500">
          &quot;As someone who&apos; always on the lookout for unique fashion
          pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection
          of clothes is not only diverse but also on-point with the latest
          trends.&quot;
        </p>
      </div>
    </div>
  );
};

export default Reviews;
