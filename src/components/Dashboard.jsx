import React, { useState } from "react"; import { Container, Grid, Card, CardContent, Typography, Button, Avatar, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material"; import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"; import { WhatsApp, Telegram, Twitter, Email, ContentCopy } from "@mui/icons-material"; import ChamaCard from "./ChamaCard";

const Dashboard = () => { const [openSnackbar, setOpenSnackbar] = useState(false); const [openDialog, setOpenDialog] = useState(false);

const user = {
    name: "Quantum Quasar",
    wallet: "0x1234...abcd",
    totalBalance: "5.2 ETH",
    depositHeld: "1.0 ETH",
    nextContribution: "0.2 ETH due in 5 days"
};

const joinedChamas = [
    { name: "Tech Investors", cycle: "Monthly", contribution: "0.5 ETH", penalty: "5%", nextDue: "10 days", total: "2.5 ETH" },
    { name: "Crypto Savers", cycle: "Weekly", contribution: "0.2 ETH", penalty: "3%", nextDue: "3 days", total: "1.8 ETH" }
];

const contributionData = [
    { name: "Jan", amount: 2.5 },
    { name: "Feb", amount: 3.0 },
    { name: "Mar", amount: 3.5 }
];

const pieData = [
    { name: "Held Deposit", value: 1 },
    { name: "Contributions", value: 4.2 }
];
const COLORS = ["#0088FE", "#00C49F"];

const handleShare = () => setOpenDialog(true);
const copyToClipboard = () => {
    navigator.clipboard.writeText(user.wallet);
    setOpenSnackbar(true);
};

return (
    <Container>
        <Grid container spacing={3}>
            {/* User Overview */}
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Avatar sx={{ width: 56, height: 56, mb: 2 }}>Q</Avatar>
                        <Typography variant="h6">{user.name}</Typography>
                        <Typography>
                            Wallet: {user.wallet} 
                            <IconButton size="small" onClick={copyToClipboard}>
                                <ContentCopy fontSize="small" />
                            </IconButton>
                        </Typography>
                        <Typography>Total Balance: {user.totalBalance}</Typography>
                        <Typography>Deposit Held: {user.depositHeld}</Typography>
                        <Typography>Next Contribution: {user.nextContribution}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            
            {/* Active Chamas */}
            <Grid item xs={12} md={8}>
                {joinedChamas.map((chama, index) => (
                    <ChamaCard key={index} chama={chama} />
                ))}
            </Grid>
            
            {/* Analytics */}
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Contribution History</Typography>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={contributionData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="amount" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Funds Allocation</Typography>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie data={pieData} dataKey="value" outerRadius={80} label>
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        
        {/* Invite Members */}
        <Button variant="contained" color="secondary" onClick={handleShare} sx={{ mt: 3 }}>Invite Members</Button>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Invite to Chama</DialogTitle>
            <DialogContent>
                <Typography>Share this link to invite members: <strong>https://chamaapp.io/invite</strong></Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item><IconButton color="primary"><WhatsApp /></IconButton></Grid>
                    <Grid item><IconButton color="secondary"><Telegram /></IconButton></Grid>
                    <Grid item><IconButton color="primary"><Twitter /></IconButton></Grid>
                    <Grid item><IconButton color="primary"><Email /></IconButton></Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Close</Button>
            </DialogActions>
        </Dialog>
        
        {/* Notifications */}
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
            <Alert severity="success">Wallet address copied to clipboard!</Alert>
        </Snackbar>
    </Container>
);

};

export default Dashboard;

