import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component={"img"}
        sx={{ height: "60%", width: "100%" }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p> $ {price} </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined" sx={{
                backgroundColor: '#A9B388',
                color: 'black',
                borderColor: '#A9B388',
                '&:hover': {
                  backgroundColor: '#99a576',
                  borderColor: '#99a576'
                }
              }}>
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
