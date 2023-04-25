import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const TitleBar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div">
                    <a href="/" style={{textDecoration:"none", color:"white"}}>Weekly Tech Newsletter</a>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}