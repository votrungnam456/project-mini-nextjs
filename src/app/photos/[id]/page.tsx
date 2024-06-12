"use state";
import Image from "next/image";
import { mappingPhoto } from "../mapping";

export default function PhotoItem({ params }: { params: { id: string } }) {
  const photoItem = mappingPhoto.find((photo) => photo.id === params.id);
  return (
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
  );
}
