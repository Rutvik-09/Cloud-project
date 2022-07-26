import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function EditProduct() {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImage = (e) => {
    setImage([...e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item md={10} style={{ padding: "50px" }}>
        <Card
          style={{ alignItems: "center", margin: "7%", padding: "15px" }}
          component="form"
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item xs={12} md={10}>
              <Typography variant="h3" component="div" gutterBottom>
                Edit Handicraft
              </Typography>
            </Grid>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  placeholder="Enter Name"
                  name="name"
                  required
                  //   value={values.email}
                  //   onChange={handleChange}
                ></TextField>
                {/* {errors.email && <p>{errors.email}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <FormControl sx={{ width: "100%" }} required>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    value={category}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Paper-crafts"}>Paper crafts</MenuItem>
                    <MenuItem value={"Decorative-crafts"}>
                      Decorative crafts
                    </MenuItem>
                    <MenuItem value={"Fashion-crafts"}>Fashion crafts</MenuItem>
                    <MenuItem value={"Functional-crafts"}>
                      Functional crafts
                    </MenuItem>
                    <MenuItem value={"Textile-crafts"}>Textile crafts</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  label="Image"
                  variant="outlined"
                  name="image"
                  accept="image"
                  type="file"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleImage}
                  value={image}
                  required
                  //   value={values.password}
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter Quantity"
                  label="Quantity"
                  variant="outlined"
                  type="number"
                  name="quantity"
                  pattern="/^\d*[1-9]\d*$/"
                  required
                  //   value={values.password}
                  //   onChange={handleChange}
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter Amount"
                  label="Amount"
                  variant="outlined"
                  type="number"
                  name="amount"
                  pattern="/^\d*[1-9]\d*$/"
                  required
                  //   value={values.password}
                  //   onChange={handleChange}
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter the color"
                  label="Color"
                  variant="outlined"
                  name="color"
                  required
                  //   value={values.password}
                  //   onChange={handleChange}
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>

            <Grid item sx={10} md={5}>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mb: 3 }}
                  onClick={handleSubmit}
                >
                  Add Handicraft
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProduct;
