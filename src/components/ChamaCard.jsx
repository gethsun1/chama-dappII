import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ChamaCard = ({ chama }) => (
    <Card sx={{ mb: 2 }}>
        <CardContent>
            <Typography variant="h6">{chama.name}</Typography>
            <Typography>Cycle: {chama.cycle}</Typography>
            <Typography>Contribution: {chama.contribution}</Typography>
            <Typography>Penalty: {chama.penalty}</Typography>
            <Typography>Next Due: {chama.nextDue}</Typography>
            <Typography>Total Contributions: {chama.total}</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>Contribute Now</Button>
        </CardContent>
    </Card>
);

export default ChamaCard;
