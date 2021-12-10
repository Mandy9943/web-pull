import {
  TextField,
  Checkbox,
  Button,
  DialogActions,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";
import FormDialog from "./components/FormDialog/FormDialog";
import "./formProductDetail.css";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./Schema/schema";

const FormProductDetail = ({ handleClose, open }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      address: "",
      agreePolicy: false,
    },
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <FormDialog open={open} handleClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)} id="FormProductDetail">
          <p className="formProductDetail-title">
            Por favor agregue los datos de envío
          </p>
          <div className="form-wrapper">
            <div className="fromProductDetail-wrapper-textfields">
              <TextField
                {...register("firstName")}
                className="fromProductDetail-textfields font-size"
                margin="dense"
                id="name"
                label="Nombres"
                type="text"
                variant="outlined"
                color="secondary"
                error={errors.firstName}
                required
              />
              <TextField
                {...register("lastName")}
                className="fromProductDetail-textfields font-size"
                margin="dense"
                id="name"
                label="Apellidos"
                type="text"
                variant="outlined"
                color="secondary"
                error={errors.lastName}
                required
              />
            </div>
            <TextField
              {...register("email")}
              className="font-size"
              margin="dense"
              id="name"
              label="Correo"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              error={errors.email}
              helperText={errors?.email?.message}
              required
            />
            <TextField
              {...register("phoneNumber")}
              className="font-size"
              margin="dense"
              id="name"
              label="Telefono Movil"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              error={errors.phoneNumber}
              required
            />
            <TextField
              {...register("city")}
              className="font-size"
              margin="dense"
              id="name"
              label="Ciudad"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              error={errors.city}
              required
            />
            <TextField
              {...register("address")}
              className="font-size"
              margin="dense"
              id="name"
              label="Direccion"
              type="text"
              fullWidth
              color="secondary"
              variant="outlined"
              error={errors.address}
              helperText={errors?.address?.message}
              required
            />

            <div className="wrapper-checkbox">
              <Controller
                name="agreePolicy"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    className="font-size"
                    margin="dense"
                    color="secondary"
                    error={errors.agreePolicy}
                    helperText={errors?.agreePolicy?.message}
                    required
                    label={
                      <p className="agreePolicy">
                        Antes de continuar debes aceptar los{" "}
                        <Link href="/terminos">
                          <a>terminos</a>
                        </Link>
                        ,{" "}
                        <Link href="/terminos">
                          <a>condiciones</a>
                        </Link>{" "}
                        y{" "}
                        <Link href="/privacidad">
                          <a>política de privacidad</a>
                        </Link>{" "}
                        de KieroMarketplace
                      </p>
                    }
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                  />
                )}
              />
              {/* <Checkbox
                {...register("agreePolicy")}
                checked={register.agreePolicy.value}
                onChange={(e) =>
                  register.agreePolicy.onChange(e.target.checked)
                }
                className="font-size"
                margin="dense"
                type="text"
                color="secondary"
                error={errors.agreePolicy}
                helperText={errors?.agreePolicy?.message}
                required
              /> */}
            </div>
          </div>
          <DialogActions>
            <div className="FormDialog-button">
              <Button
                onClick={handleClose}
                type="submit"
                color="secondary"
                variant="contained"
                disabled={dirtyFields === {} || !isValid}
              >
                Continuar con la transacción
              </Button>
            </div>
          </DialogActions>
        </form>
      </FormDialog>
    </div>
  );
};

export default FormProductDetail;
