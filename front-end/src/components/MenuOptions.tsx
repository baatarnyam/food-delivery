import { Button, Stack, Typography } from "@mui/material";


const menuFields = [
    {text:"Breakfast"},
    {text:"Soup"},
    {text:"Main Course"},
    {text:"Dessert"}
]

export default function MenuOptions() {
    const handleBreakfast = () =>{
        console.log("breakfast");
        
    }

    return (
    <Stack sx={{ width: "1200px", height: "107px", justifyContent: "center", border: "solid" }}>
        <Stack sx={{ width: "full", height: "43px" }} direction="row" gap={26}>
            {menuFields.map(({text}, index) =>(
                <Typography 
                    key={index}
                    // onClick={handleBreakfast}
                    sx={{
                        width: "300px", height: "full",
                        border: "solid", borderRadius: "8px", boxShadow: 2,
                        borderColor:"gray", borderWidth:"1px",
                        fontSize: "18px", fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color:`${""}`
                    }}
                    
                >
                    {text}
                </Typography>
            ))}
            
       
        </Stack>
    </Stack>
    )
} 