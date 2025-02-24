import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { MonetizationOn, Groups, CalendarToday } from "@mui/icons-material";
import dummyChamas from "./dummyChamas"; // Importing Chamas data

const JoinChama = () => {
  const [open, setOpen] = useState(false);
  const [selectedChama, setSelectedChama] = useState(null);

  const handleOpen = (chama) => {
    setSelectedChama(chama);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedChama(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Chamas
      </Typography>
      <Grid container spacing={3}>
        {dummyChamas.map((chama) => (
          <Grid item xs={12} sm={6} md={4} key={chama.id}>
            <Card sx={{ transition: "0.3s", "&:hover": { boxShadow: 6 }, p: 2 }}>
              <CardContent>
                <Typography variant="h6">{chama.name}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {chama.description}
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <CalendarToday fontSize="small" />
                  <Typography variant="body2">{chama.contributionCycle}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <MonetizationOn fontSize="small" />
                  <Typography variant="body2">Deposit: {chama.depositAmount}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Groups fontSize="small" />
                  <Typography variant="body2">Max Members: {chama.maxMembers}</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleOpen(chama)}>
                  Join
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Chama Details */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{selectedChama?.name}</DialogTitle>
        <DialogContent>
          <Typography>{selectedChama?.description}</Typography>
          <Typography>Contribution Cycle: {selectedChama?.contributionCycle}</Typography>
          <Typography>Deposit Amount: {selectedChama?.depositAmount}</Typography>
          <Typography>Contribution: {selectedChama?.contributionAmount}</Typography>
          <Typography>Penalty: {selectedChama?.penaltyPercentage}%</Typography>
          <Typography>Max Members: {selectedChama?.maxMembers}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Confirm Join
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default JoinChama;
