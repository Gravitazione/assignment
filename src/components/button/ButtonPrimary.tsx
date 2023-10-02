import React from "react"
import { ButtonProps } from "../../constant/models/types/Button.types"

const ButtonPrimary: React.FC<ButtonProps > = ({ title, onClick, disabled }) => {
  return (
    <button disabled={disabled} className={`py-3 rounded-full w-full ${disabled ? 'bg-[#646671]' : 'bg-ci' }`} onClick={onClick}>
      <label className={`font-normal text-white`}>
        <div className="flex flex-row justify-center">
          <div>{title}</div>
        </div>
      </label>
    </button>
  )
}

export default ButtonPrimary