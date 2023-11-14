import { Component } from "react";
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

// this.props.policy

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
  }));

export default class Policy extends Component{
    render(){
        return (
            <div class="Policy">
                <Item
                    sx={{
                    my: 1,
                    mx: "auto",
                    p: 2,
                    }}
                >
                <Stack spacing={2} direction="row" alignItems="center">
                    <Avatar>W</Avatar>
                    <Typography noWrap>{this.props.policy.policyName}</Typography>
                    <Button>Add To Cart</Button>
                    <Button>Details</Button>
                </Stack>
                
                </Item>
            </div>
        )
    }
}