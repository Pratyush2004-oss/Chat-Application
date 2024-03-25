import React from 'react'

const GenderRadio = () => {
    return (
        <div>
            <div className="form-control">
                <label className="label cursor-pointer justify-normal">
                    <input type="radio" name="Gender" value={"Male"} className="radio checked:bg-red-500" checked />
                    <span className="label-text mx-5">Female</span>
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer justify-normal">
                    <input type="radio" name="Gender" value={"Female"} className="radio checked:bg-blue-500" checked />
                    <span className="label-text mx-5">Male</span>
                </label>
            </div></div>
    )
}

export default GenderRadio