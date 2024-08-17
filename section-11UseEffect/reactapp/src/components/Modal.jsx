import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// });

 function Modal({open, children, onClose }) {
  const dialog = useRef();

  //initially open is false,But the first time this component function executes,this ref will not be set yet.
  //It will not be connected yet because this JSX code hasn't executed yet.s connection between a ref and
  //  dialog element hasn't been established yet. useEffect ->runs just after the component executes

  // if(open){
  //   dialog.current.showModal();
  // } else {
  //   dialog.current.close();
  // }
  useEffect(()=>{
  if(open){
    dialog.current.showModal();
  } else {
    dialog.current.close();
  }
},[open])
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose} >
      {open? children:null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
