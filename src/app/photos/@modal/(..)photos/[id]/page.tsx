import { mappingPhoto } from "@/app/photos/mapping";
import Modal from "@/components/modal";
import Image from "next/image";

export default function InterceptPhotos({
  params,
}: {
  params: { id: string };
}) {
  const photoItem = mappingPhoto.find((photo) => photo.id === params.id);
  return (
    <Modal>
      <div>
        <Image
          src={photoItem?.image ?? ""}
          alt=""
          width={500}
          height={500}
        ></Image>
        <h1>{photoItem?.description}</h1>
        <h1>Capture by: {photoItem?.by}</h1>
      </div>
    </Modal>
  );
}
