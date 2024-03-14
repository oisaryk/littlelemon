import React, {useEffect, useState} from 'react';
import "../../styles/ReservationsContent.css";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    telephone: yup.string().required("Telephone is a required field!").matches(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/, "Phone number must match the form +380XXXXXXXXX"),
    date: yup.string().required("Please select date and time!"),
    table: yup.number().required("Please select preferred table!")
})

const tableMapper = {
    2: "Table for Two",
    2_4: "Table for Two or Four",
    4_8: "Table for Four or Eight",
    5_8: "Table for Five or Eight",
    6_8: "Table for Six or Eight"
}

const FormField = ({ label, type, placeholder, name, register, errors }) => (
    <div className="field">
        <label htmlFor={name}>{label}</label>
        <input type={type} placeholder={placeholder} name={name} {...register(name)} />
        <span className="error-message">{errors[name]?.message}</span>
    </div>
)

function ReservationForm ({ selectedTable }) {
    const { handleSubmit, register, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    })

    const [currentSelectedTable, setSelectedTable] = useState(selectedTable);
    useEffect(() => {
        setSelectedTable(selectedTable);
        setValue('table', currentSelectedTable);
    }, [selectedTable]);

    const formSubmit = (data) => {
        alert('All done')
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <FormField label="Full Name" type="text" placeholder="Oleksandr Doe" name="name" register={register}
                           errors={errors}/>
                <FormField label="Email" type="text" placeholder="some@email.com" name="email" register={register}
                           errors={errors}/>
                <FormField label="Telephone" type="tel" placeholder="380XXXXXXXXX" name="telephone"
                           register={register} errors={errors}/>
                <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <input type="datetime-local" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <div className='field'>
                    {currentSelectedTable ? <p>Table {tableMapper[currentSelectedTable]} persons is selected</p> :
                        <span className="error-message"> <p>No table selected</p> </span>}
                </div>
                <button className="reserve-btn" type="submit">Reserve</button>
            </fieldset>
        </form>
    )
}

export default ReservationForm