import { createPortal } from "react-dom";
import React, {  useEffect} from "react";
export default function Modal({
  children,

  setModal,
  modal,
}) {
    useEffect(() => {
        if (modal) {
          document.body.style.overflow = "hidden"; // Disable background scrolling
        } else {
          document.body.style.overflow = ""; // Enable scrolling when modal closes
        }
    
        return () => {
          document.body.style.overflow = ""; // Cleanup when modal unmounts
        };
      }, [modal]);
  return createPortal(
    <div
      onClick={() => {
       
        setModal(false)
      }}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 ${
        modal ? "" : "hidden"
      }`}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("model")
  );
}
