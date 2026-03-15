import { Container, Paper, Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddCategory() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("New Category:", name);
    navigate("/Admin/ManageCategory");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>
          Add Category
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
           <TextField
            label="Category Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />

          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>

          <Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}