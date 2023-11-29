"use client";
import {
  Button,
  Dialog,
  Flex,
  Separator,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React, { useRef } from "react";
import TrackPhone from "./TrackPhone";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreateTrackForm } from "./types";

const UploadTrack = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset
  } = useForm<ICreateTrackForm>();
  const formRef = useRef<any>(null);

  const onSubmit: SubmitHandler<ICreateTrackForm> = (data) => {
    reset();
  };

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="ghost" className="mr-20">
            Загрузить
          </Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Загрузка нового трека</Dialog.Title>
          <TrackPhone />
          <form 
          className="flex flex-col gap-2 mt-2"
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          action={"#"}
          >
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Название трека
              </Text>
              <TextField.Input {...register("name", { required: true })}/>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Описание к треку
              </Text>
              <TextArea {...register("description", { required: true })}/>
            </label>
            <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray" onClick={(e)=>e.preventDefault()}>
                Отменить
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button disabled={!isValid} type="submit">Сохранить</Button>
            </Dialog.Close>
          </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default UploadTrack;
