import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ManageCategory() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    { id: 1, name: "Saree" },
    { id: 2, name: "Jeans" },
    { id: 3, name: "Office Wear" },
    { id: 4, name: "Kurtis" },
  ]);

  const handleDelete = (id) => {
    const updated = categories.filter((cat) => cat.id !== id);
    setCategories(updated);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Manage Category</Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
            onClick={() => navigate("/Admin/AddCategory")}
          >
            Add
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Serial No</b></TableCell>
                <TableCell><b>Category Name</b></TableCell>
                <TableCell align="center"><b>Action</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {categories.map((cat, index) => (
                <TableRow key={cat.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{cat.name}</TableCell>
                  <TableCell align="center">
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(cat.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {categories.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No Categories Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}