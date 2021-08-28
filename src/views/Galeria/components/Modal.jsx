import { motion } from "framer-motion";

const Modal = ({ dataModal, onCloseModal, onDelete }) => {
    return ( 
        <>
            <motion.div className={ `modal ${dataModal.open ? 'modal-open' : ''}` }>
                <div className="modal-box">
                    <img src={dataModal.image} alt="modaImage" />
                    <div className="modal-action flex justify-between ">
                        <label className="btn btn-outline btn-secondary w-40" onClick={()=>onDelete(dataModal.id, dataModal.nameImage)} >Delete</label>
                        <label className="btn btn-primary w-40" onClick={()=>onCloseModal(null, null)} >Close</label>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
 
export default Modal;