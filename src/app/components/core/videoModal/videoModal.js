import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { faPlay, faTimes } from "@fortawesome/fontawesome-free-solid"
import YouTube from "react-youtube"
import { Modal } from "../../structural/modal"
import "./videoModal.scss"

export const VideoModal = ({ videoId, name, buttonText, ...props }) => (
  <Modal>
    {({ isOpen, OpenModal, ModalOverlay, ModalContent, CloseModal }) => (
      <div>
        <OpenModal>
          <FontAwesomeIcon icon={faPlay} size="1x" />
          {` ${buttonText}`}
        </OpenModal>

        <ModalOverlay>
          {isOpen ? (
            <ModalContent>
              <div className="header">
                <h1>{name}</h1>
                <CloseModal>
                  <FontAwesomeIcon icon={faTimes} size="1x" />
                </CloseModal>
              </div>
              <YouTube videoId={videoId} />
            </ModalContent>
          ) : null}
        </ModalOverlay>
      </div>
    )}
  </Modal>
)
