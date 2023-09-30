"use client"
import Title from "../../../components/Title/Title";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ShowDeleteDialog } from "./showDeleteDialog";
import { PageFormData } from "../../PageData/PageData";
import LoadingSkeleton from "./LoadingSkeleton";
import { useAPIData } from "./loadingHook";
import { SearchPage } from "./SearchPage";
import { Button } from "@material-tailwind/react";
import ShowDataTable from "./data-table/DataTable";
import { ServerAction } from "../ShowForm/action";
import { toast } from "react-toastify";
import axios from "axios";

export function ShowData({ props, data }: { props: PageFormData, data: any[] }) {
  const { loading, searchText, apiResults, searchResults, setApiResults, } = useAPIData();
  const [isOpen, setIsOpen] = useState({ isOpen: false, deleteIndex: -1 });
  const results = searchText.length > 0 ? searchResults : apiResults;
  useEffect(() => {
    setApiResults(data);
  }, [data])
  function closeModal(isSuccess: boolean) {
    const deleteIndex = isOpen.deleteIndex;
    const tempData = data[deleteIndex];
    setIsOpen({ isOpen: false, deleteIndex: -1 });
    if (isSuccess) {
      const url = new URL(props.apiURL, process.env.NEXT_PUBLIC_BASE_URL)
      url.searchParams.set("_id", tempData["_id"]);
      toast.info("Deleting...", { toastId: "00000" });
      axios.delete(url.href).then((res) => {
        const paths = [props.currentURL, ...props.paths]
        if (props.dynamicRevalidate) {
          props.dynamicRevalidate.forEach((dv) => {
            paths.push(dv.initial + data[deleteIndex][dv.value]);
          })
        }
        ServerAction(paths).then((v) => {
          toast.dismiss("00000");
          toast.success("Deleted Successfully!");
        });


      }).catch((er) => {
        console.log("Error ", er);
        toast.error("Oops! Deletion Failed!");
      })
    }
  }
  return (
    <div className="px-4 not-prose  ">
      <ShowDeleteDialog isOpen={isOpen.isOpen} closeModal={closeModal}  />
      <div className="flex justify-between">
        <Title isH1>{props.title}</Title>
        <Link href={`${props.currentURL}?_id=add`} >
          <Button variant="filled" color="deep-purple" >Add New</Button>
        </Link>
      </div>
      <p className="px-2 my-4">{props.description}</p>
      <SearchPage />
      <section >
        {loading ? <LoadingSkeleton tileData={props.tileData} /> : results &&
          <ShowDataTable setIsOpen={setIsOpen} results={results} tileData={props.tileData} currentUrl={props.currentURL} />
        }
      </section>
    </div>
  );
}