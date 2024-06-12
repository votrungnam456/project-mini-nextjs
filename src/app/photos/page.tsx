import Link from "next/link";
import { mappingPhoto } from "./mapping";
import Image from "next/image";

export default function PhotosPage() {
  return (
    <div className="flex">
      {mappingPhoto.map(({ id, image }, index) => {
        return (
          <div key={index}>
            <Link href={`/photos/${id}`}>
              <Image alt="" src={image} width={300} height={300}></Image>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
