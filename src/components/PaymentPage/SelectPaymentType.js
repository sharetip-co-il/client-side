import React, { Fragment } from "react";
import {
  Button,
  Paper,
  FormControl,
  Autocomplete,
  TextField,
  Grid,
} from "@mui/material";

import { Box } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { prePaymentsValidation } from "../../validations/paymentsValidation";
import { paymentTypes } from "../../const/Globals";
import { HelperText } from "../../styles/errors";
const SelectPaymentType = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
    control,
  } = useForm({
    resolver: yupResolver(prePaymentsValidation),
    defaultValues: {
      selectedPaymentType: null,
      budget: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Payment submitted!");
    console.log("Selected Payment Type:", data.selectedPaymentType);
    console.log("Budget:", data.budget);
  };

  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fragment>
          <Controller
            name="selectedPaymentType"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                sx={{ width: 300 }}
                options={paymentTypes}
                autoHighlight
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) =>
                  option.label === value.label
                }
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { ml: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="35"
                      srcSet={option.imgUrl}
                      src={option.imgUrl}
                      alt=""
                      // style={{ marginRight: "50px", alignSelf: "flex-start" }}
                    />
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="סוג תשלום"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
                onChange={(_, value) => setValue("selectedPaymentType", value)}
              />
            )}
          />
          <HelperText sx={{ textAlign: "right", color: "red" }}>
            {errors?.selectedPaymentType?.message}
          </HelperText>
          <FormControl sx={{ mt: 2, direction: "rtl" }}>
            <TextField
              {...register("budget")}
              label="סכום הטיפ ₪"
              a
              sx={{ direction: "rtl" }}
            />
            <HelperText sx={{ textAlign: "right", color: "red" }}>
              {errors?.budget?.message}
            </HelperText>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 10 }}
          >
            שלם עכשיו
          </Button>
        </Fragment>
      </form>
    </Paper>
  );
};

export default SelectPaymentType;
