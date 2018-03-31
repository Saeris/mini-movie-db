import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { faPlay, faTimes } from "@fortawesome/fontawesome-free-solid"
import YouTube from "react-youtube"
import { Modal } from "../../structural"
import "./videoModal.scss"

export const VideoModal = ({ id, title, buttonText = `Play Video` }) => (
  <Modal>
    {({ isOpen, CloseModal, ModalContents, ModalOverlay, OpenModal }) => (
      <div className="trailer">
        <OpenModal>
          <FontAwesomeIcon icon={faPlay} size="1x" />
          {` ${buttonText}`}
        </OpenModal>
        <ModalOverlay>
          <ModalContents>
            <div className="header">
              <h1>{title}</h1>
              <CloseModal>
                <FontAwesomeIcon icon={faTimes} size="1x" />
              </CloseModal>
            </div>
            {isOpen && <YouTube videoId={id} />}
          </ModalContents>
        </ModalOverlay>
      </div>
    )}
  </Modal>
)
