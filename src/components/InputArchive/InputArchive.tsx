import { useState, ChangeEvent } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import downloadIcon from "../../assets/downloadIcon.svg";
import Modal from "../Modal/Modal";
import style from "./InputArchive.module.css";

const InputArchive: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMapCreated, setIsMapCreated] = useState<boolean>(false);
  const [mapLink, setMapLink] = useState<string>("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    handleOpenModal();
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("archive", file);

    try {
      const response = await axios.post<{ createdMap: string }>(
        "http://localhost:4000/api/map/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (!response.data || !response.data.createdMap) {
        throw new Error("Failed to upload file");
      }

      setMapLink(response.data.createdMap);
      setIsMapCreated(true);
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsMapCreated(false);
    }
  };

  return (
    <>
      <button
        className={`${style.uploadButton} ${isHovered ? style.hovered : ""}`}
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={downloadIcon} alt="download icon" width={24} height={24} />
        <span className={style.text}>
          Upload your archive<span className={style.textItem}>&#8727;</span>
        </span>

        <input
          className={`${style.fileInput} ${style.visuallyHidden}`}
          name="archive"
          type="file"
          onChange={handleFileUpload}
        />
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {isMapCreated ? (
            <div className={style.modalContentWrapper}>
              <p className={style.modalTitle}>
                Your map was created successfully!
              </p>
              <p className={style.modalText}>
                Link to:{" "}
                <a href={mapLink} target="_blank" rel="noopener noreferrer">
                  SST Map
                </a>
              </p>
            </div>
          ) : (
            <div className={style.modalContentWrapper}>
              <p className={style.modalTitle}>Your map is being created...</p>
              <ThreeDots color="#9c27b0" />
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default InputArchive;
