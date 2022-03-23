import React from "react";
import { Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

import * as Style from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera sx={Style.icon} />
					<Typography variant="h6">Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<Box sx={Style.divStyle}>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
							Photo Album
						</Typography>

						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Circumnavigated tesseract Flatland a very small stage in a vast cosmic arena invent the universe white dwarf. Not a sunrise but a galaxyrise kindling the energy hidden in matter a mote of dust suspended in a sunbeam venture rich in mystery another world?
						</Typography>
						<Box sx={Style.button}>
							<Grid container spacing={2} justifyContent="center">
								<Grid item>
									<Button variant="contained" color="primary">
										See photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</Box>
				<Container maxWidth="md" sx={Style.cardGrid}>
					<Grid container spacing={4}>
						{cards.map(() => (
							<Grid item sx={Style.card} xs={12} sm={6} md={4}>
								<Card>
									<CardMedia
										sx={Style.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent sx={Style.cardContent}>
										<Typography variant="h5" gutterBottom>
											Heading
										</Typography>
										<Typography>
											This is a media card. Add a description here.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											View
										</Button>
										<Button size="small" color="primary">
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			<footer>
				<Container sx={Style.footer} maxWidth="false">
					<Typography variant="h6" align="center">
						Footer
					</Typography>
					<Typography align="center" color="textSecondary">
						This is some footer text.
					</Typography>
				</Container>
			</footer>
		</>
	)
}

export default App;