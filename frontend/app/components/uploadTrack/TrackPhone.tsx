"use client";
import { IUploadFile } from "@/app/types/general";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import React, { useState, useRef } from "react";

const TrackPhone = () => {
  const [resetUploadTrigger, setResetUploadTrigger] = useState(1);
  const [file, setFile] = useState<IUploadFile>({} as IUploadFile);
  const buttonRef = useRef<HTMLInputElement>();
  const isPresentFile = file && Object.keys(file)?.length > 0;
  const isPresentView = file?.view !== undefined && file?.view?.length > 0;
  const isPresentName = file?.name !== undefined && file?.name?.length > 0;
  const imgSrc = isPresentView ? file?.view : "";

  const uploadHandler = (data: IUploadFile) => {
    setFile(data);
    // onChange && onChange(data);
  };

  const deleteHandler = () => {
    setResetUploadTrigger((prev) => prev + 1);
    setFile({} as IUploadFile);
    // onChange && onChange(null);
  };

  const openProviderHandler = () => {
    !isPresentFile && buttonRef?.current?.click();
  };

  return (
    <Flex gap={'2'} justify={'center'}>
      <div>
        {isPresentFile ? (
          <Image
            src={""}
            width={80}
            height={80}
            alt="default photo"
            className="cursor-pointer photo-upload-img"
          />
        ) : (
          <div className="blue-secondary-bg photo-default-img">
            <Image
              src={""}
              width={80}
              height={80}
              alt="default photo"
              className="cursor-pointer photo-upload-img"
            />
          </div>
        )}
      </div>
      <div>

      </div>
    </Flex>
  );
};

export default TrackPhone;
