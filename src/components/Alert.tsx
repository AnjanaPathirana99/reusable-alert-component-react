import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show">{children}
      <button onClick={onClose} className="btn-close"></button>
    </div>
  )
}

export default Alert