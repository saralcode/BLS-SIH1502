"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return <div data-aos="fade-up" className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <div
      className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
    >
      <Image
        className="peer absolute top-0 right-0 h-full w-full object-contain"
        src={product.image0.url}
        alt={product.name}
        fill
      />
      <div
        className="peer flex items-center justify-center bg-gradient-to-br from-slate-200 to-cyan-200 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
      >
        <table className="p-2 m-2">
          <tbody>
          <tr>
            <td className="text-center font-bold" colSpan={2}>Size</td>
          </tr>
          <tr>

            <td className="text-center">{product.size} inches</td>
          </tr>
          <tr  >
            <td className="text-center font-bold" colSpan={2}>Description</td>
          </tr>
          <tr>
            <td className="text-center first-letter:uppercase">{product.shortDesc}</td>
          </tr>
        </tbody>
        </table>
      </div>
      {/* <div class="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
  <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
  <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
  <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
      </div> */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
        />
      </svg>
      {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
    </div>
    <div className="mt-4 px-5 pb-5">

      <h5 className="text-xl tracking-tight text-slate-900">
        {product.name}
      </h5>

      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-slate-900">₹{product.price}</span>
          <span className="text-base text-slate-900 px-2 ">/ {product.per}</span>
        </p>
      </div>
      <Link href={"/products/" + product.slug}>
        <Button fullWidth color="green" >View Product</Button>
      </Link>
    </div>
  </div>

}